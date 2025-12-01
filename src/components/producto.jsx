import Alergenos from "./alergenos";

function Producto({ image, name, description1, alergenos, color}) {
    return (
        <div className="bg-{color} p-6 rounded-xl shadow-xl max-w-3xl mx-auto">
            
            {/* Contenedor en columnas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

                {/* Imagen a la izquierda */}
                <img
                    src={image}
                    alt={name}
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                />

                {/* Texto a la derecha */}
                <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {name}
                    </h3>

                    <p className="text-sm text-gray-700 leading-relaxed mb-4">
                        {description1}
                    </p>

                    {/* Alergenos */}
                    <div className="flex items-center gap-3 flex-wrap">
                        <Alergenos lista={alergenos} />
                    </div>

                    {/* Acción o texto final */}
                    <p className="text-yellow-700 font-bold mt-4">
                        Realiza tu pedido
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Producto;
