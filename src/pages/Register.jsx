// 📁 src/components/Register.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

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
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-teal-500">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Registro</h2>
                <form onSubmit={handleRegister} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Contraseña:</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Confirmar Contraseña:</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                        {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Nombre:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">País:</label>
                        <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                        >
                            <option value="">Seleccione un país</option>
                            {countries.map(country => (
                                <option key={country} value={country}>{country}</option>
                            ))}
                        </select>
                        {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Teléfono:</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            maxLength={9}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Foto:</label>
                        <input
                            type="file"
                            name="photo"
                            accept="image/*"
                            onChange={handlePhotoChange}
                            required
                            className="w-full"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
                    >
                        Registrarse
                    </button>

                    {success && <p className="text-green-600 text-center mt-2">¡Registro exitoso! ✅</p>}

                    <p className="mt-4 text-center text-gray-600">
                        ¿Ya tienes cuenta?{" "}
                        <Link to="/login" className="text-green-500 font-semibold hover:underline">
                            Inicia sesión
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;
