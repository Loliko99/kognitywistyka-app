# Trwałe Linki Dla Ciekawostek AI

## 1. Cel
Umożliwić zapisywanie ciekawostek wygenerowanych przez AI w bazie danych, aby mogły mieć stałe linki `/fact/ai-*`.

## 2. Zakres
Wchodzi w zakres:
- opcjonalna integracja z Supabase,
- zapis wygenerowanego faktu AI do tabeli `ai_facts`,
- odczyt faktu AI po `id`,
- linkowanie wygenerowanej ciekawostki do `/fact/[id]`, jeśli zapis się uda,
- fallback do rozwijania na stronie głównej, jeśli baza nie jest skonfigurowana.

Nie wchodzi w zakres:
- panel administracyjny,
- edycja zapisanych faktów,
- konta użytkowników,
- historia prywatnych losowań.

## 3. Wymagania funkcjonalne
- Po wygenerowaniu ciekawostki AI system próbuje zapisać ją w Supabase.
- Jeśli zapis się uda, odpowiedź API zawiera `persisted: true`.
- Jeśli zapis się nie uda, odpowiedź API zawiera `persisted: false`.
- Dla `persisted: true` karta ciekawostki prowadzi na `/fact/ai-*`.
- Strona `/fact/ai-*` pobiera fakt z Supabase.
- Brak konfiguracji Supabase nie blokuje generowania AI.

## 4. Wymagania niefunkcjonalne
- Klucz Supabase service role nie może trafić do klienta.
- Odczyt i zapis bazy odbywają się tylko po stronie serwera.
- System musi działać bez bazy danych.
- Slug AI musi być stabilny i bez polskich znaków.

## 5. Kontekst techniczny
- Integracja: `lib/ai-facts.ts`.
- API generowania: `app/api/fact/route.ts`.
- Strona szczegółów: `app/fact/[id]/page.tsx`.
- Zmienne środowiskowe: `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, opcjonalnie `SUPABASE_AI_FACTS_TABLE`.
- Schemat SQL: `docs/tech/supabase_ai_facts.sql`.

## 6. Kroki implementacji
1. Dodać helpery Supabase REST API.
2. Dodać generowanie `id` w formacie `ai-*`.
3. Zapisać fakt AI po poprawnej odpowiedzi Gemini.
4. Zwrócić do frontendu informację `generatedByAi` i `persisted`.
5. Dodać odczyt faktów AI na `/fact/[id]`.
6. Dodać fallback, jeśli baza nie jest skonfigurowana.
7. Zaktualizować dokumentację i rejestry.

## 7. Kryteria akceptacji
- [x] AI generuje nowe ciekawostki spoza lokalnego pliku.
- [x] API próbuje zapisać wygenerowany fakt w Supabase.
- [x] Zapisany fakt AI może mieć stały link `/fact/ai-*`.
- [x] Aplikacja działa bez Supabase.
- [x] Dokumentacja zawiera instrukcję utworzenia tabeli.

## 8. Testy
- Unit: generowanie slugów AI i walidacja danych.
- Integracyjne: parsowanie odpowiedzi `/api/fact`.
- Manualne: wygenerowanie faktu z aktywnym Supabase i wejście na jego link.
