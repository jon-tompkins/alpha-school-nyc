/* Alpha NYC — events data. Add events to this array; the calendar reads it directly.
   Schema per event:
   { title, date:"YYYY-MM-DD", end?:"YYYY-MM-DD", start?:"HH:MM", finish?:"HH:MM",
     location?, groups:["LL","L1"] (or ["All"]), notes? }
   Group codes in use: All, WL (WonderLab Pre-K), LL, L1, L2, MS (Middle School), HS (High School).
   Source: Terrence McMullen (Dean of Parents), via Jon. Sorted by date automatically.
*/
window.EVENTS = [
  // ── Parent Office Hours with Terrence (all families) ──
  { title:"Parent Office Hours with Terrence", date:"2026-09-17", start:"13:00", finish:"14:00", groups:["All"],
    notes:"Office hours with Terrence McMullen, Dean of Parents. Also offered 6–7pm the same day. Joining details coming via separate invites." },
  { title:"Parent Office Hours with Terrence", date:"2026-09-17", start:"18:00", finish:"19:00", groups:["All"],
    notes:"Office hours with Terrence McMullen, Dean of Parents. Also offered 1–2pm the same day. Joining details coming via separate invites." },

  // ── Culture Club (all Alpha NYC families; students & relatives welcome; 50 complimentary tickets/event, first come first served; RSVP TBD) ──
  { title:"Culture Club: The Great Gatsby", date:"2026-10-21", start:"19:00", groups:["All"],
    notes:"Culture Club outing. All Alpha NYC families — students & relatives welcome. 50 complimentary tickets, first come first served. RSVP details TBD." },
  { title:"Culture Club: Radio City Tour + Rockettes", date:"2026-11-14", start:"15:15", groups:["All"],
    notes:"Radio City Music Hall tour at 3:15pm, then the Rockettes Christmas Spectacular at 5pm. Students & relatives welcome. 50 complimentary tickets, first come first served. RSVP details TBD." },
  { title:"Culture Club: The Magic Flute", date:"2026-12-17", start:"19:00", groups:["All"],
    notes:"Culture Club outing. Students & relatives welcome. 50 complimentary tickets, first come first served. RSVP details TBD." },
  { title:"Culture Club: Harry Potter and the Cursed Child", date:"2027-01-21", start:"19:00", groups:["All"],
    notes:"Culture Club outing. Students & relatives welcome. 50 complimentary tickets, first come first served. RSVP details TBD." },

  // ── Coffee & Conversations — Thursday group (WL, LL, L1) · 8:45–9:45am · 180 Maiden Lane ──
  { title:"Coffee & Conversations (WL / LL / L1)", date:"2026-10-01", start:"08:45", finish:"09:45", location:"180 Maiden Lane", groups:["WL","LL","L1"], notes:"Informal monthly coffee after drop-off." },
  { title:"Coffee & Conversations (WL / LL / L1)", date:"2026-11-05", start:"08:45", finish:"09:45", location:"180 Maiden Lane", groups:["WL","LL","L1"], notes:"Informal monthly coffee after drop-off." },
  { title:"Coffee & Conversations (WL / LL / L1)", date:"2026-12-03", start:"08:45", finish:"09:45", location:"180 Maiden Lane", groups:["WL","LL","L1"], notes:"Informal monthly coffee after drop-off." },
  { title:"Coffee & Conversations (WL / LL / L1)", date:"2027-01-07", start:"08:45", finish:"09:45", location:"180 Maiden Lane", groups:["WL","LL","L1"], notes:"Informal monthly coffee after drop-off." },
  { title:"Coffee & Conversations (WL / LL / L1)", date:"2027-02-04", start:"08:45", finish:"09:45", location:"180 Maiden Lane", groups:["WL","LL","L1"], notes:"Informal monthly coffee after drop-off." },
  { title:"Coffee & Conversations (WL / LL / L1)", date:"2027-03-04", start:"08:45", finish:"09:45", location:"180 Maiden Lane", groups:["WL","LL","L1"], notes:"Informal monthly coffee after drop-off." },
  { title:"Coffee & Conversations (WL / LL / L1)", date:"2027-04-01", start:"08:45", finish:"09:45", location:"180 Maiden Lane", groups:["WL","LL","L1"], notes:"Informal monthly coffee after drop-off." },
  { title:"Coffee & Conversations (WL / LL / L1)", date:"2027-05-06", start:"08:45", finish:"09:45", location:"180 Maiden Lane", groups:["WL","LL","L1"], notes:"Informal monthly coffee after drop-off." },
  { title:"Coffee & Conversations (WL / LL / L1)", date:"2027-06-03", start:"08:45", finish:"09:45", location:"180 Maiden Lane", groups:["WL","LL","L1"], notes:"Informal monthly coffee after drop-off." },

  // ── Coffee & Conversations — Friday group (L2, Middle School, High School) · 8:45–9:45am · 180 Maiden Lane ──
  { title:"Coffee & Conversations (L2 / MS / HS)", date:"2026-10-02", start:"08:45", finish:"09:45", location:"180 Maiden Lane", groups:["L2","MS","HS"], notes:"Informal monthly coffee after drop-off." },
  { title:"Coffee & Conversations (L2 / MS / HS)", date:"2026-11-06", start:"08:45", finish:"09:45", location:"180 Maiden Lane", groups:["L2","MS","HS"], notes:"Informal monthly coffee after drop-off." },
  { title:"Coffee & Conversations (L2 / MS / HS)", date:"2026-12-04", start:"08:45", finish:"09:45", location:"180 Maiden Lane", groups:["L2","MS","HS"], notes:"Informal monthly coffee after drop-off." },
  { title:"Coffee & Conversations (L2 / MS / HS)", date:"2027-01-08", start:"08:45", finish:"09:45", location:"180 Maiden Lane", groups:["L2","MS","HS"], notes:"Informal monthly coffee after drop-off." },
  { title:"Coffee & Conversations (L2 / MS / HS)", date:"2027-02-05", start:"08:45", finish:"09:45", location:"180 Maiden Lane", groups:["L2","MS","HS"], notes:"Informal monthly coffee after drop-off." },
  { title:"Coffee & Conversations (L2 / MS / HS)", date:"2027-03-05", start:"08:45", finish:"09:45", location:"180 Maiden Lane", groups:["L2","MS","HS"], notes:"Informal monthly coffee after drop-off." },
  { title:"Coffee & Conversations (L2 / MS / HS)", date:"2027-04-02", start:"08:45", finish:"09:45", location:"180 Maiden Lane", groups:["L2","MS","HS"], notes:"Informal monthly coffee after drop-off." },
  { title:"Coffee & Conversations (L2 / MS / HS)", date:"2027-05-07", start:"08:45", finish:"09:45", location:"180 Maiden Lane", groups:["L2","MS","HS"], notes:"Informal monthly coffee after drop-off." },
  { title:"Coffee & Conversations (L2 / MS / HS)", date:"2027-06-04", start:"08:45", finish:"09:45", location:"180 Maiden Lane", groups:["L2","MS","HS"], notes:"Informal monthly coffee after drop-off." },

  // ── Academic calendar 2026–2027 (all-day: first/last day, sessions, breaks/no-school, MAP testing, 12pm dismissals) ──
  { title:"First Day of School", date:"2026-09-08", groups:["All"] },
  { title:"MAP Testing", date:"2026-09-15", end:"2026-09-18", groups:["All"] },
  { title:"Fall MAP Retesting", date:"2026-09-21", end:"2026-09-25", groups:["All"] },
  { title:"Session 1 Ends / Dismissal at 12 Noon", date:"2026-10-16", groups:["All"] },
  { title:"Session 2 Starts", date:"2026-10-19", groups:["All"] },
  { title:"Thanksgiving Break (No School)", date:"2026-11-23", end:"2026-11-27", groups:["All"] },
  { title:"Session 2 Ends / Dismissal at 12 Noon", date:"2026-12-18", groups:["All"] },
  { title:"Session Break (No School)", date:"2026-12-21", end:"2027-01-01", groups:["All"] },
  { title:"Session 3 Starts", date:"2027-01-04", groups:["All"] },
  { title:"No School / MLK Day", date:"2027-01-18", groups:["All"] },
  { title:"Winter MAP Retesting", date:"2027-02-01", end:"2027-02-05", groups:["All"] },
  { title:"Session 3 Ends / Dismissal at 12 Noon", date:"2027-02-19", groups:["All"] },
  { title:"Session Break (No School)", date:"2027-02-22", end:"2027-02-23", groups:["All"] },
  { title:"Session 4 Starts", date:"2027-02-24", groups:["All"] },
  { title:"Session 4 Ends / Dismissal at 12 Noon", date:"2027-04-16", groups:["All"] },
  { title:"Session Break (No School)", date:"2027-04-19", end:"2027-04-23", groups:["All"] },
  { title:"Session 5 Starts", date:"2027-04-26", groups:["All"] },
  { title:"Spring MAP Testing", date:"2027-05-18", end:"2027-05-21", groups:["All"] },
  { title:"Spring MAP Retesting", date:"2027-05-24", end:"2027-05-28", groups:["All"] },
  { title:"No School / Memorial Day", date:"2027-05-31", groups:["All"] },
  { title:"Last Day / Session 5 Ends / Dismissal at 12 Noon", date:"2027-06-18", groups:["All"] },

  // ── From parent emails (auto-ingested, Jon-approved) ──
  { title:"Picture Day", date:"2026-10-07", groups:["L1","L2","MS","HS"], notes:"Picture day for L1, L2, Middle School, and High School. Source: Terrence via Alpha Community.", url:"https://www.community.alpha.school/community/post/cp-bac235f1-c264-4e71-b57b-d5e205e0ca6d" },
  { title:"WonderLab Showcase (Pre-K)", date:"2026-10-16", start:"09:00", finish:"10:00", location:"180 Maiden Lane, 7th floor", groups:["WL"], notes:"End of Session 1 Alpha Showcase. Pre-K parents are welcome to stay after drop-off until the Showcase starts at 9am.", url:"https://www.community.alpha.school/community/post/cp-1c4182b6-db42-49e8-bcde-0c12ea3a9fa0" },
  { title:"WonderLab Showcase (Kindergarten)", date:"2026-10-16", start:"11:00", finish:"12:00", location:"180 Maiden Lane, 7th floor", groups:["WL"], notes:"End of Session 1 Alpha Showcase.", url:"https://www.community.alpha.school/community/post/cp-1c4182b6-db42-49e8-bcde-0c12ea3a9fa0" },
  { title:"Middle School Showcase", date:"2026-10-21", start:"16:00", finish:"17:30", location:"180 Maiden Lane, 6th floor", groups:["MS"], notes:"End of Session 1 Alpha Showcase. Students stay after school (no dismissal for pickup) — parents can just come at 4pm.", url:"https://www.community.alpha.school/community/post/cp-1c4182b6-db42-49e8-bcde-0c12ea3a9fa0" },
  { title:"LL Showcase", date:"2026-10-23", start:"13:00", finish:"15:00", location:"180 Maiden Lane, 2nd floor", groups:["LL"], notes:"End of Session 1 Alpha Showcase. When parents arrive, staff will bring you up to the 2nd floor.", url:"https://www.community.alpha.school/community/post/cp-1c4182b6-db42-49e8-bcde-0c12ea3a9fa0" },
  { title:"L1 Showcase", date:"2026-10-27", start:"16:00", finish:"17:30", location:"180 Maiden Lane, 6th floor", groups:["L1"], notes:"End of Session 1 Alpha Showcase. Students stay after school (no dismissal for pickup) — parents can just come at 4pm.", url:"https://www.community.alpha.school/community/post/cp-1c4182b6-db42-49e8-bcde-0c12ea3a9fa0" },
  { title:"L2 Showcase", date:"2026-10-28", start:"16:00", finish:"17:30", location:"180 Maiden Lane, 6th floor", groups:["L2"], notes:"End of Session 1 Alpha Showcase. Students stay after school (no dismissal for pickup) — parents can just come at 4pm.", url:"https://www.community.alpha.school/community/post/cp-1c4182b6-db42-49e8-bcde-0c12ea3a9fa0" },
  { title:"Alpha NYC Musical — Interest Meeting", date:"2026-10-09", start:"15:30", finish:"16:00", groups:["All"], notes:"Interest meeting only — attending doesn't commit you, and students who can't make it can still participate. Pick up at 4pm.", url:"https://www.community.alpha.school/community/post/cp-1c4182b6-db42-49e8-bcde-0c12ea3a9fa0" },
];

// Announced but not yet dated — shown in a "Still to be scheduled" note on the page.
window.TBD = [
  "More Culture Club outings (Feb–Jun)",
  "AlphaTest Showcase",
  "Halloween celebration",
  "Ice skating",
  "Ski weekend"
];
