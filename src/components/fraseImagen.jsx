import React from "react";

function FraseImagen({ backgroundImage, backgroundVideo, frase }) {
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Fondo: video o imagen */}
      {backgroundVideo ? (
        <video
          src={backgroundVideo}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      ) : backgroundImage ? (
        <img
          src={backgroundImage}
          alt="Fondo"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      ) : null}

      {/* Capa de oscurecimiento */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Frase centrada */}
      <div className="relative z-20 flex items-center justify-center h-full px-4">
        <p className="text-white text-2xl md:text-4xl font-semibold text-center drop-shadow-lg">
          {frase}
        </p>
      </div>
    </div>
  );
}

export default FraseImagen;
