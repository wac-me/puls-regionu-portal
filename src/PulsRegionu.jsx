import { useState, useEffect, useRef } from "react";
import {
  Leaf,
  Home,
  Mountain,
  Users2,
  Cpu,
  Share2,
  MapPin,
  Menu,
  X,
  ArrowUpRight,
  Search,
} from "lucide-react";

/* ------------------------------------------------------------------
   PULS REGIONU — makieta portalu (homepage)
   Docelowo: motyw WordPress. Tu: statyczny prototyp React do prezentacji.
------------------------------------------------------------------- */

const FILARY = [
  {
    id: "eko",
    label: "Eko-Region",
    icon: Leaf,
    color: "#3E7A4F",
    tint: "#EAF1E4",
    lead: "Ekologia i środowisko",
    desc: "Sołtysi, strażacy i mieszkańcy — konkretne działania, mierzalne efekty.",
  },
  {
    id: "ziemia",
    label: "Ziemia i Dom",
    icon: Home,
    color: "#A85A2E",
    tint: "#F3E7DA",
    lead: "Inwestycje i nieruchomości",
    desc: "Region jako miejsce do życia i inwestowania — bez przekrętów reklamowych.",
  },
  {
    id: "natura",
    label: "Natura i Turystyka",
    icon: Mountain,
    color: "#2D6E7E",
    tint: "#E2EEF1",
    lead: "Odkryj Warmię i Mazury",
    desc: "Szlaki, jeziora i wydarzenia opisane przez ludzi, którzy tu mieszkają.",
  },
  {
    id: "rodzina",
    label: "Rodzina i Wspólnota",
    icon: Users2,
    color: "#9C4A6B",
    tint: "#F2E3EA",
    lead: "Polityka prorodzinna",
    desc: "Żłobki, świetlice, wsparcie gmin — region przyjazny rodzinom.",
  },
  {
    id: "techno",
    label: "Techno-Region",
    icon: Cpu,
    color: "#3B5A8A",
    tint: "#E4E9F3",
    lead: "Innowacje i technologia",
    desc: "Praca zdalna, światłowód, smart villages — cyfrowa wieś w praktyce.",
  },
];

const TICKER = [
  { gmina: "Sołectwo Bartoszyce", stat: "8,4 t elektroodpadów", trend: "+12%" },
  { gmina: "Sołectwo Mrągowo", stat: "156 nowych nasadzeń", trend: "+34%" },
  { gmina: "Sołectwo Giżycko", stat: "sprzęt OSP za 12 400 zł", trend: "nowość" },
  { gmina: "Sołectwo Ostróda", stat: "3 ogrody społeczne", trend: "+2" },
  { gmina: "Sołectwo Kętrzyn", stat: "22,1 t elektroodpadów", trend: "+8%" },
  { gmina: "Sołectwo Pisz", stat: "czyste jezioro Roś — akcja 140 os.", trend: "rekord" },
];

