# Facebook Groups Home

A lightweight browser extension that replaces Facebook's home page with the Groups Feed.

It automatically redirects:

- `https://www.facebook.com/` to `https://www.facebook.com/groups/feed/`
- Facebook Home links to the Groups Feed

## Download

1. Open this repository on GitHub.
2. Click the green **Code** button.
3. Select **Download ZIP**.
4. Extract the downloaded ZIP file.
5. Keep the extracted folder intact; it contains `manifest.json` and `content.js`.

## Installation

### Microsoft Edge

1. Open `edge://extensions/`.
2. Enable **Developer mode**.
3. Click **Load unpacked**.
4. Select the `fbgroups` folder.

### Google Chrome

1. Open `chrome://extensions/`.
2. Enable **Developer mode**.
3. Click **Load unpacked**.
4. Select the `fbgroups` folder.

## Updating

After changing the extension files, open the browser's extensions page and click **Reload** on **Facebook Groups Home**.

## Files

- `manifest.json` – Extension metadata and configuration
- `content.js` – Redirect logic
