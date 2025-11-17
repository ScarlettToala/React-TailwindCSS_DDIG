import React from "react";
import { Link } from "react-router-dom";
import logout from '../assets/cerrarsesion.png';

export default function Header({ logoImage, info, onLogout }) {
    return (
        <header className="bg-pink-600 text-white shadow-md px-10 py-7 relative">
            <div className="container mx-auto flex items-center justify-between">

                {/* Navegación izquierda */}
                <nav className="hidden md:flex space-x-6">
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
                </nav>

                {/* Logo centrado */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg p-3">
                    <img src={logoImage} alt="Logo" className="w-20 h-20 object-contain rounded-full" />
                </div>


                {/* Iconos derecha */}
                <div className="hidden md:flex space-x-6 items-center">

                    <button
                        onClick={onLogout}
                        className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition"
                    >
                        <img
                            src={logout}
                            alt="LogOut"
                            className="w-8 h-8"
                        />
                        <span className="hover:text-black transition-colors">
                            Cerrar sesión
                        </span>
                    </button>

                    <img
                        src={info}
                        alt="Info"
                        className="w-8 h-8 cursor-pointer"
                    />
                </div>


                {/* Menú móvil */}
                <div className="md:hidden ml-auto">
                    <button>☰</button>
                </div>
            </div>
        </header>
    );
}
