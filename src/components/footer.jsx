import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from '../assets/images/abf2.png';
import React from 'react';
import { fbIcon, IgIcon, linkedin, twitter } from '../assets';

const Footer = () => {
  return (
    <div className="bg-bgColor h-auto w-full p-6 text-fontColors">
      <footer>
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <img src={logo} className="h-14 me-3" alt="Logo" />
              {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Logo
              </span> */}
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Navigation
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://forms.gle/RiymWA5sQaonNrys8"
                      className="hover:underline"
                    >
                      Sponsor / Partner
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://forms.gle/RiymWA5sQaonNrys8"
                      className="hover:underline"
                    >
                      Register
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  News Letter
                </h2>
                {/* Column 3: News Subscription */}
                <div className="flex flex-col">
                  {/* Subscription Heading */}
                  {/* Input Field and Button */}
                  <div className="flex flex-col space-y-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="p-2 rounded bg-white text-black placeholder-gray-500 focus:outline-none"
                    />
                    <button className="p-2 bg-[#6A1B9A] text-white rounded hover:bg-[#5A138A]">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2024{' '}
              <a href="" className="hover:underline">
                Your Company
              </a>
              . All Rights Reserved.
            </span>
 {/* Social Media Icons */}
 {/* Social Media Icons */}
<div className="flex font-nunito text-xl gap-x-4">
  <a
    href="https://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:opacity-80"
  >
    <img src={fbIcon} alt="Facebook" className="h-6 w-6" />
  </a>
  <a
    href="https://twitter.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:opacity-80"
  >
    <img src={twitter} alt="Twitter" className="h-6 w-6" />
  </a>
  <a
    href="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:opacity-80"
  >
    <img src={IgIcon} alt="Instagram" className="h-6 w-6" />
  </a>
  <a
    href="https://linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:opacity-80"
  >
    <img src={linkedin} alt="Linkedin" className="h-6 w-6" />
  </a>
</div>

          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
