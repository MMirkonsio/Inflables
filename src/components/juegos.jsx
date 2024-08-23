import { useState, useEffect } from "react";
import "../assets/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { FiShoppingCart, FiX, FiDownload  } from "react-icons/fi";
import { HiPencilSquare } from "react-icons/hi2";
import html2canvas from "html2canvas";

function Juegos() {
  const [modalImages, setModalImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isEditingList, setIsEditingList] = useState(false);
  const [isCapturing, setIsCapturing] = useState(false);

  const openModal = (images, index) => {
    setModalImages(images);
    setCurrentImageIndex(index);
  };

  const closeModal = () => {
    setModalImages([]);
    setCurrentImageIndex(null);
  };

  const openCartModal = () => {
    setIsCartModalOpen(true);
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false);
    setIsEditingList(false); // Reset editing mode when closing the modal
  };

  const addToCart = (juego) => {
    const isAlreadyInCart = cart.some((item) => item.title === juego.title);
    if (isAlreadyInCart) {
      setCart(cart.filter((item) => item.title !== juego.title));
    } else {
      setCart([...cart, juego]);
    }
  };

  const removeFromCart = (title) => {
    setCart(cart.filter((item) => item.title !== title));
  };

  useEffect(() => {
    if (cart.length === 0) {
      setIsCartModalOpen(false);
      setIsEditingList(false); // Asegúrate de también resetear el modo de edición si es necesario
    }
  }, [cart]);

  const shareList = async () => {
    setIsCapturing(true);
  
    // Oculta los botones temporalmente
    const buttons = document.querySelectorAll(".hide-during-capture");
    buttons.forEach((btn) => {
      btn.style.display = "none";
    });
  
    // Aumenta el tamaño del contenedor
    const element = document.getElementById("cart-list");
    if (element) {
      const originalStyle = element.style.cssText;
      element.style.width = "100%"; // Ajusta según sea necesario
      element.style.height = "100%";
  
      const canvas = await html2canvas(element, { scale: 2 });
      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = "cart-list.png";
      link.click();
  
      // Restaura el estilo original
      element.style.cssText = originalStyle;
    }
  
    // Muestra los botones nuevamente
    buttons.forEach((btn) => {
      btn.style.display = "";
    });
  
    setIsCapturing(false);
  };
  

  const juegosData = [
    {
      title: "Toro Mecánico",
      price: "150.000",
      images: [
        "/img/2.webp",
        "/img/2.1.webp",
        "/img/2.2.webp",
        "/img/2.3.webp",
        "/img/2.4.webp",
      ],
    },
    {
      title: "Juego Inflable El Pirata",
      price: "50.000",
      images: ["/img/3.webp", "/img/3.1.webp", "/img/3.2.webp"],
    },
    {
      title: "Juegos Inflables Pequeños",
      price: "30.000 c/u",
      images: ["/img/4.webp", "/img/4.1.webp"],
    },
    {
      title: "Juego Inflable La Ola",
      price: "60.000",
      images: ["/img/5.webp", "/img/5.1.webp", "/img/5.2.webp"],
    },
    {
      title: "Juego Inflable El Tiburón",
      price: "60.000",
      images: ["/img/6.webp", "/img/6.1.webp", "/img/6.2.webp"],
    },
    {
      title: "Juego Inflable El Barco",
      price: "60.000",
      images: ["/img/7.webp", "/img/7.1.webp", "/img/7.2.webp"],
    },
    {
      title: "Juego Inflable El Avión",
      price: "60.000",
      images: ["/img/8.webp", "/img/8.1.webp", "/img/8.2.webp"],
    },
    {
      title: "Juego Inflable El Castillo",
      price: "55.000",
      images: ["/img/9.webp", "/img/9.1.webp", "/img/9.2.webp"],
    },
    {
      title: "Juego Inflable Aro",
      price: "55.000",
      images: ["/img/10.webp", "/img/10.1.webp", "/img/10.2.webp"],
    },
    {
      title: "Juego Inflable Arabe",
      price: "55.000",
      images: ["/img/11.webp", "/img/11.1.webp"],
    },
    {
      title: "Juego Inflable Vaquero",
      price: "60.000",
      images: ["/img/12.webp", "/img/12.1.webp", "/img/12.3.webp"],
    },
  ];

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {juegosData.map((juego, juegoIndex) => (
          <div key={juegoIndex} className="rounded-lg shadow bg-gray-100">
            <Swiper
              pagination={{ type: "fraction" }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {juego.images.map((image, imageIndex) => (
                <SwiperSlide key={imageIndex}>
                  <img
                    src={image}
                    alt={juego.title}
                    onClick={() => openModal(juego.images, imageIndex)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-neutral-900">
                {juego.title}
              </h5>
              <p className="mb-3 text-2xl font-bold text-neutral-900">
                Arriendo: ${juego.price}
              </p>
              <button
                onClick={() => addToCart(juego)}
                className={`p-2 rounded-xl text-sm font-bold ${
                  cart.some((item) => item.title === juego.title)
                    ? "bg-red-500"
                    : "bg-green-500"
                } text-neutral-100`}
              >
                {cart.some((item) => item.title === juego.title)
                  ? "Quitar de la lista"
                  : "Añadir a la lista"}
              </button>
            </div>
          </div>
        ))}

        {modalImages.length > 0 && currentImageIndex !== null && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <Swiper
                initialSlide={currentImageIndex}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="modal-swiper"
              >
                {modalImages.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt="Juego Inflable"
                      className="modal-image"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <span className="close" onClick={closeModal}>
                &times;
              </span>
            </div>
          </div>
        )}

        {isCartModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={closeCartModal}
          >
            <div
              className="relative bg-white p-6 rounded-lg shadow-lg z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div id="cart-list">
                <ul className="p-2">
                  <h2 className="text-2xl text-center font-bold mb-4">
                    Lista de Juegos
                  </h2>
                  {cart.map((item, index) => (
                    <li
                      key={index}
                      className="mb-2 bg-neutral-100 p-2 rounded-lg font-semibold relative w-[350px]"
                    >
                      {item.title} - ${item.price}
                      {isEditingList && (
                        <button
                          onClick={() => removeFromCart(item.title)}
                          className="absolute top-1 right-0 p-1 text-red-500"
                        >
                          <FiX className="h-6 w-6" />
                        </button>
                      )}
                    </li>
                  ))}
                  <div className="text-xl font-bold">
                    Total: $
                    {cart
                      .reduce(
                        (total, item) =>
                          total + parseFloat(item.price.replace(/\./g, "")),
                        0
                      )
                      .toLocaleString("es-ES")}
                  </div>
                </ul>
              </div>

              <div className="flex mt-4 gap-2">
              <button
                  onClick={shareList}
                  className={`p-2 rounded-xl text-sm flex items-center font-bold bg-blue-500 text-neutral-100 ${
                    isCapturing ? "hide-during-capture" : ""
                  }`}
                ><FiDownload className="mr-2"/>
                  Descargar lista
                </button>
                <button
                  onClick={() => setIsEditingList(!isEditingList)}
                  className={`p-2 rounded-xl text-sm font-bold flex items-center ${
                    isCapturing ? "hide-during-capture" : ""
                  } ${
                    isEditingList
                      ? "bg-neutral-500 text-neutral-100"
                      : "bg-neutral-900 text-neutral-100"
                  }`}
                >
                  <HiPencilSquare className="mr-2" />
                  {isEditingList ? "Finalizar edición" : "Editar lista"}
                </button>

                <button
                  onClick={closeCartModal}
                  className={`p-2 rounded-xl text-sm font-bold bg-red-500 text-neutral-100 ${
                    isCapturing ? "hide-during-capture" : ""
                  }`}
                >
                  Cerrar
                </button>

               
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Icono del carrito */}
      {cart.length > 0 && (
        <button
          onClick={openCartModal}
          className="fixed bottom-4 z-50 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center"
        >
          <FiShoppingCart className="h-8 w-8" />
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs px-2 py-1">
            {cart.length}
          </span>
        </button>
      )}
    </div>
  );
}

export default Juegos;
