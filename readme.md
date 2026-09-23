# Google Weeb

A minimalist new tab extension featuring a live clock, date, and rotating quotes.  
Here the example  [Demo](https://aira-isla.github.io/weeb/).

---

## ✨ Features

- Live clock with AM/PM
- Current date display
- Rotating quotes on each new tab
- Clean Google-style search bar
- Replaces the browser new tab page

---

## 📁 Project Files

Make sure you download all files:

```text
index.html
manifest.json
background.js
icon.png
css/
  custom.css
js/
  main.js
```

---

## 🚀 How to Use

### 1. Download All Files

Download or clone this project.  
Keep the folder structure exactly as shown above.

### 2. Compress to ZIP

1. Select all files and folders.
2. Right-click → **Compress** / **Send to** → **Compressed (zipped) folder**.
3. Make sure `manifest.json` is at the **root** of the ZIP file, not inside a subfolder.

Example:

```text
google-weeb.zip
├── manifest.json
├── index.html
├── background.js
├── icon.png
├── css/
└── js/
```

---

## 🌐 Install on Chromium Browsers

Supported: Chrome, Edge, Brave, Opera, Vivaldi.

### Option A — Load Unpacked (Recommended)

1. Extract the ZIP file.
2. Open your browser and go to: `chrome://extensions`
3. Enable **Developer mode** (top-right toggle).
4. Click **Load unpacked**.
5. Select the extracted folder that contains `manifest.json`.

The extension will now override your new tab page.

### Option B — Rename ZIP to CRX (Quick Method)

1. Rename `google-weeb.zip` to `google-weeb.crx`.
2. Open `chrome://extensions`.
3. Enable **Developer mode**.
4. Drag and drop the `.crx` file into the page.

> ⚠️ Note: Modern Chrome may block unsigned `.crx` files. If it fails, use **Load unpacked** instead.

---

## 🦊 Install on Firefox

Supported: Firefox, Firefox Developer Edition.

### Option A — Load Temporary Add-on (Recommended)

1. Extract the ZIP file.
2. Open Firefox and go to: `about:debugging`
3. Click **This Firefox** in the left sidebar.
4. Click **Load Temporary Add-on…**
5. Select `manifest.json` from the extracted folder.

The extension will be active until Firefox is restarted.

### Option B — Rename ZIP to XPI (Quick Method)

1. Rename `google-weeb.zip` to `google-weeb.xpi`.
2. Open Firefox and go to: `about:addons`
3. Click the gear icon ⚙️ → **Install Add-on From File…**
4. Select the `.xpi` file.

> ⚠️ Note: Permanent installation requires the extension to be signed by Mozilla. Unsigned `.xpi` files can only be installed temporarily via `about:debugging`.

---

## 🛠️ Development

### Manifest Overview

This project uses **Manifest V3**.

```json
{
  "manifest_version": 3,
  "name": "Google Weeb",
  "version": "2.0",
  "description": "A minimalist new tab extension.",
  "chrome_url_overrides": {
    "newtab": "index.html"
  },
  "background": {
    "service_worker": "background.js"
  },
  "permissions": ["activeTab", "storage"],
  "icons": {
    "16": "icon.png",
    "48": "icon.png",
    "128": "icon.png"
  }
}
```

To customize the new tab page, edit:

- `index.html` — layout
- `css/custom.css` — styling
- `js/main.js` — clock, date, and quote logic

---

## 📄 License

This project is for personal use.  
Feel free to modify and distribute as needed.

---

*[Demo](https://aira-isla.github.io/weeb/).*