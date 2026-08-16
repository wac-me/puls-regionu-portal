import { Accessibility, ZoomIn, Contrast, Eye, Layout } from "lucide-react";
import { useEffect, useState } from "react";

export default function AccessibilityBar({ panelOpen, setPanelOpen, largeText, setLargeText, highContrast, setHighContrast, grayscaleMode, setGrayscaleMode, layoutTheme, setLayoutTheme }) {
  const [autoHideEnabled, setAutoHideEnabled] = useState(true);
  const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 720px)').matches);

  useEffect(() => {
    const mobileQuery = window.matchMedia('(max-width: 720px)');
    const updateMobileState = (event) => setIsMobile(event.matches);

    mobileQuery.addEventListener('change', updateMobileState);
    return () => mobileQuery.removeEventListener('change', updateMobileState);
  }, []);

  useEffect(() => {
    let timeout;
    if (panelOpen && autoHideEnabled) {
      timeout = setTimeout(() => {
        setPanelOpen(false);
      }, isMobile ? 2000 : 5000);
    }
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [autoHideEnabled, isMobile, panelOpen, setPanelOpen]);

  const togglePanel = () => {
    if (!panelOpen) {
      setAutoHideEnabled(false);
    }
    setPanelOpen(!panelOpen);
  };

  const layoutThemes = ['default', 'layout1', 'layout2'];

  const cycleLayoutTheme = () => {
    const currentIndex = layoutThemes.indexOf(layoutTheme);
    const nextIndex = (currentIndex + 1) % layoutThemes.length;
    setLayoutTheme(layoutThemes[nextIndex]);
  };

  return (
    <div className={`pr-accessibility-container ${panelOpen ? "is-open" : "is-closed"}`}>
      <button
        type="button"
        className="pr-accessibility-toggle"
        aria-label={panelOpen ? "Zamknij panel dostępności" : "Otwórz panel dostępności"}
        onClick={togglePanel}
      >
        <Accessibility size={22} />
      </button>
      <div className="pr-accessibility-panel" aria-label="Panel dostępności">
        <h3>Panel dostępności</h3>
        <button
          type="button"
          className={largeText ? "is-active" : ""}
          aria-pressed={largeText}
          onClick={() => setLargeText(!largeText)}
        >
          <ZoomIn size={16} />
          Powiększ tekst
        </button>
        <button
          type="button"
          className={highContrast ? "is-active" : ""}
          aria-pressed={highContrast}
          onClick={() => setHighContrast(!highContrast)}
        >
          <Contrast size={16} />
          Wysoki kontrast
        </button>
        <button
          type="button"
          className={grayscaleMode ? "is-active" : ""}
          aria-pressed={grayscaleMode}
          onClick={() => setGrayscaleMode(!grayscaleMode)}
        >
          <Eye size={16} />
          Skala szarości
        </button>
        <button
          type="button"
          className={layoutTheme !== 'default' ? "is-active" : ""}
          aria-pressed={layoutTheme !== 'default'}
          onClick={cycleLayoutTheme}
        >
          <Layout size={16} />
          Layout: {layoutTheme === 'default' ? 'Domyślny' : layoutTheme === 'layout1' ? 'Klasyczny' : 'Nowoczesny'}
        </button>
      </div>
    </div>
  );
}
