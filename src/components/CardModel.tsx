import Image from "next/image";
import Link from "next/link";
import React from "react";
import color from "../public/assests/colors.png";
import gray from "../public/assests/dynamicSofa.png";

// Define the prop types
interface CardModelProps {
  isOpen: boolean;
  isHovered: boolean;
  toggleCardModel: () => void;
}

const CardModel: React.FC<CardModelProps> = ({
  isOpen,
  isHovered,
  toggleCardModel,
}) => {
  return (
    <div className="relative">
      {/* Blackout Overlay */}
      <div
        className={`fixed inset-0 bg-black opacity-60 transition-opacity duration-300 ${
          isOpen || isHovered ? "opacity-70" : "opacity-0"
        } z-40`}
        onClick={toggleCardModel}
      ></div>

      {/* Card Model */}
      <div
        className={`absolute h-[600px] justify-between w-[400px] top-10 right-0 p-7 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white flex flex-col gap-6 z-50 transition-all duration-300 transform ${
          isOpen || isHovered
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-4"
        }`}
      >
        {/* Card Heading */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <h2 className="text-xl font-poppins font-semibold text-left text-[24px] ">
              Shopping Cart
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 16 16"
              onClick={toggleCardModel}
              className="cursor-pointer"
            >
              <rect width="16" height="16" fill="none" />
              <g fill="#878080">
                <path
                  fill-rule="evenodd"
                  d="M6.146 8.146a.5.5 0 0 1 .708 0L8 9.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 10l1.147 1.146a.5.5 0 0 1-.708.708L8 10.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 10L6.146 8.854a.5.5 0 0 1 0-.708"
                />
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
              </g>
            </svg>
          </div>

          <div className="w-[80%] h-[1px] bg-[#D9D9D9]" />
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-5 h-[500px]">
          <div className="flex gap-8 items-center">
            {/* Image */}
            <Image src={gray} alt="grey sofa" width={100} className="" />
            {/* Deatils */}
            <div className="flex flex-col gap-3">
              <h1>Asgaard Sofa</h1>
              <div className="flex gap-3 font-poppins items-center">
                <p className="font-light text-sm ">1</p>
                <p className="font-light text-[12px]">X</p>
                <p className="font-[500] text-xs text-[#B88E2F] ">
                  Rs 250,000.00
                </p>
              </div>
            </div>
            {/* Cross Sign */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <rect width="24" height="24" fill="none" />
              <path
                fill="#9F9F9F"
                d="M19.1 4.9C15.2 1 8.8 1 4.9 4.9S1 15.2 4.9 19.1s10.2 3.9 14.1 0s4-10.3.1-14.2m-4.3 11.3L12 13.4l-2.8 2.8l-1.4-1.4l2.8-2.8l-2.8-2.8l1.4-1.4l2.8 2.8l2.8-2.8l1.4 1.4l-2.8 2.8l2.8 2.8z"
              />
            </svg>
          </div>
          <div className="flex gap-8 items-center">
            {/* Image */}
            <Image src={color} alt="grey sofa" width={100} className="" />
            {/* Deatils */}
            <div className="flex flex-col gap-3 items-center">
              <h1>Casaliving Wood</h1>
              <div className="flex gap-3 font-poppins items-center">
                <p className="font-light text-sm ">1</p>
                <p className="font-light text-[12px]">X</p>
                <p className="font-[500] text-xs text-[#B88E2F]  ">
                  Rs .270,000.00
                </p>
              </div>
            </div>
            {/* Cross Sign */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <rect width="24" height="24" fill="none" />
              <path
                fill="#9F9F9F"
                d="M19.1 4.9C15.2 1 8.8 1 4.9 4.9S1 15.2 4.9 19.1s10.2 3.9 14.1 0s4-10.3.1-14.2m-4.3 11.3L12 13.4l-2.8 2.8l-1.4-1.4l2.8-2.8l-2.8-2.8l1.4-1.4l2.8 2.8l2.8-2.8l1.4 1.4l-2.8 2.8l2.8 2.8z"
              />
            </svg>
          </div>
        </div>

        {/* Total section */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between font-poppins px-7">
            <span> SubTotal</span>
            <span className="text-[#B88E2F] font-semibold">
              {" "}
              Rs 250,000.00{" "}
            </span>
          </div>
          {/* Card links */}
          <div className="flex justify-between text-sm border-t pt-5 ">
            <Link href="/cart">
              <button className="rounded-3xl py-3 px-4 ring-1 ring-gray-300 hover:bg-black hover:text-white">
                View Cart{" "}
              </button>
            </Link>
            <Link href="/checkout">
              <button className="rounded-3xl py-3 px-4 ring-1 ring-gray-300  hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-75">
                Checkout{" "}
              </button>
            </Link>
            <Link href="/conparison">
              <button className="rounded-3xl py-3 px-4 ring-1 ring-gray-300   hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:opacity-75">
                Compare{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardModel;
