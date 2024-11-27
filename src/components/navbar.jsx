// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import { BiMenu } from 'react-icons/bi';
// import { IoMdArrowDropdown } from 'react-icons/io';
// import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
// import K from '../constant';

// const Navbar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile hamburger menu
//   const dropdownRef = useRef(null);

//   // Toggle dropdown visibility
//   const handleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   // Close dropdown on outside click
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   // Toggle mobile menu visibility
//   const handleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="bg-gradient-to-r from-bgColor to-[#4F0945] p-4 text-fontColors">
//       <div className="flex justify-between items-center md:justify-around">
//         {/* Brand Logo */}
//         <Link to="/" className="font-courgette text-2xl">
//           ENZEE(ABF)
//         </Link>

//         {/* Hamburger Icon for Mobile */}
//         <div className="md:hidden">
//           <BiMenu className="text-3xl cursor-pointer" onClick={handleMenu} />
//         </div>

//         {/* Desktop Links */}
//         <div className="hidden md:flex font-nunito text-xl gap-x-10">
//           {K.NAVLINKS.map((item, index) => (
//             <div
//               key={index}
//               className="relative"
//               ref={item.name === 'Products' ? dropdownRef : null}
//             >
//               {item.dropdown ? (
//                 <div
//                   className="flex items-center cursor-pointer hover:text-white"
//                   onClick={handleDropdown}
//                 >
//                   <p>{item.name}</p>
//                   <IoMdArrowDropdown className="ml-1" />
//                 </div>
//               ) : (
//                 <Link to={item.path} className="hover:text-white">
//                   {item.name}
//                 </Link>
//               )}

//               {/* Dropdown */}
//               {item.dropdown && isDropdownOpen && (
//                 <div className="absolute bg-white border mt-2 p-2 shadow-lg">
//                   {item.dropdown.map((subItem, subIndex) => (
//                     <Link
//                       key={subIndex}
//                       to={subItem.path}
//                       className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//                     >
//                       {subItem.name}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Social Media Links (Desktop) */}
//         <div className="hidden md:flex font-nunito text-xl gap-x-4">
//           <a
//             href="https://facebook.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-[#5A138A]"
//           >
//             <FaFacebookF className="text-2xl" />
//           </a>
//           <a
//             href="https://twitter.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-blue-400"
//           >
//             <FaTwitter className="text-2xl" />
//           </a>
//           <a
//             href="https://instagram.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-pink-400"
//           >
//             <FaInstagram className="text-2xl" />
//           </a>
//         </div>
//       </div>

//       {/* Mobile Links - Hamburger Menu */}
//       {isMenuOpen && (
//         <div className="flex flex-col mt-4 md:hidden">
//           {K.NAVLINKS.map((item, index) => (
//             <div
//               key={index}
//               className="relative mb-2"
//               ref={item.name === 'Products' ? dropdownRef : null}
//             >
//               {item.dropdown ? (
//                 <div
//                   className="flex items-center justify-between cursor-pointer hover:text-white"
//                   onClick={handleDropdown}
//                 >
//                   <p>{item.name}</p>
//                   <IoMdArrowDropdown className="ml-1" />
//                 </div>
//               ) : (
//                 <Link to={item.path} className="block py-2 hover:text-white">
//                   {item.name}
//                 </Link>
//               )}

//               {/* Mobile Dropdown */}
//               {item.dropdown && isDropdownOpen && (
//                 <div className="bg-white border mt-2 p-2 shadow-lg">
//                   {item.dropdown.map((subItem, subIndex) => (
//                     <Link
//                       key={subIndex}
//                       to={subItem.path}
//                       className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//                     >
//                       {subItem.name}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}

//           {/* Social Media Links for Mobile */}
//           <div className="flex flex-col mt-4 gap-y-2">
//             <a
//               href="https://facebook.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="py-2"
//             >
//               <FaFacebookF className="text-2xl" />
//             </a>
//             <a
//               href="https://twitter.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="py-2"
//             >
//               <FaTwitter className="text-2xl" />
//             </a>
//             <a
//               href="https://instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="py-2"
//             >
//               <FaInstagram className="text-2xl" />
//             </a>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import K from '../constant/index';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

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
    <nav className="bg-gradient-to-r from-bgColor to-[#4F0945]  text-fontColors px-6 py-4 fixed top-0 left-0 w-full z-50 flex justify-between items-center">
      <div className="text-4xl font-bold">ENZEE(ABF)</div>

      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      <div
        className={`${
          isOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row md:space-x-8 text-lg md:items-center absolute md:static top-16 left-0 right-0  px-6 md:px-0 py-4 md:py-0`}
      >
        {K.NAVLINKS.map((item) => (
          <button
            key={item.name}
            onClick={() => scrollToSection(item.name.toLowerCase())}
            className={`py-2 md:py-0 hover:text-white ${
              activeSection === item.name.toLowerCase() ? 'underline' : ''
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className="hidden md:flex font-nunito text-xl gap-x-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#5A138A]"
        >
          <FaFacebookF className="text-2xl" />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <FaTwitter className="text-2xl" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-400"
        >
          <FaInstagram className="text-2xl" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
6;
