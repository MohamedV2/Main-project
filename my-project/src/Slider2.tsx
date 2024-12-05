// // import React from "react";

// import Autoplay from "embla-carousel-autoplay";
// import useEmblaCarousel from "embla-carousel-react";
// import { gamesData } from "./data";

// export default function Slider2() {
//   const [emblaRef] = useEmblaCarousel({ loop: true }, [
//     Autoplay({ playOnInit: true, delay: 2500, stopOnInteraction: false }),
//   ]);

//   const Data = gamesData.filter((game) => game.hot);
//   const TotalData = Data.length;
//   const ShowData = [];

//   for (let i = 0; i < TotalData; i += 4) {
//     ShowData.push([Data.slice(i, i + 4)]);
//   }

//   return (
//     <div className="embla overflow-hidden mt-4" ref={emblaRef}>
//       <div className="embla__container flex">
//         {ShowData.map((data, index) => (
//           <div
//             className="embla__slide flex flex-row gap-4 w-full items-center justify-center text-white"
//             key={index}
//           >
//             {data.map((gameArray) => (
//               <div className="flex  flex-row gap-4 w-full">
//                 {gameArray.map((game) => (
//                   <div className="border-[#123330] border-2 border-solid rounded-lg p-2 shadow-md hover:shadow-lg transition-shadow">
//                     <img
//                       src={game.image}
//                       alt={game.title}
//                       className="w-full h-auto rounded"
//                     />
//                     <h3 className="text-lg font-semibold mt-2 text-white">
//                       {game.title}
//                     </h3>
//                     <h4 className="text-gray-600">${game.price.toFixed(2)}</h4>
//                     <a
//                       href={`/game/${game.id}`}
//                       className="flex w-full rounded-lg items-center justify-center p-2 bg-lime-600 mt-2"
//                     >
//                       Buy
//                     </a>
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
