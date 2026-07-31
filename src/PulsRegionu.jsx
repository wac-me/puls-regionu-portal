import { useState } from "react";
import {
  Leaf,
  Home,
  Mountain,
  MapPin,
  Cpu,
  ArrowUpRight,
  Mail,
  Sparkles,
} from "lucide-react";
import HeroSection from "./components/home/HeroSection";
import PillarGrid from "./components/home/PillarGrid";
import ActivePillarContent from "./components/home/ActivePillarContent";
import Layout from "./components/layout/Layout";

// --- DANE (FILARY, ARTICLES, etc.) ---
const FILARY_DATA = [
  {
    id: "eko",
    label: "EKO-REGION",
    icon: Leaf,
    color: "#3E7A4F",
    tint: "#EAF1E4",
    lead: "Ekologia i środowisko",
    desc: "Sołtysi, strażacy i mieszkańcy — konkretne działania, mierzalne efekty.",
  },
  {
    id: "ziemia",
    label: "ZIEMIA I DOM",
    icon: Home,
    color: "#A85A2E",
    tint: "#F3E7DA",
    lead: "Inwestycje i nieruchomości",
    desc: "Region jako miejsce do życia i inwestowania — bez przekrętów reklamowych.",
  },
  {
    id: "natura",
    label: "NATURA I TURYSTYKA",
    icon: Mountain,
    color: "#2D6E7E",
    tint: "#E2EEF1",
    lead: "Odkryj Warmię i Mazury",
    desc: "Szlaki, jeziora i wydarzenia opisane przez ludzi, którzy tu mieszkają.",
  },
  {
    id: "rodzina",
    label: "ATRAKCJE W REGIONIE",
    icon: MapPin,
    color: "#9C4A6B",
    tint: "#F2E3EA",
    lead: "Wydarzenia i miejsca",
    desc: "Festyny, muzea, szlaki turystyczne — co warto zobaczyć w regionie.",
  },
  {
    id: "techno",
    label: "INWESTYCJE W REGIONIE",
    icon: Cpu,
    color: "#3B5A8A",
    tint: "#E4E9F3",
    lead: "Rozwój i infrastruktura",
    desc: "Nowe inwestycje, projekty unijne, rozwój lokalnej infrastruktury.",
  },
];

