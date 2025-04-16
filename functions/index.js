export async function onRequest(context) {
  const { request } = context;

  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: corsHeaders(),
    });
  }

  const { searchParams } = new URL(request.url);
  const targetUrl = searchParams.get("url");

  if (!targetUrl) {
    return new Response(JSON.stringify({ error: "Missing ?url= param" }), {
      status: 400,
      headers: corsHeaders(),
    });
  }

  try {
    const response = await fetch(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
                      '(KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept': 'text/html',
      }
    });

    const html = await response.text();

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
              current[part] = current[part] || {};
              current = current[part];
            }
          }
        }
      }
    }

    return new Response(JSON.stringify(meta, null, 2), {
      headers: {
        ...corsHeaders(),
        "Content-Type": "application/json"
      }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: corsHeaders(),
    });
  }
}

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}
