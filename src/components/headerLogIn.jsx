import React from "react";

export default function HeaderLogIn({ logoImage}) {
    return (
        <header className="bg-pink-600 text-white shadow-md px-10 py-20 relative">
            <div className="container mx-auto flex items-center justify-between">

                <a href="/welcome">Volver</a>
                {/* Logo centrado */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg p-3">
                    <img src={logoImage} alt="Logo" className="w-20 h-20 object-contain rounded-full" />
                </div>

                {/* Menú móvil */}
                <div className="md:hidden ml-auto">
                    <button>☰</button>
                </div>
            </div>
        </header>
    );
}
