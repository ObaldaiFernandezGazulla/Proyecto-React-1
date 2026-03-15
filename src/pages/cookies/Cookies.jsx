import "./Cookies.css";

function Cookies() {
  return (
    <div className="cookies-policy">
      <section className="cookies-hero">
        <div className="cookies-hero-overlay">
          <h1>Política de Cookies</h1>
          <p>Información sobre el uso de cookies en Churrería Oba.</p>
        </div>
      </section>

      <section className="cookies-content">
        <div className="cookies-container">
          <h2>¿Qué son las cookies?</h2>
          <p>
            Una cookie es un pequeño archivo que se descarga en tu ordenador al acceder a determinadas páginas web. 
            Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los 
            hábitos de navegación de un usuario o de su equipo.
          </p>

          <h2>Tipos de cookies que utilizamos</h2>
          <table className="cookies-table">
            <thead>
              <tr>
                <th>Tipo</th>
                <th>Finalidad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Técnicas</strong></td>
                <td>Necesarias para que la web funcione correctamente (inicio de sesión, seguridad).</td>
              </tr>
              <tr>
                <td><strong>Analíticas</strong></td>
                <td>Nos ayudan a saber cuántas personas nos visitan y qué productos gustan más.</td>
              </tr>
              <tr>
                <td><strong>Publicitarias</strong></td>
                <td>Para mostrarte anuncios relevantes basados en tus intereses.</td>
              </tr>
            </tbody>
          </table>

          <h2>Cómo desactivar las cookies</h2>
          <p>
            Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las 
            opciones del navegador instalado en tu ordenador (Chrome, Firefox, Safari, Edge). 
            Ten en cuenta que si bloqueas las cookies técnicas, es posible que algunas funciones de la web de 
            <strong> Churrería Oba</strong> no funcionen correctamente.
          </p>

          <div className="cookies-back-box">
            <a href="/" className="back-button">Volver al Inicio</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cookies;