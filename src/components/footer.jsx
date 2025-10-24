import React from 'react';

function Footer({ logo }) {
    return (
        <footer className="w-full bg-pink-600 text-white py-8 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Navegación */}
                <nav className="flex flex-col md:flex-row md:space-x-6 text-center md:text-left">
                    <a href="#" className="hover:text-amber-400 transition-colors duration-300">Sobre Nosotros</a>
                    <a href="#" className="hover:text-amber-400 transition-colors duration-300">Productos</a>
                    <a href="#" className="hover:text-amber-400 transition-colors duration-300">Servicios</a>
                    <a href="#" className="hover:text-amber-400 transition-colors duration-300">Contacto</a>
                </nav>

                {/* Logo centrado en círculo blanco */}
                <div className="flex justify-center items-center bg-white rounded-full shadow-lg p-3 md:p-4">
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
