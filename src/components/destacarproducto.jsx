import React from "react";

function Destacado({ backgroundImage, frase }) {
    return (
        <div className="w-full bg-[#E9EDC9] flex flex-col items-center px-4 py-8 md:py-12">
            {/* Título principal */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-leckerli font-bold mb-8 text-center text-gray-800 drop-shadow-md">
                Lo más vendido
            </h2>

            {/* Contenedor de imagen y texto */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 max-w-6xl w-full">

                {/* Imagen */}
                {backgroundImage && (
                    <img
                        src={backgroundImage}
                        alt="Producto Destacado"
                        className="w-full max-w-sm md:max-w-md h-auto object-cover rounded-lg shadow-lg"
                    />
                )}

                {/* Texto */}
                <div className="text-center md:text-left md:max-w-md">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-leckerli  mb-4">
                        {frase}
                    </h3>
                    <p className="text-gray-700 text-base sm:text-lg mb-4">
                        Este es un producto destacado que te encantará. Puedes agregar aquí una descripción más detallada.
                    </p>
                    <a
                        href="#"
                        className="inline-block px-6 py-2 bg-pink-400 text-white font-semibold rounded-lg shadow-md hover:bg-pink-700 transition-colors duration-300"
                    >
                        Ver más
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Destacado;
