import { UIButton } from "@/components/ui/UIButton";
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

// export default function HomePage () {

//     const bgImagePath = '/paris-sunset.jpg';

//     return (
//       <div className="flex flex-col w-full">
//         <div className="flex justify-center items-top h-2/6 border-4 bg-cover bg-no-repeat border-pink-400" 
//             style={{ 
//             backgroundImage: `url(${bgImagePath})`,
//             backgroundPosition: 'left 85%' // Adjust the percentage to move it down
//             }}>
//             <p className="text-3xl my-6 font-bold tracking-wide">Welcome to Locali</p>
//           </div>
//           <div className="flex h-4/6 border-4 border-yellow-400">
//             <div className="w-1/4 border-4 border-blue-400">
//                 <p>Where are traveling?</p>
//             </div>
//           </div>
//       </div>
//     )
// }