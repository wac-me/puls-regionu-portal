import { useEffect } from "react";
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
import MobileNewsPanel from "./components/home/MobileNewsPanel";
import ArticleImage from "./components/common/ArticleImage";
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
      id: "eko-bartoszyce-elektroodpady",
      title: "Sołtys z Bartoszyc zebrał 8 ton elektroodpadów w jeden weekend",
      excerpt: "Remondis odebrał sprzęt, gmina dołożyła transport. Wieś kupiła za to nowy sprzęt dla OSP.",
      content: `Remondis odebrał sprzęt, gmina dołożyła transport, a sołectwo przeznaczyło uzyskane środki na nowy sprzęt ratowniczy dla miejscowej OSP. Zbiórka pokazała, że wspólna organizacja mieszkańców może przynieść jednocześnie korzyści środowiskowe i realne wsparcie lokalnej społeczności.\n\nW materiale przyglądamy się organizacji zbiórki elektroodpadów, zaangażowaniu mieszkańców oraz temu, jak podobne działania mogą zostać przeprowadzone w innych miejscowościach regionu.`,
      author: "Jan Kowalski, sołtys",
      shares: 340,
      image: "https://media.istockphoto.com/id/1357827501/pl/zdjęcie/zróżnicowana-grupa-wolontariuszy-sprzątająca-las-z-odpadów-koncepcja-pracy-społecznej.jpg?s=1024x1024&w=is&k=20&c=zd6rZ8mrjU-Q4FYQHCIFX9SgKsA9EbphuYHtN3X1oC8=",
    },
    {
      id: "eko-ranking-2026",
      title: "Ranking Eko Sołectw 2026 — kto zebrał najwięcej, kto wydał najlepiej",
      excerpt: "16. edycja konkursu. Sprawdzamy, które sołectwa zamieniły odpady w realny sprzęt dla mieszkańców.",
      content: `W rankingu Eko Sołectw 2026 skupiamy się na sprawdzonych praktykach: sposobach promowania selektywnej zbiórki, organizacji lokalnych akcji oraz wykorzystaniu ich efektów z myślą o mieszkańcach. Zestawienie pokazuje różne podejścia uczestników szesnastej edycji konkursu.\n\nMateriał jest krótkim przeglądem działań wyróżniających się sołectw i punktem wyjścia do poznania ich doświadczeń oraz planów na kolejne lokalne inicjatywy.`,
      author: "Redakcja",
      shares: 512,
      image: "https://media.istockphoto.com/id/2256716039/pl/zdjęcie/koncepcja-ekologii-drewnianych-wiatraków-zielona-energia-natura.jpg?s=1024x1024&w=is&k=20&c=dgXYrromBzV3rJmNoGHLCiydcWzoEWO2M91WKU2vGkk=",
    },
    {
      id: "eko-strazacy-gizycko",
      title: "Strażacy z Giżycka posadzili 200 drzew wzdłuż drogi wojewódzkiej",
      excerpt: "Akcja przy wsparciu nadleśnictwa. W planach kolejne 500 sadzonek do jesieni.",
      content: `Strażacy z Giżycka włączyli się w akcję sadzenia 200 drzew wzdłuż drogi wojewódzkiej. Działanie przeprowadzono przy wsparciu nadleśnictwa, a inicjatywa ma być kontynuowana poprzez posadzenie kolejnych sadzonek.\n\nW artykule opisujemy założenia akcji, rolę lokalnych partnerów i znaczenie wspólnych działań na rzecz zieleni oraz otoczenia dróg w regionie.`,
      author: "OSP Giżycko",
      shares: 198,
      image: "https://media.istockphoto.com/id/821308942/pl/zdjęcie/ciągnik-rolniczy-sprzęt-do-zbierania-zbóż-w-terenie-sektor-rolny.jpg?s=1024x1024&w=is&k=20&c=Fgo0lpxiUBnv-1kIdiC13diaLuiwOPkWIsY44JFfvwI=",
    },
  ],
  ziemia: [
    {
      id: "ziemia-mazury-praca-zdalna",
      title: "Zostawili Warszawę dla Mazur. „Pracuję zdalnie, dzieci mają jezioro za oknem”",
      excerpt: "Historia rodziny Nowaków, która kupiła działkę pod Mrągowem i nie żałuje.",
      content: `Rodzina Nowaków zdecydowała się zamienić życie w Warszawie na codzienność w pobliżu Mrągowa. Możliwość pracy zdalnej ułatwiła przeprowadzkę, a bliskość jezior i spokojniejsze otoczenie stały się ważną częścią nowego sposobu życia.\n\nMateriał przedstawia motywacje stojące za tą decyzją oraz najważniejsze kwestie, które warto rozważyć przed przeprowadzką z dużego miasta na Warmię i Mazury.`,
      author: "Redakcja",
      shares: 276,
      image: "",
    },
    {
      id: "ziemia-ulgi-ostroda",
      title: "Gmina Ostróda: ulgi podatkowe dla firm inwestujących w strefie ekonomicznej",
      excerpt: "Nowy program wsparcia dla przedsiębiorców — sprawdzamy warunki i terminy.",
      content: `Gmina Ostróda przygotowała program wsparcia skierowany do firm planujących inwestycje w strefie ekonomicznej. Jednym z jego elementów są ulgi podatkowe, które mają ułatwić przedsiębiorcom rozpoczęcie lub rozwinięcie działalności.\n\nW zajawce porządkujemy najważniejsze informacje o założeniach programu, warunkach udziału oraz terminach, na które powinni zwrócić uwagę zainteresowani przedsiębiorcy.`,
      author: "Redakcja",
      shares: 89,
      image: "",
    },
  ],
  natura: [
    {
      id: "natura-szlak-kajakowy",
      title: "Szlak kajakowy przez 5 jezior — przewodnik od lokalnego sternika",
      excerpt: "Trasa, którą pokonasz w weekend. Miejsca na nocleg i ognisko od mieszkańców.",
      content: `Trasa przez pięć mazurskich jezior została przedstawiona jako propozycja weekendowej wyprawy dla osób, które chcą połączyć aktywny wypoczynek ze spokojnym poznawaniem regionu. Materiał wskazuje najważniejsze etapy szlaku oraz możliwości odpoczynku i noclegu.\n\nW artykule zbieramy podstawowe informacje o przygotowaniu do spływu, planowaniu trasy i bezpiecznym korzystaniu z mazurskich akwenów.`,
      author: "Piotr Wiśniewski",
      shares: 421,
      image: "",
    },
    {
      id: "natura-kalendarz-wydarzen",
      title: "Kalendarz wydarzeń: lipiec i sierpień na Warmii i Mazurach",
      excerpt: "Festyny, rajdy rowerowe, targi produktu lokalnego — wszystko w jednym miejscu.",
      content: `Lipiec i sierpień to w regionie czas festynów, rajdów rowerowych i spotkań poświęconych lokalnym produktom. Zestawienie porządkuje różne propozycje spędzania wolnego czasu na Warmii i Mazurach.\n\nMateriał ma pomóc mieszkańcom i turystom w zaplanowaniu letnich weekendów oraz wyborze wydarzeń dopasowanych do różnych zainteresowań.`,
      author: "Redakcja",
      shares: 156,
      image: "",
    },
  ],
  rodzina: [
    {
      id: "atrakcje-folklor-olsztyn",
      title: "Weekend z folklorem - przegląd zespołów ludowych w Olsztynie",
      excerpt: "Tradycyjne tańce, muzyka i rękodzieło - program na cały weekend.",
      content: `Olsztyński weekend z folklorem ma połączyć występy zespołów ludowych, tradycyjną muzykę, taniec i prezentacje rękodzieła. Program został pomyślany jako propozycja dla mieszkańców regionu oraz osób odwiedzających miasto.\n\nW materiale przedstawiamy charakter wydarzenia i podpowiadamy, na jakie elementy programu warto zwrócić uwagę podczas planowania udziału w przeglądzie.`,
      author: "Redakcja",
      shares: 189,
      image: "",
    },
    {
      id: "atrakcje-muzeum-frombork",
      title: "Nowe muzeum w Fromborku - interaktywna wystawa o Mikołaju Koperniku",
      excerpt: "Multimedialna ekspozycja otwarta codziennie od 10 do 18.",
      content: `Nowa wystawa we Fromborku wykorzystuje multimedia i elementy interaktywne do opowiedzenia o Mikołaju Koperniku. Ekspozycja została przygotowana z myślą o osobach w różnym wieku i ma zachęcać do samodzielnego odkrywania prezentowanych zagadnień.\n\nArtykuł przybliża charakter wystawy, jej edukacyjne założenia oraz podstawowe informacje potrzebne przed zaplanowaniem wizyty.`,
      author: "Redakcja",
      shares: 112,
      image: "",
    },
  ],
  techno: [
    {
      id: "inwestycje-strefa-olsztyn",
      title: "Nowa strefa ekonomiczna w Olsztynie - 500 miejsc pracy",
      excerpt: "Inwestycja za 200 mln zł. Kto i kiedy może składać wnioski o działki.",
      content: `Planowana strefa ekonomiczna w Olsztynie ma stworzyć przestrzeń dla nowych inwestycji i miejsc pracy. Projekt zakłada nakłady w wysokości 200 mln zł oraz udostępnienie działek zainteresowanym podmiotom.\n\nW materiale zbieramy podstawowe informacje o założeniach inwestycji i kwestiach, które powinny sprawdzić firmy zainteresowane udziałem w projekcie.`,
      author: "Redakcja",
      shares: 215,
      image: "",
    },
    {
      id: "inwestycje-droga-527",
      title: "Remont drogi wojewódzkiej nr 527 - harmonogram i objazdy",
      excerpt: "Prace potrwają do września 2026. Sprawdzamy szczegóły inwestycji.",
      content: `Remont drogi wojewódzkiej nr 527 ma potrwać do września 2026 roku. Prowadzone prace będą wpływać na organizację ruchu, dlatego kierowcy powinni zwracać uwagę na aktualne oznakowanie i informacje o objazdach.\n\nW artykule porządkujemy najważniejsze informacje dotyczące harmonogramu, możliwych utrudnień i zmian istotnych dla mieszkańców oraz osób podróżujących tą trasą.`,
      author: "Redakcja",
      shares: 98,
      image: "",
    },
  ],
};

