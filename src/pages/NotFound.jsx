import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftCircle } from 'lucide-react';

const NotFound = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen flex items-center justify-center px-4 py-16 text-center">
      <div className="max-w-lg">
        <img
          src="https://illustrations.popsy.co/gray/error-404.svg"
          alt="404 Illustration"
          className="w-80 mx-auto mb-8 animate-fadeIn"
        />
        <h1 className="text-5xl font-bold text-primary mb-4">Oops! 404</h1>
        <p className="text-lg text-gray-700 mb-6">
          The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-800 transition"
        >
          <ArrowLeftCircle className="w-5 h-5" /> Go Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;

