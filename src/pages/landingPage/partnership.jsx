import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Make sure to import the Autoplay styles
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { homePageImgslide1 } from "../../assets";

const Partnership = () => {
  return (
    <div className="bg-bgColor my-10 flex flex-col h-[80vh]">


      <span className="text-fontColors flex justify-center text-4xl m-10 font-courgette font-semibold">EVENTS </span>
      {/* Image Swiper */}
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3000, // Set the delay between slides
          disableOnInteraction: false, // Continue autoplay even after interaction
        }}
        modules={[FreeMode, Pagination, Autoplay]} // Include Autoplay module
        className="mb-5 w-full"
      >
        <SwiperSlide>
        <div className="relative w-full h-[50vh]">
        <img
              src={homePageImgslide1}
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative w-full h-[50vh]">
        <img
              src={homePageImgslide1}
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative w-full h-[50vh]">
        <img
              src={homePageImgslide1}
              alt="Slide 3"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative w-full h-[50vh]">
        <img
              src={homePageImgslide1}
              alt="Slide 4"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative w-full h-[50vh]">
        <img
              src={homePageImgslide1}
              alt="Slide 5"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative w-full h-[50vh]">
        <img
              src={homePageImgslide1}
              alt="Slide 6"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative w-full h-[50vh]">
        <img
              src={homePageImgslide1}
              alt="Slide 7"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[50vh]">
            <img
              src={homePageImgslide1}
              alt="Slide 8"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Partnership Section */}
      <div className="flex flex-col md:flex-row justify-center items-center px-5 my-20 md:px-20">
        <button
          onClick={() => window.open("https://forms.gle/RiymWA5sQaonNrys8")}
          type="button"
          className="text-white mx-2 md:mx-10 bg-gradient-to-br from-bgColor to-fontColors hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-fontColors dark:focus:ring-fontColors font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-4 md:mb-0"
        >
          BE A PARTNER
        </button>
        <button
          onClick={() => window.open("https://forms.gle/RiymWA5sQaonNrys8")}
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
