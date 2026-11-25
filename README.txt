PhD COMMUNICATION CENTRE — VERSION 1.1.4 MERGED TEST PACKAGE
===========================================================

This is a local-first TEST build. It is not production-certified and must not
be used for real confidential business or personal information.

WHAT THIS PACKAGE DOES
----------------------
This package uses V1.1.2 as its feature-complete foundation and applies selected
robustness and deployment updates from the V1.1.3 review. It deliberately keeps
the original local database key: phd_cc_v11.

Preserved modules and functions:
- Home / Control Centre
- Companies & Contacts, sequential Contact IDs, duplicate checks, edit/archive
- Flexible owner-created broadcast lists and membership editing
- Individual and broadcast message preparation
- Multiple attachments stored with prepared messages
- Recipient-by-recipient WhatsApp handoff (handoff is not treated as sent)
- Communication Log
- Plan Visit, Planned Visits, Visit History and visit outcome logging
- Follow-ups and Reports
- JSON backup/restore, contacts CSV export and Settings

V1.1.4 changes:
- Submit handling is delegated in the capture phase, including the contact form.
- Contact save continues to verify the saved record in local storage before
  showing a success message; failures display an error.
- Existing local state is normalised defensively when older records are loaded
  or a backup is restored (including contacts, phone and email arrays).
- Service-worker cache and script versions are aligned to V1.1.4, with an
  explicit update check to reduce stale-app problems.
- The original V1.1.2 features omitted from V1.1.3 have been retained.

DATA PRESERVATION — IMPORTANT
-----------------------------
The application continues to use localStorage key phd_cc_v11 and does not
intentionally clear it. Nevertheless, download a JSON backup from the current
app BEFORE replacing any deployed files. Each device/browser has its own local
data. There is no automatic sync between iPhone, iPad and Surface.

INSTALLING THROUGH GITHUB
-------------------------
1. First use the current app's Backup / Transfer page and download a JSON
   backup. Keep that backup somewhere safe.
2. Extract this ZIP on a computer if possible. Upload/replace these five files
   in the repository root: index.html, app.js, manifest.webmanifest, sw.js,
   README.txt. Do not upload the ZIP itself as a substitute for the five files.
3. Wait for GitHub Pages to publish, then close the old app/browser tab fully.
4. Reopen the published site. If the old version still appears, close it again
   and reopen after a short wait; the new service worker requests an update.
5. Use fictional test records. First create one contact, confirm its success
   message and Contact ID, then refresh and verify it remains in the list.
6. Test broadcast lists, attachments, visit outcomes, backup and restore.

TEST STATUS / HONEST LIMITATIONS
--------------------------------
Static checks performed for this package: JavaScript syntax check, manifest
JSON parse, HTML-to-script/manifest references, service-worker version
references, and ZIP contents. These checks do NOT prove browser runtime
behaviour. This package has not been tested on the user's iPhone, iPad or
Surface. In particular, the original contact-save failure has not yet been
reproduced on those devices; V1.1.4 adds capture-phase submit handling and
visible storage verification to address that failure mode.

This remains a local test workspace. It does not provide production login,
encrypted local storage or backups, employee role controls, device revocation,
remote administration, automatic cross-device sync, WhatsApp inbox reading,
message delivery/read confirmation, email inbox connection, or call
interception. WhatsApp handoff opens a user-controlled wa.me link. Attachments
are retained in the prepared message record, but handing media to WhatsApp or
other apps depends on the browser and operating system.

Do not enter real customer, supplier, employee, personal or confidential data.
