import React from "react";

const OrderConfirmation = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-md p-6">
        {/* Header */}
        <div className="flex gap-2 text-center  justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 48 48"
          >
            <rect width="48" height="48" fill="none" />
            <path
              fill="none"
              stroke="#47d50d"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M45.5 24A21.5 21.5 0 1 1 24 2.5m15.514 5.986L22.689 31.388m-10.857-9.089l10.857 9.089"
            />
          </svg>

          <h1 className="text-2xl font-semibold text-center mb-6">
            Thank you. Your order has been received.
          </h1>
        </div>

        {/* Order Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 text-sm text-gray-600">
          <div>
            <p>
              <strong>Order number:</strong> 123
            </p>
          </div>
          <p>
            <strong>Date:</strong> June 19, 2024
          </p>
          <div>
            <p>
              <strong>Total:</strong> $40.00
            </p>
          </div>
          <p>
            <strong>Email:</strong> test@test.com
          </p>
          <div>
            <p>
              <strong>Payment method:</strong> Credit Card
            </p>
          </div>
        </div>

        {/* Order Details */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-4">Order details</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 text-left text-gray-600">Product</th>
                  <th className="py-2 px-4 text-left text-gray-600">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4 text-gray-700">Test Product × 2</td>
                  <td className="py-2 px-4 text-gray-700">$20.00</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-gray-700">Test Product × 2</td>
                  <td className="py-2 px-4 text-gray-700">$20.00</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 font-semibold text-gray-800">
                    Total
                  </td>
                  <td className="py-2 px-4 font-semibold text-gray-800">
                    $40.00
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Downloads */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-4">Downloads</h2>
          <div className="overflow-x-auto">
            {/* <table className="w-full border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 text-left text-gray-600">Product</th>
                  <th className="py-2 px-4 text-left text-gray-600">
                    Downloads remaining
                  </th>
                  <th className="py-2 px-4 text-left text-gray-600">Expires</th>
                  <th className="py-2 px-4 text-left text-gray-600">
                    Download
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 text-gray-700">Test Product</td>
                  <td className="py-2 px-4 text-gray-700">∞</td>
                  <td className="py-2 px-4 text-gray-700">Never</td>
                  <td className="py-2 px-4 text-blue-500">
                    <a href="#" className="underline">
                      Test Download
                    </a>
                  </td>
                </tr>
              </tbody>
            </table> */}

            <button className="border-black border flex  gap-2 text-black  py-2 px-4 rounded  ">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                
              >
                <rect width="24" height="24" fill="none" />
                <path
               
                  fill="#000"
                  d="M16 8.616v-3H8v3H7v-4h10v4zm-11.423 1h14.846zm13.038 2.5q.425 0 .713-.288t.287-.712t-.287-.713t-.713-.288t-.712.288t-.288.713t.288.712t.713.288M16 19v-4.538H8V19zm1 1H7v-4H3.577v-5.384q0-.85.577-1.425t1.423-.576h12.846q.85 0 1.425.576t.575 1.424V16H17zm2.423-5v-4.384q0-.425-.287-.713t-.713-.288H5.577q-.425 0-.712.288t-.288.713V15H7v-1.538h10V15z"
                />
              </svg>
              PRINT
            </button>
          </div>
        </div>

        {/* Address Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Shipping address</h3>
            <p className="text-gray-700">
              Test address 1
              <br />
              Test address 2
              <br />
              San Francisco, CA 94110
              <br />
              United States
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Billing address</h3>
            <p className="text-gray-700">
              Test address 1
              <br />
              Test address 2
              <br />
              San Francisco, CA 94110
              <br />
              United States
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">
            Additional Information for your order
          </h3>
          <p className="text-gray-700">None</p>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
