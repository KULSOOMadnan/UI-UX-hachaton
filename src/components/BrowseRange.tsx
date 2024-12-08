

import Image from "next/image";
import React from "react";
import dining from "../public/assests/dining.png";
import bedroom from "../public/assests/bedroom.png";
import sofa from "../public/assests/sofa.png";

function BrowseRange() {
  return (
    <div className="h-auto py-16 flex flex-col gap-10 px-5 md:px-10 lg:px-20">
      <div className="flex flex-col gap-2">
        <h1 className="font-poppins font-bold text-center text-[28px] sm:text-[30px] lg:text-[32px] text-[#333333]">
          Browse The Range
        </h1>
        <p className="text-[#666666] text-sm sm:text-[14px] md:text-[16px] font-poppins text-center font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          labore, nulla eos molestiae
        </p>
      </div>

      {/* Grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 h-auto sm:h-[60vh] md:h-[75vh] lg:h-[80vh]">
        <div className="col-span-1 h-full flex flex-col gap-4">
          <Image
            src={dining}
            alt="Dining Table"
            className="h-[100%] w-full object-cover"
          />
          <p className="font-poppins text-center text-[24px] font-semibold">Dining</p>
        </div>
        <div className="col-span-1 h-full flex flex-col gap-4">
          <Image
            src={sofa}
            alt="Sofa"
            className="h-[100%] w-full object-cover"
          />
          <p className="font-poppins text-center text-[24px] font-semibold">Living</p>
        </div>
        <div className="col-span-1 h-full flex flex-col gap-4">
          <Image
            src={bedroom}
            alt="Bedroom"
            className="h-[100%] w-full object-cover"
          />
          <p className="font-poppins text-center text-[24px] font-semibold">Bedroom</p>
        </div>
      </div>
    </div>
  );
}

export default BrowseRange;


// import Image from "next/image";
// import React from "react";
// import dining from "../public/assests/dining.png";
// import bedroom from "../public/assests/bedroom.png";
// import sofa from "../public/assests/sofa.png";
// function BrowseRange() {
//   return (
//     <div className="h-[90vh] py-16 flex flex-col gap-10 px-20">
//       <div className="flex flex-col gap-2">
//         <h1 className="font-poppins font-bold text-center text-[32px] text-[#333333]">
//           Browse The Range
//         </h1>
//         <p className="text-[#666666] text-sm font-poppins text-center font-normal">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
//           labore, nulla eos molestiae
//         </p>
//       </div>

//       <div className="grid grid-cols-3 w-full gap-x-5 h-full">
//         <div className="col-span-1 h-full">
//           <Image
//             src={dining}
//             alt="Dining Table"
//             className="h-[90%] object-cover"
//           />
//         </div>
//         <div className="col-span-1 h-full">
//           <Image
//             src={sofa}
//             alt="Sofa"
//             className="md:h-[90%] md:object-cover h-[80%] object-fill"
//           />
//         </div>
//         <div className="col-span-1 h-full">
//           <Image src={bedroom} alt="Bedroom" className="h-[90%] object-cover" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BrowseRange;
