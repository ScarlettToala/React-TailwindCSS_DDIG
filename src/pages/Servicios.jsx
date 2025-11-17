import { useNavigate, Link } from "react-router-dom";


function Servicios({ user, setUser }) {
  const navigate = useNavigate();



  return (
    <>

      <div className="bg-green-600 mt-10 mb-10 p-10"> {/* p-5 para padding interno */}
       <h1>Servicios</h1>
      </div>
    </>
  )
}

export default Servicios