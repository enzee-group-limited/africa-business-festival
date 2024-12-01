// import React from 'react';
// import vid from '../../assets/videos/ENZEE.mp4';
// import bgImage from '../../assets/images/bgImg.jpg';
// const About = () => {
//   return (
//     <section className="bg-gray-50 relative">
//       {/* Header Section */}
//       <div className="h-[14rem] bg-gradient-to-r from-bgColor to-[#4F0945] flex items-center justify-center flex-col">
//         <h1 className="text-[3rem] text-fontColors font-courgette">ABOUT US</h1>
//         <p className="text-lg text-white text-center">
//           Welcome to{' '}
//           <span className="font-bold text-fontColors">
//             Africa Business Festival
//           </span>
//           , where business ideas are shared
//         </p>
//       </div>

//       {/* Main Content Section */}
//       <div className="flex flex-col lg:flex-row items-start px-6 lg:px-16 py-16 mx-auto max-w-7xl">
//         {/* Left Section - Paragraph */}
//         <div className="flex-1 text-gray-700 text-lg leading-relaxed lg:pr-12">
//           <p>
//             Africa Business Festival, a subsidiary of Enzee Group, is a platform
//             for entrepreneurs, creatives, disruptors, business leaders,
//             government representatives, academia, and researchers. Africa
//             Business Festival provides a vibrant ecosystem where connections are
//             made, ideas are shared, and partnerships are forged. Through
//             networking sessions, thought- provoking discussions, dynamic panel
//             talks, enriching workshops, captivating exhibitions, and
//             entertainment events, they create an atmosphere that ignites
//             inspiration and fuels growth. The Africa Business Festival aims to
//             provide a platform for African entrepreneurs, businesses, financial
//             institutions, and government bodies to collaborate, innovate, and
//             position the African continent as a unified economic zone. The
//             festival will foster partnerships, encourage foreign direct
//             investment, and promote the growth of African businesses in the
//             global marketplace.
//           </p>
//         </div>

//         {/* Right Section - Grid Content */}
//         <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8 -mt-28 relative z-10">
//           {/* Our Mission */}
//           <div className="bg-orange-500 text-white p-6 shadow-lg rounded-lg text-center">
//             {/* <h3 className="text-lg font-semibold uppercase">Our Mission</h3> */}
//             <p className="mt-4">
//               Africa Business Festival believes that by harmonizing our efforts,
//               we can drive economic independence and become the masters of our
//               own fate.
//             </p>
//           </div>

//           {/* Our Vision */}
//           <div className="bg-orange-500 text-white p-6 shadow-lg rounded-lg text-center">
//             <h3 className="text-lg font-semibold uppercase">Our Vision</h3>
//             <p className="mt-4">
//               To foster collaboration among African businesses and seize the new
//               opportunities emerging on our continent.
//             </p>
//           </div>

//           {/* Core Values */}
//           <div className="bg-orange-500 text-white p-6 shadow-lg rounded-lg text-center">
//             <h3 className="text-lg font-semibold uppercase">Core Values</h3>
//             <ul className="mt-4 list-disc list-inside">
//               <li>Innovation</li>
//               <li>Collaboration</li>
//               <li>Integrity</li>
//               <li>Sustainability</li>
//             </ul>
//           </div>

//           {/* Key Services */}
//           <div className="bg-orange-500 text-white p-6 shadow-lg rounded-lg text-center">
//             <h3 className="text-lg font-semibold uppercase">Key Services</h3>
//             <p className="mt-4">
//               - Networking events
//               <br />
//               - Business workshops
//               <br />
//               - Investment opportunities
//               <br />- Panel discussions with experts
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Services Section */}
//       <div className="bg-white ">
//         {/* Video Section */}

//         <div className="relative">
//           <video
//             className="w-full h-[20rem] md:h-[25rem] lg:h-[30rem] object-cover"
//             controls
//             autoplay
//             loop
//             muted
//             poster="video-poster.jpg" // Optional placeholder image
//           >
//             <source src={vid} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>

//         {/* Image and Heading Section Below Video */}
//         <div className="relative">
//           <div
//             className="relative w-full h-[15rem] md:h-[20rem] lg:h-[25rem] bg-cover bg-center"
//             style={{ backgroundImage: `url(${bgImage})` }}
//           >
//             <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
//               <h2 className="text-4xl text-white font-bold text-center">
//                 Our Key Moments
//               </h2>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React from 'react';
import { motion } from 'framer-motion';
import img from '../../assets/images/hero3.jpg';

