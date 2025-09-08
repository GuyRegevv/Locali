import React from 'react';

/**
 * LocalExpertiseBadge - A reusable component to display user's local expertise
 * @param {Object} expertise - The local expertise object
 * @param {string} expertise.status - The status: 'BORN_THERE', 'LIVED_PAST', 'CURRENTLY_LIVING'
 * @param {string} expertise.cityName - The city name
 * @param {string} expertise.countryName - The country name
 * @param {string} size - Size variant: 'sm', 'md', 'lg' (default: 'sm')
 * @param {boolean} showText - Whether to show the text description (default: false)
 * @param {string} className - Additional CSS classes
 */
export default function LocalExpertiseBadge({ 
  expertise, 
  size = 'sm', 
  showText = false, 
  className = '' 
}) {
  if (!expertise || !expertise.status) {
    return null;
  }

  // Get emoji and text based on status
  const getExpertiseInfo = (status) => {
    switch (status) {
      case 'BORN_THERE':
        return { emoji: '👶', text: 'Born there' };
      case 'LIVED_PAST':
        return { emoji: '🏠', text: 'Lived there' };
      case 'CURRENTLY_LIVING':
        return { emoji: '📍', text: 'Currently living' };
      default:
        return { emoji: '🏠', text: 'Local knowledge' };
    }
  };

  const { emoji, text } = getExpertiseInfo(expertise.status);

  // Size variants
  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2'
  };

  const emojiSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  return (
    <div 
      className={`
        inline-flex items-center gap-1.5 
        bg-gradient-to-r from-green-50 to-blue-50 
        border border-green-200 
        rounded-full 
        ${sizeClasses[size]}
        ${className}
      `}
      title={`${text} in ${expertise.cityName}, ${expertise.countryName}`}
    >
      <span className={emojiSizes[size]}>{emoji}</span>
      {showText && (
        <span className="font-medium text-green-700">
          {text}
        </span>
      )}
    </div>
  );
}
