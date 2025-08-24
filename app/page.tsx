"use client";
import { useState } from "react";
import { Carousel } from "./components";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Carousel />
      <EpaphraMinistries />
      <WorshipPlaces />
      <MagazineDisplay />
    </main>
  );
}
// ---------------- About --------------
import React from "react";

function EpaphraMinistries() {
  return (
    <div className="bg-white text-gray-800 font-sans min-h-screen">
      {/* Header Section */}
      <header className="py-12 sm:py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* Logo Placeholder */}
          <div className="flex justify-center mb-6">
            <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-gray-200 flex items-center justify-center shadow-md">
              <img
                src="/Logo.png"
                alt="Epaphras Ministries Logo"
                className="h-20 w-20 sm:h-24 sm:w-24 rounded-full shadow-md"
              />
            </div>
          </div>

          {/* Titles */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-indigo-800 mb-4 leading-tight"
            style={{ fontFamily: "'Mandali', sans-serif" }} // తెలుగు హెడింగ్‌కు Mandali ఫాంట్ ఇక్కడ వర్తించబడింది
          >
            ఎపఫ్రా మినిస్ట్రీస్ ప్రయాణం
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-600">
            A Life of Example — The Journey of Epaphras Ministries
          </h2>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="max-w-6xl mx-auto py-12 px-4 sm:py-16 md:py-20 space-y-12">
        {/* Telugu Content */}
        <div className="space-y-6 text-base sm:text-lg leading-relaxed">
          <p>
            బ్రదర్ ఎపఫ్రా గారు 1998 లో ఇద్దరికి క్రీస్తు ప్రేమను బోధించుట
            ప్రారంభించి, దైవ చిత్తానుసారముగా 2004 లో ఎపఫ్రా మినిస్ట్రీస్ ను
            స్థాపించారు. హైదరాబాద్ పరిసర ప్రాంతాలలో నిర్వహిస్తున్న ఆరాధనలు,
            సువార్త సభల ద్వారా అన్యులు, నామకార్ధపు అనుభవములలో ఉన్నవారిని దేవుని
            రాజ్యము కొరకు సిద్దపరుస్తున్నారు.
          </p>
          <p>
            క్రీస్తు గురించి బోధించుట మాత్రమే కాదు గాని, బోధించిన దాని ప్రకారం
            జీవించడం ద్వారా అనేకులను క్రీస్తు వైపు ఆకర్షించవచ్చని నమ్ముతూ, ఈ
            భూమి మీద మన జీవితాన్ని ప్రభువుకు సమర్పించి ఆదర్శప్రాయంగా జీవించమని
            ప్రోత్సహిస్తున్నారు.
          </p>
          <p>
            ఈ పరిచర్యలో ప్రకటిస్తున్న బోధలు విని అనేకులు తమ దుర్వ్యసనములను,
            పాపపు మార్గములను విడిచిపెట్టి క్రీస్తు కొరకు జీవించాలనే తపన కలిగి
            ఉన్నారు. వీరిలో అనేకులు తమ సమయమును, ధనమును వెచ్చిస్తూ పరిచర్యలో
            పాలుపంచుకుంటున్నారు. వీరు ఐక్యతతో, ప్రేమతో ఒకరికొకరు సహకరించి,
            ప్రాణమును కూడా లెక్క చేయక దేవుని పరిచర్య కొనసాగించాలనే తపన కలిగి
            ఉన్నారు.
          </p>
        </div>

        <hr className="border-t border-gray-300 my-12" />

        {/* English Content */}
        <div className="space-y-6 text-base sm:text-lg leading-relaxed">
          <p>
            Brother Epaphras began teaching the love of Christ to two individuals
            in 1998. According to God's will, in 2004, he established Epaphra
            Ministries. Through worship services and gospel meetings held around
            Hyderabad, they prepare unbelievers and nominal Christians for the
            Kingdom of God.
          </p>
          <p>
            His mission is not just to teach about Christ, but to live according
            to his teaching, believing that a life surrendered to the Lord and
            lived as an example can attract many toward Christ.
          </p>
          <p>
            Many who hear these teachings have left behind addictions and sinful
            ways, longing to live for Christ. Some consider the ministry their
            own, investing time and resources. They work in unity and love,
            supporting one another, even willing to risk their lives to continue
            God's work.
          </p>
        </div>
      </main>
    </div>
  );
}

// --------------------------Magazines------------------------
const MagazineDisplay: React.FC = () => {
  interface Magazine {
    name: string;
    month: string;
    image: string;
    download_url: string;
  }
  const [magazines] = useState<Magazine[]>([
    {
      name: "Devuni Sparsha ",
      month: "Jul Aug 2025",
      image: "/magazine/jul_aug_2025.webp",
      download_url: "/magazine/sparsha_jul_aug_2025.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "May June 2025",
      image: "/magazine/may_jun_2025.webp",
      download_url: "/magazine/sparsha_may_jun_2025.pdf",
    },
  ]);

  return (
    <div className="px-5 md:px-20 pb-10 my-10">
      <p className="text-2xl font-bold mb-4">Devuni Sparsha Magazine</p>
      <div className="flex flex-wrap md:grid md:grid-flow-col gap-10">
        {magazines.map((magazine, index) => (
          <div
            key={index}
            className="flex bg-gradient-to-br from-indigo-100 to-blue-200 gap-4 justify-between rounded-3xl overflow-hidden
                       transition-all duration-300 ease-in-out transform
                       hover:scale-105 hover:shadow-lg" // Added hover animations here
          >
            <Image
              src={magazine.image.replace(
                /.*\/public/,
                "http://localhost:3000/"
              )}
              alt={`${magazine.name}`}
              className="w-1/3 object-fill"
              width={1920}
              height={1080}
            />
            <div className="flex flex-col m-auto gap-14 p-4">
              <div className="my-auto">
                <h3 className="text-xl font-medium mb-2">{magazine.name}</h3>
                <p className="font-light text-md">{magazine.month}</p>
              </div>
              <a
                href={magazine.download_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-white font-medium
                           hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                           transition-colors duration-200" // Added transition for button hover
              >
                Download
                <svg
                  className="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-1.293-1.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

//------------------------ Worship places------------------------
interface WorshipPlace {
  id: number;
  name: string;
  image?: string;
}

interface Prayer {
  id: number;
  day: string;
  time: string;
  description: string;
  place: number;
}

const WorshipPlaces = () => {
  const [worshipPlaces] = useState<WorshipPlace[]>([
    {
      id: 0,
      name: "Pedda Amberpet",
      image: "/home/worshipPlace/peddaamberpet.webp",
    },
    {
      id: 1,
      name: "Bhagyalatha",
      image: "/home/worshipPlace/bhagyalatha.webp",
    },
    { id: 2, name: "Chinthal", image: "/home/worshipPlace/chinthal.webp" },
    { id: 3, name: "Anajpur", image: "/home/worshipPlace/anajpur.webp" },
  ]);

  const [prayers] = useState<Prayer[]>([
    {
      id: 0,
      day: "Sunday",
      time: "9:30 AM",
      description: "పునరుత్థానపు ఆరాధన",
      place: 0,
    },
    {
      id: 1,
      day: "Sunday",
      time: "8:00 AM",
      description: "పునరుత్థానపు ఆరాధన",
      place: 1,
    },
    {
      id: 2,
      day: "Sunday",
      time: "10:00 AM",
      description: "పునరుత్థానపు ఆరాధన",
      place: 1,
    },
    {
      id: 3,
      day: "Saturday",
      time: "7:00 PM",
      description: "శనివారం ఉపవాస ప్రార్ధన",
      place: 1,
    },
    {
      id: 4,
      day: "1st Wednesday",
      time: "7:00 PM",
      description: "స్త్రీల కూడిక",
      place: 1,
    },
    {
      id: 5,
      day: "2nd Wednesday",
      time: "7:00 PM",
      description: "Youth Meeting",
      place: 1,
    },
    {
      id: 6,
      day: "Sunday",
      time: "10:00 AM",
      description: "పునరుత్థానపు ఆరాధన",
      place: 2,
    },
    {
      id: 7,
      day: "Sunday",
      time: "7:00 PM",
      description: "పునరుత్థానపు ఆరాధన",
      place: 2,
    },
    {
      id: 8,
      day: "Friday",
      time: "7:00 PM",
      description: "Friday Worship",
      place: 2,
    },
    {
      id: 9,
      day: "Sunday",
      time: "10:00 AM",
      description: "పునరుత్థానపు ఆరాధన",
      place: 3,
    },
    {
      id: 10,
      day: "Saturday",
      time: "7:00 PM",
      description: "శనివారం ఉపవాస ప్రార్ధన",
      place: 3,
    },
  ]);

  const [popup, setPopup] = useState<null | number>(null);
  const [selectPrayers, setSelectedPrayers] = useState<Prayer[]>([]);

  const onPopup = (index: number, placeId: number) => {
    setPopup(index);
    setSelectedPrayers(prayers.filter((p) => p.place === placeId));
  };

  const offPopup = () => setPopup(null);

  return (
    <div className="px-5 md:px-20 py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">
        Worship Places & Prayers
      </h2>

      <div className="grid grid-flow-col auto-cols-[70%] sm:auto-cols-[50%] md:auto-cols-[33%] lg:auto-cols-[25%] xl:auto-cols-[20%] gap-6 overflow-x-auto pb-4">
        {worshipPlaces.map((place, index) => (
          <div key={place.id} className="flex flex-col">
            <div className="shadow-md rounded-xl h-[380px] bg-gradient-to-b from-white to-blue-100 flex flex-col hover:scale-[1.02] hover:shadow-lg transition">
              {place.image && (
                <Image
                  src={place.image}
                  alt={place.name}
                  className="w-full h-2/3 object-cover rounded-t-xl"
                  width={400}
                  height={300}
                />
              )}
              <h3 className="p-4 text-center font-medium flex flex-col flex-grow">
                {place.name}
                <button
                  onClick={() => onPopup(index, place.id)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-2xl mt-4 hover:bg-blue-700 transition"
                >
                  Click Here
                </button>
              </h3>
            </div>

            {popup === index && (
              <div
                className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-50 flex justify-center items-center p-4"
                onClick={offPopup}
              >
                <div
                  className="bg-white rounded-xl p-6 shadow-2xl w-full sm:w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] max-h-[90vh] overflow-y-auto relative animate-fade-in"
                  onClick={(e) => e.stopPropagation()}
                >
                  <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 border-b pb-3">
                    Prayer Details for {place.name}
                  </h4>
                  <table className="w-full text-sm md:text-base border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="text-left py-2 px-3">Day</th>
                        <th className="text-left py-2 px-3">Time</th>
                        <th className="text-left py-2 px-3">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectPrayers.map((prayer, i) => (
                        <tr
                          key={prayer.id}
                          className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-blue-50`}
                        >
                          <td className="py-2 px-3">{prayer.day}</td>
                          <td className="py-2 px-3">{prayer.time}</td>
                          <td className="py-2 px-3">{prayer.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="flex justify-end mt-6">
                    <button
                      onClick={offPopup}
                      className="px-6 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