const ARTICLES = {
  eko: [
    {
      title: "Sołtys z Bartoszyc zebrał 8 ton elektroodpadów w jeden weekend",
      excerpt:
        "Remondis odebrał sprzęt, gmina dołożyła transport. Wieś kupiła za to nowy sprzęt dla OSP.",
      author: "Jan Kowalski, sołtys",
      shares: 340,
    },
    {
      title: "Ranking Eko Sołectw 2026 — kto zebrał najwięcej, kto wydał najlepiej",
      excerpt:
        "16. edycja konkursu. Sprawdzamy, które sołectwa zamieniły odpady w realny sprzęt dla mieszkańców.",
      author: "Redakcja",
      shares: 512,
    },
    {
      title: "Strażacy z Giżycka posadzili 200 drzew wzdłuż drogi wojewódzkiej",
      excerpt: "Akcja przy wsparciu nadleśnictwa. W planach kolejne 500 sadzonek do jesieni.",
      author: "OSP Giżycko",
      shares: 198,
    },
  ],
  ziemia: [
    {
      title: "Zostawili Warszawę dla Mazur. „Pracuję zdalnie, dzieci mają jezioro za oknem”",
      excerpt: "Historia rodziny Nowaków, która kupiła działkę pod Mrągowem i nie żałuje.",
      author: "Redakcja",
      shares: 276,
    },
    {
      title: "Gmina Ostróda: ulgi podatkowe dla firm inwestujących w strefie ekonomicznej",
      excerpt: "Nowy program wsparcia dla przedsiębiorców — sprawdzamy warunki i terminy.",
      author: "Redakcja",
      shares: 89,
    },
  ],
  natura: [
    {
      title: "Szlak kajakowy przez 5 jezior — przewodnik od lokalnego sternika",
      excerpt: "Trasa, którą pokonasz w weekend. Miejsca na nocleg i ognisko od mieszkańców.",
      author: "Piotr Wiśniewski",
      shares: 421,
    },
    {
      title: "Kalendarz wydarzeń: lipiec i sierpień na Warmii i Mazurach",
      excerpt: "Festyny, rajdy rowerowe, targi produktu lokalnego — wszystko w jednym miejscu.",
      author: "Redakcja",
      shares: 156,
    },
  ],
  rodzina: [
    {
      title: "Ranking przedszkoli gminnych — opinie rodziców z regionu",
      excerpt: "Zapytaliśmy 60 rodzin. Które placówki wypadają najlepiej i dlaczego.",
      author: "Redakcja",
      shares: 233,
    },
    {
      title: "Nowa świetlica wiejska w Pieckach — miejsce spotkań dla 3 pokoleń",
      excerpt: "Sfinansowana z funduszu sołeckiego. Otwarcie już we wrześniu.",
      author: "Redakcja",
      shares: 74,
    },
  ],
  techno: [
    {
      title: "Światłowód dotarł do Piecek. Co to zmienia dla lokalnych firm",
      excerpt: "Rozmawiamy z trzema przedsiębiorcami, którzy czekali na to 5 lat.",
      author: "Redakcja",
      shares: 112,
    },
    {
      title: "Smart village: aplikacja dla mieszkańców gminy Kętrzyn",
      excerpt: "Zgłoszenia usterek, harmonogram wywozu śmieci, powiadomienia — wszystko w telefonie.",
      author: "Redakcja",
      shares: 67,
    },
  ],
};

function useTickerLoop() {
  const trackRef = useRef(null);
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let pos = 0;
    let raf;
    const step = () => {
      pos -= 0.5;
      if (Math.abs(pos) >= el.scrollWidth / 2) pos = 0;
      el.style.transform = `translateX(${pos}px)`;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);
  return trackRef;
}

