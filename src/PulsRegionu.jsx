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
  Mail,
  Sparkles,
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

const HERO_POST_CONTENT = `Remondis odebrał sprzęt, gmina dołożyła transport, a sołectwo kupiło za to nowy sprzęt ratowniczy dla miejscowej OSP. To już 16. edycja konkursu Eko Sołectwa — i kolejny dowód, że małe działania dają wielkie efekty. W artykule przyglądamy się organizacji zbiórki, pracy wolontariuszy i planom na przyszłość.`;

const HERO_POST = {
  ...ARTICLES.eko[0],
  content: HERO_POST_CONTENT,
  image:
    "https://media.istockphoto.com/id/1357827501/pl/zdjęcie/zróżnicowana-grupa-wolontariuszy-sprzątająca-las-z-odpadów-koncepcja-pracy-społecznej.jpg?s=1024x1024&w=is&k=20&c=zd6rZ8mrjU-Q4FYQHCIFX9SgKsA9EbphuYHtN3X1oC8=",
};

const EKO_POST_IMAGES = [
  HERO_POST.image,
  "https://media.istockphoto.com/id/2256716039/pl/zdjęcie/koncepcja-ekologii-drewnianych-wiatraków-zielona-energia-natura.jpg?s=1024x1024&w=is&k=20&c=dgXYrromBzV3rJmNoGHLCiydcWzoEWO2M91WKU2vGkk=",
  "https://media.istockphoto.com/id/821308942/pl/zdjęcie/ciągnik-rolniczy-sprzęt-do-zbierania-zbóż-w-terenie-sektor-rolny.jpg?s=1024x1024&w=is&k=20&c=Fgo0lpxiUBnv-1kIdiC13diaLuiwOPkWIsY44JFfvwI=",
];

const EKO_POST_CONTENTS = [
  HERO_POST_CONTENT,
  `W rankingu Eko Sołectw 2026 skupiamy się na sprawdzonych praktykach: jak gminy promują selektywną zbiórkę, w jaki sposób inwestują w edukację ekologiczną oraz które sołectwa wyróżniają się realnymi efektami. Przedstawiamy historie zwycięzców i ich plany na kolejny rok.`,
  `Strażacy z Giżycka odbyli akcję sadzenia 200 drzew wzdłuż drogi wojewódzkiej. Opisujemy organizację wydarzenia, wsparcie leśnictwa oraz kolejne etapy programu, który ma poprawić bezpieczeństwo i jakość powietrza w regionie.`,
];

