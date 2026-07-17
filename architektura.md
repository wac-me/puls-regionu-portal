# Puls Regionu — Dokumentacja Architektury i Roadmapa

Niniejszy dokument przedstawia założenia techniczne, planowaną strukturę komponentów oraz mapę drogową rozwoju portalu **Puls Regionu**. 

---

## 1. Wizja i Założenia Technologiczne

Portal ma docelowo łączyć dynamicznie zmieniające się informacje z lokalnych społeczności (sołectwa, OSP, mieszkańcy) z nowoczesnym i szybkim interfejsem użytkownika.

### Główne założenia:
*   **Etap Obecny (Projektowy):** Statyczna makieta w React 19 + Vite. Szybkie ładowanie, łatwe modyfikacje wizualne, brak bazy danych.
*   **Docelowa Architektura:** **Headless WordPress + React SPA**.
    *   **CMS:** WordPress na osobnym adresie (np. `panel.pulsregionu.pl`) jako panel redakcyjny i repozytorium treści.
    *   **Frontend:** React SPA (Vite) pobierający dane przez **WordPress REST API** (lub WPGraphQL) bezpośrednio w przeglądarce klienta (Client-Side Rendering).
    *   **Hosting:** Tradycyjny serwer współdzielony. Statycznie zbudowany folder `/dist` jest wrzucany na FTP, co minimalizuje koszty i wymagania serwerowe.

---

## 2. Mapa Drogowa (Roadmap)

### Faza 1: Porządki i Refaktoryzacja (Obecnie)
- [ ] Utworzenie i zatwierdzenie roadmapy (`architektura.md`).
- [ ] Podział gigantycznego pliku `PulsRegionu.jsx` na mniejsze, reużywalne komponenty.
- [ ] Stworzenie spójnego katalogu na komponenty: `src/components/`.

### Faza 2: Nawigacja i Nowe Podstrony
- [ ] Wdrożenie routingu (lekkie przełączanie stanów w React lub dodanie `react-router-dom`).
- [ ] Przygotowanie makiet kolejnych podstron z menu:
    - [ ] **O nas / O projekcie** (informacje o inicjatywie).
    - [ ] **Kontakt / Zgłoś temat** (formularz kontaktowy dla mieszkańców/sołtysów).
    - [ ] **Artykuły** (szablon pojedynczego artykułu/wpisu).
    - [ ] **Działy/Filary** (osobne widoki dla Eko-Regionu, Inwestycji w Regionie itd.).

### Faza 3: Usprawnienia UX i Dostępność (a11y)
- [ ] Pełne uruchomienie panelu dostępności (skróty, zmiana kontrastu, zmiana wielkości czcionki).
- [ ] Optymalizacja responsywności na urządzeniach mobilnych.
- [ ] Dodanie animacji przejść między podstronami.

### Faza 4: Przygotowanie pod Headless CMS
- [ ] Wydzielenie danych mockowych do osobnych plików JSON (np. `src/mocks/articles.json`).
- [ ] Stworzenie warstwy usługowej (Service Layer) w JS (np. `src/services/api.js`), która początkowo zwraca dane lokalne, a w przyszłości będzie odpytywać API WordPressa.

### Faza 5: Integracja z WordPress i Wdrożenie
- [ ] Instalacja i konfiguracja WordPressa na subdomenie.
- [ ] Konfiguracja Custom Post Types (np. dla sołectw, statystyk tickera, artykułów).
- [ ] Podmiana warstwy API w React na rzeczywiste WordPress REST API.
- [ ] Finalny build produkcyjny i wdrożenie na serwer współdzielony.

---

## 3. Planowany Podział na Komponenty (Refaktoryzacja `PulsRegionu.jsx`)

Aby ułatwić rozwój kodu, podzielimy plik `PulsRegionu.jsx` na następujące elementy:

### Komponenty Globalne (Katalog `src/components/layout/`):
1.  **Header.jsx** – Nawigacja, logo, przyciski społecznościowe.
2.  **Footer.jsx** – Stopka redakcyjna, linki, prawa autorskie.
3.  **AccessibilityBar.jsx** – Panel ułatwień dostępu (powiększanie tekstu, kontrast, czytelna czcionka).

### Komponenty Wspólne (Katalog `src/components/common/`):
1.  **ArticleCard.jsx** – Karta artykułu (używana na stronie głównej oraz w działach).
2.  **LiveTicker.jsx** – Pasek z aktualnymi informacjami z sołectw ("pasek giełdowy").

### Komponenty Strony Głównej (Katalog `src/components/home/`):
1.  **HeroSection.jsx** – Główny baner powitalny z wyszukiwarką lub hasłem przewodnim.
2.  **PillarGrid.jsx** – Interaktywna siatka pięciu filarów (Eko, Ziemia, Natura, Rodzina, Techno).
3.  **ActivePillarContent.jsx** – Sekcja wyświetlająca artykuły i detale wybranego obecnie filaru.
4.  **Newsletter.jsx** – Formularz zapisu na newsletter lub dołączenia do społeczności.
5.  **Partners.jsx** – Logotypy fundacji, partnerów, samorządów.

---

## 4. Przyszłe Wyzwania i Rozwiązania

*   **SEO (Search Engine Optimization):**
    *   *Problem:* React SPA renderuje treść po stronie klienta, co utrudnia indeksowanie przez niektóre roboty wyszukiwarek.
    *   *Rozwiązanie:* W przyszłości można użyć **Vite Prerender Plugin** (`vite-plugin-prerender`) do wygenerowania statycznych plików HTML podczas builda dla najważniejszych podstron, lub przejść na generator statyczny (**Astro**), zachowując komponenty Reacta.
*   **Caching danych z WordPressa:**
    *   *Problem:* Częste odpytywanie WordPress API przez każdego użytkownika może obciążyć tanie serwery współdzielone.
    *   *Rozwiązanie:* Implementacja lokalnego cache (np. w `localStorage` lub pamięci sesji), a po stronie WordPressa wtyczka do cache'owania API (np. WP REST Cache) lub generowanie statyczne (SSG).
