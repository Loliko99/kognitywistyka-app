# Losowanie kognitywistycznej ciekawostki

## 1. Cel
Umożliwić użytkownikowi losowanie nowej ciekawostki kognitywistycznej oraz rozwinięcie jej do pełnych szczegółów.

## 2. Zakres
### Wchodzi w zakres
- wyświetlanie faktu dnia na stronie głównej,
- losowanie nowej ciekawostki przyciskając "Losuj ciekawostkę",
- prezentacja pełnej ciekawostki na osobnej stronie szczegółów,
- filtrowanie lokalnych ciekawostek po kategoriach,
- fallback do lokalnej bazy, gdy AI nie jest dostępne.

### Nie wchodzi w zakres
- logowanie użytkowników,
- baza danych z użytkownikami,
- publikacja/aplikacja wielojęzyczna,
- płatności lub subskrypcje.

## 3. Wymagania funkcjonalne
- Strona główna powinna pokazywać aktualny fakt dnia.
- Kliknięcie przycisku "Losuj ciekawostkę" powinno wywołać API i zaktualizować widok.
- Użytkownik powinien zobaczyć kartę ciekawostki wraz z nagłówkiem i krótkim hookiem.
- Kliknięcie na ciekawostkę powinno otworzyć stronę szczegółów z wyjaśnieniem, przykładem i sekcją "dlaczego to ważne".
- Użytkownik powinien móc filtrować statyczne ciekawostki po dostępnych kategoriach.

## 4. Wymagania niefunkcjonalne
- Strona powinna ładować się szybko (< 2s dla głównej strony).
- UI ma być responsywny dla desktopu i mobilnych przeglądarek.
- Aplikacja powinna działać poprawnie, gdy endpoint AI zwróci błąd.
- Kod powinien być typowany w TypeScript.

## 5. Kontekst techniczny
- Komponenty: `HomePageContent`, `FactCard`, `FactDetails`, `CategoryFilter`, `RandomFactButton`.
- API: `app/api/fact/route.ts`.
- Dane: `data/facts.ts`, `lib/facts.ts`, `lib/validation.ts`.
- Routing: `app/page.tsx`, `app/fact/[id]/page.tsx`.

## 6. Kroki implementacji
1. Utworzyć lokalną bazę ciekawostek w `data/facts.ts`.
2. Napisać logikę pobierania faktów i losowania w `lib/facts.ts`.
3. Zaimplementować stronę główną w `app/page.tsx` i komponent `HomePageContent`.
4. Dodać przycisk losowania oraz logikę fetch do `/api/fact`.
5. Stworzyć dynamiczny routing `app/fact/[id]/page.tsx` do szczegółów faktu.
6. Dodać walidację danych i fallback do lokalnej bazy, jeśli AI zawiedzie.

## 7. Kryteria akceptacji
- [ ] Strona główna wyświetla fakt dnia i listę ciekawostek.
- [ ] Można losować nową ciekawostkę.
- [ ] Można przejść do szczegółów ciekawostki.
- [ ] System działa bez klucza AI dzięki lokalnej bazie.
- [ ] Filtrowanie kategorii działa poprawnie.

## 8. Testy
- Unit: `lib/facts.ts` powinno mieć testy dla `getRandomFact`, `getFactOfTheDay`, `getFactsByCategory`.
- Integracyjne: sprawdzenie, czy strona główna renderuje fakt dnia i czy przycisk losowania aktualizuje stan.
