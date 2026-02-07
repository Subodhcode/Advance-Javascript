import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/footer'
import { Link } from 'react-router'

export default function Error404() {
  return (
    <div>
        
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 px-4">
      
      <h1 className="text-7xl font-extrabold text-red-500">404</h1>
      
      <h2 className="text-2xl md:text-3xl font-semibold mt-4">
        Oops! Page Not Found
      </h2>
      
      <p className="text-gray-600 mt-2 text-center max-w-md">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition"
      >
        Go Back Home
      </Link>
    </div>
    
    </div>
  )
}
