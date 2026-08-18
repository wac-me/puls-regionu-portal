import { ArrowRight, ChevronDown } from "lucide-react";
import NewsList from "../common/NewsList";

export default function MobileNewsPanel({ selectedArticleId, onOpenArticle, onNavigate }) {
  return (
    <section className="pr-mobile-news" aria-label="Więcej z regionu">
      <details className="pr-mobile-news-details">
        <summary className="pr-mobile-news-summary">
          <span>Aktualności</span>
          <ChevronDown size={20} aria-hidden="true" />
        </summary>
        <div className="pr-mobile-news-content">
          <NewsList
            selectedArticleId={selectedArticleId}
            onOpenArticle={onOpenArticle}
          />
          <button
            type="button"
            className="pr-mobile-news-archive"
            onClick={() => onNavigate?.('archiwum')}
          >
            Przejdź do archiwum
            <ArrowRight size={17} aria-hidden="true" />
          </button>
        </div>
      </details>
    </section>
  );
}
