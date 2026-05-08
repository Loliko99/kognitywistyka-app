# System Overview

## Cel systemu
Aplikacja dostarcza użytkownikowi losowo wybraną ciekawostkę o tematyce kognitywistycznej oraz umożliwia przejście do pełnych szczegółów faktu.

## Główne elementy systemu
- **Next.js App Router**: główny framework aplikacji webowej.
- **Strona główna**: wyświetla losową ciekawostkę dnia, przycisk losowania i listę statycznych faktów.
- **API `/api/fact`**: generuje nową ciekawostkę przy użyciu integracji AI (opcjonalnie). Jeśli endpoint nie zadziała, aplikacja używa lokalnej bazy danych.
- **Strona szczegółów faktu**: Renderuje pełne informacje danej ciekawostki z lokalnej bazy.
- **Dane lokalne**: `data/facts.ts` zawiera statyczne ciekawostki i stanowi „single source of truth” dla treści.

## Przepływ informacji
1. Użytkownik otwiera stronę główną.
2. Aplikacja renderuje fakty statyczne i fakt dnia z `lib/facts.ts`.
3. Po kliknięciu "Losuj ciekawostkę" aplikacja wysyła żądanie do `/api/fact`.
4. API zwraca wygenerowaną ciekawostkę lub, w przypadku błędu, aplikacja losuje fakt z lokalnej bazy.
5. Użytkownik może kliknąć fakt, aby przejść do strony szczegółów.

## Kluczowe komponenty
- `components/HomePageContent.tsx`
- `components/FactCard.tsx`
- `components/FactDetails.tsx`
- `components/CategoryFilter.tsx`
- `components/RandomFactButton.tsx`
- `lib/facts.ts`
- `data/facts.ts`
- `app/api/fact/route.ts`
- `app/fact/[id]/page.tsx`
