"use client"
import Link from 'next/link';
import { React, useState } from 'react';

export const UIButton = ({ className="", label, onClick, disabled = false, selected = false, href}) => {
	//const buttonClasses = 'flex h-[50px] items-center justify-center rounded-lg px-4 py-3 text-base font-semibold transition-all md:rounded-xl gap-2'
	const [isSelected, setSelected] = useState(false);
	
	const handleClick = () => {
		setSelected(!isSelected);
		onClick?.()
	}

	const baseNotPressed = "py-2 rounded-xl border border-gray-300 bg-white text-black font-semibold hover:border-green-400 hover:text-green-600"
	const basePressed = "py-2 rounded-xl border-2 border-green-400 bg-green-100 text-green-600 hover:text-black font-semibold"
	
	return (
	<button 
		type="button" 
		className={isSelected ? `${className} ${basePressed}` : `${className} ${baseNotPressed}`} 
		disabled={disabled} 
		onClick={handleClick}>
		<span className='text-sm font-bold'>{label}</span>
	</button>
	);
};
