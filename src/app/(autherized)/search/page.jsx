'use client';
import { UIButton } from "@/components/ui/UIButton";
import { FilterBox } from "./FilterBox";
import { ListCard } from "./ListCard";
import { NumOfLists } from "./ListsLayout";
import { ListsLayout } from "./ListsLayout";
import mockData from '/public/mockData.json'

export default function Search () {

    return (
    <div className="flex w-full h-full ">

      <div className="w-1/6 border-4 border-pink-500 p-4">
        <p className="py-2 text-xl text-gray-400 font-bold">Filters:</p>
        <FilterBox title="Destination" value="Israel, Tel Aviv"></FilterBox>
        <FilterBox title="Category" value="Food"></FilterBox>
        <FilterBox title="Sub-Category" value="Vegan"></FilterBox>
        <FilterBox title="By a" value="Local"></FilterBox>
        <div className="flex flex-1 flex-col justify-center items-center my-4 h-30">
            <UIButton className="w-32 h-10 my-2" label="Apply"/>
            <UIButton className="w-32 h-10 my-2" label="Reset"/>
        </div>
      </div >

      <div className="w-3/6 border-4 border-pink-500 p-4 flex flex-col overflow-hidden">
        <div className="flex h-10">
            <input 
            type="text" 
            className="w-full p-2 border border-gray-300 bg-gray-100 rounded" 
            placeholder="Where are you?" 
            />
            <UIButton className="w-10 h-10 mx-4" label=""/>
        </div>
        <div className="w-full py-2">
            <p>{NumOfLists} results in (Roma, Italy)</p>
        </div>
        <div className="flex-1 overflow-y-auto">
            <ListsLayout lists={mockData.lists}/>
        </div>
      </div>

      <div className="w-2/6 border-4 border-pink-500 p-4">
        Google Maps
      </div >
    </div>
    )
}