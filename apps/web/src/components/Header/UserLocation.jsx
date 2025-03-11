export default function UserLocation({ location }) {
  return (
    <div className="bg-gray-200 rounded-lg px-4 py-2 flex items-center">
      <i className="bi bi-geo-alt-fill text-gray-600 mr-2"></i>
      <span className="text-lg text-gray-700">{location}</span>
    </div>
  );
}
