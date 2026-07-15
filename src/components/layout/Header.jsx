export default function Header({ onLogoClick }) {
  return (
    <header className="pr-masthead" onClick={onLogoClick} style={{ cursor: 'pointer' }}>
      <img src="/puls-regionu-winieta.svg" alt="Puls Regionu" style={{ width: '100%', height: 'auto', display: 'block' }} />
    </header>
  );
}
