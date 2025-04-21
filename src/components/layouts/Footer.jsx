"use client"
import React from 'react';
import { HomeIcon, BookmarkIcon, PlusCircleIcon, UserCircleIcon} from '@heroicons/react/24/solid'
import { GlobeAltIcon } from '@heroicons/react/24/outline'

export const Footer = () => {
    return (
        <div className="relative flex justify-between items-center w-full h-14 px-4 bg-[#ddf9ce]">
            <p className="text-lg font-bold absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">Locali</p>
        </div>
    )
} 