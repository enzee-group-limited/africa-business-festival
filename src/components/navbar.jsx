import React, { useState } from 'react';
import K from '../constant/index';
import { FiMenu, FiX } from 'react-icons/fi';
<<<<<<< HEAD
// import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
=======
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
>>>>>>> 6800382ab44920d6bce2914847269c780424c06e
import logo from '../assets/images/abf2.png';

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close the menu after clicking
  };

  return (
    <nav className="bg-bgColor text-fontColors px-6 py-4 fixed top-0 left-0 w-full z-50 flex justify-between items-center font-poppins">
      {/* Logo Image */}
      <div className="flex items-center">
        <img src={logo} alt="ENZEE (ABF) Logo" className="h-10 w-auto" />
      </div>

      {/* Hamburger Menu */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
<<<<<<< HEAD
        } md:flex flex-col md:flex-row md:space-x-8 text-lg md:items-center absolute md:static top-16 left-0 right-0 bg-bgColor px-6 md:px-0 py-4 md:py-0`}
=======
        } md:flex flex-col md:flex-row md:space-x-8 text-lg bg-[#4F0945] md:items-center absolute md:static top-16 left-0 right-0  px-6 md:px-0 py-4 md:py-0`}
>>>>>>> 6800382ab44920d6bce2914847269c780424c06e
      >
        <ul className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
          {K.NAVLINKS.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => scrollToSection(item.name.toLowerCase())}
                className={`py-2 md:py-0 hover:text-white ${
                  activeSection === item.name.toLowerCase()
                    ? 'underline decoration-white'
                    : ''
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Social Media Icons */}
      {/* <div className="hidden md:flex font-nunito text-xl gap-x-4">
        <a
          href="https://facebook.com/africabusinessfestival"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#5A138A]"
        >
          <FaFacebookF className="text-2xl" />
        </a>
        <a
          href="https://twitter.com/africabizfest"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <FaTwitter className="text-2xl" />
        </a>
        <a
          href="https://instagram.com/africabusinessfestival"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400"
        >
          <FaInstagram className="text-2xl" />
        </a>
<<<<<<< HEAD
      </div> */}
=======
        <a
          href="https://www.linkedin.com/company/enzee-group-limited"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700"
        >
          <FaLinkedin className="text-2xl" />
        </a>
      </div>
>>>>>>> 6800382ab44920d6bce2914847269c780424c06e
    </nav>
  );
};

export default Navbar;
