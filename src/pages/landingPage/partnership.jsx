import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import { flyer } from '../../assets';

const Partnership = () => {
  return (
    <div className=" my-10 flex flex-col  h-auto">
      <div className="h-[10rem] bg-gradient-to-r from-bgColor to-[#4F0945] flex items-center justify-center flex-col">
        <span className="text-fontColors flex justify-center text-[3rem] m-10  font-poppins font-extrabold text-4xl ">
          EVENTS
        </span>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mb-5 w-full"
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {Array(8)
          .fill(0)
          .map((_, index) => (
            <React.Fragment key={index}>
              <SwiperSlide>
                <div className="relative w-full h-[50vh]">
                  <img
                    src={flyer}
                    alt={`Flyer ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/80 text-white">
                    <h4 className="text-lg font-bold">
                      Innovation Summit 2024
                    </h4>
                    <p>Date| Location</p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="relative w-full h-[50vh]">
                  <img
                    src={flyer}
                    alt="Flyer for Networking Event"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-4 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold text-white">
                      Networking Event
                    </h3>
                    <p className="text-white">Date - Location</p>
                  </div>
                </div>
              </SwiperSlide>
            </React.Fragment>
          ))}
      </Swiper>

      <div className="flex flex-col md:flex-row justify-center items-center px-5 my-20 md:px-20">
        <button
          class="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-fontColors before:duration-500 before:ease-out hover:shadow-fontColors hover:before:h-56 hover:before:w-56"
          onClick={() => window.open('https://forms.gle/RiymWA5sQaonNrys8')}
          type="button"
        >
          <span class="relative z-10"> BE A PARTNER</span>
        </button>

        <button
          class="relative m-5 flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-fontColors before:duration-500 before:ease-out hover:shadow-fontColors hover:before:h-56 hover:before:w-56"
          onClick={() => window.open('https://forms.gle/RiymWA5sQaonNrys8')}
          type="button"
        >
          <span class="relative z-10"> REGISTER</span>
        </button>
      </div>
    </div>
  );
};

export default Partnership;
