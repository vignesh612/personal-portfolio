
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
          id: "wf_694a9c79b2888190b2322a80de4da5b10561f82966dbcdfe",
        },
        user: req.headers["x-forwarded-for"] || "anonymous",
      }),
    }
  );

  const data = await response.json();
  res.status(200).json({ client_secret: data.client_secret });
}

