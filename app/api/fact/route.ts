import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_KEY || "");

export async function GET() {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Jesteś ekspertem kognitywistyki. Wygeneruj ciekawostkę w formacie JSON. 
    Wymagane pola: title, hook, explanation, example, category. 
    Kategorie do wyboru: Percepcja, Neurobiologia, AI i umysł, Psychologia poznawcza. 
    Użyj języka polskiego. Zwróć TYLKO czysty obiekt JSON.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Czyścimy tekst (Gemini czasem dodaje ```json ... ```)
    const cleanJson = text.replace(/```json/g, "").replace(/```/g, "").trim();
    const data = JSON.parse(cleanJson);

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Błąd Gemini" }, { status: 500 });
  }
}