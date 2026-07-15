import Layout from "../components/layout/Layout";

export default function ContactPage(props) {
  return (
    <Layout {...props}>
      <div className="pr-section">
        <h2 className="pr-serif">Kontakt</h2>
        <p>Masz temat dla sołtysa? Napisz do nas!</p>
        <button onClick={() => props.onNavigate('home')}>Wróć na stronę główną</button>
      </div>
    </Layout>
  );
}
