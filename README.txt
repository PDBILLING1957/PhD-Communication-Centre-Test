PhD COMMUNICATION CENTRE – COMPLETE TEST BUILD 1.0
===================================================

CONTENTS
- index.html: application screen and styling
- app.js: local database and application functions
- sw.js: offline app-shell cache
- manifest.webmanifest: installable web-app metadata

IMPORTANT
This is a substantially expanded local testing build, not a certified production release.
Use fictional test data only. The app stores its records in this browser on this device.
It does NOT provide automatic iPhone–iPad–Surface synchronisation, cloud storage, OCR,
bulk WhatsApp sending, WhatsApp history import, road routing, employee authentication,
or production-grade encryption. Use Backup / Transfer to move data manually.

HOW TO RUN
1. Extract this ZIP.
2. Publish the folder contents on an HTTPS static host (for example a NEW separate
   GitHub Pages repository). Do not overwrite the IPIM repository.
3. Open the published HTTPS address in Safari on iPhone/iPad.
4. Use Share > Add to Home Screen if you want an app-like icon.
5. Open the app once while online so the service worker can cache its app files.
6. Add fictional test records and test offline after the first successful load.

MODULES INCLUDED
Control Centre, Phone Book, multiple contact categories/phone/email details,
Locations and confirmed GPS capture, Visit Planner/status tracking, Broadcast Lists,
Message Studio and user-controlled WhatsApp/email/SMS handoff, Communication Log,
Reports/CSV, complete JSON backup and duplicate-aware manual import, device label.

SAFETY
- WhatsApp handoff opening is not proof of sending. User must press Send.
- GPS requires explicit browser permission.
- Deleting a visit/list/location is a local action; archived contacts retain history.
- Do not clear Safari website data unless you have a separate backup.
- Keep backups in a separate safe location and test restoration.

TEST CHECKLIST
[ ] App opens in Safari over HTTPS
[ ] Add, edit, search and archive a test contact
[ ] Duplicate contact save is declined
[ ] Add location; try GPS permission and confirm coordinates before saving
[ ] Add visit and change its status
[ ] Create a broadcast list
[ ] Prepare and lock a message; open WhatsApp handoff and verify Send is manual
[ ] Add communication log
[ ] Review reports and export CSV
[ ] Export JSON backup; import it on a second device
[ ] Confirm imported records do not duplicate
[ ] Load app once online, then test opening it offline
[ ] Keep the backup; do not rely on sync in this build

The build is designed for testing and feedback. Passing these checks does not by itself
establish production readiness or prove secure multi-device synchronisation.
