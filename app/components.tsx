"use client";
import { deleteCookie, getCookie } from "cookies-next";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { CiUser } from "react-icons/ci";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Menu, X, Facebook, Youtube, Instagram, Twitter } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { text: "Home", link: "/" },
    { text: "About Us", link: "/about" },
    { text: "Library", link: "/library" },
    { text: "Contact", link: "/contact" },
    { text: "Messages", link: "/message" },
  ];

  return (
    <nav
      className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[92%] sm:w-[95%] max-w-5xl z-50 transition-all duration-500 ease-in-out rounded-2xl md:rounded-full ${
        scrolled ? "bg-white/95 glass shadow-premium py-2 md:py-2" : "bg-white/90 backdrop-blur-md py-3 md:py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-primary font-black text-lg sm:text-2xl tracking-tighter flex items-center gap-1.5 md:gap-2"
        >
          <img
            src="/logo.png"
            alt="Epaphras Ministries Logo"
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
          />
          <span className="inline">Epaphras Ministries</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => (
            <Link
              key={item.text}
              href={item.link}
              className="text-gray-600 hover:text-primary px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-primary/5 relative group"
            >
              {item.text}
              <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-4 mx-4 md:hidden bg-white/95 glass rounded-3xl shadow-premium overflow-hidden border border-white/40"
          >
            <div className="flex flex-col p-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.text}
                  href={item.link}
                  className="px-4 py-3 rounded-2xl text-gray-700 hover:bg-primary hover:text-white font-medium transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Carousel = () => {
  const images = [
    "/home/carousel/1.webp",
    "/home/carousel/2.webp",
    "/home/carousel/3.webp",
    "/home/carousel/4.webp",
    "/home/carousel/5.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(handleNext, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[700px] overflow-hidden bg-gray-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-10" />
          <img
            src={images[currentIndex]}
            alt="Hero Carousel"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          key={`title-${currentIndex}`}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-white text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-4 md:mb-6"
        >
          Welcome to <span className="text-secondary">Epaphras Ministries</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          key={`desc-${currentIndex}`}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-gray-200 text-base sm:text-xl md:text-2xl max-w-2xl font-light"
        >
          Spreading the Love of Christ and Transforming Lives through Faith and Action.
        </motion.p>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-6 md:bottom-10 left-0 right-0 z-30 flex items-center justify-center gap-4 md:gap-6">
        <button
          onClick={handlePrev}
          className="p-2 md:p-3 rounded-full glass hover:bg-white transition-all text-primary"
        >
          <ChevronLeft size={20} className="md:w-6 md:h-6" />
        </button>
        <div className="flex gap-1.5 md:gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1 md:h-1.5 transition-all duration-300 rounded-full ${
                i === currentIndex ? "w-6 md:w-8 bg-secondary" : "w-1.5 md:w-2 bg-white/40"
              }`}
            />
          ))}
        </div>
        <button
          onClick={handleNext}
          className="p-2 md:p-3 rounded-full glass hover:bg-white transition-all text-primary"
        >
          <ChevronRight size={20} className="md:w-6 md:h-6" />
        </button>
      </div>
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
    <footer className="bg-foreground text-white">
      <div className="container mx-auto py-12 md:py-20 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="space-y-6 sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl md:text-2xl font-black tracking-tighter">
              Epaphras <span className="text-secondary">Ministries</span>
            </h3>
            <p className="text-gray-400 max-w-xs leading-relaxed text-sm md:text-base">
              Dedicated to serving communities and sharing the transformative power of faith since 1998.
            </p>
            <div className="flex gap-3 md:gap-4">
              <a href="#" className="p-2.5 md:p-3 bg-white/5 rounded-full hover:bg-primary transition-all text-white">
                <Facebook size={18} className="md:w-5 md:h-5" />
              </a>
              <a href="#" className="p-2.5 md:p-3 bg-white/5 rounded-full hover:bg-primary transition-all text-white">
                <Youtube size={18} className="md:w-5 md:h-5" />
              </a>
              <a href="#" className="p-2.5 md:p-3 bg-white/5 rounded-full hover:bg-primary transition-all text-white">
                <Instagram size={18} className="md:w-5 md:h-5" />
              </a>
              <a href="#" className="p-2.5 md:p-3 bg-white/5 rounded-full hover:bg-primary transition-all text-white">
                <Twitter size={18} className="md:w-5 md:h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-6">Keep up to date with our ministry and upcoming events.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 flex-1 focus:outline-none focus:border-primary transition-colors"
              />
              <button className="bg-primary hover:bg-primary-dark px-6 py-2 rounded-xl font-bold transition-all">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Epaphras Ministries. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
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
