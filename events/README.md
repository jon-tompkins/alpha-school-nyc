# Adding events to the Alpha NYC Parent Hub calendar

The events calendar at **https://alphanycparents.xyz/events** reads a single file:

```
events/events.js   →   window.EVENTS = [ ...event objects... ]
```

To add events, append event objects to that array and commit to **`main`**. The site
auto-deploys (GitHub Pages) in ~1 minute. Order doesn't matter — the calendar sorts by date.

## Event object schema

```js
{
  title:   "Culture Club: The Great Gatsby",   // required
  date:    "2026-10-21",                        // required — YYYY-MM-DD (start day), US Eastern
  start:   "19:00",                             // optional — 24h time; OMIT for an all-day event
  finish:  "20:30",                             // optional — end time
  end:     "2026-11-16",                        // optional — YYYY-MM-DD for a multi-day event
  location:"180 Maiden Lane",                   // optional
  groups:  ["All"],                             // audience tags (see below); use ["All"] for everyone
  notes:   "50 complimentary tickets…",         // optional — shown under the event
  url:     "https://…/rsvp"                     // optional — renders a "Details / RSVP" button
}
```

**Group codes:** `All`, `WL` (WonderLab Pre-K), `LL`, `L1`, `L2`, `MS` (Middle School), `HS` (High School).
Each becomes a color-coded, filterable tag. Use any combination, e.g. `["WL","LL","L1"]`.

**Notes**
- It's JavaScript — **trailing commas are fine**, so you can safely append an object right before the closing `];` and always end it with a comma.
- Keep the file valid JS (matched quotes/braces). That's the only requirement.
- For events with no time, omit `start` (it shows as "All day").

## How to commit (agent instructions)

The repo is public. Writes need a token with **Contents: Read and write** on this repo
(a GitHub fine-grained PAT works).

**Git:**
```bash
git clone https://x-access-token:<TOKEN>@github.com/jon-tompkins/alpha-school-nyc.git
# edit events/events.js — insert your event object(s) into the window.EVENTS array
git commit -am "events: add <what>" && git push
```

**Or GitHub Contents API:** `GET /repos/jon-tompkins/alpha-school-nyc/contents/events/events.js`
(returns base64 `content` + `sha`) → decode, insert your object(s) into the array →
`PUT` the same path with the new base64 `content`, the `sha`, and a commit `message`.

There's also a `window.TBD = [ "…" ]` array at the bottom for announced-but-undated items.
