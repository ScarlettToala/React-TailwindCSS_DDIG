import React from "react";

function FraseImagen({backgroundImage, backgroundVideo, frase}) {
    return (
        <>
            <div>
                {/*Fondo: puede ser imagen o video*/}
                {backgroundVideo ? (
                    <video
                        src={backgroundVideo}
                        autoPlay
                        loop
                        muted
                    />
                ) : backgroundImage ? (
                    <img
                        src={backgroundImage}
                        alt="Fondo"
                    />
                ) : null}

                {/*Capa de oscurecimiento*/}
                <div></div>

                {/*Frase centrada*/}
                <div>
                    <p>
                        {frase}
                    </p>
                </div>
            </div>
        </>
    );
}

export default FraseImagen;


