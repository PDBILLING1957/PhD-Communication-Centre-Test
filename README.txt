PhD COMMUNICATION CENTRE — VERSION 1.1.2 TEST PACKAGE
====================================================

This is a local-first test build, not a production-certified system. It does not
connect to Firebase, a cloud database, the former IPIM application, or any
third-party backend.

FILES
-----
index.html                 App shell
app.js                     Application logic
manifest.webmanifest       Installable web-app metadata
sw.js                      Offline shell cache
README.txt                 This guide

V1.1.2 CHANGES
--------------
- Sequential visible Contact IDs are generated: CON-000001, CON-000002, etc.
- Contact IDs appear on saved contact cards and in contact selection lists.
- Editing a contact retains its existing Contact ID.
- Existing contacts without a Contact ID are assigned one during local-data load.
- Contact IDs are included in JSON backup data and the contacts CSV export.
- Contact save now verifies the written localStorage record before showing success.
- Contact-save failures show an error rather than a success message.
- Existing local database key remains phd_cc_v11; no deliberate database reset.
- HTML, JavaScript and service-worker cache version references are aligned to 1.1.2.

FEATURES RETAINED IN THIS TEST BUILD
------------------------------------
- Responsive Home / Control Centre module directory.
- Local contact directory with one relationship category per contact.
- Duplicate warning for matching name/company or phone number.
- Archive contacts without deleting their histories.
- User-named broadcast lists with persistent multi-select membership.
- A contact can be in multiple lists.
- Individual and broadcast message preparation with locked prepared snapshots.
- Multiple attachment selection stored in the prepared message record.
- Recipient-by-recipient WhatsApp handoff; opening handoff is NOT recorded as sent.
- Communication Log, Plan Visit, Planned Visits, Visit History, Follow-ups,
  Reports, JSON backup/restore, contacts CSV export and Settings.

IMPORTANT LIMITATIONS
---------------------
1. Data is local to each device/browser. iPhone, iPad and Surface do not sync
   automatically. Use JSON Backup / Transfer to move a copy manually.
2. This is a local test workspace, not a secured multi-user production system.
   No production login, employee permission engine, encrypted database,
   encrypted backup, device revocation or remote administration is implemented.
3. WhatsApp handoff uses a user-controlled wa.me link. It does not silently send
   messages, confirm delivery/read, or read incoming WhatsApp messages.
4. Attachment selection is stored in the prepared message record, but reliable
   media handoff to WhatsApp/email varies by browser and operating system.
5. Incoming WhatsApp, email, SMS and call records must be entered/imported by
   the user. No universal inbox/call-history capture is available to an ordinary
   web app across all devices.
6. GPS, live routing, maps, OCR/business-card scanning, native phonebook access,
   email account connection, SMS gateway, official WhatsApp Business API,
   cross-device sync and automatic intelligent filing are not implemented.
7. Browser localStorage has storage limits and may be cleared by browser/device
   settings. Export backups frequently. JSON backups are NOT encrypted.
8. Do not enter actual customer, supplier, employee, personal or confidential
   information until security, storage, backup and restore have been reviewed.

DATA PRESERVATION
-----------------
The app continues to use the existing localStorage key phd_cc_v11. V1.1.2 does
not intentionally clear this data. However, always export a JSON backup before
replacing the deployed files. Each device/browser has its own separate local
database; GitHub Pages does not contain the browser's locally stored records.

HOW TO TEST
-----------
1. Download and extract this ZIP.
2. Export a JSON backup from the current app before replacing deployed files.
3. Upload all five files from this package to the root of the GitHub Pages repo,
   replacing the five existing files.
4. Open the published HTTPS address. Close the old installed app/browser tab,
   then reopen the site so the new service-worker cache can activate.
5. Use fictional test contacts only.
6. Create a contact and verify that its ID appears as CON-000001 (or the next
   available number). Edit it and confirm the ID remains unchanged.
7. Export contacts CSV and verify the Contact ID column.
8. Test the other modules using fictional data.

TEST-BUILD WARNING
------------------
This package has not been device-tested in your iPhone/iPad/Surface browsers.
Please test it before relying on it. Keep your backup. Do not use real
confidential business data in this test release.
