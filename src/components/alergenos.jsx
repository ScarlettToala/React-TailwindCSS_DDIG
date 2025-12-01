

function Alergenos({ lista }) {
    
  if (!lista || lista.length === 0) {
    return <p>No contiene alérgenos.</p>;
  }

  return (
    
    <ul>
      {lista.map((alergeno, index) => (
        <li key={index} style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <span>{alergeno.nombre}</span>
        </li>
      ))}
    </ul>
  );
}

export default Alergenos;
