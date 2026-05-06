# Dokumentacja SDD

Ten katalog opisuje projekt zgodnie z podejściem Spec Driven Development.

## Struktura
- `architecture/` - opis systemu i decyzje architektoniczne.
- `business/` - cele biznesowe, user stories i przypadki użycia.
- `tech/` - stos technologiczny i konwencje.
- `plans/` - małe plany funkcjonalności.
- `roles/` - perspektywy Product Ownera, UX/UI, Architekta, Developera i Testera.
- `tech/supabase_ai_facts.sql` - schemat tabeli dla trwałych ciekawostek AI.

## Workflow plan
Wejście:
- krótki opis funkcjonalności.

Wyjście:
- nowy plik `docs/plans/PLAN_*.md`.

Zasady:
- jeden plan opisuje jedną małą funkcjonalność,
- plan zawiera cel, zakres, wymagania, kontekst techniczny, kroki, kryteria akceptacji i testy,
- plan jest kontraktem dla implementacji.

## Workflow implement
Wejście:
- zatwierdzony plik planu z `docs/plans`.

Wyjście:
- kod,
- testy lub weryfikacja,
- aktualizacja `implemented_plans.md`,
- aktualizacja `implemented_features.md`.

Zasady:
- nie rozszerzamy zakresu poza plan,
- po zmianach uruchamiamy lint i build,
- commit opisuje konkretną funkcjonalność.
