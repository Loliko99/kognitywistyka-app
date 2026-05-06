import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

import { CATEGORIES, type Fact } from "../../../domain/fact";
import {
  coerceGeneratedFactInput,
  saveGeneratedFact,
  type GeneratedFactInput,
} from "../../../lib/ai-facts";
import { getRandomFact } from "../../../lib/facts";

const apiKey = process.env.GOOGLE_AI_KEY ?? "";
const generationTimeoutMs = 8000;

export interface FactApiResponse extends Fact {
  readonly generatedByAi: boolean;
  readonly persisted: boolean;
}

const fallbackFact = (): FactApiResponse => {
  const fact = getRandomFact();

  if (!fact) {
    return {
      id: "neuroplastycznosc",
      title: "Neuroplastyczność",
      hook: "Mózg zmienia swoje połączenia przez całe życie.",
      explanation:
        "Neuroplastyczność oznacza, że doświadczenia, nauka i trening mogą wzmacniać lub osłabiać wybrane sieci neuronalne.",
      example:
        "Regularna nauka gry na instrumencie może poprawiać koordynację i słuch, bo mózg dostraja obszary odpowiedzialne za te umiejętności.",
      whyItMatters:
        "To pokazuje, że uczenie się i rehabilitacja mogą realnie zmieniać sposób działania układu nerwowego.",
      category: "neurobiologia",
      generatedByAi: false,
      persisted: true,
    };
  }

  return {
    ...fact,
    generatedByAi: false,
    persisted: true,
  };
};

export const parseGeneratedFact = (text: string): GeneratedFactInput | null => {
  try {
    const cleanText = text.replace(/```json/g, "").replace(/```/g, "").trim();
    const parsed = JSON.parse(cleanText) as Partial<Record<keyof GeneratedFactInput, unknown>>;

    return coerceGeneratedFactInput(parsed);
  } catch {
    return null;
  }
};

export const withTimeout = async <T,>(promise: Promise<T>, timeoutMs: number): Promise<T> => {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  const timeout = new Promise<never>((_, reject) => {
    timeoutId = setTimeout(() => {
      reject(new Error("Gemini request timed out."));
    }, timeoutMs);
  });

  try {
    return await Promise.race([promise, timeout]);
  } finally {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  }
};

export async function GET() {
  if (!apiKey) {
    return NextResponse.json(fallbackFact());
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      generationConfig: {
        responseMimeType: "application/json",
      },
    });

    const prompt = `Wygeneruj nową, ciekawą, konkretną i mało oczywistą ciekawostkę kognitywistyczną po polsku. Nie wybieraj wyłącznie tematów z istniejącej bazy. Możesz dotyczyć percepcji, pamięci, uwagi, emocji, neurobiologii, AI, języka, uczenia się, świadomości albo decyzji. Nie powtarzaj ogólników. Zwróć wyłącznie poprawny JSON z polami: title, hook, explanation, example, whyItMatters, category. Pole title ma być krótkie. Pole hook ma mieć jedno zdanie. Pola explanation, example i whyItMatters mają tworzyć rozszerzoną wersję ciekawostki. Pole category musi mieć jedną z wartości: ${CATEGORIES.join(", ")}.`;

    const result = await withTimeout(model.generateContent(prompt), generationTimeoutMs);
    const response = await result.response;
    const generatedFact = parseGeneratedFact(response.text());

    if (!generatedFact) {
      return NextResponse.json(fallbackFact());
    }

    const saved = await saveGeneratedFact(generatedFact);

    return NextResponse.json({
      ...saved.fact,
      generatedByAi: true,
      persisted: saved.persisted,
    } satisfies FactApiResponse);
  } catch (error) {
    console.error("Gemini fact generation failed:", error);
    return NextResponse.json(fallbackFact());
  }
}
