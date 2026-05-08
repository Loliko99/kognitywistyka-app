# Developer

## Standardy kodu
- Używaj TypeScript do typowania komponentów i danych.
- Stosuj porządek importów i czytelne nazwy funkcji.
- Unikaj logiki biznesowej w komponentach prezentacyjnych.

## Konwencje
- `domain/fact.ts` definiuje typ `Fact` i listę kategorii.
- `lib/facts.ts` zawiera logikę biznesową dla faktów.
- `components/` zawiera UI i prezenację.
- `app/` zawiera routing i strony.

## Workflow implementacji
1. Przeczytaj plan w `docs/plans/PLAN_random_fact.md`.
2. Zaimplementuj funkcję zgodnie z zakresem planu.
3. Dodaj testy dla logiki biznesowej.
4. Zaktualizuj `implemented_plans.md` i `implemented_features.md`.
