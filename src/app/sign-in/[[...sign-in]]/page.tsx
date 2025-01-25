import React from "react";
// import Link from "next/link";
import Image from "next/image";
import { SignIn  } from "@clerk/nextjs";


const Page = () => {
  return (
    <div className="flex flex-col md:flex-row items-center  justify-center md:justify-between px-6 lg:px-16 py-10 lg:py-16 gap-12 h-auto">
      {/* Left Section: Image */}
      <div className="flex-shrink-0 w-full md:w-1/2 hidden md:block">
        <Image
          alt="mobile"
          src='https://s3-alpha-sig.figma.com/img/7843/84ee/37569bf147f74d2ca44831a4a6ef3ee5?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g-YpwT8BMHj53wBElCy5CBYVUOs1fC7aUITxPEmqVmYis9hq5MaiMLA44IIk4kMejWqW7HuMSGbBHBXRqfVXOyVfhWpCKc-LSury~qCDOm3eV6Ct28siNfQ-r~GsI21rg5UZvasFCwVSxN99nCrMKOuaxhd4-N8zNHryFklT5mn~1rOouQ4EbBHFKlQ~gpos~VuPo95PmgtwWmcbKOHn-kZB2EHIqJR666Hqqm0V0C7fZbpKHjbDjDWORIfr5qOMG1~p9IchcjYgrKnb2eDKMSLPRW5qJyVRfwbplWO3Jf3qgxRUCG-66FDG5GfJewNaAtytseDxibri0Ro9RXvg6g__'
          className="w-full h-auto object-contain"
          height={506}
          width={519}
        />
      </div>

      <SignIn/>
    </div>
  );
};

export default Page;



{/* Right Section: Form */}
// {/* <div className="w-full max-w-md flex flex-col  justify-center">
// <h1 className="font-poppins text-2xl lg:text-4xl font-semibold text-center lg:text-left">
//   Log in to Furniro
// </h1>
// <p className="font-[poppins] text-sm lg:text-base text-left lg:text-left mt-4 text-gray-600">
//   Enter your details below
// </p>

// <form className="space-y-6 mt-8">
//   {/* Email or Phone Input */}
//   <div>
//     <input
//       type="text"
//       id="emailOrPhone"
//       name="emailOrPhone"
//       className="w-full py-3 border-b border-gray-400 focus:outline-none  placeholder-gray-500"
//       placeholder="Enter your email or phone number"
//     />
//   </div>

//   {/* Password Input */}
//   <div>
//     <input
//       type="password"
//       id="password"
//       name="password"
//       className="w-full py-3 border-b border-gray-400 focus:outline-none  placeholder-gray-500"
//       placeholder="Enter your password"
//     />
//   </div>

//   {/* Buttons and Forget Password */}
//   <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 lg:space-x-6">
//     <button className="w-full lg:w-40 py-3 bg-[#B88E2F] text-white rounded-lg shadow-md hover:bg-[#bf3939] transition">
//       Log In
//     </button>
//     <Link
//       href="/"
//       className="text-[#B88E2F] underline text-center lg:text-left text-sm"
//     >
//       Forget Password?
//     </Link>
//   </div>
//   {/* Login Link */}
//   <div className="text-center">
//     <p className="text-sm text-gray-600">
//       Dont have an account?{" "}
//       <Link href="/signup" className="text-[#B88E2F] underline">
//       Signup
//       </Link>
//     </p>
//   </div>
// </form>
// </div> */}

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import Icon from "../../public/Icon-Google.png";
// import iamges from "../../public/mobile.png";

// const page = () => {
//   return (
//     <div className="grid gap-96 grid-cols-2 mt-16 h-[781px]">
//       <div className=" w-[805px] h-[71px] bg-[#CBE4E8] grid-cols-1">
//         <Image alt="mobile" height={706} width={919} src={iamges} />
//       </div>
//       <div className="grid-cols-1">
//         <div className="h-[530px] w-[371px] mt-14">
//           <h1 className="font-[inter] font-medium text-4xl">Log in to Exclusive</h1>
//           <p className="font-[poppins] font-normal text-base pt-4">Enter your details below</p>
//           <form className="space-y-6">
//             <div className="mt-8 flex flex-col gap-y-10">
            
//               {/* Email or Phone Number input field */}
//               <div>
               
//                 <input
//                   type="text"
//                   id="emailOrPhone"
//                   name="emailOrPhone"
//                   className="w-full mt-2 py-2 border-b-2 focus:outline-none  border-stone-400  focus:ring-2 "
//                   placeholder="Enter your email or phone number"
//                 />
//               </div>

//               {/* Password input field */}
//               <div>
               
//                 <input
//                   type="password"
//                   id="password"
//                   name="password"
//                   className="w-full mt-2  py-2 border-b-2 border-stone-400 focus:outline-none focus:ring-2"
//                   placeholder="Enter your password"
//                 />
//               </div>
//             </div>

//             <div className='flex  space-x-11 '>
//               <button className="w-40 py-3   mt-2 border font-medium font-[poppins] border-gray-300 bg-[#DB4444] rounded-lg shadow-sm text-white  sm:text-sm items-center">
//                 Log In
//               </button>
//               <h6 className=" mt-5 text-center font-normal font-[poppins] text-[#DB4444] block w-full sm:text-sm">
//                 Forget Password?
            
//               </h6>
//             </div>

//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;