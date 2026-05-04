import Link from "next/link";
import { FactDetails } from "@/components/FactDetails";
import { getFactById } from "@/lib/facts";

export default function FactDetailsPage({ params }: { params: { id: string } }) {
  const fact = getFactById(params.id);

  // Jeśli link to np. wygenerowana przez AI ciekawostka, której nie ma w pliku
  if (!fact) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Ciekawostka od AI 🧠</h1>
        <p className="text-lg text-slate-600 mb-8">
          Ta ciekawostka została wygenerowana dynamicznie i nie ma jeszcze swojej dedykowanej podstrony.
        </p>
        <Link href="/" className="rounded-lg bg-blue-600 px-6 py-2 text-white font-semibold hover:bg-blue-700">
          Wróć na stronę główną
        </Link>
      </div>
    );
  }

  // Jeśli ciekawostka jest w Twoim folderze (np. neuroplastycznosc)
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