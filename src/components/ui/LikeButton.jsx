import React, { useState } from 'react';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';

const LikeButton = ({ 
  listId, 
  initialIsLiked = false, 
  initialLikeCount = 0, 
  onLike, 
  onUnlike, 
  size = 'md',
  showCount = true,
  disabled = false 
}) => {
  const [isLiked, setIsLiked] = useState(initialIsLiked);
  const [likeCount, setLikeCount] = useState(initialLikeCount);
  const [isLoading, setIsLoading] = useState(false);

  // Size variants
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
    xl: 'h-8 w-8'
  };

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg'
  };

  const handleClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (disabled || isLoading) return;

    setIsLoading(true);
    
    try {
      if (isLiked) {
        // Optimistic update
        setIsLiked(false);
        setLikeCount(prev => Math.max(0, prev - 1));
        
        if (onUnlike) {
          await onUnlike(listId);
        }
      } else {
        // Optimistic update
        setIsLiked(true);
        setLikeCount(prev => prev + 1);
        
        if (onLike) {
          await onLike(listId);
        }
      }
    } catch (error) {
      // Revert optimistic update on error
      setIsLiked(!isLiked);
      setLikeCount(initialLikeCount);
      console.error('Error toggling like:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled || isLoading}
      className={`
        flex items-center gap-1 transition-all duration-200 group
        ${disabled || isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 cursor-pointer'}
        ${isLiked ? 'text-red-500' : 'text-gray-600 hover:text-red-400'}
      `}
      aria-label={isLiked ? 'Unlike this list' : 'Like this list'}
    >
      <div className="relative">
        {isLiked ? (
          <HeartSolid 
            className={`${sizeClasses[size]} transition-all duration-200 ${isLoading ? 'animate-pulse' : 'group-hover:animate-pulse'}`} 
          />
        ) : (
          <HeartIcon 
            className={`${sizeClasses[size]} transition-all duration-200 ${isLoading ? 'animate-pulse' : ''}`} 
          />
        )}
        
        {/* Loading spinner overlay */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 border border-current border-t-transparent rounded-full animate-spin opacity-60"></div>
          </div>
        )}
      </div>
      
      {showCount && (
        <span className={`${textSizeClasses[size]} font-medium transition-colors duration-200`}>
          {likeCount}
        </span>
      )}
    </button>
  );
};

export default LikeButton;
