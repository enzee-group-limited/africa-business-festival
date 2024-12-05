import React, { useState } from 'react';
import { hero1, slide2 } from '../../assets';
import '../../App.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// Import required modules
import {
  Navigation,
  //  Autoplay
} from "swiper/modules";
import WhyUsSection from "./whyUs";
import Countdown from "./countDown";


const Home = () => {
  const [isSliding, setIsSliding] = useState(false);

  const handleSlideChange = () => {
    setIsSliding(true); // Trigger animation when slide changes
    setTimeout(() => {
      setIsSliding(false); // Reset animation after it completes
    }, 800); // Timeout duration must match animation duration
  };

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId); // Get the section by ID
    if (section) {
      section.scrollIntoView({
        behavior: "smooth", // Smooth scrolling
        block: "start", // Scroll to the start of the section
      });
    }
  }

  return (
    <div>
      <div className="relative h-[80vh] bg-bgColor font-poppins">
        {/* Swiper Slider as Hero Background */}
        <Swiper
          modules={[
            Navigation,
            // Autoplay
          ]} // Add Autoplay module
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          slidesPerView={1}
          loop={true} // Enable looping for continuous sliding
          // autoplay={{
          //   delay: 5000, // Time between each slide transition (in ms)
          //   disableOnInteraction: false, // Autoplay will continue even after interaction
          // }}
          className="h-full"
          onSlideChange={handleSlideChange} // Listen for slide change
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${hero1})` }}
            >
              {/* Overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80"></div>

              {/* Text Overlay */}
              <div
                className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center ${
                  isSliding
                    ? "transform -translate-x-full opacity-0"
                    : "transform translate-x-0 opacity-100"
                } transition-all duration-500`}
              >
                <p className="text-white text-4xl font-poppins font-bold text-center">
                  Uniting African <br /> Businesses for Global Impact
                </p>

                {/* Call-to-Action Buttons */}
                <div className="flex flex-col my-10 sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                  <button
                    class="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-bgColor text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-fontColors before:duration-500 before:ease-out hover:shadow-fontColors hover:before:h-56 hover:before:w-56"
                    onClick={() => scrollToSection("about")}
                    type="button"
                  >
                    <span class="relative z-10"> LEARN MORE</span>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide2})`,
              }}
            >
              {/* Overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

              {/* Text Overlay */}
              <div
                className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center ${
                  isSliding
                    ? "transform -translate-x-full opacity-0"
                    : "transform translate-x-0 opacity-100"
                } transition-all duration-500`}
              >
                <div className="mt-8 transform text-sm bg-white bg-opacity-20 backdrop-blur-sm px-6 py-4 rounded-md my-10 shadow-lg">
                  <p className="text-white text-lg font-medium text-center">
                    Join us at the Africa Business Festival 2025, where Africa’s{" "}
                    <br /> brightest minds and leading businesses come together
                    to foster <br /> innovation, partnerships, and growth.
                  </p>
                </div>

                {/* Buttons in Column Layout */}
                <div className="flex flex-col items-center my-10 space-y-4">
                  <button
                    class="relative flex h-[50px] w-40 items-center  bg-white bg-opacity-20 backdrop-blur-sm justify-center overflow-hidden  text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-fontColors before:duration-500 before:ease-out hover:shadow-fontColors hover:before:h-56 hover:before:w-56"
                    onClick={() => scrollToSection("about")}
                    type="button"
                  >
                    <span class="relative z-10"> VIEW EVENTS SCHEDULE</span>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide2})`,
              }}
            >
              {/* Overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

              {/* Text Overlay */}
              <div
                className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center ${
                  isSliding
                    ? "transform -translate-x-full opacity-0"
                    : "transform translate-x-0 opacity-100"
                } transition-all duration-500`}
              >
                <Countdown />

                {/* Buttons in Column Layout */}
                <div className="flex flex-col items-center my-20 space-y-4">
                  <button
                    class="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-[#2D3C7B] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-fontColors before:duration-500 before:ease-out hover:shadow-fontColors hover:before:h-56 hover:before:w-56"
                    onClick={() => scrollToSection("about")}
                    type="button"
                  >
                    <span class="relative z-10"> INTERESTED</span>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button
          aria-label="Previous Slide"
          className="custom-prev absolute left-5 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full border-2 border-white bg-transparent flex items-center justify-center transition duration-300 hover:bg-fontColors hover:text-black z-10"
        >
          ❮
        </button>
        <button
          aria-label="Next Slide"
          className="custom-next absolute right-5 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full border-2 border-white bg-transparent flex items-center justify-center transition duration-300 hover:bg-fontColors hover:text-black z-10"
        >
          ❯
        </button>
      </div>
      {/* <div className="bg-orange-600"> */}
      {/* WHY US SECTION */}
      <WhyUsSection />
      {/* </div> */}
    </div>
  );
};

export default Home;
