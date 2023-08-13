import { useState, useEffect } from "react";
import "./App.css";
import "./styles.css";

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
          <div className="fixed-logo flex items-center">
            <img src="/img/logo.png" className="h-8 mr-3" alt="Darinka Vlatko Logo" />
          </div>
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
  <main >
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
      </div>

      <div id='inicio' className='flex flex-col items-center justify-center h-screen'>
      {/*Titulo*/}
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-orange-600">
          <p className='text-center'>Arriendo De Juegos Inflables</p><p className='text-center dark:text-purple-600'>Darinka Vlatko</p>
        </h1>
          <p className="mb-6 text-lg font-semibold text-gray-700 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-500">Disponible Solo en Ciudad de Tocopilla.</p>

      </div>

    {/*Pagina de Servicios*/}
      <div id='servicios' className='flex flex-col items-center justify-center min-h-screen p-8 md:p-16'>
        <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-blue-600">Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className=" border-gray-200 rounded-lg shadow dark:bg-gray-100 dark:border-gray-700">
              <img className="rounded-t-lg" src="/img/2.jpg" alt="Juego Inflable" />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-700">Toro Mecánico</h5>
                <p className="mb-3 text-2xl font-semibold text-gray-700 dark:text-gray-700">Arriendo: $100.000</p>
              </div>
            </div>
            <div className=" border-gray-200 rounded-lg shadow dark:bg-gray-100 dark:border-gray-700">
              <img className="rounded-t-lg" src="/img/3.jpg" alt="Juego Inflable" />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-700">Juego Inflable El Pirata</h5>
                <p className="mb-3 text-2xl font-semibold text-gray-700 dark:text-gray-700">Arriendo: $45.000</p>
              </div>
            </div>
            <div className=" border-gray-200 rounded-lg shadow dark:bg-gray-100 dark:border-gray-700">
              <img className="rounded-t-lg" src="/img/4.jpg" alt="Juego Inflable" />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-700">Juegos Inflables Pequeños</h5>
                <p className="mb-3 text-2xl font-semibold text-gray-700 dark:text-gray-700">Arriendo: $25.000 c/u</p>
              </div>
            </div>
            <div className=" border-gray-200 rounded-lg shadow dark:bg-gray-100 dark:border-gray-700">
              <img className="rounded-t-lg" src="/img/5.jpg" alt="Juego Inflable" />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-700">Juego Inflable La Ola</h5>
                <p className="mb-3 text-2xl font-semibold text-gray-700 dark:text-gray-700">Arriendo: $45.000</p>
              </div>
            </div>
            <div className=" border-gray-200 rounded-lg shadow dark:bg-gray-100 dark:border-gray-700">
              <img className="rounded-t-lg" src="/img/6.jpg" alt="Juego Inflable" />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-700">Juego Inflable El Tiburon</h5>
                <p className="mb-3 text-2xl font-semibold text-gray-700 dark:text-gray-700">Arriendo: $45.000</p>
              </div>
            </div>
            <div className=" border-gray-200 rounded-lg shadow dark:bg-gray-100 dark:border-gray-700">
              <img className="rounded-t-lg" src="/img/7.jpg" alt="Juego Inflable" />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-700">Juego Inflable El Barco</h5>
                <p className="mb-3 text-2xl font-semibold text-gray-700 dark:text-gray-700">Arriendo: $45.000</p>
              </div>
            </div>
            <div className=" border-gray-200 rounded-lg shadow dark:bg-gray-100 dark:border-gray-700">
              <img className="rounded-t-lg" src="/img/8.jpg" alt="Juego Inflable" />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-700">Juego Inflable El Avión</h5>
                <p className="mb-3 text-2xl font-semibold text-gray-700 dark:text-gray-700">Arriendo: $45.000</p>
              </div>
            </div>
            <div className=" border-gray-200 rounded-lg shadow dark:bg-gray-100 dark:border-gray-700">
              <img className="rounded-t-lg" src="/img/9.jpg" alt="Juego Inflable" />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-700">Juego Inflable El Castillo</h5>
                <p className="mb-3 text-2xl font-semibold text-gray-700 dark:text-gray-700">Arriendo: $45.000</p>
              </div>
            </div>
          </div>
      </div>

    {/*Pagina de Contacto*/}
    <div className="flex flex-col items-center justify-center"   style={{ minHeight: '70vh' }}>
      <h3 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-yellow-600 text-center">
        Contacto
      </h3>
      <div className="grid grid-cols-2 text-center">
        <div id="contacto" className='flex flex-col text-2xl items-center justify-center p-8 md:p-16 '>
          <a href="https://wa.me/56952760026"><img className="mt-2" src="/img/whatsapp.png" alt="Numero de WhatsApp" /></a>
          <p className="mt-1 font-semibold ">+56 952760026</p>
        </div>
        <div className='flex flex-col text-2xl items-center justify-center p-8 md:p-16 '>
          <a href="https://www.facebook.com/darinkaslavia.vlatkoquinones"><img className="mt-2" src="/img/facebook.png" alt="Perfil de Facebook" /></a>
          <p className="mt-1 font-semibold ">Darinka Vlatko Quiñones</p>
        </div>
      </div>
    </div>
  </main>
</div>


  
  )
}

export default App
