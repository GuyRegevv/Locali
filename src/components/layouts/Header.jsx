"use client"
import React from 'react';
import { HomeIcon, BookmarkIcon, PlusCircleIcon, UserCircleIcon} from '@heroicons/react/24/solid'
import { GlobeAltIcon } from '@heroicons/react/24/outline'

export const Header = () => {
    const handleHomeClick = () => {
        console.log('Home clicked');
    }
    return (
        <div className="flex justify-between items center w-full h-20 px-4 border-4 border-red-400 bg-[#ddf9ce]">
            <div className="flex justify-center items-center border-2 border-blue-300">
                <button className="w-12 h-12 mx-3 border-2 flex items-center justify-center bg-white rounded hover:bg-gray-200" onClick={handleHomeClick}>
                    <HomeIcon className='h-6 w-6'/>
                </button>
                <button className="w-12 h-12 mx-3 border-2 flex items-center justify-center bg-white rounded hover:bg-gray-200">
                    <BookmarkIcon className='h-6 w-6'/>
                </button>
                <button className="w-12 h-12 mx-3 border-2 flex items-center justify-center bg-white rounded hover:bg-gray-200">
                    <PlusCircleIcon className='h-6 w-6'/>
                </button>
            </div>
            <div className='border-4 border-pink-400'>
                <GlobeAltIcon className='h-16 w-16'/>
            </div>
            <div className='flex justify-between items-center border-4 border-brown-400'>
                <button className='w-28 h-10 bg-white rounded-xl border-2'>
                    <p className='text-sm font-bold'>Tel Aviv, IL</p>
                </button>
                <div className='h-8 mx-6 border-l-2 border-gray-700'></div>
                <div className='rounded-full h-12 w-12 border-2 bg-gray-200'></div> {/*profile picture (backend)*/}
                <p className='mx-2 text-md font-bold'>Mooshon Solami</p> {/*user name (backend)*/}
                <UserCircleIcon className='h-10 w-10'/>
            </div>
        </div>
    )
} 