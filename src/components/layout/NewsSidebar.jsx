const NEWS_ITEMS = [
  { id: 'eko-1', label: 'Nowe projekty ochrony przyrody w regionie', category: 'Eko-region' },
  { id: 'eko-2', label: 'Eko-turystyka staje się trendem', category: 'Eko-region' },
  { id: 'dom-1', label: 'Trendy w budownictwie jednorodzinnym', category: 'Ziemia i Dom' },
  { id: 'dom-2', label: 'Jak zadbać o ogród w tym sezonie?', category: 'Ziemia i Dom' },
  { id: 'inwest-1', label: 'Nowa strefa ekonomiczna powstaje pod miastem', category: 'Inwestycje w Regionie' },
  { id: 'inwest-2', label: 'Wsparcie dla lokalnych przedsiębiorców', category: 'Inwestycje w Regionie' },
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
