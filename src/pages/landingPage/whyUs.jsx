import React from 'react';
import '../../App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const WhyUsSection = () => {
  return (
    <div className=" flex justify-evenly  flex-col md:flex-row h-[15vh] sm:h-[10vh] md:h-[20vh] w-full my-5">
      <div className="flex justify-center items-center text-fontColors   font-poppins font-extrabold text-4xl md:text-6xl flex-1">
        WHY US
      </div>

      <div className="flex-1 flex justify-center items-center text-4xl">
        <Swiper
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: 'custom-bullet',
          }}
          modules={[Pagination, Autoplay]}
          className="w-96"
        >
          <SwiperSlide>
            <p className="text-bgColor text-center text-lg md:text-2xl font-bold">
              We Build global competence and strategic thinking with hands-on
              workshops led by experts.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="text-bgColor text-center text-lg md:text-2xl font-bold">
              We offer One-on-one sessions with successful African entrepreneurs
              to guide your business journey.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="text-bgColor text-center text-lg md:text-2xl font-bold">
              We Engage with industry leaders during panel discussions and Q&A
              sessions.
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <p className="text-bgColor text-center text-lg md:text-2xl font-bold">
              You can join curated networking events tailored to your industry
              and interests.
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default WhyUsSection;
