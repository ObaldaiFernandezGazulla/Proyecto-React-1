import "./Contact.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Contact() {
  return (
    <div className="contact">

      <section className="contact-hero">
        <h1>Contacto</h1>
        <p>Estamos aquí para ayudarte. Visítanos o escríbenos.</p>
      </section>

      <section className="contact-body">

        <div className="contact-info">
          <h2>Información</h2>

          <p><strong>Dirección:</strong><br />
          Paseo González Díaz nº 15<br />
          Teror, Las Palmas</p>

          <p><strong>Teléfono:</strong><br />
          +34 600 000 000</p>

          <p><strong>Email:</strong><br />
          contacto@churreriaoba.com</p>

          <h2>Horario</h2>
          <p>Lunes - Viernes: 07:00 – 13:00</p>
          <p>Sábados y Domingos: 08:00 – 14:00</p>
        </div>

        <div className="contact-map">
          <MapContainer
            center={[28.06148, -15.54862]}
            zoom={14}
            scrollWheelZoom={false}
            className="map"
          >
            <TileLayer
              attribution="&copy; OpenStreetMap"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[28.06148, -15.54862]}>
              <Popup>Churrería Oba — Paseo González Díaz, 15</Popup>
            </Marker>
          </MapContainer>
        </div>

      </section>

      <section className="contact-form">
        <h2>Envíanos un mensaje</h2>
        <form>
          <input type="text" placeholder="Tu nombre" required />
          <input type="email" placeholder="Tu email" required />
          <textarea placeholder="Escribe tu mensaje..." required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;