import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// Sprawdzamy czy klucz w ogóle istnieje
const apiKey = process.env.GOOGLE_AI_KEY || "";
const genAI = new GoogleGenerativeAI(apiKey);

export async function GET() {
  try {
    if (!apiKey) {
      return NextResponse.json({ error: "Brak klucza API w ustawieniach Vercel!" }, { status: 500 });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = "Wygeneruj jedną ciekawostkę kognitywistyczną w formacie JSON z polami: title, hook, explanation, example, category.";

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text().replace(/```json/g, "").replace(/```/g, "").trim();
    
    return NextResponse.json(JSON.parse(text));
  } catch (error: any) {
    // KLUCZOWE: Wyświetlamy co dokładnie boli Gemini
    console.error("Błąd Gemini:", error);
    return NextResponse.json({ 
      error: "Błąd Gemini", 
      message: error.message, // Tu pojawi się konkretny powód (np. Invalid API Key)
      stack: error.stack?.split('\n')[0] 
    }, { status: 500 });
  }
}