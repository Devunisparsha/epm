"use client";
import { useEffect, useState } from "react";
import { Carousel } from "./components";

export default function Home() {
  const [carousel, setCarousel] = useState([
    {
      image: "https://example.com/carousel-image-1.jpg",
      id: 1,
    },
  ]);
  const [worshipPlaces, setWorshipPlaces] = useState([
    {
      name: "Main Sanctuary",
      imageUrl: "",
      prayers: [
        {
          day: "string",
          time: "string",
          description: "string", // Optional description
          imageUrl: "string",
        },
      ],
    },
  ]);
  const [magazineData, setMagazineData] = useState({
    downloadLink: "https://example.com/download-vogue-may-2024.pdf",
    title: "Vogue May 2024",
    imageUrl: "https://example.com/vogue-may-2024.jpg",
    month: "May 2024",
    name: "Devuni Sparsha Magazine",
  });

  useEffect(() => {
    fetch("http://localhost:8000/carousel/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCarousel(data);
      });

    // fetch("/api/worshipPlaces")
    //  .then((res) => res.json())
    //  .then((data) => {
    //     console.log(data);
    //     worshipPlaces.push(data);
    //   })
    //  .catch((err) => {
    //     console.log(err);
    //   });

    // fetch("/api/magazine")
    //  .then((res) => res.json())
    //  .then((data) => {
    //     console.log(data);
    //     magazineData.push(data);
    //   })
    //  .catch((err) => {
    //     console.log(err);
    //   });
  });

  return (
    <main>
      <Carousel images={carousel} />
      <WorshipPlaces places={worshipPlaces} />
      <MagazineDisplay {...magazineData} />
    </main>
  );
}

// --------------------------link formatter------------------------
function linkFormatter(s: string) {
  return s.replace("&export=download", "");
}

// --------------------------Magazines------------------------
interface Magazine {
  name: string;
  month: string;
  imageUrl: string;
  downloadLink: string;
}

const MagazineDisplay: React.FC<Magazine> = ({
  name,
  month,
  imageUrl,
  downloadLink,
}) => {
  return (
    <div className="px-5 md:px-20 pb-4  ">
      <p className=" text-2xl font-bold  mb-4">Devuni Sparsha Magazine</p>
      <div className=" flex flex-row bg-fourth gap-4 rounded-3xl overflow-hidden">
        <img
          src={imageUrl}
          alt={`${name}`}
          className="w-1/2 h-auto object-cover"
        />
        <div className="flex flex-col justify-between p-4">
          <div className=" my-auto">
            <h3 className="text-xl font-medium mb-2">{name}</h3>
            <p className=" font-light text-md">{month}</p>
          </div>
          <a
            href={downloadLink}
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
  name: string;
  imageUrl?: string; // Optional image URL
  prayers: Prayer[]; // Array of prayers associated with the place
}

interface Prayer {
  day: string;
  time: string;
  description?: string; // Optional description
  imageUrl?: string; // Optional image URL
}

interface WorshipPlacesProps {
  places: WorshipPlace[];
}

const WorshipPlaces: React.FC<WorshipPlacesProps> = ({ places }) => {
  const [popup, setPopup] = useState<null | number>(null); // Changed type of popup state

  const onPopup = (index: number) => {
    setPopup(index); // Set the index of the clicked place
  };

  const offPopup = () => {
    setPopup(null); // Close the popup
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-8">Worship Places & Prayers</h2>
      <div className="grid grid-cols-3   md:flex md:flex-wrap gap-4 justify-center">
        {places.map((place, index) => (
          <div key={place.name} className="relative">
            <button
              onClick={() => onPopup(index)}
              className="shadow-md rounded-md overflow-hidden h-64 w-auto bg-secondary"
            >
              {place.imageUrl && (
                <img
                  src={place.imageUrl}
                  alt={`${place.name} Image`}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-lg text-center font-medium mb-2">
                  {place.name}
                </h3>
              </div>
            </button>
            {popup === index && ( // Render popup only if popup state matches the current index
              <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex flex-shrink justify-center items-center">
                <div className="bg-white w-[70%] rounded-md p-4 shadow-md">
                  <table className="w-full table-auto">
                    <thead>
                      <tr>
                        <th className="text-left font-medium pb-2 border-b border-gray-200">
                          Day
                        </th>
                        <th className="text-left font-medium pb-2 border-b border-gray-200">
                          Time
                        </th>
                        {place.prayers.some((prayer) => prayer.description) && ( // Conditionally render description column
                          <th className="text-left font-medium pb-2 border-b border-gray-200">
                            Description
                          </th>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {place.prayers.map((prayer) => (
                        <tr
                          key={prayer.day}
                          className="border-b border-gray-200 hover:bg-gray-100"
                        >
                          <td className="text-gray-600 py-1">{prayer.day}</td>
                          <td className="text-gray-600 py-1">{prayer.time}</td>
                          {prayer.description && (
                            <td className="text-gray-600 py-1">
                              {prayer.description}
                            </td>
                          )}
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
