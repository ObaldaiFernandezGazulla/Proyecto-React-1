import "./Home.css";
import destinations from "../../data/destinations";
import DestinationCard from "../../components/destination-card/DestinationCard";

function Home() {
  return (
    <div className="home">

      <section className="hero">
        <div className="hero-overlay">
          <h1>Bienvenido a Churrería Oba</h1>
          <p>Donde cada churro está hecho con cariño y tradición.</p>
          <a href="#productos" className="hero-button">Ver Productos</a>
        </div>
      </section>

      <section id="productos" className="productos-section">
        <h2>Nuestros Productos</h2>
        <p className="productos-desc">Hechos a mano cada mañana con ingredientes de calidad.</p>

        <div className="productos-grid">
          {destinations.map((product) => (
            <DestinationCard
              key={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>
      </section>

    </div>
  );
}

export default Home;