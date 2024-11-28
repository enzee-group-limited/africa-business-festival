import React from "react";
import "../../App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const WhyUsSection = () => {
  return (
    <div className="bg-img flex justify-evenly flex-col md:flex-row m-10 h-60">
      {/* Left Section */}
      <div className="flex justify-center items-center text-fontColors font-poppins font-extrabold text-4xl md:text-6xl flex-1  p-5">
        WHY US
      </div>

      {/* Right Section (Slider) */}
      <div className="flex-1 flex justify-center items-center text-4xl bg-black bg-opacity-70 p-5">
        <Swiper
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: "custom-bullet",
          }}
          modules={[Pagination, Autoplay]}
          className="w-96"
        >
          <SwiperSlide>
            <p className="text-white text-center text-lg md:text-2xl font-bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.

            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="text-white text-center text-lg md:text-2xl font-bold">
              Fusce a sapien eu purus eleifend viverra.
              Fusce a sapien eu purus eleifend viverra.

            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="text-white text-center text-lg md:text-2xl font-bold">
            Aenean pulvinar lacus vel vulputate ultricies.
            Aenean pulvinar lacus vel vulputate ultricies.

            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="text-white text-center text-lg md:text-2xl font-bold">
            Vitae suscipit erat lorem in augue.
            Vitae suscipit erat lorem in augue.

            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default WhyUsSection;
