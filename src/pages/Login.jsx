import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import HeaderLogIn from "../components/headerLogIn";
import Footer from "../components/footer";
import logoImage from '../assets/logoo.png';


const Login = ({ setUser }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find(
      (u) => u.email === formData.email && u.password === formData.password
    );

    if (foundUser) {
      localStorage.setItem("userData", JSON.stringify(foundUser));
      setUser(foundUser);
      navigate("/home");
    } else {
      setError("Email o contraseña incorrectos");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* HEADER */}
      <HeaderLogIn logoImage={logoImage} />

      {/* CONTENEDOR CENTRADO */}
      <div className="flex flex-1 items-center justify-center px-4 bg-[#fdfaf3]">

        <div className="bg-[#FAEDCD] p-8 rounded-xl shadow-2xl w-full max-w-md border border-[#E6D7A9]">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 tracking-wide">
            Iniciar Sesión
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* EMAIL */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-[#A4133C]"
              />
            </div>

            {/* CONTRASEÑA */}
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Contraseña
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-[#A4133C]"
              />
            </div>

            {/* ERROR */}
            {error && (
              <p className="text-red-600 text-sm font-medium text-center">
                {error}
              </p>
            )}

            {/* BOTÓN */}
            <button
              type="submit"
              className="w-full bg-[#A4133C] text-white py-2 rounded-lg 
                         hover:bg-[#C72A55] transition-all shadow-md font-semibold"
            >
              Ingresar
            </button>
          </form>

          {/* OLVIDASTE CONTRASEÑA */}
          <a
            href="#"
            className="block mt-4 text-center text-gray-700 font-semibold hover:underline"
          >
            ¿Olvidaste tu contraseña?
          </a>

          {/* REGISTRO */}
          <p className="mt-4 text-center text-gray-700">
            ¿No tienes cuenta?{" "}
            <Link
              to="/register"
              className="text-[#A4133C] font-semibold hover:underline"
            >
              Regístrate aquí
            </Link>
          </p>
        </div>
      </div>

      {/* FOOTER */}
      <Footer logo={logoImage} />

    </div>
  );
};

export default Login;
