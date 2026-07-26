import Layout from "../components/layout/Layout";
import { Download, Phone, Mail } from "lucide-react";

export default function ContestPage(props) {
  return (
    <Layout {...props}>
      <section className="pr-section">
        <div className="pr-contest-header">
          <h1 className="pr-serif pr-contest-title">XVI KONKURS „EKO–SOŁECTWO”</h1>
          <p className="pr-contest-slogan">
            PRZEKAŻEMY <span className="pr-contest-amount">500 ZŁ</span> ZA KAŻDĄ PEŁNĄ TONĘ ELEKTROŚMIECI!
          </p>
        </div>

        <div className="pr-contest-grid">
          <div className="pr-contest-card">
            <h2 className="pr-contest-card-title">DLA WYGRANYCH NAGRODY</h2>
            <div className="pr-contest-prizes">
              <div className="pr-prize-item">
                <span className="pr-prize-place">I miejsce</span>
                <span className="pr-prize-value">1 500 zł</span>
              </div>
              <div className="pr-prize-item">
                <span className="pr-prize-place">II miejsce</span>
                <span className="pr-prize-value">1 000 zł</span>
              </div>
              <div className="pr-prize-item">
                <span className="pr-prize-place">III miejsce</span>
                <span className="pr-prize-value">500 zł</span>
              </div>
            </div>
            <p className="pr-contest-note">MINIMALNA WAGA ODPADÓW = 1000 KG.</p>
          </div>

          <div className="pr-contest-card">
            <h2 className="pr-contest-card-title">ZBIERAMY</h2>
            <p className="pr-contest-items">
              lodówki, zamrażarki, roboty kuchenne, pralki, kuchenki, czajniki, tostery, zmywarki, suszarki, żelazka, odkurzacze, telewizory, radia, komputery, laptopy, drukarki, monitory, telefony, maszyny do szycia, golarki, zabawki elektryczne, baterie, silniki elektryczne, dojarki, akumulatory itd.
            </p>
          </div>
        </div>

        <div className="pr-contest-deadline">
          <h2 className="pr-contest-deadline-title">UDZIAŁ W KONKURSIE</h2>
          <p className="pr-contest-deadline-text">
            NALEŻY ZGŁOSIĆ DO DNIA <strong>30.IX.2026 R.</strong> LISTEM LUB MAILEM Z DANYMI SOŁTYSA, PEŁNYM ADRESEM, TELEFONEM KONTAKTOWYM ORAZ MIEJSCEM ZBIÓRKI.
          </p>
        </div>

        <div className="pr-contest-contact" style={{marginBottom: '60px'}}>
          <h2 className="pr-contest-contact-title">KONTAKT</h2>
          <div className="pr-contact-grid">
            <div className="pr-contact-person">
              <div className="pr-contact-item">
                <Phone size={16} />
                <span>kom. 508 163 198</span>
              </div>
              <div className="pr-contact-item">
                <Phone size={16} />
                <span>tel. 89 535 48 92</span>
              </div>
              <div className="pr-contact-item">
                <Mail size={16} />
                <span>interprim@tlen.pl</span>
              </div>
            </div>
            <div className="pr-contact-person">
              <div className="pr-contact-item">
                <Phone size={16} />
                <span>kom. 504 748 929</span>
              </div>
              <div className="pr-contact-item">
                <Phone size={16} />
                <span>tel. 89 535 48 90</span>
              </div>
              <div className="pr-contact-item">
                <Mail size={16} />
                <span>jolanta.grochowska@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{textAlign: 'center', margin: '40px 0 24px 0'}}>
          <h3 className="pr-serif" style={{color: '#7BC142', fontSize: '1.8rem'}}>Pobierz Plakaty na Konkurs!</h3>
        </div>
        <div className="pr-contest-posters" style={{marginTop: '0'}}>
          <a
            href="/plakat-eko-solectwo.pdf"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="pr-contest-poster-link"
          >
            <Download size={20} />
            Konkurs Eko Sołectw
          </a>
          <a
            href="/Plakat_XVI_Konkus.pdf"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="pr-contest-poster-link"
          >
            <Download size={20} />
            Plakat XVI Konkurs
          </a>
        </div>
      </section>
    </Layout>
  );
}
