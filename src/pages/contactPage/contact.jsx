import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-bgColor uppercase  to-[#4F0945] text-fontColors">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Heading */}
        <div className="text-center  font-poppins font-extrabold text-4xl mb-8">
          <h2 className="text-[3rem] md:text-4xl py-10 font-bold">Get in Touch</h2>
          <p className="text-lg md:text-xl mt-2 text-gray-500">
            Reach out to us via phone, email, or visit our office.
          </p>
        </div>

        {/* Contact Details Grid */}
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {/* Location */}
          <div>
            <div className="flex justify-center mb-4">
              <span className="bg-white text-purple-500 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2c3.866 0 7 3.134 7 7 0 5.25-7 13-7 13S5 14.25 5 9c0-3.866 3.134-7 7-7z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 10a2 2 0 100-4 2 2 0 000 4z"
                  />
                </svg>
              </span>
            </div>
            <p className="font-semibold">9th Floor, Emporium Building</p>
            <p>Movenpick Ambassador Hotel, Independence Avenue</p>
          </div>

          {/* Phone */}
          <div>
            <div className="flex justify-center mb-4">
              <span className="bg-white text-purple-500 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28c.356 0 .695.14.94.385l2.244 2.243a2 2 0 00.94.386H15.6c.314 0 .617.123.845.343l3.154 3.154c.22.22.343.53.343.845v1.886c0 .314-.123.617-.343.845l-4.02 4.02a4.5 4.5 0 01-6.364 0L5 15a2 2 0 01-.586-1.414V6a2 2 0 01.586-1.414z"
                  />
                </svg>
              </span>
            </div>
            <p className="font-semibold">
              <a href="tel:+233599428555" className="hover:underline">
                +233 599 428 555
              </a>
            </p>
            <p>
              <a href="tel:+233302633294" className="hover:underline">
                +233 302 633 294
              </a>
            </p>
          </div>

          {/* Email */}
          <div>
            <div className="flex justify-center mb-4">
              <span className="bg-white text-purple-500 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5c0 1.933-2.686 3.5-6 3.5s-6-1.567-6-3.5M12 3C9.015 3 6.5 4.879 6.5 7.2c0 2.62 5.214 5.8 5.214 5.8s5.214-3.18 5.214-5.8C17.214 4.879 14.985 3 12 3zm0 6a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
                  />
                </svg>
              </span>
            </div>
            <p className="font-semibold">
              <a href="mailto:enzeegroup@gmail.com" className="hover:underline">
                enzeegroup@gmail.com
              </a>
            </p>
            <p>
              <a
                href="mailto:eldee.sefadzi@enzeegh.com"
                className="hover:underline"
              >
                eldee.sefadzi@enzeegh.com
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
