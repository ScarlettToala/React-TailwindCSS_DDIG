// 📁 src/components/Register.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import HeaderLogIn from "../components/headerLogIn";
import Footer from "../components/footer";
import logoImage from '../assets/logoo.webp';

const countries = [
    "Argentina", "Bolivia", "Brasil", "Chile", "Colombia",
    "Ecuador", "Guyana", "Paraguay", "Perú", "Surinam",
    "Uruguay", "Venezuela", "España"
];

const Register = ({ setUser }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        country: 'España', // <-- Esto es un valor por defecto
        phone: '',
        photo: null
    });

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' }); // Limpiar error al escribir
    };

    const handlePhotoChange = (e) => {
        setFormData({ ...formData, photo: e.target.files[0] });
    };

    // Validación por campo para onBlur
    const validateField = (name, value) => {
        let error = '';
        if (name === 'email' && !value.includes('@')) error = 'Debe ingresar un email válido';
        if (name === 'password' && value.length < 6) error = 'La contraseña debe tener al menos 6 caracteres';
        if (name === 'confirmPassword' && value !== formData.password) error = 'Las contraseñas no coinciden';
        if (name === 'name' && !value.trim()) error = 'El nombre es obligatorio';
        if (name === 'country' && !value) error = 'Seleccione un país';
        if (name === 'phone' && !value.match(/^[0-9]{7,15}$/)) error = 'Ingrese un número válido (solo dígitos)';
        return error;
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        const error = validateField(name, value);
        setErrors({ ...errors, [name]: error });
    };

    const validateForm = () => {
        const newErrors = {};
        Object.keys(formData).forEach(key => {
            const error = validateField(key, formData[key]);
            if (error) newErrors[key] = error;
        });
        return newErrors;
    };

    const handleRegister = (e) => {
        e.preventDefault();

        // Validar el formulario antes de guardar
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setSuccess(false);
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];

        if (users.some(u => u.email === formData.email)) {
            alert("Usuario ya existe");
            return;
        }

        // Guardar solo los datos importantes
        const newUser = {
            email: formData.email,
            password: formData.password,
            name: formData.name,
            country: formData.country,
            phone: formData.phone,
            photo: formData.photo ? URL.createObjectURL(formData.photo) : null
        };

        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("userData", JSON.stringify(newUser));
        setUser(newUser);
        setSuccess(true);
        navigate("/home");
    };


    return (
        <>
            {/* HEADER */}
            <HeaderLogIn logoImage={logoImage} className="m-4" />
            <div className="flex flex-col items-center justify-start min-h-screen pt-5 pb-8 px-4 overflow-auto">
                <div className="bg-[#FAEDCD] p-8 rounded-lg shadow-lg w-full max-w-lg border-[#E6D7A9]">
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Registro</h2>
                    <form onSubmit={handleRegister} className="space-y-4">


                        <label className="block text-gray-700 font-medium mb-1" htmlFor="name">Nombre:</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Escriba su nombre"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            className="w-full px-4 py-2 border bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A4133C]"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}

                        <label className="block text-gray-700 font-medium mb-1" htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Escriba su correo"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            className="w-full px-4 py-2 border bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A4133C]"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}

                        <label className="block text-gray-700 font-medium mb-1" htmlFor="password">Contraseña:</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Escriba su contraseña"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            className="w-full px-4 py-2 border bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A4133C]"
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}

                        <label className="block text-gray-700 font-medium mb-1" htmlFor="confirmPassword">Confirmar Contraseña:</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirme su contraseña"
                            id="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            className="w-full px-4 py-2 border bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A4133C]"
                        />
                        {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}

                        <label className="block text-gray-700 font-medium mb-1" htmlFor="country">País:</label>
                        <select
                            name="country"
                            id="country"
                            placeholder="Seleccione su país"
                            value={formData.country}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            className="w-full px-4 py-2 border bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A4133C]"
                        >
                            <option value="">Seleccione un país</option>
                            {countries.map(country => (
                                <option key={country} value={country}>{country}</option>
                            ))}
                        </select>
                        {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}

                        <label className="block text-gray-700 font-medium mb-1" htmlFor="phone">Teléfono:</label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Escriba su número de teléfono"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            maxLength={9}
                            required
                            className="w-full px-4 py-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A4133C]"
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}


                        <label className="block text-gray-700 font-medium mb-2" htmlFor="photo">
                            Foto
                        </label>

                        <div className="flex items-center gap-3">

                            {/* Botón personalizado */}
                            <label
                                htmlFor="photo"
                                className="cursor-pointer bg-[#F480AD] hover:bg-[#e66b9a] text-black px-4 py-2 rounded-lg shadow transition font-medium"
                            >
                                📁 Seleccionar archivo
                            </label>

                            {/* Texto dinámico */}
                            <span className="text-sm text-gray-600">
                                {formData.photo ? formData.photo.name : "Ningún archivo seleccionado"}
                            </span>

                            {/* Input oculto */}
                            <input
                                type="file"
                                name="photo"
                                id="photo"
                                accept="image/*"
                                onChange={handlePhotoChange}
                                className="hidden"
                            />

                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#A4133C] text-white py-2 rounded-lg 
                         hover:bg-[#C72A55] transition-all shadow-md font-semibold"
                        >
                            Registrarse
                        </button>

                        {success && <p className="text-green-600 text-center mt-2">¡Registro exitoso! </p>}

                        <p className="mt-4 text-center text-[#770e2b] ">
                            ¿Ya tienes cuenta?{" "}
                            <Link to="/login" className="text-[#770e2b] font-semibold hover:underline">
                                Inicia sesión
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
             {/* FOOTER */}
      <Footer logo={logoImage} />
        </>
    );
};

export default Register;
