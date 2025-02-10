'use client';

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { urlFor } from "@/sanity/lib/image";
import Loader2 from "@/components/Loader2";


const SuccessPage = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId"); // Extract `orderId` from the query parameters
  interface Customer {
    fullName: string;
    email: string;
    phone: string;
    address: {
      streetAddress: string;
      city: string;
      provience: string;
    };
  }

  interface Product {
    title: string;
    quantity: number;
    price: number;
    image: string;
  }

  interface OrderData {
    customer: Customer;
    status: string;
    totalAmount: number;
    AdditionalInfo?: string;
    products: Product[];
  }

  const [orderData, setOrderData] = useState<OrderData| null>(null);
  const router = useRouter();

  useEffect(() => {
    if (orderId) {
      const fetchOrderData = async () => {
        try {
          const response = await fetch(`/api/create-order/${orderId}`);
          const data = await response.json();
          setOrderData(data);
        } catch (error) {
          console.error("Error fetching order data:", error);
        }
      };

      fetchOrderData();
    }
  }, [orderId]);

  if (!orderData) return <Loader2 />;

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">
      {/* Header */}
      <div className="text-center">
      <div className="flex gap-2 text-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="38"
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

          <h1 className="text-4xl font-bold text-gray-800"> Order Confirmed!</h1>
        </div>

       
        <p className="text-gray-500 mt-2">Thank you for your purchase <span className="font-bold">{orderData.customer.fullName}</span> . Below are your order details.</p>
      </div>

      {/* Customer Info */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Customer Information</h2>
        <div className="text-gray-600 space-y-2">
          <p><strong>Name:</strong> {orderData.customer.fullName}</p>
          <p><strong>Email:</strong> {orderData.customer.email}</p>
          <p><strong>Phone:</strong> {orderData.customer.phone}</p>
          <p>
            <strong>Address:</strong> {orderData.customer.address.streetAddress}, {orderData.customer.address.city},{" "}
            {orderData.customer.address.provience}
          </p>
        </div>
      </div>

      {/* Order Info */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Order Details</h2>
        <div className="text-gray-600 space-y-2">
          <p><strong>Status:</strong> {orderData.status}</p>
          <p><strong>Total Amount:</strong> ${orderData.totalAmount.toFixed(2)}</p>
          {orderData.AdditionalInfo && (
            <p><strong>Additional Info:</strong> {orderData.AdditionalInfo}</p>
          )}
        </div>
      </div>

      {/* Products */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Order Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {orderData.products?.map((product: Product, index: number) => (
            <div
              key={index}
              className="flex items-center bg-gray-50 shadow-md rounded-lg p-4"
            >
              <img
                src={urlFor(product.image).url()}
                alt={product.title}
                className="w-20 h-20 object-cover rounded-full mr-4"
              />
              <div className="space-y-1">
                <p className="font-semibold text-gray-800">{product.title}</p>
                <p className="text-sm text-gray-500">Qty: {product.quantity}</p>
                <p className="text-sm text-gray-500">Price: ${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Continue Shopping */}
      <div className="text-center space-y-2">
        <button
          onClick={() => router.push("/")}
          className="px-6 py-3 bg-[#B88E2F] text-white rounded-full shadow-lg hover:bg-[#846722] transition"
        >
          Continue Shopping
        </button>
        <p className="text-sm text-gray-500">Need help? Contact us at support@example.com</p>
      </div>
    </div>
  );
};

export default SuccessPage;


// "use client";

// import { useEffect, useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import Loader from "@/components/Loader";

// interface LineItem {
//   id: string;
//   description: string;
//   quantity: number;
//   amount_total: number;
//   price_data?: {
//     product_data?: {
//       name?: string;
//       images?: string[];
//     };
//   };
// }

// interface OrderData {
//   session: {
//     id: string;
//     amount_total: number;
//   };
//   customer: {
//     name: string;
//     email: string;
//   };
//   lineItems: {
//     data: LineItem[];
//   };
// }

// const OrderConfirmation = () => {
//   const searchParams = useSearchParams();
//   const sessionId = searchParams.get("session_id");
//   const router =  useRouter()
//   const [orderData, setOrderData] = useState<OrderData | null>(null);

//   useEffect(() => {
//     if (sessionId) {
//       fetch(`/api/order-details/${sessionId}`)
//         .then((res) => res.json())
//         .then((data) => {
//           if (data.error) {
//             console.error(data.error);
//           } else {
//             setOrderData(data);

//             // Optionally send the data to a create-order API
//             fetch("/api/create-order", {
//               method: "POST",
//               headers: { "Content-Type": "application/json" },
//               body: JSON.stringify({
//                 sessionId: data.session.id,
//                 products: data.lineItems.data.map((item: LineItem) => ({
//                   name: item.description,
//                   quantity: item.quantity,
//                   price: item.amount_total, // in cents
//                 })),
//                 totalAmount: data.session.amount_total,
//                 customer: {
//                   name: data.customer.name,
//                   email: data.customer.email,
//                 },
//               }),
//             })
//               .then((res) => res.json())
//               .then((response) => {
//                 if (!response.success) {
//                   console.error("Failed to create order:", response.message);
//                 } else {
//                   console.log("Order created successfully:", response.order);
//                 }
//               })
//               .catch((err) => console.error("Error creating order:", err));
//           }
//         })
//         .catch((err) => console.error("Error fetching order data:", err));
//     }
//   }, [sessionId]);

//   if (!orderData) return <Loader />;

//   return (
//     <div className="order-confirmation max-w-4xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
//       <h1 className="text-2xl font-bold text-center mb-6">Order Confirmation</h1>
//       <p className="text-center text-gray-600 mb-6">
//         Thank you for your purchase!
//       </p>
//       <h2 className="text-lg font-semibold mb-4 text-gray-800">
//         Order ID: {orderData.session.id}
//       </h2>

//       {/* Customer Information */}
//       <div className="mb-8">
//         <h3 className="text-xl font-semibold mb-2 text-gray-800">
//           Customer Information
//         </h3>
//         <table className="w-full border-collapse border border-gray-200 text-left">
//           <tbody>
//             <tr>
//               <td className="border border-gray-300 px-4 py-2 font-medium text-gray-700">
//                 Name
//               </td>
//               <td className="border border-gray-300 px-4 py-2">
//                 {orderData.customer.name}
//               </td>
//             </tr>
//             <tr>
//               <td className="border border-gray-300 px-4 py-2 font-medium text-gray-700">
//                 Email
//               </td>
//               <td className="border border-gray-300 px-4 py-2">
//                 {orderData.customer.email}
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       {/* Order Details */}
//       <div className="mb-8">
//         <h3 className="text-xl font-semibold mb-2 text-gray-800">
//           Order Details
//         </h3>
//         <table className="w-full border-collapse border border-gray-200">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="border border-gray-300 px-4 py-2">Product</th>
//               <th className="border border-gray-300 px-4 py-2">Quantity</th>
//               <th className="border border-gray-300 px-4 py-2">Price</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orderData.lineItems.data.map((item) => (
//               <tr key={item.id}>
//                 <td className="border border-gray-300 px-4 py-2">
//                   <div className="flex items-center">
//                     <p>{item.description}</p>
//                   </div>
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2 text-center">
//                   {item.quantity}
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2 text-center">
//                   ${(item.amount_total / 100).toFixed(2)}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Total Amount */}
//       <div className="text-right mb-8">
//         <h3 className="text-lg font-semibold text-gray-800">
//           Total: ${(orderData.session.amount_total / 100).toFixed(2)}
//         </h3>
//       </div>

//       {/* Redirect Button */}
//       <div className="text-center">
//         <button
//           onClick={() => router.push("/")}
//           className="px-6 py-2 bg-[#B88E2F] text-white rounded-lg shadow-md hover:bg-[#B88E2F] transition"
//         >
//           Go to Home
//         </button>
//       </div>
//     </div>
//   );
// };

// export default OrderConfirmation;


