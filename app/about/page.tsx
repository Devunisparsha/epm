import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          src="/image.jpg" // Replace with path to your about us image
          alt="About Us Image"
          className="rounded-lg object-cover h-full w-full md:h-auto"
        />
        <div className="prose">
          {/* Add rich text content about your ministry */}

          <p className=" text-justify">
            Bro. Epaphras came to know the Lord personally in the year 1990 and
            the truth and love which he experienced through the Lord Jesus
            Christ inspired him to share this good news to two persons initially
            and later on grew in the Lord. By the will of God, he established
            Epaphras Ministry in the year 2004 and started serving the Lord in
            full-time ministry, in and around Hyderabad. He organized Gospel
            Meetings and worship services to people especially those who are
            nominal in their life-style and those who do not know the truth and
            living God, and they inturn changed their lives by knowing the truth
            and are preparing themselves to enter into the Lord’s kingdom.
            <br /> <br />
            He always exhorts people saying that it is not enough to proclaim
            the Gospel or good news but it is significantly important that we
            need to live by what we preach and thereby we can attract many
            persons to the living Christ. He always encourages people that we
            have only one life to live on this earth and we need to offer
            ourselves to Christ and be a blessing and a source of inspiration to
            people around us. People who heard the life changing messages of
            Bro.Epaphras turned away from their bad habits, sinful ways and have
            a strong desire to live for Christ. Many of them strongly feel that
            it is their ministry and spend their money, time and even to the
            extend of sacrificing their lives.
            <br /> <br />
            So Bro.Epaphras always thank God for such committed dedicated
            followers of Christ and their unquenching thirst to serve the Lord.
            He encourages orphans, widows, unwanted and unloved people through
            word of God and aspires and preaches that everyone should have the
            mind of Christ. The messages which are being preached by
            Bro.Epaphras from 10 long years are easily understandable by common
            man and also practicable. The elders of this Ministry are God
            fearing, responsible persons who have a strong passion to lead a
            victorious life for the Lord. This ministry is serving the lord
            without any partiality and favoritism away from every worldly
            influence. So, kindly uphold that it continues to serve the Lord
            till He comes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
