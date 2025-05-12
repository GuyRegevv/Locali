'use client'
import searchFilters from '@backend/data/SearchFilters.js'

export const Filters = ({ filterValues, handleFilterChange }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        handleFilterChange(name, value);
      };
     
    return (
        <div className="rounded-lg drop-shadow-lg">
            <form className='flex flex-wrap gap-4'>
                {/* Destination */}
                <div className="flex-1">
                    <label className="block text-gray-700 mb-2">Country</label>
                    <select
                        name="country"
                        className='w-full h-14 p-2 border-2 rounded'
                        value={filterValues.country}
                        onChange={handleChange}
                    >
                        <option value="">All</option>
                        {searchFilters.countries.map((c) => (
                            <option key={c.label} label={c.label} value={c.label}></option>
                        ))}
                    </select>
                </div>
                <div className="flex-1">
                    <label className="block text-gray-700 mb-2">City</label>
                    <input
                        name="city"
                        type='text'
                        placeholder='City'
                        className='w-full h-14 p-2 border-2 rounded'
                        value={filterValues.city}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex-1">
                    <label className="block text-gray-700 mb-2">Category</label>
                    <select
                        name="category"
                        className='w-full h-14 p-2 border-2 rounded'
                        value={filterValues.category}
                        onChange={handleChange}
                    >
                        <option value="">All Categories</option>
                        {searchFilters.categories.map((cat) => ( <option key={cat} value={cat}>{cat}</option> ))}
                    </select>
                </div>
                {/* SubCategory */}
                { filterValues.category && (
                    <div className="flex-1">
                        <label className="block text-gray-700 mb-2">Subcategory</label>
                        <select
                            name="subcategory"
                            className='w-full h-14 p-2 border-2 rounded'
                            value={filterValues.subcategory}
                            onChange={handleChange}
                        >
                            <option value="">All Sub-Categories</option>
                            {searchFilters.subcategories[filterValues.category]?.map((subcat) => ( <option key={subcat} value={subcat}>{subcat}</option> ))}
                        </select>
                    </div>
                )}
                {/* Creator */}
                <div className="flex-1">
                    <label className="block text-gray-700 mb-2">By a</label>
                    <select
                        name="creator"
                        className='w-full h-14 p-2 border-2 rounded'
                        value={filterValues.creator}
                        onChange={handleChange}
                    >
                        <option value="">All Creators</option>
                        {searchFilters.creatorTypes.map((c) => ( <option key={c} value={c}>{c}</option> ))}
                    </select>
                </div>
            </form>
        </div>
    )
}