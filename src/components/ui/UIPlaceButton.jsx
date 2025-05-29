export default function UIPlaceButton({
  title,
  category,
  address,
  distance,
  onClick,
  onDelete,
  isSelected = false,
}) {
  const handleDeleteClick = (e) => {
    e.stopPropagation(); // Prevent triggering the main button click
    if (onDelete) {
      onDelete();
    }
  };

  return (
    <div className="w-full p-2">
      <button
        className={`flex w-full rounded-2xl shadow-md p-4 transition-all duration-200 border relative
          ${
            isSelected
              ? "bg-purple-50 border-purple-200"
              : "bg-white border-gray-100 hover:bg-gray-200 hover:border-gray-50"
          }`}
        onClick={onClick || (() => { console.log('No onClick function provided') })}
      >
        <div className="flex flex-1 items-start">
          <div className="flex flex-col text-left">
            <h2 className="text-2xl font-bold text-gray-600">{title}</h2>
            <div className="flex items-center mt-2 text-gray-500">
              <span className="inline-block w-6 h-6 mr-1 text-gray-400">
                <i className="bi bi-info"></i>
              </span>
              <p className="text-sm">{category}</p>
            </div>
            <div className="flex items-center mt-1 text-gray-500">
              <span className="inline-block w-6 h-6 mr-1 text-gray-400">
                <i className="bi bi-geo-alt"></i>
              </span>
              <p className="text-sm">{address}</p>
            </div>
          </div>
        </div>
        
        {/* Optional delete button */}
        {onDelete && (
          <button
            onClick={handleDeleteClick}
            className={`absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200 
              ${
                isSelected
                  ? "bg-purple-100 hover:bg-purple-200 text-purple-600 hover:text-purple-700 border border-purple-200 hover:border-purple-300"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 border border-gray-200 hover:border-gray-300"
              }`}
            title="Remove location"
          >
            ×
          </button>
        )}
      </button>
    </div>
  );
}
