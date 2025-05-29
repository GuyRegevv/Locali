'use client'
import { useState, useEffect } from 'react'
import searchFilters from '@backend/data/SearchFilters.js'

export default function PostForm({ selectedLocation, onSubmit }) {
  const [textInput, setTextInput] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedSubcategory, setSelectedSubcategory] = useState('')
  const [description, setDescription] = useState('')

  // Update location when selectedLocation changes
  useEffect(() => {
    if (selectedLocation) {
      // Extract country from address if possible, otherwise keep current selection
      const address = selectedLocation.address || '';
      // You could implement more sophisticated country detection here
      // For now, we'll just keep the manual country selection
    }
  }, [selectedLocation])

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const formData = {
      listName: textInput,
      country: selectedCountry,
      category: selectedCategory,
      subcategory: selectedSubcategory,
      description: description,
      selectedLocation: selectedLocation // Include the map location
    }

    // Call the parent's onSubmit function if provided
    if (onSubmit) {
      onSubmit(formData)
    } else {
      // Fallback console log if no onSubmit provided
      console.log('Form submitted with:', formData)
    }
  }

  const handleTextChange = (e) => {
    setTextInput(e.target.value)
  }

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value)
  }

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value)
    setSelectedSubcategory('') // Reset subcategory when category changes
  }

  const handleSubcategoryChange = (e) => {
    setSelectedSubcategory(e.target.value)
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }

  return (
    <div className="w-full h-full max-w-4xl mx-auto p-8 bg-gray-50 border border-gray-200 rounded-lg">
      <h2 className="flex justify-center text-3xl font-medium mb-6 text-gray-800">Create Post</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label 
            htmlFor="textInput" 
            className="block text-lg font-medium text-gray-700 mb-3"
          >
            List Name
          </label>
          <textarea
            id="textInput"
            value={textInput}
            onChange={handleTextChange}
            placeholder="Write your message here..."
            className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-gray-500 resize-none text-gray-800 rounded-lg"
          />
        </div>

        <div>
          <label 
            className="block text-lg font-medium text-gray-700 mb-3"
          >
            Location
          </label>
          <select
            id="countrySelect"
            value={selectedCountry}
            onChange={handleCountryChange}
            className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-gray-500 text-gray-800 rounded-lg"
          >
            <option value="">Select a country...</option>
            {searchFilters.countries.map((country) => (
              <option key={country.value} value={country.label}>
                {country.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label 
            className="block text-lg font-medium text-gray-700 mb-3"
          >
            Category
          </label>
          <select
            id="categorySelect"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-gray-500 text-gray-800 rounded-lg"
          >
            <option value="">Select a category...</option>
            {searchFilters.categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div>
          {/* Subcategory field - only show if category is selected and has subcategories */}
          {selectedCategory && searchFilters.subcategories[selectedCategory] && (
            <div>
              <label 
                className="block text-lg font-medium text-gray-700 mb-3"
              >
                Subcategory
              </label>
              <select
                id="subcategorySelect"
                value={selectedSubcategory}
                onChange={handleSubcategoryChange}
                className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-gray-500 text-gray-800 rounded-lg"
              >
                <option value="">Select a subcategory...</option>
                {searchFilters.subcategories[selectedCategory].map((subcategory) => (
                  <option key={subcategory} value={subcategory}>
                    {subcategory}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
        <div>
          <label 
            className="block text-lg font-medium text-gray-700 mb-3"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Write your description here..."
            className="w-full px-4 py-3 border border-gray-300 bg-white focus:outline-none focus:border-gray-500 resize-none text-gray-800 rounded-lg"
            rows={4}
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-8 py-3 bg-gray-800 text-white font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition duration-200 rounded-full"
          >
            Submit Post
          </button>
        </div>
      </form>
    </div>
  )
}