import Layout from "../components/layout/Layout";

export default function AboutPage(props) {
  return (
    <Layout {...props}>
      <div className="pr-section">
        <h2 className="pr-serif">O nas</h2>
        <p>Puls Regionu to portal tworzony przez ludzi z pasją do Warmii i Mazur.</p>
        <button onClick={() => props.onNavigate('home')}>Wróć na stronę główną</button>
      </div>
    </Layout>
  );
}
