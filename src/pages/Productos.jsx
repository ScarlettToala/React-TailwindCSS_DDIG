import { useNavigate, Link } from "react-router-dom";


function Productos({ user, setUser }) {
  const navigate = useNavigate();



  return (
    <>

      <div className="bg-amber-300 mt-10 mb-10 p-10"> {/* p-5 para padding interno */}
       <h1>Productos</h1>
      </div>
    </>
  )
}

export default Productos