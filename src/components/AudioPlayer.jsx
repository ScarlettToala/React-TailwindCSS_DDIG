function Audio({ mp3, nameAudio, ogg }) {
    return (
        <div className="p-6 max-w-sm mx-auto bg-gray-800 rounded-xl shadow-2xl relative text-white font-mono w-80">
            {/* Título */}
            <h3 className="text-center text-lg font-bold mb-4">{nameAudio}</h3>

            {/* Carcasa del cassette */}
            <div className="bg-gray-900 rounded-lg p-4 relative border-4 border-gray-700">
                {/* Ventanas de la cinta */}
                <div className="flex justify-between mb-4">
                    <div className="w-12 h-12 bg-gray-700 rounded-full border-2 border-gray-500 flex items-center justify-center">
                        <div className="w-6 h-6 bg-gray-400 rounded-full animate-spin-slow"></div>
                    </div>
                    <div className="w-12 h-12 bg-gray-700 rounded-full border-2 border-gray-500 flex items-center justify-center">
                        <div className="w-6 h-6 bg-gray-400 rounded-full animate-spin-slow"></div>
                    </div>
                </div>

                {/* Controles de audio */}
                <audio
                    controls
                    className="w-full bg-gray-800 rounded-md outline-none"
                >
                    <source src={mp3} type="audio/mp3" />
                    <source src={ogg} type="audio/ogg" />
                    Tu navegador no soporta audio
                </audio>
            </div>

            {/* Etiqueta inferior */}
            <div className="mt-3 text-center text-sm text-gray-400">
                🎵 Reproductor Retro
            </div>
        </div>
    );
}

export default Audio;
