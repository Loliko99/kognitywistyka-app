## 3. Stack Techniczny
- **Frontend:** Next.js 14, React, Tailwind CSS.
- **Ikony:** Lucide React.
- **Hosting:** Vercel.
# Specyfikacja i Plan Wdrożenia (SDD)

## 1. Specyfikacja Funkcjonalna
- **Cel:** Edukacyjna aplikacja webowa prezentująca ciekawostki kognitywistyczne.
- **Model Danych:** Obiekt `Fact` zawierający pola: title, hook, explanation, example, category.
- **Funkcje:** Losowanie faktów, filtrowanie tematyczne, interaktywny interfejs użytkownika.

## 2. Architektura i Stack
- **Framework:** Next.js (React).
- **Stylizacja:** Tailwind CSS (podejście Utility-First).
- **Typowanie:** TypeScript (zapewnienie spójności danych).

## 3. Plan Wdrożeniowy (Deployment Plan)
- **Repozytorium:** Kod źródłowy hostowany na platformie GitHub.
- **CI/CD:** Automatyczne budowanie aplikacji przy każdym pushu na gałąź main.
- **Hosting:** Vercel (Edge Network).
- **Link do aplikacji:** https://kognitywistyka-app.vercel.app