import Alergenos from "./alergenos"

function Producto({ image, name, description1, alergenos }) {
    return (
        <div className="px-4 py-6">
            <div className="text-center">
                <h3 className="text-xs text-gray-700">{name}</h3>
                <div> {/*Aqui quier poner la imagen al lado de la descrpción*/}
                    <img
                        src={image}
                        alt="Imagen 1"
                        className="w-[380px] h-[460px] bg-gray-400 object-cover mx-auto mb-2"
                    />
                    <p>{description1}</p>
                    <div id="alergeneos">
                        <Alergenos lista={alergenos}></Alergenos>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Producto;
