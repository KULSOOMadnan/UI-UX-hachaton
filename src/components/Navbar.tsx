'use client'
import Image from "next/image";
import React from "react";
import logo from "../public/assests/logo.png";
import Link from "next/link";
import MobileNav from "./MobileNav";
import CardModel from "./CardModel";

function Navbar1() {
  return (
    <div className="flex flex-col">
      <nav className="hidden h-[100px] w-full lg:flex justify-between items-center px-20">
        <div className="flex ">
          <Image src={logo} width={50} alt="logo" height={32} />
          <h1 className="text-[34px] font-semibold font-montserrat">Furniro</h1>
        </div>
        <div className="flex">
          <ul className="flex gap-14">
            <li>
              <Link
                href="/"
                className="text-[16px] font-poppins font-[500] hover:text-gray-600"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className="text-[16px] font-poppins font-[500] hover:text-gray-600"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-[16px] font-poppins font-[500] hover:text-gray-600"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-[16px] font-poppins font-[500] hover:text-gray-600"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-8">
          {/* user */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
            >
              <rect width="24" height="24" fill="none" />
              <path
                fill="#000"
                d="M20 12V7h2v6h-2m0 4h2v-2h-2m-10-2c2.67 0 8 1.34 8 4v3H2v-3c0-2.66 5.33-4 8-4m0-9a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1m0-9A2.1 2.1 0 0 0 7.9 8a2.1 2.1 0 0 0 2.1 2.1A2.1 2.1 0 0 0 12.1 8A2.1 2.1 0 0 0 10 5.9"
              />
            </svg>
          </div>

          {/* search */}

          <div>
            <svg
              className=" cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M19 11.5a7.5 7.5 0 1 1-15 0a7.5 7.5 0 0 1 15 0m-2.107 5.42l3.08 3.08"
              />
            </svg>
          </div>
          {/* wish list */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
            >
              <rect width="24" height="24" fill="none" />
              <path
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M16.696 3C14.652 3 12.887 4.197 12 5.943C11.113 4.197 9.348 3 7.304 3C4.374 3 2 5.457 2 8.481s1.817 5.796 4.165 8.073S12 21 12 21s3.374-2.133 5.835-4.446C20.46 14.088 22 11.514 22 8.481S19.626 3 16.696 3"
              />
            </svg>
          </div>
          {/* card */}
          <div onMouseMove={() => <CardModel/>}>
            <Link href='/cart' >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
            >
              <rect width="24" height="24" fill="none" />
              <path
                fill="#000"
                d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M18 6H4.27l2.55 6H15c.33 0 .62-.16.8-.4l3-4c.13-.17.2-.38.2-.6a1 1 0 0 0-1-1m-3 7H6.87l-.77 1.56L6 15a1 1 0 0 0 1 1h11v1H7a2 2 0 0 1-2-2a2 2 0 0 1 .25-.97l.72-1.47L2.34 4H1V3h2l.85 2H18a2 2 0 0 1 2 2c0 .5-.17.92-.45 1.26l-2.91 3.89c-.36.51-.96.85-1.64.85"
              />
            </svg>
            </Link>
          </div>
        </div>
      </nav>

      <div><MobileNav/></div>    
      </div>
  );
}

export default Navbar1;
