import Link from 'next/link';
import React from 'react';


export const UIButton = ({ label, onClick, disabled = false, href }) => {
	const buttonClasses = 'flex h-[50px] items-center justify-center rounded-lg px-4 py-3 text-base font-semibold transition-all md:rounded-xl gap-2'

	
	return (
		<button type="button" className={buttonClasses} disabled={disabled || isLoading} onClick={onClick}>
				<>
					{icon && <span>{icon}</span>}
					<span>{label}</span>
				</>
			
		</button>
	);
};
