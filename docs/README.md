# Dokumentacja SDD

Ten katalog opisuje projekt zgodnie z podejściem Spec Driven Development. Repozytorium jest źródłem prawdy dla planów, decyzji technicznych, ról projektowych i statusu wdrożonych funkcjonalności.

## Struktura
- `architecture/` - opis systemu, diagram tekstowy i decyzje architektoniczne ADR.
- `business/` - cele produktu, user stories, przypadki użycia i ograniczenia biznesowe.
- `tech/` - stos technologiczny, uzasadnienia, ograniczenia i konwencje projektowe.
- `plans/` - małe plany funkcjonalności w formacie `PLAN_*.md`.
- `roles/` - perspektywy Product Ownera, UX/UI, Architekta, Developera i Testera.
- `tech/supabase_ai_facts.sql` - schemat tabeli dla trwałych ciekawostek AI.

## Rejestry projektu
- `../implemented_plans.md` zawiera listę planów i ich status.
- `../implemented_features.md` opisuje wdrożone funkcjonalności oraz powiązane plany.

## Workflow plan
Wejście:
- krótki opis funkcjonalności.

Wyjście:
- nowy plik `docs/plans/PLAN_*.md`.

Zasady:
- jeden plan opisuje jedną małą funkcjonalność,
- plan zawiera cel, zakres, wymagania, kontekst techniczny, kroki, kryteria akceptacji i testy,
- plan jest kontraktem dla implementacji,
- plan musi być jednoznaczny i możliwy do zweryfikowania.

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
- po zmianach uruchamiamy lint, testy i build,
- commit opisuje konkretną funkcjonalność,
- dokumentacja musi zostać zaktualizowana razem z kodem.

## Workflow review
Wejście:
- plan, implementacja lub zestaw zmian.

Wyjście:
- lista niespójności między planem a kodem,
- brakujące aktualizacje dokumentacji,
- decyzja, czy plan i rejestry wymagają korekty.

Zasady:
- review poprzedza commit,
- brak planu dla wdrożonej funkcjonalności jest błędem SDD,
- rejestry muszą odzwierciedlać faktyczny stan projektu.
