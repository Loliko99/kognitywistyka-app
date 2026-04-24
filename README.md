# Daily Spark - Ciekawostki Kognitywistyczne Dnia

Production-ready aplikacja Next.js serwujaca codzienna ciekawostke naukowa o poznaniu i umysle.

## Wymagania

- Node.js 20+
- npm 10+

## Instalacja

```bash
npm install
```

## Uruchomienie lokalnie

```bash
npm run dev
```

Aplikacja bedzie dostepna pod adresem [http://localhost:3000](http://localhost:3000).

## Build produkcyjny

```bash
npm run build
npm run start
```

## Jak dzialaja dane

- Dane sa lokalne i znajduja sie w `data/facts.ts`.
- Kazda ciekawostka ma scisly model `Fact` zdefiniowany w `domain/fact.ts`.
- Dane sa walidowane przez helpery w `lib/validation.ts`.
- Logika pobierania, filtrowania i wyboru ciekawostki jest w `lib/facts.ts`.

## Jak dodac nowa ciekawostke

1. Otworz `data/facts.ts`.
2. Dodaj nowy obiekt zgodny z interfejsem `Fact`:
   - `id` (unikalny slug),
   - `title`,
   - `hook`,
   - `explanation`,
   - `example`,
   - `whyItMatters`,
   - `category`.
3. Zapisz plik i uruchom:

```bash
npm run lint
npm run build
```

Jesli walidacja modelu przejdzie, nowa ciekawostka bedzie dostepna automatycznie.

## Architektura projektu

Warstwy:

- `app/` - routing i strony (App Router)
- `components/` - UI (komponenty prezentacyjne i interakcyjne)
- `domain/` - typy i model domenowy
- `data/` - zrodlo danych
- `lib/` - logika biznesowa i walidacja

Najwazniejsze funkcje logiki:

- `getFactById(id)`
- `getFactsByCategory(category)`
- `getRandomFact()`
- `getFactOfTheDay(date)` - deterministyczna ciekawostka dnia (ten sam wynik dla tego samego dnia)

## Trasy

- `/` - strona glowna z ciekawostka dnia, filtrem kategorii i losowaniem
- `/fact/[id]` - szczegoly ciekawostki i podobne wpisy
- `not-found` - bezpieczny fallback dla nieprawidlowego ID
