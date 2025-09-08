import LocalExpertiseBadge from './LocalExpertiseBadge';

export default function UIListHeader({ title, location, description, creator }) {
  return (
    <div className="w-full px-6 py-3 bg-white border-b border-gray-100">
      <div className="flex items-center justify-between">
        <div className="flex items-center text-sm text-gray-700">
          <h1 className="text-xl font-semibold text-gray-900 mr-3">
            {title}
          </h1>
          <span className="text-gray-400 mx-2">•</span>
          <div className="flex items-center text-gray-600">
            <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {location}
          </div>
          {description && description !== 'No description available' && (
            <>
              <span className="text-gray-400 mx-2">•</span>
              <span className="text-gray-600 max-w-md truncate">
                {description}
              </span>
            </>
          )}
        </div>
        
        {/* Creator info with local expertise */}
        {creator && (
          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-sm text-gray-600">
                by <span className="font-medium text-gray-800">{creator.name}</span>
              </div>
              {creator.localExpertise && (
                <LocalExpertiseBadge 
                  expertise={creator.localExpertise}
                  size="sm"
                  showText={true}
                  className="mt-1"
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
