/* Alpha NYC — events data. Add events to this array; the calendar reads it directly.
   Schema per event:
   {
     title:   "Culture Club",              // required
     date:    "2026-09-20",                // required, YYYY-MM-DD (start day)
     end:     "2026-09-22",                // optional, multi-day end (YYYY-MM-DD)
     start:   "18:00",                     // optional time (24h); omit for all-day
     finish:  "20:00",                     // optional end time
     location:"180 Maiden Lane",           // optional
     groups:  ["LL","L1"],                 // audience tags; use ["All"] for everyone
     notes:   "Details for parents…"       // optional
   }
   Newest additions can go anywhere — the calendar sorts by date.
*/
window.EVENTS = [
  // Jon will send events; they get added here.
];
