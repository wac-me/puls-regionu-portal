import { useEffect, useId, useMemo, useRef, useState } from "react";
import { Search, X } from "lucide-react";

const normalizeText = (value = "") =>
  value
    .toLocaleLowerCase("pl-PL")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ł/g, "l");

export default function SearchPanel({ articles = [], onOpenArticle, onResultSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const panelId = useId();
  const inputId = useId();
  const normalizedQuery = normalizeText(query.trim());

  const results = useMemo(() => {
    if (normalizedQuery.length < 2) return [];

    const terms = normalizedQuery.split(/\s+/).filter(Boolean);

    return articles
      .map((article) => {
        const title = normalizeText(article.title);
        const excerpt = normalizeText(article.excerpt);
        const content = normalizeText(article.content);
        const author = normalizeText(article.author);
        const filar = normalizeText(article.filarLabel);
        const searchableText = `${title} ${excerpt} ${content} ${author} ${filar}`;

        if (!terms.every((term) => searchableText.includes(term))) return null;

        const score = terms.reduce((total, term) => {
          if (title.startsWith(term)) return total + 120;
          if (title.includes(term)) return total + 100;
          if (excerpt.includes(term)) return total + 50;
          if (filar.includes(term)) return total + 40;
          if (author.includes(term)) return total + 30;
          return total + 10;
        }, 0);

        return { article, score };
      })
      .filter(Boolean)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map(({ article }) => article);
  }, [articles, normalizedQuery]);

  useEffect(() => {
    if (!isOpen) return undefined;

    inputRef.current?.focus();

    const handlePointerDown = (event) => {
      if (containerRef.current?.contains(event.target)) return;
      setIsOpen(false);
      setQuery("");
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isOpen]);

  const closeSearch = () => {
    setIsOpen(false);
    setQuery("");
  };

  const selectResult = (article) => {
    onOpenArticle?.(article.filarId, article.id);
    onResultSelect?.();
    closeSearch();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (results[0]) selectResult(results[0]);
  };

  const handleKeyDown = (event) => {
    if (event.key !== "Escape") return;
    event.stopPropagation();
    closeSearch();
  };

  return (
    <div className="pr-search" ref={containerRef} onKeyDown={handleKeyDown}>
      <button
        type="button"
        className={`pr-main-nav-item pr-search-trigger${isOpen ? " is-open" : ""}`}
        aria-label={isOpen ? "Zamknij wyszukiwarkę" : "Szukaj"}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => {
          if (isOpen) closeSearch();
          else setIsOpen(true);
        }}
      >
        <Search size={20} aria-hidden="true" />
        <span className="pr-search-label">Szukaj</span>
      </button>

      {isOpen && (
        <section id={panelId} className="pr-search-panel" aria-label="Wyszukiwarka artykułów">
          <form className="pr-search-form" role="search" onSubmit={handleSubmit}>
            <label className="pr-search-field" htmlFor={inputId}>
              <Search size={19} aria-hidden="true" />
              <span className="pr-visually-hidden">Szukaj w Pulsie Regionu</span>
              <input
                ref={inputRef}
                id={inputId}
                type="search"
                value={query}
                placeholder="Szukaj w Pulsie Regionu"
                autoComplete="off"
                onChange={(event) => setQuery(event.target.value)}
              />
            </label>
            <button type="button" className="pr-search-close" aria-label="Zamknij wyszukiwarkę" onClick={closeSearch}>
              <X size={20} aria-hidden="true" />
            </button>
          </form>

          <div className="pr-search-status" role="status" aria-live="polite">
            {normalizedQuery.length < 2
              ? "Wpisz co najmniej 2 znaki."
              : results.length > 0
                ? `Znaleziono: ${results.length}`
                : `Brak wyników dla „${query.trim()}”.`}
          </div>

          {results.length > 0 && (
            <ul className="pr-search-results">
              {results.map((article) => (
                <li key={article.id}>
                  <button type="button" className="pr-search-result" onClick={() => selectResult(article)}>
                    <span className="pr-search-result-filar">{article.filarLabel}</span>
                    <strong>{article.title}</strong>
                    <span className="pr-search-result-excerpt">{article.excerpt}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}
    </div>
  );
}
