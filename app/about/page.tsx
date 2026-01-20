"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
    <main className="pt-32 pb-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-20"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-primary mb-4 md:mb-6">
            Our <span className="text-secondary">Mission</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 font-light max-w-2xl mx-auto">
            Discover the heart and soul of Epaphras Ministries and our journey
            of faith.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-[2.5rem] md:rounded-[3rem] blur-3xl opacity-20" />
            <div className="relative aspect-square rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-premium border-2 md:border-4 border-white">
              <Image
                src={about.image}
                alt="About Epaphras Ministries"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8 order-1 lg:order-2"
          >
            <div className="glass p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-primary/5 shadow-premium">
              <p className="text-gray-700 leading-relaxed text-base md:text-lg whitespace-pre-line font-light">
                {about.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-6 md:gap-12 p-6 md:p-8 bg-primary/5 rounded-[2rem] border border-primary/10 justify-center sm:justify-start">
              <div className="text-center sm:text-left">
                <p className="text-3xl md:text-4xl font-black text-primary">
                  1990
                </p>
                <p className="text-gray-500 text-xs md:text-sm font-bold uppercase tracking-wider">
                  Inception
                </p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-3xl md:text-4xl font-black text-secondary">
                  2004
                </p>
                <p className="text-gray-500 text-xs md:text-sm font-bold uppercase tracking-wider">
                  Established
                </p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-3xl md:text-4xl font-black text-accent">
                  10+
                </p>
                <p className="text-gray-500 text-xs md:text-sm font-bold uppercase tracking-wider">
                  Years Exp
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
