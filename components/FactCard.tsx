import Link from "next/link";

import type { Fact } from "@/domain/fact";

interface FactCardProps {
  readonly fact: Fact;
}

const categoryLabels: Record<Fact["category"], string> = {
  percepcja: "Percepcja",
  psychologia_poznawcza: "Psychologia poznawcza",
  neurobiologia: "Neurobiologia",
  ai_i_umysl: "AI i umysl",
  zwierzeta: "Poznanie zwierzat",
  filozofia_umyslu: "Filozofia umyslu",
};

export const FactCard = ({ fact }: FactCardProps) => {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <p className="mb-3 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
        {categoryLabels[fact.category]}
      </p>
      <h3 className="mb-2 text-lg font-semibold leading-tight">{fact.title}</h3>
      <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">{fact.hook}</p>
      <Link
        href={`/fact/${fact.id}`}
        className="text-sm font-semibold text-blue-700 underline-offset-4 hover:underline dark:text-blue-400"
      >
        Czytaj cala ciekawostke
      </Link>
    </article>
  );
};
