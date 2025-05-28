'use client'
import { SearchForm } from "./SearchForm";
import TravelAnimation from "@/components/animations/TravelAnimation";

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col w-1/2 border-4 border-pink-400 ">
        <div className="border-4 border-brown-400 bg-cover drop-shadow-lg">
          <p className="m-5 text-7xl font-bold">
            Find travel recommendation from real locals
          </p>
          <p className="m-5 text-5xl font-bold">
            for any kind of activity you like to do when travelling
          </p>
          <p className="m-5 text-3xl font-bold">
            Food, Clothing, Museums, attractions, parks, bars and more
          </p>
        </div>
        
        {/* Simple Travel Animation */}
        <TravelAnimation />
      </div>
        
      <div className="flex items-center justify-center w-1/2 border-4 border-yellow-400">
        <SearchForm />
      </div>
    </>
  );
}
