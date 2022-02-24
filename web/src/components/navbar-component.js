import React from "react";
import { NavLink as Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-30">
      <nav className="bg-white filter drop-shadow-md transition duration-500">
        <div className="mx-auto">
          <div className="flex justify-between">
            <div className="flex items-center font-bold space-x-10 py-7 px-40 antialiased text-3xl">
              <h1>MOVIE RESERVATION</h1>
            </div>
            <div className="flex items-center font-bold space-x-10 py-7 px-40 antialiased">
              <div>
                <Link
                  to="/"
                  className="transition duration-300 ease-in-out py-2 px-3  hover:text-green-400"
                >
                  HOME
                </Link>
              </div>
              <div>
                <Link
                  to="/movie-reservation"
                  className="transition duration-300 ease-in-out py-2 px-3  hover:text-green-400"
                >
                  RESERVATION
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
