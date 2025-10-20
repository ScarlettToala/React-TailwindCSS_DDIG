import React, { useState } from "react";


export default function Header({ logoImage, login, info }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header class='relative bg-pink-700 text-blank shadow-md'>
            <div class="container mx-auto flex items-center justify-between px-5 py-3 relative z-10">
                {/* nav */}
                <div>
                    <nav className=' bg-white md:bg-transparent md:static absolute top-full left-0 w-full md:w-auto transition-max-height duration-300'>
                        <ul className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 text-center">
                            <li><a href="#" className="block py-1 px-4 text-gray-700 hover:text-white">Sobre Nosotros</a></li>
                            <li><a href="#" className="block py-1 px-4 text-gray-700 hover:text-white">Productos</a></li>
                            <li><a href="#" className="block py-1 px-4 text-gray-700 hover:text-white">Servicios</a></li>
                        </ul>
                    </nav>
                </div>
                {/* Logo centrado */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center z-20">
                    <img src={logoImage} alt="Logo" className="w-16 h-30 object-contain" />
                </div>

                {/* Iconos */}
                <div className="hidden md:flex space-x-4">
                    <img src={login} alt="Login" className="w-6 h-6 cursor-pointer" />
                    <img src={info} alt="Info" className="w-6 h-6 cursor-pointer" />
                </div>
            </div>

        </header>
    );
}


