import Link from "next/link";

import { Layout } from "@/components/Layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="mx-auto max-w-2xl space-y-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Blad 404
        </p>
        <h1 className="text-3xl font-bold">Nie znaleziono wskazanej ciekawostki</h1>
        <p className="text-slate-600 dark:text-slate-300">
          Sprawdz, czy link jest poprawny albo wroc na strone glowna.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200"
        >
          Wroc na strone glowna
        </Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