const About = () => {
  return (
    <div className="bg-gradient-to-r from-bgColor to-[#4F0945]/80 font-poppins">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-12 max-w-7xl mx-auto font-poppins">
        {/* Left content: Title */}
        <div className="max-w-lg text-center md:text-left text-black">
          <h3 className="text-xl font-semibold text-fontColors">ABOUT US</h3>
          <h1 className="text-4xl font-bold text-white mt-4">
            Africa Business Festival 2025
          </h1>
          <p className="text-lg text-fontColors mt-4">
            Uniting African Businesses for Global Impact: Overcoming Challenges,
            Building Skills, and Growing Together
          </p>
        </div>

        {/* Right content: Description */}
        <div className="max-w-3xl mt-8 md:mt-0 md:ml-12">
          <p className="text-sm md:text-xl text-center md:text-left text-white">
            The Africa Business Festival 2025 is the premier platform for
            African entrepreneurs, business leaders, policymakers, and global
            investors to collaborate, innovate, and create a unified economic
            zone for Africa. This event focuses on fostering partnerships,
            encouraging foreign investments, and positioning African businesses
            on the global stage.
          </p>
        </div>
      </div>

      {/* Main Container with Flexbox */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-8 max-w-7xl mx-auto">
        {/* Who Can Attend Section */}
        <div className="relative mt-12 rounded-lg overflow-hidden w-full md:w-1/2">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${img})`,
            }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#130514] opacity-65"></div>

          {/* Content */}
          <div className="relative p-12 text-center">
            <h2 className="text-3xl font-semibold text-white mb-4">
              Who Can Attend
            </h2>
            <ul className="list-none space-y-4 text-white font-light">
              <li>Entrepreneurs and business owners across Africa</li>
              <li>Government officials and policymakers</li>
              <li>International investors and venture capitalists</li>
              <li>
                Financial institutions (banks, microfinance, fintech companies)
              </li>
              <li>Industry leaders and business associations</li>
              <li>Media houses and business journalists</li>
            </ul>
          </div>
        </div>
        {/* Text Content Section on the Right */}
        <div className="w-full md:w-1/2 pl-8 mt-8 md:mt-0">
          <motion.div
            className="bg-gray-200 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl text-fontColors font-semibold">Mission</h3>
            <p className="leading-relaxed text-black mt-4">
              Africa Business Festival believes that by harmonizing our efforts,
              we can drive economic independence and become the masters of our
              own fate.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-200 p-6 rounded-lg shadow-lg mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-2xl text-fontColors font-semibold ">
              Key Objectives
            </h3>
            <p className="leading-relaxed text-black mt-4">
              - Foster partnerships among African entrepreneurs and
              international investors.
              <br />
              - Provide actionable insights into expanding businesses globally.
              <br />
              - Drive investment in African startups and SMEs.
              <br />
              - Promote the African Continental Free Trade Agreement (AfCFTA).
              <br />- Address critical business challenges and provide
              skill-building opportunities.
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-200 p-6 rounded-lg shadow-lg mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-2xl text-fontColors font-semibold">
              Why Attend
            </h3>
            <p className="leading-relaxed text-black mt-4">
              <span className="font-semibold text-fontColors">
                Networking Opportunities:
              </span>{' '}
              Connect with leading entrepreneurs, investors, and policymakers.
              <br />
              <span className="font-semibold text-fontColors">
                Practical Learning:
              </span>{' '}
              Participate in workshops and masterclasses tailored to your
              business needs.
              <br />
              <span className="font-semibold text-fontColors">
                Global Exposure:
              </span>{' '}
              Learn how to scale your business across borders.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      {/* <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-gray-800">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {[
              {
                icon: '🌍',
                title: 'Global Networking',
                description:
                  'Connect with entrepreneurs, business leaders, and investors from around the world.',
              },
              {
                icon: '📚',
                title: 'Workshops & Masterclasses',
                description:
                  'Participate in tailored workshops that cater to the unique needs of African businesses.',
              },
              {
                icon: '💼',
                title: 'Investment Opportunities',
                description:
                  'Explore opportunities to invest in African startups and small businesses.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg text-center hover:shadow-xl transition duration-300"
              >
                <div className="text-4xl">{service.icon}</div>
                <h4 className="mt-4 text-lg font-bold text-gray-800">
                  {service.title}
                </h4>
                <p className="mt-2 text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default About;
