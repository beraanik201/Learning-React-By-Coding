export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: "Missing URL parameter" });
  }

  try {
    // Fetch data directly from Swiggy with proper headers
    const response = await fetch(url, {
      headers: {
        Accept: "application/json, text/plain, */*",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Referer: "https://www.swiggy.com/",
        Origin: "https://www.swiggy.com",
      },
    });

    if (!response.ok) {
      return res
        .status(response.status)
        .json({ error: `Swiggy API responded with ${response.status}` });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error("Proxy fetch failed:", err);
    res.status(500).json({ error: "Proxy failed", details: err.message });
  }
}
