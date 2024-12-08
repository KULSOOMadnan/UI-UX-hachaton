

// import React from 'react';

//  import hero from '../public/assests/hero2.jpeg';
// import Image from 'next/image';
// import Link from 'next/link';

// function HeroSection() {
//   return (
//     <div className="w-full h-[150vh] bg-[#eeeeee] flex justify-center items-center relative">
//       {/* Image Container */}
//       <div className="relative w-[90%] h-[700px]">
//         <Image
//           src={hero}
//           alt="hero pic"
//           width={900}
//           height={300}
//           className="w-full h-full object-cover"
//         />

//         {/* Overlaid Div */}
//         <div
//           className="absolute top-[130px] right-0 w-[600px] h-[400px] bg-[#FFF3E3] z-10 shadow-lg "
//         >
//         <div className='flex flex-col p-10 gap-5'>
//             <p className='tracking-[3px] font-semibold font-poppins text-[16px]'>New Arrival</p>
//             <div className='flex flex-col gap-2'>

//             <h1 className='text-[#B88E2F] font-poppins font-bold text-5xl leading-[60px]'>Discover Our <br/> New Collection</h1>
//             <p className='text-[16px] font-poppins font-[500] leading-[24px] '>Explore premium sofas designed to elevate your living space. Comfort, style, and quality all in one place</p>
//             </div>
//             <Link href='/' className='bg-[#B88E2F] text-white py-5 px-10 font-poppins font-bold text-[14px] w-[200px] text-center rounded-md mt-4 '>Buy Now</Link>
//         </div>
//         </div> 
//       </div>
//     </div>
//   );
// }

// export default HeroSection;



import React from 'react';
import hero from '../public/assests/hero1.jpeg'; // Correct folder name: assets
import Image from 'next/image';
import Link from 'next/link';

function HeroSection() {
  return (
    <div className="w-full h-screen bg-[#eeeeee] flex justify-center items-center relative">
      {/* Image Container */}
      <div className="relative w-full lg:w-[90%] h-full">
        <Image
          src={hero}
          alt="hero pic"
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover"
        />

        {/* Overlaid Div */}
        <div
          className="absolute top-[80px] sm:top-[100px] lg:top-[130px] 
          right-2 sm:right-4 lg:right-0 
          w-[90%] sm:w-[70%] md:w-[60%] lg:w-[580px] 
          h-auto bg-[#FFF3E3] z-10 shadow-lg rounded-md p-5 sm:p-8 lg:p-10"
        >
          <div className="flex flex-col gap-5">
            {/* Subtitle */}
            <p className="tracking-[2px] sm:tracking-[3px] font-semibold font-poppins text-[14px] sm:text-[16px]">
              New Arrival
            </p>

            {/* Title */}
            <div className="flex flex-col gap-2">
              <div className="text-[#B88E2F] font-poppins font-bold text-2xl sm:text-4xl sm:leading-[40px] lg:text-5xl lg:leading-[60px]">
                Discover Our <p> New Collection</p>
              </div>
              <p className="text-[14px] sm:text-[16px] font-poppins font-medium leading-[20px] sm:leading-[24px]">
                Explore premium sofas designed to elevate your living space. Comfort, style, and quality all in one place.
              </p>
            </div>

            {/* Button */}
            <Link
              href="/shop"
              className="bg-[#B88E2F] text-white py-3 px-6 sm:py-4 sm:px-8 lg:py-5 lg:px-10 
              font-poppins font-bold text-[12px] sm:text-[14px] lg:text-[16px] 
              w-[150px] sm:w-[180px] lg:w-[200px] text-center rounded-md mt-4"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;


