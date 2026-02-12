import Header from "../components/header.jsx";
import { useNavigate } from "react-router-dom";
import Producto from "../components/productoItem.jsx";
import Audio from "../components/AudioPlayer.jsx";
import Video from "../components/VideoPlayer.jsx";
import Footer from "../components/footer.jsx";

/* Importaciones de recursos */
import tarta from "../assets/img/tartaDeChocolate.webp";
import tresLeches from "../assets/img/tresLeches.webp";
import volteado from "../assets/img/volteadoDePiña.webp";
import logoImage from '../assets/logoo.webp';
import info from '../assets/info.webp';
import audioMp3 from '../assets/audio/AudioMC.mp3';
import audioOgg from '../assets/audio/AudioMC.ogg';
import videoMp4 from '../assets/video/Video.mp4';
import videoWebm from '../assets/video/Video.webm';

function Productos({ user, setUser  }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userData");
    setUser(null);
    navigate("/");
  };

  return (
    <div className="bg-amber-50 min-h-screen">

      <Header
        logoImage={logoImage}
        info={info}
        onLogout={handleLogout}
        user={user}
      />

      {/* Sección Multimedia */}
      <section className="bg-[#c2cf70] mt-10 mb-10 p-8 md:p-12 rounded-xl shadow-lg max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
          Ejemplos de Multimedia
        </h1>

        {/* Contenedor de imágenes responsivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
          <img
            src={tarta}
            alt="Tarta de Chocolate"
            loading="lazy"
            className="w-64 h-auto rounded-lg object-cover hover:scale-105 transition-transform duration-300"
          />

          <picture>
            <source srcSet={tresLeches} type="image/webp" />
            <img
              src={volteado}
              alt="Volteado de Piña"
              className="w-64 h-auto rounded-lg object-cover hover:scale-105 transition-transform duration-300"
            />
          </picture>
        </div>
      </section>

      {/* Sección Productos */}
      <section id="Productos" className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <h2 style={{ fontFamily: '"Leckerli One", cursive' }} className="text-4xl md:text-5xl text-center mb-10 text-gray-800">
          Productos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          <Producto
            image={tarta}
            alt="Es una trata de chocolate realizada con productos de kilometraje 0."
            name="Tarta de Chocolate"
            description1="Deliciosa tarta de chocolate con cobertura de trufa"
            alergenos={[{ nombre: "Gluten" }, { nombre: "Leche" }, { nombre: "Soja" }]}
            colorFondo="amarillo"
          />

          <Producto
            alt="Tarta de piña o volteado de piña es un bizcocho con pociones de la fruta."
            image={volteado}
            name="Volteado de Piña"
            description1="Bizcocho esponjoso de piña con cobertura suave"
            alergenos={
              [
                { nombre: "Gluten" }, 
                { nombre: "Leche" },
                { nombre: "Huevos" }
              ]
            }
            colorFondo="rosa"
          />

          <Producto
          alt="Es un dulce que consiste en un bizcocho mojado en una mezcla dulce y de cobertura de merengue."
            image={tresLeches}
            name="Tres Leches"
            description1="Es un bizcocho mojado con cobertura de merengue"
            alergenos={[
              { nombre: "Gluten", icono: "img" },
              { nombre: "Leche", icono: "img" },
            ]}
            colorFondo="verde"
          />
        </div>
      </section>

      {/* Sección Multimedia de Audio y Video */}
      <section className="max-w-6xl mx-auto px-4 md:px-8 py-12 flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-start">
        <Audio
          nameAudio="Audio Navideño"
          mp3={audioMp3}
          ogg={audioOgg}
        />

        <Video
          mp4={videoMp4}
          webm={videoWebm}
          titulo="Pastel de unicornio"
          usuario="Silpaza"
          className="w-full md:w-96"
        />
      </section>
      <Footer logo={logoImage} />
    </div>
  );
}

export default Productos;