export default function PulsRegionuMockup() {
  const [active, setActive] = useState("eko");
  const [navOpen, setNavOpen] = useState(false);
  const tickerRef = useTickerLoop();
  const activeFilar = FILARY.find((f) => f.id === active);

  return (
    <div className="pr-root">
      <style>{`
        .pr-root {
          --ink: #211D16;
          --ink-soft: #55503F;
          --parchment: #F3EEE1;
          --parchment-deep: #E9E1CC;
          --pine: #1F3B2C;
          --pine-light: #2E5940;
          --rust: #B5502A;
          --line: #D8CFB4;
          --card: #FBF8F0;
          font-family: 'Public Sans', -apple-system, sans-serif;
          background: var(--parchment);
          color: var(--ink);
          min-height: 100vh;
        }
        .pr-root * { box-sizing: border-box; }
        .pr-serif { font-family: 'Fraunces', Georgia, serif; }
        .pr-mono { font-family: 'JetBrains Mono', 'Courier New', monospace; }

        /* ---- utility bar ---- */
        .pr-utility {
          background: var(--pine);
          color: #DDE6DA;
          font-size: 12px;
          letter-spacing: 0.04em;
          padding: 7px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .pr-utility span.pr-dim { opacity: 0.65; }

        /* ---- masthead ---- */
        .pr-masthead {
          padding: 30px 24px 20px;
          border-bottom: 3px solid var(--ink);
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 20px;
        }
        .pr-logo-wrap { display: flex; align-items: baseline; gap: 14px; }
        .pr-logo {
          font-size: clamp(34px, 6vw, 56px);
          font-weight: 600;
          letter-spacing: -0.01em;
          line-height: 0.95;
        }
        .pr-logo em { font-style: italic; color: var(--rust); }
        .pr-tagline {
          font-size: 13px;
          color: var(--ink-soft);
          border-left: 2px solid var(--line);
          padding-left: 14px;
          max-width: 220px;
          line-height: 1.4;
        }
        .pr-search {
          display: flex; align-items: center; gap: 8px;
          border: 1.5px solid var(--ink); border-radius: 999px;
          padding: 8px 16px; font-size: 13px; color: var(--ink-soft);
          white-space: nowrap;
        }

        /* ---- ticker ---- */
        .pr-ticker {
          background: var(--ink);
          overflow: hidden;
          white-space: nowrap;
          border-bottom: 1px solid #000;
        }
        .pr-ticker-inner { display: flex; align-items: center; padding: 9px 0; }
        .pr-ticker-label {
          flex-shrink: 0;
          background: var(--rust);
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          padding: 5px 14px;
          margin-right: 16px;
          border-radius: 3px;
        }
        .pr-ticker-track { display: flex; gap: 40px; will-change: transform; }
        .pr-ticker-item { display: flex; align-items: center; gap: 8px; color: #E8E2D0; font-size: 13px; flex-shrink: 0; }
        .pr-ticker-item b { color: #fff; font-weight: 600; }
        .pr-ticker-trend { font-size: 11px; padding: 2px 7px; border-radius: 999px; background: rgba(255,255,255,0.12); color: #A9D9B6; }

        /* ---- nav ---- */
        .pr-nav {
          display: flex;
          border-bottom: 1px solid var(--line);
          background: var(--card);
          overflow-x: auto;
        }
        .pr-nav-item {
          display: flex; align-items: center; gap: 8px;
          padding: 14px 20px;
          font-size: 13.5px; font-weight: 600;
          border-right: 1px solid var(--line);
          cursor: pointer;
          white-space: nowrap;
          color: var(--ink-soft);
          transition: background 0.15s, color 0.15s;
        }
        .pr-nav-item:hover { background: var(--parchment-deep); }
        .pr-nav-item.is-active { color: var(--ink); background: var(--parchment-deep); }
        .pr-nav-item .pr-dot { width: 7px; height: 7px; border-radius: 50%; }

        /* ---- hero ---- */
        .pr-hero {
          padding: 44px 24px;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 40px;
          align-items: center;
          border-bottom: 1px solid var(--line);
        }
        .pr-hero-eyebrow {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 11.5px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; color: var(--pine-light);
          margin-bottom: 14px;
        }
        .pr-hero h1 {
          font-size: clamp(28px, 4vw, 46px);
          line-height: 1.08;
          margin: 0 0 16px;
          font-weight: 600;
        }
        .pr-hero p { font-size: 16px; color: var(--ink-soft); line-height: 1.55; max-width: 46ch; margin: 0 0 22px; }
        .pr-hero-meta { display: flex; align-items: center; gap: 18px; font-size: 13px; color: var(--ink-soft); }
        .pr-hero-share {
          display: flex; align-items: center; gap: 6px;
          background: var(--pine); color: #fff; padding: 7px 14px; border-radius: 999px;
          font-size: 12.5px; font-weight: 600;
        }
        .pr-hero-img {
          aspect-ratio: 4/3.1;
          border-radius: 6px;
          background-image: url('https://media.istockphoto.com/id/1357827501/pl/zdjęcie/zróżnicowana-grupa-wolontariuszy-sprzątająca-las-z-odpadów-koncepcja-pracy-społecznej.jpg?s=1024x1024&w=is&k=20&c=zd6rZ8mrjU-Q4FYQHCIFX9SgKsA9EbphuYHtN3X1oC8=');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
          overflow: hidden;
        }
        .pr-hero-img::after {
          content: '';
          position: absolute; inset: 0;
          background-image: repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 5px);
        }
        .pr-hero-cap {
          position: absolute; left: 16px; bottom: 16px; right: 16px;
          background: rgba(20,26,20,0.72); backdrop-filter: blur(2px);
          color: #EDE8D8; font-size: 12px; padding: 9px 12px; border-radius: 4px;
        }

        /* ---- filary strip ---- */
        .pr-filary-strip {
          display: grid; grid-template-columns: repeat(5, 1fr);
          border-bottom: 3px solid var(--ink);
        }
        .pr-filar-tab {
          padding: 16px 14px;
          border-right: 1px solid var(--line);
          cursor: pointer;
        }
        .pr-filar-tab:last-child { border-right: none; }
        .pr-filar-tab .pr-ficon { width: 30px; height: 30px; border-radius: 7px; display: flex; align-items: center; justify-content: center; margin-bottom: 8px; }
        .pr-filar-tab .pr-flabel { font-size: 13px; font-weight: 700; }
        .pr-filar-tab .pr-flead { font-size: 11.5px; color: var(--ink-soft); margin-top: 2px; }

        /* ---- section ---- */
        .pr-section { padding: 40px 24px 56px; }
        .pr-section-head {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 22px; padding-bottom: 14px; border-bottom: 2px solid var(--ink);
        }
        .pr-section-title { display: flex; align-items: center; gap: 12px; }
        .pr-section-title h2 { font-size: 26px; margin: 0; font-weight: 600; }
        .pr-section-desc { font-size: 13.5px; color: var(--ink-soft); margin: 0; max-width: 50ch; }
        .pr-more { font-size: 12.5px; font-weight: 700; display: flex; align-items: center; gap: 4px; }

        .pr-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
        .pr-card {
          background: var(--card);
          border: 1px solid var(--line);
          border-radius: 6px;
          overflow: hidden;
          display: flex; flex-direction: column;
        }
        .pr-card-img {
          aspect-ratio: 16/10;
          background: linear-gradient(135deg, var(--tint, #eee), rgba(0,0,0,0.06));
          background-size: cover;
          background-position: center;
          position: relative;
        }
        .pr-card-body { padding: 16px 18px 18px; display: flex; flex-direction: column; gap: 8px; flex: 1; }
        .pr-card-body h3 { font-size: 16px; line-height: 1.32; margin: 0; font-weight: 600; }
        .pr-card-body p { font-size: 13px; color: var(--ink-soft); line-height: 1.45; margin: 0; flex: 1; }
        .pr-card-foot { display: flex; align-items: center; justify-content: space-between; font-size: 11.5px; color: var(--ink-soft); margin-top: 6px; padding-top: 10px; border-top: 1px dashed var(--line); }
        .pr-share-count { display: flex; align-items: center; gap: 4px; font-weight: 600; }

        /* ---- footer ---- */
        .pr-footer { background: var(--pine); color: #D9E2D4; padding: 40px 24px 24px; }
        .pr-footer-grid { display: grid; grid-template-columns: 1.3fr 1fr 1fr 1fr; gap: 32px; margin-bottom: 30px; }
        .pr-footer h4 { font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; color: #9FB39B; margin: 0 0 12px; }
        .pr-footer p, .pr-footer a { font-size: 13px; color: #D9E2D4; line-height: 1.7; }
        .pr-footer a { display: block; text-decoration: none; opacity: 0.85; }
        .pr-footer a:hover { opacity: 1; text-decoration: underline; }
        .pr-footer-bottom { border-top: 1px solid rgba(255,255,255,0.15); padding-top: 16px; display: flex; justify-content: space-between; font-size: 11.5px; color: #9FB39B; flex-wrap: wrap; gap: 8px; }

        @media (max-width: 900px) {
          .pr-hero { grid-template-columns: 1fr; }
          .pr-filary-strip { grid-template-columns: repeat(3, 1fr); }
          .pr-grid { grid-template-columns: repeat(2, 1fr); }
          .pr-footer-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
          .pr-masthead { flex-direction: column; align-items: flex-start; }
          .pr-tagline { border-left: none; padding-left: 0; border-top: 2px solid var(--line); padding-top: 10px; max-width: 100%; }
          .pr-filary-strip { grid-template-columns: repeat(2, 1fr); }
          .pr-grid { grid-template-columns: 1fr; }
          .pr-footer-grid { grid-template-columns: 1fr; gap: 22px; }
        }

        a, button { font-family: inherit; }
        button:focus-visible, .pr-nav-item:focus-visible, .pr-filar-tab:focus-visible {
          outline: 2px solid var(--rust); outline-offset: 2px;
        }
      `}</style>

      {/* UTILITY BAR */}
      <div className="pr-utility">
        <span>Fundacja Warmia i Mazury w Europie</span>
        <span className="pr-dim pr-mono">1 lipca 2026 · Wydanie cyfrowe</span>
      </div>

      {/* MASTHEAD */}
      <header className="pr-masthead">
        <div className="pr-logo-wrap">
          <div className="pr-logo pr-serif">
            Puls <em>Regionu</em>
          </div>
          <div className="pr-tagline">
            16 lat w druku. Teraz — ogólnopolski portal regionalny o ekologii, ludziach
            i miejscach, które warto znać.
          </div>
        </div>
        <div className="pr-search">
          <Search size={15} />
          Szukaj artykułów, sołectw, gmin…
        </div>
      </header>

      {/* TICKER — sygnaturowy element: ranking eko-sołectw na żywo */}
      <div className="pr-ticker">
        <div className="pr-ticker-inner">
          <span className="pr-ticker-label">Ranking Eko Sołectw</span>
          <div className="pr-ticker-track pr-mono" ref={tickerRef}>
            {[...TICKER, ...TICKER].map((t, i) => (
              <div className="pr-ticker-item" key={i}>
                <MapPin size={12} />
                <b>{t.gmina}</b>
                <span>— {t.stat}</span>
                <span className="pr-ticker-trend">{t.trend}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* NAV */}
      <nav className="pr-nav">
        {FILARY.map((f) => (
          <div
            key={f.id}
            className={`pr-nav-item ${active === f.id ? "is-active" : ""}`}
            onClick={() => setActive(f.id)}
          >
            <span className="pr-dot" style={{ background: f.color }} />
            {f.label}
          </div>
        ))}
      </nav>

      {/* HERO */}
      <section className="pr-hero">
        <div>
          <div className="pr-hero-eyebrow">
            <Leaf size={14} />
            Eko-Region · Historia z pierwszej strony
          </div>
          <h1 className="pr-serif">
            Sołtys z Bartoszyc zebrał 8 ton elektroodpadów w jeden weekend
          </h1>
          <p>
            Remondis odebrał sprzęt, gmina dołożyła transport, a sołectwo kupiło za
            zebrane środki nowy sprzęt ratowniczy dla miejscowej OSP. To już 16. edycja
            konkursu Eko Sołectwa — i kolejny dowód, że małe działania dają wielkie
            efekty.
          </p>
          <div className="pr-hero-meta">
            <span>Jan Kowalski, sołtys · 4 min czytania</span>
            <span className="pr-hero-share">
              <Share2 size={13} /> Udostępnione 340 razy
            </span>
          </div>
        </div>
        <div className="pr-hero-img">
          <div className="pr-hero-cap">
            Fot. archiwum sołectwa Bartoszyce — odbiór elektroodpadów, czerwiec 2026
          </div>
        </div>
      </section>

      {/* FILARY STRIP */}
      <div className="pr-filary-strip">
        {FILARY.map((f) => {
          const Icon = f.icon;
          return (
            <div
              key={f.id}
              className="pr-filar-tab"
              style={{ background: active === f.id ? f.tint : "transparent" }}
              onClick={() => setActive(f.id)}
            >
              <div className="pr-ficon" style={{ background: f.color }}>
                <Icon size={16} color="#fff" />
              </div>
              <div className="pr-flabel">{f.label}</div>
              <div className="pr-flead">{f.lead}</div>
            </div>
          );
        })}
      </div>

      {/* ACTIVE SECTION */}
      <section className="pr-section">
        <div className="pr-section-head">
          <div className="pr-section-title">
            <div
              className="pr-ficon"
              style={{ background: activeFilar.color, width: 34, height: 34, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <activeFilar.icon size={17} color="#fff" />
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
          {ARTICLES[active].map((a, i) => (
            <article className="pr-card" key={i}>
              <div
                className="pr-card-img"
                style={{
                  "--tint": activeFilar.tint,
                  backgroundImage:
                    active === "eko"
                      ? i === 0
                        ? "url('https://media.istockphoto.com/id/1357827501/pl/zdjęcie/zróżnicowana-grupa-wolontariuszy-sprzątająca-las-z-odpadów-koncepcja-pracy-społecznej.jpg?s=1024x1024&w=is&k=20&c=zd6rZ8mrjU-Q4FYQHCIFX9SgKsA9EbphuYHtN3X1oC8=')"
                        : i === 1
                        ? "url('https://media.istockphoto.com/id/2256716039/pl/zdjęcie/koncepcja-ekologii-drewnianych-wiatraków-zielona-energia-natura.jpg?s=1024x1024&w=is&k=20&c=dgXYrromBzV3rJmNoGHLCiydcWzoEWO2M91WKU2vGkk=')"
                        : i === 2
                        ? "url('https://media.istockphoto.com/id/821308942/pl/zdjęcie/ciągnik-rolniczy-sprzęt-do-zbierania-zbóż-w-terenie-sektor-rolny.jpg?s=1024x1024&w=is&k=20&c=Fgo0lpxiUBnv-1kIdiC13diaLuiwOPkWIsY44JFfvwI=')"
                        : undefined
                      : undefined,
                }}
              />
              <div className="pr-card-body">
                <h3>{a.title}</h3>
                <p>{a.excerpt}</p>
                <div className="pr-card-foot">
                  <span>{a.author}</span>
                  <span className="pr-share-count" style={{ color: activeFilar.color }}>
                    <Share2 size={11} /> {a.shares}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pr-footer">
        <div className="pr-footer-grid">
          <div>
            <div className="pr-serif" style={{ fontSize: 22, color: "#fff", marginBottom: 10 }}>
              Puls Regionu
            </div>
            <p style={{ maxWidth: "32ch" }}>
              Wydawane przez Fundację Warmia i Mazury w Europie. Od 20 lat piszemy o
              ludziach, którzy realnie zmieniają swój region.
            </p>
          </div>
          <div>
            <h4>Filary portalu</h4>
            {FILARY.map((f) => (
              <a key={f.id}>{f.label}</a>
            ))}
          </div>
          <div>
            <h4>Fundacja</h4>
            <a>O nas</a>
            <a>Konkurs Eko Sołectwa</a>
            <a>Partnerzy i granty</a>
            <a>Kontakt dla redakcji</a>
          </div>
          <div>
            <h4>Dla partnerów</h4>
            <a>Współpraca z gminami</a>
            <a>Sponsoring sekcji</a>
            <a>Reklama regionalna</a>
          </div>
        </div>
        <div className="pr-footer-bottom">
          <span>© 2026 Puls Regionu — Fundacja Warmia i Mazury w Europie</span>
          <span>Partner strategiczny konkursu: Remondis</span>
        </div>
      </footer>
    </div>
  );
}
