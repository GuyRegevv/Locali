
export default function HomePage () {
    return (
      <>
          <div className="flex flex-col w-1/2 border-4 border-pink-400 "> 
          <div className="border-4 border-brown-400 bg-cover">
                <p className="m-5 text-7xl font-bold">Find travel recommendation from real locals</p>
                <p className="m-5 text-5xl font-bold">for any kind of activity you like to do when travelling</p>
                <p className="m-5 text-3xl font-bold">Food, Clothing, Museums, attractions, parks, bars and more</p>
            </div>
            {/* animation */}
            <div className="flex-1 border-4 border-blue-400">animation</div>
          </div>

          <div className="w-1/2 border-4 border-yellow-400"></div>
      </>
    )
}