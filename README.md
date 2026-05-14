# Daily Spark - Ciekawostki Kognitywistyczne

Aplikacja Next.js prezentująca ciekawostki o poznaniu, mózgu i umyśle. Strona łączy statyczne archiwum faktów z generowaniem nowych ciekawostek przez AI oraz nowoczesnym landing page kierunku kognitywistyka.

## Wymagania
- Node.js 20+
- npm 10+

## Instalacja
```bash
npm install
```

## Uruchomienie lokalne
```bash
npm.cmd run dev
```

Aplikacja będzie dostępna pod adresem [http://localhost:3000](http://localhost:3000).

## Build produkcyjny
```bash
npm.cmd run build
npm.cmd run start
```

## Zmienne środowiskowe
Generowanie AI wymaga zmiennej:

```text
GOOGLE_AI_KEY
```

Na Vercel ustaw ją w `Project Settings -> Environment Variables`. Jeśli klucz nie jest dostępny albo Gemini zwróci błąd, aplikacja użyje fallbacku z lokalnej bazy faktów.

## Trwałe linki dla ciekawostek AI
Żeby wygenerowane ciekawostki AI miały własne linki `/fact/ai-*`, skonfiguruj Supabase:

1. Utwórz projekt w Supabase.
2. W SQL Editor uruchom skrypt z `docs/tech/supabase_ai_facts.sql`.
3. W Vercel dodaj zmienne środowiskowe:

```text
SUPABASE_URL
SUPABASE_SERVICE_ROLE_KEY
SUPABASE_AI_FACTS_TABLE=ai_facts
```

`SUPABASE_AI_FACTS_TABLE` jest opcjonalne, bo domyślna tabela to `ai_facts`.

## Jak działają dane
- Statyczne dane są w `data/facts.ts`.
- Model ciekawostki jest w `domain/fact.ts`.
- Dane są walidowane przez `lib/validation.ts`.
- Logika pobierania, filtrowania i wyboru ciekawostki jest w `lib/facts.ts`.
- Ciekawostki AI są zapisywane na stałe, jeśli skonfigurowano Supabase.

## Trasy
- `/` - strona główna z landing page, generatorem AI i archiwum.
- `/fact/[id]` - szczegóły statycznej lub zapisanej ciekawostki.
- `/api/fact` - endpoint generujący ciekawostkę AI lub fallback.

## Spec Driven Development
Dokumentacja SDD znajduje się w `docs/`.

Najważniejsze pliki:
- `docs/plans/PLAN_random_fact.md`
- `docs/plans/PLAN_ai_generated_fact.md`
- `docs/plans/PLAN_persist_ai_facts.md`
- `docs/plans/PLAN_scientific_landing_redesign.md`
- `implemented_plans.md`
- `implemented_features.md`

## Kontrola jakości
```bash
npm.cmd run lint
npm.cmd test
npm.cmd run build
```
