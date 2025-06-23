import React, { useState } from 'react'
import logo from '../assets/images/eleneLOgo-removebg-preview.png'
import { MdOutlineMenu } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="w-full fixed top-0 right-0 p-4 z-50 
      bg-black/50 shadow-[0_2px_10px_rgba(0,0,0,0.3)]">

      <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16">

        {/* მარცხენა მხარე: ლოგო + მენიუს ღილაკი */}
        <div className="w-full flex items-center justify-between ">
          <img src={logo} className="w-12 h-12 rounded-full" alt="Logo" />

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="block md:hidden text-white text-2xl"
          >
            {isMenuOpen ? <RiMenu3Fill /> : <MdOutlineMenu />}
          </button>
        </div>

        {/* მარჯვენა მხარე: Desktop ლინკები */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`text-sm font-medium relative 
                after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 
                hover:after:w-full after:bg-blue-600 after:transition-all ${
                  activeLink === link.href
                    ? "text-blue-600 after:w-full"
                    : "text-white/90 hover:text-white"
                }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* მობილური მენიუ */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/50 shadow-[0_2px_10px_rgba(0,0,0,0.3)] py-4">
          <div className="container mx-auto px-4 space-y-3">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.href);
                  setIsMenuOpen(false);
                }}
                className={`block text-sm text-center font-medium py-2 ${
                  activeLink === link.href
                    ? "text-blue-600"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
