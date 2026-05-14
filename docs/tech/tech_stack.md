# Stos Technologiczny

## Stack
- `Next.js 16` - routing, renderowanie stron i endpoint API.
- `React 19` - komponenty interfejsu.
- `TypeScript` - typowanie domeny i kontraktów danych.
- `Tailwind CSS` - stylowanie UI.
- `lucide-react` - minimalistyczna ikonografia.
- `@google/generative-ai` - integracja z Gemini.
- `Supabase REST API` - opcjonalny zapis wygenerowanych ciekawostek AI.
- `Vercel` - hosting i automatyczny deploy po pushu.

## Uzasadnienie Wyborów
- Next.js pozwala utrzymać frontend, routing i backend API w jednym repozytorium.
- TypeScript zmniejsza ryzyko niespójności danych.
- Tailwind CSS ułatwia szybkie iteracje UI bez osobnego systemu CSS.
- Supabase REST API nie wymaga dodatkowego klienta npm i działa po stronie serwera.
- Vercel upraszcza wdrożenie oraz konfigurację zmiennych środowiskowych.

## Ograniczenia Technologiczne
- Gemini wymaga zmiennej `GOOGLE_AI_KEY`.
- Trwały zapis AI wymaga `SUPABASE_URL` i `SUPABASE_SERVICE_ROLE_KEY`.
- Bez Supabase ciekawostki AI są dostępne tylko w bieżącym stanie UI.
- Brak panelu admina oznacza, że statyczne fakty są edytowane w `data/facts.ts`.

## Konwencje Projektowe
- Każda funkcjonalność ma plan w `docs/plans/PLAN_*.md`.
- Po implementacji aktualizujemy `implemented_plans.md` i `implemented_features.md`.
- Model faktu jest definiowany w `domain/fact.ts`.
- Dane statyczne muszą przechodzić walidację z `lib/validation.ts`.
- Slugi faktów są małymi literami, z myślnikami i bez polskich znaków.
- Widoczne teksty w UI są po polsku i bez artefaktów kodowania.

## Komendy Kontrolne
```bash
npm.cmd run lint
npm.cmd test
npm.cmd run build
```
