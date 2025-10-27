import React from "react";
import Formulario from "../components/loginForm.jsx"

function Login() {
  return (
    <div>
      <header>
      <h1>Login</h1>
      <a href="/">Volver al Home</a>
      </header>

      <div>
        <Formulario/>
      </div>

    </div>
    
    
  );
}
export default Login;
