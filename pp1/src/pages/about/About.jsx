import "./About.css";

function About() {
  return (
    <div className="about">

      <section className="about-hero">
        <h1>Nuestra Historia</h1>
        <p>Un lugar donde el sabor y el tiempo van al mismo ritmo.</p>
      </section>

      <section className="about-body">

        <div className="about-left">
          <h2>Una tradición que seguimos perfeccionando</h2>
          <p>
            En Churrería Oba entendemos los churros como algo más que un dulce. 
            Son parte de la rutina, de los recuerdos y de la cultura de aquí. 
            Desde nuestros inicios hemos mantenido la misma idea: 
            hacer churros y porras como se han hecho siempre, 
            pero cuidando cada detalle para ofrecer una experiencia más actual.
          </p>

          <p>
            Elaboramos la masa a diario y trabajamos con un proceso sencillo, 
            sin prisas y sin atajos. El resultado es un sabor reconocible: 
            churros ligeros, porras esponjosas y un chocolate espeso que 
            acompaña como debe.
          </p>

          <h2>Un espacio para desconectar</h2>
          <p>
            Nuestro local está pensado para que te encuentres a gusto. 
            Luz cálida, mesas amplias y un ambiente tranquilo donde 
            desayunar, merendar o simplemente parar un momento. 
            Queremos que Churrería Oba sea ese sitio al que apetece volver.
          </p>

          <h2>Lo que nos mueve</h2>
          <p>
            Nos gusta hacer las cosas bien. Sin complicaciones, 
            con ingredientes de calidad y con un equipo que disfruta lo que hace. 
            Ese es nuestro compromiso y lo que define cada paso que damos.
          </p>
        </div>

        <div className="about-right">
          <img src="/about-local.png" alt="Interior de Churrería Oba" />
        </div>

      </section>
    </div>
  );
}

export default About;