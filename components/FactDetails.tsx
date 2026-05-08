import type { Fact } from "@/domain/fact";

interface FactDetailsProps {
  readonly fact: Fact;
  readonly generatedByAi?: boolean;
}

const categoryLabels: Record<Fact["category"], string> = {
  percepcja: "Percepcja",
  psychologia_poznawcza: "Psychologia poznawcza",
  neurobiologia: "Neurobiologia",
  ai_i_umysl: "AI i umysł",
  zwierzeta: "Poznanie zwierząt",
  filozofia_umyslu: "Filozofia umysłu",
};

export const FactDetails = ({ fact, generatedByAi = false }: FactDetailsProps) => {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.075] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur">
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

      <h1 className="mb-3 text-2xl font-semibold tracking-tight text-slate-50">{fact.title}</h1>
      <p className="mb-7 text-base leading-7 text-slate-300">{fact.hook}</p>

      <section className="grid gap-4">
        {[
          ["Wyjaśnienie", fact.explanation],
          ["Przykład", fact.example],
          ["Dlaczego to ważne", fact.whyItMatters],
        ].map(([label, text]) => (
          <div key={label} className="rounded-xl border border-white/10 bg-[#0B1220]/55 p-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9fc6c7]">
              {label}
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-200">{text}</p>
          </div>
        ))}
      </section>
    </article>
  );
};
