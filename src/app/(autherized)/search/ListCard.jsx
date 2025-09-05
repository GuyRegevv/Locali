import React from "react";
import Image from "next/image";
import { HeartIcon, QueueListIcon, MapIcon } from "@heroicons/react/24/outline";

export const ListCard = ({ list, onSelectList }) => {

    return (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">   
            <div className="relative aspect-[16/9]">
                <Image src="/eastvillage.webp" 
                       alt="List cover"
                       fill={true}
                       className="object-cover" />
            </div>
            <div className="flex flex-col gap-2 p-3">
                <p className="text-base font-semibold text-gray-900 line-clamp-1">{list.name}</p>
                <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-600 font-medium">{list.genre}</span>
                    {list.subgenre && <span className="text-gray-400">• {list.subgenre}</span>}
                </div>
                <div className="mt-1 flex justify-between items-center">
                    <div className="flex items-center gap-1 text-gray-700">
                        <HeartIcon className='h-5 w-5'/>
                        <span className="text-sm">{list.likeCount}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-700">
                        <QueueListIcon className='h-5 w-5'/>
                        <span className="text-sm">{list.placeCount}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent card click
                                onSelectList && onSelectList(list);
                            }}
                            className="flex items-center gap-1 px-2 py-1 text-xs bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition-colors"
                            title="Show on map"
                        >
                            <MapIcon className="h-4 w-4" />
                            Map
                        </button>
                        <div className="relative w-8 h-8 rounded-full overflow-hidden ring-1 ring-gray-200">
                            <Image 
                                src="/yellow-square.jpg" 
                                alt="Creator avatar" 
                                fill={true}
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};