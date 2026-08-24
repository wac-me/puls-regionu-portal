# Puls Regionu — lista prac

Ostatnia aktualizacja: 2026-08-19

## Zrealizowane

### Fundament i nagłówek

- [x] Konfiguracja projektu Vite + React.
- [x] Podział głównych elementów interfejsu na katalog `src/components/`.
- [x] Podłączenie winiety PNG w `src/components/layout/Header.jsx`.
- [x] Dostosowanie wysokości i responsywności nagłówka, do `340px` na dużych ekranach.

### Podstrony i treści

- [x] Podstrony O nas, Konkurs, Archiwum i Kontakt.
- [x] Obsługa artykułów we wszystkich filarach.
- [x] Stabilne identyfikatory artykułów i przełączanie aktywnego filaru.
- [x] Placeholder „Zdjęcie w przygotowaniu” dla brakujących obrazów.
- [x] Usunięcie żądań do nieistniejących obrazów zwracających HTTP 400.
- [x] Aktualizacja daty numeru 147 w Archiwum.
- [x] Aktualizacja treści strony Konkurs.
- [x] Wspólne, responsywne nagłówki O nas, Archiwum i Kontakt.
- [x] Zastąpienie newslettera CTA prowadzącym do strony Kontakt.

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

- [x] Zastąpić domyślny `README.md` Vite właściwym README projektu.
- [ ] W razie większych zmian aktualizować `docs/project-state.md` i tę listę.

### Porządki techniczne

- [ ] Ustalić, czy pusty `public/puls-regionu-winieta.svg` ma pozostać jako plik legacy; nie usuwać assetów bez testu i aktualizacji dokumentacji.
- [ ] Osobno przeanalizować i usunąć 4 znane ostrzeżenia lint bez zmiany działania aplikacji.
- [ ] Zdefiniować modele `Article`, `Pillar`, `ArchiveIssue`, `Page` i `SiteSettings`.
- [ ] Wydzielić dane artykułów, filarów, Aktualności i Archiwum z komponentów.
- [ ] Dodać lokalny adapter `contentRepository`.
- [ ] Ustalić routing URL i slugi podstron oraz artykułów przed integracją z CMS.
- [ ] Porównać proof of concept WordPress REST API z prostym API PHP.

### Treść i redakcja

- [ ] Zastępować placeholdery docelowymi zdjęciami wraz z tekstami alternatywnymi.
- [ ] Uzupełnić i zweryfikować finalne treści, autorów oraz metadane artykułów.
- [ ] Zweryfikować wszystkie zewnętrzne odnośniki do archiwalnych numerów PDF.

### UX do decyzji

- [ ] Po testach z użytkownikami zdecydować, czy zwinięte Aktualności mają pojawiać się także na końcu artykułów.
- [ ] Przeprowadzić końcowy ręczny przegląd dostępności: klawiatura, wysoki kontrast, skala szarości i duży tekst.
- [ ] Powtórzyć pełny przegląd desktopu, `1024px` i iPhone SE przed kolejnym większym wdrożeniem.

## Dalsza perspektywa

- [ ] Wybrać CMS na podstawie proof of concept i kosztów utrzymania.
- [ ] Zaplanować SEO i indeksowanie artykułów przed przejściem na docelowe źródło treści.
- [ ] Przetestować deployment `dist/` na docelowym serwerze współdzielonym.
- [ ] Uzgodnić produkcyjny wariant: Vercel + zewnętrzny CMS albo frontend i CMS na jednym serwerze.
