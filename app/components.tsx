"use client";
import { deleteCookie, getCookie } from "cookies-next";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { CiUser } from "react-icons/ci";

// ------------------------Navbar--------------------------------
export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Define an array of navbar items
  const navItems = [
    { text: "Home", link: "/" },
    { text: "About Us", link: "/about" },
    { text: "Library", link: "/library" },
    { text: "Contact", link: "/contact" },
    { text: "Messages", link: "/message" },
  ];

  return (
    <div className="bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-white font-bold text-2xl">
              Epaphras Ministries
            </Link>
          </div>
          <div className="flex justify-center flex-1 md:justify-around">
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4 text-white">
                {/* Map over navItems array to render navbar links */}
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    className=" px-3 py-2 rounded-md"
                  >
                    {item.text}
                  </Link>
                ))}
              </div>
            </div>
            {/* <Link
              href="/admin"
              className=" flex gap-2 text-white py-2 rounded-md"
            >
              <CiUser className=" text-2xl font-bold" />
              Login
            </Link> */}
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="bg-primary inline-flex items-center justify-center p-2 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden text-white" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Render mobile menu links dynamically */}
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="hover:text-white block px-3 py-2 rounded-md text-bas"
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// --------------------------Carousel------------------------

export const Carousel = () => {
  const [carousel, setCarousel] = useState([
    {
      image: "/epm/home/carousel/1.JPG",
      id: 1,
    },
    {
      image: "/epm/home/carousel/2.JPG",
      id: 2,
    },
    {
      image: "/epm/home/carousel/3.JPG",
      id: 3,
    },
    {
      image: "/epm/home/carousel/4.JPG",
      id: 4,
    },
    {
      image: "/epm/home/carousel/5.JPG",
      id: 5,
    },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carousel.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + carousel.length) % carousel.length,
    );
  };

  return (
    <div className="relative w-full h-[300px] md:h-[600px]">
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out">
          {carousel.map((item, index) => (
            <img
              key={item.id}
              src={item.image.replace(/.*\/public/, "http://localhost:3000/")}
              alt={`Slide ${index}`}
              className={`w-full h-full object-cover absolute top-0 left-0 opacity-0 ${
                index === currentIndex ? "opacity-100" : ""
              }`}
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 left-0 flex justify-center w-full">
        {carousel.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`mx-1 w-4 h-4 rounded-full bg-gray-500 hover:bg-gray-700 ${
              index === currentIndex ? "bg-gray-800" : ""
            }`}
          />
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 bg-transparent bg-blue-400 hover:bg-gray-200 rounded-full p-2"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 18l-6-6l6-6"
          />
        </svg>
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 bg-transparent bg-blue-400 hover:bg-gray-200 rounded-full p-2"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

// ----------------------- Footer --------------------

import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export const Footer: React.FC = () => {
  const footer = [
    { name: "About us ", href: "/about" },
    { name: "Library", href: "/library" },
    { name: "Contact", href: "/contact" },
    { name: "Messages", href: "/message" },
  ];
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto py-12 px-20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-lg font-bold">Epaphras Ministries</p>
            <p className="text-sm mt-2">Follow us on social media:</p>
            <div className="flex justify-around md:justify-start mt-2 gap-4">
              <Link
                href="https://www.facebook.com/Epaphrasministrieshyd/"
                target="_blank"
                className="text-white hover:text-gray-300"
              >
                <FaFacebook />
              </Link>
              <Link
                href="#"
                target="_blank"
                className="text-white hover:text-gray-300"
              >
                <FaTwitter />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCtBqdgXf6fmgAVYT1X-_aDA"
                target="_blank"
                className="text-white hover:text-gray-300 "
              >
                <FaYoutube />
              </Link>
            </div>
          </div>
          <nav className="text-center md:text-right">
            {footer.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-base hover:underline inline-block mr-4"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="bg-black text-center py-4">
        <div className="container mx-auto">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Epaphras Ministries. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
