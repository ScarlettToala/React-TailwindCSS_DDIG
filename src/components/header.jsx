import { useState } from "react";
import NavLinks from "./NavLinks";


export default function Header({ logoImage, info, onLogout }) {
    const [menuAbierto, setMenuAbierto] = useState(false);

    return (
        <header className="bg-[#F480AD] text-white shadow-md px-10 py-7 relative">
            <div className="container mx-auto flex items-center justify-between">

                {/* Navegación izquierda (desktop)  ARIA*/}

                <nav 
                    className="hidden md:flex items-center gap-4 " 
                    role="navigation" 
                    aria-label="Menú principal">
                    <NavLinks textColor="text-[#0C0808]" textColorHover="hover:text-black" />
                </nav>

                {/* Logo centrado */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg p-3">
                    <img
                        src={logoImage}
                        alt="Logo Corporativo de Silpaza"
                        className="w-20 h-20 object-contain rounded-full"
                    />
                </div>

                {/* Iconos derecha (desktop) */}
                <div className="hidden md:flex space-x-6 items-center">
                    <img src={info} alt="Info" className="w-8 h-8 cursor-pointer" />

                    <button
                        onClick={onLogout}
                        /*ARIA*/
                        aria-label="Cerrar sesión"
                        className="flex items-center gap-2 text-[#0C0808] transition cursor-pointer"
                    >
                        
                        <span className="relative text-[#0C0808] font-[Open_Sans] text-lg
                                    after:absolute after:left-0 after:bottom-0 after:h-[2px]
                                    after:w-0 after:bg-white after:transition-all
                                    hover:after:w-full transition">Cerrar sesión</span>
                    </button>
                </div>

                {/* Botón hamburguesa (mobile) */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setMenuAbierto(!menuAbierto)}
                    /*ARIA*/
                    aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={menuAbierto}
                    aria-controls="menu-movil"
                >

                    ☰
                </button>
            </div>

            {/* Menú móvil */}
            {menuAbierto && (
                <nav className="absolute top-full left-6 mt-3 w-48 bg-white text-pink-600 rounded-xl shadow-lg p-4 flex flex-col gap-3 md:hidden z-50"
                    /*ARIA*/ 
                    
                    aria-label="Menú móvil"
                >
                    <NavLinks onClick={() => setMenuAbierto(false)}
                        textColor="text-pink-600"
                        textColorHover="hover:text-black"
                    />

                    <hr />

                    <button
                        onClick={onLogout}
                        aria-label="Cerrar sesión"
                        className="text-left hover:text-black transition font-[Open_Sans]"
                    >
                        Cerrar sesión
                    </button>
                </nav>
            )}
        </header>
    );
}
