# Puls Regionu

Responsywny portal regionalny dla Warmii i Mazur. Obecna wersja jest statycznym frontendem React/Vite z lokalnymi danymi artykułów; nie korzysta jeszcze z bazy danych ani CMS.

Produkcja: `https://puls-regionu.vercel.app/`

## Stack

- React 19
- Vite 8
- JavaScript
- CSS
- Oxlint

## Uruchomienie lokalne

```bash
npm ci
npm run dev
```

Pozostałe skrypty:

```bash
npm run lint
npm run build
npm run preview
```

Build produkcyjny trafia do `dist/`.

## Deployment

Frontend może być wdrażany na dwa sposoby:

1. **Vercel** — statyczny frontend budowany z repozytorium Git.
2. **Serwer współdzielony** — zawartość `dist/` kopiowana na serwer Apache. Plik `public/.htaccess` jest przenoszony do buildu i zapewnia fallback SPA.

Przed wdrożeniem należy uruchomić `npm run lint` i `npm run build` oraz sprawdzić desktop i szerokość iPhone SE.

## Obecna architektura

- Nawigacja podstron i artykułów działa przez React state.
- Dane artykułów, filarów, Aktualności i Archiwum są zapisane lokalnie w kodzie.
- Nie ma jeszcze routingu URL, API, backendu ani panelu redakcyjnego.
- Brakujące zdjęcia korzystają z kontrolowanego placeholdera.

Najważniejsze katalogi:

- `src/components/layout/` — layout, header, footer, dostępność i sidebar,
- `src/components/home/` — hero, filary i mobilne Aktualności,
- `src/components/common/` — współdzielone elementy,
- `src/pages/` — O nas, Konkurs, Archiwum i Kontakt,
- `public/` — statyczne obrazy i dokumenty PDF.

## Kierunek rozwoju CMS

Frontend ma pozostać niezależny od konkretnego CMS. Docelowe źródło treści może być oparte na WordPress/PHP, własnym API PHP lub innym CMS, o ile udostępni stabilne API dla opublikowanych treści.

Przed integracją CMS planowane są:

1. wydzielenie danych z komponentów,
2. wspólny model artykułów, filarów i numerów archiwalnych,
3. warstwa `contentRepository`,
4. prawdziwe URL-e i slugi,
5. decyzja o SEO i generowaniu stron artykułów,
6. proof of concept wybranego API.

Szczegóły: `architektura.md` i `docs/todo.md`.

## Ważny asset nagłówka

`src/components/layout/Header.jsx` korzysta z `public/puls-regionu-winieta.png` poniżej `1200px` oraz z `public/puls-regionu-winieta_920.png` od `1200px`. Plik `public/puls-regionu-winieta.svg` jest obecnie pustym, nieużywanym plikiem legacy. Nie należy usuwać ani zmieniać nazw assetów bez sprawdzenia kodu, bezpośrednich URL-i i wdrożenia.

## Dokumentacja

- `docs/project-state.md` — aktualny stan funkcjonalny,
- `docs/todo.md` — kolejne zadania,
- `architektura.md` — kierunek techniczny i przygotowanie pod CMS,
- `docs/remote-work.md` — praca zdalna przez SSH i `tmux`,
- `AGENTS.md` — zasady pracy dla agentów kodujących.
