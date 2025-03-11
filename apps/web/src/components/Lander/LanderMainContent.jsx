import MainContentAnimation from "./MainContentAnimation";

export default function LanderMainContent() {
  return (
    <div className="w-1/2 pr-8">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">
        Find travel recommendation
        <br />
        from real locals
      </h1>

      <p className="text-2xl text-gray-800 mb-8">
        Any kind of activity you
        <br />
        like to do when travelling
      </p>

      <p className="text-xl text-gray-700 mb-12">
        Food, Clothing, Museums,
        <br />
        Attractions, Parks, Bars and More
      </p>

      {/* Placeholder for animation/image */}
      <div className="bg-gray-200 h-64 w-full flex items-center justify-center">
        <div className="bg-gray-200 h-64 w-full flex items-center justify-center">
          <MainContentAnimation />
        </div>
      </div>
    </div>
  );
}
