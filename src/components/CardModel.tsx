import React from "react";

function CardModel() {
  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-50 ">
      <h2 className="text-xl">Shopping Cart</h2>
      <div className="flex flex-col gap-8"></div>

      {/* bottom */}
      <div className="">
        <div className="flex items-center justify-between font-semibold">
          <span className=""> SubTotal</span>
          <span className="text-[#B88E2F] font-bold"> Rs: </span>
        </div>
        <p className="text-gray-500 text-s mt-2 mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing el
        </p>
        <div className="flex justify-between \text-sm">
          <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
            View Cart{" "}
          </button>
          <button className="rounded-md py-3 px-4 bg-black text-white disabled:cursor-not-allowed disabled:opacity-75 ">
            Checkout{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardModel;
