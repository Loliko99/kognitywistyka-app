# Stos technologiczny

## Główne technologie
- `Next.js` 16 — frontend i routing aplikacji.
- `React` 19 — budowa komponentów UI.
- `TypeScript` — typowanie i bezpieczeństwo kodu.
- `Tailwind CSS` — stylizacja interfejsu.

## Wybór technologii
- Next.js zapewnia łatwą konfigurację routingu, API oraz wsparcie dla serwerowego renderowania.
- TypeScript minimalizuje błędy związane z typami i ułatwia rozwój.
- Tailwind CSS upraszcza szybkie tworzenie interfejsu bez dodatkowego CSS.

## Ograniczenia technologiczne
- Aplikacja obecnie nie korzysta z bazy danych.
- Zawartość jest przechowywana lokalnie w pliku `data/facts.ts`.
- Integracja AI wymaga środowiskowej zmiennej `GOOGLE_AI_KEY`.

## Konwencje projektowe
- Dane muszą przechodzić walidację poprzez `lib/validation.ts`.
- Każdy komponent powinien być typowany w oparciu o `domain/fact.ts`.
- Interfejsy powinny być proste i czytelne, bez nadmiernych zależności.
