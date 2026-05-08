import Link from "next/link";

import { FactDetails } from "@/components/FactDetails";
import { getGeneratedFactById, isAiFactId } from "@/lib/ai-facts";
import { getFactById } from "@/lib/facts";

interface FactDetailsPageProps {
  readonly params: Promise<{
    readonly id: string;
  }>;
}

export default async function FactDetailsPage({ params }: FactDetailsPageProps) {
  const { id } = await params;
  const staticFact = getFactById(id);
  const generatedFact = staticFact ? null : await getGeneratedFactById(id);
  const fact = staticFact ?? generatedFact;
  const generatedByAi = Boolean(generatedFact || isAiFactId(id));

  if (!fact) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#0B1220] p-8 text-center text-slate-100">
        <h1 className="mb-4 text-3xl font-semibold">Nie znaleziono ciekawostki</h1>
        <p className="mb-8 max-w-xl text-lg text-slate-300">
          Ten adres nie pasuje do żadnej ciekawostki zapisanej w archiwum.
        </p>
        <Link
          href="/"
          className="rounded-xl bg-[#7A9E9F] px-6 py-3 text-sm font-semibold text-[#0B1220] transition hover:bg-[#9fc6c7]"
        >
          Wróć na stronę główną
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B1220] px-5 py-10 text-slate-100 md:p-24">
      <div className="mx-auto w-full max-w-3xl space-y-6">
        <Link href="/" className="inline-block text-sm font-semibold text-[#9fc6c7] hover:underline">
          &larr; Powrót
        </Link>
        <FactDetails fact={fact} generatedByAi={generatedByAi} />
      </div>
    </div>
  );
}
