import React, { useState } from "react";
import LanderInput from "./LanderInput";

export default function LanderSearchForm() {
  const [destination, setDestination] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [by, setBy] = useState("");

  const handleSearch = () => {
    console.log("Destination:", destination);
    console.log("Category:", category);
    console.log("Sub Category:", subCategory);
    console.log("By:", by);
    setCategory("");
    setDestination("");
    setSubCategory("");
    setBy("");
  };

  return (
    <div className="w-1/2 pl-8">
      <div className="mb-8">
        <LanderInput
          placeholder="Destination"
          icon="bi bi-globe"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <LanderInput
          placeholder="Category"
          icon="bi bi-list"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <LanderInput
          placeholder="Sub Category"
          icon="bi bi-card-list"
          value={subCategory}
          onChange={(e) => setSubCategory(e.target.value)}
        />
        <LanderInput
          placeholder="By a"
          icon="bi bi-person"
          value={by}
          onChange={(e) => setBy(e.target.value)}
        />
        <div className="flex items-center justify-center">
          <button
            className="bg-gray-200 hover:bg-gray-300 p-4 rounded-full"
            onClick={handleSearch}
          >
            <i className="bi bi-search text-gray-700 text-xl"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
