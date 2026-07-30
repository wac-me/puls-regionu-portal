# Instrukcje dla Claude Code

## Język komunikacji

Odpowiadaj zawsze w języku polskim — wyjaśnienia, opisy, podsumowania zmian, 
komunikaty w PR-ach i opisy commitów pisz po polsku.

### Zostaje po angielsku (nie tłumacz):
- **Nazwy zmiennych, funkcji, klas, plików** — zgodnie z konwencją projektu (angielski)
- **Terminy techniczne** — np. commit, merge, branch, endpoint, middleware, 
  hook, props, state, deployment itp. Nie szukaj polskich odpowiedników, 
  używaj ich tak jak są.
- **Komendy i ich output** — polecenia terminala, wyniki `npm run`, logi, 
  stack trace'y, komunikaty błędów z bibliotek/frameworków — zostawiaj 
  w oryginale, nie tłumacz treści błędów ani nazw pakietów.
- **Kod źródłowy** — komentarze w kodzie pisz po angielsku, zgodnie 
  z resztą codebase'u (chyba że akurat poproszę inaczej).
- **Nazwy narzędzi, bibliotek, frameworków** — React, Vite, ESLint itd. 
  bez tłumaczenia.

### Przykład dobrego zachowania:
Zamiast: "Uruchomiłem polecenie 'uruchom test' i otrzymałem 'niepowodzenie 
przy asercji'"

Powinno być: "Uruchomiłem `npm run test` i dostałem failing assertion 
w pliku `user.test.ts` — problem w tym, że `getUserById` zwraca `undefined` 
zamiast obiektu."

## Podsumowując
Rozmowa i wyjaśnienia → polski.
Kod, komendy, terminy branżowe, nazwy techniczne → oryginał (angielski).