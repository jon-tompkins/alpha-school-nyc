/**
 * Alpha NYC — Chess Club interest store (Google Apps Script Web App)
 * ------------------------------------------------------------------
 * Backs the shared list on /clubs/chess/. Data lives in YOUR Google Sheet.
 *
 * SETUP (one time, ~2 min):
 *  1. Create a Google Sheet (any name, e.g. "Alpha NYC — Chess Interest").
 *  2. Extensions → Apps Script. Delete the sample code, paste this whole file.
 *  3. Deploy → New deployment → gear icon → "Web app".
 *       Execute as: Me   ·   Who has access: Anyone
 *     Deploy, then authorize when prompted.
 *  4. Copy the "Web app URL" (it ends in /exec) and send it to Benji.
 *
 * The sheet auto-creates a "Responses" tab with headers: id | name | grade | days | at
 */
var SHEET_NAME = "Responses";

function sheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(["id", "name", "grade", "days", "at"]);
  }
  return sh;
}

function readAll_() {
  var sh = sheet_();
  var v = sh.getDataRange().getValues();
  var out = [];
  for (var i = 1; i < v.length; i++) {
    if (!v[i][0] && !v[i][1]) continue;
    out.push({
      id: String(v[i][0]),
      name: v[i][1],
      level: v[i][2], // "grade" value (LL/L1/L2/M)
      days: String(v[i][3] || "").split(",").filter(Boolean),
      at: Number(v[i][4]) || 0
    });
  }
  return out;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return json_({ responses: readAll_() });
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  try { lock.waitLock(5000); } catch (err) {}
  try {
    var body = {};
    try { body = JSON.parse(e.postData.contents); } catch (err) {}
    var sh = sheet_();
    if (body.action === "add" && body.record) {
      var r = body.record;
      sh.appendRow([
        String(r.id || Date.now()),
        String(r.name || "").slice(0, 60),
        String(r.level || ""),
        (r.days || []).join(","),
        Number(r.at) || Date.now()
      ]);
    } else if (body.action === "delete" && body.id) {
      var v = sh.getDataRange().getValues();
      for (var i = v.length - 1; i >= 1; i--) {
        if (String(v[i][0]) === String(body.id)) sh.deleteRow(i + 1);
      }
    }
    return json_({ responses: readAll_() });
  } finally {
    try { lock.releaseLock(); } catch (err) {}
  }
}
