import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 to-pink-500 px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
                Bienvenido a mi App
            </h1>
            <p className="text-white text-lg md:text-xl mb-8 text-center">
                Por favor, inicia sesión o regístrate para continuar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/login">
                    <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">
                        Iniciar Sesión
                    </button>
                </Link>
                <Link to="/register">
                    <button className="px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition">
                        Registrarse
                    </button>
                </Link>
            </div>
        </div>
    );
}
