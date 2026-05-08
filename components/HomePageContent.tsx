"use client";

import {
  ArrowRight,
  Atom,
  Bot,
  Brain,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Cpu,
  Database,
  GraduationCap,
  Microscope,
  Network,
  Orbit,
  Sparkles,
  Users,
} from "lucide-react";
import { useMemo, useState } from "react";

import { CategoryFilter } from "@/components/CategoryFilter";
import { FactCard } from "@/components/FactCard";
import { FactDetails } from "@/components/FactDetails";
import { RandomFactButton } from "@/components/RandomFactButton";
import type { Category, Fact } from "@/domain/fact";
import { getFactsByCategory } from "@/lib/facts";

interface ApiFact extends Fact {
  readonly generatedByAi?: boolean;
  readonly persisted?: boolean;
}

interface HomePageContentProps {
  readonly allFacts: readonly Fact[];
  readonly factOfTheDay: Fact | null;
  readonly availableCategories: readonly Category[];
}

const scienceAreas = [
  {
    icon: Brain,
    title: "Neurobiologia",
    text: "Jak mózg koduje uwagę, pamięć, emocje i uczenie się.",
  },
  {
    icon: Users,
    title: "Psychologia poznawcza",
    text: "Eksperymenty o decyzjach, percepcji, języku i błędach myślenia.",
  },
  {
    icon: Cpu,
    title: "Informatyka i AI",
    text: "Modele obliczeniowe, interakcje człowiek-komputer i systemy inteligentne.",
  },
  {
    icon: Orbit,
    title: "Filozofia umysłu",
    text: "Świadomość, intencjonalność i granice wyjaśniania doświadczenia.",
  },
];

const careerPaths = [
  "UX Researcher",
  "AI Specialist",
  "Data Analyst",
  "Cognitive Scientist",
  "Product Designer",
  "Human-AI Interaction Researcher",
];

const researchThemes = [
  "Laboratoria percepcji i uwagi",
  "Projektowanie interfejsów wspieranych AI",
  "Analiza danych behawioralnych",
  "Eksperymenty nad pamięcią i decyzjami",
];

const stats = [
  ["6", "obszarów badawczych"],
  ["AI", "dynamiczne ciekawostki"],
  ["HCI", "człowiek i technologia"],
];

