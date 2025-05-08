import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-8">
      <div className="text-center max-w-md">
        <FaSadTear className="text-pink-500 text-7xl mb-6 mx-auto animate-bounce" />
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-800 mb-4">
          404
        </h1>
        <p className="text-xl mb-6">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <Link
          to="/"
          className="inline-block bg-gradient-to-r from-pink-500 to-purple-800 text-white px-6 py-2 rounded-full font-semibold transition-transform hover:scale-105"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
