import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex w-full items-center justify-center h-screen bg-gray-100">
      <div className="text-center p-6 bg-white border-2 border-gray-200 rounded-lg shadow-lg">
        <h1 className="text-9xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-6">Oops! The page you are looking for does not exist.</p>
        <Link to="/" className="inline-block px-6 py-2 text-white bg-blue-500 hover:bg-blue-700 rounded">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