const ARTICLES = {
  eko: [
    {
      title: "Sołtys z Bartoszyc zebrał 8 ton elektroodpadów w jeden weekend",
      excerpt: "Remondis odebrał sprzęt, gmina dołożyła transport. Wieś kupiła za to nowy sprzęt dla OSP.",
      author: "Jan Kowalski, sołtys",
      shares: 340,
      image: "https://media.istockphoto.com/id/1357827501/pl/zdjęcie/zróżnicowana-grupa-wolontariuszy-sprzątająca-las-z-odpadów-koncepcja-pracy-społecznej.jpg?s=1024x1024&w=is&k=20&c=zd6rZ8mrjU-Q4FYQHCIFX9SgKsA9EbphuYHtN3X1oC8=",
    },
    {
      title: "Ranking Eko Sołectw 2026 — kto zebrał najwięcej, kto wydał najlepiej",
      excerpt: "16. edycja konkursu. Sprawdzamy, które sołectwa zamieniły odpady w realny sprzęt dla mieszkańców.",
      author: "Redakcja",
      shares: 512,
      image: "https://media.istockphoto.com/id/2256716039/pl/zdjęcie/koncepcja-ekologii-drewnianych-wiatraków-zielona-energia-natura.jpg?s=1024x1024&w=is&k=20&c=dgXYrromBzV3rJmNoGHLCiydcWzoEWO2M91WKU2vGkk=",
    },
    {
      title: "Strażacy z Giżycka posadzili 200 drzew wzdłuż drogi wojewódzkiej",
      excerpt: "Akcja przy wsparciu nadleśnictwa. W planach kolejne 500 sadzonek do jesieni.",
      author: "OSP Giżycko",
      shares: 198,
      image: "https://media.istockphoto.com/id/821308942/pl/zdjęcie/ciągnik-rolniczy-sprzęt-do-zbierania-zbóż-w-terenie-sektor-rolny.jpg?s=1024x1024&w=is&k=20&c=Fgo0lpxiUBnv-1kIdiC13diaLuiwOPkWIsY44JFfvwI=",
    },
  ],
  ziemia: [
    {
      title: "Zostawili Warszawę dla Mazur. „Pracuję zdalnie, dzieci mają jezioro za oknem\"",
      excerpt: "Historia rodziny Nowaków, która kupiła działkę pod Mrągowem i nie żałuje.",
      author: "Redakcja",
      shares: 276,
      image: "https://media.istockphoto.com/id/1406205248/pl/zdjęcie/piękny-dom-letni-nad-jeziorem-w-letni-dzień.jpg?s=1024x1024&w=is&k=20&c=7xZ8kM3XqQ2vLqW5nRqF1Y6gH8jK9mN0oP1qR2sT3u=",
    },
    {
      title: "Gmina Ostróda: ulgi podatkowe dla firm inwestujących w strefie ekonomicznej",
      excerpt: "Nowy program wsparcia dla przedsiębiorców — sprawdzamy warunki i terminy.",
      author: "Redakcja",
      shares: 89,
      image: "https://media.istockphoto.com/id/1183860299/pl/zdjęcie/biurowiec-nowoczesny-budynek.jpg?s=1024x1024&w=is&k=20&c=1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u=",
    },
  ],
  natura: [
    {
      title: "Szlak kajakowy przez 5 jezior — przewodnik od lokalnego sternika",
      excerpt: "Trasa, którą pokonasz w weekend. Miejsca na nocleg i ognisko od mieszkańców.",
      author: "Piotr Wiśniewski",
      shares: 421,
      image: "https://media.istockphoto.com/id/1152566367/pl/zdjęcie/kajak-na-spokojnym-jeziorze-w-lesie.jpg?s=1024x1024&w=is&k=20&c=2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v=",
    },
    {
      title: "Kalendarz wydarzeń: lipiec i sierpień na Warmii i Mazurach",
      excerpt: "Festyny, rajdy rowerowe, targi produktu lokalnego — wszystko w jednym miejscu.",
      author: "Redakcja",
      shares: 156,
      image: "https://media.istockphoto.com/id/1254156955/pl/zdjęcie/ludzie-na-festiwalu-na-otwartym-powietrzu.jpg?s=1024x1024&w=is&k=20&c=3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w=",
    },
  ],
  rodzina: [
    {
      title: "Weekend z folklorem - przegląd zespołów ludowych w Olsztynie",
      excerpt: "Tradycyjne tańce, muzyka i rękodzieło - program na cały weekend.",
      author: "Redakcja",
      shares: 189,
      image: "https://media.istockphoto.com/id/1254156955/pl/zdjęcie/ludzie-na-festiwalu-na-otwartym-powietrzu.jpg?s=1024x1024&w=is&k=20&c=3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w=",
    },
    {
      title: "Nowe muzeum w Fromborku - interaktywna wystawa o Mikołaju Koperniku",
      excerpt: "Multimedialna ekspozycja otwarta codziennie od 10 do 18.",
      author: "Redakcja",
      shares: 112,
      image: "https://media.istockphoto.com/id/1322277517/pl/zdjęcie/widok-z-bliska-na-dłonie-dziecka-dotykającego-interaktywnego-ekranu-w-muzeum-nauki.jpg?s=1024x1024&w=is&k=20&c=4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x=",
    },
  ],
  techno: [
    {
      title: "Nowa strefa ekonomiczna w Olsztynie - 500 miejsc pracy",
      excerpt: "Inwestycja za 200 mln zł. Kto i kiedy może składać wnioski o działki.",
      author: "Redakcja",
      shares: 215,
      image: "https://media.istockphoto.com/id/1183860299/pl/zdjęcie/biurowiec-nowoczesny-budynek.jpg?s=1024x1024&w=is&k=20&c=1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u=",
    },
    {
      title: "Remont drogi wojewódzkiej nr 527 - harmonogram i objazdy",
      excerpt: "Prace potrwają do września 2026. Sprawdzamy szczegóły inwestycji.",
      author: "Redakcja",
      shares: 98,
      image: "https://media.istockphoto.com/id/1285301614/pl/zdjęcie/budowa-drogi-z-robotnikami-budowlanymi.jpg?s=1024x1024&w=is&k=20&c=2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v=",
    },
  ],
};

