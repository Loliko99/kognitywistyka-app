# Wymagania Biznesowe

## Cele produktu
- Dostarczać krótkie i angażujące ciekawostki kognitywistyczne w języku polskim.
- Umożliwiać szybkie rozwinięcie ciekawostki do pełniejszego wyjaśnienia.
- Połączyć wiarygodne archiwum statyczne z generowaniem nowych faktów przez AI.
- Zachować stabilność działania nawet wtedy, gdy integracja AI nie odpowiada.

## User Stories
- Jako użytkownik chcę zobaczyć ciekawostkę dnia, aby od razu dostać wartościową treść.
- Jako użytkownik chcę kliknąć "Losuj ciekawostkę", aby otrzymać nową ciekawostkę wygenerowaną przez AI.
- Jako użytkownik chcę rozwinąć ciekawostkę AI, aby zobaczyć wyjaśnienie, przykład i znaczenie tematu.
- Jako użytkownik chcę przejść do pełnej wersji faktu z archiwum, aby przeczytać jego szczegóły na osobnej stronie.
- Jako użytkownik chcę filtrować archiwum po kategoriach, aby szybciej znaleźć interesujące mnie tematy.
- Jako właściciel produktu chcę, aby aplikacja działała bez awarii nawet przy błędzie AI.

## Przypadki użycia
- Wyświetlenie strony głównej z faktem dnia.
- Wylosowanie nowej ciekawostki AI.
- Rozwinięcie ciekawostki AI na stronie głównej.
- Otwarcie statycznej podstrony `/fact/[id]`.
- Filtrowanie archiwum po kategoriach.

## Ograniczenia biznesowe
- Brak kont użytkowników i logowania.
- Brak płatności i subskrypcji.
- Treści są w języku polskim.
- Wygenerowane ciekawostki AI nie są zapisywane na stałe.
- Repozytorium jest źródłem prawdy dla dokumentacji, planów i statycznych faktów.
