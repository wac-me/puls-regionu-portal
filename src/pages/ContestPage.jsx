import Layout from "../components/layout/Layout";

export default function ContestPage(props) {
  return (
    <Layout {...props}>
      <div className="pr-section">
        <h2 className="pr-serif">Konkurs Eko Sołectwa</h2>
        <p>Informacje o naszym flagowym konkursie.</p>
        <button onClick={() => props.onNavigate('home')}>Wróć na stronę główną</button>
      </div>
    </Layout>
  );
}
