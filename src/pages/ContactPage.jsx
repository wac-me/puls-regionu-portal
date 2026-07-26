import Layout from "../components/layout/Layout";

export default function ContactPage(props) {
  return (
    <Layout {...props}>
      <section className="pr-section">
        <div className="pr-section-head">
          <div className="pr-section-title">
            <h2 className="pr-serif">Kontakt</h2>
            <p className="pr-section-desc">
              REDAKCJA - KONTAKT
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
                <strong>email:</strong> interprim@tlen.pl
              </div>
            </div>
          </div>

          <div className="pr-contact-cta">
            <h3 className="pr-contact-cta-title">ZAPRASZAMY DO WSPÓŁPRACY!</h3>
          </div>
        </div>
      </section>
    </Layout>
  );
}
