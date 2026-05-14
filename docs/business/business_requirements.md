# Wymagania Biznesowe

## Cele produktu
- Dostarczać krótkie, angażujące ciekawostki kognitywistyczne w języku polskim.
- Pokazać kognitywistykę jako nowoczesny, interdyscyplinarny kierunek związany z badaniami, AI, psychologią, neurobiologią i HCI.
- Umożliwić użytkownikowi wygenerowanie nowej ciekawostki AI oraz przeczytanie jej rozszerzonej wersji.
- Zapewnić stabilność działania dzięki lokalnej bazie fallback.
- Umożliwić trwałe linki do ciekawostek AI po skonfigurowaniu Supabase.

## User Stories
- Jako użytkownik chcę od razu zobaczyć generator ciekawostek, bo to główna atrakcja strony.
- Jako użytkownik chcę wygenerować nową ciekawostkę AI, aby poznać temat spoza statycznej bazy.
- Jako użytkownik chcę rozwinąć ciekawostkę, aby zobaczyć wyjaśnienie, przykład i znaczenie.
- Jako użytkownik chcę przeglądać archiwum i filtrować ciekawostki po kategoriach.
- Jako kandydat chcę zobaczyć, czym jest kognitywistyka i jakie daje ścieżki kariery.
- Jako właściciel produktu chcę, żeby aplikacja działała mimo awarii Gemini lub braku Supabase.

## Przypadki Użycia
- Otwarcie strony głównej z hero i sekcją ciekawostek wysoko na stronie.
- Wygenerowanie ciekawostki AI przez `/api/fact`.
- Rozwinięcie ciekawostki AI na stronie głównej albo otwarcie stałego linku `/fact/ai-*`.
- Przejście do podstrony statycznej ciekawostki `/fact/[id]`.
- Filtrowanie archiwum po kategorii.
- Zapoznanie się z sekcjami: kierunek, kariera, badania, technologie.

## Ograniczenia Biznesowe
- Brak logowania i kont użytkowników.
- Brak panelu administracyjnego.
- Treści są po polsku.
- Trwałe linki AI wymagają konfiguracji Supabase.
- Projekt jest prowadzony zgodnie z SDD: plan poprzedza implementację, a rejestry opisują stan wdrożenia.
