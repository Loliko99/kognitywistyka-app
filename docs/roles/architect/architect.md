# Architect

## Decyzje techniczne
- Next.js App Router do routingu i API.
- Lokalna baza `data/facts.ts` jako podstawowy magazyn treści.
- API AI jako opcjonalna warstwa generowania faktów.

## Modele systemu
- Stateless frontend renderujący dane z `lib/facts.ts`.
- Backend API generujące JSON faktu lub zwracające błąd.
- Klient obsługujący ladowanie i fallback if AI fails.

## Integracje
- `@google/generative-ai` do opcjonalnego żądania generowania faktu.
- `next/link` i dynamiczny routing dla podstron faktów.
