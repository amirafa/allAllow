export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const searchParams = url.searchParams;

  // ✅ Let static index.html handle plain root access
  if (!searchParams.has("url")) {
    return; // Let the Pages static file take over
  }

  const targetUrl = searchParams.get("url");
  const mode = searchParams.get("mode") || "full";

  try {
    const response = await fetch(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0',
        'Accept': 'text/html',
      }
    });

    const status = response.status;
    const html = await response.text();

    if (mode === 'meta') {
      const meta = {};
      const metaTagRegex = /<meta[^>]+>/gi;
      const attrRegex = /([a-zA-Z0-9:-]+)=["']([^"']+)["']/g;

      const matches = html.match(metaTagRegex);
      if (matches) {
        for (const tag of matches) {
          const attrs = {};
          let match;
          while ((match = attrRegex.exec(tag)) !== null) {
            attrs[match[1]] = match[2];
          }

          let key = attrs.name || attrs.property;
          if (key) {
            const path = key.split(':');
            let current = meta;
            for (let i = 0; i < path.length; i++) {
              const part = path[i];
              if (i === path.length - 1) {
                current[part] = attrs.content || '';
              } else {
                if (typeof current[part] === 'string') {
                  current[part] = { _value: current[part] };
                }
                if (!current[part]) {
                  current[part] = {};
                }
                current = current[part];
              }
            }
          }
        }
      }

      return new Response(JSON.stringify({ meta, status }, null, 2), {
        headers: corsHeaders("application/json")
      });
    }

    return new Response(JSON.stringify({ content: html, status }), {
      headers: corsHeaders("application/json")
    });

  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: corsHeaders("application/json"),
    });
  }
}

function corsHeaders(type = "application/json") {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": type
  };
}
