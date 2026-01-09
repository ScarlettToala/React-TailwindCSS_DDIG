import { useState } from "react";
import NavLinks from "./NavLinks";
import logout from "../assets/cerrarsesion.png";

export default function Header({ logoImage, info, onLogout }) {
    const [menuAbierto, setMenuAbierto] = useState(false);

    return (
        <header className="bg-pink-600 text-white shadow-md px-10 py-7 relative">
            <div className="container mx-auto flex items-center justify-between">

                {/* Navegación izquierda (desktop) */}
                <nav className="hidden md:flex items-center gap-4 ">
                    <NavLinks textColor="text-white" textColorHover="hover:text-yellow-300" />
                </nav>

                {/* Logo centrado */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg p-3">
                    <img
                        src={logoImage}
                        alt="Logo"
                        className="w-20 h-20 object-contain rounded-full"
                    />
                </div>

                {/* Iconos derecha (desktop) */}
                <div className="hidden md:flex space-x-6 items-center">
                    <img src={info} alt="Info" className="w-8 h-8 cursor-pointer" />

                    <button
                        onClick={onLogout}
                        className="flex items-center gap-2 text-white/80 hover:text-white transition cursor-pointer"
                    >
                        <img src={logout} alt="LogOut" className="w-7 h-7" />
                        <span className="text-base">Salir</span>
                    </button>
                </div>

                {/* Botón hamburguesa (mobile) */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setMenuAbierto(!menuAbierto)}
                >
                    ☰
                </button>
            </div>

            {/* Menú móvil */}
            {menuAbierto && (
                <nav className="absolute top-full left-6 mt-3 w-48 bg-white text-pink-600 rounded-xl shadow-lg p-4 flex flex-col gap-3 md:hidden z-50">
                    <NavLinks onClick={() => setMenuAbierto(false)} 
                    textColor="text-pink-600"
                    textColorHover="hover:text-black"
                        />
                    
                    <hr />

                    <button
                        onClick={onLogout}
                        className="text-left hover:text-black transition font-[Open_Sans]"
                    >
                        Cerrar sesión
                    </button>
                </nav>
            )}
        </header>
    );
}
