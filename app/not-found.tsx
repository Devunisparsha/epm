import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-5xl font-bold mb-6 text-gray-800">Oops!</h1>
      <p className="text-xl text-gray-600 mb-8">Looks like you've found a broken link.</p>
      <a href="/" className="py-2 px-4 bg-primary text-white font-medium rounded-md hover:bg-secondary hover:text-black transition duration-300">
        Go Back Home
      </a>
    </div>
  );
};

export default NotFoundPage;
