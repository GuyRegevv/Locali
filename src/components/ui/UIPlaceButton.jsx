export default function UIPlaceButton({
  title,
  category,
  address,
  onClick,
  isSelected = false,
}) {
  return (
    <div className="w-full p-2">
      <button
        className={`flex w-full rounded-2xl shadow-md p-4 transition-all duration-200 border 
          ${
            isSelected
              ? "bg-purple-50 border-purple-200"
              : "bg-white border-gray-100 hover:bg-gray-200 hover:border-gray-50"
          }`}
        onClick={onClick}
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
      </button>
    </div>
  );
}
