# Zdalna praca z Codex CLI

Instrukcja kontynuowania pracy nad repozytorium `puls-regionu-portal` z iPhone'a przez SSH i `tmux`.

## Środowisko

- Repozytorium: `/Users/wac/Projects/puls-regionu-portal`
- Stack: Vite, React, JavaScript, CSS
- Gałąź robocza: `main`
- Produkcja: `https://puls-regionu.vercel.app/`
- Terminal na iPhonie jest klientem SSH. Codex CLI, Git, Vite i `tmux` działają na MacBooku.

Nie zapisuj w tym pliku adresów IP, haseł, tokenów, kluczy SSH ani kluczy API.

## Rozpoczęcie sesji

Po połączeniu z MacBookiem przez SSH:

```sh
cd /Users/wac/Projects/puls-regionu-portal
tmux new-session -A -s puls-regionu
```

Opcja `-A` dołącza do istniejącej sesji albo tworzy nową.

Przydatne skróty `tmux`:

- `Ctrl+b c` — nowe okno,
- `Ctrl+b n` — następne okno,
- `Ctrl+b p` — poprzednie okno,
- `Ctrl+b ,` — zmiana nazwy okna,
- `Ctrl+b d` — odłączenie bez zatrzymywania procesów.

## Zalecany układ `tmux`

```text
1: codex   — Codex CLI
2: dev     — Vite, tylko podczas testowania
3: shell   — Git, lint i build
```

Na MacBooku Air z 4 GB RAM nie uruchamiaj kilku agentów AI równocześnie. Podczas pracy zdalnej Zed, Alacritty i przeglądarka na MacBooku mogą pozostać zamknięte.

## Uruchomienie Codex CLI

W oknie `codex`:

```sh
cd /Users/wac/Projects/puls-regionu-portal
codex
```

Prompt rozpoczynający nową sesję:

```text
Pracujesz w repozytorium /Users/wac/Projects/puls-regionu-portal.

Najpierw przeczytaj:
- AGENTS.md
- README.md
- package.json
- docs/project-state.md
- docs/remote-work.md

Następnie sprawdź `git status --short` i ostatni commit. Nie edytuj jeszcze plików. Podsumuj aktualny stan repozytorium i poczekaj na opis zadania.

Zasady pracy:
- zachowuj wszystkie istniejące zmiany użytkownika,
- przed edycją przedstaw krótki plan,
- wykonuj małe, precyzyjne zmiany,
- nie dodawaj zależności bez zgody,
- nie wykonuj commita ani push bez wyraźnego polecenia,
- po zmianie sprawdź diff i uruchom odpowiednią walidację,
- traktuj widok mobilny, szczególnie iPhone SE, jako wymagany cel testowy,
- nie uruchamiaj drugiego dev servera, jeśli jeden już działa w `tmux`.
```

## Przekazywanie zadania Codexowi

Każde zadanie powinno określać:

1. oczekiwany rezultat,
2. pliki lub obszar aplikacji,
3. czego nie wolno zmieniać,
4. wymagane testy,
5. czy Codex może wykonać commit i push.

Przykład:

```text
Przeanalizuj mobilny nagłówek. Najpierw przedstaw plan i nie edytuj plików. Po moim potwierdzeniu wykonaj minimalną zmianę tylko w src/index.css. Nie zmieniaj JSX, zasobów w public ani desktopowego layoutu. Po wdrożeniu uruchom npm run lint, npm run build i pokaż git diff.
```

## Dev server i test na iPhonie

W oknie `dev`:

```sh
cd /Users/wac/Projects/puls-regionu-portal
npm run dev -- --host 0.0.0.0
```

Na iPhonie otwórz w Safari adres MacBooka dostępny przez prywatną sieć, z portem podanym przez Vite, np.:

```text
http://ADRES_MACBOOKA:5173/
```

Nie używaj na iPhonie `localhost`, ponieważ oznacza on samego iPhone'a.

Po testach zatrzymaj Vite przez `Ctrl+C`, aby ograniczyć zużycie RAM-u. Nie traktuj Vite jako serwera produkcyjnego.

## Kontrola zmian

Przed edycją:

```sh
git status --short
```

Po edycji:

```sh
git diff --check
git diff
npm run lint
npm run build
```

Nie naprawiaj przy okazji ostrzeżeń niezwiązanych z bieżącym zadaniem. Zgłoś je w podsumowaniu.

Przed commitem upewnij się, że diff obejmuje wyłącznie uzgodnione pliki. Preferuj jawne dodawanie plików:

```sh
git add src/sciezka/do/pliku
git commit -m "Krótki opis zmiany"
git push origin main
```

Nie używaj bez sprawdzenia `git add .`.

## Aktualny kontekst projektu

Najważniejsze informacje utrzymuje `docs/project-state.md`. W przypadku rozbieżności zawsze sprawdź faktyczny kod i Git.

Istotne obszary:

- nagłówek: `src/components/layout/Header.jsx`,
- layout i menu: `src/components/layout/Layout.jsx`,
- panel dostępności: `src/components/layout/AccessibilityBar.jsx`,
- globalne style: `src/index.css`,
- archiwum: `src/components/archiwum/Archiwum.jsx`,
- publiczne zasoby: `public/`.

Nie usuwaj ani nie zmieniaj nazw zasobów winiety bez sprawdzenia ich użycia i bezpośrednich adresów publicznych.

## Kończenie pracy

Przed zakończeniem sesji:

1. sprawdź `git status --short`,
2. zapisz wynik walidacji,
3. nie pozostawiaj przypadkowych zmian,
4. zatrzymaj niepotrzebny dev server,
5. odłącz `tmux` przez `Ctrl+b d` zamiast zamykać procesy.

Jeżeli zmiany nie zostały zacommitowane, zanotuj dokładnie ich zakres w następnym promptcie dla Codexa.
