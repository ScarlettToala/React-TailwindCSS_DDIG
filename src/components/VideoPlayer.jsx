function Video({ mp4, webm, titulo, usuario = "usuario_demo" }) {
    return (
        <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden font-sans w-80">
            {/* Header estilo Instagram */}
            <div className="flex items-center p-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <span className="font-semibold text-gray-800">{usuario}</span>
            </div>

            {/* Video */}
            <div className="bg-black">
                <video
                    controls
                    className="w-full aspect-square object-cover"
                    playsInline
                >
                    <source src={mp4} type="video/mp4" />
                    <source src={webm} type="video/webm" />
                    <track src="subtitols.vtt" kind="subtitles" srclang="ca" label="Català" />
                    Tu navegador no soporta vídeo.
                </video>
            </div>

            {/* Título / descripción */}
            <div className="p-3">
                <p className="text-gray-800 text-sm mb-2"><span className="font-semibold">{usuario}</span> {titulo}</p>

                {/* Botones estilo IG */}
                <div className="flex space-x-4 text-gray-600">
                    <button>❤️ Me gusta</button>
                    <button>💬 Comentar</button>
                    <button>🔗 Compartir</button>
                </div>
            </div>
        </div>
    );
}

export default Video;
