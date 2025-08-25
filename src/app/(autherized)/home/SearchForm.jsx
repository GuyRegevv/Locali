'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { MagnifyingGlassIcon, MapPinIcon, StarIcon } from '@heroicons/react/24/outline';
import searchFilters from '@backend/data/SearchFilters.js';
import { apiGet } from '@/utils/apiCall';

export const SearchForm = () => {
  const router = useRouter();

  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const [values, setValues] = useState({
    country: '',
    city: '',
    category: '',
    subcategory: '',
    creator: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
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
        if (!values.country) {
          setCities([]);
          return;
        }
        const params = new URLSearchParams({ country: values.country });
        const res = await apiGet(`/geo/cities?${params.toString()}`);
        setCities(res.cities || []);
      } catch (e) {
        console.error('Failed to load cities', e);
        setCities([]);
      }
    };
    loadCities();
  }, [values.country]);

  const getQueryParams = () => {
    return Object.fromEntries(
      Object.entries(values).filter(([_, value]) => value !== '' && value !== false)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSearching(true);
    const queryParams = getQueryParams();
    const queryString = new URLSearchParams(queryParams).toString();
    setTimeout(() => {
      router.push(`/search?${queryString}`);
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Destination Row */}
      <div>
        <label className="block text-gray-700 mb-3 font-semibold text-lg">
          <MapPinIcon className="inline h-5 w-5 mr-2 text-green-600" />
          Destination
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <select
            name="country"
            className="h-12 px-4 border-2 border-gray-300 rounded-xl focus:border-green-400 focus:outline-none transition-colors text-base"
            value={values.country}
            onChange={(e) => {
              handleChange(e);
              setValues(prev => ({ ...prev, city: '' }));
            }}
          >
            <option value="">All Countries</option>
            {countries.map((c) => (
              <option key={c.label} value={c.label}>{c.label}</option>
            ))}
          </select>
          <select
            name="city"
            className="h-12 px-4 border-2 border-gray-300 rounded-xl focus:border-green-400 focus:outline-none transition-colors text-base"
            value={values.city}
            onChange={handleChange}
            disabled={!values.country}
          >
            <option value="">{values.country ? 'All' : 'Choose country first'}</option>
            {cities.map(ci => (
              <option key={`${ci.country}-${ci.label}`} value={ci.label}>{ci.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Category Row */}
      <div>
        <label className="block text-gray-700 mb-3 font-semibold text-lg">
          <StarIcon className="inline h-5 w-5 mr-2 text-green-600" />
          Category
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <select
            name="category"
            className="h-12 px-4 border-2 border-gray-300 rounded-xl focus:border-green-400 focus:outline-none transition-colors text-base"
            value={values.category}
            onChange={(e) => {
              handleChange(e);
              setValues(prev => ({ ...prev, subcategory: '' }));
            }}
          >
            <option value="">All Categories</option>
            {searchFilters.categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          {values.category && (
            <select
              name="subcategory"
              className="h-12 px-4 border-2 border-gray-300 rounded-xl focus:border-green-400 focus:outline-none transition-colors text-base"
              value={values.subcategory}
              onChange={handleChange}
            >
              <option value="">All Sub-Categories</option>
              {searchFilters.subcategories[values.category]?.map((subcat) => (
                <option key={subcat} value={subcat}>{subcat}</option>
              ))}
            </select>
          )}
        </div>
      </div>

      {/* Creator Row */}
      <div>
        <label className="block text-gray-700 mb-3 font-semibold text-lg">
          Creator Type
        </label>
        <select
          name="creator"
          className="w-full h-14 p-4 border-2 border-gray-300 rounded-xl focus:border-green-400 focus:outline-none transition-colors text-lg"
          value={values.creator}
          onChange={handleChange}
        >
          <option value="">All Creators</option>
          {searchFilters.creatorTypes.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Search Button */}
      <div className="flex justify-center pt-4">
        <button
          type="submit"
          disabled={isSearching}
          className="flex items-center justify-center px-8 py-3 bg-green-600 text-white font-semibold text-lg rounded-xl hover:bg-green-700 transform hover:scale-[1.02] transition-all duration-200 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSearching ? (
            <>
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
              Searching...
            </>
          ) : (
            <>
              <MagnifyingGlassIcon className="h-6 w-6 mr-3" />
              Discover Experiences
            </>
          )}
        </button>
      </div>
    </form>
  );
}