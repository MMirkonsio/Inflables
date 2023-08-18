import { useState } from 'react';
import "./styles.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
    
    
function Juegos(){
    const [modalImage, setModalImage] = useState(null);

    const openModal = (imageSrc) => {
      setModalImage(imageSrc);
    };
  
    const closeModal = () => {
      setModalImage(null);
    };

return(
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
       {/*Toro mecanico*/}
      <div className="border-gray-200 rounded-lg shadow bg-gray-100">
        <Swiper         
          pagination={{
            type: 'fraction',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper">
        <SwiperSlide>
            <img
              src="/img/2.jpg"
              alt="Juego Inflable"
              onClick={() => openModal('/img/2.jpg')}
            />
          </SwiperSlide>
        <SwiperSlide>
            <img
              src="/img/2.1.jpg"
              alt="Juego Inflable"
              onClick={() => openModal('/img/2.1.jpg')}
            />
          </SwiperSlide>
            
        </Swiper>
      
        
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">Toro Mecánico</h5>
          <p className="mb-3 text-2xl font-semibold  text-gray-700">Arriendo: $120.000</p>
        </div>
      </div>

      {/*Pirata*/}
      <div className="border-gray-200 rounded-lg shadow bg-gray-100">
      <Swiper         
          pagination={{
            type: 'fraction',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper">
        <SwiperSlide>
            <img
              src="/img/3.jpg"
              alt="Juego Inflable"
              onClick={() => openModal('/img/3.jpg')}
            />
          </SwiperSlide>
        <SwiperSlide>
            <img
              src="/img/3.1.jpg"
              alt="Juego Inflable"
              onClick={() => openModal('/img/3.1.jpg')}
            />
          </SwiperSlide>
            
        </Swiper>
        
          
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">Juego Inflable El Pirata</h5>
            <p className="mb-3 text-2xl font-semibold text-gray-700">Arriendo: $45.000</p>
          </div>
      </div>

      {/*Juegos Pequeños*/}
      <div className="border-gray-200 rounded-lg shadow bg-gray-100">
      <Swiper         
          pagination={{
            type: 'fraction',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper">
        <SwiperSlide>
            <img
              src="/img/4.jpg"
              alt="Juego Inflable"
              onClick={() => openModal('/img/4.jpg')}
            />
          </SwiperSlide>
        <SwiperSlide>
            <img
              src="/img/4.1.jpg"
              alt="Juego Inflable"
              onClick={() => openModal('/img/4.1.jpg')}
            />
          </SwiperSlide>
            
        </Swiper>
        
          
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">Juegos Inflables Pequeños</h5>
            <p className="mb-3 text-2xl font-semibold text-gray-700">Arriendo: $50.000 c/u</p>
          </div>
      </div>

      {/*Ola*/}
      <div className="border-gray-200 rounded-lg shadow bg-gray-100">
      <Swiper         
          pagination={{
            type: 'fraction',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper">
        <SwiperSlide>
            <img
              src="/img/5.jpg"
              alt="Juego Inflable"
              onClick={() => openModal('/img/5.jpg')}
            />
          </SwiperSlide>
        <SwiperSlide>
            <img
              src="/img/5.1.jpg"
              alt="Juego Inflable"
              onClick={() => openModal('/img/5.1.jpg')}
            />
          </SwiperSlide>
        <SwiperSlide>
          <img
            src="/img/5.2.jpg"
            alt="Juego Inflable"
            onClick={() => openModal('/img/5.2.jpg')}
          />
        </SwiperSlide>
            
        </Swiper>
        
          
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">Juego Inflable La Ola</h5>
            <p className="mb-3 text-2xl font-semibold text-gray-700 ">Arriendo: $60.000</p>
          </div>
      </div>

      {/*Tiburon*/}
      <div className="border-gray-200 rounded-lg shadow bg-gray-100">
      <Swiper         
          pagination={{
            type: 'fraction',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper">
        <SwiperSlide>
            <img
              src="/img/6.jpg"
              alt="Juego Inflable"
              onClick={() => openModal('/img/6.jpg')}
            />
          </SwiperSlide>
        <SwiperSlide>
            <img
              src="/img/6.1.jpg"
              alt="Juego Inflable"
              onClick={() => openModal('/img/6.1.jpg')}
            />
          </SwiperSlide>
            
        </Swiper>
        
          
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">Juego Inflable El Tiburon</h5>
            <p className="mb-3 text-2xl font-semibold text-gray-700">Arriendo: $60.000</p>
          </div>
      </div>

      {/*Barco*/}
      <div className="border-gray-200 rounded-lg shadow bg-gray-100">
      <Swiper         
          pagination={{
            type: 'fraction',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper">
        <SwiperSlide>
            <img
              src="/img/7.jpg"
              alt="Juego Inflable"
              onClick={() => openModal('/img/7.jpg')}
            />
          </SwiperSlide>
        <SwiperSlide>
            <img
              src="/img/7.1.jpg"
              alt="Juego Inflable"
              onClick={() => openModal('/img/7.1.jpg')}
            />
          </SwiperSlide>
            
        </Swiper>
        
          
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">Juego Inflable El Barco</h5>
            <p className="mb-3 text-2xl font-semibold text-gray-700">Arriendo: $55.000</p>
          </div>
      </div>

      {/*Avion*/}
      <div className="border-gray-200 rounded-lg shadow bg-gray-100">
        <Swiper         
          pagination={{
            type: 'fraction',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper">
        <SwiperSlide>
            <img
              src="/img/8.jpg"
              alt="Juego Inflable"
              onClick={() => openModal('/img/8.jpg')}
            />
          </SwiperSlide>
            
        </Swiper>
        
          
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">Juego Inflable El Avión</h5>
            <p className="mb-3 text-2xl font-semibold text-gray-700">Arriendo: $55.000</p>
          </div>
      </div>

      {/*Castillo*/}
      <div className="border-gray-200 rounded-lg shadow bg-gray-100">
        <Swiper         
            pagination={{
                type: 'fraction',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper">
            <SwiperSlide>
                <img
                src="/img/9.jpg"
                alt="Juego Inflable"
                onClick={() => openModal('/img/9.jpg')}
                />
            </SwiperSlide>
                
            </Swiper>
        
          
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">Juego Inflable El Castillo</h5>
            <p className="mb-3 text-2xl font-semibold text-gray-700">Arriendo: $50.000</p>
          </div>
      </div>

      {/*Arabe*/}
      <div className="border-gray-200 rounded-lg shadow bg-gray-100">
      <Swiper         
          pagination={{
            type: 'fraction',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper">
        <SwiperSlide>
            <img
              src="/img/10.jpg"
              alt="Juego Inflable"
              onClick={() => openModal('/img/10.jpg')}
            />
          </SwiperSlide>
        <SwiperSlide>
            <img
              src="/img/10.1.jpg"
              alt="Juego Inflable"
              onClick={() => openModal('/img/10.1.jpg')}
            />
          </SwiperSlide>
            
        </Swiper>
        
          
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">Juego Inflable Aro</h5>
            <p className="mb-3 text-2xl font-semibold text-gray-700">Arriendo: $55.000</p>
          </div>
      </div>

      {/*Arco*/}
      <div className="border-gray-200 rounded-lg shadow bg-gray-100">
      <Swiper         
          pagination={{
            type: 'fraction',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper">
        <SwiperSlide>
            <img
              src="/img/11.jpg"
              alt="Juego Inflable"
              onClick={() => openModal('/img/11.jpg')}
            />
          </SwiperSlide>
        </Swiper>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700">Juego Inflable Arabe</h5>
            <p className="mb-3 text-2xl font-semibold text-gray-700">Arriendo: $50.000</p>
          </div>
      </div>
      {modalImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative max-w-full max-h-full overflow-auto">
            <img
              src={modalImage}
              alt="Juego Inflable"
              className="mx-auto max-h-screen max-w-screen p-4"
            />
            <button className="m-2 text-white" onClick={closeModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 
export default Juegos 
    