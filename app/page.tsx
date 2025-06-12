"use client";
import { useEffect, useState } from "react";
import { Carousel } from "./components";
import Image from "next/image";

export default function Home() {
  // function fetchData() {
  //   fetch("http://localhost:8000/carousel/")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setCarousel(data);
  //     });

  //   fetch("http://localhost:8000/worshipplaces/")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setWorshipPlaces(data);
  //       console.log(data);
  //     });
  // }
  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <main>
      <Carousel />
      <WorshipPlaces />
      <MagazineDisplay />
    </main>
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
  const [magazines, setMagazines] = useState<Magazine[]>([
    {
      name: "Devuni Sparsha ",
      month: "May June 2024",
      image: "/magazine/may_jun_24.jpg",
      download_url: "/magazine/sparsa_may-june_2024.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "March April 2024",
      image: "/magazine/mar_apr_24.jpg",
      download_url: "/magazine/sparsa_mar_Apr_2024.pdf",
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
                "http://localhost:3000/",
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
                  xmlns="http://www.w3.org/2000/svg"
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

interface WorshipPlacesProps {
  places: WorshipPlace[];
}

const WorshipPlaces = () => {
  const [worshipPlaces, setWorshipPlaces] = useState([
    {
      id: 0,
      name: "Pedda Amberpet",
      image: "/home/worshipPlace/peddaamberpet.jpg",
    },
    {
      id: 1,
      name: "Bhagyalatha",
      image: "/home/worshipPlace/bhagyalatha.jpg",
    },
    {
      id: 2,
      name: "Chinthal",
      image: "/home/worshipPlace/chinthal.jpg",
    },
    {
      id: 3,
      name: "Anajpur",
      image: "/home/worshipPlace/anajpur.jpg",
    },
  ]);

  const [popup, setPopup] = useState<null | number>(null);
  const [prayers, setPrayers] = useState<Prayer[]>([
    {
      id: 0,
      day: "Sunday",
      time: "9: 30 AM",
      description: "పునరుత్థానపు ఆరాధన",
      place: 0,
    },
    {
      id: 1,
      day: "Sunday",
      time: "8: 00 AM",
      description: "పునరుత్థానపు ఆరాధన",
      place: 1,
    },
    {
      id: 2,
      day: "Sunday",
      time: "10: 00 AM",
      description: "పునరుత్థానపు ఆరాధన",
      place: 1,
    },
    {
      id: 3,
      day: "Saturday",
      time: "7: 00 PM",
      description: "శనివారం ఉపవాస ప్రార్ధన",
      place: 1,
    },
    {
      id: 4,
      day: "1st Wednesday",
      time: "7: 00 PM",
      description: "స్త్రీల కూడిక ",
      place: 1,
    },
    {
      id: 5,
      day: "2nd Wednesday",
      time: "7: 00 PM",
      description: "Youth Meeting",
      place: 1,
    },
    {
      id: 6,
      day: "Sunday",
      time: "7: 00 PM",
      description: "పునరుత్థానపు ఆరాధన",
      place: 2,
    },
    {
      id: 7,
      day: "Friday",
      time: "7: 00 PM",
      description: "Friday Worship",
      place: 2,
    },
    {
      id: 8,
      day: "Sunday",
      time: "10: 00 AM",
      description: "పునరుత్థానపు ఆరాధన",
      place: 3,
    },
    {
      id: 9,
      day: "Saturday",
      time: "7: 00 PM",
      description: "శనివారం ఉపవాస ప్రార్ధన",
      place: 3,
    },
  ]);
  const [selectPrayers, setSelectedPrayers] = useState<Prayer[]>([]);

  // useEffect(() => {
  //   fetch("http://localhost:8000/prayers/")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPrayers(data);
  //     });
  // }, []);

  const onPopup = (index: number, placeId: number) => {
    setPopup(index);
    const filteredPrayers = prayers.filter((p) => p.place === placeId);
    setSelectedPrayers(filteredPrayers);
    console.log(selectPrayers);
  };

  const offPopup = () => {
    setPopup(null);
  };

  return (
    <div className="px-5 md:px-20 pb-10 py-16">
      <h2 className="text-3xl font-bold mb-8">Worship Places & Prayers</h2>
      {/* <p className=" my-4 font-semibold">Click on the image to view the prayer details.</p> */}
      <div className="flex overflow-x-scroll gap-6 md:gap-10 p-2 -mx-2 md:mx-0">
        {worshipPlaces.map((place, index) => (
          <div key={place.id} className="relative flex-none w-72 sm:w-80 md:w-96 lg:w-1/4 xl:w-1/5">
            <div className="shadow-md rounded-xl w-full my-3 h-[400px] bg-gradient-to-b from-white to-blue-100 flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"> {/* Added hover effects */}
              {place.image && (
                <Image
                  src={place.image}
                  alt={`${place.name} Image`}
                  className="w-full h-2/3 object-cover rounded-t-xl"
                  width={7680}
                  height={4320}
                />
              )}
              <h3 className="p-4 text-lg text-center flex flex-col items-center justify-between flex-grow font-medium mb-2">
                {place.name}
                <button
                  onClick={() => onPopup(index, place.id)}
                  className="bg-blue-600 text-white px-4 py-2 w-fit rounded-2xl mt-4 hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1" // Added hover effects
                >
                  Click here
                </button>
              </h3>
            </div>
            {popup === index && (
              // Backdrop with blur effect
              <div
                className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-50 flex justify-center items-center p-4" // backdrop-blur-sm added here
                onClick={offPopup} // Clicking outside closes the popup
              >
                <div
                  className="bg-white rounded-xl p-6 shadow-2xl transform transition-all duration-300 ease-out scale-95 md:scale-100 opacity-0 md:opacity-100 animate-fade-in-scale w-full md:w-[80%] lg:w-[70%] xl:w-[60%] max-h-[90vh] overflow-y-auto relative" // Enhanced popup styling and animation
                  onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside popup
                >
                  <h4 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3 border-gray-200">Prayer Details for {place.name}</h4> {/* Dynamic title */}
                  <table className="w-full table-auto text-sm md:text-base border-collapse"> {/* border-collapse for cleaner table */}
                    <thead>
                      <tr className="bg-gray-100"> {/* Header background */}
                        <th className="text-left font-semibold py-3 px-4 border-b border-gray-300 rounded-tl-lg">Day</th>
                        <th className="text-left font-semibold py-3 px-4 border-b border-gray-300">Time</th>
                        <th className="text-left font-semibold py-3 px-4 border-b border-gray-300 rounded-tr-lg">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectPrayers.map((prayer, prayerIndex) => (
                        <tr
                          key={prayer.id}
                          className={`${prayerIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition-colors duration-200`} // Zebra striping and hover effect
                        >
                          <td className="text-gray-700 py-3 px-4 border-b border-gray-200">{prayer.day}</td>
                          <td className="text-gray-700 py-3 px-4 border-b border-gray-200">{prayer.time}</td>
                          <td className="text-gray-700 py-3 px-4 border-b border-gray-200">{prayer.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="flex justify-end mt-8">
                    <button
                      onClick={offPopup}
                      className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:scale-105" // More prominent close button
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
