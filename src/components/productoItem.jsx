import Alergenos from "./alergenos";

function Producto({ image, name, description1, alergenos, color }) {
    const colores = {
        amarillo: { backgroundColor: "#f8df7e" },
        rosa: { backgroundColor: "#ff6b81" },
        marron: { backgroundColor: "#b4764f" },
        verde: { backgroundColor: "#c2cf70" }
    };


    return (
        <div
            style={colores[color]}
            className="p-6 rounded-xl shadow-xl"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

                <img
                    src={image}
                    alt={name}
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                />

                <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {name}
                    </h3>

                    <p className="text-sm text-gray-700 leading-relaxed mb-4">
                        {description1}
                    </p>

                    <div className="flex items-center gap-3 flex-wrap">
                        <Alergenos lista={alergenos} />
                    </div>

                    <p className="text-yellow-700 font-bold mt-4">
                        Realiza tu pedido
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Producto;
