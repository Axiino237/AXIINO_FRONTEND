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

  try {
    const url = update === 'true'
      ? "https://api.counterapi.dev/v1/axiino_unique_views/views/up"
      : "https://api.counterapi.dev/v1/axiino_unique_views/views";

    const response = await fetch(url);
    const data = await response.json();

    return res.status(200).json(data);
  } catch (error) {
    return res.status(200).json({ count: 185 }); // Secure fallback count
  }
};
