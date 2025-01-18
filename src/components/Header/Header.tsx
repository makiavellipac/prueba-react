import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/">Santiago Mandalorian</Link>
        </div>
        <button className="header__toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__menu">
            <li className="header__menu-item">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
            </li>
            <li className="header__menu-item">
              <Link to="/carrusel" onClick={() => setIsMenuOpen(false)}>Carrusel</Link>
            </li>
            <li className="header__menu-item">
              <Link to="/empleados" onClick={() => setIsMenuOpen(false)}>Empleados</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
