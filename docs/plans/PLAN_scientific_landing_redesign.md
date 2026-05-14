# Scientific Landing Redesign

## 1. Cel
Przebudować stronę główną tak, aby wyglądała jak nowoczesne laboratorium poznania: naukowo, profesjonalnie, czytelnie i mniej generycznie niż standardowy szablon SaaS.

## 2. Zakres
Wchodzi w zakres:
- przyciemnienie palety wizualnej,
- hero section w klimacie cognitive science,
- przeniesienie sekcji ciekawostek wysoko na stronie,
- sekcje: czym jest kognitywistyka, obszary nauki, ścieżki kariery, badania i technologie,
- informacja o możliwych rolach zawodowych po kognitywistyce,
- poprawa kart, filtrów, przycisków i mikrointerakcji.

Nie wchodzi w zakres:
- zmiana modelu danych,
- zmiana dostawcy AI,
- panel administracyjny,
- system rekrutacyjny,
- nowe mechanizmy autoryzacji.

## 3. Wymagania funkcjonalne
- Strona główna pokazuje generator ciekawostek jako główną atrakcję po hero.
- Użytkownik może nadal wygenerować ciekawostkę AI.
- Użytkownik może nadal filtrować archiwum ciekawostek.
- Użytkownik widzi sekcję "Po kognitywistyce możesz pracować jako...".
- Linki nawigacji prowadzą do właściwych sekcji strony.
- Podstrony faktów nadal działają po kliknięciu z archiwum.

## 4. Wymagania niefunkcjonalne
- UI musi być czytelny na desktopie i mobile.
- Kontrast tekstu musi pozostać wystarczający na ciemnym tle.
- Strona nie może wyglądać jak generyczny landing SaaS.
- Layout nie może ukrywać głównej funkcji losowania ciekawostek na dole strony.
- Zmiany wizualne nie mogą psuć builda, lintu ani testów.

## 5. Kontekst techniczny
- Komponent główny: `components/HomePageContent.tsx`.
- Karty: `components/FactCard.tsx`, `components/FactDetails.tsx`.
- Filtry: `components/CategoryFilter.tsx`.
- Layout: `components/Layout.tsx`.
- Style globalne: `app/globals.css`.
- Strona szczegółów: `app/fact/[id]/page.tsx`.

## 6. Kroki implementacji
1. Zdefiniować ciemniejszą paletę wizualną.
2. Przebudować hero na układ editorial/scientific.
3. Przenieść sekcję ciekawostek bezpośrednio pod hero.
4. Dodać sekcje informacyjne o kierunku, karierze i badaniach.
5. Dostosować karty, filtry i przyciski do nowej estetyki.
6. Naprawić błąd routingu dynamicznych stron faktów w Next.js 16.
7. Uruchomić lint, testy i build.

## 7. Kryteria akceptacji
- [x] Sekcja ciekawostek jest widoczna wysoko na stronie.
- [x] Strona ma ciemniejszy, naukowy klimat.
- [x] Generator AI i archiwum nadal działają.
- [x] Podstrona `/fact/neuroplastycznosc` nie powoduje błędu `trim`.
- [x] Lint, testy i build przechodzą poprawnie.

## 8. Testy
- Unit: istniejące testy `lib/facts.ts`.
- Integracyjne: test parsowania odpowiedzi `/api/fact`.
- Manualne: wejście na stronę główną, kliknięcie sekcji, wejście w podstronę faktu, sprawdzenie mobile.
