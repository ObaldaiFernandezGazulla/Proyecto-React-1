import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">

      <div className="header-left">
        <img src="/logo-oba.png" alt="Logo" className="header-logo" />
      </div>

      <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>Sobre Nosotros</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contacto</Link>
        <Link to="/reviews" onClick={() => setMenuOpen(false)}>Reseñas</Link>
      </nav>

      {/* HAMBURGUER */}
      <div 
        className={`hamburger ${menuOpen ? "active" : ""}`} 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

    </header>
  );
}

export default Header;