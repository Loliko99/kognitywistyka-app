# Stos Technologiczny

## Stack
- `Next.js 16` - routing, renderowanie stron i endpoint API.
- `React 19` - komponenty interfejsu.
- `TypeScript` - typowanie domeny i kontraktów danych.
- `Tailwind CSS` - stylowanie UI.
- `@google/generative-ai` - integracja z Gemini.
- `Vercel` - hosting i automatyczny deploy po pushu do GitHuba.

## Uzasadnienie wyborów
- Next.js pozwala utrzymać frontend i prosty backend w jednym repozytorium.
- TypeScript zmniejsza ryzyko niespójności między danymi a komponentami.
- Lokalny plik `data/facts.ts` jest wystarczający dla MVP i zgodny z wymaganiem audytowalności.
- Vercel upraszcza deployment i obsługę zmiennych środowiskowych.

## Ograniczenia technologiczne
- Brak trwałego zapisu faktów AI.
- Brak bazy danych.
- Gemini wymaga zmiennej środowiskowej `GOOGLE_AI_KEY`.
- Endpoint AI musi mieć fallback, ponieważ usługa zewnętrzna może zwrócić błąd albo przekroczyć limit czasu.

## Konwencje projektowe
- Każda funkcjonalność powinna mieć plan w `docs/plans/PLAN_*.md`.
- Po implementacji trzeba zaktualizować `implemented_plans.md` i `implemented_features.md`.
- Model faktu jest definiowany w `domain/fact.ts`.
- Dane statyczne muszą przechodzić walidację z `lib/validation.ts`.
- Identyfikatory faktów powinny być slugami ASCII, np. `falszywe-wspomnienia`.
- Teksty widoczne dla użytkownika powinny być po polsku i z polskimi znakami.

## Komendy kontrolne
```bash
npm.cmd run lint
npm.cmd run build
```
