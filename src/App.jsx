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
          </div>
          <div
            className={`nav-toggle ${isOpen && "open"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
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
        <div
          id="inicio"
          className="flex flex-col items-center justify-center h-screen"
        >
          {/* Titulo */}
          <h1 className="mb-4 text-6xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-gray-100">
            <p className="text-center">ARRIENDO DE</p>
            <p className="text-center">JUEGOS INFLABLES</p>
            <p className="text-center text-purple-600">DARINKA VLATKO</p>
          </h1>
          <div className="flex items-center justify-center">
            <img src="/img/logo.webp" alt="niños" className="h-full" />
          </div>
          <p className="mb-6 text-lg font-semibold lg:text-xl sm:px-16 xl:px-48 text-gray-200">
            Solo en Ciudad de Tocopilla.
          </p>
          <Contacto />
        </div>

        {/*Pagina de Servicios*/}
        <div
          id="servicios"
          className="flex flex-col lg:items-center justify-center min-h-screen p-8 md:p-16"
        >
          <h2 className="text-6xl mb-4 font-extrabold leading-none tracking-tightmd:text-5xl lg:text-6xl text-gray-100">
            Servicios
          </h2>
          <div
            className="p-4 mb-4 text-lg font-bold text-neutral-900 rounded-lg bg-gray-100"
            role="alert"
          >
            <span className="font-medium"></span>Todos los juegos incluyen:
            Lonas, alargador y transporte
          </div>
          <p className="mb-3 text-xl font-semibold text-yellow-400"></p>
          <Juegos></Juegos>
        </div>
      </main>
    </div>
  );
}

export default App;
