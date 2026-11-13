function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <span className="logo-icon">A</span>
                <span>AgeisCore</span>
            </div>
            <div className="nav-links">
                <a href="#home">Overview</a>
                <a href="#architecture">Capabilities</a>
                <a href="#benchmark">Matrix</a>
                <a href="#deployments">Projects</a>
                <a href="#footer">Contact</a>
            </div>

            <button className="nav-button">
                Get Started
            </button>
        </nav>
    );
}
export default Navbar;