const HERO_POST = ARTICLES.eko[0];
const ARTICLE_LOOKUP = Object.fromEntries(
  Object.values(ARTICLES).flat().map((article) => [article.id, article])
);

export default function PulsRegionuMockup(props) {
  const {
    onNavigate,
    onOpenArticle,
    activePage,
    activeFilarId,
    setActiveFilarId,
    selectedArticleId,
    setSelectedArticleId,
    TICKER
  } = props;

  const articleView = ARTICLE_LOOKUP[selectedArticleId] || null;
  const activeFilar = FILARY_DATA.find((f) => f.id === activeFilarId) || FILARY_DATA[0];
  const activeHeroPost = ARTICLES[activeFilar.id]?.[0] || HERO_POST;

  const colorToRgba = (hex, alpha) => {
    const [r, g, b] = hex.slice(1).match(/.{2}/g).map((value) => parseInt(value, 16));
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const filarGradient = (hex) =>
    `linear-gradient(180deg, ${colorToRgba(hex, 0.18)} 0%, ${colorToRgba(hex, 0.08)} 100%)`;

  useEffect(() => {
    if (!articleView) return undefined;

    const frameId = requestAnimationFrame(() => {
      document.querySelector(".pr-article-view")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });

    return () => cancelAnimationFrame(frameId);
  }, [articleView]);

  const handleOpenArticle = (index) => {
    const article = ARTICLES[activeFilarId]?.[index];

    if (article) setSelectedArticleId(article.id);
  };

  const handleSelectFilar = (filarId) => {
    setSelectedArticleId(null);
    setActiveFilarId(filarId);
  };

  const handleBackToSection = () => setSelectedArticleId(null);

  // Render archiwum page
  if (activePage === 'archiwum') {
    return (
      <Layout {...props}>
        <Archiwum />
      </Layout>
    );
  }

  return (
    <Layout {...props} setActiveFilarId={handleSelectFilar}>
      {!articleView && (
        <MobileNewsPanel
          selectedArticleId={selectedArticleId}
          onOpenArticle={onOpenArticle}
          onNavigate={onNavigate}
        />
      )}

      {/* HERO SECTION */}
      {!articleView && (
        <HeroSection
          heroPost={activeHeroPost}
          activeFilar={activeFilar}
          onOpenArticle={() => handleOpenArticle(0)}
        />
      )}

      {/* ARTICLE VIEW */}
      {articleView && (
        <section className="pr-section pr-article-view">
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

          <ArticleImage
            src={articleView.image}
            className="pr-card-img pr-article-detail-image"
            loading="eager"
          />

          <div style={{ 
            maxWidth: 860, 
            lineHeight: 1.8, 
            color: "var(--ink-soft)",
            textAlign: 'justify',
            hyphens: 'auto',
            wordBreak: 'break-word',
            textJustify: 'inter-word',
            hyphenateLimitChars: '6 3 2',
            hyphenateLimitLines: 2,
            wordSpacing: '-0.2ch',
            orphans: 3,
            widows: 3
          }}>
            {articleView.content.split("\n\n").map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>
      )}

      {/* PILLAR GRID */}
      <PillarGrid
        filary={FILARY_DATA}
        active={activeFilarId}
        setActive={handleSelectFilar}
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
