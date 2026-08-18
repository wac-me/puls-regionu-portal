import { Share2 } from "lucide-react";
import ArticleImage from "../common/ArticleImage";
import { replaceSpojniki } from "../../utils/textFormat";

export default function HeroSection({ heroPost, activeFilar }) {
  const Icon = activeFilar.icon;

  return (
    <section className="pr-hero">
      <div>
        <div className="pr-hero-eyebrow" style={{ color: activeFilar.color }}>
          <Icon size={14} aria-hidden="true" />
          {activeFilar.label} · Polecany artykuł
        </div>
        <h1 className="pr-serif pr-text-content" dangerouslySetInnerHTML={{ __html: replaceSpojniki(heroPost.title) }} />
        <p className="pr-text-content" dangerouslySetInnerHTML={{ __html: replaceSpojniki(heroPost.excerpt) }} />
        <div className="pr-hero-meta">
          <span>{heroPost.author} · 4 min czytania</span>
          <span className="pr-hero-share">
            <Share2 size={13} /> Udostępnione {heroPost.shares} razy
          </span>
        </div>
      </div>
      <ArticleImage
        key={heroPost.id}
        src={heroPost.image}
        className="pr-hero-img"
        loading="eager"
      />
    </section>
  );
}
