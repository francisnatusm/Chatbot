export default async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(405).json({ error: { message: "Method not allowed" } });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return response.status(500).json({ error: { message: "Server API key not configured." } });
  }

  try {
    const geminiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request.body),
      }
    );

    const data = await geminiResponse.json();
    return response.status(geminiResponse.status).json(data);
  } catch (error) {
    return response.status(500).json({ error: { message: error.message } });
  }
}
