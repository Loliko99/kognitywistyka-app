import type { Category, Fact } from "../domain/fact";
import { isCategory } from "./validation";

export type GeneratedFactInput = Pick<
  Fact,
  "title" | "hook" | "explanation" | "example" | "whyItMatters" | "category"
>;

export interface StoredGeneratedFact extends Fact {
  readonly generatedByAi: true;
}

const supabaseUrl = process.env.SUPABASE_URL ?? "";
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";
const supabaseTable = process.env.SUPABASE_AI_FACTS_TABLE ?? "ai_facts";

export const isAiFactId = (id: string): boolean => {
  return id.startsWith("ai-");
};

export const isAiFactStorageConfigured = (): boolean => {
  return Boolean(supabaseUrl && supabaseServiceRoleKey);
};

const slugify = (value: string): string => {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 48);
};

export const createAiFactId = (title: string): string => {
  const slug = slugify(title) || "ciekawostka";
  const suffix = crypto.randomUUID().slice(0, 8);

  return `ai-${slug}-${suffix}`;
};

const toDatabaseRow = (fact: StoredGeneratedFact) => {
  return {
    id: fact.id,
    title: fact.title,
    hook: fact.hook,
    explanation: fact.explanation,
    example: fact.example,
    why_it_matters: fact.whyItMatters,
    category: fact.category,
  };
};

const fromDatabaseRow = (row: Record<string, unknown>): StoredGeneratedFact | null => {
  if (
    typeof row.id !== "string" ||
    typeof row.title !== "string" ||
    typeof row.hook !== "string" ||
    typeof row.explanation !== "string" ||
    typeof row.example !== "string" ||
    typeof row.why_it_matters !== "string" ||
    !isCategory(row.category)
  ) {
    return null;
  }

  return {
    id: row.id,
    title: row.title,
    hook: row.hook,
    explanation: row.explanation,
    example: row.example,
    whyItMatters: row.why_it_matters,
    category: row.category,
    generatedByAi: true,
  };
};

const supabaseHeaders = (): HeadersInit => {
  return {
    apikey: supabaseServiceRoleKey,
    authorization: `Bearer ${supabaseServiceRoleKey}`,
    "content-type": "application/json",
  };
};

export const saveGeneratedFact = async (
  fact: GeneratedFactInput,
): Promise<{ readonly fact: StoredGeneratedFact; readonly persisted: boolean }> => {
  const storedFact: StoredGeneratedFact = {
    id: createAiFactId(fact.title),
    ...fact,
    generatedByAi: true,
  };

  if (!isAiFactStorageConfigured()) {
    return { fact: storedFact, persisted: false };
  }

  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/${supabaseTable}`, {
      method: "POST",
      headers: {
        ...supabaseHeaders(),
        prefer: "return=minimal",
      },
      body: JSON.stringify(toDatabaseRow(storedFact)),
    });

    return { fact: storedFact, persisted: response.ok };
  } catch (error) {
    console.error("Saving AI fact failed:", error);
    return { fact: storedFact, persisted: false };
  }
};

export const getGeneratedFactById = async (id: string): Promise<StoredGeneratedFact | null> => {
  if (!isAiFactId(id) || !isAiFactStorageConfigured()) {
    return null;
  }

  try {
    const response = await fetch(
      `${supabaseUrl}/rest/v1/${supabaseTable}?id=eq.${encodeURIComponent(id)}&select=*`,
      {
        headers: supabaseHeaders(),
        cache: "no-store",
      },
    );

    if (!response.ok) {
      return null;
    }

    const rows = (await response.json()) as Record<string, unknown>[];
    const firstRow = rows[0];

    return firstRow ? fromDatabaseRow(firstRow) : null;
  } catch (error) {
    console.error("Loading AI fact failed:", error);
    return null;
  }
};

export const coerceGeneratedFactInput = (
  value: Partial<Record<keyof GeneratedFactInput, unknown>>,
): GeneratedFactInput | null => {
  if (
    typeof value.title !== "string" ||
    typeof value.hook !== "string" ||
    typeof value.explanation !== "string" ||
    typeof value.example !== "string" ||
    typeof value.whyItMatters !== "string" ||
    !isCategory(value.category)
  ) {
    return null;
  }

  return {
    title: value.title,
    hook: value.hook,
    explanation: value.explanation,
    example: value.example,
    whyItMatters: value.whyItMatters,
    category: value.category as Category,
  };
};
