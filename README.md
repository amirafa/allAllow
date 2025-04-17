# 🌐 AllAllow (CORS Bypasser Proxy)

You can use this to:

- ✅ Fetch the full HTML of a page (`mode=full`)
- ✅ Extract meta tags from the page head (`mode=meta`)
- ✅ View a working UI directly via **GitHub Pages** or **Cloudflare Pages**

---

## 🚀 Live URLs : https://amirafa.github.io/allAllow/

---

## 📁 Folder Structure

```
/cloudflare-pages-proxy-ui
├── public/
│   └── index.html          # UI to test the proxy
├── functions/
│   └── index.js            # Cloudflare Functions API (meta + full)
├── wrangler.toml      # Cloudflare Pages config
├── index.js           # UI to test the proxy
└── README.md
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

## 🧪 How to View the UI on GitHub Pages

1. Push this project to a public GitHub repo
2. Go to **Repo > Settings > Pages**
3. Set source:
   - Branch = `main`
   - Folder = `/(root)`
4. Save and GitHub will host it at:

```
https://<your-username>.github.io/<your-repo>/
```

It will serve:
- `/` → the UI
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
