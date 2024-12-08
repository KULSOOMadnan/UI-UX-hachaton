

'use client'

import BilllingDetails from "@/components/BilllingDetails";
import RouteHero from "@/components/RouteHero";
import Services from "@/components/Services";
import React, { useState } from "react";

function Page() {
  const [province, setProvince] = useState("");

  const provinces = ["Sindh", "Punjab", "Balochistan", "KPK", "Gilgit-Baltistan"];

  const handleProvinceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setProvince(event.target.value);
  };

  return (
    <div className="h-auto">
      <RouteHero prop="Checkout" />
      <div className="h-auto flex flex-col lg:grid lg:grid-cols-2 w-full px-4 md:px-10 lg:px-20 gap-10 lg:gap-20">

        {/* Billing Form */}
        <div className="flex justify-center md:items-start">
          <form className="flex flex-col gap-6 w-full max-w-[600px] py-10">
            <h1 className="text-[24px] lg:text-[36px] font-semibold">Billing Details</h1>

            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col gap-2 w-full md:w-[48%]">
                <label className="text-sm md:text-base">First Name</label>
                <input
                  type="text"
                  placeholder="First name"
                  className="border-[#9F9F9F] border rounded-md px-4 py-2 md:py-3 text-sm md:text-base w-full"
                />
              </div>
              <div className="flex flex-col gap-2 w-full md:w-[48%]">
                <label className="text-sm md:text-base">Last Name</label>
                <input
                  type="text"
                  placeholder="Last name"
                  className="border-[#9F9F9F] border rounded-md px-4 py-2 md:py-3 text-sm md:text-base w-full"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm md:text-base">Street Address</label>
              <input
                type="text"
                className="border-[#9F9F9F] border rounded-md px-4 py-2 md:py-3 text-sm md:text-base w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm md:text-base">Town / City</label>
              <input
                type="text"
                className="border-[#9F9F9F] border rounded-md px-4 py-2 md:py-3 text-sm md:text-base w-full"
              />
            </div>

            {/* Province Selector */}
            <div className="flex flex-col gap-2">
              <label className="text-sm md:text-base">Province</label>
              <select
                value={province}
                onChange={handleProvinceChange}
                className="border-[#9F9F9F] border rounded-md px-4 py-2 md:py-3 text-sm md:text-base w-full bg-white"
              >
                <option value="" disabled>Select Province</option>
                {provinces.map((prov, index) => (
                  <option key={index} value={prov}>
                    {prov}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm md:text-base">ZIP Code</label>
              <input
                type="number"
                className="border-[#9F9F9F] border rounded-md px-4 py-2 md:py-3 text-sm md:text-base w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm md:text-base">Phone</label>
              <input
                type="number"
                className="border-[#9F9F9F] border rounded-md px-4 py-2 md:py-3 text-sm md:text-base w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm md:text-base">Email Address</label>
              <input
                type="email"
                placeholder="john@gmail.com"
                className="border-[#9F9F9F] border rounded-md px-4 py-2 md:py-3 text-sm md:text-base w-full"
              />
            </div>

            <div>
              <textarea
                rows={2}
                className="border-[#9F9F9F] border rounded-md px-4 py-2 md:py-3 text-sm md:text-base w-full"
                placeholder="Additional Notes"
              />
            </div>
          </form>
        </div>

        {/* Billing Details */}
        <div className="flex justify-center">
          <BilllingDetails />
        </div>
      </div>
      <Services />
    </div>
  );
}

export default Page;
