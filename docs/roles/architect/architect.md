# Architect

## Decyzje Techniczne
- Next.js App Router obsługuje stronę główną, dynamiczne podstrony faktów i endpoint API.
- `data/facts.ts` jest źródłem prawdy dla statycznych ciekawostek.
- `/api/fact` izoluje integrację Gemini po stronie serwera.
- Supabase jest opcjonalnym mechanizmem trwałego zapisu faktów AI.
- Dynamiczne `params` w Next.js 16 są obsługiwane asynchronicznie.

## Modele Systemu
- `Fact` - podstawowy model ciekawostki.
- `Category` - jawna lista kategorii.
- `GeneratedFactInput` - dane generowane przez AI przed przypisaniem trwałego `id`.
- `StoredGeneratedFact` - fakt AI zapisany w Supabase.

## Integracje
- Gemini przez `@google/generative-ai`.
- Supabase REST API przez `fetch`.
- Vercel jako środowisko produkcyjne.

## Ryzyka
- Brak lub błędny `GOOGLE_AI_KEY`.
- Niepoprawny JSON z Gemini.
- Brak Supabase dla trwałych linków AI.
- Niespójność dokumentacji SDD po szybkich zmianach UI.
