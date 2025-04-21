import React from "react";

export default function PlaceHeader({ title }) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-start">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <button className="p-2 bg-gray-100 rounded-full">
          <i className="bi bi-star text-xl"></i>
        </button>
      </div>
    </div>
  );
}
