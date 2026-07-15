import { ArrowUpRight } from "lucide-react";

export default function ActivePillarContent({ activeFilar, articles, handleOpenArticle }) {
  const Icon = activeFilar.icon;
  return (
    <section className="pr-section">
      <div className="pr-section-head">
        <div className="pr-section-title">
          <div
            className="pr-ficon"
            style={{ background: activeFilar.color, width: 34, height: 34, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <Icon size={17} color="#fff" />
          </div>
          <div>
            <h2 className="pr-serif">{activeFilar.label}</h2>
            <p className="pr-section-desc">{activeFilar.desc}</p>
          </div>
        </div>
        <div className="pr-more" style={{ color: activeFilar.color }}>
          Zobacz wszystkie <ArrowUpRight size={14} />
        </div>
      </div>
      <div className="pr-grid">
        {(articles[activeFilar.id] || []).map((a, i) => (
          <article key={i} className="pr-card" onClick={() => handleOpenArticle(i)}>
            <div className="pr-card-img" style={{ background: activeFilar.tint }} />
            <div className="pr-card-body">
              <h3>{a.title}</h3>
              <p>{a.excerpt}</p>
              <div className="pr-card-foot">
                <span>{a.author}</span>
                <span className="pr-share-count" style={{ color: activeFilar.color }}>
                  {a.shares} udostępnień
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
