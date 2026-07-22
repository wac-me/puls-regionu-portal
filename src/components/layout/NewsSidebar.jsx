const NEWS_ITEMS = [
  { id: 'news-1', label: 'Sołtys z Bartoszyc zebrał 8 ton elektroodpadów w jeden weekend', category: 'Eko-region' },
  { id: 'news-2', label: 'Ranking Eko Sołectw 2026 — kto zebrał najwięcej?', category: 'Eko-region' },
  { id: 'news-3', label: 'Zostawili Warszawę dla Mazur. „Pracuję zdalnie, dzieci mają jezioro za oknem”', category: 'Ziemia i Dom' },
  { id: 'news-4', label: 'Strażacy z Giżycka posadzili 200 drzew wzdłuż drogi wojewódzkiej', category: 'Natura i Turystyka' },
  { id: 'news-5', label: 'Gmina Ostróda: ulgi podatkowe dla firm inwestujących w strefie', category: 'Inwestycje w Regionie' },
  { id: 'news-6', label: 'Szlak kajakowy przez 5 jezior — przewodnik od lokalnego sternika', category: 'Natura i Turystyka' },
];

export default function NewsSidebar() {
  return (
    <aside className="pr-news-sidebar">
      <div className="pr-sidebar-section">
        <h3 className="pr-sidebar-title pr-serif">News</h3>
        <ul className="pr-sidebar-list">
          {NEWS_ITEMS.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="pr-sidebar-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="pr-sidebar-section pr-sidebar-promo">
        <h4 className="pr-sidebar-title pr-serif">Wydanie drukowane</h4>
        <p className="pr-sidebar-text">Sprawdź gdzie kupisz najnowszy numer Pulsu Regionu.</p>
        <button className="pr-sidebar-btn">Znajdź punkt</button>
      </div>
    </aside>
  );
}
