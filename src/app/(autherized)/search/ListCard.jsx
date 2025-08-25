import React from "react";
import Image from "next/image";
import { HeartIcon, QueueListIcon } from "@heroicons/react/24/outline";

export const ListCard = ({ list }) => {

    return (
        <div className="h-70 bg-gray-100 rounded flex flex-col">   
            <div className="h-[35%] relative">
                <Image src="/eastvillage.webp" 
                       alt="bgImg"
                       fill={true}
                       className="rounded-t object-cover" />
            </div>
            <div className="flex flex-col flex-1 p-2">
                <p className="text-lg font-bold">{list.name}</p>
                <div className="flex-1 mt-2">
                    <p className="mr-1 font-bold text-md text-gray-500">{list.genre}</p>
                    <p className="text-md text-gray-400">{list.subgenre}</p>
                </div>
                <div className="flex justify-between items-center h-10">
                    <div className="flex items-center">
                        <HeartIcon className='h-5 w-5 mr-0.5'/>
                        <p className="flex">{list.likeCount}</p>
                    </div>
                    <div className="flex items-center">
                        <QueueListIcon className='h-5 w-5 mr-0.5'/>
                        <p className="flex">{list.placeCount}</p>
                    </div>
                    <div className="relative border-2 border-brown-400 w-8 h-8 rounded-full overflow-hidden">
                        <Image 
                            src="/yellow-square.jpg" 
                            alt="bgImg" 
                            fill={true}
                            className="rounded-t object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};