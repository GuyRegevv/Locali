import React from "react";
import Image from "next/image";

import { HeartIcon, QueueListIcon, MapIcon } from "@heroicons/react/24/outline";
import LikeButton from "../../../components/ui/LikeButton";
import LocalExpertiseBadge from "../../../components/ui/LocalExpertiseBadge";
import { likeList, unlikeList } from "../../../utils/apiCall";

export const ListCard = ({ list, onSelectList }) => {
    return (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-green-200 transition-all duration-200 overflow-hidden group relative">   
            {/* Map button in top right corner */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onSelectList && onSelectList(list);
                }}
                className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 text-xs bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors font-medium z-10"
                title="Show on map"
            >
                <MapIcon className="h-3.5 w-3.5" />
                Map
            </button>
            
            <div className="flex flex-col p-4 h-full">
                {/* Location badge above title */}
                {list.location && (list.location.country || list.location.city) && (
                    <div className="text-gray-500 text-xs mb-1">
                        {list.location.city && list.location.country 
                            ? `${list.location.city}, ${list.location.country}`
                            : list.location.city || list.location.country
                        }
                    </div>
                )}
                
                {/* Header with title and genre */}
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 mb-2 group-hover:text-green-700 transition-colors">
                        {list.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm mb-3">
                        <span className="px-2 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium">
                            {list.genre}
                        </span>
                        {list.subgenre && (
                            <span className="px-2 py-1 bg-gray-50 text-gray-600 rounded-full text-xs">
                                {list.subgenre}
                            </span>
                        )}
                    </div>
                </div>

                {/* Bottom section with stats and creator */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                    {/* Left side - Likes and Places count */}
                    <div className="flex items-center gap-3">
                        <LikeButton
                            listId={list.id}
                            initialIsLiked={list.isLikedByUser || false}
                            initialLikeCount={list.likeCount}
                            onLike={likeList}
                            onUnlike={unlikeList}
                            size="sm"
                            showCount={true}
                        />
                        <div className="flex items-center gap-1 text-gray-600">
                            <QueueListIcon className='h-4 w-4'/>
                            <span className="text-sm font-medium">{list.placeCount}</span>
                        </div>
                    </div>

                    {/* Right side - Creator */}
                    <div className="flex items-center gap-2">
                        {list.creator?.localExpertise && (
                            <LocalExpertiseBadge 
                                expertise={list.creator.localExpertise}
                                size="sm"
                            />
                        )}
                        {list.creator?.name && (
                            <span className="text-sm text-gray-600 font-medium">
                                {list.creator.name}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};