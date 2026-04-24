import { factsData } from "@/data/facts";
import { CATEGORIES, type Category, type Fact } from "@/domain/fact";
import { isCategory, validateFactsOrThrow } from "@/lib/validation";

const safeFactsSource = (): Fact[] => {
  return validateFactsOrThrow(factsData);
};

export const getAllFacts = (): Fact[] => {
  return safeFactsSource();
};

export const getFactById = (id: string): Fact | null => {
  if (!id.trim()) {
    return null;
  }

  const facts = safeFactsSource();
  return facts.find((fact) => fact.id === id) ?? null;
};

export const getFactsByCategory = (category: Category): Fact[] => {
  const facts = safeFactsSource();
  return facts.filter((fact) => fact.category === category);
};

export const getRandomFact = (): Fact | null => {
  const facts = safeFactsSource();
  if (facts.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * facts.length);
  const selectedFact = facts[randomIndex];

  return selectedFact ?? null;
};

const hashDateToIndex = (date: Date, length: number): number => {
  const seed = `${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getUTCDate()}`;
  let hash = 0;

  for (let index = 0; index < seed.length; index += 1) {
    hash = (hash * 31 + seed.charCodeAt(index)) % 2147483647;
  }

  return Math.abs(hash) % length;
};

export const getFactOfTheDay = (date: Date): Fact | null => {
  const facts = safeFactsSource();
  if (facts.length === 0) {
    return null;
  }

  const dayIndex = hashDateToIndex(date, facts.length);
  return facts[dayIndex] ?? null;
};

export const getRelatedFacts = (fact: Fact, limit = 3): Fact[] => {
  if (limit <= 0) {
    return [];
  }

  return getFactsByCategory(fact.category)
    .filter((item) => item.id !== fact.id)
    .slice(0, limit);
};

export const getAvailableCategories = (): Category[] => {
  const facts = safeFactsSource();
  const categoriesInUse = new Set<Category>();

  facts.forEach((fact) => {
    if (isCategory(fact.category)) {
      categoriesInUse.add(fact.category);
    }
  });

  return CATEGORIES.filter((category) => categoriesInUse.has(category));
};
