# System Overview

## Cel Systemu
Aplikacja prezentuje kognitywistykę jako nowoczesny obszar badań oraz udostępnia generator i archiwum ciekawostek poznawczych. Strona łączy landing page kierunku, statyczną bazę faktów, generowanie AI i opcjonalne trwałe linki do ciekawostek AI.

## Główne Elementy Systemu
- **Next.js App Router** - routing, strona główna, dynamiczne podstrony faktów i endpoint API.
- **Landing page** - nowoczesny, ciemny interfejs w klimacie laboratorium poznania.
- **Sekcja ciekawostek** - główna atrakcja strony, umieszczona wysoko pod hero.
- **API `/api/fact`** - generuje ciekawostkę przez Gemini, waliduje odpowiedź i zwraca fallback.
- **Supabase REST API** - opcjonalnie zapisuje wygenerowane fakty AI.
- **Lokalna baza faktów** - `data/facts.ts` jako źródło prawdy dla statycznych ciekawostek.
- **Testy** - `tests/` sprawdza logikę faktów i parser odpowiedzi API.

## Przepływ Informacji
1. Użytkownik otwiera `/`.
2. Strona renderuje hero, generator ciekawostek, archiwum, sekcje kierunku, kariery i badań.
3. Kliknięcie "Wygeneruj ciekawostkę AI" wywołuje `/api/fact`.
4. Endpoint próbuje wygenerować nowy fakt przez Gemini.
5. Odpowiedź modelu jest parsowana i walidowana.
6. Jeśli Supabase jest skonfigurowane, fakt AI może zostać zapisany i otrzymać link `/fact/ai-*`.
7. Jeśli Gemini lub Supabase zawiodą, aplikacja korzysta z lokalnego fallbacku.
8. Podstrona `/fact/[id]` renderuje fakt statyczny albo zapisany fakt AI.

## Diagram Tekstowy
```text
Browser
  -> Next.js App Router
    -> /
      -> HomePageContent
      -> data/facts.ts
    -> /api/fact
      -> Gemini API
      -> Supabase REST API
      -> local fallback
    -> /fact/[id]
      -> lib/facts.ts
      -> lib/ai-facts.ts
```

## Kluczowe Pliki
- `components/HomePageContent.tsx`
- `components/FactCard.tsx`
- `components/FactDetails.tsx`
- `app/api/fact/route.ts`
- `app/fact/[id]/page.tsx`
- `lib/facts.ts`
- `lib/ai-facts.ts`
- `data/facts.ts`
- `tests/`
