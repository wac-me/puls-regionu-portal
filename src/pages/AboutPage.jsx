import Layout from "../components/layout/Layout";
import { Download } from "lucide-react";

export default function AboutPage(props) {
  return (
    <Layout {...props}>
      <section className="pr-section">
        <div className="pr-section-head">
          <div className="pr-section-title">
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <div>
                <span className="pr-serif" style={{fontSize: '2rem'}}>O NAS</span>
                <span style={{color: '#007BFF', margin: '0 0.3rem', fontSize: '2rem'}}>|</span>
                <span className="pr-serif" style={{fontSize: '1rem', color: '#555', textAlign: 'left'}}>Puls Regionu - Magazyn Samorządów</span>
              </div>
              <div style={{marginLeft: 'calc(2rem + 0.3rem)'}}>
                <span className="pr-serif" style={{fontSize: '1rem', color: '#555', textAlign: 'left'}}>Województwa Warmińsko-Mazurskiego</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pr-about-content">
          <h3 className="pr-about-heading">Nasze atuty:</h3>
          <ul className="pr-about-list">
            <li>Puls Regionu Magazyn Samorządów Województwa Warmińsko-Mazurskiego wydawany jest od 1999 roku., mieszkańcy otrzymują magazyn za darmo poprzez listonoszy</li>
            <li>Ugruntowany tytuł, ukazujący się na terenie całego województwa już 27 lat!</li>
            <li>Prowadzimy Konkurs ekologiczny związany z recyklingiem na Warmii i Mazurach od 16 lat!</li>
            <li>6.000 egz. nakładu</li>
            <li>Kolorowa szata graficzna i wygodny format A4</li>
            <li>Jedyny tytuł z prawem używania HERBU Województwa Warmińsko-Mazurskiego</li>
            <li>Pewny kolportaż całego nakładu poprzez POCZTĘ POLSKĄ (listonosze) do wszystkich samorządów: Urzędów Miast, Gmin i Starostw - wszystkie na terenie całego województwa oraz do wszystkich oddziałów Urzędu Marszałkowskiego i Wojewódzkiego (do urzędników)</li>
            <li>Jako jedyna gazeta PULS REGIONU dociera do wszystkich sołectw z woj. warmińsko-mazurskiego - to ponad 2.320 sołtysów naszego województwa, do wszystkich Jednostek Ochotniczych Straży Pożarnych (515 jednostek) oraz Kół Gospodyń Wiejskich na Warmii i Mazurach (ponad 700 KGW).</li>
            <li>Pozostały nakład dociera do najważniejszych instytucji i firm w Olsztynie tj. Uniwersytet Warmińsko-Mazurski, Woj. Fundusz Ochrony Środowiska i Gospodarki Wodnej, KRUS, ARiMR, Wojewódzki Ośrodek Doradztwa Rolniczego, WORD, Warmińsko-Mazurska Izba Rolnicza, Policja, Straż Pożarna, docieramy do wszystkich Nadleśnictw, do PZŁ - Zarząd okręgowy, Lasy Państwowe, Radio Olsztyn, PCPR, Urząd Pracy, itd. - z wszystkimi tymi instytucjami współpracujemy od lat.</li>
            <li>Poruszamy społeczne i gospodarcze sprawy Regionu.</li>
            <li>Promujemy działania polepszające życie mieszkańców</li>
            <li>Nasi czytelnicy to głównie osoby decydujące o rozwoju społecznym i gospodarczym naszego województwa</li>
          </ul>

          <div className="pr-about-eko">
            <h3 className="pr-about-heading">Konkurs EKO-SOŁECTWO</h3>
            <p>
              Redakcja Pulsu Regionu Magazynu Samorządów Województwa Warmińsko-Mazurskiego XVI coroczną akcję związaną z ochroną środowiska pod nazwą EKO-SOŁECTWO, polegającą na zbiórce elektrośmieci z naszego województwa (pralki, lodówki, odkurzacze, telewizory itd.). Zbiórka trwa do końca 2026 r. Do tej pory sołectwa i OSP zebrały ponad 2 miliony kg elektrośmieci!
            </p>
          </div>

          <div className="pr-about-offer">
            <a
              href="/PULS_REGIONU_OFERTA.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="pr-about-offer-link"
            >
              <Download size={20} />
              Pobierz ofertę reklamową
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
