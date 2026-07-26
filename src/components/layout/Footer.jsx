export default function Footer({ filary, onNavigate }) {
  return (
    <footer className="pr-footer">
      <div className="pr-footer-grid">
        <div>
          <div className="pr-serif" style={{ fontSize: 22, color: "#fff", marginBottom: 10 }}>
            Puls Regionu
          </div>
          <p style={{ maxWidth: "32ch" }}>
            Wydawane przez Fundację Warmia i Mazury w Europie. Od 27 lat piszemy o
            ludziach, którzy realnie zmieniają swój region.
          </p>
        </div>
        <div>
          <h4>Filary portalu</h4>
          {filary.map((f) => (
            <a key={f.id} style={{ display: 'block', marginBottom: '8px', cursor: 'pointer' }} onClick={() => onNavigate('home')}>{f.label}</a>
          ))}
        </div>
        <div>
          <h4>Fundacja</h4>
          <a style={{ display: 'block', marginBottom: '8px', cursor: 'pointer' }} onClick={() => onNavigate('o-nas')}>O nas</a>
          <a style={{ display: 'block', marginBottom: '8px', cursor: 'pointer' }} onClick={() => onNavigate('konkurs')}>Konkurs Eko Sołectwa</a>
          <a style={{ display: 'block', marginBottom: '8px', cursor: 'pointer' }} onClick={() => onNavigate('home')}>Partnerzy i granty</a>
          <a style={{ display: 'block', marginBottom: '8px', cursor: 'pointer' }} onClick={() => onNavigate('kontakt')}>Kontakt dla redakcji</a>
        </div>
        <div>
          <h4>Dla partnerów</h4>
          <a style={{ display: 'block', marginBottom: '8px', cursor: 'pointer' }} onClick={() => onNavigate('home')}>Współpraca z gminami</a>
          <a style={{ display: 'block', marginBottom: '8px', cursor: 'pointer' }} onClick={() => onNavigate('home')}>Sponsoring sekcji</a>
          <a style={{ display: 'block', marginBottom: '8px', cursor: 'pointer' }} onClick={() => onNavigate('home')}>Reklama regionalna</a>
        </div>
      </div>
      <div className="pr-footer-bottom">
        <span>© 2026 Puls Regionu — Fundacja Warmia i Mazury w Europie</span>
        <span>Partner strategiczny konkursu: Remondis</span>
      </div>
    </footer>
  );
}