const EKO_POSTS = ARTICLES.eko.map((item, index) => ({
  ...item,
  content: EKO_POST_CONTENTS[index] || "",
  image: EKO_POST_IMAGES[index] || "",
}));

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
  const [articleView, setArticleView] = useState(null);
  const tickerRef = useTickerLoop();
  const activeFilar = FILARY.find((f) => f.id === active);

  const handleOpenArticle = (index) => {
    if (active === "eko") {
      setArticleView(EKO_POSTS[index] || HERO_POST);
    }
  };

  const handleBackToSection = () => setArticleView(null);

  return (
    <div className="pr-root">
      <style>{`
        .pr-root {
          --bg: #F6F8FB;
          --surface: #FFFFFF;
          --surface-soft: #F1F4F8;
          --text: #1F2937;
          --text-soft: #5B6670;
          --accent: #23A9E0;
          --accent-soft: #D9EFFB;
          --accent-alt: #F4C860;
          --brand-green: #7BC142;
          --brand-yellow: #F7D13D;
          --brand-blue: #2096D1;
          --brand-navy: #0F476F;
          --border: #E4E7EC;
          --shadow: rgba(34, 60, 80, 0.08);
          font-family: 'Public Sans', -apple-system, sans-serif;
          background: var(--bg);
          color: var(--text);
          min-height: 100vh;
        }
        .pr-root * { box-sizing: border-box; }
        .pr-serif { font-family: 'Fraunces', Georgia, serif; }
        .pr-mono { font-family: 'JetBrains Mono', 'Courier New', monospace; }

        /* ---- utility bar ---- */
        .pr-topline {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: 18px;
          padding: 10px 24px;
          background: #E9443B;
          border-bottom: 1px solid rgba(255,255,255,0.16);
          color: #fff;
          font-size: 12px;
        }
        .pr-top-block {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 0;
          border-radius: 0;
          background: transparent;
        }
        .pr-top-block img {
          width: 26px;
          height: auto;
          display: block;
        }
        .pr-top-block strong,
        .pr-top-block span {
          font-weight: 700;
          color: #fff;
        }

        .pr-utility {
          background: var(--brand-blue);
          color: #FFF;
          font-size: 12px;
          letter-spacing: 0.04em;
          padding: 10px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 8px 20px rgba(32, 150, 209, 0.15);
        }
        .pr-utility-logo {
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }
        .pr-utility-logo img {
          width: 28px;
          height: auto;
          display: block;
        }
        .pr-utility span.pr-dim { opacity: 0.8; }

        /* ---- masthead ---- */
        .pr-masthead {
          padding: 30px 24px 22px;
          background: #E9443B;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 20px;
          border-bottom: 1px solid rgba(255,255,255,0.18);
          color: #fff;
        }
        .pr-logo-wrap { display: flex; flex-direction: column; align-items: flex-start; gap: 18px; }
        .pr-logo-badge {
          width: auto;
          height: auto;
          display: block;
          background: transparent;
          border-radius: 0;
          border: none;
          overflow: visible;
          padding: 0;
        }
        .pr-logo-badge img { width: 230px; height: auto; display: block; }
        .pr-logo {
          display: none;
        }
        .pr-logo em { font-style: italic; color: rgba(255,255,255,0.88); }
        .pr-tagline-wrapper { display: block; }
        .pr-tagline {
          font-size: 14px;
          color: rgba(255,255,255,0.9);
          max-width: 320px;
          line-height: 1.5;
          margin: 0;
        }
        .pr-search {
          display: flex; align-items: center; gap: 10px;
          border: 1.5px solid var(--border);
          border-radius: 999px;
          padding: 10px 18px;
          font-size: 13px;
          color: var(--text-soft);
          background: var(--surface-soft);
          min-width: 260px;
        }

        /* ---- ticker ---- */
        .pr-ticker {
          background: linear-gradient(90deg, #264ECD, #2280F7);
          overflow: hidden;
          white-space: nowrap;
          position: relative;
          box-shadow: inset 0 -1px 0 rgba(255, 255, 255, 0.12);
        }
        .pr-ticker-inner {
          display: flex;
          align-items: center;
          padding: 12px 24px;
          gap: 18px;
          position: relative;
        }
        .pr-ticker-label {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          background: #E9443B;
          color: #FFF;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          padding: 6px 14px;
          border-radius: 999px;
          z-index: 2;
        }
        .pr-ticker-track {
          display: flex;
          gap: 40px;
          will-change: transform;
          min-width: 100%;
          position: relative;
          z-index: 1;
        }
        .pr-ticker-item { display: flex; align-items: center; gap: 8px; color: rgba(255,255,255,0.92); font-size: 13px; flex-shrink: 0; }
        .pr-ticker-item b { color: #fff; font-weight: 700; }
        .pr-ticker-trend { font-size: 11px; padding: 3px 8px; border-radius: 999px; background: rgba(255,255,255,0.18); color: #D3E6FF; }

        /* ---- nav ---- */
        .pr-nav {
          display: flex;
          border-bottom: 1px solid var(--border);
          background: var(--surface);
          overflow-x: auto;
        }
        .pr-nav-item {
          display: flex; align-items: center; gap: 10px;
          padding: 16px 22px;
          font-size: 14px; font-weight: 700;
          border-right: 1px solid var(--border);
          cursor: pointer;
          white-space: nowrap;
          color: var(--text-soft);
          transition: background 0.15s, color 0.15s;
        }
        .pr-nav-item:hover { background: var(--surface-soft); }
        .pr-nav-item.is-active { color: var(--brand-blue); background: rgba(32, 150, 209, 0.08); }
        .pr-nav-item .pr-dot { width: 8px; height: 8px; border-radius: 50%; }

        /* ---- hero ---- */
        .pr-hero {
          padding: 44px 24px;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 40px;
          align-items: center;
          border-bottom: 1px solid var(--border);
          background: var(--surface);
        }
        .pr-hero-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11.5px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; color: var(--brand-blue);
          margin-bottom: 16px;
        }
        .pr-hero h1 {
          font-size: clamp(32px, 5vw, 52px);
          line-height: 1.05;
          margin: 0 0 20px;
          font-weight: 700;
          color: var(--text);
        }
        .pr-hero p { font-size: 16.5px; color: var(--text-soft); line-height: 1.7; max-width: 52ch; margin: 0 0 24px; }
        .pr-hero-meta { display: flex; flex-wrap: wrap; gap: 16px; font-size: 13px; color: var(--text-soft); }
        .pr-hero-share {
          display: flex; align-items: center; gap: 8px;
          background: var(--brand-blue);
          color: #fff;
          padding: 9px 16px;
          border-radius: 999px;
          font-size: 13px; font-weight: 700;
        }
        .pr-hero-img {
          aspect-ratio: 4/3.1;
          border-radius: 20px;
          background-image: url('https://media.istockphoto.com/id/1357827501/pl/zdjęcie/zróżnicowana-grupa-wolontariuszy-sprzątająca-las-z-odpadów-koncepcja-pracy-społecznej.jpg?s=1024x1024&w=is&k=20&c=zd6rZ8mrjU-Q4FYQHCIFX9SgKsA9EbphuYHtN3X1oC8=');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
          overflow: hidden;
          box-shadow: 0 24px 60px rgba(34, 60, 80, 0.12);
        }
        .pr-hero-img::after {
          content: '';
          position: absolute; inset: 0;
          background-image: linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.16) 100%);
        }
        .pr-hero-cap {
          position: absolute; left: 16px; bottom: 16px; right: 16px;
          background: rgba(16, 24, 40, 0.72);
          backdrop-filter: blur(4px);
          color: #F8FAFC;
          font-size: 12px;
          padding: 10px 14px;
          border-radius: 14px;
        }

        /* ---- filary strip ---- */
        .pr-filary-strip {
          display: grid; grid-template-columns: repeat(5, 1fr);
          border-bottom: 3px solid var(--brand-blue);
        }
        .pr-filar-tab {
          padding: 18px 16px;
          border-right: 1px solid var(--border);
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .pr-filar-tab:hover { background: var(--surface-soft); transform: translateY(-1px); }
        .pr-filar-tab:last-child { border-right: none; }
        .pr-filar-tab .pr-ficon { width: 34px; height: 34px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 10px; }
        .pr-filar-tab .pr-flabel { font-size: 13px; font-weight: 700; }
        .pr-filar-tab .pr-flead { font-size: 12px; color: var(--text-soft); margin-top: 4px; }

        /* ---- section ---- */
        .pr-section { padding: 44px 24px 60px; }
        .pr-section-head {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid var(--border);
        }
        .pr-section-title { display: flex; align-items: center; gap: 14px; }
        .pr-section-title h2 { font-size: 28px; margin: 0; font-weight: 700; color: var(--text); }
        .pr-section-desc { font-size: 14px; color: var(--text-soft); margin: 0; max-width: 52ch; }
        .pr-more { font-size: 13px; font-weight: 700; display: flex; align-items: center; gap: 6px; color: var(--brand-blue); }

        .pr-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .pr-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 22px;
          overflow: hidden;
          display: flex; flex-direction: column;
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.06);
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .pr-newsletter {
          position: relative;
          background: radial-gradient(circle at top left, rgba(35, 169, 224, 0.22), transparent 32%),
            radial-gradient(circle at bottom right, rgba(123, 193, 66, 0.18), transparent 28%),
            linear-gradient(145deg, #eef9f5 0%, #d9ecf9 55%, #f4f7ff 100%);
          padding: 42px 24px;
          margin: 0 0 28px;
          border-radius: 30px;
          box-shadow: 0 28px 72px rgba(15, 23, 42, 0.14);
          border: 1px solid rgba(34, 60, 80, 0.08);
          overflow: hidden;
        }
        .pr-newsletter::before,
        .pr-newsletter::after {
          content: '';
          position: absolute;
          border-radius: 50%;
          opacity: 0.35;
          pointer-events: none;
        }
        .pr-newsletter::before {
          width: 120px;
          height: 120px;
          background: rgba(35, 169, 224, 0.16);
          top: -30px;
          right: -40px;
        }
        .pr-newsletter::after {
          width: 180px;
          height: 180px;
          background: rgba(123, 193, 66, 0.16);
          bottom: -40px;
          left: -50px;
        }
        .pr-newsletter-head {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 16px;
          position: relative;
          z-index: 1;
        }
        .pr-newsletter-icon {
          width: 48px;
          height: 48px;
          border-radius: 16px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(180deg, rgba(35, 169, 224, 0.18) 0%, rgba(59, 125, 35, 0.16) 100%);
          color: #16586b;
          box-shadow: 0 12px 24px rgba(35, 169, 224, 0.12);
        }
        .pr-newsletter-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 18px;
          position: relative;
          z-index: 1;
          max-width: 560px;
          width: 100%;
        }
        .pr-newsletter-form input {
          width: 100%;
          padding: 14px 16px;
          border: 1px solid rgba(15, 23, 42, 0.12);
          border-radius: 16px;
          font-size: 15px;
          color: #10212B;
          background: #fff;
          outline: none;
          box-shadow: inset 0 1px 2px rgba(16, 33, 43, 0.06);
        }
        .pr-newsletter-form button {
          width: 100%;
          border: none;
          border-radius: 18px;
          padding: 16px 20px;
          font-size: 15px;
          font-weight: 700;
          color: #fff;
          background: linear-gradient(120deg, #3B7D23 0%, #23A9E0 100%);
          cursor: pointer;
          box-shadow: 0 14px 30px rgba(35, 115, 90, 0.18);
          transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        .pr-newsletter-form button:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 34px rgba(35, 115, 90, 0.24);
          filter: brightness(1.03);
        }
        .pr-newsletter p {
          color: var(--text);
          opacity: 0.9;
          line-height: 1.7;
        }
        .pr-card:hover { transform: translateY(-2px); box-shadow: 0 22px 50px rgba(15, 23, 42, 0.1); }
        .pr-card-img {
          aspect-ratio: 16/10;
          background: linear-gradient(135deg, var(--tint, #eef4ff), rgba(0,0,0,0.04));
          background-size: cover;
          background-position: center;
          position: relative;
        }
        .pr-card-body { padding: 22px 22px 22px; display: flex; flex-direction: column; gap: 10px; flex: 1; }
        .pr-card-body h3 { font-size: 17px; line-height: 1.35; margin: 0; font-weight: 700; color: var(--text); }
        .pr-card-body p { font-size: 14px; color: var(--text-soft); line-height: 1.65; margin: 0; flex: 1; }
        .pr-card-foot { display: flex; align-items: center; justify-content: space-between; font-size: 12px; color: var(--text-soft); margin-top: 12px; padding-top: 14px; border-top: 1px solid var(--border); }
        .pr-share-count { display: flex; align-items: center; gap: 6px; font-weight: 700; }

        /* ---- footer ---- */
        .pr-footer { background: var(--brand-navy); color: #E7EDF8; padding: 44px 24px 28px; }
        .pr-footer-grid { display: grid; grid-template-columns: 1.4fr 1fr 1fr 1fr; gap: 32px; margin-bottom: 34px; }
        .pr-footer h4 { font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; color: #B9D9F0; margin: 0 0 14px; }
        .pr-footer p, .pr-footer a { font-size: 13px; color: #E7EDF8; line-height: 1.8; }
        .pr-footer a { display: block; text-decoration: none; opacity: 0.82; }
        .pr-footer a:hover { opacity: 1; text-decoration: underline; }
        .pr-sponsor-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          padding: 18px 24px;
          background: #fff;
          border-bottom: 1px solid rgba(0,0,0,0.08);
        }
        .pr-sponsor-logo {
          display: flex;
          align-items: center;
        }
        .pr-sponsor-logo img {
          max-height: 34px;
          width: auto;
          display: block;
        }
        .pr-sponsor-text {
          flex: 1;
          text-align: center;
          font-size: 14px;
          font-weight: 700;
          color: #1F2937;
        }
        .pr-sponsor-logo--right {
          margin-left: auto;
        }
        .pr-footer-bottom { border-top: 1px solid rgba(255,255,255,0.12); padding-top: 18px; display: flex; justify-content: space-between; font-size: 12px; color: #B9D9F0; flex-wrap: wrap; gap: 10px; }

        @media (max-width: 900px) {
          .pr-hero { grid-template-columns: 1fr; }
          .pr-filary-strip { grid-template-columns: repeat(3, 1fr); }
          .pr-grid { grid-template-columns: repeat(2, 1fr); }
          .pr-footer-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
          .pr-masthead { flex-direction: column; align-items: flex-start; }
          .pr-tagline { border-left: none; padding-left: 0; border-top: 2px solid rgba(255,255,255,0.12); padding-top: 10px; max-width: 100%; }
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
        <div className="pr-utility-logo">
          <img src="/logo_fundacji_warmi_i_mazur.png" alt="Logo Fundacji Warmia i Mazury" />
          <span>Fundacja Warmia i Mazury w Europie</span>
        </div>
        <span className="pr-dim pr-mono">1 lipca 2026 · Wydanie cyfrowe</span>
      </div>

      {/* TOP LINE */}
      <div className="pr-topline">
        <div className="pr-top-block">
          <img src="/logo_uni_europejskiej.png" alt="Logo Unii Europejskiej" />
          <strong>Unia Europejska</strong>
        </div>
        <div className="pr-top-block" style={{ marginLeft: 'auto' }}>
          <img src="/godlo_warmi_i_mazur.png" alt="Godło Warmii i Mazur" />
          <span>Województwo Warmińsko-Mazurskie</span>
        </div>
      </div>

      {/* MASTHEAD */}
      <header className="pr-masthead">
        <div className="pr-logo-wrap" onClick={() => { setActive('eko'); setArticleView(null); }} style={{ cursor: 'pointer' }}>
          <div className="pr-logo-badge">
            <img src="/logo_puls_regionu.png" alt="Logo Puls Regionu" />
          </div>
          <div className="pr-tagline-wrapper">
            <div className="pr-tagline">
              16 lat w druku. Teraz — ogólnopolski portal regionalny o ekologii, ludziach
              i miejscach, które warto znać.
            </div>
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
      {!articleView && (
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
      )}

      {/* ARTICLE PAGE */}
      {articleView && (
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
                <h2 className="pr-serif">{articleView.title}</h2>
                <p className="pr-section-desc">{articleView.excerpt}</p>
              </div>
            </div>
            <div className="pr-more" style={{ color: activeFilar.color }} onClick={handleBackToSection}>
              Wróć do sekcji <ArrowUpRight size={14} />
            </div>
          </div>

          <div className="pr-card-img" style={{ backgroundImage: `url('${articleView.image}')`, marginBottom: 24 }} />

          <div style={{ maxWidth: 860, lineHeight: 1.8, color: "var(--ink-soft)" }}>
            <p>{articleView.content}</p>
            <p>
              Mieszkańcy, sołtysi i OSP testują teraz nowe sposoby segregacji i transportu
              elektroodpadów. To historia, która pokazuje, jak dużo może zmienić kilka dni
              wspólnej pracy.
            </p>
            <p>
              W kolejnych tygodniach będziemy śledzić, jak gmina Bartoszyce wykorzysta
              środki na sprzęt oraz jakie działania edukacyjne uruchomi dla lokalnych
              szkół i organizacji społecznych.
            </p>
          </div>
        </section>
      )}

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
            <article className="pr-card" key={i} onClick={() => handleOpenArticle(i)}>
              <div
                className="pr-card-img"
                style={{
                  "--tint": activeFilar.tint,
                  backgroundImage:
                    active === "eko"
                      ? i === 0
                        ? `url('${HERO_POST.image}')`
                        : i === 1
                        ? `url('${EKO_POST_IMAGES[1]}')`
                        : i === 2
                        ? `url('${EKO_POST_IMAGES[2]}')`
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

      {/* NEWSLETTER */}
      <section className="pr-newsletter">
        <div className="pr-newsletter-head">
          <div className="pr-newsletter-icon">
            <Mail size={22} />
          </div>
          <div>
            <h2 className="pr-serif">Zapisz się po informacje lokalne</h2>
            <p className="pr-section-desc">
              Otrzymasz aktualności o konkursach, wydarzeniach i projektach z Warmii i Mazur.
            </p>
          </div>
        </div>
        <div className="pr-newsletter-form">
          <input type="email" placeholder="Twój e-mail" aria-label="E-mail do newslettera" />
          <button type="button"><Sparkles size={16} /> Zapisz się</button>
        </div>
      </section>

      {/* SPONSOR BAR */}
      <div className="pr-sponsor-bar">
        <div className="pr-sponsor-logo">
          <img src="/logo_fundacji_warmi_i_mazur.png" alt="Logo Fundacji Warmia i Mazury" />
        </div>
        <div className="pr-sponsor-text">Fundacja Warmia i Mazury w Europie</div>
        <div className="pr-sponsor-logo pr-sponsor-logo--right">
          <img src="/godlo_warmi_i_mazur_white.png" alt="Godło Warmii i Mazur" />
        </div>
      </div>

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
