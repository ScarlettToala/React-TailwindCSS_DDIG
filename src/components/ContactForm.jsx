import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        mensaje: "",
    });

    const [enviado, setEnviado] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { nombre, email, mensaje } = formData;

        if (!nombre || !email || !mensaje) {
            alert("Por favor completa todos los campos");
            return;
        }

        console.log("Datos enviados:", formData);

        setEnviado(true);

        // Limpiar formulario
        setFormData({
            nombre: "",
            email: "",
            mensaje: "",
        });
    };

    return (
        <div className="max-w-md mx-auto p-6  rounded-xl shadow-md bg-white">
            
            <h2 className="text-2xl font-bold mb-4 text-pink-600">
                Contáctanos
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="text"
                    name="nombre"
                    placeholder="Tu nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    aria-required="true"
                    className="border p-2 rounded"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Tu email"
                    value={formData.email}
                    onChange={handleChange}
                    aria-required="true"
                    className="border p-2 rounded"
                />

                <textarea
                    name="mensaje"
                    placeholder="Tu mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    aria-required="true"
                    className="border p-2 rounded resize-none"
                    rows="4"
                />

                <button
                    type="submit"
                    className="bg-pink-600 text-white py-2 rounded
                               hover:bg-pink-700 transition
                               active:scale-95"
                >
                    Enviar
                </button>
            </form>

            {enviado && (
                <p className="text-green-600 mt-4 text-center">
                    Mensaje enviado correctamente
                </p>
            )}
        </div>
    );
}
