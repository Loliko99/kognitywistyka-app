# Developer

## Standardy kodu
- Kod piszemy w TypeScript.
- Komponenty React mają jawne typy propsów.
- Logika domenowa powinna trafiać do `lib/`, a model do `domain/`.
- Dane statyczne są zgodne z `Fact`.
- Widoczne teksty w UI piszemy po polsku z polskimi znakami.

## Workflow implementacji
1. Sprawdzić, czy istnieje plan w `docs/plans`.
2. Jeśli nie istnieje, najpierw utworzyć plan.
3. Implementować tylko zakres opisany w planie.
4. Uruchomić `npm.cmd run lint`.
5. Uruchomić `npm.cmd run build`.
6. Zaktualizować `implemented_plans.md`.
7. Zaktualizować `implemented_features.md`.
8. Zrobić commit i push.

## Konwencje
- Nazwy planów: `PLAN_<nazwa_funkcjonalnosci>.md`.
- Slugi faktów: małe litery, myślniki, bez polskich znaków.
- Kategorie: wyłącznie wartości z `domain/fact.ts`.
- API nie zwraca technicznych błędów użytkownikowi, jeśli możliwy jest fallback.
