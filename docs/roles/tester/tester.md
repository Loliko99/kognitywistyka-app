# Tester

## Strategia Testów
Minimalna kontrola jakości obejmuje lint, testy automatyczne i build produkcyjny. Dodatkowo wymagane są testy manualne głównych przepływów użytkownika.

## Scenariusze Testowe
- Strona główna renderuje się bez błędów.
- Sekcja ciekawostek jest widoczna wysoko na stronie.
- Przycisk "Wygeneruj ciekawostkę AI" działa.
- Ciekawostka AI może zostać rozwinięta.
- Archiwum filtruje fakty po kategoriach.
- `/fact/neuroplastycznosc` renderuje szczegóły bez błędu `trim`.
- Nieznany `/fact/...` pokazuje bezpieczny komunikat.

## Przypadki Edge Case
- Brak `GOOGLE_AI_KEY`.
- Gemini zwraca niepoprawny JSON.
- Gemini przekracza timeout.
- Brak Supabase.
- Nieistniejący `id` faktu.
- Użytkownik szybko klika generowanie kilka razy.

## Komendy
```bash
npm.cmd run lint
npm.cmd test
npm.cmd run build
```
