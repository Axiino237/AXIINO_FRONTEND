export default async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', 'https://www.axiino.com');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight (OPTIONS)
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { update } = req.query;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 1800);

  try {
    const url = update === 'true'
      ? "https://api.counterapi.dev/v1/axiino_unique_views/views/up"
      : "https://api.counterapi.dev/v1/axiino_unique_views/views";

    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);
    const data = await response.json();

    return res.status(200).json(data);
  } catch (error) {
    clearTimeout(timeoutId);
    return res.status(200).json({ count: 185 }); // Secure fallback count
  }
};
