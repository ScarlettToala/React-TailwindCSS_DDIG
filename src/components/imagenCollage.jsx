function ImagenCollage({ image1, image2, image3, name1, name2, name3 }) {
  return (
    <div className="px-4 py-6">
      <h2 className="font-cursive font-bold italic text-2xl mb-10">
        Productos Destacados
      </h2>

      <div className="flex gap-6 justify-around">
        <div className="text-center">
          <img
            src={image1}
            alt="Imagen 1"
            className="w-[380px] h-[460px] bg-gray-400 object-cover mx-auto mb-2"
          />
          <p className="text-xs text-gray-700">{name1}</p>
        </div>

        <div className="text-center">
          <img
            src={image2}
            alt="Imagen 2"
            className="w-[380px] h-[460px] bg-gray-400 object-cover mx-auto mb-2"
          />
          <p className="text-xs text-gray-700">{name2}</p>
        </div>

        <div className="text-center">
          <img
            src={image3}
            alt="Imagen 3"
            className="w-[380px] h-[460px] bg-gray-400 object-cover mx-auto mb-2"
          />
          <p className="text-xs text-gray-700">{name3}</p>
        </div>
      </div>

      <div className="text-right mt-3 italic font-semibold cursor-pointer text-black">
        Ver más
      </div>
    </div>
  );
}

export default ImagenCollage;
