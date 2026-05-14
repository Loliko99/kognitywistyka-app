# Developer

## Standardy Kodu
- TypeScript dla logiki aplikacji.
- Komponenty React z jawnie opisanymi propsami.
- Logika domenowa w `lib/`.
- Model domenowy w `domain/`.
- Widoczne teksty po polsku i bez artefaktów kodowania.

## Konwencje
- Jedna funkcjonalność = jeden plan w `docs/plans`.
- Slugi faktów są ASCII i używają myślników.
- API zwraca fallback, jeśli integracja zewnętrzna zawiedzie.
- Sekcje UI powinny zachować responsywność i czytelny kontrast.

## Workflow Implementacji
1. Sprawdzić, czy istnieje plan.
2. Jeśli planu nie ma, utworzyć `PLAN_*.md`.
3. Zaimplementować tylko zakres planu.
4. Dodać lub zaktualizować testy.
5. Uruchomić lint, testy i build.
6. Zaktualizować rejestry projektu.
7. Zrobić commit i PR.

## Komendy
```bash
npm.cmd run lint
npm.cmd test
npm.cmd run build
```
