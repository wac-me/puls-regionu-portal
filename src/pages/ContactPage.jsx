import Layout from "../components/layout/Layout";

export default function ContactPage(props) {
  return (
    <Layout {...props}>
      <section className="pr-section">
        <div className="pr-section-head">
          <div className="pr-section-title">
            <div className="pr-section-title">
              <h2 className="pr-serif" style={{fontSize: '2rem'}}>
                KONTAKT <span style={{color: '#007BFF', margin: '0 0.3rem'}}>|</span> <span style={{fontSize: '1rem', fontWeight: 300, color: '#555'}}>Puls Regionu - Magazyn Samorządów Województwa Warmińsko-Mazurskiego</span>
              </h2>
            </div>
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

          <div className="pr-contact-card">
            <h3 className="pr-contact-name">PULS REGIONU</h3>
            <div className="pr-contact-details">
              <div className="pr-contact-item">
                MAGAZYN SAMORZĄDÓW WOJEWÓDZTWA WARMIŃSKO-MAZURSKIEGO
              </div>
              <div className="pr-contact-item">
                wydawany od 1999 r.
              </div>
              <div className="pr-contact-item">
                <strong>tel.:</strong> 89 535 48 90, 89 535 48 92
              </div>
              <div className="pr-contact-item">
                <strong>www:</strong> <a href="https://www.warmiamazury.tv/pulsregionu" target="_blank" rel="noopener noreferrer">warmiamazury.tv/pulsregionu</a>
              </div>
            </div>
          </div>

          <div className="pr-contact-card">
            <h3 className="pr-contact-name">WYDAWCA</h3>
            <div className="pr-contact-details">
              <div className="pr-contact-item">
                Fundacja "WARMIA I MAZURY W EUROPIE"
              </div>
              <div className="pr-contact-item">
                wydawca gazety PULS REGIONU od 27 lat
              </div>
              <div className="pr-contact-item">
                <strong>adres:</strong> ul. Św. Wojciecha 2/23, 10-038 Olsztyn
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