export const HomePageContent = ({
  allFacts,
  factOfTheDay,
  availableCategories,
}: HomePageContentProps) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | "all">("all");
  const [highlightedFact, setHighlightedFact] = useState<Fact | null>(factOfTheDay);
  const [isHighlightedGeneratedByAi, setIsHighlightedGeneratedByAi] = useState(false);
  const [hasHighlightedDetailsPage, setHasHighlightedDetailsPage] = useState(true);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [showAiDetails, setShowAiDetails] = useState(false);

  const visibleFacts = useMemo(() => {
    if (selectedCategory === "all") {
      return allFacts;
    }

    return getFactsByCategory(selectedCategory);
  }, [allFacts, selectedCategory]);

  const onRandomFact = async () => {
    setIsAiLoading(true);
    setShowAiDetails(false);

    try {
      const response = await fetch("/api/fact");
      if (!response.ok) {
        throw new Error("Błąd API");
      }

      const aiData = (await response.json()) as ApiFact;
      const generatedByAi = Boolean(aiData.generatedByAi ?? aiData.id?.startsWith("ai-"));

      const newFact: Fact = {
        id: aiData.id ?? `ai-${Date.now()}`,
        title: aiData.title,
        hook: aiData.hook,
        explanation: aiData.explanation,
        example: aiData.example,
        category: aiData.category as Category,
        whyItMatters: aiData.whyItMatters,
      };

      setHighlightedFact(newFact);
      setIsHighlightedGeneratedByAi(generatedByAi);
      setHasHighlightedDetailsPage(!generatedByAi || Boolean(aiData.persisted));
    } catch (error) {
      console.error("AI Error:", error);
      if (allFacts.length > 0) {
        const randomIndex = Math.floor(Math.random() * allFacts.length);
        setHighlightedFact(allFacts[randomIndex] ?? null);
        setIsHighlightedGeneratedByAi(false);
        setHasHighlightedDetailsPage(true);
      }
    } finally {
      setIsAiLoading(false);
    }
  };

  return (
    <div className="overflow-hidden bg-[#0B1220]">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0B1220]/88 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#9fc6c7] text-[#0B1220]">
              <Brain size={20} />
            </span>
            <span className="text-sm font-semibold tracking-[0.18em] text-slate-100">KOGNITIVE</span>
          </a>
          <div className="hidden items-center gap-7 text-sm font-medium text-slate-300 md:flex">
            <a href="#facts" className="transition hover:text-white">
              Ciekawostki
            </a>
            <a href="#study" className="transition hover:text-white">
              Kierunek
            </a>
            <a href="#career" className="transition hover:text-white">
              Kariera
            </a>
            <a href="#research" className="transition hover:text-white">
              Badania
            </a>
          </div>
          <a
            href="#apply"
            className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-slate-100 shadow-sm transition hover:border-[#7A9E9F] hover:bg-white/[0.1]"
          >
        
          </a>
        </nav>
      </header>

      <section id="top" className="scientific-grid relative px-5 pb-14 pt-16 sm:px-8 lg:pb-18 lg:pt-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(122,158,159,0.24),transparent_38rem)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-sm font-medium text-slate-300 shadow-sm backdrop-blur">
              <Sparkles size={16} />
              Cognitive science, neuroscience, HCI
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.03em] text-slate-50 sm:text-6xl lg:text-7xl">
              Kognitywistyka dla ludzi, którzy chcą rozumieć umysł i projektować przyszłość.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Kierunek na styku psychologii, neurobiologii, informatyki, filozofii i AI.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#facts"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#9fc6c7] px-5 py-3 text-sm font-semibold text-[#0B1220] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#b9d8d9] hover:shadow-md"
              >
                Wygeneruj ciekawostkę <ArrowRight size={17} />
              </a>
              <a
                href="#study"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.07] px-5 py-3 text-sm font-semibold text-slate-100 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-[#7A9E9F] hover:bg-white/[0.1]"
              >
                Zobacz kierunek
              </a>
            </div>
          </div>

          <div className="relative min-h-[420px] rounded-[2rem] border border-white/10 bg-white/[0.07] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.32)] backdrop-blur">
            <div className="network-field absolute inset-5 rounded-[1.6rem] border border-white/10 bg-[#101A2A]/70" />
            <div className="absolute left-8 top-8 rounded-2xl border border-white/10 bg-[#0B1220]/70 p-4 shadow-sm backdrop-blur">
              <Network className="text-[#9fc6c7]" />
              <p className="mt-3 max-w-44 text-sm leading-6 text-slate-300">
                Sieci poznawcze, uwaga i pamięć robocza.
              </p>
            </div>
            <div className="absolute bottom-10 right-8 rounded-2xl border border-white/10 bg-[#0B1220]/70 p-4 shadow-sm backdrop-blur">
              <Microscope className="text-[#9fc6c7]" />
              <p className="mt-3 max-w-44 text-sm leading-6 text-slate-300">
                Eksperymenty, dane i modele zachowania.
              </p>
            </div>
            <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7A9E9F]/35 bg-white/[0.08] shadow-[0_0_90px_rgba(122,158,159,0.34)] backdrop-blur">
              <div className="flex h-full items-center justify-center">
                <Brain size={58} className="text-[#d9eeee]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="facts" className="px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#9fc6c7]">
                Główna atrakcja
              </p>
              <h2 className="text-4xl font-semibold tracking-[-0.02em] text-slate-50">
                Laboratorium ciekawostek poznawczych z AI.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-300">
                Generator tworzy nowe ciekawostki, a archiwum pozwala eksplorować najważniejsze
                obszary kognitywistyki bez przewijania na sam dół strony.
              </p>
            </div>

            <section className="rounded-[1.7rem] border border-[#7A9E9F]/25 bg-white/[0.075] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.28)] backdrop-blur">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-50">
                    {isAiLoading ? "AI analizuje wzorce..." : "Ciekawostka poznawcza"}
                  </h3>
                  <p className="mt-1 text-sm text-slate-300">
                    {isAiLoading ? "Generowanie nowego faktu trwa chwilę." : "Wygeneruj nowy trop albo rozwiń aktualny."}
                  </p>
                </div>
                <RandomFactButton onPick={onRandomFact} disabled={isAiLoading} />
              </div>

              {highlightedFact ? (
                <div className={isAiLoading ? "animate-pulse opacity-55" : ""}>
                  <FactCard
                    fact={highlightedFact}
                    generatedByAi={isHighlightedGeneratedByAi}
                    hasDetailsPage={hasHighlightedDetailsPage}
                    onReadMore={() => setShowAiDetails((current) => !current)}
                  />
                  {isHighlightedGeneratedByAi && !hasHighlightedDetailsPage && showAiDetails && (
                    <div className="mt-5">
                      <FactDetails fact={highlightedFact} generatedByAi />
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-sm text-slate-300">Brak danych. Kliknij przycisk, aby zapytać AI.</p>
              )}
            </section>
          </div>

          <section className="mt-12">
            <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#9fc6c7]">
                  Archiwum wiedzy
                </p>
                <h3 className="text-3xl font-semibold tracking-[-0.02em] text-slate-50">
                  Statyczna baza ciekawostek
                </h3>
              </div>
              <CategoryFilter
                categories={availableCategories}
                selectedCategory={selectedCategory}
                onChange={setSelectedCategory}
              />
            </div>

            {visibleFacts.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {visibleFacts.map((fact) => (
                  <FactCard key={fact.id} fact={fact} />
                ))}
              </div>
            ) : (
              <p className="text-sm text-slate-300">Brak ciekawostek w wybranej kategorii.</p>
            )}
          </section>
        </div>
      </section>

      <section className="px-5 py-8 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-3">
          {stats.map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-sm backdrop-blur">
              <p className="text-3xl font-semibold text-slate-50">{value}</p>
              <p className="mt-2 text-sm text-slate-300">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="study" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#9fc6c7]">
              Czym jest kognitywistyka?
            </p>
            <h2 className="text-4xl font-semibold tracking-[-0.02em] text-slate-50 sm:text-5xl">
              Nauka o tym, jak człowiek postrzega, myśli, decyduje i współpracuje z technologią.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {scienceAreas.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.09]"
              >
                <Icon className="text-[#9fc6c7]" size={26} />
                <h3 className="mt-5 text-lg font-semibold text-slate-50">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="career" className="px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#9fc6c7]">
              Po kognitywistyce możesz pracować jako
            </p>
            <h2 className="text-4xl font-semibold tracking-[-0.02em] text-slate-50">
              Zawody dla osób, które łączą badania, technologię i projektowanie.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {careerPaths.map((path) => (
              <div
                key={path}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4 shadow-sm backdrop-blur"
              >
                <BriefcaseBusiness size={19} className="text-[#9fc6c7]" />
                <span className="font-medium text-slate-100">{path}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="research" className="px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          <div className="rounded-2xl border border-[#7A9E9F]/25 bg-[#122033] p-7 text-white shadow-[0_24px_70px_rgba(0,0,0,0.28)] lg:col-span-1">
            <Atom className="text-[#9fc6c7]" />
            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.02em]">Projekty, badania i technologie</h2>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              Kognitywistyka jest praktyczna wtedy, gdy teoria spotyka eksperyment, dane i prototyp.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
            {researchThemes.map((theme, index) => {
              const icons = [Database, Bot, ChartNoAxesCombined, GraduationCap];
              const Icon = icons[index] ?? Microscope;
              return (
                <article key={theme} className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 shadow-sm backdrop-blur">
                  <Icon className="text-[#9fc6c7]" />
                  <h3 className="mt-5 text-lg font-semibold text-slate-50">{theme}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                  
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="apply" className="px-5 pb-24 pt-10 sm:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#7A9E9F]/25 bg-white/[0.075] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#9fc6c7]">
            
              </p>
              <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.02em] text-slate-50">
                Kierunek, który uczy badać człowieka i inteligentnych technologii.
              </h2>
            </div>
            <a
              
            >
      
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
