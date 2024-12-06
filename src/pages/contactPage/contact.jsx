import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-bgColor   to-[#4F0945] text-fontColors">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Heading */}
        <div className="text-center  font-poppins font-extrabold text-4xl mb-8">
          <h2 className="text-[3rem] md:text-4xl py-10 font-bold">
            Get in Touch
          </h2>
          <p className=" md:text-xl m-2 font-light text-white">
            Reach out to us through phone, email, or visit our office.
          </p>
        </div>

        {/* Contact Details Grid */}
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {/* Location */}
          <div>
            <div className="flex justify-center mb-4">
              <span className="bg-white text-purple-500 p-3 rounded-full">
                <FaMapMarkerAlt className="w-6 h-6" />
              </span>
            </div>
            <p className="text-base md:text-xl font-medium ">
              <a
                href="https://maps.app.goo.gl/5TzuBp1bigQa2Jzp7?g_st=atm"
                target="_blank"
                rel="noopener noreferrer"
              >
                9th Floor, Emporium Building, Movenpick Ambassador Hotel,
                Independence Avenue, Accra, Ghana
              </a>
            </p>
          </div>

          {/* Phone */}
          <div>
            <div className="flex justify-center mb-4">
              <span className="bg-white text-purple-500 p-3 rounded-full">
                <FaPhone className="w-6 h-6" />
              </span>
            </div>
            <p className="text-base md:text-xl font-medium ">
              <a href="tel:+233599428555" className="hover:underline">
                +233 599 428 555
              </a>
            </p>
          </div>

          {/* Email */}
          <div>
            <div className="flex justify-center mb-4">
              <span className="bg-white text-purple-500 p-3 rounded-full">
                <FaEnvelope className="w-6 h-6" />
              </span>
            </div>
            <p className="text-base md:text-xl font-medium ">
              <a
                href="mailto: info@africabusinessfestival.com"
                className="hover:underline"
              >
                info@africabusinessfestival.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Map Section */}
      {/* <div className="w-full h-64">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.556392973621!2d-0.2039007!3d5.5590716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10208ef5f83b9e8f%3A0x3a8b42079c80d7b6!2sEmporium%20Building%2C%20Accra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1698765432100!5m2!1sen!2sus"
          title="Google Maps Location"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div> */}
    </div>
  );
};

export default Contact;
