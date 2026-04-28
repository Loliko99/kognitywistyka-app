"use client";

import { useMemo, useState } from "react";

import { CategoryFilter } from "@/components/CategoryFilter";
import { FactCard } from "@/components/FactCard";
import { RandomFactButton } from "@/components/RandomFactButton";
import type { Category, Fact } from "@/domain/fact";
import { getFactsByCategory } from "@/lib/facts";

interface HomePageContentProps {
  readonly allFacts: readonly Fact[];
  readonly factOfTheDay: Fact | null;
  readonly availableCategories: readonly Category[];
}

export const HomePageContent = ({
  allFacts,
  factOfTheDay,
  availableCategories,
}: HomePageContentProps) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | "all">("all");
  const [highlightedFact, setHighlightedFact] = useState<Fact | null>(factOfTheDay);

  const visibleFacts = useMemo(() => {
    if (selectedCategory === "all") {
      return allFacts;
    }

    return getFactsByCategory(selectedCategory);
  }, [allFacts, selectedCategory]);

  const onRandomFact = () => {
    if (allFacts.length === 0) {
      setHighlightedFact(null);
      return;
    }

    const randomIndex = Math.floor(Math.random() * allFacts.length);
    setHighlightedFact(allFacts[randomIndex] ?? null);
  };

  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-400">
          Kognitywistyczne ciekawostki        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Codzienna dawka kognitywistycznej wiedzy!
        </h1>
        <p className="max-w-3xl text-slate-600 dark:text-slate-300">
          Czytaj codziennie krótki fakt o umyśle, percepcji i podejmowaniu decyzji.
        </p>
      </section>

      <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl font-semibold">Ciekawostka dnia</h2>
          <RandomFactButton onPick={onRandomFact} disabled={allFacts.length === 0} />
        </div>

        {highlightedFact ? (
          <FactCard fact={highlightedFact} />
        ) : (
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Brak danych. Dodaj ciekawostki w pliku `data/facts.ts`.
          </p>
        )}
      </section>
      
     
     
      <section className="space-y-4 mt-32">
        <h2 className="text-xl font-semibold">Przegladaj po kategoriach</h2>
        <CategoryFilter
          categories={availableCategories}
          selectedCategory={selectedCategory}
          onChange={setSelectedCategory}
        />

        {visibleFacts.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {visibleFacts.map((fact) => (
              <FactCard key={fact.id} fact={fact} />
            ))}
          </div>
        ) : (
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Brak ciekawostek w wybranej kategorii.
          </p>
        )}
      </section>
    </div>
  );
};