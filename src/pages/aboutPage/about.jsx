import React from 'react';
import vid from '../../assets/videos/vid1.mp4';
import bgImage from '../../assets/images/bgImg.jpg';
const About = () => {
  return (
    <section className="bg-gray-50 relative">
      {/* Header Section */}
      <div className="h-[25rem] bg-gradient-to-r from-bgColor to-[#4F0945] flex items-center justify-center flex-col">
        <h1 className="text-[3rem] text-fontColors">About Us</h1>
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
        {/* Left Section - Paragraph */}
        <div className="flex-1 text-gray-700 text-lg leading-relaxed lg:pr-12">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in
          </p>
        </div>

        {/* Right Section - Grid Content */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8 -mt-28 relative z-10">
          {/* Our Mission */}
          <div className="bg-orange-500 text-white p-6 shadow-lg rounded-lg text-center">
            <h3 className="text-lg font-semibold uppercase">Our Mission</h3>
            <p className="mt-4">
              To empower businesses in Africa by providing a platform to share
              ideas, foster innovation, and drive sustainable growth.
            </p>
          </div>

          {/* Our Vision */}
          <div className="bg-orange-500 text-white p-6 shadow-lg rounded-lg text-center">
            <h3 className="text-lg font-semibold uppercase">Our Vision</h3>
            <p className="mt-4">
              To become the leading business festival in Africa, creating
              opportunities for entrepreneurs, innovators, and leaders.
            </p>
          </div>

          {/* Core Values */}
          <div className="bg-orange-500 text-white p-6 shadow-lg rounded-lg text-center">
            <h3 className="text-lg font-semibold uppercase">Core Values</h3>
            <ul className="mt-4 list-disc list-inside">
              <li>Innovation</li>
              <li>Collaboration</li>
              <li>Integrity</li>
              <li>Sustainability</li>
            </ul>
          </div>

          {/* Key Services */}
          <div className="bg-orange-500 text-white p-6 shadow-lg rounded-lg text-center">
            <h3 className="text-lg font-semibold uppercase">Key Services</h3>
            <p className="mt-4">
              - Networking events
              <br />
              - Business workshops
              <br />
              - Investment opportunities
              <br />- Panel discussions with experts
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-16 px-6">
        {/* Video Section */}
        <div className="mt-12 relative">
          <video
            className="w-full h-[40rem] object-cover"
            controls
            autoplay
            loop
            muted
            poster="video-poster.jpg" // Optional placeholder image
          >
            <source src={vid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Image and Heading Section Below Video */}
        <div className="relative ">
          <div
            className="relative w-full h-[30rem] bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
              <h2 className="text-4xl text-white font-bold text-center">
                Our Key Moments
              </h2>
            </div>
          </div>
          {/* <div className="text-center mt-8">
            <p className="text-lg text-gray-700">
              Some of the best moments at the Africa Business Festival.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
