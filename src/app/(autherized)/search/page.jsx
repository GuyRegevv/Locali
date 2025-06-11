'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react'
import { ListsLayout } from "./ListsLayout";
import mockData from '@backend/data/mockData.json'
import { applyFilters, extractPois } from './utils';
import { Filters } from "./Filters"; // Use named import if Filters is exported as a named export
import MapIndex from '@/components/map/MapIndex';

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
  const [pois, setPois] = useState({
    key: '',
    location: ''
  })
  
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
    //setPois(extractPois(filteredLists));  
    //("pois ", pois);
  },[searchParams]);

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
      
      <div className="flex flex-col w-4/6">
      <div className="flex p-4">
         <Filters filterValues={filterValues} handleFilterChange={handleFilterChange}/>
         <div className="ml-3 justify-center items-center">
          <button className="w-full h-1/2 text-white bg-green-500 rounded" onClick={handleApplyFilters}>Apply</button>
          <button className="w-full h-1/2 text-white bg-gray-500 rounded" onClick={handleResetFilters}>Reset</button>
        </div> 
      </div >

      <div className="p-4 flex-1 flex flex-col overflow-hidden">
        <div className="w-full py-2">
        </div>
        <div className="flex-1 overflow-y-auto">
        { isLoading ? (<p>Loading...</p>) : (<ListsLayout lists={filteredLists}/>) }
        </div>
      </div>
      </div>
    
      <div className="w-2/6 p-4">
        {/* <MapIndex pois={pois}/>
        To Fix - currently im not extatict thr right info from mock data, 
        I need to extract the list of places, when a certain list is pressed */}
      </div>
    </div>  

    )
}