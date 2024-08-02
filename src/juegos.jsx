import { useState } from "react";
import "./styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

function Juegos() {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Toro mecánico */}
      <div className=" rounded-lg shadow bg-gray-100">
        <Swiper
          pagination={{ type: "fraction" }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="/img/2.webp"
              alt="Juego Inflable"
              onClick={() => openModal("/img/2.webp")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/img/2.1.webp"
              alt="Juego Inflable"
              onClick={() => openModal("/img/2.1.webp")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/img/2.2.webp"
              alt="Juego Inflable"
              onClick={() => openModal("/img/2.2.webp")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/img/2.3.webp"
              alt="Juego Inflable"
              onClick={() => openModal("/img/2.3.webp")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/img/2.4.webp"
              alt="Juego Inflable"
              onClick={() => openModal("/img/2.4.webp")}
            />
          </SwiperSlide>
        </Swiper>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-neutral-900">
            Toro Mecánico
          </h5>
          <p className="mb-3 text-2xl font-bold text-neutral-900">
            Arriendo: $150.000
          </p>
        </div>
      </div>

      {/* Pirata */}
      <div className=" rounded-lg shadow bg-gray-100">
        <Swiper
          pagination={{ type: "fraction" }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="/img/3.webp"
              alt="Juego Inflable"
              onClick={() => openModal("/img/3.webp")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/img/3.1.webp"
              alt="Juego Inflable"
              onClick={() => openModal("/img/3.1.webp")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/img/3.2.webp"
              alt="Juego Inflable"
              onClick={() => openModal("/img/3.2.webp")}
            />
          </SwiperSlide>
        </Swiper>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-neutral-900">
            Juego Inflable El Pirata
          </h5>
          <p className="mb-3 text-2xl font-semibold text-neutral-900">
            Arriendo: $50.000
          </p>
        </div>
      </div>

      {/* Juegos Pequeños */}
      <div className=" rounded-lg shadow bg-gray-100">
        <Swiper
          pagination={{ type: "fraction" }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="/img/4.webp"
              alt="Juego Inflable"
              onClick={() => openModal("/img/4.webp")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/img/4.1.webp"
              alt="Juego Inflable"
              onClick={() => openModal("/img/4.1.webp")}
            />
          </SwiperSlide>
        </Swiper>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-neutral-900">
            Juegos Inflables Pequeños
          </h5>
          <p className="mb-3 text-2xl font-semibold text-neutral-900">
            Arriendo: $30.000 c/u
          </p>
        </div>
      </div>

      {/* Ola */}
      <div className=" rounded-lg shadow bg-gray-100">
        <Swiper
          pagination={{ type: "fraction" }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="/img/5.webp"
              alt="Juego Inflable"
              onClick={() => openModal("/img/5.webp")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/img/5.1.webp"
              alt="Juego Inflable"
              onClick={() => openModal("/img/5.1.webp")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/img/5.2.webp"
              alt="Juego Inflable"
              onClick={() => openModal("/img/5.2.webp")}
            />
          </SwiperSlide>
        </Swiper>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-neutral-900">
            Juego Inflable La Ola
          </h5>
          <p className="mb-3 text-2xl font-semibold text-neutral-900 ">
            Arriendo: $60.000
          </p>
        </div>
      </div>

      {/* Tiburón */}
      <div className=" rounded-lg shadow bg-gray-100">
        <Swiper
          pagination={{ type: "fraction" }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="/img/6.webp"
              alt="Juego Inflable"
              onClick={() => openModal("/img/6.webp")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/img/6.1.webp"
              alt="Juego Inflable"
              onClick={() => openModal("/img/6.1.webp")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/img/6.2.webp"
              alt="Juego Inflable"
              onClick={() => openModal("/img/6.2.webp")}
            />
          </SwiperSlide>
        </Swiper>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-neutral-900">
            Juego Inflable El Tiburón
          </h5>
          <p className="mb-3 text-2xl font-semibold text-neutral-900">
            Arriendo: $60.000
          </p>
        </div>
      </div>

      {/* Barco */}
      <div className=" rounded-lg shadow bg-gray-100">
        <Swiper
          pagination={{ type: "fraction" }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="/img/7.webp"
              alt="Juego Inflable"
              onClick={() => openModal("/img/7.webp")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/img/7.1.webp"
              alt="Juego Inflable"
              onClick={() => openModal("/img/7.1.webp")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/img/7.2.webp"
              alt="Juego Inflable"
              onClick={() => openModal("/img/7.2.webp")}
            />
          </SwiperSlide>
        </Swiper>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-neutral-900">
            Juego Inflable El Barco
          </h5>
          <p className="mb-3 text-2xl font-semibold text-neutral-900">
            Arriendo: $60.000
          </p>
        </div>
      </div>

      {/* Avion */}
      <div className=" rounded-lg shadow bg-gray-100">
        <Swiper
          pagination={{ type: "fraction" }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="/img/8.webp"
              alt="Juego Inflable"
              onClick={() => openModal("/img/8.webp")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/img/8.1.webp"
              alt="Juego Inflable"
              onClick={() => openModal("/img/8.1.webp")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/img/8.2.webp"
              alt="Juego Inflable"
              onClick={() => openModal("/img/8.2.webp")}
            />
          </SwiperSlide>
        </Swiper>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-neutral-900">
            Juego Inflable El Avión
          </h5>
          <p className="mb-3 text-2xl font-semibold text-neutral-900">
            Arriendo: $60.000
          </p>
        </div>
      </div>

      {/* Castillo */}
      <div className=" rounded-lg shadow bg-gray-100">
        <Swiper
          pagination={{ type: "fraction" }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="/img/9.webp"
              alt="Juego Inflable"
              onClick={() => openModal("/img/9.webp")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/img/9.1.webp"
              alt="Juego Inflable"
              onClick={() => openModal("/img/9.1.webp")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/img/9.2.webp"
              alt="Juego Inflable"
              onClick={() => openModal("/img/9.2.webp")}
            />
          </SwiperSlide>
        </Swiper>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-neutral-900">
            Juego Inflable El Castillo
          </h5>
          <p className="mb-3 text-2xl font-semibold text-neutral-900">
            Arriendo: $55.000
          </p>
        </div>
      </div>

      {/* Aro */}
      <div className=" rounded-lg shadow bg-gray-100">
        <Swiper
          pagination={{ type: "fraction" }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="/img/10.webp"
              alt="Juego Inflable"
              onClick={() => openModal("/img/10.webp")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/img/10.1.webp"
              alt="Juego Inflable"
              onClick={() => openModal("/img/10.1.webp")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/img/10.2.webp"
              alt="Juego Inflable"
              onClick={() => openModal("/img/10.2.webp")}
            />
          </SwiperSlide>
        </Swiper>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-neutral-900">
            Juego Inflable Aro
          </h5>
          <p className="mb-3 text-2xl font-semibold text-neutral-900">
            Arriendo: $55.000
          </p>
        </div>
      </div>

      {/* Arabe */}
      <div className=" rounded-b-lg shadow bg-gray-100">
        <Swiper
          pagination={{ type: "fraction" }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="/img/11.webp"
              alt="Juego Inflable"
              onClick={() => openModal("/img/11.webp")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/img/11.1.webp"
              alt="Juego Inflable"
              onClick={() => openModal("/img/11.1.webp")}
            />
          </SwiperSlide>
        </Swiper>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-neutral-900">
            Juego Inflable Arabe
          </h5>
          <p className="mb-3 text-2xl font-semibold text-neutral-900">
            Arriendo: $55.000
          </p>
        </div>
      </div>

      {/* Vaquero */}
      <div className=" rounded-b-lg shadow bg-gray-100">
        <Swiper
          pagination={{ type: "fraction" }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="/img/12.webp"
              alt="Juego Inflable"
              onClick={() => openModal("/img/12.webp")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/img/12.1.webp"
              alt="Juego Inflable"
              onClick={() => openModal("/img/12.webp")}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/img/12.3.webp"
              alt="Juego Inflable"
              onClick={() => openModal("/img/12.webp")}
            />
          </SwiperSlide>
        </Swiper>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-neutral-900">
            Juego Inflable Vaquero
          </h5>
          <p className="mb-3 text-2xl font-semibold text-neutral-900">
            Arriendo: $60.000
          </p>
        </div>
      </div>
      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content relative flex justify-center items-center">
            <img
              src={modalImage}
              alt="Juego Inflable"
              className="lg:min-w-[400px] min-h-[400px] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Juegos;
