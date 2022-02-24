import React from "react";
import Navbar from "./navbar-component";
import FileUploder from "../components/file-uploader";

//map api

export default function MoviesList() {
  return (
    <>
      <div class="container mx-auto mt-6">
        <div class="mb-6">
          <Navbar />
        </div>

        <div class="text-5xl">
          <h1>MOVIES</h1>
        </div>
        <div class="flex flex-row space-x-4 mt-6">
          <div class="rounded-lg shadow-lg bg-white max-w-lg transform hover:-translate-y-3 transition ease-in-out duration-500">
            <a href="#!">
              <img
                class="rounded-t-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                alt=""
              />
            </a>
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">
                Movie title
              </h5>
              <p class="text-gray-700 text-base mb-2">Time Slots</p>
              <p class="text-gray-700 text-base mb-2">Seats Available</p>
              <div class="file uploader here">
                <FileUploder />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
