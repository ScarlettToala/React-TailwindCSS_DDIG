
import Header from "../components/header.jsx";
import { useNavigate } from "react-router-dom";
import Producto from "../components/productoItem.jsx"
import Audio from "../components/AudioPlayer.jsx"
import Video from "../components/VideoPlayer.jsx"

/*Importaciones de recursos*/
import tarta from "../assets/img/tartaDeChocolate.webp";
import tresLeches from "../assets/img//tresLeches.webp";
import volteado from "../assets/img/volteadoDePiña.webp";
import logoImage from '../assets/logoo.png'
import info from '../assets/info.png'
import audioMp3 from '../assets/audio/AudioMC.mp3'
import audioOgg from '../assets/audio/AudioMC.ogg'
import videoMp4 from '../assets/video/Video.mp4'
import videoWebm from '../assets/video/Video.webm'


function Productos() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userData");
    setUser(null);
    navigate("/");
  };

    const colores = {
      verde: { backgroundColor: "#c2cf70" }
  };

  return (

    <div>

      <Header
        logoImage={logoImage}
        info={info}
        onLogout={handleLogout} // <---- PASAMOS LA FUNCION
      />

      <div className="bg-[#c2cf70] mt-10 mb-10 p-10 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-6">Ejemplos de múltimedia</h1>

        {/* Contenedor de imágenes lado a lado */}
        <div className="flex justify-center items-center gap-6">

          {/* Imagen simple */}
          <img
            src={tarta}
            alt="Tarta de Chocolate"
            loading="lazy"
            className="w-[250px] h-auto rounded-lg shadow-md object-cover hover:scale-105 transition-transform duration-300"
          />

          {/* Imagen con picture */}
          <picture>
            <source srcSet={tresLeches} type="image/webp" />
            <img
              src={volteado}
              alt="Volteado de Piña"
              className="w-[250px] h-auto rounded-lg shadow-md object-cover hover:scale-105 transition-transform duration-300"
            />
          </picture>

        </div>

      </div>

    <div id="Productos">
        <h1 style={{ fontFamily: '"Leckerli One", cursive' }} className="text-4xl">Productos</h1>
      <div className="grid grid-cols-2 gap-0 p-6">
        {/*image, name, description1, alergenos */}
        <Producto
          image={tarta}
          name="Tarta de Chocolate"
          description1={"Es una tarta de chococolate con cobertura de trufa"}
          alergenos={[
            { nombre: "Gluten", icono: "img" },
            { nombre: "Leche", icono: "img" }
          ]}
          color="amarillo"
        />

        <Producto
          image={volteado}
          name="Volteado de piña"
          description1={"Es una tarta piña con bizcocho de vainilla"}
          alergenos={[
            { nombre: "Gluten", icono: "img" },
            { nombre: "Leche", icono: "img" },
            { nombre: "Fructosa", icono: "img" }
          ]}
          color="rosa"
        ></Producto>
        <Producto
          image={tresLeches}
          name="Tres Leches"
          description1={"Es un bizcocho mojado con un cobertura de merengue"}
          alergenos={[
            { nombre: "Gluten", icono: "img" },
            { nombre: "Leche", icono: "img" },
          ]}
          color="rosa"
        ></Producto>
        <Producto
          color="amarillo"></Producto>
      </div>

      </div>

<div  className="flex flex-row gap-6 justify-center items-start py-10">
      <Audio
      nameAudio="Audio Navideño"
      mp3={audioMp3} 
      ogg={audioOgg}
       
      ></Audio>

    <Video 
    mp4={videoMp4}
    webm={videoWebm}
    titulo="Pastel de unicornio"
    usuario="Silpaza"
     className="w-80" 
    />
    </div>
    </div>
  );
}

export default Productos;
