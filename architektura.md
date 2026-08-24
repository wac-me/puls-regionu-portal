# Puls Regionu — architektura i kierunek rozwoju

Ostatnia aktualizacja: 2026-08-19

## 1. Stan obecny

Portal jest responsywnym frontendem React 19 + Vite 8. Aplikacja działa jako statyczne SPA i może być wdrażana na Vercel albo jako zawartość `dist/` na serwerze współdzielonym.

Obecnie:

- treści są zapisane lokalnie w komponentach,
- nawigacja działa przez React state,
- nie ma bazy danych, API ani panelu redakcyjnego,
- nie ma trwałych URL-i podstron i artykułów,
- build produkcyjny jest statyczny.

## 2. Zasada docelowej architektury

Frontend powinien pozostać niezależny od konkretnego CMS. Komponenty React nie powinny wiedzieć, czy dane pochodzą z WordPressa, własnego API PHP czy innej usługi.

Docelowy przepływ:

```text
Panel redakcyjny CMS
        ↓
Publiczne API opublikowanych treści
        ↓
Warstwa danych frontendu
        ↓
React/Vite
        ↓
Vercel lub serwer współdzielony
```

Frontend powinien korzystać z jednego interfejsu, np.:

```js
contentRepository.getArticles()
contentRepository.getArticleBySlug(slug)
contentRepository.getPillars()
contentRepository.getArchiveIssues()
contentRepository.getPage(slug)
contentRepository.getSiteSettings()
```

Pierwsza implementacja może zwracać dane lokalne. Później będzie można podmienić adapter bez przebudowy komponentów.

## 3. Model treści

Minimalne typy danych przygotowywane pod CMS:

- **Article** — tytuł, slug, zajawka, treść, autor, data, obraz, alt, filar i status publikacji,
- **Pillar** — nazwa, slug, opis, kolor i kolejność,
- **ArchiveIssue** — numer, data, plik PDF i opcjonalna miniatura,
- **Page** — treści O nas, Konkurs i Kontakt,
- **SiteSettings** — dane kontaktowe, CTA, metadane SEO i ustawienia portalu.

Lista Aktualności powinna docelowo wynikać z najnowszych lub ręcznie przypiętych artykułów, zamiast mieć osobną kopię danych.

## 4. CMS — decyzja otwarta

Rozważane warianty:

### WordPress/PHP na serwerze współdzielonym

Najbardziej pragmatyczny wariant, jeśli potrzebne są gotowe role redakcyjne, media, wersjonowanie i REST API.

### Własne API/CMS PHP

Możliwe na hostingu współdzielonym, ale wymaga samodzielnego utrzymania logowania, uprawnień, uploadu, bezpieczeństwa, backupów i edytora treści. Ma sens tylko przy bardzo małym zakresie panelu.

### Inny Headless CMS

Dopuszczalny, jeśli spełni wymagania kosztowe, hostingowe i eksportu danych. CMS wymagający stałego procesu Node zwykle nie będzie działał na typowym hostingu współdzielonym bez VPS lub usługi zewnętrznej.

Wybór CMS powinien nastąpić po małym proof of concept API.

## 5. Hosting

### Vercel + zewnętrzny CMS

- frontend wdrażany automatycznie z Git,
- CMS może działać na serwerze współdzielonym lub jako usługa zewnętrzna,
- wymagane są CORS, konfiguracja `VITE_CMS_API_URL` i strategia cache.

### Frontend i CMS na serwerze współdzielonym

- `dist/` jest publikowany przez Apache,
- CMS lub API PHP może działać na tej samej domenie,
- prostszy CORS,
- reguły `.htaccess` muszą omijać endpointy API i katalog panelu.

Frontend nie powinien zależeć wyłącznie od funkcji jednej platformy, dopóki docelowy hosting nie zostanie wybrany.

## 6. Routing i SEO

Przed integracją CMS trzeba ustalić prawdziwe adresy, np.:

```text
/o-nas
/konkurs
/archiwum
/kontakt
/filar/eko-region
/artykul/slug-artykulu
```

Każdy artykuł będzie potrzebował własnego title, description, canonical, Open Graph i danych strukturalnych. Należy zdecydować, czy pozostajemy przy SPA z prerenderem, czy wprowadzamy SSG/SSR. Zmiana frameworka nie jest obecnie przesądzona.

## 7. Najbliższa roadmapa

1. Utrzymywać aktualne README, `project-state` i TODO.
2. Zdefiniować modele danych niezależne od CMS.
3. Wydzielić lokalne dane z komponentów.
4. Dodać lokalny adapter `contentRepository`.
5. Wprowadzić slugi i routing URL.
6. Ustalić strategię SEO.
7. Porównać WordPress REST API z prostym API PHP.
8. Przetestować oba warianty deploymentu.
9. Wybrać CMS dopiero na podstawie proof of concept.
