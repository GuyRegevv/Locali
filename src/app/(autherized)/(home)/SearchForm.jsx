'use client'
import { useState } from 'react';
//import { useRouter, useSearchParams } from 'next/navigation';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import searchFilters from '@backend/data/SearchFilters.js'
import Link from 'next/link';


export const SearchForm = (props) => {
    
    // const router = useRouter();
    // const SearchParams = useSearchParams();

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // }

    const [filters, setFilters] = useState({
        country: '',
        city: '',
        category: '',
        subcategory: '',
        creator: ''
      });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log("inside handlechange" + name + value);
        setFilters(prev => ({
          ...prev,
          [name]: value
        }));
      };

    const getQueryParams = () => {
    return Object.fromEntries(
        Object.entries(filters).filter(([_, value]) => 
        value !== '' && value !== false
        )
    );
    };
     
    return (
        <div className="w-2/3 h-150 p-6 rounded-lg drop-shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Search for something to do...</h2>

            <form>
                {/* Destination */}
                <label className="block text-gray-700 mb-2">Destination</label>
                <div className="flex gap-2 mb-4">
                    <select
                        name="country"
                        className='w-full h-14 p-2 border-2 rounded'
                        value={filters.country}
                        onChange={handleChange}
                        >
                        <option value="">All</option>
                        {searchFilters.countries.map((c) => ( <option key={c.label} label={c.label} value={c.label}></option> ))}
                    </select>
                    <input 
                        name="city"
                        type='text'
                        placeholder='City'
                        className='w-1/2 h-14 p-2 border-2 rounded'
                        value={filters.city}
                        onChange={handleChange}
                    />
                </div>
                {/* Category */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Category</label>
                    <select
                        name="category"
                        className='w-full h-14 p-2 border-2 rounded'
                        value={filters.category}
                        onChange={handleChange}
                    >
                        <option value="">All Categories</option>
                        {searchFilters.categories.map((cat) => ( <option key={cat} value={cat}>{cat}</option> ))}
                    </select>
                </div>
                {/* SubCategory */}
                { filters.category && ( <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Subcategory</label>
                    <select
                        name="subcategory"
                        className='w-full h-14 p-2 border-2 rounded'
                        value={filters.subcategory}
                        onChange={handleChange}
                    >
                        <option value="">All Sub-Categories</option>
                        {searchFilters.subcategories[filters.category]?.map((subcat) => ( <option key={subcat} value={subcat}>{subcat}</option> ))}
                    </select>
                </div> )}
                {/* Creator */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">By a</label>
                    <select
                        name="creator"
                        className='w-full h-14 p-2 border-2 rounded'
                        value={filters.creator}
                        onChange={handleChange}
                    >
                        <option value="">All Creators</option>
                        {searchFilters.creatorTypes.map((c) => ( <option key={c} value={c}>{c}</option> ))}
                    </select>
                </div>
                <div className="flex items-center justify-center py-4">
                    <Link href={{
                        pathname: '/search',
                        query: getQueryParams()
                    }}
                    className="flex items-center justify-center w-14 h-14 bg-white border-2 rounded-full hover:bg-[#ddf9ce] transition duration-200">
                        <MagnifyingGlassIcon className="w-6 h-6" />
                    </Link>
                </div>
            </form>
        </div>
    )
}