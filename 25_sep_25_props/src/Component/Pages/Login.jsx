import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/footer'

export default function Login() {
    return (
        <div>
            

          <div className="antialiased bg-gray-200 text-gray-900 font-sans min-h-screen flex items-center w-full">
      <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
        <span className="block w-full text-xl uppercase font-bold mb-4">
          Login
        </span>

        <form className="mb-4">
          <div className="mb-4 md:w-full">
            <label htmlFor="email" className="block text-xs mb-1">
              Username or Email
            </label>
            <input
              className="w-full border rounded p-2 outline-none focus:shadow-outline"
              type="email"
              id="email"
              placeholder="Username or Email"
            />
          </div>

          <div className="mb-6 md:w-full">
            <label htmlFor="password" className="block text-xs mb-1">
              Password
            </label>
            <input
              className="w-full border rounded p-2 outline-none focus:shadow-outline"
              type="password"
              id="password"
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded w-full"
          >
            Login
          </button>
        </form>

        <a href="/login" className="text-blue-700 text-center text-sm block">
          Forgot password?
        </a>
      </div>
    </div>

            
        </div>
    )
}
