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

        <div className="relative flex justify-between items-center w-full h-20 px-6 bg-gradient-to-r from-[#ddf9ce] via-white to-[#f0f9ed] border-b border-green-200 shadow-lg backdrop-blur-sm">
            {/* Left Navigation */}
            <div className="flex justify-center items-center gap-2">
                <Link href="/home" className="group relative w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-xl border border-green-200/50 shadow-md hover:shadow-lg hover:bg-white hover:scale-105 transition-all duration-300 ease-out">
                    <HomeIcon className='h-6 w-6 text-green-600 group-hover:text-green-700 transition-colors'/>
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link href="/list" className="group relative w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-xl border border-green-200/50 shadow-md hover:shadow-lg hover:bg-white hover:scale-105 transition-all duration-300 ease-out">
                    <BookmarkIcon className='h-6 w-6 text-green-600 group-hover:text-green-700 transition-colors'/>
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link href="/post" className="group relative w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-xl border border-green-200/50 shadow-md hover:shadow-lg hover:bg-white hover:scale-105 transition-all duration-300 ease-out">
                    <PlusCircleIcon className='h-6 w-6 text-green-600 group-hover:text-green-700 transition-colors'/>
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
            </div>
            
            {/* Center Logo */}
            <div className='absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2'>
                <div className="relative p-3 bg-white/90 backdrop-blur-sm rounded-2xl border border-green-200/50 shadow-xl">
                    <GlobeAltIcon className='h-10 w-10 text-green-600'/>
                    <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 to-green-50/30 rounded-2xl"></div>
                </div>
            </div>
            
            {/* Right Profile Section */}
            <div className='flex justify-between items-center'>
                <div className='h-8 mx-4 w-px bg-gradient-to-b from-transparent via-green-300/50 to-transparent'></div>
                <div className="flex items-center gap-4">
                    {/* Profile Picture */}
                    <Link href="/profile" className="group relative rounded-full h-12 w-12 bg-white/80 backdrop-blur-sm border-2 border-green-200/50 overflow-hidden flex items-center justify-center hover:border-green-400 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-out">
                        {user?.avatar ? (
                            <img 
                                src={user.avatar} 
                                alt={`${user.name}'s avatar`}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <UserCircleIcon className='h-8 w-8 text-green-500 group-hover:text-green-600 transition-colors'/>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>
                    
                    {/* User Name */}
                    <p className='text-md font-semibold text-gray-700 tracking-wide'>
                        {loading ? 'Loading...' : (user?.name || 'Guest')}
                    </p>
                    
                    {/* Logout Button */}
                    <button
                        onClick={handleLogout}
                        className="group relative flex items-center justify-center w-10 h-10 bg-white/80 backdrop-blur-sm border border-red-200/50 text-red-500 rounded-xl hover:bg-red-50 hover:border-red-300 hover:text-red-600 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-out shadow-md"
                        title="Logout"
                    >
                        <ArrowRightOnRectangleIcon className='h-5 w-5 transition-transform group-hover:translate-x-0.5'/>
                        <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                </div>
            </div>
        </div>
    )
} 