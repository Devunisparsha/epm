'use client'
import React, { useEffect, useState } from "react";

const AboutUs: React.FC = () => {
  const [about, setAbout] = useState({
    image: "",
    description: ""
  })
  useEffect(() => {
    fetch("http://localhost:8000/aboutus/")
      .then((response) => response.json())
      .then((data) => {
        if (data.length != 0) {
          setAbout(data[0])
        }
      })

  }, [])
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          src={about.image.replace(/.*\/public/, "http://localhost:3000/")} // Replace with path to your about us image
          alt="About Us Image"
          className="rounded-lg object-cover h-full w-full md:h-auto"
        />
        <div className="prose">
          {/* Add rich text content about your ministry */}

          <p className=" text-justify">{about.description}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
