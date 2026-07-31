const NEWS_ITEMS = [
  { id: 'news-1', label: 'Sołtys z Bartoszyc zebrał 8 ton elektroodpadów w jeden weekend', category: 'EKO-REGION' },
  { id: 'news-2', label: 'Ranking Eko Sołectw 2026 — kto zebrał najwięcej?', category: 'EKO-REGION' },
  { id: 'news-3', label: 'Zostawili Warszawę dla Mazur. „Pracuję zdalnie, dzieci mają jezioro za oknem”', category: 'ZIEMIA I DOM' },
  { id: 'news-4', label: 'Strażacy z Giżycka posadzili 200 drzew wzdłuż drogi wojewódzkiej', category: 'NATURA I TURYSTYKA' },
  { id: 'news-5', label: 'Weekend z folklorem - przegląd zespołów ludowych w Olsztynie', category: 'Atrakcje w Regionie' },
  { id: 'news-6', label: 'Szlak kajakowy przez 5 jezior — przewodnik od lokalnego sternika', category: 'Natura i Turystyka' },
];

const ARCHIVE_ITEMS = [
  { url: "http://www.warmiamazury.tv/wp-content/uploads/2026/02/Puls-153TV.pdf", title: "Puls Regionu 153", date: "Luty 2026" },
  { url: "http://www.warmiamazury.tv/wp-content/uploads/2024/12/Puls-Regionu152_TV.pdf", title: "Puls Regionu 152", date: "Grudzień 2024" },
  { url: "http://www.warmiamazury.tv/wp-content/uploads/2023/12/Puls-Regionu-151_TV.pdf", title: "Puls Regionu 151", date: "Grudzień 2023" },
  { url: "http://www.warmiamazury.tv/wp-content/uploads/2023/01/Puls-Regionu-149TV.pdf", title: "Puls Regionu 149", date: "Styczeń 2023" },
  { url: "http://www.warmiamazury.tv/wp-content/uploads/2023/01/Puls-Regionu-148TV.pdf", title: "Puls Regionu 148", date: "Styczeń 2023" },
  { url: "http://www.warmiamazury.tv/wp-content/uploads/2021/08/PulsTV146.pdf", title: "Puls Regionu 146", date: "Sierpień 2021" },
];

import herbWojew from '/herb_Wojew.png';

export default function NewsSidebar() {
  return (
    <aside className="pr-news-sidebar">
      <div className="pr-sidebar-section">
        <h3 className="pr-sidebar-title pr-serif">Aktualności</h3>
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

      <div className="pr-sidebar-section">
        <h3 className="pr-sidebar-title pr-serif">Archiwum</h3>
        <ul className="pr-sidebar-list">
          {ARCHIVE_ITEMS.map((item, index) => (
            <li key={index}>
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="pr-sidebar-link">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="pr-sidebar-section pr-sidebar-promo">
        <div style={{ textAlign: 'center', marginBottom: '12px' }}>
          <img 
            src={herbWojew} 
            alt="Herb Województwa Warmińsko-Mazurskiego" 
            style={{ 
              width: '120px', 
              height: 'auto', 
              display: 'block', 
              margin: '0 auto 16px auto' 
            }}
          />
        </div>
        <h4 className="pr-sidebar-title pr-serif" style={{ textAlign: 'center' }}>PULS REGIONU</h4>
        <p className="pr-sidebar-text" style={{ textAlign: 'center' }}>Tytuł z prawem używania HERBU Województwa Warmińsko-Mazurskiego</p>
      </div>
    </aside>
  );
}
