import React from 'react';
import { motion } from 'framer-motion';
import img from '../../assets/images/enzee.jpg';

const About = () => {
  return (
    <div className="font-poppins">
      {/* Header Section */}
      <div className="h-[20rem] bg-gradient-to-r from-bgColor to-[#4F0945] flex items-center justify-center flex-col">
        <h1 className="text-[3rem] text-fontColors py-10 font-poppins font-extrabold text-4xl">
          ABOUT US
        </h1>
        <p className="text-lg text-white text-center">
          Welcome to{' '}
          <span className="font-bold text-fontColors">
            Africa Business Festival
          </span>
          , where business ideas are shared
        </p>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row items-start px-6 lg:px-16 py-16 mx-auto max-w-7xl">
        {/* Left Section - Centered Paragraph */}
        <div className="flex-1 text-gray-700 text-lg leading-relaxed lg:pr-12 text-center">
          <p className="mx-auto">
            Africa Business Festival, a subsidiary of Enzee Group, is a platform
            for entrepreneurs, creatives, disruptors, business leaders,
            government representatives, academia, and researchers. Africa
            Business Festival provides a vibrant ecosystem where connections are
            made, ideas are shared, and partnerships are forged. Through
            networking sessions, thought-provoking discussions, dynamic panel
            talks, enriching workshops, captivating exhibitions, and
            entertainment events, they create an atmosphere that ignites
            inspiration and fuels growth.
          </p>
        </div>

        {/* Right Section - Grid Content */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:-mt-32 md:mt-16 -mt-28 relative z-10">
          {/* Our Mission */}
          <div className="bg-orange-500 text-white p-6 shadow-lg rounded-lg text-center">
            <p className="mt-4">
              Africa Business Festival believes that by harmonizing our efforts,
              we can drive economic independence and become the masters of our
              own fate.
            </p>
          </div>

          {/* Our Vision */}
          <div className="bg-orange-500 text-white p-6 shadow-lg rounded-lg text-center">
            <h3 className="text-lg font-semibold uppercase">Our Vision</h3>
            <p className="mt-4">
              To foster collaboration among African businesses and seize the new
              opportunities emerging on our continent.
            </p>
          </div>

          {/* Core Values */}
          <div className="bg-orange-500 text-white p-6 shadow-lg rounded-lg text-center">
            <h3 className="text-lg font-semibold uppercase">Core Values</h3>
            <ul className="mt-4 space-y-2">
              <li>Innovation</li>
              <li>Collaboration</li>
              <li>Integrity</li>
              <li>Sustainability</li>
            </ul>
          </div>

          {/* Key Services */}
          <div className="bg-orange-500 text-white p-6 shadow-lg rounded-lg text-center">
            <h3 className="text-lg font-semibold uppercase">Key Services</h3>
            <ul className="mt-4 space-y-2">
              <li>Networking events</li>
              <li>Business workshops</li>
              <li>Investment opportunities</li>
              <li>Panel discussions with experts</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Image and Heading Section Below Video */}
      <div className="relative">
        <div
          className="relative w-full h-[15rem] md:h-[20rem] lg:h-[25rem] bg-cover bg-center"
          style={{ backgroundImage: `url(${img})` }} // Fixed image reference
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <h2 className="text-4xl text-white font-bold text-center">
              Our Key Moments
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
