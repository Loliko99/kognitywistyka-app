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
  ai_i_umysl: "AI i umysł",
  zwierzeta: "Poznanie zwierząt",
  filozofia_umyslu: "Filozofia umysłu",
};

export const CategoryFilter = ({
  categories,
  selectedCategory,
  onChange,
}: CategoryFilterProps) => {
  const buttonClass = (isSelected: boolean) =>
    `rounded-full border px-4 py-2 text-sm font-medium transition duration-200 ${
      isSelected
        ? "border-[#9fc6c7] bg-[#9fc6c7] text-[#0B1220] shadow-sm"
        : "border-white/10 bg-white/[0.06] text-slate-300 hover:border-[#7A9E9F] hover:text-white"
    }`;

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        type="button"
        onClick={() => onChange("all")}
        className={buttonClass(selectedCategory === "all")}
      >
        Wszystkie
      </button>

      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onChange(category)}
          className={buttonClass(selectedCategory === category)}
        >
          {categoryLabels[category]}
        </button>
      ))}
    </div>
  );
};
