import { useState } from "react";
function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    function closeMenu() {
        setMenuOpen(false);
    }
    return (
        <nav className="navbar">
            <div className="logo">
                <span className="logo-icon">A</span>
                <span>AgeisCore</span>
            </div>
            <button
                className="hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
            >
                {menuOpen ? "✕" : "☰"}
            </button>
            <div className={`nav-links ${menuOpen ? "active" : ""}`}>
                <a href="#home" onClick={closeMenu}>Overview</a>
                <a href="#architecture" onClick={closeMenu}>Capabilities</a>
                <a href="#benchmark" onClick={closeMenu}>Matrix</a>
                <a href="#deployments" onClick={closeMenu}>Projects</a>
                <a href="#footer" onClick={closeMenu}>Contact</a>
            </div>
        </nav>
    );
}
export default Navbar;