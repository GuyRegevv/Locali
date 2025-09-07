'use client'
import { useState, useEffect } from 'react'
import searchFilters from '@backend/data/SearchFilters.js'

export default function PostForm({ selectedLocation, onSubmit, isSubmitting = false, listLocation = null }) {
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
    <div className="w-full h-full flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Create New List</h2>
        <p className="text-sm text-gray-600">Build your personalized list of local recommendations</p>
        
        {/* Location Indicator */}
        {listLocation && (
          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-green-800">
                List location: <span className="font-semibold">{listLocation.city.name}, {listLocation.country.name}</span>
              </span>
            </div>
          </div>
        )}
      </div>
      
      <form onSubmit={handleSubmit} className="flex-1 flex flex-col space-y-5">
        {/* List Name */}
        <div>
          <label 
            htmlFor="textInput" 
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            List Name *
          </label>
          <input
            type="text"
            id="textInput"
            value={textInput}
            onChange={handleTextChange}
            placeholder="e.g., Best Coffee Shops in Paris"
            className="w-full px-4 py-3 border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent rounded-xl text-gray-900 placeholder-gray-500 transition-all duration-200"
          />
        </div>

        {/* Category */}
        <div>
          <label 
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Category
          </label>
          <select
            id="categorySelect"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="w-full px-4 py-3 border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 rounded-xl transition-all duration-200"
          >
            <option value="">Choose a category...</option>
            {searchFilters.categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Subcategory */}
        {selectedCategory && searchFilters.subcategories[selectedCategory] && (
          <div>
            <label 
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Subcategory
            </label>
            <select
              id="subcategorySelect"
              value={selectedSubcategory}
              onChange={handleSubcategoryChange}
              className="w-full px-4 py-3 border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-900 rounded-xl transition-all duration-200"
            >
              <option value="">Choose a subcategory...</option>
              {searchFilters.subcategories[selectedCategory].map((subcategory) => (
                <option key={subcategory} value={subcategory}>
                  {subcategory}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Description */}
        <div className="flex-1">
          <label 
            className="block text-sm font-semibold text-gray-700 mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Tell others what makes this list special..."
            className="w-full h-32 px-4 py-3 border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none text-gray-900 placeholder-gray-500 rounded-xl transition-all duration-200"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-6 font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              isSubmitting 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
            }`}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                Creating List...
              </div>
            ) : (
              'Create List'
            )}
          </button>
        </div>
      </form>
    </div>
  )
}