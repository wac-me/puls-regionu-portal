import Layout from "../components/layout/Layout";

export default function ArchivePage(props) {
  const archives = [
    { id: 1, title: "Wydanie Czerwiec 2026", file: "puls_2026_06.pdf" },
    { id: 2, title: "Wydanie Maj 2026", file: "puls_2026_05.pdf" },
  ];

  return (
    <Layout {...props}>
      <div className="pr-section">
        <h2 className="pr-serif">Archiwum</h2>
        <p>Pobierz archiwalne wydania w formacie PDF:</p>
        <ul>
          {archives.map((a) => (
            <li key={a.id}>
              {a.title} - <a href={`/files/${a.file}`} download>Pobierz PDF</a>
            </li>
          ))}
        </ul>
        <button onClick={() => props.onNavigate('home')}>Wróć na stronę główną</button>
      </div>
    </Layout>
  );
}
