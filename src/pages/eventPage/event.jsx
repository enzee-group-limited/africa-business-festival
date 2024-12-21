import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';
import { flyer, flyer2 } from '../../assets';

const Event = () => {
  return (
    <div className="my-10 flex flex-col h-auto px-4 sm:px-8 lg:px-16 mx-auto max-w-7xl font-poppins">
      <div className="h-[20rem] bg-gradient-to-r from-bgColor to-[#4F0945] flex flex-col items-center justify-center shadow-lg rounded-lg">
        <h1 className="text-[3rem] text-fontColors py-6 font-poppins font-extrabold">
          EVENTS
        </h1>
        <div className="text-lg leading-relaxed mb-6 p-4 rounded-md shadow-xl">
          <h2 className="font-medium text-fontColors text-2xl mb-3 text-center">
            What to Expect
          </h2>
          <div className="text-white-900 space-x-4 flex flex-wrap justify-center">
            <span className="inline-block mb-2 md:mb-0">Keynote Speeches</span>
            <span className="inline-block mb-2 md:mb-0">Panel Discussions</span>
            <span className="inline-block mb-2 md:mb-0">Workshops</span>
            <span className="inline-block mb-2 md:mb-0">Networking</span>
            <span className="inline-block mb-2 md:mb-0">Business Expo</span>
          </div>
        </div>
      </div>

      <div className=" md:p-10">
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
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
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
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/70 text-white">
                      <h4 className="text-lg font-bold">
                        Innovation Summit 2024
                      </h4>
                      <p>Coming Soon!! | Coming Soon!!</p>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="relative w-full h-[50vh]">
                    <img
                      src={flyer2}
                      alt={`Flyer2 ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/70 text-white">
                      <h4 className="text-lg font-bold">
                        Innovation Summit 2024
                      </h4>
                      <p>Coming Soon!! | Coming Soon!!</p>
                    </div>
                  </div>
                </SwiperSlide>
              </React.Fragment>
            ))}
        </Swiper>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center px-5 my-10 md:px-20 bg-gradient-to-r from-bgColor to-[#4F0945]/80 py-12 rounded-lg shadow-lg">
        <div className="text-center mb-6 md:mb-0 md:mr-10">
          <p className=" text-fontColors text-xl mb-4 font-semibold">
            Don't miss out on this incredible opportunity! Join us in making a
            difference.
          </p>
          <p className="text-white text-lg">
            Whether you're looking to partner or register, we would love to have
            you with us!
          </p>
        </div>

        <div className="flex flex-col items-center my-10 space-y-4">
          <div className="flex flex-row justify-center gap-4">
            <button
              class="relative flex h-[50px] w-40 items-center bg-bgColor bg-opacity-20 backdrop-blur-sm justify-center overflow-hidden text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-fontColors before:duration-500 before:ease-out hover:shadow-fontColors hover:before:h-56 hover:before:w-56"
              onClick={() => window.open('https://forms.gle/aVgxpmVhVW9Zg4W49')}
              type="button"
            >
              <span class="relative z-10">PARTNER</span>
            </button>

            <button
              class="relative flex h-[50px] w-40 items-center bg-bgColor bg-opacity-20 backdrop-blur-sm justify-center overflow-hidden text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-fontColors before:duration-500 before:ease-out hover:shadow-fontColors hover:before:h-56 hover:before:w-56"
              onClick={() =>
                window.open('https://forms.gle/7gonZnVu1UmNqaxH9 ')
              }
              type="button"
            >
              <span class="relative z-10">EXHIBIT</span>
            </button>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <button
              class="relative flex h-[50px] w-40 items-center bg-bgColor bg-opacity-20 backdrop-blur-sm justify-center overflow-hidden text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-fontColors before:duration-500 before:ease-out hover:shadow-fontColors hover:before:h-56 hover:before:w-56"
              onClick={() => window.open('https://forms.gle/Rdw2vaEJZu46pFiK9')}
              type="button"
            >
              <span class="relative z-10">ATTEND</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
