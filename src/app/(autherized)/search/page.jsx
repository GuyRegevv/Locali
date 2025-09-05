'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react'
import { ListsLayout } from "./ListsLayout";
import { applyFilters, extractPois } from './utils';
import { Filters } from "./Filters"; // Use named import if Filters is exported as a named export
import SearchMap from '@/components/map/SearchMap';
import { ProtectedRoute } from '@/components/auth';
import { apiGet } from '@/utils/apiCall';

export default function Search () {

  const router = useRouter();
  const searchParams = useSearchParams();
  const [filteredLists, setFilteredLists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedList, setSelectedList] = useState(null);
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

    const fetchLists = async () => {
      setIsLoading(true);
      try {
        const params = new URLSearchParams();
        if (urlCountry) params.set('country', urlCountry);
        if (urlCity) params.set('city', urlCity);
        if (urlCategory) params.set('category', urlCategory);
        if (urlSubcategory) params.set('subcategory', urlSubcategory);
        if (urlCreator) params.set('creator', urlCreator);
  
        const data = await apiGet(`/lists?${params.toString()}`);
        setFilteredLists(data);
        
      } catch (e) {
        console.error('Failed to fetch lists:', e);
        setFilteredLists([]);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchLists();
  }, [searchParams]);

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

  const handleSelectList = async (listSummary) => {
    try {
      const full = await apiGet(`/lists/${listSummary.id}`);
      setSelectedList(full);
    } catch (e) {
      console.error('Failed to load list details:', e);
      setSelectedList(null);
    }
  };

    return (
    <ProtectedRoute>
      <div className="flex w-full h-screen ">
      <div className="flex flex-col w-4/6">
      <div className="flex p-2">
         <Filters 
            filterValues={filterValues} 
            handleFilterChange={handleFilterChange}
            onApply={handleApplyFilters}
            onReset={handleResetFilters}
         />
      </div >

      <div className="p-2 flex-1 flex flex-col overflow-hidden">
        <div className="w-full py-2">
        </div>
        <div className="flex-1 overflow-y-auto">
        { isLoading ? (<p>Loading...</p>) : (
          <ListsLayout 
            lists={filteredLists} 
            onSelectList={handleSelectList}
            onReset={handleResetFilters}
          />
        ) }
        </div>
      </div>
      </div>
    
      <div className="w-2/6 p-4 h-full">
        <div className="w-full h-full rounded-lg overflow-hidden">
          <SearchMap list={selectedList} />
        </div>
      </div>
    </div>  
    </ProtectedRoute>
    )
}