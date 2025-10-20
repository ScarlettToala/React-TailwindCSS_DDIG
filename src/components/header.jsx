import React, { useState } from "react";


function Header({ logoImage, login, info }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>
            <div>
                {/* Botón Hamburguesa */}
                <button
                    className="hamburger"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Logo centrado */}
                <div className="logo-container">
                    <img src={logoImage} alt="Logo" className="logo" />
                </div>

                {/* Iconos */}
                <div className="icons">
                    <img src={login} alt="Login" className="icon" />
                    <img src={info} alt="Info" className="icon" />
                </div>
            </div>

            {/* Menú inferior */}
            <nav className={`nav ${isOpen ? "open" : ""}`}>
                <ul>
                    <li><a href="#">Sobre Nosotros</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Servicios</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
