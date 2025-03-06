import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-red-500" />
            <span className="text-xl font-bold text-blue-500">Primeiros Socorros</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
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
            className="md:hidden text-gray-600 focus:outline-none"
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