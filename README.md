# 🌐 AllAllow (CORS Bypasser Proxy API)

You can use this to:

- ✅ Fetch the full HTML of a page
- ✅ Extract meta tags from the page head

---

## 🚀 Live Demo
https://amirafa.github.io/allAllow/


---

## 🔧 APIs

### 🧠 Meta Tag Extraction (Default)

```
GET https://allallow.pages.dev/?url=https://example.com&mode=meta
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
GET https://allallow.pages.dev/?url=https://example.com
```

or

```
GET https://allallow.pages.dev/?url=https://example.com&mode=full
```

Response:

```json
{
  "content": "<!doctype html>....</html>",
  "status": 200
}
```

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
