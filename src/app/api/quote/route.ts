import { NextRequest, NextResponse } from "next/server";

export async function POST(_req: NextRequest) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Missing OpenAI API key" }, { status: 500 });
  }

  // You can customize the prompt as you wish
  const prompt = "Покажи короткую цитату (120-150 символов) про св. влкмч. Елизавету Федоровну. Только цитату, без комментариев.";

  try {
    const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: prompt },
        ],
        max_tokens: 60,
        temperature: 0.8,
      }),
    });

    if (!openaiRes.ok) {
      const error = await openaiRes.text();
      return NextResponse.json({ error }, { status: openaiRes.status });
    }

    const data = await openaiRes.json();
    const quote = data.choices?.[0]?.message?.content?.trim() || "No quote found.";
    return NextResponse.json({ quote });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
} 