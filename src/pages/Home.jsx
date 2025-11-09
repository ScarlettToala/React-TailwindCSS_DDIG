import { useState } from 'react'
import Footer from '../components/footer.jsx'
import ImagenCollage from '../components/imagenCollage.jsx'
import Header from '../components/header.jsx'
import FraseImagen from '../components/fraseImagen.jsx'
import { useNavigate } from "react-router-dom"; // faltaba este import

import logoImage from '../assets/logoo.png'
import login from '../assets/login.png'
import info from '../assets/info.png'
import tarta2 from '../assets/tarta2.jpg'
import img1 from '../assets/tarta.jpg'
import img2 from '../assets/tarta.jpg'
import img3 from '../assets/tarta.jpg'
import galletas from '../assets/galletas.jpg'
import Destacado from '../components/destacarproducto.jsx'


function Home({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userData");
    setUser(null);
    navigate("/");
  };

  return (
    <>

      <div>
        <Header
          logoImage={logoImage}
          info={info}
          onLogout={handleLogout} // <---- PASAMOS LA FUNCION
        />
      </div>

      <div className="bg-amber-300 mt-10 mb-10 p-10"> {/* p-5 para padding interno */}
        <FraseImagen
          backgroundImage={tarta2}
          frase=" La felicidad no brota de la razón, sino de la imaginación (Immanuel Kant)."
          className="mt-24 md:mt-32"
        />

      </div>
      <div>
        <ImagenCollage
          image1={img1}
          name1='Mi primera tarta'
          image2={img2}
          name2='Mi segunda tarta'
          image3={img3}
          name3='Mi tercera tarta'
        />
      </div>

      <div>
        <Destacado
          backgroundImage={galletas}
          frase="Pequeños detalles hacen grandes diferencias"
        />
      </div>
      <div>
        <Footer
          logo={logoImage}
        />
      </div>
    </>
  )
}

export default Home
