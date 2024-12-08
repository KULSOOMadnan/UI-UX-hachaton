// import RouteHero from "@/components/RouteHero";
// import Services from "@/components/Services";
// import Link from "next/link";
// import React from "react";
// import sofa from '../../../src/public/assests/whitesofa.png'
// import detete from '../../../src/public/assests/delete.png'
// import Image from "next/image";



// function page() {
//   return (
//     <div className="h-auto">
//       <RouteHero prop="Cart" />
//       <div className="h-[120vh] p-28 flex  gap-16 ">
//         <div className="flex flex-col gap-24 ">

//             {/* card headings */}
//           <div className="bg-[#F9F1E7] w-full mx-auto px-10 h-[55px] items-center">
//             <div className="flex gap-10 font-poppins font-semibold">
//               <p className="text-[14px]">Prices</p>
//               <p className="text-[14px]">Prices</p>
//               <div className="flex gap-5">
//                 <p className="text-[14px]">Quantity</p>
//                 <p className="text-[14px]">Subtotal</p>
//               </div>
//             </div>
//           </div>

//           <div className="flex gap-4 font-poppins">
//            <Image src={sofa} width={40}  height={40} alt='Product Data' />
//            <p className="text-[16px] text-[#9F9F9F]">Asgarad Sofa </p>
//            <p className="text-[16px] text-[#9F9F9F]">Rs. 250,000.000 </p>
//            <p className="border border-gray-500 text-center">1</p>
//            <p className="border text-black">Rs. 250,000.000</p>
//            <Image src={detete} width={30} height={30} alt="delete"/>
//           </div>

//         </div>
        
//           {/* Card Total */}
//           <div className="w-[400px] h-[400px] flex p-8 justify-center bg-[#F9F1E7]">
//             <div className="flex flex-col gap-10 items-center font-poppins ">
//               <h1 className="text-2xl font-bold text-center ">Card Totals</h1>
//               <div className="flex flex-col gap-9 ">
//                 <div className="flex items-center gap-5">
//                   <p className="text-[20px] font-semibold"> Subtotal</p>
//                   <p className="text-[14px] text-[#9F9F9F]"> Rs. 250,000.000</p>
//                 </div>

//                 <div className="flex items-center gap-5">
//                   <p className="text-[20px] font-semibold"> Total</p>
//                   <p className="text-[18px] text-[#B88E2F]"> Rs. 250,000.000</p>
//                 </div>
//               </div>

//               <Link href='/checkout' className="w-[220px] h-[50px] px-16 py-3 text-center border border-black rounded-md hover:text-white hover:bg-black">Check Out</Link>
//             </div>


//           </div>
//       </div>
//       <Services />
//     </div>
//   );
// }

// export default page;


import RouteHero from "@/components/RouteHero";
import Services from "@/components/Services";
import Link from "next/link";
import React from "react";
import sofa from "../../../src/public/assests/whitesofa.png";
import detete from "../../../src/public/assests/delete.png";
import Image from "next/image";

function page() {
  return (
    <div className="h-auto">
      {/* Hero Section */}
      <RouteHero prop="Cart" />

      {/* Main Cart Section */}
      <div className="flex flex-col lg:flex-row p-6 md:p-16 lg:p-28 gap-6 lg:gap-16">

        {/* Cart Items Section */}
        <div className="flex flex-col gap-6 w-full lg:w-2/3">
          {/* Card Headings */}
          <div className="bg-[#F9F1E7] w-full px-4 md:px-6 h-[55px] flex items-center">
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 text-center font-poppins font-semibold text-sm md:text-base">
              <p>Product</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Subtotal</p>
              <p>Action</p>
            </div>
          </div>

          {/* Cart Item */}
          <div className="flex flex-wrap items-center gap-4 p-4 md:p-6 border rounded-lg font-poppins bg-white">
            <Image src={sofa} width={60} height={60} alt="Product Image" />
            <p className="text-sm md:text-base text-[#9F9F9F] flex-1">Asgarad Sofa</p>
            <p className="text-sm md:text-base text-[#9F9F9F]">Rs. 250,000</p>
            <p className="border border-gray-500 w-[50px] text-center">1</p>
            <p className="text-sm md:text-base text-black">Rs. 250,000</p>
            <Image src={detete} width={30} height={30} alt="Delete" />
          </div>
        </div>

        {/* Cart Totals Section */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <div className="w-full max-w-md p-6 md:p-8 bg-[#F9F1E7] rounded-lg">
            <h1 className="text-xl md:text-2xl font-bold text-center mb-8">Cart Totals</h1>
            <div className="flex flex-col gap-6">
              {/* Subtotal */}
              <div className="flex justify-between items-center">
                <p className="text-sm md:text-lg font-semibold">Subtotal</p>
                <p className="text-sm md:text-base text-[#9F9F9F]">Rs. 250,000</p>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center">
                <p className="text-sm md:text-lg font-semibold">Total</p>
                <p className="text-lg md:text-xl text-[#B88E2F]">Rs. 250,000</p>
              </div>
            </div>

            {/* Checkout Button */}
            <Link
              href="/checkout"
              className="block mt-8 w-full py-3 text-center text-sm md:text-base border border-black rounded-md hover:text-white hover:bg-black transition"
            >
              Check Out
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <Services />
    </div>
  );
}

export default page;
