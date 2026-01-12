import Alergenos from "./alergenos";

function Producto({ image, name, description1, alergenos, colorFondo = "blanco" }) {

    // Definimos un enum de estilos según el fondo
    const estilos = {
        amarillo: {
            fondo: "#f8df7e",
            titulo: "#3b2f0b",
            descripcion: "#4b3b00",
            alergenos: "#d90429",
            pedido: "#007f5f"
        },
        rosa: {
            fondo: "#ff6b81",
            titulo: "#ffffff",
            descripcion: "#f1f1f1",
            alergenos: "#ffd166",
            pedido: "#000000"
        },
        marron: {
            fondo: "#b4764f",
            titulo: "#ffffff",
            descripcion: "#f5f5f5",
            alergenos: "#ffb703",
            pedido: "#000000"
        },
        verde: {
            fondo: "#c2cf70",
            titulo: "#1f2f0a",
            descripcion: "#3b4b0a",
            alergenos: "#d90429",
            pedido: "#003300"
        }
    };

    // Seleccionamos los estilos según el colorFondo
    const { fondo, titulo, descripcion, alergenos: colorAlergenos, pedido } = estilos[colorFondo] || estilos.blanco;

    return (
        <div
            style={{ backgroundColor: fondo }}
            className="p-6 rounded-xl transition-transform hover:scale-105"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

                <img
                    src={image}
                    alt={name}
                    className="w-full h-64 object-cover rounded-lg"
                />

                <div>
                    <h3 className="text-xl font-semibold mb-2" style={{ color: titulo }}>
                        {name}
                    </h3>

                    <p className="text-sm leading-relaxed mb-4" style={{ color: descripcion }}>
                        {description1}
                    </p>

                    <div className="flex items-center gap-3 flex-wrap" style={{ color: colorAlergenos }}>
                        <Alergenos lista={alergenos} />
                    </div>

                    <p className="font-bold mt-4" style={{ color: pedido }}>
                        Realiza tu pedido
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Producto;
