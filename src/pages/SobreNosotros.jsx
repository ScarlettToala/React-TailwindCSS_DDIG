import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import ContactForm from "../components/ContactForm";
import Header from "../components/header";

import logoImage from '../assets/logoo.png';
import info from '../assets/info.png';

function SobreNosotros({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userData");
    setUser(null);
    navigate("/");
  };

  // useState
  const [numero, setNumero] = useState(0);

  // useRef
  const inputRef = useRef(null);

  const ponerFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div className="min-h-screen bg-amber-50 py-12 px-4">
              <Header
                logoImage={logoImage}
                info={info}
                onLogout={handleLogout} // <---- PASAMOS LA FUNCION
              />
      {/* Título */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-amber-600 mb-6 p-4">
        Sobre Nosotros
      </h1>

      {/* Descripción */}
      <p className="max-w-2xl mx-auto text-center text-gray-700 mb-10">
        Somos una empresa comprometida con brindar la mejor experiencia a
        nuestros usuarios. A continuación puedes ver algunos ejemplos del uso
        de <strong>useState</strong> y <strong>useRef</strong> en React.
      </p>

      {/* Contenedor principal */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">

        {/* useState */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center gap-4">
          <h2 className="text-xl font-semibold text-amber-600">
            Ejemplo useState
          </h2>

          <p className="text-lg">
            Contador: <span className="font-bold text-amber-500">{numero}</span>
          </p>

          <button
            onClick={() => setNumero(numero + 1)}
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg transition active:scale-95"
          >
            Sumar
          </button>
        </div>

        {/* useRef */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-blue-600 text-center">
            Ejemplo useRef
          </h2>

          <input
            ref={inputRef}
            type="text"
            placeholder="Escribe aquí"
            className="w-full border border-blue-300 rounded-lg px-3 py-2
                       focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            onClick={ponerFocus}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition active:scale-95"
          >
            Hacer focus al input
          </button>
        </div>
      </div>

      {/* Formulario */}
      <div className="mt-16">
        <ContactForm />
      </div>

    </div>
  );
}

export default SobreNosotros;
