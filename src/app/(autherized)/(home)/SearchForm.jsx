'use client'
import { useState } from 'react';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export const SearchForm = (props) => {
    
    const [destination, setDestination] = useState({country: '', city: ''});
    const [category, setCategory] = useState('');
    const [subcategory, setSubcategory] = useState('');
    const [creator, setCreator] = useState('');

    const categories = ['Food', 'Shopping', 'Art', 'Nightlife', 'Outdoors', 'Attractions']
    const subcategories = {
        'Food & Drink': ['Vegan', 'Cafes', 'Fine Dining', 'Street Food'],
        'Shopping': ['Vintage Clothing', 'Souvenirs', 'Local Markets'],
        'Art': ['Museums', 'Galleries', 'Street Art'],
        'Nightlife': ['Bars', 'Clubs', 'Live Music'],
        'Outdoors': ['Hiking', 'Parks', 'Beaches']
    };
    const creatorTypes = ['local', 'specialist', 'amatour', 'all'];

    const handleSubmit = (e) => {
        
    }
    
    
    return (
        <div className="w-2/3 h-150 p-6 rounded-lg drop-shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Search for something to do...</h2>

            <form onSubmit={handleSubmit}>
                {/* Destination */}
                <label className="block text-gray-700 mb-2">Destination</label>
                <div className="flex gap-2 mb-4">
                    <input 
                        type='text'
                        placeholder='Country'
                        className='w-1/2 h-14 p-2 border-2 rounded'
                        value={destination.country}
                        onChange={(e) => setDestination({...destination, country: e.target.value})}
                    ></input>
                    <input 
                        type='text'
                        placeholder='City'
                        className='w-1/2 h-14 p-2 border-2 rounded'
                        value={destination.city}
                        onChange={(e) => setDestination({...destination, city: e.target.value})}
                    />
                </div>
                {/* Category */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Category</label>
                    <select
                        className='w-full h-14 p-2 border-2 rounded'
                        value={category}
                        onChange={(e) => { setCategory(e.target.value);
                                           setSubcategory(''); }}
                    >
                        <option value="">All Categories</option>
                        {categories.map((cat) => ( <option key={cat} value={cat}>{cat}</option> ))}
                    </select>
                </div>
                {/* SubCategory */}
                { category && ( <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Subcategory</label>
                    <select
                        className='w-full h-14 p-2 border-2 rounded'
                        value={subcategory}
                        onChange={(e) => setSubcategory(e.target.value)}
                    >
                        <option value="">All Sub-Categories</option>
                        {subcategories[category]?.map((subcat) => ( <option key={subcat} value={subcat}>{subcat}</option> ))}
                    </select>
                </div> )}
                {/* Creator */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">By a</label>
                    <select
                        className='w-full h-14 p-2 border-2 rounded'
                        value={creator}
                        onChange={(e) => setCreator(e.target.value)}
                    >
                        <option value="">All Creators</option>
                        {creatorTypes.map((c) => ( <option key={c} value={c}>{c}</option> ))}
                    </select>
                </div>
                <div className="flex items-center justify-center py-4">
                    <button type="submit"
                            className="flex items-center justify-center w-14 h-14 bg-white border-2 rounded-full hover:bg-[#ddf9ce] transition duration-200">
                        <MagnifyingGlassIcon className="w-6 h-6" />
                    </button>
                </div>
            </form>
        </div>
    )
}