import "./Menu.css";

function Menu() {
  const productos = [
    { nombre: "Churros Tradicionales", precio: "3.50€", desc: "Ración de 6 churros artesanos hechos al momento." },
    { nombre: "Chocolate a la Taza", precio: "2.50€", desc: "Nuestro chocolate espeso artesanal, receta de la casa." },
    { nombre: "Porras de la Abuela", precio: "4.00€", desc: "Ración de 3 porras extra grandes y esponjosas." },
    { nombre: "Café con Leche", precio: "1.50€", desc: "Café de tueste natural con leche fresca." }
  ];

  return (
    <div className="carta">
      <section className="carta-hero">
        <h1>Nuestra Carta</h1>
        <p>Productos artesanos elaborados cada mañana con la receta de siempre.</p>
      </section>

      <section className="carta-body">
        <div className="carta-info">
          <h2>Especialidades</h2>
          <div className="productos-lista">
            {productos.map((p, index) => (
              <div key={index} className="producto-row">
                <div className="producto-text">
                  <strong>{p.nombre}</strong>
                  <p>{p.desc}</p>
                </div>
                <span className="producto-precio">{p.precio}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="carta-rss-box">
          <h2>Suscripción RSS</h2>
          <p>Puedes seguir las actualizaciones de nuestra carta directamente en tu lector de feeds.</p>
          <a href="/carta.xml" target="_blank" rel="noreferrer" className="rss-button">
            Acceder al archivo XML
          </a>
        </div>
      </section>
    </div>
  );
}

export default Menu;