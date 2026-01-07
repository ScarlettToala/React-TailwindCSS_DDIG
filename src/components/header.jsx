import { React, useState } from "react";
import { Link } from "react-router-dom";
import logout from '../assets/cerrarsesion.png';


export default function Header({ logoImage, info, onLogout }) {
    const [menuAbierto, setMenuAbierto] = useState(false);
    return (
        <header className="bg-pink-600 text-white shadow-md px-10 py-7 relative">
            <div className="container mx-auto flex items-center justify-between">

                {/* Navegación izquierda */}
                <nav className="hidden md:flex items-center gap-4">
                    <Link
                        to="/sobrenosotros"
                        className="relative px-3 py-2 text-white font-[Open_Sans] text-lg after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
                    >
                        Sobre Nosotros
                    </Link>
                    <Link
                        to="/productos"
                        className="relative px-3 py-2 text-white font-[Open_Sans] text-lg after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
                    >
                        Productos
                    </Link>
                    <Link
                        to="/servicios"
                        className="relative px-3 py-2 text-white font-[Open_Sans] text-lg after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
                    >
                        Servicios
                    </Link>
                </nav>

                {/* Logo centrado */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg p-3">
                    <img src={logoImage} alt="Logo"
                        className="w-20 h-20 object-contain rounded-full" />
                </div>


                {/* Iconos derecha */}
                <div className="hidden md:flex space-x-6 items-center">

                    <img
                        src={info}
                        alt="Info"
                        className="w-8 h-8 cursor-pointer"
                    />

                    <button
                        onClick={onLogout}
                        className="flex items-center gap-2 text-white/80 hover:text-white transition cursor-pointer"
                    >
                        <img src={logout} alt="LogOut" className="w-7 h-7" />
                        <span className="text-base">Salir</span>
                    </button>

                </div>


                {/* Botón hamburguesa (solo móvil) */}
                <button
                    className="md:hidden"
                    onClick={() => setMenuAbierto(!menuAbierto)}
                >
                    ☰
                </button>


            </div>

            {/* Menú móvil */}
            {menuAbierto && (
                <nav className="absolute top-full right-6 mt-3 w-48 bg-white text-pink-600 rounded-xl shadow-lg p-4 flex flex-col gap-3 md:hidden z-50">
                    <Link
                        to="/"
                        className="hover:text-black transition"
                        onClick={() => setMenuAbierto(false)}
                    >
                        Home
                    </Link>

                    <Link
                        to="/sobrenosotros"
                        className="hover:text-black transition"
                        onClick={() => setMenuAbierto(false)}
                    >
                        Sobre nosotros
                    </Link>

                    <Link
                        to="/productos"
                        className="hover:text-black transition"
                        onClick={() => setMenuAbierto(false)}
                    >
                        Productos
                    </Link>

                    <Link
                        to="/servicios"
                        className="hover:text-black transition"
                        onClick={() => setMenuAbierto(false)}
                    >
                        Servicios
                    </Link>

                    <hr />

                    <button
                        onClick={onLogout}
                        className="text-left hover:text-black transition"
                    >
                        Cerrar sesión
                    </button>
                </nav>
            )}

        </header>
    );
}
