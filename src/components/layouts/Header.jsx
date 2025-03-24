"use client"
import React from 'react';

export const Header = () => {
    const handleHomeClick = () => {
        console.log('Home clicked');
    }
    return (
        <div className="w-full h-20 flex border-4 border-red-400">
            <div className="w-1/3 flex justify-center items-center border-2 border-blue-300">
                <button className="w-16 h-16 mx-3 border-2 rounded"
                        onClick={handleHomeClick}>Home</button>
                <button className="w-16 h-16 mx-3 border-2 rounded">Saved</button>
                <button className="w-15 h-16 mx-3 border-2 rounded">New</button>
            </div>
        </div>
    )
} 