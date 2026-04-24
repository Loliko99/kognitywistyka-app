"use client";

import type { Category } from "@/domain/fact";

interface CategoryFilterProps {
  readonly categories: readonly Category[];
  readonly selectedCategory: Category | "all";
  readonly onChange: (category: Category | "all") => void;
}

const categoryLabels: Record<Category, string> = {
  percepcja: "Percepcja",
  psychologia_poznawcza: "Psychologia poznawcza",
  neurobiologia: "Neurobiologia",
  ai_i_umysl: "AI i umysl",
  zwierzeta: "Poznanie zwierzat",
  filozofia_umyslu: "Filozofia umyslu",
};

export const CategoryFilter = ({
  categories,
  selectedCategory,
  onChange,
}: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        type="button"
        onClick={() => onChange("all")}
        className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
          selectedCategory === "all"
            ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
            : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
        }`}
      >
        Wszystkie
      </button>

      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onChange(category)}
          className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
            selectedCategory === category
              ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
          }`}
        >
          {categoryLabels[category]}
        </button>
      ))}
    </div>
  );
};
