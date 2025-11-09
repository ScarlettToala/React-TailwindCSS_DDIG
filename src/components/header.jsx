import React from "react";

export default function Header({ logoImage, info, onLogout }) {
    return (
        <header className="bg-pink-600 text-white shadow-md px-10 py-7 relative">
            <div className="container mx-auto flex items-center justify-between">

                {/* Navegación izquierda */}
                <nav className="hidden md:flex space-x-6">
                    <a href="#" className="hover:text-amber-400 transition-colors">Sobre Nosotros</a>
                    <a href="#" className="hover:text-amber-400 transition-colors">Productos</a>
                    <a href="#" className="hover:text-amber-400 transition-colors">Servicios</a>
                </nav>

                {/* Logo centrado */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg p-3">
                    <img src={logoImage} alt="Logo" className="w-20 h-20 object-contain rounded-full" />
                </div>


                {/* Iconos derecha */}
                <div className="hidden md:flex space-x-4 items-center">
                    {/* <a href="/login"><img src={login} alt="Login" className="w-8 h-8 cursor-pointer" /></a>*/}
                    <button
                        onClick={onLogout} // ✅ aquí usamos la función que viene de Home
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                        Cerrar Sesión
                    </button>
                    <img src={info} alt="Info" className="w-8 h-8 cursor-pointer" />
                </div>

                {/* Menú móvil */}
                <div className="md:hidden ml-auto">
                    <button>☰</button>
                </div>
            </div>
        </header>
    );
}
