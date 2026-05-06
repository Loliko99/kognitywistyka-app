import Link from "next/link";
import { FactDetails } from "@/components/FactDetails";
import { getFactById } from "@/lib/facts";

interface FactDetailsPageProps {
  readonly params: Promise<{
    readonly id: string;
  }>;
}

export default async function FactDetailsPage({ params }: FactDetailsPageProps) {
  const { id } = await params;
  const fact = getFactById(id);

  if (!fact) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Nie znaleziono ciekawostki</h1>
        <p className="text-lg text-slate-600 mb-8">
          Ten adres nie pasuje do zadnej ciekawostki zapisanej w archiwum.
        </p>
        <Link href="/" className="rounded-lg bg-blue-600 px-6 py-2 text-white font-semibold hover:bg-blue-700">
          Wróć na stronę główną
        </Link>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-start p-10 md:p-24">
      <div className="max-w-2xl w-full space-y-6">
        <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block">
          &larr; Powrót
        </Link>
        <FactDetails fact={fact} />
      </div>
    </div>
  );
}
