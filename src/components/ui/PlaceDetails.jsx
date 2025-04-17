import React from "react";
import { useState } from "react";

export default function PlaceDetails({ place }) {
  if (!place) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <p className="text-gray-500 text-lg">Select a place to view details</p>
      </div>
    );
  }
}
