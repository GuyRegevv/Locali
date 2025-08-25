'use client'
import searchFilters from '@backend/data/SearchFilters.js'
import { useState, useEffect } from 'react';
import { apiGet } from '@/utils/apiCall';


export const Filters = ({ filterValues, handleFilterChange, onApply, onReset }) => {
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
        <div className="w-full rounded-xl bg-white/80 backdrop-blur p-4 drop-shadow-lg border border-gray-100 sticky top-4">
          <form className='grid grid-cols-6 gap-3'>
            {/* Country */}
            <div className="flex-1">
              <select
                name="country"
                aria-label="Country"
                className='w-full h-10 text-sm px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400'
                value={filterValues.country}
                onChange={handleChange}
              >
                <option value="">All countries</option>
                {countries.map(c => (
                  <option key={c.label} value={c.label}>{c.label}</option>
                ))}
              </select>
            </div>
    
            {/* City */}
            <div className="flex-1">
              <select
                name="city"
                aria-label="City"
                className='w-full h-10 text-sm px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400'
                value={filterValues.city}
                onChange={handleChange}
                disabled={!filterValues.country}
              >
                <option value="">{filterValues.country ? 'All cities' : 'Choose country first'}</option>
                {cities.map(ci => (
                  <option key={`${ci.country}-${ci.label}`} value={ci.label}>{ci.label}</option>
                ))}
              </select>
            </div>
    
            {/* Category */}
            <div className="flex-1">
              <select
                name="category"
                aria-label="Category"
                className='w-full h-10 text-sm px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400'
                value={filterValues.category}
                onChange={handleChange}
              >
                <option value="">All Categories</option>
                {searchFilters.categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>
    
            {/* Subcategory (always visible, disabled until category chosen) */}
            <div className="flex-1">
              <select
                name="subcategory"
                aria-label="Subcategory"
                className='w-full h-10 text-sm px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 disabled:bg-gray-50 disabled:text-gray-400'
                value={filterValues.subcategory}
                onChange={handleChange}
                disabled={!filterValues.category}
              >
                <option value="">{filterValues.category ? 'All sub-categories' : 'Choose category first'}</option>
                {searchFilters.subcategories[filterValues.category]?.map(sub => (
                  <option key={sub} value={sub}>{sub}</option>
                ))}
              </select>
            </div>
    
            {/* Creator */}
            <div className="flex-1">
              <select
                name="creator"
                aria-label="Creator"
                className='w-full h-10 text-sm px-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400'
                value={filterValues.creator}
                onChange={handleChange}
              >
                <option value="">All Creators</option>
                {searchFilters.creatorTypes.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            {/* Actions */}
            <div className="flex items-center justify-end gap-2">
              <button
                className="h-10 px-4 rounded-md border border-gray-300 bg-white text-gray-800 hover:border-gray-400"
                type="button"
                onClick={onReset}
              >
                Reset
              </button>
              <button
                className="h-10 px-4 rounded-md bg-green-500 text-white hover:bg-green-600"
                type="button"
                onClick={onApply}
              >
                Apply
              </button>
            </div>
          </form>
        </div>
      );
    };