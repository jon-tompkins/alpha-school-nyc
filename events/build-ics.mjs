#!/usr/bin/env node
/* Alpha NYC — build an iCalendar (.ics) feed from events.js.
   Reads events/events.js (window.EVENTS), writes events/alpha.ics.
   Parents subscribe to the hosted URL (https://alphanycparents.xyz/events/alpha.ics).
   All times are America/New_York. Run after any events.js change:  node events/build-ics.mjs
*/
import { readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const SRC = join(here, "events.js");
const OUT = join(here, "alpha.ics");

// --- load events.js in a tiny sandbox ---
const code = readFileSync(SRC, "utf8");
const sandbox = { window: {} };
new Function("window", code)(sandbox.window);
const EVENTS = sandbox.window.EVENTS || [];

// --- helpers ---
const pad = (n) => String(n).padStart(2, "0");
const esc = (s) =>
  String(s == null ? "" : s)
    .replace(/\\/g, "\\\\")
    .replace(/;/g, "\\;")
    .replace(/,/g, "\\,")
    .replace(/\r?\n/g, "\\n");

// fold lines at 75 octets per RFC 5545
function fold(line) {
  const bytes = Buffer.from(line, "utf8");
  if (bytes.length <= 75) return line;
  let out = "";
  let i = 0;
  while (i < bytes.length) {
    const take = i === 0 ? 75 : 74; // continuation lines get a leading space
    const chunk = bytes.subarray(i, i + take).toString("utf8");
    out += (i === 0 ? "" : "\r\n ") + chunk;
    i += take;
  }
  return out;
}

const ymd = (d) => d.replace(/-/g, ""); // 2026-10-07 -> 20261007
function plusOneDay(dstr) {
  const [y, m, d] = dstr.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  dt.setUTCDate(dt.getUTCDate() + 1);
  return `${dt.getUTCFullYear()}${pad(dt.getUTCMonth() + 1)}${pad(dt.getUTCDate())}`;
}
function addHour(hhmm) {
  let [h, m] = hhmm.split(":").map(Number);
  h = (h + 1) % 24;
  return `${pad(h)}${pad(m)}00`;
}
const hms = (hhmm) => hhmm.replace(":", "") + "00";

function uidFor(e) {
  const basis = `${e.date}|${e.start || "allday"}|${e.title}`;
  return createHash("sha1").update(basis).digest("hex").slice(0, 20) + "@alphanycparents.xyz";
}

const DTSTAMP = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");

// America/New_York VTIMEZONE (handles EST/EDT)
const VTZ = [
  "BEGIN:VTIMEZONE",
  "TZID:America/New_York",
  "X-LIC-LOCATION:America/New_York",
  "BEGIN:DAYLIGHT",
  "TZOFFSETFROM:-0500",
  "TZOFFSETTO:-0400",
  "TZNAME:EDT",
  "DTSTART:19700308T020000",
  "RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU",
  "END:DAYLIGHT",
  "BEGIN:STANDARD",
  "TZOFFSETFROM:-0400",
  "TZOFFSETTO:-0500",
  "TZNAME:EST",
  "DTSTART:19701101T020000",
  "RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU",
  "END:STANDARD",
  "END:VTIMEZONE",
];

function describe(e) {
  const parts = [];
  const g = (e.groups || []).join(", ");
  if (g && g !== "All") parts.push(`For: ${g}`);
  if (e.notes) parts.push(e.notes);
  if (e.url) parts.push(`Details / post: ${e.url}`);
  return parts.join("\n");
}

const lines = [
  "BEGIN:VCALENDAR",
  "VERSION:2.0",
  "PRODID:-//Alpha NYC Parents//Events//EN",
  "CALSCALE:GREGORIAN",
  "METHOD:PUBLISH",
  "X-WR-CALNAME:Alpha NYC Parents",
  "X-WR-TIMEZONE:America/New_York",
  "REFRESH-INTERVAL;VALUE=DURATION:PT1H",
  "X-PUBLISHED-TTL:PT1H",
  ...VTZ,
];

const sorted = [...EVENTS].sort((a, b) =>
  (a.date + (a.start || "")).localeCompare(b.date + (b.start || ""))
);

for (const e of sorted) {
  if (!e.date || !e.title) continue;
  lines.push("BEGIN:VEVENT");
  lines.push(`UID:${uidFor(e)}`);
  lines.push(`DTSTAMP:${DTSTAMP}`);
  if (e.start) {
    lines.push(`DTSTART;TZID=America/New_York:${ymd(e.date)}T${hms(e.start)}`);
    const endt = e.finish ? hms(e.finish) : addHour(e.start);
    lines.push(`DTEND;TZID=America/New_York:${ymd(e.date)}T${endt}`);
  } else {
    lines.push(`DTSTART;VALUE=DATE:${ymd(e.date)}`);
    lines.push(`DTEND;VALUE=DATE:${plusOneDay(e.end || e.date)}`);
  }
  lines.push(`SUMMARY:${esc(e.title)}`);
  const desc = describe(e);
  if (desc) lines.push(`DESCRIPTION:${esc(desc)}`);
  if (e.location) lines.push(`LOCATION:${esc(e.location)}`);
  lines.push("STATUS:CONFIRMED");
  lines.push("END:VEVENT");
}

lines.push("END:VCALENDAR");

const ics = lines.map(fold).join("\r\n") + "\r\n";
writeFileSync(OUT, ics, "utf8");
console.log(`Wrote ${OUT} — ${sorted.length} events, ${Buffer.byteLength(ics)} bytes`);
