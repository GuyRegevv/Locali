export default function TravelAnimation() {
  return (
    <div className="flex-1 border-4 border-blue-400 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden flex items-center justify-center">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-20 right-20 w-3 h-3 bg-indigo-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-20 w-2 h-2 bg-blue-500 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-10 right-10 w-3 h-3 bg-indigo-500 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
      </div>
      
      {/* Main Content */}
      <div className="text-center z-10">
        {/* Travel Icons Grid */}
        <div className="grid grid-cols-4 gap-8 mb-8">
          <div className="text-4xl animate-bounce" style={{animationDelay: '0s'}}>🗺️</div>
          <div className="text-4xl animate-bounce" style={{animationDelay: '0.2s'}}>✈️</div>
          <div className="text-4xl animate-bounce" style={{animationDelay: '0.4s'}}>🎒</div>
          <div className="text-4xl animate-bounce" style={{animationDelay: '0.6s'}}>📍</div>
        </div>
        
        {/* Animated Text */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-800 animate-pulse">
            Ready to Explore?
          </h3>
          <p className="text-lg text-gray-600 animate-pulse" style={{animationDelay: '0.5s'}}>
            Discover amazing places recommended by locals
          </p>
        </div>
        
        {/* Destination Icons */}
        <div className="flex justify-center space-x-6 mt-8">
          <div className="text-3xl hover:scale-110 transition-transform cursor-pointer">🗼</div>
          <div className="text-3xl hover:scale-110 transition-transform cursor-pointer">🏛️</div>
          <div className="text-3xl hover:scale-110 transition-transform cursor-pointer">🏖️</div>
          <div className="text-3xl hover:scale-110 transition-transform cursor-pointer">🏔️</div>
          <div className="text-3xl hover:scale-110 transition-transform cursor-pointer">🌆</div>
        </div>
      </div>
      
    
    </div>
  )
} 