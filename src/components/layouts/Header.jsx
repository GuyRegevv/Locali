"use client"
import React from 'react';
import Link from 'next/link';
import { HomeIcon, BookmarkIcon, PlusCircleIcon, UserCircleIcon} from '@heroicons/react/24/solid'
import { GlobeAltIcon } from '@heroicons/react/24/outline'
import { useAuth } from '@/contexts/AuthContext';

export const Header = () => {
    const { user, loading } = useAuth();
    
    return (

        <div className="relative flex justify-between items-center w-full h-20 px-4 bg-[#ddf9ce]">
            <div className="flex justify-center items-center">
                <Link href="/home" className="w-12 h-12 mx-3 border-2 flex items-center justify-center bg-white rounded hover:bg-gray-200">
                    <HomeIcon className='h-6 w-6'/>
                </Link>
                <Link href="/list" className="w-12 h-12 mx-3 border-2 flex items-center justify-center bg-white rounded hover:bg-gray-200">
                    <BookmarkIcon className='h-6 w-6'/>
                </Link>
                <Link href="/post" className="w-12 h-12 mx-3 border-2 flex items-center justify-center bg-white rounded hover:bg-gray-200">
                    <PlusCircleIcon className='h-6 w-6'/>
                </Link>
            </div>
            <div className='absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">'>
                <GlobeAltIcon className='h-16 w-16'/>
            </div>
            <div className='flex justify-between items-center'>
                <button className='w-28 h-10 bg-white rounded-xl border-2'>
                    <p className='text-sm font-bold'>Tel Aviv, IL</p>
                </button>
                <div className='h-8 mx-6 border-l-2 border-gray-700'></div>
                <Link href="/profile" className="flex items-center gap-2 hover:bg-white hover:bg-opacity-20 rounded-lg px-2 py-1 transition-colors">
                    {/* Profile Picture */}
                    <div className='rounded-full h-12 w-12 border-2 bg-gray-200 overflow-hidden flex items-center justify-center'>
                        {user?.avatar ? (
                            <img 
                                src={user.avatar} 
                                alt={`${user.name}'s avatar`}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <UserCircleIcon className='h-8 w-8 text-gray-500'/>
                        )}
                    </div>
                    
                    {/* User Name */}
                    <p className='mx-2 text-md font-bold'>
                        {loading ? 'Loading...' : (user?.name || 'Guest')}
                    </p>
                    
                    <UserCircleIcon className='h-10 w-10'/>
                </Link>
            </div>
        </div>
    )
} 