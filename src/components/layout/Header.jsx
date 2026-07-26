export default function Header({ onLogoClick }) {
  return (
    <header className="pr-masthead pr-masthead-compact" onClick={onLogoClick} style={{ cursor: 'pointer' }}>
      <img src="/puls-regionu-winieta.png" alt="Puls Regionu" className="pr-header-winieta" />
    </header>
  );
}
