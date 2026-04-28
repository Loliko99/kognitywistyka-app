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
  // Nowy stan, żeby przycisk wiedział, że AI pracuje
  const [isAiLoading, setIsAiLoading] = useState(false);

  const visibleFacts = useMemo(() => {
    if (selectedCategory === "all") {
      return allFacts;
    }

    return getFactsByCategory(selectedCategory);
  }, [allFacts, selectedCategory]);

  // PODŁĄCZENIE AI ZAMIAST ZWYKŁEGO LOSOWANIA
  const onRandomFact = async () => {
    setIsAiLoading(true);
    try {
      const response = await fetch('/api/fact');
      if (!response.ok) throw new Error("Błąd API");
      
      const aiData = await response.json();
      
      const newFact: Fact = {
        id: `ai-${Date.now()}`,
        title: aiData.title,
        hook: aiData.hook,
        explanation: aiData.explanation,
        example: aiData.example,
        category: aiData.category as Category,
        whyItMatters: "Ciekawostka wygenerowana dynamicznie przez model Gemini 1.5 Flash."
      };

      setHighlightedFact(newFact);
    } catch (error) {
      console.error("AI Error:", error);
      if (allFacts.length > 0) {
        const randomIndex = Math.floor(Math.random() * allFacts.length);
        setHighlightedFact(allFacts[randomIndex] ?? null);
      }
    } finally {
      setIsAiLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-400">
          Kognitywistyczne ciekawostki od Gemini AI
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Codzienna dawka kognitywistycznej wiedzy!
        </h1>
        <p className="max-w-3xl text-slate-600 dark:text-slate-300">
          {isAiLoading 
            ? "Sztuczna inteligencja generuje nowy fakt..." 
            : "Kliknij przycisk poniżej, aby AI wygenerowało unikalną ciekawostkę."}
        </p>
      </section>

      <section className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl font-semibold">
            {isAiLoading ? "AI pracuje..." : "Ciekawostka dnia"}
          </h2>
          {/* Przekazujemy stan ładowania do przycisku */}
          <RandomFactButton onPick={onRandomFact} disabled={isAiLoading} />
        </div>

        {highlightedFact ? (
          <div className={isAiLoading ? "animate-pulse opacity-50" : ""}>
            <FactCard fact={highlightedFact} />
          </div>
        ) : (
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Brak danych. Kliknij przycisk, aby zapytać AI.
          </p>
        )}
      </section>
      
      <section className="space-y-4 mt-32">
        <h2 className="text-xl font-semibold">Archiwum faktów (Baza statyczna)</h2>
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