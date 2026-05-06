# Daily Spark - Ciekawostki Kognitywistyczne

Aplikacja Next.js prezentująca ciekawostki o poznaniu, mózgu i umyśle. Strona łączy statyczne archiwum faktów z opcjonalnym generowaniem nowych ciekawostek przez AI.

## Wymagania
- Node.js 20+
- npm 10+

## Instalacja
```bash
npm install
```

## Uruchomienie lokalne
```bash
npm run dev
```

Aplikacja będzie dostępna pod adresem [http://localhost:3000](http://localhost:3000).

## Build produkcyjny
```bash
npm run build
npm run start
```

## Zmienna środowiskowa
Generowanie AI wymaga zmiennej:

```text
GOOGLE_AI_KEY
```

Na Vercel ustaw ją w `Project Settings -> Environment Variables`. Jeśli klucz nie jest dostępny albo Gemini zwróci błąd, aplikacja użyje fallbacku z lokalnej bazy faktów.

## Jak działają dane
- Statyczne dane są w `data/facts.ts`.
- Model ciekawostki jest w `domain/fact.ts`.
- Dane są walidowane przez `lib/validation.ts`.
- Logika pobierania, filtrowania i wyboru ciekawostki jest w `lib/facts.ts`.
- Ciekawostki AI są dynamiczne i nie są zapisywane na stałe.

## Trasy
- `/` - strona główna z faktem dnia, archiwum i losowaniem AI.
- `/fact/[id]` - szczegóły statycznej ciekawostki.
- `/api/fact` - endpoint generujący ciekawostkę AI lub fallback.

## Spec Driven Development
Dokumentacja SDD znajduje się w `docs/`.

Najważniejsze pliki:
- `docs/plans/PLAN_random_fact.md`
- `docs/plans/PLAN_ai_generated_fact.md`
- `implemented_plans.md`
- `implemented_features.md`

## Kontrola jakości
```bash
npm.cmd run lint
npm.cmd run build
```
