export default function Header({ onLogoClick }) {
  return (
    <header className="pr-masthead pr-masthead-compact" onClick={onLogoClick} style={{ cursor: 'pointer' }}>
      <picture className="pr-header-picture">
        <source media="(min-width: 1200px)" srcSet="/puls-regionu-winieta_920.png" />
        <img src="/puls-regionu-winieta.png" alt="Puls Regionu" className="pr-header-winieta" />
      </picture>
    </header>
  );
}
