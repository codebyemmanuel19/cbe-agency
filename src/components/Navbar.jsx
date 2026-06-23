import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import "./Navbar.css"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M14 2L4 24h20L14 2z" fill="#7C3AED" />
        </svg>
        <span>CBE Agency</span>
      </div>

      {/* Desktop Links */}
      <div className="nav-links desktop">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>

      {/* Hamburger Button */}
      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        {isOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="nav-links mobile">
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/services" onClick={closeMenu}>Services</Link>
          <Link to="/projects" onClick={closeMenu}>Projects</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar