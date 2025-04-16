# 🌐 Cloudflare Meta & Full Page Proxy

This is a lightweight proxy deployed on **Cloudflare Pages Functions** that fetches:

- Full HTML content of a target URL
- Or just the structured `<meta>` tags from the `<head>`

It supports CORS and works great for use in browser-based tools, scrapers, or headless UIs.

---

## 🚀 Live Endpoint

```
https://allallow.pages.dev
```

---

## 📦 Usage

### 🔍 Full Page HTML (Default)

```http
GET /?url=https://example.com
```

or explicitly:

```http
GET /?url=https://example.com&mode=full
```

📦 Response:

```json
{
  "content": "<!DOCTYPE html>...",
  "status": 200
}
```

---

### 🧠 Meta Tags Only

```http
GET /?url=https://example.com&mode=meta
```

📦 Response:

```json
{
  "meta": {
    "og": {
      "title": "Example Title",
      "image": "https://example.com/og.jpg"
    },
    "twitter": {
      "card": "summary_large_image"
    },
    "description": "This is an example site."
  },
  "status": 200
}
```

---

## 🧪 Test Tool (Frontend)

A test UI is available as a local HTML file.

### Features:
- Enter any URL
- Select mode: `full` or `meta`
- See parsed JSON result

📄 File: `index.html`

---

## 🛠 Deployment Guide

1. Upload this project to a GitHub repo
2. Go to [Cloudflare Pages](https://pages.cloudflare.com)
3. Create a project → connect your GitHub repo
4. Set **"Functions only"** deployment (no build step)
5. Done ✅

---

## 📂 Project Structure

```
cloudflare-meta-fullmode/
├── functions/
│   └── index.js      # Main proxy function
├── wrangler.toml     # Cloudflare config
└── index.html        # Local tester UI (optional)
```

---

## 🛡 CORS Support

All responses include:

```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, OPTIONS
Access-Control-Allow-Headers: Content-Type
```

Use it safely from any browser or frontend framework.

---

## 📃 License

MIT – free to use, modify, and share.
