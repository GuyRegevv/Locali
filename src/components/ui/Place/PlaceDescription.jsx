import React from "react";

export default function PlaceDescription({ description }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-2">Publisher description</h2>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
