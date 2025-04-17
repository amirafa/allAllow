# 🌐 Cloudflare Bypass CORS Proxy

This project provides a simple **CORS-bypassing proxy** using **Cloudflare Pages Functions**.

You can use it to:

- ✅ Fetch the full HTML content of any public web page (`mode=full`)
- ✅ Extract all structured `<meta>` tags from a page’s `<head>` (`mode=meta`)

---

## 🚀 Live Demo

🧪 [Test UI on GitHub Pages](https://amirafa.github.io/allAllow/)

🌐 [Cloudflare Proxy Endpoint (example)](https://allallow.pages.dev/?url=https://example.com&mode=meta)

---

## 📁 Folder Structure

```
/cloudflare-pages-proxy-ui
├── functions/
│   └── index.js            # Cloudflare Functions API (meta + full)
├── wrangler.toml           # Cloudflare Pages config
├── README.md
└── index.html            # Test demo (requests to allallow.pages.dev)
```

---

## 🔧 Usage

### 🧠 Meta Tag Extraction (Default)

```
GET https://<your-cloudflare-project>.pages.dev?url=https://example.com&mode=meta
```

Response:

```json
{
  "meta": {
    "og": {
      "title": "...",
      "image": "..."
    },
    "description": "..."
  },
  "status": 200
}
```

---

### 🌐 Full Page Fetch

```
GET https://<your-cloudflare-project>.pages.dev?url=https://example.com
```

or

```
GET https://<your-cloudflare-project>.pages.dev?url=https://example.com&mode=full
```

Response:

```json
{
  "content": "<!doctype html>....</html>",
  "status": 200
}
```

---

## 🚀 Deploy to Cloudflare Pages (Functions + UI)

1. Push to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com)
3. Create a new project from your repo
4. Set:
   - **Build command** = (blank)
   - **Build output directory** = (`public` default) 

It will serve:
- `/?url=...` → the proxy function

---

## 🛡 CORS Support

All responses include:

```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, OPTIONS
Access-Control-Allow-Headers: Content-Type
```

---

## 📃 License

MIT – free to use, modify, and share.