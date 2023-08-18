import { useState, useEffect } from "react";
import "./styles.css";
import Juegos from "./juegos";
import Contacto from "./contacto";


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarBackgroundActive, setNavbarBackgroundActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavbarBackgroundActive(true);
      } else {
        setNavbarBackgroundActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);




  return (
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div className="navbar-container">
        <div className={`Navbar ${navbarBackgroundActive ? "active" : ""}`}>

          <div className={`nav-items ${isOpen && "open"}`}>
            <a href="#inicio">Inicio</a>
            <a href="#servicios">Servicios</a>
            <a href="#contacto">Contacto</a>
          </div>
          <div 
            className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
            <div className="bar"></div>
          </div>
        </div>
    </div>
    <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
  <main>
      <div id='inicio' className='flex flex-col items-center justify-center h-screen'>
      {/*Titulo*/}
      

        <h1 className="mb-4 text-6xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-gray-100">
          <p className='text-center'>ARRIENDO DE JUEGOS INFLABLES</p><p className='text-center text-purple-600'>Darinka Vlatko</p>
        </h1>
          <div className="flex items-center justify-center">
            <img src="/img/logo.webp" alt="niños" className="h-full" />
          </div>
          <p className="mb-6 text-lg font-semibold lg:text-xl sm:px-16 xl:px-48 text-gray-200">Solo en Ciudad de Tocopilla.</p>
          
      </div>

    {/*Pagina de Servicios*/}
      <div id='servicios' className='flex flex-col items-center justify-center min-h-screen p-8 md:p-16'>
        <h2 className="mb-4 text-6xl font-extrabold leading-none tracking-tightmd:text-5xl lg:text-6xl text-gray-100">Servicios</h2>
          <Juegos></Juegos>
      </div>

    {/*Pagina de Contacto*/}
      <div id="contacto" className="w-full p-4 text-center" style={{ height: '35vh' }}>
        <h5 className="mb-2 text-6xl font-bold text-gray-100">Contacto</h5>
        <p className="mb-5 text-base font-semibold sm:text-lg text-gray-300">Disponible Para Todo Tipo De Eventos.</p>
          <Contacto></Contacto>
    </div>
  </main>
</div>


  
  )
}

export default App
