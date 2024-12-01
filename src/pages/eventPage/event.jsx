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
      <h1 className="text-white flex justify-center text-3xl sm:text-[3rem] py-7 font-courgette font-semibold bg-gradient-to-r from-bgColor to-fontColors">
        EVENTS
      </h1>

      {/* Event Details */}
      <div className="px-4 py-8 text-center">
        <h2 className="text-3xl font-courgette text-fontColors mb-4">
          Africa Business Festival 2025
        </h2>

        {/* Date Section */}
        <div className="mb-6">
          <span className="text-4xl font-bold text-black">Date:</span>
          <p className="text-2xl text-gray-700 italic">Anticipate!!!</p>
        </div>

        {/* Venue Section */}
        <div className="mb-6">
          <span className="text-4xl font-bold text-black">Venue:</span>
          <p className="text-2xl text-gray-700 italic">
            A prestigious location in Accra, Ghana — details coming soon!
          </p>
        </div>

        {/* Event Format Section */}
        <div className="mb-6">
          <span className="text-4xl font-bold text-fontColors">
            Event Format:
          </span>
          <p className="text-2xl text-gray-700 italic">
            Hybrid (In-Person and Virtual Participation Available)
          </p>
        </div>

        {/* What to Expect Section */}
        <div className="text-lg leading-relaxed mb-8 border-2 border-fontColors rounded-lg p-6 shadow-md">
          <span className="font-bold text-fontColors text-2xl mb-4 block">
            What to Expect:
          </span>
          <ul className="list-none pl-5 space-y-2 text-black">
            <li>
              Keynote Speeches: Hear from African leaders and global
              entrepreneurs.
            </li>
            <li>
              Panel Discussions: Insights into trade, funding, and technology in
              Africa.
            </li>
            <li>Workshops: Gain practical knowledge to grow your business.</li>
            <li>
              Networking Sessions: Build valuable relationships with key
              stakeholders.
            </li>
            <li>
              Business Expo: Discover innovative African startups and
              established companies showcasing their services.
            </li>
          </ul>
        </div>
      </div>

      {/* Image Swiper with Background Color */}
      {/* <div className="bg-gray-800 p-10">
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
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
          }}
        >
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-[50vh]">
                  <img
                    src={index % 2 === 0 ? flyer : flyer2}
                    alt={`Flyer ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div> */}
      <div className="bg-gradient-to-r from-bgColor to-[#4F0945]/80 md:p-10">
        {/* Title and Description */}
        <div className="text-center text-white mb-8">
          <h2 className="text-4xl font-bold text-fontColors font-courgette mb-4 pt-3">
            Event Flyers
          </h2>
          <p className="text-lg">
            Explore some of the highlights from our event flyers below.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          slidesPerView={1} // Default for all screen sizes
          spaceBetween={30} // Space between slides
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mb-5 w-full"
          breakpoints={{
            640: {
              slidesPerView: 2, // 2 slides for small screens (width >= 640px)
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2, // 2 slides for medium screens (width >= 768px)
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2, // 2 slides for larger screens (width >= 1024px)
              spaceBetween: 30,
            },
          }}
        >
          {/* Swiper Slides */}
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
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative w-full h-[50vh]">
                    <img
                      src={flyer2}
                      alt={`Flyer 2 ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              </React.Fragment>
            ))}
        </Swiper>
      </div>

      {/* Partnership Section with CTA Background */}
      <div className="flex flex-col md:flex-row justify-center items-center px-5 my-10 md:px-20 bg-gradient-to-r from-bgColor to-fontColors py-12 rounded-lg shadow-lg">
        {/* Text Section */}
        <div className="text-center mb-6 md:mb-0 md:mr-10">
          <p className="text-white text-xl mb-4 font-semibold">
            Don't miss out on this incredible opportunity! Join us in making a
            difference.
          </p>
          <p className="text-white text-lg">
            Whether you're looking to partner or register, we would love to have
            you with us!
          </p>
        </div>

        {/* Button Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          {/* Partner Button */}
          <button
            onClick={() => window.open('https://forms.gle/RiymWA5sQaonNrys8')}
            className="text-white bg-gradient-to-br from-[#44083C] to-[#44083C] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none font-medium rounded-lg text-lg px-6 py-3 transition ease-in-out duration-300"
          >
            BE A PARTNER
          </button>

          {/* Register Button */}
          <button
            onClick={() => window.open('https://forms.gle/RiymWA5sQaonNrys8')}
            className="text-white bg-gradient-to-br from-[#44083C] to-[#44083C] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none font-medium rounded-lg text-lg px-6 py-3 transition ease-in-out duration-300"
          >
            REGISTER NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Event;
