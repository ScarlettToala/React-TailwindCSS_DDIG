import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import ContactForm from "../components/ContactForm";
import Header from "../components/header";
import Footer from "../components/footer";

import logoImage from '../assets/logoo.webp';
import info from '../assets/info.webp';

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
    <>
    <div className="bg-amber-50">
          <Header
        logoImage={logoImage}
        info={info}
        onLogout={handleLogout}
        user={user}
      />
    
    <div className="min-h-screen py-12 px-4 max-w-screen-lg mx-auto">

      {/* Título */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-amber-600 mb-8">
        Sobre Nosotros
      </h1>

      {/* Descripción */}
      <p className="max-w-2xl mx-auto text-center text-gray-700 mb-12">
        Somos una empresa comprometida con brindar la mejor experiencia a
        nuestros usuarios. A continuación puedes ver algunos ejemplos del uso
        de <strong>useState</strong> y <strong>useRef</strong> en React.
      </p>

      {/* Contenedor principal */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">

        {/* useState */}
        <section className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center gap-6" aria-labelledby="titulo-usestate">
          <h2 id="titulo-usestate" className="text-xl font-semibold text-yellow-800">
            Ejemplo useState
          </h2>

          <p className="text-lg">
            Contador: <span className="font-bold text-amber-500">{numero}</span>
          </p>

          <button
            onClick={() => setNumero(numero + 1)}
            className="bg-orange-700 hover:bg-orange-800 text-white px-6 py-3 rounded-lg transition active:scale-95"
          >
            Sumar
          </button>
        </section>

        {/* useRef */}
        <section className="bg-white rounded-xl shadow-md p-8 flex flex-col gap-6" aria-labelledby="titulo-useref">
          <h2 id="titulo-useref" className="text-xl font-semibold text-blue-600 text-center">
            Ejemplo useRef
          </h2>
          <form action="GET">
            <label>Escribe un ejemplo de texto
            <input
              ref={inputRef}
              type="text"
              placeholder="Escribe aquí"
              aria-label="Campo de texto para ejemplo useRef"
              className="w-full border border-blue-300 rounded-lg px-4 py-3
              focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            </label>
          </form>
          <button
            onClick={ponerFocus}
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition active:scale-95"
            aria-label="Mover foco al input"
          >
            Hacer focus al input
          </button>
        </section>
      </div>

      {/* Formulario */}
      <div className="mt-20 max-w-md mx-auto">
        <ContactForm />
      </div>

      
    </div>
    <Footer logo={logoImage} />
    </div>
    </>
  );
}

export default SobreNosotros;
