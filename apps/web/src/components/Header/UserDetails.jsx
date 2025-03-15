export default function UserDetails({ user }) {
  return (
    <div className="flex items-center ml-2">
      <img src={user.profilePicture} className="w-12 h-12 rounded-full" />
      <span className="ml-2 text-lg text-gray-700">{user.name}</span>
    </div>
  );
}
