# Puls Regionu — stan projektu

Ostatnia aktualizacja: 2026-08-27

## Środowisko

- Repozytorium lokalne: `/Users/wac/Projects/puls-regionu-portal`
- Stack: Vite, React 19, JavaScript, CSS
- Deployment: Vercel (`https://puls-regionu.vercel.app/`) lub statyczny `dist/` na serwerze współdzielonym
- Główny branch: `main`
- Punkt odniesienia aktualnego UI: `a7ddb15` (`Ujednolić nagłówki podstron`)
- Tryb publikacji: ekran przedpremierowy z hasłem oraz meta `noindex, nofollow, noarchive`

## Ważne assety nagłówka

- `src/components/layout/Header.jsx` korzysta z `/puls-regionu-winieta.png` poniżej `1200px` oraz z `/puls-regionu-winieta_920.png` od `1200px`.
- Raster dla mniejszych ekranów ma wymiary `1755 × 681px`, a wariant desktopowy `2927 × 920px`.
- `public/puls-regionu-winieta.svg` ma obecnie `0 B` i nie jest używany przez `Header.jsx`.
- W repozytorium nie ma pliku `public/puls-regionu-winieta-1.png`, wymienianego w starszej dokumentacji.
- Pusty SVG pozostaje plikiem legacy; nie należy go usuwać ani zmieniać nazw assetów bez osobnego uzgodnienia i testu wdrożenia.
- Po zmianach nagłówka należy sprawdzać pełną widoczną winietę oraz jej bezpośredni publiczny URL.

## Zakończony etap: filary, artykuły i aktualności

### Artykuły i filary

- Wszystkie filary otwierają artykuły za pomocą stabilnych identyfikatorów.
- Artykuły mają krótkie treści, zajawki, autorów i metadane udostępnień.
- Brakujące obrazy korzystają z komponentu `ArticleImage` i placeholdera „Zdjęcie w przygotowaniu”.
- Nie są wykonywane żądania do nieistniejących obrazów, które wcześniej zwracały HTTP 400.
- Kliknięcie filaru ustawia aktywny dział i zamyka wcześniej otwarty artykuł.

### Hero filarów

- Hero pokazuje pierwszy artykuł aktywnego filaru.
- CTA „Czytaj artykuł” otwiera właściwy artykuł.
- CTA jest stonowane, granatowe i nie korzysta z gradientu.
- Maksymalny rozmiar `h1` wynosi `44px`, z responsywnym minimum `32px`.
- W układzie dwukolumnowym górna krawędź zdjęcia jest wyrównana z górną linią `h1`.
- Poniżej `900px` hero przechodzi w naturalny układ jednokolumnowy.

### Sidebar i Aktualności

- Desktopowy sidebar jest widoczny tylko na HOME bez otwartego artykułu.
- Sidebar nie występuje w artykułach ani na podstronach: O nas, Konkurs, Archiwum i Kontakt.
- Desktopowa i mobilna lista aktualności korzystają ze wspólnego komponentu `NewsList`.
- Na ekranach poniżej `1100px` Aktualności są domyślnie zwiniętym panelem `<details>/<summary>`.
- Mobilny panel znajduje się bezpośrednio pod belką filarów, przed hero.
- Panel zawiera sześć aktualności oraz CTA „Przejdź do archiwum”.
- Panel nie występuje po otwarciu artykułu ani na podstronach.
- Hover linków sidebara ma subtelne przesunięcie `3px`, granatowy kolor i delikatne tło.
- Efekt hover działa tylko na urządzeniach obsługujących hover.
- Archiwum ma spokojniejszą hierarchię wizualną niż Aktualności.

### Nagłówki sekcji filarów

- `.pr-section-title` zajmuje `75%` szerokości `.pr-section-head` na większych ekranach.
- Opis sekcji może wykorzystywać do `72ch` i mieści się w jednej linii przy typowych szerokościach desktopowych.
- Link „Zobacz wszystkie” nie jest ściskany.
- Poniżej `600px` nagłówek sekcji przechodzi w bezpieczny układ pionowy.

## Ostatnie uzupełnienia UI

- Od `1200px` wczytywana jest szersza winieta, która rośnie płynnie od `320px` do `460px` przy `1600px`; poniżej breakpointu używany jest dotychczasowy wariant zachowujący proporcje.
- Strona Konkurs zawiera aktualne hasło o ponad 2 milionach kilogramów oraz rozszerzone dane wymagane przy zgłoszeniu.
- O nas, Archiwum i Kontakt korzystają ze wspólnych, responsywnych nagłówków `pr-page-*`.
- Dawny newsletter został zastąpiony CTA „Napisz do nas”, które prowadzi do strony Kontakt.

## Kierunek CMS i hostingu

- Wybór CMS pozostaje otwarty: WordPress/PHP, własne API PHP lub inne rozwiązanie.
- Frontend ma korzystać z warstwy danych niezależnej od dostawcy CMS.
- Wspierane mają pozostać dwa warianty: Vercel oraz statyczny build na serwerze współdzielonym.
- Przed CMS potrzebne są modele danych, `contentRepository`, routing URL i decyzja SEO.

## Kluczowe pliki

- Stan strony, aktywnego filaru i artykułu: `src/App.jsx`
- Dane artykułów i główna kompozycja HOME: `src/PulsRegionu.jsx`
- Layout i warunkowy sidebar: `src/components/layout/Layout.jsx`
- Desktopowy sidebar: `src/components/layout/NewsSidebar.jsx`
- Wspólna lista newsów: `src/components/common/NewsList.jsx`
- Mobilny panel Aktualności: `src/components/home/MobileNewsPanel.jsx`
- Hero: `src/components/home/HeroSection.jsx`
- Obraz lub placeholder: `src/components/common/ArticleImage.jsx`
- Style globalne i responsywne: `src/index.css`

## Walidacja zakończonego etapu

- `npm run build` przechodzi.
- `npm run lint` kończy się bez błędów i z 4 wcześniejszymi ostrzeżeniami.
- Sprawdzono widoki desktopowe oraz szerokości `1024px`, `375px` i `320px`.
- Potwierdzono brak poziomego overflow w testowanych widokach HOME.
- Potwierdzono otwieranie aktualności, ukrywanie panelu w artykule i przejście do Archiwum.

## Znane kwestie techniczne

Lint zgłasza 4 wcześniejsze ostrzeżenia, niezwiązane bezpośrednio z zakończonym etapem:

1. nieużywany import `ArrowUpRight` w `src/components/home/PillarGrid.jsx`,
2. nieużywana zmienna `TICKER` w `src/PulsRegionu.jsx`,
3. niezdefiniowany komponent `Archiwum` w nieużywanej gałęzi `src/PulsRegionu.jsx`,
4. wyrażenie `setActiveFilarId && setActiveFilarId(...)` w `src/components/layout/Layout.jsx`.

Nie należy usuwać znaczącej logiki tylko po to, aby wyciszyć te ostrzeżenia. Można je uporządkować w osobnym, małym zadaniu.

## Zalecany start kolejnej sesji

1. Uruchomić `git status --short` i przejrzeć ostatnie commity.
2. Przeczytać `README.md`, `AGENTS.md`, `architektura.md`, ten dokument i `docs/todo.md`.
3. Uruchomić `npm run lint`, `npm run build` oraz lokalny serwer Vite.
4. Sprawdzić HOME na desktopie i przy szerokości iPhone SE.
5. Uzgodnić kolejny cel przed zmianą architektury lub dodaniem zależności.
