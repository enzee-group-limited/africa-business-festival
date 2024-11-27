import React, { useState } from "react";
import { homePageImgslide1, homePageImgslide2 } from "../../assets";
import "../../App.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// Import required modules
import { Navigation } from "swiper/modules";
import WhyUsSection from "./whyUs";
import Partnership from "./partnership";

const Home = () => {
  const [isSliding, setIsSliding] = useState(false);

  const handleSlideChange = () => {
    setIsSliding(true); // Trigger animation when slide changes
    setTimeout(() => {
      setIsSliding(false); // Reset animation after it completes
    }, 800); // Timeout duration must match animation duration
  };

  return (
    <div>
      <div className="relative h-[80vh] bg-bgColor">
        {/* Swiper Slider as Hero Background */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          slidesPerView={1}
          loop={true} // Enable looping for continuous sliding
          className="h-full"
          onSlideChange={handleSlideChange} // Listen for slide change
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${homePageImgslide1})` }}
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
                <p className="text-white text-7xl font-poppins font-bold text-center">
                  Africa <br /> Business Festival
                </p>

                <div className="mt-8 transform bg-white bg-opacity-20 backdrop-blur-sm px-6 py-4 rounded-md my-10 shadow-lg">
                  <p className="text-white text-lg font-medium text-center">
                    Lorem ipsum dolor sit amet
                  </p>
                </div>

                <button
                  onClick={() =>
                    window.open("https://forms.gle/RiymWA5sQaonNrys8")
                  }
                  type="button"
                  className="text-white bg-gradient-to-br from-bgColor to-fontColors  hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-fontColors dark:focus:ring-fontColors font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Register
                </button>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${homePageImgslide2})` }}
            >
              {/* Overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

              {/* Text Overlay */}
              <div
                className={`absolute top-0 left-0 w-full h-full flex justify-center items-center ${
                  isSliding
                    ? "transform -translate-x-full opacity-0"
                    : "transform translate-x-0 opacity-100"
                } transition-all duration-500`}
              >
                <p className="text-white text-5xl font-bold">
                  Lorem, ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="custom-prev absolute left-5 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full border-2 border-white bg-transparent flex items-center justify-center transition duration-300 hover:bg-fontColors hover:text-black z-10">
          ❮
        </button>
        <button className="custom-next absolute right-5 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full border-2 border-white bg-transparent flex items-center justify-center transition duration-300 hover:bg-fontColors hover:text-black z-10">
          ❯
        </button>
      </div>
      {/* WHY US SECTION */}
      <WhyUsSection />
      {/* partnership or sponsorship */}
      <Partnership/>
    
    </div>
  );
};

export default Home;
