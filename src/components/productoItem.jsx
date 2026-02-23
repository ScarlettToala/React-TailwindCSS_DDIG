import React from "react";
import Alergenos from "./alergenos";
import '../styles/Producto.scss';
import '../styles/ProductoColores.scss';

function Producto({ image, name, description1, alergenos, colorFondo = "amarillo" }) {
  return (
    <div className={`producto producto-${colorFondo}`}>
      <div className="producto-grid">
        <img src={image} alt={name} />
        <div>
          <h3>{name}</h3>
          <p>{description1}</p>
          <div className="alergenos">
            <Alergenos lista={alergenos} />
          </div>
          <p className="pedido">Realiza tu pedido</p>
        </div>
      </div>
    </div>
  );
}

export default Producto;