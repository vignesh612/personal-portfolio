
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  const response = await fetch(
    "https://api.openai.com/v1/chatkit/sessions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "OpenAI-Beta": "chatkit_beta=v1",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        workflow: {
          id: "wf_693ed4cd88408190bd5f9da78e896390071ce73177e12689",
        },
        user: req.headers["x-forwarded-for"] || "anonymous",
      }),
    }
  );

  const data = await response.json();
  res.status(200).json({ client_secret: data.client_secret });
}

