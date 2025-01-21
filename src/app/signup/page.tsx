
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/public/assests/google.png";


const Page = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center h-[120vh] lg:h-[130vh] px-6 lg:px-12 py-[100px] gap-8 lg:gap-24">
      {/* Left Section: Image */}
      <div className="flex-shrink-0 hidden lg:block w-1/2">
        <Image
          alt="mobile"
          src='https://s3-alpha-sig.figma.com/img/7843/84ee/37569bf147f74d2ca44831a4a6ef3ee5?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g-YpwT8BMHj53wBElCy5CBYVUOs1fC7aUITxPEmqVmYis9hq5MaiMLA44IIk4kMejWqW7HuMSGbBHBXRqfVXOyVfhWpCKc-LSury~qCDOm3eV6Ct28siNfQ-r~GsI21rg5UZvasFCwVSxN99nCrMKOuaxhd4-N8zNHryFklT5mn~1rOouQ4EbBHFKlQ~gpos~VuPo95PmgtwWmcbKOHn-kZB2EHIqJR666Hqqm0V0C7fZbpKHjbDjDWORIfr5qOMG1~p9IchcjYgrKnb2eDKMSLPRW5qJyVRfwbplWO3Jf3qgxRUCG-66FDG5GfJewNaAtytseDxibri0Ro9RXvg6g__'
          height={506}
          width={500}
          className=" h-auto object-contain"
        />
      </div>

      {/* Right Section: Form */}
      <div className="w-full max-w-lg mx-auto lg:mx-0">
        <h1 className="font-poppins text-3xl lg:text-3xl font-semibold text-center lg:text-left">
          Create an account
        </h1>
        <p className="font-[poppins] text-base lg:text-lg text-center lg:text-left mt-4 text-gray-600">
          Enter your details below
        </p>
        <form className="space-y-5 mt-8">
          {/* Name Input */}
          <div>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full py-3 border-b border-gray-400 focus:outline-none  placeholder-gray-500"
              placeholder="Enter your name"
            />
          </div>

          {/* Email or Phone Input */}
          <div>
            <input
              type="text"
              id="emailOrPhone"
              name="emailOrPhone"
              className="w-full py-3 border-b border-gray-400 focus:outline-none   placeholder-gray-500"
              placeholder="Enter your email or phone number"
            />
          </div>

          {/* Password Input */}
          <div>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full py-3 border-b border-gray-400 focus:outline-none  placeholder-gray-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Create Account Button */}
          <div>
            <button className="w-full py-3 bg-[#B88E2F] text-white rounded-lg shadow-md hover:bg-[#8b6d26] transition">
              Create Account
            </button>
          </div>

          {/* Google Sign Up Button */}
          <div>
            <button className="flex items-center justify-center w-full py-3 border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 transition">
              <Image
                alt="icon"
                height={20}
                width={20}
                src={Icon}
                className="mr-3"
              />
              Sign up with Google
            </button>
          </div>

          {/* Login Link */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="text-[#B88E2F] underline">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;


