// src/components/Footer.jsx
import React from 'react';

function Footer({ logo }) {
    return (
        <div className="collage-container">
            <div className="SMSYcontainer">
                <div className="nav">
                    <nav>
                        <ul>
                            <li><a href="#">Sobre Nosotros</a></li>
                            <li><a href="#">Productos</a></li>
                            <li><a href="#">Servicios</a></li>
                            <li><a href="#">Contacto</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="logo">
                    <img src={logo} alt="Fondo" />
                </div>
                <div className="fecha">
                    <p>&copy; Silpaza 2025</p>
                    <p>Author: Scarlett Toala</p>
                    <p>Última fecha: 13/10/2025</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
