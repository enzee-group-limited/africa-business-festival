import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-bgColor   to-[#4F0945] text-fontColors">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center  font-poppins font-extrabold text-4xl mb-8">
          <h2 className="text-[3rem] md:text-4xl py-10 font-bold">
            Get in Touch
          </h2>
          <p className=" md:text-xl m-2 font-light text-white">
            Reach out to us through phone, email, or visit our office.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-center">
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
    </div>
  );
};

export default Contact;
