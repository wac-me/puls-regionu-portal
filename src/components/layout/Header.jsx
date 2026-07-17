export default function Header({ onLogoClick, activePage }) {
  return (
    <header className={`pr-masthead ${activePage !== 'home' ? 'pr-masthead-compact' : ''}`} onClick={onLogoClick} style={{ cursor: 'pointer' }}>
      <img src="/puls-regionu-winieta.svg" alt="Puls Regionu" className="pr-header-winieta" />
    </header>
  );
}
