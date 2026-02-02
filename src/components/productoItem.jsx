import Alergenos from "./alergenos";

function Producto({ image, name, description1, alergenos, colorFondo = "blanco" }) {

    // Definimos un enum de estilos según el fondo
    const estilos = {
        amarillo: {
            fondo: "#f8df7e",
            titulo: "#3b2f0b",
            FontColor: "#4b3b00",
            alergenos: "#7C1513",
            pedido: "#014370"
        },
        rosa: {
            fondo: "#A2064C",
            titulo: "#ffffff",
            FontColor: "#f1f1f1",
            alergenos: "#F8F4ED",
            pedido: "#DDFFDC"
        },
        marron: {
            fondo: "#7F411A",
            titulo: "#ffffff",
            FontColor: "#f5f5f5",
            alergenos: "#FDF3D8",
            pedido: "#000000"
        },
        verde: {
            fondo: "#c2cf70",
            titulo: "#1f2f0a",
            FontColor: "#3b4b0a",
            alergenos: "#4B044E",
            pedido: "#003300"
        }
    };

    // Seleccionamos los estilos según el colorFondo
    const { fondo, titulo, FontColor, alt ,alergenos: colorAlergenos, pedido } = estilos[colorFondo] || estilos.blanco;

    return (
        <div
            style={{ backgroundColor: fondo }}
            className="p-6 rounded-xl transition-transform hover:scale-105"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

                <img
                    src={image}
                    alt={alt || name}
                    className="w-full h-64 object-cover rounded-lg"
                />

                <div>
                    <h3 className="text-xl font-semibold mb-2" style={{ color: titulo }}>
                        {name}
                    </h3>

                    <p className="text-sm leading-relaxed mb-4" style={{ color: FontColor }}>
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
