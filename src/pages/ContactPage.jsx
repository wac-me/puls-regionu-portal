export default function ContactPage({ onNavigate }) {
  return (
    <div className="pr-section">
      <h2 className="pr-serif">Kontakt</h2>
      <p>Masz temat dla sołtysa? Napisz do nas!</p>
      <button onClick={() => onNavigate('home')}>Wróć na stronę główną</button>
    </div>
  );
}
