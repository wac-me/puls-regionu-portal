const NEWS_ITEMS = [
  { articleId: 'eko-bartoszyce-elektroodpady', filarId: 'eko', label: 'Sołtys z Bartoszyc zebrał 8 ton elektroodpadów w jeden weekend' },
  { articleId: 'eko-ranking-2026', filarId: 'eko', label: 'Ranking Eko Sołectw 2026 — kto zebrał najwięcej?' },
  { articleId: 'ziemia-mazury-praca-zdalna', filarId: 'ziemia', label: 'Zostawili Warszawę dla Mazur. „Pracuję zdalnie, dzieci mają jezioro za oknem”' },
  { articleId: 'eko-strazacy-gizycko', filarId: 'eko', label: 'Strażacy z Giżycka posadzili 200 drzew wzdłuż drogi wojewódzkiej' },
  { articleId: 'atrakcje-folklor-olsztyn', filarId: 'rodzina', label: 'Weekend z folklorem - przegląd zespołów ludowych w Olsztynie' },
  { articleId: 'natura-szlak-kajakowy', filarId: 'natura', label: 'Szlak kajakowy przez 5 jezior — przewodnik od lokalnego sternika' },
];

export default function NewsList({ selectedArticleId, onOpenArticle }) {
  return (
    <ul className="pr-sidebar-list">
      {NEWS_ITEMS.map((item) => (
        <li key={item.articleId}>
          <button
            type="button"
            className={`pr-sidebar-link${selectedArticleId === item.articleId ? ' is-active' : ''}`}
            aria-current={selectedArticleId === item.articleId ? 'page' : undefined}
            onClick={() => onOpenArticle?.(item.filarId, item.articleId)}
          >
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  );
}
