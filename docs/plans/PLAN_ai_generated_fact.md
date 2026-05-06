# Generowanie Ciekawostki Przez AI

## 1. Cel
Umożliwić użytkownikowi wylosowanie nowej ciekawostki kognitywistycznej wygenerowanej przez AI oraz rozwinięcie jej bezpośrednio na stronie głównej.

## 2. Zakres
Wchodzi w zakres:
- przycisk "Losuj ciekawostkę",
- wywołanie endpointu `/api/fact`,
- generowanie ciekawostki przez Gemini,
- walidacja odpowiedzi AI,
- fallback do lokalnej bazy,
- rozwinięcie ciekawostki AI na stronie głównej.

Nie wchodzi w zakres:
- trwały zapis wygenerowanych ciekawostek,
- osobne URL-e dla ciekawostek AI,
- historia losowań użytkownika,
- logowanie.

## 3. Wymagania funkcjonalne
- Kliknięcie przycisku wywołuje `/api/fact`.
- API zwraca pola: `title`, `hook`, `explanation`, `example`, `whyItMatters`, `category`.
- Frontend tworzy tymczasowy fakt z identyfikatorem `ai-*`.
- Dla faktu AI karta pokazuje przycisk "Rozwiń ciekawostkę".
- Rozwinięcie pokazuje wyjaśnienie, przykład i sekcję "Dlaczego to ważne".
- Jeśli Gemini nie działa, użytkownik nadal otrzymuje ciekawostkę z lokalnej bazy.

## 4. Wymagania niefunkcjonalne
- Klucz API nie może trafić do frontendu.
- Endpoint musi obsługiwać błędy i timeout.
- Odpowiedź AI musi być walidowana przed użyciem.
- UI nie może zawieszać się przy długiej odpowiedzi AI.

## 5. Kontekst techniczny
- API: `app/api/fact/route.ts`.
- Frontend: `components/HomePageContent.tsx`.
- Prezentacja: `components/FactCard.tsx`, `components/FactDetails.tsx`.
- Dane fallback: `data/facts.ts`, `lib/facts.ts`.
- Zmienna środowiskowa: `GOOGLE_AI_KEY`.

## 6. Kroki implementacji
1. Dodać endpoint `/api/fact`.
2. Połączyć endpoint z Gemini przez `@google/generative-ai`.
3. Wymusić odpowiedź JSON w promptcie i konfiguracji modelu.
4. Dodać walidację wymaganych pól i kategorii.
5. Dodać timeout i fallback do lokalnej bazy.
6. Połączyć przycisk losowania z endpointem.
7. Dodać rozwijanie szczegółów faktu AI bez przechodzenia na osobną podstronę.
8. Sprawdzić działanie z poprawnym i brakującym kluczem API.

## 7. Kryteria akceptacji
- [x] Użytkownik może kliknąć "Losuj ciekawostkę".
- [x] Aplikacja pokazuje ciekawostkę wygenerowaną przez AI lub fallback.
- [x] Użytkownik może rozwinąć ciekawostkę AI na stronie głównej.
- [x] Endpoint nie zwraca błędu 500 przy problemie z Gemini.
- [x] Klucz API jest używany wyłącznie po stronie serwera.

## 8. Testy
- Unit: walidacja kategorii i struktury danych.
- Integracyjne: wywołanie `/api/fact` z poprawnym i brakującym kluczem.
- Manualne: losowanie kilku faktów, rozwijanie szczegółów, sprawdzenie konsoli przeglądarki.
