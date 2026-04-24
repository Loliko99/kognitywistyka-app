export const CATEGORIES = [
  "percepcja",
  "psychologia_poznawcza",
  "neurobiologia",
  "ai_i_umysl",
  "zwierzeta",
  "filozofia_umyslu",
] as const;

export type Category = (typeof CATEGORIES)[number];

export interface Fact {
  id: string;
  title: string;
  hook: string;
  explanation: string;
  example: string;
  whyItMatters: string;
  category: Category;
}
