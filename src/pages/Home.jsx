import { useState, useEffect } from "react";
import Footer from '../components/footer.jsx'
import ImagenCollage from '../components/imagenCollage.jsx'
import Header from '../components/header.jsx'
import FraseImagen from '../components/fraseImagen.jsx'
import { useNavigate } from "react-router-dom";

import logoImage from '../assets/logoo.webp'

import info from '../assets/info.webp'
import tarta2 from '../assets/tarta2.webp'
import img1 from '../assets/tarta.webp'
import img2 from '../assets/tarta.webp'
import img3 from '../assets/tarta.webp'
import galletas from '../assets/galletas.webp'
import Destacado from '../components/destacarproducto.jsx'


function Home({ user, setUser }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    setUser(null);
    navigate("/");
  };

  const images = [logoImage, info, tarta2, img1, img2, img3, galletas];

  useEffect(() => {
    let loadedCount = 0;
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount += 1;
        if (loadedCount === images.length) {
          setLoading(false); // todas las imágenes cargadas
        }
      };
    });
  }, []);
   if (loading) {
    // Esto se mostrará mientras se cargan las imágenes
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-bold">Cargando contenido...</p>
      </div>
    );
  }

  return (
    <>

      <h1 class="absolute w-px h-px overflow-hidden clip-[rect(0,0,0,0)] whitespace-nowrap border-0"> Silpaza</h1>
      
        <Header
          logoImage={logoImage}
          info={info}
          onLogout={handleLogout} // <---- PASAMOS LA FUNCION
          user={user}
        />
     

      <div className="bg-amber-300 mt-10 mb-10 p-10"> {/* p-5 para padding interno */}
        <FraseImagen
          backgroundImage={tarta2}
          frase=" La felicidad no brota de la razón, sino de la imaginación (Immanuel Kant)."
          className="mt-24 md:mt-32"
        />

      </div>

        <ImagenCollage
          image1={img1}
          name1='Mi primera tarta'
          image2={img2}
          name2='Mi segunda tarta'
          image3={img3}
          name3='Mi tercera tarta'
        />


        <Destacado
          backgroundImage={galletas}
          frase="Pequeños detalles hacen grandes diferencias"
        />

        <Footer
          logo={logoImage}
        />
      
    </>
  )
}

export default Home
