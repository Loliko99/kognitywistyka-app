# Specyfikacja Projektu

## 1. Cel Produktu
Daily Spark to aplikacja edukacyjna prezentująca ciekawostki kognitywistyczne. Użytkownik może czytać fakt dnia, przeglądać archiwum, filtrować kategorie oraz generować nowe ciekawostki przez AI.

## 2. Zakres Funkcjonalny
- Strona główna z faktem dnia.
- Archiwum statycznych ciekawostek.
- Filtrowanie po kategoriach.
- Podstrony szczegółów dla faktów statycznych.
- Generowanie nowych ciekawostek przez Gemini.
- Opcjonalny zapis ciekawostek AI w Supabase.
- Stałe linki `/fact/ai-*` dla zapisanych ciekawostek AI.

## 3. Model Danych
Główny model `Fact` zawiera:
- `id`,
- `title`,
- `hook`,
- `explanation`,
- `example`,
- `whyItMatters`,
- `category`.

## 4. Stack Techniczny
- Next.js 16.
- React 19.
- TypeScript.
- Tailwind CSS.
- Gemini przez `@google/generative-ai`.
- Opcjonalnie Supabase REST API.
- Hosting na Vercel.

## 5. Proces SDD
Źródłem prawdy dla planów i decyzji jest katalog `docs/`.

Każda funkcjonalność powinna mieć:
- plan w `docs/plans`,
- opis w `implemented_features.md`,
- wpis w `implemented_plans.md`,
- weryfikację przez lint, testy i build.

## 6. Komendy Kontrolne
```bash
npm.cmd run lint
npm.cmd test
npm.cmd run build
```
