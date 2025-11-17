import React from 'react';
import { Link } from "react-router-dom";

function Footer({ logo }) {
    return (
        <footer className="w-full bg-pink-600 text-white py-8 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Navegación */}
                <nav className="flex flex-col md:flex-row md:space-x-6 text-center md:text-left">
                    <Link
                        to="/sobrenosotros"
                        className="px-3 py-3 text-white rounded-lg font-[Open_Sans] text-lg hover:text-black transition"
                    >
                        Sobre Nosotros
                    </Link>
                    <Link
                        to="/productos"
                        className="px-6 py-3 text-white rounded-lg font-[Open_Sans] text-lg hover:text-black transition"
                    >
                        Productos
                    </Link>
                    <Link
                        to="/servicios"
                        className="px-6 py-3 text-white rounded-lg font-[Open_Sans] text-lg hover:text-black transition"
                    >
                        Servicios
                    </Link>

                    <a href="#" className="hover:text-white font-[Open_Sans] text-lg transition-colors duration-300">Contacto</a>
                </nav>

                {/* Logo centrado en círculo blanco */}
                <div className="flex justify-center items-center bg-white rounded-full shadow-lg p-5 md:p-5">
                    <img src={logo} alt="Logo" className="w-20 h-20 object-contain" />
                </div>

                {/* Información a la derecha */}
                <div className="text-right text-sm space-y-1">
                    <p>&copy; Silpaza 2025</p>
                    <p>Author: Scarlett Toala</p>
                    <p>Última fecha: 13/10/2025</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
