# System Overview

## Cel systemu
Aplikacja prezentuje użytkownikowi krótkie ciekawostki kognitywistyczne oraz pozwala rozwinąć je do pełniejszego wyjaśnienia. System łączy statyczne archiwum faktów z opcjonalnym generowaniem nowych ciekawostek przez AI.

## Kontekst systemu
- Użytkownik korzysta z aplikacji przez przeglądarkę.
- Aplikacja działa jako projekt Next.js wdrożony na Vercel.
- Statyczne fakty są zapisane w repozytorium w `data/facts.ts`.
- Endpoint `/api/fact` komunikuje się z Gemini przez `@google/generative-ai`, jeśli dostępna jest zmienna `GOOGLE_AI_KEY`.
- Wygenerowane fakty AI mogą być zapisywane w Supabase, jeśli skonfigurowano zmienne środowiskowe bazy.
- Jeśli integracja AI zawiedzie, endpoint zwraca bezpieczny fallback z lokalnej bazy.

## Główne elementy
- `app/page.tsx` - strona główna.
- `components/HomePageContent.tsx` - logika wyboru kategorii, losowania i rozwijania faktu AI.
- `components/FactCard.tsx` - karta ciekawostki.
- `components/FactDetails.tsx` - pełna wersja ciekawostki.
- `app/fact/[id]/page.tsx` - dynamiczna podstrona statycznej ciekawostki.
- `app/api/fact/route.ts` - endpoint generowania ciekawostki AI.
- `lib/facts.ts` - logika pobierania i filtrowania lokalnych faktów.
- `lib/validation.ts` - walidacja modelu danych.
- `domain/fact.ts` - kontrakt domenowy `Fact`.

## Przepływ informacji
1. Użytkownik otwiera stronę główną.
2. Next.js renderuje fakt dnia i archiwum z lokalnej bazy.
3. Użytkownik klika "Losuj ciekawostkę".
4. Frontend wywołuje `/api/fact`.
5. API próbuje wygenerować fakt przez Gemini i waliduje format odpowiedzi.
6. Jeśli Gemini nie działa, API zwraca losowy fakt z lokalnej bazy.
7. Jeśli Supabase jest skonfigurowane, API zapisuje wygenerowany fakt AI.
8. Użytkownik może otworzyć zapisany fakt AI pod `/fact/ai-*`.
9. Jeśli baza nie jest skonfigurowana, użytkownik może rozwinąć ciekawostkę AI bezpośrednio na stronie głównej.

## Diagram tekstowy
```text
Browser
  -> Next.js App Router
    -> HomePageContent
      -> /api/fact
        -> Gemini API
        -> local fallback: data/facts.ts
        -> Supabase: ai_facts
    -> /fact/[id]
      -> lib/facts.ts
      -> data/facts.ts
```

## Granice systemu
- Aplikacja zapisuje wygenerowane ciekawostki AI tylko wtedy, gdy Supabase jest skonfigurowane.
- Bez Supabase wygenerowane ciekawostki AI istnieją tylko w aktualnym stanie interfejsu użytkownika.
- Stałe podstrony `/fact/[id]` dotyczą faktów z `data/facts.ts` oraz zapisanych faktów AI z Supabase.
