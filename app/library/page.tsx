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
      month: "May June 2024",
      image: "/magazine/may_jun_2024.webp",
      download_url: "/magazine/sparsa_may_june_2024.pdf",
    },
    {
      name: "Devuni Sparsha ",
      month: "Mar Apr 2024",
      image: "/magazine/mar_apr_24.webp",
      download_url: "/magazine/sparsa_mar_apr_2024.pdf",
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
      "month": "Jan Feb 2016",
      "image": "/magazine/jan_feb_2016.webp",
      "download_url": "/magazine/sparsha_jan_feb_2016.pdf"
    },
    {
      "name": "Devuni Sparsha ",
      "month": "Mar Apr 2016",
      "image": "/magazine/mar_apr_2016.webp",
      "download_url": "/magazine/sparsha_mar_apr_2016.pdf"
    },
    {
      "name": "Devuni Sparsha ",
      "month": "May June 2016",
      "image": "/magazine/may_jun_2016.webp",
      "download_url": "/magazine/sparsha_may_jun_2016.pdf"
    },
    {
      "name": "Devuni Sparsha ",
      "month": "Jul Aug 2016",
      "image": "/magazine/jul_aug_2016.webp",
      "download_url": "/magazine/sparsha_jul_aug_2016.pdf"
    },
    {
      "name": "Devuni Sparsha ",
      "month": "Sep Oct 2016",
      "image": "/magazine/sep_oct_2016.webp",
      "download_url": "/magazine/sparsha_sep_oct_2016.pdf"
    },
    {
      "name": "Devuni Sparsha ",
      "month": "Jan Feb 2015",
      "image": "/magazine/jan_feb_2015.webp",
      "download_url": "/magazine/sparsha_jan_feb_2015.pdf"
    },
    {
      "name": "Devuni Sparsha ",
      "month": "Mar Apr 2015",
      "image": "/magazine/mar_apr_2015.webp",
      "download_url": "/magazine/sparsha_mar_apr_2015.pdf"
    },
    {
      "name": "Devuni Sparsha ",
      "month": "May June 2015",
      "image": "/magazine/may_jun_2015.webp",
      "download_url": "/magazine/sparsha_may_jun_2015.pdf"
    },
    {
      "name": "Devuni Sparsha ",
      "month": "Jul Aug 2015",
      "image": "/magazine/jul_aug_2015.webp",
      "download_url": "/magazine/sparsha_jul_aug_2015.pdf"
    },
    {
      "name": "Devuni Sparsha ",
      "month": "Sep Oct 2015",
      "image": "/magazine/sep_oct_2015.webp",
      "download_url": "/magazine/sparsha_sep_oct_2015.pdf"
    },
    {
      "name": "Devuni Sparsha ",
      "month": "Nov Dec 2015",
      "image": "/magazine/nov_dec_2015.webp",
      "download_url": "/magazine/sparsha_nov_dec_2015.pdf"
    },
    {
      "name": "Devuni Sparsha ",
      "month": "Jan Feb 2014",
      "image": "/magazine/jan_feb_2014.webp",
      "download_url": "/magazine/sparsha_jan_feb_2014.pdf"
    },
    {
      "name": "Devuni Sparsha ",
      "month": "Mar Apr 2014",
      "image": "/magazine/mar_apr_2014.webp",
      "download_url": "/magazine/sparsha_mar_apr_2014.pdf"
    },
    {
      "name": "Devuni Sparsha ",
      "month": "May June 2014",
      "image": "/magazine/may_jun_2014.webp",
      "download_url": "/magazine/sparsha_may_jun_2014.pdf"
    },
    {
      "name": "Devuni Sparsha ",
      "month": "Jul Aug 2014",
      "image": "/magazine/jul_aug_2014.webp",
      "download_url": "/magazine/sparsha_jul_aug_2014.pdf"
    },
    {
      "name": "Devuni Sparsha ",
      "month": "Sep Oct 2014",
      "image": "/magazine/sep_oct_2014.webp",
      "download_url": "/magazine/sparsha_sep_oct_2014.pdf"
    },
    {
      "name": "Devuni Sparsha ",
      "month": "Nov Dec 2014",
      "image": "/magazine/nov_dec_2014.webp",
      "download_url": "/magazine/sparsha_nov_dec_2014.pdf"
    },
    {
      "name": "Devuni Sparsha ",
      "month": "Jan Feb 2013",
      "image": "/magazine/jan_feb_2013.webp",
      "download_url": "/magazine/sparsha_jan_feb_2013.pdf"
    },
    {
      "name": "Devuni Sparsha ",
      "month": "Mar Apr 2013",
      "image": "/magazine/mar_apr_2013.webp",
      "download_url": "/magazine/sparsha_mar_apr_2013.pdf"
    },
    {
      "name": "Devuni Sparsha ",
      "month": "Jul Aug 2013",
      "image": "/magazine/jul_aug_2013.webp",
      "download_url": "/magazine/sparsha_jul_aug_2013.pdf"
    },
    {
      "name": "Devuni Sparsha ",
      "month": "Sep Oct 2013",
      "image": "/magazine/sep_oct_2013.webp",
      "download_url": "/magazine/sparsha_sep_oct_2013.pdf"
    },
    {
      "name": "Devuni Sparsha ",
      "month": "Nov Dec 2013",
      "image": "/magazine/nov_dec_2013.webp",
      "download_url": "/magazine/sparsha_nov_dec_2013.pdf"
    },
    {
      "name": "Devuni Sparsha ",
      "month": "Jan Feb 2012",
      "image": "/magazine/jan_feb_2012.webp",
      "download_url": "/magazine/sparsha_jan_feb_2012.pdf"
    },
    {
      "name": "Devuni Sparsha ",
      "month": "Mar Apr 2012",
      "image": "/magazine/mar_apr_2012.webp",
      "download_url": "/magazine/sparsha_mar_apr_2012.pdf"
    },
    {
      "name": "Devuni Sparsha ",
      "month": "May June 2012",
      "image": "/magazine/may_jun_2012.webp",
      "download_url": "/magazine/sparsha_may_jun_2012.pdf"
    },
    {
      "name": "Devuni Sparsha ",
      "month": "Jul Aug 2012",
      "image": "/magazine/jul_aug_2012.webp",
      "download_url": "/magazine/sparsha_jul_aug_2012.pdf"
    },
    {
      "name": "Devuni Sparsha ",
      "month": "Sep Oct 2012",
      "image": "/magazine/sep_oct_2012.webp",
      "download_url": "/magazine/sparsha_sep_oct_2012.pdf"
    },
    {
      "name": "Devuni Sparsha ",
      "month": "Nov Dec 2012",
      "image": "/magazine/nov_dec_2012.webp",
      "download_url": "/magazine/sparsha_nov_dec_2012.pdf"
    },
    {
      "name": "Devuni Sparsha ",
      "month": "Jan Feb 2011",
      "image": "/magazine/jan_feb_2011.webp",
      "download_url": "/magazine/sparsha_jan_feb_2011.pdf"
    },
    {
      "name": "Devuni Sparsha ",
      "month": "Mar Apr 2011",
      "image": "/magazine/mar_apr_2011.webp",
      "download_url": "/magazine/sparsha_mar_apr_2011.pdf"
    },
    {
      "name": "Devuni Sparsha ",
      "month": "May June 2011",
      "image": "/magazine/may_jun_2011.webp",
      "download_url": "/magazine/sparsha_may_jun_2011.pdf"
    },
    {
      "name": "Devuni Sparsha ",
      "month": "Jul Aug 2011",
      "image": "/magazine/jul_aug_2011.webp",
      "download_url": "/magazine/sparsha_jul_aug_2011.pdf"
    },
    {
      "name": "Devuni Sparsha ",
      "month": "Sep Oct 2011",
      "image": "/magazine/sep_oct_2011.webp",
      "download_url": "/magazine/sparsha_sep_oct_2011.pdf"
    },
    {
      "name": "Devuni Sparsha ",
      "month": "Nov Dec 2011",
      "image": "/magazine/nov_dec_2011.webp",
      "download_url": "/magazine/sparsha_nov_dec_2011.pdf"
    },
    {
      "name": "Devuni Sparsha ",
      "month": "Jan Feb 2010",
      "image": "/magazine/jan_feb_2010.webp",
      "download_url": "/magazine/sparsha_jan_feb_2010.pdf"
    },
    {
      "name": "Devuni Sparsha ",
      "month": "Mar Apr 2010",
      "image": "/magazine/mar_apr_2010.webp",
      "download_url": "/magazine/sparsha_mar_apr_2010.pdf"
    },
    {
      "name": "Devuni Sparsha ",
      "month": "May June 2010",
      "image": "/magazine/may_jun_2010.webp",
      "download_url": "/magazine/sparsha_may_jun_2010.pdf"
    },
    {
      "name": "Devuni Sparsha ",
      "month": "Sep Oct 2010",
      "image": "/magazine/sep_oct_2010.webp",
      "download_url": "/magazine/sparsha_sep_oct_2010.pdf"
    },
    {
      "name": "Devuni Sparsha ",
      "month": "Nov Dec 2010",
      "image": "/magazine/nov_dec_2010.webp",
      "download_url": "/magazine/sparsha_nov_dec_2010.pdf"
    },
    {
      "name": "Devuni Sparsha ",
      "month": "Nov Dec 2008",
      "image": "/magazine/nov_dec_2008.webp",
      "download_url": "/magazine/sparsha_nov_dec_2008.pdf"
    },
    {
      "name": "Devuni Sparsha ",
      "month": "Jan Feb 2009",
      "image": "/magazine/jan_feb_2009.webp",
      "download_url": "/magazine/sparsha_jan_feb_2009.pdf"
    },
    {
      "name": "Devuni Sparsha ",
      "month": "Jul Aug 2009",
      "image": "/magazine/jul_aug_2009.webp",
      "download_url": "/magazine/sparsha_jul_aug_2009.pdf"
    },
    {
      "name": "Devuni Sparsha ",
      "month": "Sep Oct 2009",
      "image": "/magazine/sep_oct_2009.webp",
      "download_url": "/magazine/sparsha_sep_oct_2009.pdf"
    },
    {
      "name": "Devuni Sparsha ",
      "month": "Nov Dec 2009",
      "image": "/magazine/nov_dec_2009.webp",
      "download_url": "/magazine/sparsha_nov_dec_2009.pdf"
    }
  ];

  const [allMagazines, setAllMagazines] = useState<Magazine[]>(initialMagazines);
  const [filteredMagazines, setFilteredMagazines] = useState<Magazine[]>(initialMagazines);
  const [selectedYear, setSelectedYear] = useState<string>("All"); // State to hold the selected year

  // Extract unique years from the magazines data
  const getUniqueYears = (magazines: Magazine[]): string[] => {
    const years = new Set<string>();
    magazines.forEach(magazine => {
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
      const filtered = allMagazines.filter(magazine =>
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
          <label htmlFor="year-select" className="mr-2 font-medium">Filter by Year:</label>
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
    <div className="overflow-y-auto mx-[2%] max-h-svh border-2 rounded-lg shadow-md">
      <table className=" min-w-full divide-y divide-gray-200">
        <thead>
          <tr className="bg-secondary text-left font-medium">
            <th className="p-4">Name</th>
            <th className="p-4">Month</th>
            <th className="p-4">Download</th>
          </tr>
        </thead>
        <tbody>
          {magazines.length > 0 ? (
            magazines.map((item, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="p-4">{item.name}</td>
                <td className="p-4">{item.month}</td>
                <td className="px-6 py-4 whitespace-nowrap text-base">
                  <Link
                    href={item.download_url}
                    target="_blank"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 ease-in-out transform hover:scale-105"
                    aria-label={`Download ${item.name} for ${item.month}`}
                  >
                    Download PDF
                    <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="p-4 text-center text-gray-500">
                No magazines found for the selected year.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default LibraryPage;