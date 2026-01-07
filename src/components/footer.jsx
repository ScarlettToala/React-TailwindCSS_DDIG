import React from 'react';
import { Link } from "react-router-dom";

function Footer({ logo }) {
    return (
        <footer className="w-full bg-pink-600 text-white py-8 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8 ">

                {/* Navegación */}
                <nav className="flex flex-col md:flex-row md:space-x-6 text-center md:text-left gap-2 md:gap-0">
                    <Link to="/sobrenosotros" className="text-white font-[Open_Sans] text-lg hover:text-pink-200">
                        Sobre Nosotros
                    </Link>
                    <Link to="/productos" className="text-white font-[Open_Sans] text-lg hover:text-pink-200">
                        Productos
                    </Link>
                    <Link to="/servicios" className="text-white font-[Open_Sans] text-lg hover:text-pink-200">
                        Servicios
                    </Link>
                    <a href="#" className="text-white font-[Open_Sans] text-lg hover:text-pink-200">
                        Contacto
                    </a>
                </nav>

                {/* Logo */}
                <div className="flex justify-center md:justify-center items-center bg-white rounded-full shadow-lg p-4 md:p-5 w-24 h-24 md:w-28 md:h-28 hover:scale-105 transition-transform duration-300 ">
                    <img src={logo} alt="Logo" className="w-16 h-16 md:w-20 md:h-20 object-contain" />
                </div>

                {/* Información */}
                <div className="text-center md:text-right text-sm space-y-1">
                    <p>&copy; Silpaza 2025</p>
                    <p>Author: Scarlett Toala</p>
                    <p>Última fecha: 13/10/2025</p>
                </div>

            </div>
        </footer>

    );
}

export default Footer;
