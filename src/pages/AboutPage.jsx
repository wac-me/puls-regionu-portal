export default function AboutPage({ onNavigate }) {
  return (
    <div className="pr-section">
      <h2 className="pr-serif">O nas</h2>
      <p>Puls Regionu to portal tworzony przez ludzi z pasją do Warmii i Mazur.</p>
      <button onClick={() => onNavigate('home')}>Wróć na stronę główną</button>
    </div>
  );
}
