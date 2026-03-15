import "./Terms.css";

function Terms() {
  return (
    <div className="terms-policy">
      <section className="terms-hero">
        <div className="terms-hero-overlay">
          <h1>Términos y Condiciones</h1>
          <p>Condiciones generales de uso y servicio.</p>
        </div>
      </section>

      <section className="terms-content">
        <div className="terms-container">
          <h2>1. Objeto</h2>
          <p>
            Los presentes términos regulan el acceso y uso del sitio web de <strong>Churrería Oba</strong>. 
            Al navegar por esta web, el usuario acepta estas condiciones en su totalidad.
          </p>

          <h2>2. Propiedad Intelectual</h2>
          <p>
            Todo el contenido (textos, imágenes de nuestros churros, logotipos y diseños) es propiedad exclusiva 
            de Churrería Oba. Queda prohibida su reproducción sin autorización previa.
          </p>

          <h2>3. Productos y Precios</h2>
          <p>
            Nos esforzamos por mostrar nuestros productos de la forma más fiel posible. Los precios mostrados 
            en el local incluyen el IGIC correspondiente. Churrería Oba se reserva 
            el derecho de modificar precios o disponibilidad sin previo aviso.
          </p>

          <h2>4. Responsabilidad</h2>
          <p>
            Churrería Oba no se hace responsable de las interrupciones en el servicio web o de posibles 
            errores tipográficos en la información mostrada.
          </p>

          <h2>5. Ley Aplicable</h2>
          <p>
            Estas condiciones se rigen por la legislación española. Cualquier conflicto se someterá a los 
            juzgados y tribunales de la ciudad correspondiente al domicilio social de la empresa.
          </p>

          <div className="terms-back-box">
            <a href="/" className="back-button">Volver al Inicio</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Terms;