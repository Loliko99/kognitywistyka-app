# Tester

## Strategia testów
Projekt jest mały, więc minimalny zestaw kontroli obejmuje lint, build i testy manualne najważniejszych ścieżek użytkownika. Przy dalszym rozwoju warto dodać testy jednostkowe i integracyjne.

## Scenariusze testowe
- Strona główna renderuje się bez błędów.
- Przycisk "Losuj ciekawostkę" zmienia kartę ciekawostki.
- Ciekawostka AI pozwala kliknąć "Rozwiń ciekawostkę".
- Rozwinięta ciekawostka AI pokazuje wyjaśnienie, przykład i "Dlaczego to ważne".
- Filtr kategorii zmienia listę faktów.
- `/fact/neuroplastycznosc` pokazuje pełną ciekawostkę.
- `/fact/falszywe-wspomnienia` pokazuje pełną ciekawostkę.
- Nieznany `/fact/...` pokazuje komunikat o braku faktu.

## Edge Case
- Brak `GOOGLE_AI_KEY`.
- Gemini zwraca niepoprawny JSON.
- Gemini przekracza limit czasu.
- Lokalna baza faktów jest pusta.
- Użytkownik klika losowanie kilka razy pod rząd.

## Komendy
```bash
npm.cmd run lint
npm.cmd run build
```
