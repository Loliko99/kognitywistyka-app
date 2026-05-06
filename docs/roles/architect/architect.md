# Architect

## Decyzje techniczne
- Next.js App Router jest podstawą routingu i renderowania.
- Endpoint `/api/fact` izoluje integrację AI po stronie serwera.
- `data/facts.ts` pozostaje lokalnym źródłem prawdy dla statycznych faktów.
- Slugi w URL-ach są ASCII, aby uniknąć problemów z kodowaniem i linkowaniem.
- Ciekawostki AI są nietrwałe i rozwijane na stronie głównej.

## Modele systemu
- `Fact` opisuje pełną ciekawostkę.
- `Category` ogranicza wartości kategorii do jawnej listy.
- `GeneratedFact` w API zawiera pola faktu bez trwałego `id`.

## Integracje
- Gemini przez pakiet `@google/generative-ai`.
- Vercel jako środowisko produkcyjne.
- GitHub jako źródło deployu.

## Ryzyka
- Błąd lub limit Gemini.
- Niepoprawny JSON z modelu.
- Brak zmiennej `GOOGLE_AI_KEY`.
- Linki do faktów z polskimi znakami w slugach.

## Mechanizmy kontroli
- Walidacja danych w `lib/validation.ts`.
- Timeout w endpointcie AI.
- Fallback do lokalnej bazy.
- Build i lint przed deployem.
