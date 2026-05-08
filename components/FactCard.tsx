import Link from "next/link";

import type { Fact } from "@/domain/fact";

interface FactCardProps {
  readonly fact: Fact;
  readonly generatedByAi?: boolean;
  readonly hasDetailsPage?: boolean;
  readonly onReadMore?: () => void;
}

const categoryLabels: Record<Fact["category"], string> = {
  percepcja: "Percepcja",
  psychologia_poznawcza: "Psychologia poznawcza",
  neurobiologia: "Neurobiologia",
  ai_i_umysl: "AI i umysł",
  zwierzeta: "Poznanie zwierząt",
  filozofia_umyslu: "Filozofia umysłu",
};

export const FactCard = ({
  fact,
  generatedByAi = false,
  hasDetailsPage = true,
  onReadMore,
}: FactCardProps) => {
  return (
    <article className="group h-full rounded-2xl border border-white/10 bg-white/[0.075] p-5 shadow-[0_18px_45px_rgba(0,0,0,0.18)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#7A9E9F]/55 hover:bg-white/[0.105]">
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-300">
          {categoryLabels[fact.category]}
        </span>
        {generatedByAi && (
          <span className="rounded-full bg-[#7A9E9F]/18 px-3 py-1 text-xs font-medium text-[#b9d8d9]">
            Wygenerowano przez AI
          </span>
        )}
      </div>

      <h3 className="mb-3 text-lg font-semibold leading-tight text-slate-50">{fact.title}</h3>
      <p className="mb-5 text-sm leading-6 text-slate-300">{fact.hook}</p>

      {hasDetailsPage ? (
        <Link
          href={`/fact/${fact.id}`}
          className="text-sm font-semibold text-[#b9d8d9] underline decoration-[#7A9E9F]/50 underline-offset-4 transition group-hover:decoration-[#b9d8d9]"
        >
          Czytaj całą ciekawostkę
        </Link>
      ) : (
        <button
          type="button"
          onClick={onReadMore}
          className="text-sm font-semibold text-[#b9d8d9] underline decoration-[#7A9E9F]/50 underline-offset-4 transition hover:decoration-[#b9d8d9]"
        >
          Rozwiń ciekawostkę
        </button>
      )}
    </article>
  );
};
