"use client";
import Link from "next/link";
// components/LibraryPage.tsx

import React, { useEffect, useState } from "react";

const LibraryPage: React.FC = () => {
  interface Magazine {
    name: string;
    month: string;
    image: string;
    download_url: string;
  }

  // Your initial magazine data, sorted latest first
  const initialMagazines: Magazine[] = [
    {
      name: "Devuni Sparsha ",
      month: "Nov Dec 2008",
      image: "/magazine/nov_dec_2008.webp",
      download_url: "/magazine/sparsha_nov_dec_2008.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jan Feb 2009",
      image: "/magazine/jan_feb_2009.webp",
      download_url: "/magazine/sparsha_jan_feb_2009.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jul Aug 2009",
      image: "/magazine/jul_aug_2009.webp",
      download_url: "/magazine/sparsha_jul_aug_2009.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Sep Oct 2009",
      image: "/magazine/sep_oct_2009.webp",
      download_url: "/magazine/sparsha_sep_oct_2009.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Nov Dec 2009",
      image: "/magazine/nov_dec_2009.webp",
      download_url: "/magazine/sparsha_nov_dec_2009.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jan Feb 2010",
      image: "/magazine/jan_feb_2010.webp",
      download_url: "/magazine/sparsha_jan_feb_2010.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Mar Apr 2010",
      image: "/magazine/mar_apr_2010.webp",
      download_url: "/magazine/sparsha_mar_apr_2010.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "May Jun 2010",
      image: "/magazine/may_jun_2010.webp",
      download_url: "/magazine/sparsha_may_jun_2010.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Sep Oct 2010",
      image: "/magazine/sep_oct_2010.webp",
      download_url: "/magazine/sparsha_sep_oct_2010.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Nov Dec 2010",
      image: "/magazine/nov_dec_2010.webp",
      download_url: "/magazine/sparsha_nov_dec_2010.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jan Feb 2011",
      image: "/magazine/jan_feb_2011.webp",
      download_url: "/magazine/sparsha_jan_feb_2011.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Mar Apr 2011",
      image: "/magazine/mar_apr_2011.webp",
      download_url: "/magazine/sparsha_mar_apr_2011.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "May Jun 2011",
      image: "/magazine/may_jun_2011.webp",
      download_url: "/magazine/sparsha_may_jun_2011.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jul Aug 2011",
      image: "/magazine/jul_aug_2011.webp",
      download_url: "/magazine/sparsha_jul_aug_2011.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Sep Oct 2011",
      image: "/magazine/sep_oct_2011.webp",
      download_url: "/magazine/sparsha_sep_oct_2011.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Nov Dec 2011",
      image: "/magazine/nov_dec_2011.webp",
      download_url: "/magazine/sparsha_nov_dec_2011.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jan Feb 2012",
      image: "/magazine/jan_feb_2012.webp",
      download_url: "/magazine/sparsha_jan_feb_2012.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Mar Apr 2012",
      image: "/magazine/mar_apr_2012.webp",
      download_url: "/magazine/sparsha_mar_apr_2012.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "May Jun 2012",
      image: "/magazine/may_jun_2012.webp",
      download_url: "/magazine/sparsha_may_jun_2012.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jul Aug 2012",
      image: "/magazine/jul_aug_2012.webp",
      download_url: "/magazine/sparsha_jul_aug_2012.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Sep Oct 2012",
      image: "/magazine/sep_oct_2012.webp",
      download_url: "/magazine/sparsha_sep_oct_2012.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Nov Dec 2012",
      image: "/magazine/nov_dec_2012.webp",
      download_url: "/magazine/sparsha_nov_dec_2012.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jan Feb 2013",
      image: "/magazine/jan_feb_2013.webp",
      download_url: "/magazine/sparsha_jan_feb_2013.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Mar Apr 2013",
      image: "/magazine/mar_apr_2013.webp",
      download_url: "/magazine/sparsha_mar_apr_2013.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jul Aug 2013",
      image: "/magazine/jul_aug_2013.webp",
      download_url: "/magazine/sparsha_jul_aug_2013.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Sep Oct 2013",
      image: "/magazine/sep_oct_2013.webp",
      download_url: "/magazine/sparsha_sep_oct_2013.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Nov Dec 2013",
      image: "/magazine/nov_dec_2013.webp",
      download_url: "/magazine/sparsha_nov_dec_2013.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jan Feb 2014",
      image: "/magazine/jan_feb_2014.webp",
      download_url: "/magazine/sparsha_jan_feb_2014.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Mar Apr 2014",
      image: "/magazine/mar_apr_2014.webp",
      download_url: "/magazine/sparsha_mar_apr_2014.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "May Jun 2014",
      image: "/magazine/may_jun_2014.webp",
      download_url: "/magazine/sparsha_may_jun_2014.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jul Aug 2014",
      image: "/magazine/jul_aug_2014.webp",
      download_url: "/magazine/sparsha_jul_aug_2014.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Sep Oct 2014",
      image: "/magazine/sep_oct_2014.webp",
      download_url: "/magazine/sparsha_sep_oct_2014.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Nov Dec 2014",
      image: "/magazine/nov_dec_2014.webp",
      download_url: "/magazine/sparsha_nov_dec_2014.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jan Feb 2015",
      image: "/magazine/jan_feb_2015.webp",
      download_url: "/magazine/sparsha_jan_feb_2015.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Mar Apr 2015",
      image: "/magazine/mar_apr_2015.webp",
      download_url: "/magazine/sparsha_mar_apr_2015.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "May Jun 2015",
      image: "/magazine/may_jun_2015.webp",
      download_url: "/magazine/sparsha_may_jun_2015.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jul Aug 2015",
      image: "/magazine/jul_aug_2015.webp",
      download_url: "/magazine/sparsha_jul_aug_2015.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Sep Oct 2015",
      image: "/magazine/sep_oct_2015.webp",
      download_url: "/magazine/sparsha_sep_oct_2015.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Nov Dec 2015",
      image: "/magazine/nov_dec_2015.webp",
      download_url: "/magazine/sparsha_nov_dec_2015.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jan Feb 2016",
      image: "/magazine/jan_feb_2016.webp",
      download_url: "/magazine/sparsha_jan_feb_2016.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Mar Apr 2016",
      image: "/magazine/mar_apr_2016.webp",
      download_url: "/magazine/sparsha_mar_apr_2016.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "May Jun 2016",
      image: "/magazine/may_jun_2016.webp",
      download_url: "/magazine/sparsha_may_jun_2016.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jul Aug 2016",
      image: "/magazine/jul_aug_2016.webp",
      download_url: "/magazine/sparsha_jul_aug_2016.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Sep Oct 2016",
      image: "/magazine/sep_oct_2016.webp",
      download_url: "/magazine/sparsha_sep_oct_2016.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jan Feb 2017",
      image: "/magazine/jan_feb_2017.webp",
      download_url: "/magazine/sparsha_jan_feb_2017.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Mar Apr 2017",
      image: "/magazine/mar_apr_2017.webp",
      download_url: "/magazine/sparsha_mar_apr_2017.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jan Feb 2019",
      image: "/magazine/jan_feb_2019.webp",
      download_url: "/magazine/sparsha_jan_feb_2019.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Mar Apr 2019",
      image: "/magazine/mar_apr_2019.webp",
      download_url: "/magazine/sparsha_mar_apr_2019.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "May Jun 2019",
      image: "/magazine/may_jun_2019.webp",
      download_url: "/magazine/sparsha_may_jun_2019.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jul Aug 2019",
      image: "/magazine/jul_aug_2019.webp",
      download_url: "/magazine/sparsha_jul_aug_2019.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Sep Oct 2019",
      image: "/magazine/sep_oct_2019.webp",
      download_url: "/magazine/sparsha_sep_oct_2019.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Nov Dec 2019",
      image: "/magazine/nov_dec_2019.webp",
      download_url: "/magazine/sparsha_nov_dec_2019.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jan Feb 2020",
      image: "/magazine/jan_feb_2020.webp",
      download_url: "/magazine/sparsha_jan_feb_2020.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Mar Apr 2020",
      image: "/magazine/mar_apr_2020.webp",
      download_url: "/magazine/sparsha_mar_apr_2020.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jan Feb 2021",
      image: "/magazine/jan_feb_2021.webp",
      download_url: "/magazine/sparsha_jan_feb_2021.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Mar Apr 2021",
      image: "/magazine/mar_apr_2021.webp",
      download_url: "/magazine/sparsha_mar_apr_2021.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jul Aug 2021",
      image: "/magazine/jul_aug_2021.webp",
      download_url: "/magazine/sparsha_jul_aug_2021.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Sep Oct 2021",
      image: "/magazine/sep_oct_2021.webp",
      download_url: "/magazine/sparsha_sep_oct_2021.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Nov Dec 2021",
      image: "/magazine/nov_dec_2021.webp",
      download_url: "/magazine/sparsha_nov_dec_2021.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jan Feb 2022",
      image: "/magazine/jan_feb_2022.webp",
      download_url: "/magazine/sparsha_jan_feb_2022.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Mar Apr 2022",
      image: "/magazine/mar_apr_2022.webp",
      download_url: "/magazine/sparsha_mar_apr_2022.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "May Jun 2022",
      image: "/magazine/may_jun_2022.webp",
      download_url: "/magazine/sparsha_may_jun_2022.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jul Aug 2022",
      image: "/magazine/jul_aug_2022.webp",
      download_url: "/magazine/sparsha_jul_aug_2022.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Sep Oct 2022",
      image: "/magazine/sep_oct_2022.webp",
      download_url: "/magazine/sparsha_sep_oct_2022.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Nov Dec 2022",
      image: "/magazine/nov_dec_2022.webp",
      download_url: "/magazine/sparsha_nov_dec_2022.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jan Feb 2023",
      image: "/magazine/jan_feb_2023.webp",
      download_url: "/magazine/sparsha_jan_feb_2023.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Mar Apr 2023",
      image: "/magazine/mar_apr_2023.webp",
      download_url: "/magazine/sparsha_mar_apr_2023.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "May Jun 2023",
      image: "/magazine/may_jun_2023.webp",
      download_url: "/magazine/sparsha_may_jun_2023.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jul Aug 2023",
      image: "/magazine/jul_aug_2023.webp",
      download_url: "/magazine/sparsha_jul_aug_2023.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Sep Oct 2023",
      image: "/magazine/sep_oct_2023.webp",
      download_url: "/magazine/sparsha_sep_oct_2023.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Nov Dec 2023",
      image: "/magazine/nov_dec_2023.webp",
      download_url: "/magazine/sparsha_nov_dec_2023.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jan Feb 2024",
      image: "/magazine/jan_feb_2024.webp",
      download_url: "/magazine/sparsha_jan_feb_2024.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Mar Apr 2024",
      image: "/magazine/mar_apr_2024.webp",
      download_url: "/magazine/sparsa_mar_apr_2024.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "May Jun 2024",
      image: "/magazine/may_jun_2024.webp",
      download_url: "/magazine/sparsha_may_jun_2024.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jul Aug 2024",
      image: "/magazine/jul_aug_2024.webp",
      download_url: "/magazine/sparsha_jul_aug_2024.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Sep Oct 2024",
      image: "/magazine/sep_oct_2024.webp",
      download_url: "/magazine/sparsha_sep_oct_2024.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Nov Dec 2024",
      image: "/magazine/nov_dec_2024.webp",
      download_url: "/magazine/sparsha_nov_dec_2024.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jan Feb 2025",
      image: "/magazine/jan_feb_2025.webp",
      download_url: "/magazine/sparsha_jan_feb_2025.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Mar Apr 2025",
      image: "/magazine/mar_apr_2025.webp",
      download_url: "/magazine/sparsha_mar_apr_2025.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "May Jun 2025",
      image: "/magazine/may_jun_2025.webp",
      download_url: "/magazine/sparsha_may_jun_2025.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Jul Aug 2025",
      image: "/magazine/jul_aug_2025.webp",
      download_url: "/magazine/sparsha_jul_aug_2025.pdf",
    },
  ];

  const [allMagazines, setAllMagazines] =
    useState<Magazine[]>(initialMagazines);
  const [filteredMagazines, setFilteredMagazines] =
    useState<Magazine[]>(initialMagazines);
  const [selectedYear, setSelectedYear] = useState<string>("2025"); // State to hold the selected year

  // Extract unique years from the magazines data
  const getUniqueYears = (magazines: Magazine[]): string[] => {
    const years = new Set<string>();
    magazines.forEach((magazine) => {
      const yearMatch = magazine.month.match(/\d{4}/);
      if (yearMatch) {
        years.add(yearMatch[0]);
      }
    });
    // Sort years in descending order to show latest first in the dropdown
    return Array.from(years).sort((a, b) => parseInt(b) - parseInt(a));
  };

  const uniqueYears = ["All", ...getUniqueYears(allMagazines)];

  // Filter magazines based on the selected year
  useEffect(() => {
    if (selectedYear === "All") {
      setFilteredMagazines(allMagazines);
    } else {
      const filtered = allMagazines.filter((magazine) =>
        magazine.month.includes(selectedYear)
      );
      setFilteredMagazines(filtered);
    }
  }, [selectedYear, allMagazines]); // Depend on selectedYear and allMagazines

  // You can keep the fetch logic if you need to load data dynamically
  // useEffect(() => {
  //   fetch("http://localhost:8000/magazines")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setAllMagazines(data); // Set all fetched data
  //       setFilteredMagazines(data); // Initially display all fetched data
  //     });
  // }, []);

  return (
    <div className=" md:mx-20 my-10 mx-[2%]">
      <p className="text-2xl text-center bg-fourth py-4 rounded-full mb-8">
        Welcome to the Epaphras Ministries Library
      </p>

      <div className="flex justify-between items-center mb-4">
        <p className="text-xl">Devuni Sparsha Magazines</p>
        <div className="flex items-center">
          <label htmlFor="year-select" className="mr-2 font-medium">
            Filter by Year:
          </label>
          <select
            id="year-select"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {uniqueYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <MagazineView magazines={filteredMagazines} />
      </div>
    </div>
  );
};

interface MagazineViewProps {
  magazines: {
    name: string;
    month: string;
    image: string;
    download_url: string;
  }[];
}

const MagazineView: React.FC<MagazineViewProps> = ({ magazines }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-svh flex flex-col items-center">
      {magazines.length > 0 ? (
        <div className="w-full max-w-4xl mx-auto space-y-4">
          {magazines.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <div className="flex-1 text-center sm:text-left mb-3 sm:mb-0">
                <h3 className="text-xl font-semibold text-gray-800 transition-colors duration-300 group-hover:text-blue-600">
                  {item.name}
                </h3>
                <p className="text-base text-gray-500 mt-1">{item.month}</p>
              </div>
              <a
                href={item.download_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border-2 border-transparent text-sm font-bold rounded-full shadow-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 ease-in-out transform hover:scale-105"
                aria-label={`Download ${item.name} for ${item.month}`}
              >
                Download PDF
                <svg
                  className="ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.6 4h18.8l.6-4" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-center text-center">
          <div className="p-12 bg-white rounded-lg shadow-md max-w-sm">
            <h4 className="text-2xl font-bold text-gray-700 mb-2">
              No magazines found
            </h4>
            <p className="text-lg text-gray-500">
              Please select a different year.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LibraryPage;
