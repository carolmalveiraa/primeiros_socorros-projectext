import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoNordeste from '../assets/Nordeste Emergências.png';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center space-x-2">
          <img src={logoNordeste} alt="Logo Nordeste" className="h-16" />
            <span className="text-xl font-bold text-white">Primeiros Socorros</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden text-white md:flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/curso"
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
            >
              Curso
            </NavLink>
            <NavLink
              to="/quiz"
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
            >
              Quiz
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "nav-link nav-link-active" : "nav-link"
              }
            >
              Admin
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "block nav-link nav-link-active"
                  : "block nav-link"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/curso"
              className={({ isActive }) =>
                isActive
                  ? "block nav-link nav-link-active"
                  : "block nav-link"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Curso
            </NavLink>
            <NavLink
              to="/quiz"
              className={({ isActive }) =>
                isActive
                  ? "block nav-link nav-link-active"
                  : "block nav-link"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Quiz
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "block nav-link nav-link-active"
                  : "block nav-link"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Admin
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;