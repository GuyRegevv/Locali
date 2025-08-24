"use client"
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { HomeIcon, BookmarkIcon, PlusCircleIcon, UserCircleIcon} from '@heroicons/react/24/solid'
import { GlobeAltIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'
import { useAuth } from '@/contexts/AuthContext';

export const Header = () => {
    const { user, loading, logout } = useAuth();
    const router = useRouter();
    
    const handleLogout = () => {
        logout();
        router.push('/login');
    };
    
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
                <div className='h-8 mx-6 border-l-2 border-gray-700'></div>
                <div className="flex items-center gap-3">
                    {/* Profile Picture */}
                    <Link href="/profile" className="rounded-full h-12 w-12 border-2 bg-gray-200 overflow-hidden flex items-center justify-center hover:border-green-400 transition-colors">
                        {user?.avatar ? (
                            <img 
                                src={user.avatar} 
                                alt={`${user.name}'s avatar`}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <UserCircleIcon className='h-8 w-8 text-gray-500'/>
                        )}
                    </Link>
                    
                    {/* User Name */}
                    <p className='text-md font-bold'>
                        {loading ? 'Loading...' : (user?.name || 'Guest')}
                    </p>
                    
                    {/* Logout Button */}
                    <button
                        onClick={handleLogout}
                        className="flex items-center justify-center w-10 h-10 bg-white border-2 border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 hover:border-gray-400 hover:text-gray-700 transition-colors shadow-sm"
                        title="Logout"
                    >
                        <ArrowRightOnRectangleIcon className='h-5 w-5'/>
                    </button>
                </div>
            </div>
        </div>
    )
} 