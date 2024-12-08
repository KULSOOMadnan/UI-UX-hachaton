"use client";
import { useParams } from "next/navigation";
import React from "react";
import ProductImages from "@/components/ProductImages";
import star from "../../../public/assests/star.png";
import halfstar from "../../../public/assests/halfStart.png";
import { ProductData } from "@/components/Data";
import Image from "next/image";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";


import {
  Breadcrumb,
  
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,

  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import OurProducts from "@/components/OurProducts";

function page() {
  const params = useParams();
  const { title } = params;

  if (typeof title !== "string") {
    return (
      <div className="text-center mt-10">
        <p className="text-red-500">Invalid product title!</p>
      </div>
    );
  }

  // Find the product that matches the title from the URL
  const product = ProductData.find(
    (item) => item.title.toLowerCase() === title.toLowerCase()
  );

  if (!product) {
    return (
      <div className="text-center mt-10">
        <p className="text-red-500">Product not found!</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-auto ">
      <div className="h-[100px] bg-[#F9F1E7] flex items-center px-24">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/shop">Shop</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />

            <BreadcrumbItem>
              {/* Dynamic Title from URL */}
              <BreadcrumbLink href={`/shop/${title}`}>
                {product.title}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* product Details */}

      <div className=" px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex flex-col lg:flex-row gap-16 mt-10">
        {/* IMAGE */}
        <div className="w-full lg:w-1/2 lg:sticky top-20 h-max ">
          <ProductImages items={product.src} />
        </div>
        {/* Text */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6  ">
          <h1 className="text-4xl font-medium ">{product.title}</h1>
          

          {product.price === product.disprice ? (
            <h2 className="text-2xl font-medium">Rs {product.price}</h2>
          ) : (
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-medium">Rs {product.price}</h2>
              <h3 className="text-xl text-gray-500 line-through">
                Rs {product.disprice}
              </h3>
            </div>
          )}

          {/* Reviews */}

          <div className="flex gap-4 items-center">
            <div className="flex gap-2">
              <Image alt="half Star" src={star} width={20} height={20} />
              <Image alt="half Star" src={star} width={20} height={20} />
              <Image alt="half Star" src={star} width={20} height={20} />
              <Image alt="half Star" src={star} width={20} height={20} />
              <Image alt="half Star" src={halfstar} width={20} height={20} />
            </div>

            <div className="border-l border-[#9F9F9F] text-[#9F9F9F] text-[14px]  pl-4 py-3">
              {" "}
              5 Customer Review{" "}
            </div>
          </div>

          <p className="text-[13px]">{product.Details}</p>

          {/* Sizes */}
          <div className="flex flex-col gap-4">
            <h1 className="text-[#9F9F9F] text-sm ">Size</h1>
            <div className="flex items-center gap-4">
              <div className=" rounded-lg  bg-[#F9F1E7] hover:bg-[#B88E2F] h-8 w-8 text-center text-black  hover:text-white ">
                L
              </div>
              <div className=" rounded-lg  bg-[#F9F1E7] hover:bg-[#B88E2F] h-8 w-8 text-center text-black  hover:text-white ">
                XL
              </div>
              <div className=" rounded-lg  bg-[#F9F1E7] hover:bg-[#B88E2F] h-8 w-8 text-center text-black  hover:text-white ">
                XS
              </div>
            </div>
          </div>

          {/* color */}

          <div className="flex flex-col gap-4">
            <h1 className="text-[#9F9F9F] text-sm ">Color</h1>
            <div className="flex items-center gap-4">
              <div className=" rounded-full   bg-black  h-8 w-8 text-center t"></div>
              <div className=" rounded-full  bg-[#B88E2F]  h-8 w-8 text-center "></div>
              <div className=" rounded-full  bg-[#816DFA]  h-8 w-8 text-center   "></div>
            </div>
          </div>

          {/* Add */}

          <div className="flex gap-4">
            <div className="w-[110px]  flex gap-6 rounded-md py-2 border px-4 border-[#9F9F9F]">
              <p>-</p>
              <p>1</p>
              <p>+</p>
            </div>
            <div className="w-[190px] text-center border border-black py-2 rounded-md">
              Add to Cart
            </div>
            <div className="w-[190px] text-center border border-black py-2 rounded-md">
              + Compare
            </div>
          </div>

          <div className="bg-gray-200 h-[2px]" />

          <div className="flex flex-col text-[#9F9F9F] font-poppins items-start gap-4">
            <div className="flex flex-col items-center ">SKU : SS0001</div>
            <div className="flex flex-col items-center ">Category : Sofas</div>
            <div className="flex flex-col items-center ">
              Tags : Sofa , Chair , Home , Shop
            </div>
            <div className="flex  gap-5 items-center ">
              <p>Share</p>
              <div className="flex gap-4">
                <p>
                  <FaFacebook className="text-black" />
                </p>
                <p>
                  <FaLinkedin className="text-black" />
                </p>
                <p>
                  <FaTwitter className="text-black" />
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>

      <div className="py-20">

          <OurProducts/>
      </div>
    </div>
  );
}

export default page;
