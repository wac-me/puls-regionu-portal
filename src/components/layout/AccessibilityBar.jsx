import { Accessibility, ZoomIn, Contrast, Eye } from "lucide-react";

export default function AccessibilityBar({ panelOpen, setPanelOpen, largeText, setLargeText, highContrast, setHighContrast, grayscaleMode, setGrayscaleMode }) {
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
      </div>
    </div>
  );
}
