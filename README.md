# Vet Tx Handbook

Mobile-first public viewer for veterinary treatment protocols.

## Architecture

- **Public frontend:** GitHub Pages
- **Data source:** Google Sheet through a deployed Google Apps Script web app
- **Images:** Google Drive category subfolders
- **Admin panel:** Private Google Apps Script admin URL only
- **Public viewer:** No admin link or admin key is included

## Configure the public API

Open `config.js` and replace the placeholder with the deployed Apps Script `/exec` URL:

```js
window.VET_TX_CONFIG = {
  API_URL: 'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec'
};
```

Use only the base `/exec` URL without query parameters.

## Enable GitHub Pages

1. Open repository **Settings**.
2. Open **Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**.
4. Select branch **main** and folder **/ (root)**.
5. Save.

Expected public URL:

```text
https://lostinfrequencies369.github.io/Vet-Tx-Handbook/
```

## Included interface features

- Fixed top banner
- Admin-managed organ-system thumbnails
- Mobile-optimized treatment cards
- Search by disease, treatment, drug, tags or organ system
- Fixed Back, Home and Forward controls
- Action-specific loading and Please wait states
- High-resolution protocol preview
- Published records only on the public viewer

## Admin access

The admin panel remains on Google Apps Script and is not linked from this repository. Its URL follows this format:

```text
APPS_SCRIPT_EXEC_URL?page=admin&key=YOUR_ADMIN_KEY
```
