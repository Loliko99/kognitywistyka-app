import type { Fact } from "@/domain/fact";

interface FactDetailsProps {
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

export const FactDetails = ({ fact }: FactDetailsProps) => {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <p className="mb-3 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
        {categoryLabels[fact.category]}
      </p>
      <h1 className="mb-3 text-2xl font-bold tracking-tight">{fact.title}</h1>
      <p className="mb-6 text-base text-slate-700 dark:text-slate-200">{fact.hook}</p>

      <section className="space-y-4">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Wyjasnienie
          </h2>
          <p className="mt-1 text-slate-700 dark:text-slate-200">{fact.explanation}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Przyklad
          </h2>
          <p className="mt-1 text-slate-700 dark:text-slate-200">{fact.example}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Dlaczego to wazne
          </h2>
          <p className="mt-1 text-slate-700 dark:text-slate-200">{fact.whyItMatters}</p>
        </div>
      </section>
    </article>
  );
};
