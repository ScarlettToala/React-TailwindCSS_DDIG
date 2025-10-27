import React from "react";

function loginForm({type}) {
  return (

    <div className="relative w-full h-[500px] overflow-hidden justify-between px-5 py-5">
    <form action="POST">
      <label for="email">Correo</label>
      <input type="text" required />

      <label for="contrasenya">Contraseña</label>
      <input type="text" required />

     <button type="submit">Iniciar Sesión</button>
    </form>
    <li><a href="#">Has olvidado la cntraseña?</a></li>
    <li>No tengo cuenta.<a href="#">Registrarse</a></li>
    </div>
  );
}

export default loginForm;
