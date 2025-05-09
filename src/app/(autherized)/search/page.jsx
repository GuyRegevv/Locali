'use client';
import { UIButton } from "@/components/ui/UIButton";
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react'
import { FilterBox } from "./FilterBox";
import { ListsLayout } from "./ListsLayout";
import mockData from '@backend/data/mockData.json'
import { applyFilters } from './utils';

export default function Search () {

  const router = useRouter();
  const searchParams = useSearchParams();
  const [filteredLists, setFilteredLists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterValues, setFilterValues] = useState({
    country: '',
    city: '',
    category: '',
    subcategory: '',
    creator: ''
  });
  
  useEffect(() => {
    const urlCountry = searchParams.get('country') || '';
    const urlCity = searchParams.get('city') || '';
    const urlCategory = searchParams.get('category') || '';
    const urlSubcategory = searchParams.get('subcategory') || '';
    const urlCreator = searchParams.get('creator') || '';
    
    setFilterValues({
      country: urlCountry,
      city: urlCity,
      category: urlCategory,
      subcategory: urlSubcategory,
      creator: urlCreator
    });

    const filtered = applyFilters({
      country: urlCountry,
      city: urlCity,
      category: urlCategory,
      subcategory: urlSubcategory,
      creator: urlCreator
    }, [...mockData.lists]);
    
    setFilteredLists(filtered);
    setIsLoading(false);
    
  },[searchParams]);

  // Function to handle filter value changes
  const handleFilterChange = (filterName, value) => {
    setFilterValues(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  const handleResetFilters = () => {
    setFilterValues({
      country: '',
      city: '',
      category: '',
      subcategory: '',
      creator: ''
    });
    setSearchInput('');
    router.push('/search');
  };

  const handleApplyFilters = () => {
    const params = new URLSearchParams();
    
    if (filterValues.country) params.set('country', filterValues.country);
    if (filterValues.city) params.set('city', filterValues.city);
    if (filterValues.category) params.set('category', filterValues.category);
    if (filterValues.subcategory) params.set('subcategory', filterValues.subcategory);
    if (filterValues.creator) params.set('creator', filterValues.creator);
    
    router.push(`/search?${params.toString()}`);
  };

    return (
    <div className="flex w-full h-full ">
      <div className="w-1/6 border-4 border-pink-500 p-4">
        <p className="py-2 text-xl text-gray-400 font-bold">Filters:</p>
        <FilterBox 
          title="Destination" 
          value={filterValues.country}
          onChange={(value) => {handleFilterChange('country',value)}}
        />

        <FilterBox 
          title="Category" 
          value={filterValues.category}
          onChange={(value) => {handleFilterChange('category',value)}}
        />

        <FilterBox 
          title="SubCategory" 
          value={filterValues.subcategory}
          onChange={(value) => {handleFilterChange('subcategory',value)}}
        />

        <FilterBox 
          title="By a" 
          value={filterValues.creator}
          onChange={(value) => {handleFilterChange('creator',value)}}
        />    
        
        <div className="flex flex-1 flex-col justify-center items-center my-4 h-30">
            <UIButton className="w-32 h-10 my-2" label="Apply" onClick={handleApplyFilters}/>
            <UIButton className="w-32 h-10 my-2" label="Reset" onClick={handleResetFilters}/>
        </div>
      </div >

      <div className="w-3/6 border-4 border-pink-500 p-4 flex flex-col overflow-hidden">
        <div className="w-full py-2">
            <p>{filteredLists.length} results in {filterValues.country},{filterValues.city}</p>
        </div>
        <div className="flex-1 overflow-y-auto">
          { isLoading ? (<p>Loading...</p>) : (<ListsLayout lists={filteredLists}/>) }
        </div>
      </div>

      <div className="w-2/6 border-4 border-pink-500 p-4">
        <div>Google Maps</div>
      </div>
    </div>
  )
}