const HERO_POST_CONTENT = `Remondis odebrał sprzęt, gmina dołożyła transport, a sołectwo kupiło za to nowy sprzęt ratowniczy dla miejscowej OSP. To już 16. edycja konkursu Eko Sołectwa — i kolejny dowód, że małe działania dają wielkie efekty. W artykule przyglądamy się organizacji zbiórki, pracy wolontariuszy i planom na przyszłość.`;

const HERO_POST = {
  ...ARTICLES.eko[0],
  content: HERO_POST_CONTENT,
  image: "https://media.istockphoto.com/id/1357827501/pl/zdjęcie/zróżnicowana-grupa-wolontariuszy-sprzątająca-las-z-odpadów-koncepcja-pracy-społecznej.jpg?s=1024x1024&w=is&k=20&c=zd6rZ8mrjU-Q4FYQHCIFX9SgKsA9EbphuYHtN3X1oC8=",
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

export default function PulsRegionuMockup(props) {
  const { onNavigate, activePage, activeFilarId, setActiveFilarId, TICKER } = props;
  const [articleView, setArticleView] = useState(null);
  
  const activeFilar = FILARY_DATA.find((f) => f.id === activeFilarId) || FILARY_DATA[0];

  const colorToRgba = (hex, alpha) => {
    const [r, g, b] = hex.slice(1).match(/.{2}/g).map((value) => parseInt(value, 16));
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const filarGradient = (hex) =>
    `linear-gradient(180deg, ${colorToRgba(hex, 0.18)} 0%, ${colorToRgba(hex, 0.08)} 100%)`;

  const handleOpenArticle = (index) => {
    if (activeFilarId === "eko") {
      setArticleView(EKO_POSTS[index] || HERO_POST);
    }
  };

  const handleBackToSection = () => setArticleView(null);

  // Render archiwum page
  if (activePage === 'archiwum') {
    return (
      <Layout {...props}>
        <Archiwum />
      </Layout>
    );
  }

  return (
    <Layout {...props}>
      {/* HERO SECTION */}
      {!articleView && <HeroSection heroPost={HERO_POST} />}

      {/* ARTICLE VIEW */}
      {articleView && (
        <section className="pr-section">
          <div className="pr-section-head">
            <div className="pr-section-title">
              <div
                className="pr-ficon"
                style={{ background: filarGradient(activeFilar.color), width: 34, height: 34, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                {activeFilar.icon && <activeFilar.icon size={17} color="#fff" />}
              </div>
              <div>
                <h2 className="pr-serif">{articleView.title}</h2>
                <p className="pr-section-desc">{articleView.excerpt}</p>
              </div>
            </div>
            <div className="pr-more" onClick={handleBackToSection} style={{ color: activeFilar.color, cursor: 'pointer' }}>
              Wróć do sekcji <ArrowUpRight size={14} />
            </div>
          </div>

          <div className="pr-card-img" style={{ backgroundImage: `url('${articleView.image}')`, marginBottom: 24 }} />

          <div style={{ 
            maxWidth: 860, 
            lineHeight: 1.8, 
            color: "var(--ink-soft)",
            textAlign: 'justify',
            hyphens: 'auto',
            wordBreak: 'break-word'
          }}>
            <p>{articleView.content}</p>
          </div>
        </section>
      )}

      {/* PILLAR GRID */}
      <PillarGrid
        filary={FILARY_DATA}
        active={activeFilarId}
        setActive={setActiveFilarId}
        filarGradient={filarGradient}
      />

      {/* ACTIVE PILLAR CONTENT */}
      <ActivePillarContent
        activeFilar={activeFilar}
        articles={ARTICLES}
        handleOpenArticle={handleOpenArticle}
      />

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

      
    </Layout>
  );
}
