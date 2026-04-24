import { CATEGORIES, type Category, type Fact } from "@/domain/fact";

const isNonEmptyString = (value: unknown): value is string => {
  return typeof value === "string" && value.trim().length > 0;
};

export const isCategory = (value: unknown): value is Category => {
  return typeof value === "string" && CATEGORIES.includes(value as Category);
};

export const isFact = (value: unknown): value is Fact => {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const candidate = value as Record<string, unknown>;

  return (
    isNonEmptyString(candidate.id) &&
    isNonEmptyString(candidate.title) &&
    isNonEmptyString(candidate.hook) &&
    isNonEmptyString(candidate.explanation) &&
    isNonEmptyString(candidate.example) &&
    isNonEmptyString(candidate.whyItMatters) &&
    isCategory(candidate.category)
  );
};

export const validateFactsOrThrow = (value: unknown): Fact[] => {
  if (!Array.isArray(value)) {
    throw new Error("Facts data must be an array.");
  }

  if (value.length === 0) {
    throw new Error("Facts data cannot be empty.");
  }

  const allValid = value.every((fact) => isFact(fact));

  if (!allValid) {
    throw new Error("Facts data contains invalid entries.");
  }
  return value;
};
