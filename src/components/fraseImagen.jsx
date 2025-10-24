import React from "react";

function FraseImagen({ backgroundImage, backgroundVideo, frase }) {
  return (
    <div className="relative w-full h-[500px] overflow-hidden justify-between px-5 py-5">
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-10"></div>

      {/* Frase centrada */}
      <div className="relative z-20 flex items-center justify-center h-full px-4">
        <p className="text-white text-2xl md:text-4xl font-leckerli text-center drop-shadow-lg">
          {frase}
        </p>

      </div>
      <a href="#">Ver más</a>
    </div>
  );
}

export default FraseImagen;
