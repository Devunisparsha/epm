"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image"; // Import the Image component

const AboutUs: React.FC = () => {
  const [about, setAbout] = useState({
    image: "/epm/aboutus/1.JPG",
    description: `
Bro. Epaphras came to know the Lord personally in the year 1990 and the truth and love which he experienced through the Lord Jesus Christ inspired him to share this good news to two persons initially and later on grew in the Lord. By the will of God, he established Epaphras Ministry in the year 2004 and started serving the Lord in full-time ministry, in and around Hyderabad. He organized Gospel Meetings and worship services to people especially those who are nominal in their life-style and those who do not know the truth and living God, and they inturn changed their lives by knowing the truth and are preparing themselves to enter into the Lord’s kingdom.

He always exhorts people saying that it is not enough to proclaim the Gospel or good news but it is significantly important that we need to live by what we preach and thereby we can attract many persons to the living Christ. He always encourages people that we have only one life to live on this earth and we need to offer ourselves to Christ and be a blessing and a source of inspiration to people around us.

People who heard the life changing messages of Bro.Epaphras turned away from their bad habits, sinful ways and have a strong desire to live for Christ. Many of them strongly feel that it is their ministry and spend their money, time and even to the extend of sacrificing their lives. So Bro.Epaphras always thank God for such committed dedicated followers of Christ and their unquenching thirst to serve the Lord.

He encourages orphans, widows, unwanted and unloved people through word of God and aspires and preaches that everyone should have the mind of Christ.

The messages which are being preached by Bro.Epaphras from 10 long years are easily understandable by common man and also practicable.  The elders of this Ministry are God fearing, responsible persons who have a strong passion to lead a victorious life for the Lord. This ministry is serving the lord without any partiality and favoritism away from every worldly influence. So, kindly uphold that it continues to serve the Lord till He comes.
    `,
  });
  // useEffect(() => {
  //   fetch("http://localhost:8000/aboutus/")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.length != 0) {
  //         setAbout(data[0])
  //       }
  //     })

  // }, [])
  return (
    <div className=" bg-gradient-to-br from-white to-blue-100 mx-auto px-3 md:px-20 py-16">
      <h1 className="text-2xl text-center bg-fourth py-4 rounded-full mb-8">
        About Us
      </h1>
      <div className="">
        <Image
          src={about.image} // Assuming about.image is the path in your public directory
          alt="About Us Image"
          className="object-cover h-full md:w-[55%] mb-5 xl:float-left xl:m-10 rounded-lg"
          width={1920} // Specify the desired width
          height={1080} // Specify the desired height
          style={{ height: "auto" }} // Adjust height to maintain aspect ratio if needed
        />
        <p className=" text-justify">{about.description}</p>
      </div>
    </div>
  );
};

export default AboutUs;
