import { useNavigate, Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";

function SobreNosotros({ user, setUser }) {
  const navigate = useNavigate();

  // Uso del useState (ejemplo básico)
  const [numero, setNumero] = useState(0);

  // Uso del useRef
  const inputRef = useRef(null);

  // current = elemento del DOM, focus = método del input HTML
  const ponerFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-amber-100">
      {/* Título */}
        <h1 className="text-2xl p-6 font-bold text-center text-amber-600">
          Sobre Nosotros
        </h1>

      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-8 space-y-6">

        {/* useState */}
        <div className="text-center space-y-3">
          <p className="text-lg font-semibold">
            Contador: <span className="text-amber-500">{numero}</span>
          </p>

          <button
            onClick={() => setNumero(numero + 1)}
            className="bg-amber-400 hover:bg-amber-500 text-white px-4 py-2 rounded-lg transition"
          >
            Sumar
          </button>
        </div>

        <hr className="border-amber-200" />

        {/* useRef */}
        <div className="space-y-3">
          <input
            ref={inputRef}
            type="text"
            placeholder="Escribe aquí"
            className="w-full border border-amber-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          />

          <button
            onClick={ponerFocus}
            className="w-full bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition"
          >
            Hacer focus al input
          </button>
        </div>

      </div>
    </div>
  );
}

export default SobreNosotros;
