import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

import { CATEGORIES, type Fact } from "@/domain/fact";
import { getRandomFact } from "@/lib/facts";
import { isCategory } from "@/lib/validation";

const apiKey = process.env.GOOGLE_AI_KEY ?? "";
const generationTimeoutMs = 8000;

type GeneratedFact = Pick<
  Fact,
  "title" | "hook" | "explanation" | "example" | "whyItMatters" | "category"
>;

const fallbackFact = (): GeneratedFact => {
  const fact = getRandomFact();

  if (!fact) {
    return {
      title: "Neuroplastyczność",
      hook: "Mózg zmienia swoje połączenia przez całe życie.",
      explanation:
        "Neuroplastyczność oznacza, że doświadczenia, nauka i trening mogą wzmacniać lub osłabiać wybrane sieci neuronalne.",
      example:
        "Regularna nauka gry na instrumencie może poprawiać koordynację i słuch, bo mózg dostraja obszary odpowiedzialne za te umiejętności.",
      whyItMatters:
        "To pokazuje, że uczenie się i rehabilitacja mogą realnie zmieniać sposób działania układu nerwowego.",
      category: "neurobiologia",
    };
  }

  return {
    title: fact.title,
    hook: fact.hook,
    explanation: fact.explanation,
    example: fact.example,
    whyItMatters: fact.whyItMatters,
    category: fact.category,
  };
};

const parseGeneratedFact = (text: string): GeneratedFact | null => {
  const cleanText = text.replace(/```json/g, "").replace(/```/g, "").trim();
  const parsed = JSON.parse(cleanText) as Partial<Record<keyof GeneratedFact, unknown>>;

  if (
    typeof parsed.title !== "string" ||
    typeof parsed.hook !== "string" ||
    typeof parsed.explanation !== "string" ||
    typeof parsed.example !== "string" ||
    typeof parsed.whyItMatters !== "string" ||
    !isCategory(parsed.category)
  ) {
    return null;
  }

  return {
    title: parsed.title,
    hook: parsed.hook,
    explanation: parsed.explanation,
    example: parsed.example,
    whyItMatters: parsed.whyItMatters,
    category: parsed.category,
  };
};

const withTimeout = async <T,>(promise: Promise<T>, timeoutMs: number): Promise<T> => {
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

    const prompt = `Wygeneruj jedną ciekawą, konkretną i mało oczywistą ciekawostkę kognitywistyczną po polsku. Nie powtarzaj ogólników. Zwróć wyłącznie poprawny JSON z polami: title, hook, explanation, example, whyItMatters, category. Pole title ma być krótkie. Pole hook ma mieć jedno zdanie. Pola explanation, example i whyItMatters mają tworzyć rozszerzoną wersję ciekawostki. Pole category musi mieć jedną z wartości: ${CATEGORIES.join(", ")}.`;

    const result = await withTimeout(model.generateContent(prompt), generationTimeoutMs);
    const response = await result.response;
    const fact = parseGeneratedFact(response.text());

    return NextResponse.json(fact ?? fallbackFact());
  } catch (error) {
    console.error("Gemini fact generation failed:", error);
    return NextResponse.json(fallbackFact());
  }
}
