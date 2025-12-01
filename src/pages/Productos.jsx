import tarta from "../assets/img/tartaDeChocolate.webp";
import tresLeches from "../assets/img//tresLeches.webp";
import volteado from "../assets/img/volteadoDePiña.webp";
import Header from "../components/header.jsx";
import { useNavigate } from "react-router-dom";
import logoImage from '../assets/logoo.png'
import info from '../assets/info.png'
import Producto from "../components/producto.jsx"


function Productos() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userData");
    setUser(null);
    navigate("/");
  };


  return (

    <div>

      <Header
        logoImage={logoImage}
        info={info}
        onLogout={handleLogout} // <---- PASAMOS LA FUNCION
      />

      <div className="bg-amber-300 mt-10 mb-10 p-10">
        <h1>Productos</h1>
      </div>

      <div className="bg-green-300 mt-10 mb-10 p-10 space-y-6 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold text-center">Productos</h1>

        {/* Imagen simple */}
        <img
          src={tarta}
          alt="Tarta de Chocolate"
          loading="lazy"
          className="w-full max-w-md mx-auto rounded-lg shadow-md object-cover hover:scale-105 transition-transform duration-300"
        />

        {/* Imagen con picture */}
        <picture>
          <source srcSet={tresLeches} type="image/webp" />
          <img
            src={volteado}
            alt="Volteado de Piña"
            className="w-full max-w-md mx-auto rounded-lg shadow-md object-cover hover:scale-105 transition-transform duration-300"
          />
        </picture>

      </div>

      <div>
        {/*image, name, description1, alergenos */}
        <Producto
          image= {tarta}
          name="Tarta de Chocolate"
          description1={"Es una trata de chococolate con cobertura de trufa"}
          alergenenos={[
            { nombre: "Gluten", icono: "img" },
            { nombre: "Leche", icono: "img" }
          ]} 
        />

        <Producto ></Producto>
        <Producto ></Producto>
        <Producto ></Producto>
      </div>
    </div>

  );
}

export default Productos;
