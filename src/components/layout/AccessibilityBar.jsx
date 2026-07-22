import { Accessibility, ZoomIn, Contrast, Eye, Layout } from "lucide-react";
import { useEffect } from "react";

export default function AccessibilityBar({ panelOpen, setPanelOpen, largeText, setLargeText, highContrast, setHighContrast, grayscaleMode, setGrayscaleMode, layoutTheme, setLayoutTheme }) {
  useEffect(() => {
    let timeout;
    if (panelOpen) {
      timeout = setTimeout(() => {
        setPanelOpen(false);
      }, 5000);
    }
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [panelOpen, setPanelOpen]);

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
        onClick={() => setPanelOpen(!panelOpen)}
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
