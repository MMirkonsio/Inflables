import { useState } from "react";
import "./styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

function Juegos() {
  const [modalImages, setModalImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);

  const openModal = (images, index) => {
    setModalImages(images);
    setCurrentImageIndex(index);
  };

  const closeModal = () => {
    setModalImages([]);
    setCurrentImageIndex(null);
  };

  const juegosData = [
    {
      title: "Toro Mecánico",
      price: "150.000",
      images: ["/img/2.webp", "/img/2.1.webp", "/img/2.2.webp", "/img/2.3.webp", "/img/2.4.webp"],
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
            <span className="close" onClick={closeModal}>&times;</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Juegos;
