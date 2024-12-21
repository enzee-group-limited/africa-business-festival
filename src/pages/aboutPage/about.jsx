import React from 'react';
import img from '../../assets/images/enzee.jpg';

const About = () => {
  return (
    <div className="font-poppins">
      <div className="h-[15rem] md:h-[20rem] bg-gradient-to-r from-bgColor to-[#4F0945] flex items-center justify-center flex-col p-4">
        <h1 className="text-4xl md:text-[3rem] text-fontColors py-3 md:py-10 font-extrabold text-center">
          ABOUT US
        </h1>
        <p className="text-base md:text-lg text-white text-center px-4">
          Welcome to{' '}
          <span className="font-bold text-fontColors">
            Africa Business Festival
          </span>
          , where business ideas are shared
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-start px-4 lg:px-16 py-8 md:py-16 mx-auto max-w-7xl">
        <div className="flex-1 text-gray-700 text-base md:text-lg leading-relaxed lg:pr-12 text-center mb-8 lg:mb-0">
          <p className="mx-auto max-w-2xl text-base md:text-lg">
            Africa Business Festival (ABF) is a premier business event aimed at
            uniting African entrepreneurs, businesses, government institutions,
            and investors to foster collaboration, improve business acumen, and
            address challenges to scale globally.
          </p>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 mt-8 lg:-mt-32 relative z-10">
          {['CONNECTING', 'PROMOTING', 'SHOWCASING', 'FOSTERING'].map(
            (title, index) => (
              <div
                key={index}
                className="bg-orange-500 text-white p-4 md:p-6 shadow-lg rounded-lg text-center"
              >
                <h3 className="text-base md:text-lg font-semibold uppercase">
                  {title}
                </h3>
                <p className="mt-2 md:mt-4 text-base md:text-lg">
                  {title === 'CONNECTING'
                    ? 'Connecting African businesses'
                    : title === 'PROMOTING'
                    ? 'Promoting global expansion for African Entrepreneurs'
                    : title === 'SHOWCASING'
                    ? 'Showcasing innovation, solutions, and investment opportunities in Africa'
                    : 'Fostering trade under AfCFTA'}
                </p>
              </div>
            )
          )}
        </div>
      </div>

      <div className="relative">
        <div
          className="relative w-full h-48 md:h-[20rem] lg:h-[25rem] bg-cover bg-center"
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h2 className="text-2xl md:text-4xl text-white font-bold text-center px-4">
              Our Key Moments
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
