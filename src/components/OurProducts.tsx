import React from "react";
import { ProductData } from "./Data";
import Image from "next/image";
import Link from "next/link";

function OurProducts() {
  return (
    <div className="py-8 flex flex-col gap-12 px-4 sm:px-6 md:px-10 lg:px-20 items-center sm:py-24">
      {/* Heading */}
      <h1 className="font-poppins font-bold text-center text-[24px] sm:text-[28px] lg:text-[32px] text-[#333333]">
        Our Products
      </h1>

      {/* Product Grid */}
      <div className="w-full">
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {ProductData &&
            ProductData.map((product) => (
              <li
                key={product.id}
                className="bg-[#F4F5F7] flex flex-col h-auto sm:h-[430px] gap-5 relative group cursor-pointer  shadow-md"
              >
                {/* Product Image */}
                <div className="h-[200px] sm:h-[280px] rounded-t-lg overflow-hidden">
                  
                    <Image
                      src={product.src}
                      alt="Product Image"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  
                </div>

                {/* Product Details */}
                <div className="flex flex-col gap-2 items-start font-poppins px-4 pb-4">
                  <h1 className="font-semibold text-[20px] sm:text-[24px] text-[#3A3A3A]">
                    {product.title}
                  </h1>
                  <p className="text-[#898989] text-[12px] sm:text-[14px] font-medium">
                    {product.description}
                  </p>
                  <div className="flex lg:gap-2 gap-8 items-center ">
                    <p className="text-[#3A3A3A] text-[18px] sm:text-[20px] font-semibold ">
                      Rp {product.price}
                    </p>
                    <div>
                      {product.disprice && (
                        <p className="text-[#B0B0B0] text-[10px] sm:text-[12px] font-normal line-through">
                          Rp {product.disprice}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                 <Link href={`/shop/${product.title}`}>
                <div className="absolute inset-0 bg-[#3A3A3A] bg-opacity-70 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
                  <div className="bg-transparent p-6 rounded-lg w-[80%] max-w-[300px] flex flex-col gap-4 text-center items-center justify-center">
                    <button className="bg-white text-[#B88E2F] font-poppins font-semibold text-[14px] px-8 py-3 w-[200px] ">
                      Add to cart
                    </button>
                    <div className="flex items-center gap-x-3">
                      {/* share */}
                      <div className="flex gap-1 items-center font-poppins text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          viewBox="0 0 24 24"
                        >
                          <rect width="24" height="24" fill="none" />
                          <path
                            fill="#fff"
                            d="M17 22q-1.25 0-2.125-.875T14 19q0-.15.075-.7L7.05 14.2q-.4.375-.925.588T5 15q-1.25 0-2.125-.875T2 12t.875-2.125T5 9q.6 0 1.125.213t.925.587l7.025-4.1q-.05-.175-.062-.337T14 5q0-1.25.875-2.125T17 2t2.125.875T20 5t-.875 2.125T17 8q-.6 0-1.125-.213T14.95 7.2l-7.025 4.1q.05.175.063.338T8 12t-.012.363t-.063.337l7.025 4.1q.4-.375.925-.587T17 16q1.25 0 2.125.875T20 19t-.875 2.125T17 22"
                          />
                        </svg>
                        <p className="text-[12px] font-semibold">Share</p>
                      </div>

                      {/* compare */}
                      <div className=" font-poppins text-white">
                        <Link href={'/comparison'} className="flex gap-1 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                        >
                          <rect width="24" height="24" fill="none" />
                          <path
                            fill="none"
                            stroke="#fff"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                            d="M6.5 7.5h11m0 0L14 11m3.5-3.5L14 4m3.5 12.5h-11m0 0L10 20m-3.5-3.5L10 13"
                          />
                        </svg>

                        <p className="text-[12px] font-semibold">Compare</p>
                        </Link>
                      </div>

                      {/*like  */}

                      <div className="flex gap-1 items-center font-poppins text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 1024 1024"
                        >
                          <rect width="1024" height="1024" fill="none" />
                          <path
                            fill="#fff"
                            d="M923 283.6a260 260 0 0 0-56.9-82.8a264.4 264.4 0 0 0-84-55.5A265.3 265.3 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39q-15 9.15-28.5 20.1q-13.5-10.95-28.5-20.1c-41.8-25.5-89.9-39-139.2-39c-35.5 0-69.9 6.8-102.4 20.3c-31.4 13-59.7 31.7-84 55.5a258.4 258.4 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9c0 33.3 6.8 68 20.3 103.3c11.3 29.5 27.5 60.1 48.2 91c32.8 48.9 77.9 99.9 133.9 151.6c92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3c56-51.7 101.1-102.7 133.9-151.6c20.7-30.9 37-61.5 48.2-91c13.5-35.3 20.3-70 20.3-103.3c.1-35.3-7-69.6-20.9-101.9M512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5c0 201.2-356 429.3-356 429.3"
                          />
                          <path
                            fill="#fff"
                            fill-opacity="0.15"
                            d="M679.7 201c-73.1 0-136.5 40.8-167.7 100.4C480.8 241.8 417.4 201 344.3 201c-104 0-188.3 82.6-188.3 184.5c0 201.2 356 429.3 356 429.3s356-228.1 356-429.3C868 283.6 783.7 201 679.7 201"
                          />
                        </svg>
                        <p className="text-[12px] font-semibold">Like</p>
                      </div>
                    </div>
                  </div>
                </div>
                  </Link>
              </li>
            ))}
        </ul>
      </div>

      {/* Shop Now Button */}
      <Link
        href="/shop"
        className="rounded-sm w-[200px] text-center border border-[#B88E2F] text-[#B88E2F] font-poppins font-bold text-[16px] py-4 hover:bg-[#B88E2F] hover:text-white"
      >
        Shop Now
      </Link>
    </div>
  );
}

export default OurProducts;


