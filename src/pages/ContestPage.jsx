export default function ContestPage({ onNavigate }) {
  return (
    <div className="pr-section">
      <h2 className="pr-serif">Konkurs Eko Sołectwa</h2>
      <p>Informacje o naszym flagowym konkursie.</p>
      <button onClick={() => onNavigate('home')}>Wróć na stronę główną</button>
    </div>
  );
}
