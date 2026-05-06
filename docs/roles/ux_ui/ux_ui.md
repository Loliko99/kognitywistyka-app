# UX/UI

## Przepływ użytkownika
1. Użytkownik wchodzi na stronę główną.
2. Widzi nagłówek, opis, fakt dnia i przycisk "Losuj ciekawostkę".
3. Kliknięcie przycisku uruchamia generowanie ciekawostki AI.
4. W czasie ładowania użytkownik widzi informację, że AI pracuje.
5. Po wygenerowaniu faktu użytkownik może kliknąć "Rozwiń ciekawostkę".
6. Poniżej karty pojawia się pełna wersja: wyjaśnienie, przykład i znaczenie.
7. W archiwum użytkownik może filtrować statyczne fakty i otwierać ich podstrony.

## Zasady UX
- Teksty powinny być krótkie, jasne i po polsku.
- Przyciski powinny jasno opisywać akcję.
- Ciekawostki AI nie powinny prowadzić na nieistniejące podstrony.
- Stan ładowania powinien być widoczny.
- Fallback powinien działać dyskretnie, bez technicznych komunikatów dla użytkownika.
- Widok powinien być responsywny na telefonie i desktopie.

## Makieta tekstowa
```text
[Nagłówek aplikacji]
[Opis wartości]

[Ciekawostka dnia / AI]
[Losuj ciekawostkę]
[Karta faktu]
[Rozwiń ciekawostkę]
[Pełne szczegóły, jeśli rozwinięto]

[Archiwum faktów]
[Filtry kategorii]
[Siatka kart]
```
