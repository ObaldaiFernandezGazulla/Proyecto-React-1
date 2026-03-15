import "./Privacy.css";

function Privacy() {
  return (
    <div className="privacy-policy">
      {/* Cabecera de la página */}
      <section className="privacy-hero">
        <div className="privacy-hero-overlay">
          <h1>Política de Privacidad</h1>
          <p>Tu privacidad es importante para nosotros.</p>
        </div>
      </section>

      {/* Contenido Legal */}
      <section className="privacy-content">
        <div className="privacy-container">
          <h2>1. Información al Usuario</h2>
          <p>
            Churrería Oba, como responsable del sitio web, garantiza la protección de los datos 
            de carácter personal que nos proporciones a través de nuestra web, cumpliendo con el RGPD.
          </p>

          <h2>2. Finalidad del tratamiento</h2>
          <p>
            Tratamos la información que nos facilitas con el fin de gestionar tus pedidos de churros, 
            atender tus consultas a través del formulario de contacto y, si lo autorizas, enviarte 
            promociones especiales sobre nuestros productos artesanales.
          </p>

          <h2>3. Conservación de datos</h2>
          <p>
            Tus datos se conservarán mientras exista un interés mutuo para mantener el fin del 
            tratamiento o cuando sea necesario por obligaciones legales.
          </p>

          <h2>4. Derechos del interesado</h2>
          <p>
            Tienes derecho a acceder, rectificar y suprimir tus datos, así como otros derechos 
            detallados en la normativa vigente, enviando un correo a <strong>contacto@churreriaoba.com</strong>.
          </p>

          <div className="privacy-back-box">
            <a href="/" className="back-button">Volver al Inicio</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Privacy;