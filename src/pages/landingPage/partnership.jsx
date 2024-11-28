import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import { homePageImgslide1 } from '../../assets';

const Partnership = () => {
  return (
    <div className="bg-bgColor my-10 flex flex-col h-auto">
      <span className="text-fontColors flex justify-center text-[3rem] m-10 font-courgette font-semibold">
        EVENTS
      </span>

      {/* Image Swiper */}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000, // Set the delay between slides
          disableOnInteraction: false, // Continue autoplay even after interaction
        }}
        modules={[FreeMode, Pagination, Autoplay]} // Include Autoplay module
        className="mb-5 w-full"
        breakpoints={{
          640: {
            slidesPerView: 2, // 2 slides on small screens
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3, // 3 slides on medium screens
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4, // 4 slides on larger screens
            spaceBetween: 30,
          },
        }}
      >
        {/* Swiper Slides */}
        {Array(8)
          .fill(0)
          .map((_, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[50vh]">
                <img
                  src={homePageImgslide1}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* Partnership Section */}
      <div className="flex flex-col md:flex-row justify-center items-center px-5 my-20 md:px-20">
        <button
          onClick={() => window.open('https://forms.gle/RiymWA5sQaonNrys8')}
          type="button"
          className="text-white mx-2 md:mx-10 bg-gradient-to-br from-bgColor to-fontColors hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-fontColors dark:focus:ring-fontColors font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-4 md:mb-0"
        >
          BE A PARTNER
        </button>
        <button
          onClick={() => window.open('https://forms.gle/RiymWA5sQaonNrys8')}
          type="button"
          className="text-white mx-2 md:mx-10 bg-gradient-to-br from-bgColor to-fontColors hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-fontColors dark:focus:ring-fontColors font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-4 md:mb-0"
        >
          REGISTER
        </button>
      </div>
    </div>
  );
};

export default Partnership;
