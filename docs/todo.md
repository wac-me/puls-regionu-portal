# Puls Regionu — lista prac

Ostatnia aktualizacja: 2026-08-19

## Zrealizowane

### Fundament i nagłówek

- [x] Konfiguracja projektu Vite + React.
- [x] Podział głównych elementów interfejsu na katalog `src/components/`.
- [x] Podłączenie winiety PNG w `src/components/layout/Header.jsx`.
- [x] Dostosowanie wysokości i responsywności nagłówka.

### Podstrony i treści

- [x] Podstrony O nas, Konkurs, Archiwum i Kontakt.
- [x] Obsługa artykułów we wszystkich filarach.
- [x] Stabilne identyfikatory artykułów i przełączanie aktywnego filaru.
- [x] Placeholder „Zdjęcie w przygotowaniu” dla brakujących obrazów.
- [x] Usunięcie żądań do nieistniejących obrazów zwracających HTTP 400.
- [x] Aktualizacja daty numeru 147 w Archiwum.

### Hero i sekcje filarów

- [x] Dynamiczne hero zależne od aktywnego filaru.
- [x] CTA hero otwierające polecany artykuł.
- [x] Solidne, stonowane CTA z palety projektu.
- [x] Maksymalny rozmiar `h1` hero ustawiony na `44px`.
- [x] Wyrównanie zdjęcia hero z górną linią `h1` na desktopie.
- [x] Nagłówek sekcji filaru zajmujący `75%` dostępnej szerokości.
- [x] Responsywny, pionowy układ nagłówka sekcji na mobile.

### Aktualności i sidebar

- [x] Aktualności sidebara otwierające właściwe artykuły.
- [x] Desktopowy sidebar widoczny tylko na HOME bez otwartego artykułu.
- [x] Wspólny komponent `NewsList` dla desktopu i mobile.
- [x] Zwijany mobilny panel Aktualności pod belką filarów.
- [x] CTA z mobilnych Aktualności do Archiwum.
- [x] Subtelniejszy hover i stabilny stan aktywny linków sidebara.
- [x] Spokojniejsza hierarchia wizualna sekcji Archiwum.

## Do zrobienia

### Dokumentacja

- [ ] Zastąpić domyślny `README.md` Vite właściwym README projektu.
- [ ] W razie większych zmian aktualizować `docs/project-state.md` i tę listę.

### Porządki techniczne

- [ ] Wyjaśnić status pustego `public/puls-regionu-winieta.svg` i rozbieżność ze starszymi instrukcjami dotyczącymi `puls-regionu-winieta-1.png`; nie usuwać assetów bez testu i aktualizacji dokumentacji.
- [ ] Osobno przeanalizować i usunąć 4 znane ostrzeżenia lint bez zmiany działania aplikacji.
- [ ] Rozważyć wydzielenie danych artykułów z `src/PulsRegionu.jsx` do osobnego modułu danych.
- [ ] Rozważyć docelowy routing URL dla podstron i artykułów przed integracją z CMS.

### Treść i redakcja

- [ ] Zastępować placeholdery docelowymi zdjęciami wraz z tekstami alternatywnymi.
- [ ] Uzupełnić i zweryfikować finalne treści, autorów oraz metadane artykułów.
- [ ] Zweryfikować wszystkie zewnętrzne odnośniki do archiwalnych numerów PDF.

### UX do decyzji

- [ ] Po testach z użytkownikami zdecydować, czy zwinięte Aktualności mają pojawiać się także na końcu artykułów.
- [ ] Przeprowadzić końcowy ręczny przegląd dostępności: klawiatura, wysoki kontrast, skala szarości i duży tekst.
- [ ] Powtórzyć pełny przegląd desktopu, `1024px` i iPhone SE przed kolejnym większym wdrożeniem.

## Dalsza perspektywa

- [ ] Przygotować warstwę danych pod przyszły Headless CMS.
- [ ] Zaplanować SEO i indeksowanie artykułów przed przejściem na docelowe źródło treści.
- [ ] Uzgodnić sposób wdrażania wersji produkcyjnej po integracji z CMS.
