# 🌐 Cloudflare Proxy

This project includes a Cloudflare Pages **proxy function**

You can use this to:

- ✅ Fetch the full HTML of a page (`mode=full`)
- ✅ Extract meta tags from the page head (`mode=meta`)

---

## 🚀 Live Demo
https://amirafa.github.io/allAllow/

---

## 📁 Folder Structure

```
/cloudflare-pages-proxy-ui
├── functions/
│   └── index.js            # Cloudflare Functions API (meta + full)
├── wrangler.toml           # Cloudflare Pages config
├── README.md
└── index.html
```

---

## 🔧 Usage

### 🧠 Meta Tag Extraction (Default)

```
GET /?url=https://example.com&mode=meta
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
GET /?url=https://example.com
```

or

```
GET /?url=https://example.com&mode=full
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