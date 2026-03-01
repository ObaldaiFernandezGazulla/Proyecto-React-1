import "./Footer.css";
import { FaInstagram, FaTiktok, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-section">
        <h3>Churrería Oba</h3>
        <p>© 2026 Churrería Oba. Todos los derechos reservados.</p>
        <p>Política de privacidad | Cookies | Términos</p>
      </div>

      <div className="footer-section">
        <h4>Contacto</h4>
        <p>C/ Paseo Gonzalez Diaz N15</p>
        <p>+34 928 85 47 96</p>
        <p>contacto@churreriaoba.com</p>
      </div>

      <div className="footer-section">
        <h4>Síguenos</h4>
        <div className="footer-social">
          <a href="https://instagram.com" target="_blank">
            <FaInstagram />
          </a>

          <a href="https://tiktok.com" target="_blank">
            <FaTiktok />
          </a>

          <a href="https://github.com" target="_blank">
            <FaGithub />
          </a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;