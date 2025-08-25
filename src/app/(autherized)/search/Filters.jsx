'use client'
import searchFilters from '@backend/data/SearchFilters.js'
import { useState, useEffect } from 'react';
import { apiGet } from '@/utils/apiCall';


export const Filters = ({ filterValues, handleFilterChange }) => {
    const [countries, setCountries] = useState([]);
    const [cities, setCities] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        handleFilterChange(name, value);
      };

      useEffect(() => {
        const loadCountries = async () => {
          try {
            const res = await apiGet('/geo/countries');
            setCountries(res.countries || []);
          } catch (e) {
            console.error('Failed to load countries', e);
            setCountries([]);
          }
        };
        loadCountries();
      }, []);
    
      useEffect(() => {
        const loadCities = async () => {
          try {
            if (!filterValues.country) {
              setCities([]);
              return;
            }
            const params = new URLSearchParams({ country: filterValues.country });
            const res = await apiGet(`/geo/cities?${params.toString()}`);
            setCities(res.cities || []);
          } catch (e) {
            console.error('Failed to load cities', e);
            setCities([]);
          }
        };
        loadCities();
      }, [filterValues.country]);
     
      return (
        <div className="rounded-lg drop-shadow-lg">
          <form className='flex flex-wrap gap-4'>
            {/* Country */}
            <div className="flex-1">
              <label className="block text-gray-700 mb-2">Country</label>
              <select
                name="country"
                className='w-full h-14 p-2 border-2 rounded'
                value={filterValues.country}
                onChange={handleChange}
              >
                <option value="">All</option>
                {countries.map(c => (
                  <option key={c.label} value={c.label}>{c.label}</option>
                ))}
              </select>
            </div>
    
            {/* City */}
            <div className="flex-1">
              <label className="block text-gray-700 mb-2">City</label>
              <select
                name="city"
                className='w-full h-14 p-2 border-2 rounded'
                value={filterValues.city}
                onChange={handleChange}
                disabled={!filterValues.country}
              >
                <option value="">{filterValues.country ? 'All' : 'Choose country first'}</option>
                {cities.map(ci => (
                  <option key={`${ci.country}-${ci.label}`} value={ci.label}>{ci.label}</option>
                ))}
              </select>
            </div>
    
            {/* Category */}
            <div className="flex-1">
              <label className="block text-gray-700 mb-2">Category</label>
              <select
                name="category"
                className='w-full h-14 p-2 border-2 rounded'
                value={filterValues.category}
                onChange={handleChange}
              >
                <option value="">All Categories</option>
                {searchFilters.categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>
    
            {/* Subcategory */}
            {filterValues.category && (
              <div className="flex-1">
                <label className="block text-gray-700 mb-2">Subcategory</label>
                <select
                  name="subcategory"
                  className='w-full h-14 p-2 border-2 rounded'
                  value={filterValues.subcategory}
                  onChange={handleChange}
                >
                  <option value="">All Sub-Categories</option>
                  {searchFilters.subcategories[filterValues.category]?.map(sub => (
                    <option key={sub} value={sub}>{sub}</option>
                  ))}
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
                {searchFilters.creatorTypes.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </form>
        </div>
      );
    };