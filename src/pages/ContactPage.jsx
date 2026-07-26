import Layout from "../components/layout/Layout";

export default function ContactPage(props) {
  return (
    <Layout {...props}>
      <section className="pr-section">
        <div className="pr-section-head">
          <div className="pr-section-title">
            <h2 className="pr-serif">Kontakt</h2>
            <p className="pr-section-desc">
              REDAKCJA - KONTAKT<br />
              PULS REGIONU MAGAZYN SAMORZĄDÓW WOJEWÓDZTWA WARMIŃSKO-MAZURSKIEGO<br />
              wydawany od 1999 r.<br />
              Fundacja "WARMIA I MAZURY W EUROPIE" JEST WYDAWCĄ gazety PULS REGIONU od 27 lat
            </p>
          </div>
        </div>

        <div className="pr-contact-content">
          <div className="pr-contact-card">
            <h3 className="pr-contact-name">DYR. SYLWIA SZKAMRUK</h3>
            <div className="pr-contact-details">
              <div className="pr-contact-item">
                <strong>tel. kom.:</strong> 508 163 198
              </div>
              <div className="pr-contact-item">
                <strong>tel.:</strong> 89 535 48 90, 89 535 48 92
              </div>
              <div className="pr-contact-item">
                <strong>email:</strong> interprim@tlen.pl
              </div>
            </div>
          </div>

          <div className="pr-contact-card">
            <h3 className="pr-contact-name">JOLANTA GROCHOWSKA</h3>
            <div className="pr-contact-details">
              <div className="pr-contact-item">
                <strong>tel. kom.:</strong> 502 153 565 i 504 748 929
              </div>
              <div className="pr-contact-item">
                <strong>email:</strong> interprim2021@gmail.com
              </div>
            </div>
          </div>

          <div className="pr-contact-cta">
            <h3 className="pr-contact-cta-title">ZAPRASZAMY DO WSPÓŁPRACY!</h3>
            <div className="pr-contact-item">
              <strong>Strona internetowa:</strong> <a href="https://www.warmiamazury.tv/pulsregionu" target="_blank" rel="noopener noreferrer">www.warmiamazury.tv/pulsregionu</a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
