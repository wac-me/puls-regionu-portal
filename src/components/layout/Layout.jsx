import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import Header from "./Header";
import LiveTicker from "../common/LiveTicker";
import AccessibilityBar from "./AccessibilityBar";
import Footer from "./Footer";
import NewsSidebar from "./NewsSidebar";

// Statyczna lista filarów (Eko, Ziemia, Natura, Rodzina, Techno)
const FILARY = [
  { id: "eko", label: "EKO-REGION", color: "#3E7A4F" },
  { id: "ziemia", label: "ZIEMIA I DOM", color: "#A85A2E" },
  { id: "natura", label: "NATURA I TURYSTYKA", color: "#2D6E7E" },
  { id: "rodzina", label: "ATRAKCJE W REGIONIE", color: "#9C4A6B" },
  { id: "techno", label: "INWESTYCJE W REGIONIE", color: "#3B5A8A" },
];

export default function Layout({
  children,
  onNavigate,
  activePage,
  TICKER,
  panelOpen,
  setPanelOpen,
  largeText,
  setLargeText,
  highContrast,
  setHighContrast,
  grayscaleMode,
  setGrayscaleMode,
  layoutTheme,
  setLayoutTheme,
  activeFilarId,
  setActiveFilarId
}) {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div 
      className={`pr-root${largeText ? " pr-large-text" : ""}${highContrast ? " pr-high-contrast" : ""}${grayscaleMode ? " pr-grayscale" : ""} pr-layout-${layoutTheme}`} 
      lang="pl"
      style={{
        '--spojniki': '"w", "i", "z", "a", "o", "u", "do", "na", "po", "za", "ze", "we"'
      }}
    >
      
      {/* UTILITY BAR */}
      <div className="pr-utility">
        <div className="pr-utility-logo">
          <img src="/logo_PR_male.svg" alt="Logo Puls Regionu" className="pr-utility-logo-img" />
        </div>
        <span className="pr-dim pr-mono">1 lipca 2026 · Wydanie cyfrowe</span>
      </div>

      {/* MAIN NAVBAR (.pr-main-nav) - TERAZ TUTAJ JEST GŁÓWNA NAWIGACJA */}
      <nav className={`pr-main-nav${navOpen ? " is-open" : ""}`} aria-label="Menu główne">
        <button
          type="button"
          className="pr-main-nav-toggle"
          aria-label={navOpen ? "Zamknij menu główne" : "Otwórz menu główne"}
          aria-expanded={navOpen}
          aria-controls="pr-main-nav-list"
          onClick={() => setNavOpen(!navOpen)}
        >
          <span className="pr-main-nav-label" aria-hidden="true">MENU</span>
          {navOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <ul id="pr-main-nav-list" className="pr-main-nav-list">
          <li><button className={`pr-main-nav-item${activePage === 'home' ? ' is-active' : ''}`} onClick={() => { setNavOpen(false); onNavigate('home'); }}>HOME</button></li>
          <li><button className={`pr-main-nav-item${activePage === 'o-nas' ? ' is-active' : ''}`} onClick={() => { setNavOpen(false); onNavigate('o-nas'); }}>O NAS</button></li>
          <li><button className={`pr-main-nav-item${activePage === 'konkurs' ? ' is-active' : ''}`} onClick={() => { setNavOpen(false); onNavigate('konkurs'); }}>KONKURS</button></li>
          <li><button className={`pr-main-nav-item${activePage === 'archiwum' ? ' is-active' : ''}`} onClick={() => { setNavOpen(false); onNavigate('archiwum'); }}>ARCHIWUM</button></li>
          <li><button className={`pr-main-nav-item${activePage === 'kontakt' ? ' is-active' : ''}`} onClick={() => { setNavOpen(false); onNavigate('kontakt'); }}>KONTAKT</button></li>
          <li><button className="pr-main-nav-item" disabled aria-label="Szukaj"><Search size={20} /></button></li>
        </ul>
      </nav>

      {/* ACCESSIBILITY BAR */}
      <AccessibilityBar
        panelOpen={panelOpen}
        setPanelOpen={setPanelOpen}
        largeText={largeText}
        setLargeText={setLargeText}
        highContrast={highContrast}
        setHighContrast={setHighContrast}
        grayscaleMode={grayscaleMode}
        setGrayscaleMode={setGrayscaleMode}
        layoutTheme={layoutTheme}
        setLayoutTheme={setLayoutTheme}
      />

      {/* MASTHEAD */}
      <Header onLogoClick={() => onNavigate('home')} activePage={activePage} />

      {/* TICKER */}
      <LiveTicker tickerData={TICKER} />

      {/* SUBMENU (.pr-nav) - TUTAJ SĄ FILARY - TYLKO NA STRONIE STARTOWEJ */}
      {activePage === 'home' && (
        <nav className="pr-nav">
          {FILARY.map((f) => (
            <div
              key={f.id}
              className={`pr-nav-item ${activeFilarId === f.id ? "is-active" : ""}`}
              onClick={() => {
                  if (activePage !== 'home') onNavigate('home');
                  setActiveFilarId && setActiveFilarId(f.id);
              }}
            >
              <span className="pr-dot" style={{ background: f.color }} />
              {f.label}
            </div>
          ))}
        </nav>
      )}

      <main>
        <div className="pr-layout-container">
          <NewsSidebar />
          <div className="pr-main-content">
            {children}
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <Footer filary={FILARY} onNavigate={onNavigate} />
    </div>
  );
}
