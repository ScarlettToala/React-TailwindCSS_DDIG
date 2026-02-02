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

  const handleLogout = () => {
    localStorage.removeItem("userData");
    setUser(null);
    navigate("/");
  };

  return (
    <>

      <h1 class="absolute w-px h-px overflow-hidden clip-[rect(0,0,0,0)] whitespace-nowrap border-0"> Silpaza</h1>
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
