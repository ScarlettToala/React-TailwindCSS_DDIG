import { useNavigate, Link } from "react-router-dom";


function Servicios({ user, setUser }) {
  const navigate = useNavigate();

  return (
    <>
      <Link
        to="/welcome"
        className="relative inline-block px-5 py-2 rounded-lg bg-[#F480AD] text-black font-[Open_Sans] text-lg transition-all duration-300"
      >
        Welcome
      </Link>

      <div className="bg-green-600 mt-10 mb-10 p-10"> {/* p-5 para padding interno */}
        <h1>Servicios</h1>
      </div>
    </>
  )
}

export default Servicios