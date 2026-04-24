import Link from "next/link";
import { notFound } from "next/navigation";

import { FactCard } from "@/components/FactCard";
import { FactDetails } from "@/components/FactDetails";
import { Layout } from "@/components/Layout";
import { getFactById, getRelatedFacts } from "@/lib/facts";

interface FactPageProps {
  readonly params: Promise<{
    readonly id: string;
  }>;
}

const FactPage = async ({ params }: FactPageProps) => {
  const resolvedParams = await params;
  const factId = resolvedParams.id?.trim();

  if (!factId) {
    notFound();
  }

  const fact = getFactById(factId);

  if (!fact) {
    notFound();
  }

  const relatedFacts = getRelatedFacts(fact);

  return (
    <Layout>
      <div className="space-y-8">
        <Link
          href="/"
          className="inline-flex text-sm font-semibold text-blue-700 underline-offset-4 hover:underline dark:text-blue-400"
        >
          Wroc do strony glownej
        </Link>

        <FactDetails fact={fact} />

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Powiazane ciekawostki</h2>
          {relatedFacts.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2">
              {relatedFacts.map((relatedFact) => (
                <FactCard key={relatedFact.id} fact={relatedFact} />
              ))}
            </div>
          ) : (
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Brak podobnych ciekawostek w tej kategorii.
            </p>
          )}
        </section>
      </div>
    </Layout>
  );
};

export default FactPage;
