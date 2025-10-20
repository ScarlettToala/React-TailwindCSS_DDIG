function ImagenCollage({ image1, image2, image3, name1, name2, name3 }) {
    return (
        <>
        {/*Contenedor de color*/}
            <div className="collage-container">
                
                    <div className="image-item">
                        <img src={image1} alt="Imagen 1" />
                        <p>{name1}</p>
                    </div>

                    <div className="image-item">
                        <img src={image2} alt="Imagen 2" />
                        <p>{name2}</p>
                    </div>

                    <div className="image-item">
                        <img src={image3} alt="Imagen 3" />
                        <p>{name3}</p>
                    </div>
                
            </div>
        </>
    );
}

export default ImagenCollage;
