"use client";
import { deleteCookie, getCookie } from "cookies-next";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
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
  // State to manage the carousel items
  const [carousel, setCarousel] = useState([
    {
      image: "/home/carousel/1.webp",
      id: 1,
    },
    {
      image: "/home/carousel/2.webp",
      id: 2,
    },
    {
      image: "/home/carousel/3.webp",
      id: 3,
    },
    {
      image: "/home/carousel/4.webp",
      id: 4,
    },
    {
      image: "/home/carousel/5.webp",
      id: 5,
    },
  ]);

  // State to keep track of the currently active slide index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Refs to store touch start and end coordinates for swipe detection
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  // Minimum horizontal distance required for a swipe gesture to be registered
  const minSwipeDistance = 50;

  /**
   * Handles navigation to the next slide.
   * Uses the modulo operator to loop back to the first slide
   * after reaching the last slide.
   */
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carousel.length);
  };

  /**
   * Handles navigation to the previous slide.
   * Uses a common pattern with modulo for correct negative indexing
   * to loop back to the last slide after reaching the first.
   */
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + carousel.length) % carousel.length,
    );
  };

  // Corrected type for the event parameter
  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = 0; // Reset end position for a new swipe
  };

  // Corrected type for the event parameter
  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };

  /**
   * Determines the swipe direction and triggers slide change on touch end.
   * A swipe is registered if the horizontal distance exceeds `minSwipeDistance`.
   */
  const onTouchEnd = () => {
    // If touchEndX is still 0, it means no significant horizontal movement occurred
    if (touchEndX.current === 0) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance; // Swiping left (dragging finger left)
    const isRightSwipe = distance < -minSwipeDistance; // Swiping right (dragging finger right)

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
    // Reset touch coordinates after swipe detection
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <div
      // Main container for the carousel
      // Sets responsive height and attaches touch event listeners for swiping.
      className="relative w-full h-[300px] md:h-[600px] overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Inner container for images. Uses relative positioning to allow
          absolutely positioned child images to stack. */}
      <div className="relative w-full h-full">
        {carousel.map((item, index) => (
          // Using a standard <img> tag.
          // Images are absolutely positioned to stack on top of each other.
          // Opacity and transition classes manage the fade effect.
          <img
            key={item.id}
            src={item.image}
            alt={`Slide ${index + 1}`}
            className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            // No explicit width/height props are needed here as 'w-full h-full object-cover'
            // classes handle sizing and aspect ratio within the container.
          />
        ))}
      </div>

      {/* Dot Indicators for navigation */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center w-full z-10">
        {carousel.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            // Responsive sizing and enhanced styling for dots.
            className={`mx-1 w-3 h-3 md:w-4 md:h-4 rounded-full bg-gray-400 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors transform ${
              index === currentIndex ? "bg-gray-800 scale-125" : "" // Active dot is darker and slightly larger
            }`}
            aria-label={`Go to slide ${index + 1}`} // Accessibility label
          />
        ))}
      </div>

      {/* Previous Slide Button */}
      <button
        onClick={handlePrev}
        // Responsive positioning and enhanced styling with transparency and shadow.
        className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 bg-blue-500 bg-opacity-70 hover:bg-opacity-100 text-white rounded-full p-2 md:p-3 shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 z-10"
        aria-label="Previous slide" // Accessibility label
      >
        <svg
          className="w-5 h-5 md:w-6 md:h-6" // Responsive SVG icon size
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

      {/* Next Slide Button */}
      <button
        onClick={handleNext}
        // Responsive positioning and enhanced styling with transparency and shadow.
        className="absolute top-1/2 right-2 md:right-4 -translate-y-1/2 bg-blue-500 bg-opacity-70 hover:bg-opacity-100 text-white rounded-full p-2 md:p-3 shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 z-10"
        aria-label="Next slide" // Accessibility label
      >
        <svg
          className="w-5 h-5 md:w-6 md:h-6" // Responsive SVG icon size
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

/**
 * A responsive and visually appealing footer component for the website.
 * It includes navigation links, Social Media icons, and copyright information.
 */
export const Footer: React.FC = () => {
  // Navigation items for the footer
  const footerLinks = [
    { name: "About us", href: "/about" },
    { name: "Library", href: "/library" },
    { name: "Contact", href: "/contact" },
    { name: "Messages", href: "/message" },
  ];

  return (
    <footer className="bg-gradient-to-r from-blue-700 to-blue-800 text-white shadow-lg">
      <div className="container mx-auto py-8 px-6 md:px-12 lg:px-20">
        {/* Main content section of the footer */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">

          {/* Branding and Social Media Section */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-2xl font-extrabold mb-2 tracking-wide">Epaphras Ministries</p>
            <p className="text-sm md:text-base text-gray-200 mt-2">Follow us on Social Media:</p>
            <div className="flex justify-center md:justify-start mt-4 gap-6">
              {/* Facebook Icon */}
              <Link
                href="https://www.facebook.com/Epaphrasministrieshyd/"
                target="_blank"
                rel="noopener noreferrer" // Recommended for target="_blank" for security
                className="text-white hover:text-blue-300 transform hover:scale-110 transition duration-300 text-2xl"
                aria-label="Facebook"
              >
                <FaFacebook />
              </Link>
              {/* Twitter Icon */}
              {/* <Link
                href="#" // Placeholder for Twitter link
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transform hover:scale-110 transition duration-300 text-2xl"
                aria-label="Twitter"
              >
                <FaTwitter />
              </Link> */}
              {/* YouTube Icon */}
              <Link
                href="https://www.youtube.com/channel/UCtBqdgXf6fmgAVYT1X-_aDA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transform hover:scale-110 transition duration-300 text-2xl"
                aria-label="YouTube"
              >
                <FaYoutube />
              </Link>
              {/* <Link
                href="#" // Placeholder for Instagram link
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transform hover:scale-110 transition duration-300 text-2xl"
                aria-label="Instagram"
              >
                <FaInstagram />
              </Link> */}
            </div>
          </div>

          {/* Navigation Links Section */}
          <nav className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-center md:text-left"> {/* Changed to grid for 2 columns */}
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

      {/* Copyright Section */}
      <div className="bg-blue-900 text-center py-4 px-6">
        <div className="container mx-auto">
          <p className="text-xs md:text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Epaphras Ministries. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};