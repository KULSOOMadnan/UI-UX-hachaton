
import React from "react";

function BillingDetails() {
  return (
    <div className="flex flex-col p-6 md:p-10 lg:p-20 gap-8">
      {/* Product Details */}
      <div className="flex flex-col md:flex-row md:justify-between gap-8">
        <div className="flex flex-col gap-4 md:gap-8">
          <h1 className="text-lg md:text-xl font-bold">Product</h1>
          <p className="text-gray-400 text-sm">Asgaarsd Sofa x 1</p>
          <p className="text-md md:text-lg">Subtotal</p>
          <p className="text-sm">Total</p>
        </div>
        <div className="flex flex-col gap-4 md:gap-8">
          <h1 className="text-lg md:text-xl font-bold">Subtotal</h1>
          <p className="text-gray-400 text-sm md:text-md">Rs250,000,00</p>
          <p className="text-sm md:text-md">Rs 250,000,00</p>
          <p className="text-lg md:text-xl text-[#B88E2F] font-semibold">
            Rs 250,000,00
          </p>
        </div>
      </div>

      {/* Separator */}
      <div className="bg-gray-200 h-px" />

      {/* Payment Details */}
      <div className="flex flex-col gap-6">
        {/* Payment Method */}
        <div className="flex items-center gap-4">
          <div className="h-5 w-5 bg-black rounded-full"></div>
          <h1 className="text-sm md:text-md font-poppins">Direct Bank Transfer</h1>
        </div>

        {/* Information */}
        <div className="flex flex-col gap-3">
          <p className="text-sm md:text-md text-gray-500 font-light w-full md:w-[400px]">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>

          {/* Payment Options */}
          <div className="flex items-center gap-4">
            <div className="h-3 w-3 ring-1 ring-gray-400 rounded-full"></div>
            <h1 className="text-sm text-gray-500 font-light">Direct Bank Transfer</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-3 w-3 ring-1 ring-gray-400 rounded-full"></div>
            <h1 className="text-sm text-gray-500 font-light">Cash on Delivery</h1>
          </div>
        </div>

        {/* Privacy Policy */}
        <div className="text-sm md:text-md text-black font-light">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our <span className="font-bold">Privacy Policy</span>.
        </div>
      </div>

      {/* Place Order Button */}
      <div className="flex justify-center md:justify-start">
        <button className="w-full md:w-[200px] text-center text-black rounded-md font-poppins text-sm py-3 border border-black">
          Place the Order
        </button>
      </div>
    </div>
  );
}

export default BillingDetails;
