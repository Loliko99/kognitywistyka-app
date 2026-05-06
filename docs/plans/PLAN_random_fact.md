# Losowanie i Przeglądanie Statycznych Ciekawostek

## 1. Cel
Umożliwić użytkownikowi przeglądanie statycznego archiwum ciekawostek kognitywistycznych, filtrowanie ich po kategoriach oraz otwieranie pełnej wersji na osobnej stronie.

## 2. Zakres
Wchodzi w zakres:
- fakt dnia na stronie głównej,
- lista statycznych ciekawostek,
- filtrowanie po kategoriach,
- karta ciekawostki z tytułem, kategorią i krótkim opisem,
- dynamiczna podstrona `/fact/[id]` dla faktów z archiwum.

Nie wchodzi w zakres:
- generowanie ciekawostek przez AI,
- zapisywanie treści w bazie danych,
- konta użytkowników,
- panel administracyjny.

## 3. Wymagania funkcjonalne
- Strona główna wyświetla fakt dnia.
- Użytkownik widzi archiwum ciekawostek.
- Użytkownik może wybrać kategorię.
- Lista ciekawostek zmienia się po wybraniu kategorii.
- Kliknięcie "Czytaj całą ciekawostkę" otwiera `/fact/[id]`.
- Nieznany `id` pokazuje bezpieczny komunikat o braku ciekawostki.

## 4. Wymagania niefunkcjonalne
- Strona główna powinna renderować się szybko z lokalnych danych.
- UI powinien być responsywny.
- Slugi faktów powinny być stabilne i bez polskich znaków.
- Dane powinny być typowane i walidowane.

## 5. Kontekst techniczny
- Komponenty: `FactCard`, `FactDetails`, `CategoryFilter`, `HomePageContent`.
- Routing: `app/page.tsx`, `app/fact/[id]/page.tsx`.
- Dane: `data/facts.ts`.
- Logika: `lib/facts.ts`, `lib/validation.ts`.
- Model: `domain/fact.ts`.

## 6. Kroki implementacji
1. Zdefiniować model `Fact`.
2. Dodać lokalne dane w `data/facts.ts`.
3. Dodać walidację danych.
4. Dodać helpery pobierania i filtrowania faktów.
5. Zbudować komponent karty i szczegółów.
6. Zbudować stronę główną z filtrem kategorii.
7. Zbudować dynamiczną stronę szczegółów.
8. Zweryfikować poprawność slugów.

## 7. Kryteria akceptacji
- [x] Strona główna pokazuje fakt dnia.
- [x] Archiwum wyświetla statyczne ciekawostki.
- [x] Filtrowanie kategorii działa.
- [x] Podstrona `/fact/neuroplastycznosc` pokazuje pełną ciekawostkę.
- [x] Podstrona `/fact/falszywe-wspomnienia` pokazuje pełną ciekawostkę.
- [x] Nieznany adres pokazuje bezpieczny komunikat.

## 8. Testy
- Unit: walidacja `getFactById`, `getFactsByCategory`, `getFactOfTheDay`.
- Integracyjne: render strony głównej i strony szczegółów.
- Manualne: kliknięcie kategorii, wejście w kilka podstron faktów, sprawdzenie wersji mobilnej.
