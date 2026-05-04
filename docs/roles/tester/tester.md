# Tester

## Strategia testów
- Testy jednostkowe dla logiki pobierania i losowania faktów.
- Testy integracyjne dla strony głównej i strony szczegółów.
- Testy regresyjne dla filtrowania kategorii i fallbacku AI.

## Scenariusze testowe
- Użytkownik widzi fakt dnia po wejściu na stronę.
- Kliknięcie "Losuj ciekawostkę" wyświetla nową ciekawostkę lub fallback z lokalnej bazy.
- Kliknięcie faktu otwiera stronę szczegółów.
- Błąd AI nie blokuje strony i wyświetlany jest komunikat zastępczy.

## Przypadki edge-case
- Brak danych w `data/facts.ts`.
- Nieprawidłowy format zwrócony przez API AI.
- Błąd sieci podczas wywoływania `/api/fact`.
- Przejście do nieistniejącego `id` faktu.
