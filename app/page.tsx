"use client";
import { useEffect, useState } from "react";
import { Carousel } from "./components";

export default function Home() {
  const [carousel, setCarousel] = useState([
    {
      image: "",
      id: 1,
    },
  ]);
  const [worshipPlaces, setWorshipPlaces] = useState([
    {
      id: 0,
      name: "",
      image: "",
      prayers: [
        {
          id: 0,
          day: "",
          time: "",
          description: "", // Optional description
          image: "",
        },
      ],
    },
  ]);
  const [magazineData, setMagazineData] = useState({
    downloadLink: "",
    title: "",
    image: "",
    month: "",
    name: "Devuni Sparsha Magazine",
  });
  function fetchData() {
    fetch("http://localhost:8000/carousel/")
      .then((res) => res.json())
      .then((data) => {
        setCarousel(data);
      });

    fetch("http://localhost:8000/worshipplaces/")
      .then((res) => res.json())
      .then((data) => {
        setWorshipPlaces(data);
        console.log(data);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <Carousel images={carousel} />
      <WorshipPlaces places={worshipPlaces} />
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
  const [magazine, setMagazine] = useState<Magazine>({
    name: "",
    month: "",
    image: "",
    download_url: "",
  });

  useEffect(() => {
    fetch("http://localhost:8000/magazines/")
      .then((res) => res.json())
      .then((data) => {
        setMagazine(data[data.length - 1]);
      });
  }, []);

  return (
    <div className="px-5 md:px-20 pb-4  ">
      <p className=" text-2xl font-bold  mb-4">Devuni Sparsha Magazine</p>
      <div className=" flex flex-row bg-fourth gap-4 rounded-3xl overflow-hidden">
        <img
          src={magazine.image.replace(/.*\/public/, "http://localhost:3000/")}
          alt={`${magazine.name}`}
          className="w-1/2 h-96 object-cover"
        />
        <div className="flex flex-col justify-between p-4">
          <div className=" my-auto">
            <h3 className="text-xl font-medium mb-2">{magazine.name}</h3>
            <p className=" font-light text-md">{magazine.month}</p>
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
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-1.293-1.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
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
  place:number;
}

interface WorshipPlacesProps {
  places: WorshipPlace[];
}

const WorshipPlaces: React.FC<WorshipPlacesProps> = ({ places }) => {
  const [popup, setPopup] = useState<null | number>(null);
  const [prayers, setPrayers] = useState<Prayer[]>([]);
  const [selectPrayers, setSelectedPrayers] = useState<Prayer[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/prayers/")
      .then((res) => res.json())
      .then((data) => {
        setPrayers(data);
      });
  }, []);

  const onPopup = (index: number, placeId: number) => {
    setPopup(index);
    const filteredPrayers =prayers.filter(p => p.place===placeId);
      setSelectedPrayers(filteredPrayers);
    console.log(selectPrayers);
  };

  const offPopup = () => {
    setPopup(null);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-8">Worship Places & Prayers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {places.map((place, index) => (
          <div key={place.id} className="relative">
            <button
              onClick={() => onPopup(index, place.id)}
              className="shadow-md rounded-xl w-full h-64 bg-secondary"
            >
              {place.image && (
                <img
                  src={place.image.replace(
                    /.*\/public/,
                    "http://localhost:3000/"
                  )}
                  alt={`${place.name} Image`}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
              )}
              <div className="p-4">
                <h3 className="text-lg text-center font-medium mb-2">
                  {place.name}
                </h3>
              </div>
            </button>
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
