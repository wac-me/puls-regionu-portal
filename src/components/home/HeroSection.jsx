import { Leaf, Share2 } from "lucide-react";

export default function HeroSection({ heroPost }) {
  return (
    <section className="pr-hero">
      <div>
        <div className="pr-hero-eyebrow">
          <Leaf size={14} />
          Eko-Region · Historia z pierwszej strony
        </div>
        <h1 className="pr-serif">
          {heroPost.title}
        </h1>
        <p>
          {heroPost.content}
        </p>
        <div className="pr-hero-meta">
          <span>{heroPost.author} · 4 min czytania</span>
          <span className="pr-hero-share">
            <Share2 size={13} /> Udostępnione {heroPost.shares} razy
          </span>
        </div>
      </div>
      <div className="pr-hero-img">
        <div className="pr-hero-cap">
          Fot. archiwum sołectwa Bartoszyce — odbiór elektroodpadów, czerwiec 2026
        </div>
      </div>
    </section>
  );
}
