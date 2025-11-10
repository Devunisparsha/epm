"use client";
import { deleteCookie, getCookie } from "cookies-next";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { CiUser } from "react-icons/ci";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);

  const navItems = [
    { text: "Home", link: "/" },
    { text: "About Us", link: "/about" },
    { text: "Library", link: "/library" },
    { text: "Contact", link: "/contact" },
    { text: "Messages", link: "/message" },
  ];

  const handleNavigation = (link: string) => {
    window.location.href = link;
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-11/12 max-w-4xl z-50 bg-white shadow-lg font-inter rounded-full py-2 px-4 sm:px-6 lg:px-8 transition-all duration-300 ease-in-out">
      <div className="flex items-center justify-between h-12">
        <div className="flex-shrink-0">
          <a
            href="/"
            className="text-blue-700 font-extrabold text-xl sm:text-2xl tracking-wide flex items-center gap-2"
          >
            Epaphras Ministries
          </a>
        </div>
        <div className="hidden md:flex flex-1 justify-center space-x-4 lg:space-x-6">
          {navItems.map((item) => (
            <a
              key={item.text}
              href={item.link}
              className="text-gray-600 hover:text-blue-600 px-3 py-1 rounded-md text-base font-medium transition duration-300 ease-in-out transform hover:scale-105"
              onClick={() => handleNavigation(item.link)}
            >
              {item.text}
            </a>
          ))}
        </div>
        <div className="-mr-2 flex md:hidden">
          <button
            onClick={toggleNavbar}
            type="button"
            className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition duration-200 ease-in-out"
            aria-controls="mobile-menu"
            aria-expanded="false"
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

      {isOpen && (
        <div
          className="absolute top-full left-1/2 -translate-x-1/2 w-11/12 max-w-4xl md:hidden bg-white shadow-lg rounded-b-lg py-2 mt-2"
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.text}
                href={item.link}
                className="block text-gray-700 hover:text-blue-600 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out"
                onClick={() => {
                  toggleNavbar();
                  handleNavigation(item.link);
                }}
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export const Carousel = () => {
  const [carousel, setCarousel] = useState([
    { image: "/home/carousel/1.webp", id: 1 },
    { image: "/home/carousel/2.webp", id: 2 },
    { image: "/home/carousel/3.webp", id: 3 },
    { image: "/home/carousel/4.webp", id: 4 },
    { image: "/home/carousel/5.webp", id: 5 },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const minSwipeDistance = 50;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carousel.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + carousel.length) % carousel.length,
    );
  };

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = 0;
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    if (touchEndX.current === 0) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) handleNext();
    else if (isRightSwipe) handlePrev();
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, carousel.length]);

  return (
    <div
      className="relative w-full h-[350px] md:h-[650px] overflow-hidden rounded-xl shadow-2xl mx-auto my-8 border border-gray-200"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="relative w-full h-full">
        {carousel.map((item, index) => (
          <img
            key={item.id}
            src={item.image}
            alt={`Slide ${index + 1}`}
            className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-6 left-0 right-0 flex justify-center w-full z-10 space-x-2">
        {carousel.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full bg-white transition-all transform duration-300
              ${
                index === currentIndex
                  ? "scale-125 ring-2 ring-blue-500 shadow-md"
                  : "opacity-70 hover:opacity-100"
              }
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 md:p-4 shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 z-10 opacity-80 hover:opacity-100"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6 md:w-7 md:h-7"
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
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 md:p-4 shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 z-10 opacity-80 hover:opacity-100"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6 md:w-7 md:h-7"
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

export const Footer: React.FC = () => {
  const footerLinks = [
    { name: "About us", href: "/about" },
    { name: "Library", href: "/library" },
    { name: "Contact", href: "/contact" },
    { name: "Messages", href: "/message" },
  ];

  return (
    <footer className="bg-gradient-to-r from-blue-700 to-blue-800 text-white shadow-lg">
      <div className="container mx-auto py-8 px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-2xl font-extrabold mb-2 tracking-wide">
              Epaphras Ministries
            </p>
            <p className="text-sm md:text-base text-gray-200 mt-2">
              Follow us on Social Media:
            </p>
            <div className="flex justify-center md:justify-start mt-4 gap-6">
              <Link
                href="https://www.facebook.com/Epaphrasministrieshyd/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transform hover:scale-110 transition duration-300 text-2xl"
                aria-label="Facebook"
              >
                <FaFacebook />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCtBqdgXf6fmgAVYT1X-_aDA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transform hover:scale-110 transition duration-300 text-2xl"
                aria-label="YouTube"
              >
                <FaYoutube />
              </Link>
            </div>
          </div>

          <nav className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-center md:text-left">
            {footerLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-base md:text-lg text-gray-100 hover:text-white hover:underline hover:scale-105 transition-all duration-300 whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="bg-blue-900 text-center py-4 px-6">
        <div className="container mx-auto">
          <p className="text-xs md:text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Epaphras Ministries. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

import Head from "next/head";

export const YouthRetreat = () => {
  const googleFormLink = "https://forms.gle/5zrt3denr5RBcQqHA";

  return (
    <>
      <Head>
        <title>Epaphras Ministries Youth Retreat 2025</title>
        <meta
          name="description"
          content="Join us for a spiritual journey at the Epaphras Ministries Youth Retreat!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative bg-gradient-to-br from-[#2D3ED2] via-[#3DC4F0] to-[#9C8CF3] min-h-screen flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        {/* Decorative Blurs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-72 h-72 bg-white opacity-10 rounded-full top-[-4rem] left-[-4rem] blur-3xl"></div>
          <div className="absolute w-96 h-96 bg-white opacity-10 rounded-full bottom-[-6rem] right-[-6rem] blur-3xl"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 bg-white/90 backdrop-blur-md p-10 sm:p-12 rounded-3xl shadow-2xl max-w-2xl w-full text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Epaphras Ministries
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#2D3ED2] mb-6">
            Youth Retreat 2025
          </h2>

          <p className="text-gray-700 text-md sm:text-lg md:text-xl mb-4 leading-relaxed">
            Join us for a powerful weekend of worship, growth, and unforgettable
            memories.
          </p>

          {/* Tagline in English */}
          <p className="text-gray-800 font-medium text-sm sm:text-base md:text-lg italic mb-2">
            "Encounter God. Embrace Purpose. Ignite Your Faith."
          </p>

          {/* Tagline in Telugu */}
          <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-6 leading-snug">
            దేవుని ప్రేమను అనుభవించి, కొత్తగా జీవించండి!
          </p>

          {/* Event Info Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {/* Date Box */}
            <div className="bg-[#EEF2FF] border border-[#CBD5E1] rounded-xl shadow-sm px-5 py-4 text-left">
              <h3 className="text-[#2D3ED2] font-semibold text-lg mb-2">
                📅 Dates
              </h3>
              <p className="text-gray-800 font-medium text-base">
                September 23 – 25, 2025
              </p>
            </div>

            {/* Venue Box */}
            <div className="bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl shadow-sm px-5 py-4 text-left">
              <h3 className="text-green-700 font-semibold text-lg mb-2">
                📍 Venue
              </h3>
              <p className="text-gray-800 text-base leading-relaxed">
                WORD AND DEED HIGH SCHOOL, Vijayawada Hwy, Samson Colony,
                Hayathnagar_Khalsa, Hyderabad, Telangana 501505
              </p>
            </div>
          </div>

          {/* Register Button */}
          <a
            href={googleFormLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#2D3ED2] text-white font-semibold text-md sm:text-lg py-3 px-8 rounded-full shadow-lg hover:bg-[#1f2aad] focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 transform hover:scale-105"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </>
  );
};
