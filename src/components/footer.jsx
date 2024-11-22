import React from "react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-bgColor to-[#4F0945] h-72 w-full rounded-t-3xl p-6 text-fontColors">
      {/* Grid Layout */}
      <div className="grid grid-cols-3 gap-8 h-full">
        {/* Column 1: Logo and Copyright */}
        <div className="flex flex-col justify-between">
          {/* Logo */}
          <div className="mb-4">
            <img src="" alt="Logo" className="h-10 w-auto" />
          </div>
          {/* Copyright */}
          <span>© 2024. All rights reserved</span>
        </div>

        {/* Column 2: Navigation Links and Icons */}
        <div className="flex flex-col justify-between">
          {/* Navigation Links */}
          <div className="flex flex-col space-y-4 text-lg">
            <span className="cursor-pointer hover:text-white">Sponsor</span>
            <span className="cursor-pointer hover:text-white">About</span>
            <span className="cursor-pointer hover:text-white">Contact</span>
            <span className="cursor-pointer hover:text-white">Newsletter</span>
          </div>
          {/* Icons */}
          <div className="flex space-x-4">
            <span className="cursor-pointer">socials 1</span>
            <span className="cursor-pointer">socials 2</span>
            <span className="cursor-pointer">socials 3</span>
          </div>
        </div>

        {/* Column 3: News Subscription */}
        <div className="flex flex-col justify-between">
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
    </div>
  );
};

export default Footer;
