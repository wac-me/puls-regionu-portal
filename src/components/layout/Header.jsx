export default function Header({ onLogoClick }) {
  return (
    <header className="pr-masthead">
      <div className="pr-logo-wrap" onClick={onLogoClick} style={{ cursor: 'pointer' }}>
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
    </header>
  );
}
