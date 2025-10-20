import { useState } from 'react'
import './App.css'
import Footer from './components/footer.jsx'
import ImagenCollage from './components/imagenCollage.jsx'
import Header from './components/header.jsx'
import FraseImagen from './components/fraseImagen.jsx'

import logoImage from './assets/logoo.png'
import login from './assets/login.png'
import info from './assets/info.png'
import tarta2 from './assets/tarta2.jpg'
import img1 from './assets/tarta.jpg'
import img2 from './assets/tarta.jpg'
import img3 from './assets/tarta.jpg'


function App() {

  return (
    <>

      <div>
        <Header
          logoImage={logoImage}
          login={login}
          info={info}
        />
      </div>

      <div>
        <FraseImagen
        backgroundImage={tarta2}
        frase="🌸 Amor y paciencia 🌸"
        />
      </div>

      <div>
        <ImagenCollage
          image1={img1}
          name1='Mi primera tarta'
          image2={img2}
          name2='Mi segunda tarta'
          image3={img3}
          name3='Mi tercera tarta'
        />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default App
