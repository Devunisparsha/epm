"use client";

import React, { useState } from "react";
import Image from "next/image";

const AboutUs: React.FC = () => {
  const [about] = useState({
    image: "/aboutus/1.webp",
    description: `
Bro. Epaphras came to know the Lord personally in the year 1990 and the truth and love which he experienced through the Lord Jesus Christ inspired him to share this good news to two persons initially and later on grew in the Lord. By the will of God, he established Epaphras Ministry in the year 2004 and started serving the Lord in full-time ministry, in and around Hyderabad.

He always exhorts people saying that it is not enough to proclaim the Gospel or good news but it is significantly important that we need to live by what we preach and thereby we can attract many persons to the living Christ. He always encourages people that we have only one life to live on this earth and we need to offer ourselves to Christ and be a blessing and a source of inspiration to people around us.

People who heard the life changing messages of Bro.Epaphras turned away from their bad habits, sinful ways and have a strong desire to live for Christ. Many of them strongly feel that it is their ministry and spend their money, time and even to the extend of sacrificing their lives.

He encourages orphans, widows, unwanted and unloved people through word of God and aspires and preaches that everyone should have the mind of Christ.

The messages which are being preached by Bro.Epaphras from 10 long years are easily understandable by common man and also practicable. The elders of this Ministry are God fearing, responsible persons who have a strong passion to lead a victorious life for the Lord. This ministry is serving the lord without any partiality and favoritism away from every worldly influence.
`,
  });

  return (
    <section className="bg-gradient-to-br from-white to-blue-50 py-16 px-6 md:px-20">
      {/* Header */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
        <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
          About Us
        </span>
      </h1>

      {/* Content Card */}
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2">
        {/* Image */}
        <div className="relative h-72 md:h-full">
          <Image
            src={about.image}
            alt="About Epaphras Ministries"
            fill
            className="object-cover"
          />
        </div>

        {/* Text */}
        <div className="p-8 flex flex-col justify-center">
          <p className="text-gray-700 leading-relaxed text-justify whitespace-pre-line">
            {about.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
