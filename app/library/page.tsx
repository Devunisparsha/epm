// components/LibraryPage.tsx

import React from "react";

const LibraryPage: React.FC = () => {
    const magazines = [
        { name: 'File 1', month: 'April', downloadLink: '/download/file1.pdf' },
        { name: 'File 2', month: 'May', downloadLink: '/download/file2.zip' },
        { name: 'File 1', month: 'April', downloadLink: '/download/file1.pdf' },
        { name: 'File 2', month: 'May', downloadLink: '/download/file2.zip' },
        { name: 'File 1', month: 'April', downloadLink: '/download/file1.pdf' },
        { name: 'File 2', month: 'May', downloadLink: '/download/file2.zip' },
        { name: 'File 1', month: 'April', downloadLink: '/download/file1.pdf' },
        { name: 'File 2', month: 'May', downloadLink: '/download/file2.zip' },
        { name: 'File 1', month: 'April', downloadLink: '/download/file1.pdf' },
        { name: 'File 2', month: 'May', downloadLink: '/download/file2.zip' },
        { name: 'File 1', month: 'April', downloadLink: '/download/file1.pdf' },
        { name: 'File 2', month: 'May', downloadLink: '/download/file2.zip' },
        { name: 'File 1', month: 'April', downloadLink: '/download/file1.pdf' },
        { name: 'File 2', month: 'May', downloadLink: '/download/file2.zip' },
        // Add more data objects
      ];

  return (
    <div className="mx-5  md:mx-20 my-10">
      <p className=" text-2xl text-center bg-fourth py-4 rounded-full mb-8">
        Welcome to the Epaphras Ministries Library
      </p>

      <p className=" text-xl mb-4">Devuni Sparsha</p>
      <div>
        <MagazineView magazines={magazines}/>
      </div>
    </div>
  );
};

interface MagazineViewProps {
  magazines: { name: string; month: string; downloadLink: string }[];
}

const MagazineView: React.FC<MagazineViewProps> = ({ magazines }) => {
  return (
    <div className="overflow-y-auto h-96 border-2 rounded-lg shadow-md">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr className="bg-secondary text-left  font-medium">
            <th className="p-4">Name</th>
            <th className="p-4">Month</th>
            <th className="p-4">Download</th>
          </tr>
        </thead>
        <tbody>
          {magazines.map((item, index) => (
            <tr key={index} className="border-b hover:bg-gray-100">
              <td className="p-4">{item.name}</td>
              <td className="p-4">{item.month}</td>
              <td className="p-4">
                <a href={item.downloadLink} className="text-blue-500 underline">
                  Download
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LibraryPage;
