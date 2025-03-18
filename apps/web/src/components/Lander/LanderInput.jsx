export default function LanderInput({ placeholder, icon, value, onChange }) {
  return (
    <div className="mb-4">
      <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-center">
        <i className={`${icon} text-gray-500 mr-3 text-xl`}></i>
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          className="w-full text-lg outline-none text-gray-700"
          onChange={onChange}
        />
      </div>
    </div>
  );
}
