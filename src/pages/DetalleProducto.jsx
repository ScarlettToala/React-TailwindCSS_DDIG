import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import ContactForm from "../components/ContactForm";
import Header from "../components/header";
import Footer from "../components/footer";

import logoImage from '../assets/logoo.webp';
import info from '../assets/info.webp';
import galletas from '../assets/galletas.webp';

function DetalleProducto({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userData");
    setUser(null);
    navigate("/");
  };

  const [numero, setNumero] = useState(0);
  const inputRef = useRef(null);

  return (
    <>
      <div className="bg-amber-50 min-h-screen">
        <Header
          logoImage={logoImage}
          info={info}
          onLogout={handleLogout}
          user={user}
        />

        <div className="py-12 px-4 max-w-screen-lg mx-auto">

          {/* Título */}
          <h1 className="text-3xl md:text-4xl font-bold text-center text-amber-700 mb-6">
            Cookies Artesanales de Chocolate 🍪
          </h1>

          {/* Descripción breve */}
          <p className="max-w-2xl mx-auto text-center text-gray-700 mb-12">
            Crujientes por fuera y suaves por dentro, nuestras cookies están 
            elaboradas con chocolate negro de alta calidad y mantequilla artesanal.
            Perfectas para acompañar un café o darte un capricho dulce.
          </p>

          {/* Contenedor principal */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Imagen */}
            <div className="flex justify-center">
              <img
                src={galletas}
                alt="Galletas artesanales de chocolate"
                className="w-full max-w-sm md:max-w-md rounded-xl shadow-lg hover:scale-105 transition duration-300"
              />
            </div>

            {/* Información adicional */}
            <div className="text-center md:text-left space-y-4">

              <h2 className="text-xl font-semibold text-amber-600">
                ¿Por qué te encantarán?
              </h2>

              <ul className="text-gray-700 space-y-2">
                <li>✔ Hechas a mano cada día</li>
                <li>✔ Ingredientes naturales</li>
                <li>✔ Sin conservantes</li>
                <li>✔ Sabor intenso a chocolate</li>
              </ul>

              {/* Botón volver */}
              <button
                onClick={() => navigate(-1)}
                className="mt-6 text-black italic font-semibold hover:underline transition"
              >
                ← Volver a la galería
              </button>

            </div>
          </div>
        </div>

        <Footer logo={logoImage} />
      </div>
    </>
  );
}

export default DetalleProducto;