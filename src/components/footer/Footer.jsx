import "./Footer.css";
import { FaInstagram, FaTiktok, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-section">
        <h3>Churrería Oba</h3>
        <p>© 2026 Churrería Oba. Todos los derechos reservados.</p>
        <p>
          <a href="/privacy">Política de privacidad</a> | 
          <a href="/cookies"> Cookies</a> | 
          <a href="/terms"> Términos</a>
        </p>
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
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>

          <a href="https://tiktok.com" target="_blank" rel="noreferrer">
            <FaTiktok />
          </a>

          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;