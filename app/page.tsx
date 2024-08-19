"use client";
import { useEffect, useState } from "react";
import { Carousel } from "./components";

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
      image: "/epm/magazine/may_jun_24.jpg",
      download_url: "/epm/magazine/sparsa_may-june_2024.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "March April 2024",
      image: "/epm/magazine/mar_apr_24.jpg",
      download_url: "/epm/magazine/sparsa_mar_Apr_2024.pdf",
    },
  ]);

  // useEffect(() => {
  //   fetch("http://localhost:8000/magazines/")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.length != 0) {
  //         setMagazine(data[data.length - 1]);
  //       }
  //     });
  // }, []);

  return (
    <div className="px-5 md:px-20 pb-10 my-10">
      <p className=" text-2xl font-bold  mb-4">Devuni Sparsha Magazine</p>
      <div className="flex flex-wrap md:grid md:grid-flow-col  gap-10 ">
        {magazines.map((magazine, index) => (
          <div
            key={index}
            className="flex bg-gradient-to-br from-indigo-100 to-blue-200 gap-4 justify-between rounded-3xl overflow-hidden"
          >
            <img
              src={magazine.image.replace(
                /.*\/public/,
                "http://localhost:3000/",
              )}
              alt={`${magazine.name}`}
              className="w-1/3 object-fill"
            />
            <div className="flex flex-col m-auto gap-14  p-4">
              <div className="my-auto">
                <h3 className="text-xl font-medium mb-2">{magazine.name}</h3>
                <p className="font-light text-md">{magazine.month}</p>
              </div>
              <a
                href={magazine.download_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-white font-medium hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
      image: "/epm/home/worshipPlace/peddaamberpet.jpg",
    },
    {
      id: 1,
      name: "Bhagyalatha",
      image: "/epm/home/worshipPlace/chinthal.jpg",
    },
    {
      id: 2,
      name: "Chinthal",
      image: "/epm/home/worshipPlace/chinthal.jpg",
    },
    {
      id: 3,
      name: "Anajpur",
      image: "/epm/home/worshipPlace/anajpur.jpg",
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
    <div className="px-5 md:px-20 pb-10 py-16  ">
      <h2 className="text-3xl font-bold mb-8">Worship Places & Prayers</h2>
      {/* <p className=" my-4 font-semibold">Click on the image to view the prayer details.</p> */}
      <div className="flex overflow-scroll gap-10">
        {worshipPlaces.map((place, index) => (
          <div key={place.id} className="relative ">
            <div className=" shadow-md rounded-xl w-80  h-[450px]">
              {place.image && (
                <img
                  src={place.image.replace(
                    /.*\/public/,
                    "http://localhost:3000/",
                  )}
                  alt={`${place.name} Image`}
                  className="w-80 h-1/2 object-cover rounded-t-xl"
                />
              )}
              <h3 className="p-4 text-lg text-center flex flex-col items-center gap-5 font-medium mb-2">
                {place.name}
                <button
                  onClick={() => onPopup(index, place.id)}
                  className=" bg-blue-600 text-white px-2 py-1 w-fit rounded-2xl"
                >
                  Click here
                </button>
              </h3>
            </div>
            {popup === index && (
              <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex flex-shrink justify-center items-center">
                <div className="bg-white w-full md:w-[70%] rounded-md p-4 shadow-md">
                  <table className="w-full table-auto">
                    <thead>
                      <tr>
                        <th className="text-left font-medium pb-2 border-b border-gray-200">
                          Day
                        </th>
                        <th className="text-left font-medium pb-2 border-b border-gray-200">
                          Time
                        </th>
                        <th className="text-left font-medium pb-2 border-b border-gray-200">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectPrayers.map((prayer) => (
                        <tr
                          key={prayer.id}
                          className="border-b border-gray-200 hover:bg-gray-100"
                        >
                          <td className="text-gray-600 py-1">{prayer.day}</td>
                          <td className="text-gray-600 py-1">{prayer.time}</td>
                          <td className="text-gray-600 py-1">
                            {prayer.description}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <button
                    onClick={offPopup}
                    className="mt-4 inline-flex items-center px-4 py-2 rounded-md bg-white text-indigo-600 font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Close
                  </button>
                </div>
                <button
                  onClick={offPopup}
                  className="absolute top-0 bottom-0 left-0 right-0 w-full h-full cursor-pointer"
                ></button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
