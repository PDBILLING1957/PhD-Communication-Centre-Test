PhD COMMUNICATION CENTRE — VERSION 1.1 TEST PACKAGE
===================================================

This is a new consolidated test build. It is not a production-certified system.
It is deliberately local-first and does not connect to Firebase, a cloud database,
the former IPIM application, or any third-party backend.

FILES
-----
index.html                 App shell
app.js                     Application logic
manifest.webmanifest       Installable web-app metadata
sw.js                      Basic offline shell cache
README.txt                 This guide

WHAT IS INCLUDED
----------------
- Responsive Home / Control Centre module directory.
- Local contact directory with one relationship category per contact.
- Duplicate warning for matching name/company or phone number.
- Archive contacts without deleting their histories.
- User-named broadcast lists with persistent multi-select membership.
- A contact can be in multiple lists.
- Individual and broadcast message preparation with locked prepared snapshots.
- Multiple attachment selection stored in the prepared message record.
- Recipient-by-recipient WhatsApp handoff; opening handoff is NOT recorded as sent.
- Outgoing handoffs automatically create a Communication Log entry marked
  "Handoff Opened — Not Confirmed Sent".
- Incoming/outgoing manual Communication Log with channel, endpoint, time,
  content, status and optional business reference.
- Plan Visit, Planned Visits and Visit History views.
- One active planned visit per contact; complete/cancel before creating another.
- Follow-ups, basic reports and audit trail.
- JSON backup/restore and contacts CSV export.
- Reset local test data with two confirmations.

IMPORTANT LIMITATIONS — PLEASE READ
-----------------------------------
1. DATA IS LOCAL TO EACH DEVICE/BROWSER. iPhone, iPad and Surface do not sync
   automatically. Use JSON Backup / Transfer to move a copy manually.
2. This is a local test workspace, not a secured multi-user production system.
   No production login, employee permission engine, encrypted database,
   encrypted backup, device revocation or remote administration is implemented.
3. WhatsApp / WhatsApp Business handoff uses a user-controlled wa.me link.
   It does not silently send messages, confirm delivery/read, or read incoming
   WhatsApp messages. The user must review and press Send in WhatsApp.
4. Attachment selection and local message snapshot are included, but reliable
   media handoff to WhatsApp/email varies by browser and operating system.
   This test build does not guarantee that selected files will be attached
   automatically to the external message.
5. Incoming WhatsApp, email, SMS and call records must be entered/imported by
   the user. No universal inbox/call-history capture is technically available
   to an ordinary web app across iOS, Android, Windows and macOS.
6. GPS, live road routing, maps, OCR/business-card scanning, native phonebook
   access, email account connection, SMS gateway, official WhatsApp Business
   Platform/API, cross-device sync and automatic intelligent filing are not
   implemented in this test package.
7. The prepared message is retained as a snapshot, but owner approval,
   enterprise-grade immutable storage and cryptographic audit protection are
   not implemented.
8. Browser localStorage has storage limits and may be cleared by browser/device
   settings. Export backups frequently. The JSON backup is NOT encrypted.
9. Do not enter actual customer, supplier, employee, personal or confidential
   information until security, storage, backup and restore have been reviewed.

HOW TO TEST
-----------
1. Extract the ZIP.
2. Upload the files in this folder to the root of the GitHub Pages repository.
3. Open the published HTTPS address. If an older version appears, close the
   installed app/browser tab and reopen; service-worker cache may take a moment.
4. Begin with fictional test contacts only.
5. Add the site to the iPhone/iPad Home Screen if desired.
6. Each device starts with its own empty database. This is expected.
7. Test Backup / Transfer by exporting a JSON file and restoring it on a
   separate test device/browser. Verify counts and records before relying on it.

SUGGESTED RESTART TEST
----------------------
A. Create two fictional contacts with phone numbers.
B. Try saving a duplicate and verify it is rejected with a clear warning.
C. Create one broadcast list and select both contacts. Verify the count is 2.
D. Create a broadcast message and prepare it. Review recipients and open
   handoff one by one. Do not assume handoff means sent.
E. Check Communication Log and verify separate recipient entries.
F. Add an incoming message manually and verify its contact/channel/endpoint.
G. Plan a visit for a contact; try creating a second active visit for the same
   contact and verify the app blocks it.
H. Complete/cancel the visit and verify it appears in Visit History.
I. Export a backup and test restore on another browser/device.

VERSION
-------
PhD Communication Centre V1.1.1 — corrected contact-save test build.
Contact form saving now uses explicit field lookup, visible error handling, and a refreshed offline cache version.
No external service or paid subscription is required for the included local
functions. Any future integration or paid service must be assessed and approved
separately by the owner.
