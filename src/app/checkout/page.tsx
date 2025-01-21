"use client";

import RouteHero from "@/components/RouteHero";
import Services from "@/components/Services";
import { useCart } from "@/Hooks/Context/CartContext";
import React, { useState } from "react";
import { z } from "zod";
import BilllingDetails from "@/components/BilllingDetails";
import { useRouter } from "next/navigation";

const customerSchema = z.object({
  firstName: z
    .string()
    .nonempty("First name is required")
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name cannot exceed 50 characters"),
  lastName: z
    .string()
    .nonempty("Last name is required")
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name cannot exceed 50 characters"),
  streetAddress: z
    .string()
    .nonempty("Street address is required")
    .min(5, "Street address must be at least 5 characters")
    .max(100, "Street address cannot exceed 100 characters"),
  city: z
    .string()
    .nonempty("City is required")
    .min(2, "City must be at least 2 characters")
    .max(50, "City cannot exceed 50 characters"),
  province: z
    .string()
    .nonempty("Province is required")
    .min(2, "Province must be at least 2 characters")
    .max(50, "Province cannot exceed 50 characters"),
  zipCode: z
    .string()
    .nonempty("ZIP code is required")
    .regex(/^\d+$/, "ZIP code must be a number")
    .min(5, "ZIP code must be at least 5 digits")
    .max(10, "ZIP code cannot exceed 10 digits"),
  phone: z
    .string()
    .nonempty("Phone number is required")
    .regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid email format"),
  // additionalNotes: z
  //   .string()
  //   .min(10, "Additional notes must be at least 10 characters")
  //   .max(200, "Additional notes cannot exceed 200 characters")
  //   .optional(),
});

function Page() {
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false);
  const [province, setProvince] = useState("");
  const { cartItems, getTotalPrice } = useCart();
  const [customerInfo, setCustomerInfo] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    city: "",
    province: "",
    zipCode: "",
    phone: "",
    email: "",
    additionalNotes: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const provinces = [
    "Sindh",
    "Punjab",
    "Balochistan",
    "KPK",
    "Gilgit-Baltistan",
  ];

  const handleProvinceChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setProvince(event.target.value);
    setCustomerInfo((prevState) => ({
      ...prevState,
      province: event.target.value,
    }));
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setCustomerInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setIsProcessing(true)
    // Validate data using Zod
    const validationResult = customerSchema.safeParse(customerInfo);

    if (!validationResult.success) {
      // Extract errors and set to state
      const fieldErrors: Record<string, string> = {};
      validationResult.error.errors.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0]] = error.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    // Clear errors if validation passes
    setErrors({});

    // Combine first name and last name into a full name
    const fullName = `${customerInfo.firstName} ${customerInfo.lastName}`;
    const customerData = { ...customerInfo, fullName };

    try {
      // Create customer
      const response = await fetch("http://localhost:3000/api/customers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(customerData),
      });

      if (response.ok) {
        alert("Customer created successfully!");
        const result = await response.json();

        const customerId = result.customerId;

        // Create the order
        const orderData = {
          customerId,
          products: cartItems.map((item) => ({
            productId: item.id,
            quantity: item.quantity,
            price: item.price,
          })),
          totalAmount: getTotalPrice(),
        };

        const orderResponse = await fetch("/api/orders", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(orderData),
        });

        const orderResult = await orderResponse.json();
        if (!orderResponse.ok || !orderResult.success) {
          throw new Error("Failed to place order");
        }
       
        alert("Order placed successfully!");
        router.push('/orderconfirmation')
      } else {
        alert("Failed to create customer.");
      }
    } catch (error) {
      console.error("Error creating customer:", error);
      alert("An error occurred while submitting the form.");
    }finally{
      setIsProcessing(false)
    }
  };

  return (
    <div className="h-auto">
      <RouteHero prop="Checkout" />
      <div className="h-auto flex flex-col lg:grid lg:grid-cols-2 w-full px-4 md:px-10 lg:px-20 gap-10 lg:gap-20">
        {/* Billing Form */}
        <div className="flex justify-center md:items-start">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 w-full max-w-[600px] py-10"
          >
            <h1 className="text-[24px] lg:text-[36px] font-semibold">
              Billing Details
            </h1>

            {/* First Name */}
            <div className="flex flex-wrap gap-4">
            <div className="flex flex-col gap-2 w-full md:w-[48%]">
              <label className="text-sm md:text-base">First Name</label>
              <input
                type="text"
                name="firstName"
                value={customerInfo.firstName}
                onChange={handleChange}
                className="border-[#9F9F9F] border rounded-md px-4 py-2"
              />
              {errors.firstName && (
                <span className="text-red-500 text-sm">{errors.firstName}</span>
              )}
            </div>
            
            {/* Last Name */}
            <div className="flex flex-col gap-2 w-full md:w-[48%]">
              <label className="text-sm md:text-base ">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={customerInfo.lastName}
                onChange={handleChange}
                className="border-[#9F9F9F] border rounded-md px-4 py-2"
              />
              {errors.lastName && (
                <span className="text-red-500 text-sm">{errors.lastName}</span>
              )}
            </div>
            </div>


            {/* Street Address */}
            <div className="flex flex-col gap-2">
              <label className="text-sm md:text-base">Street Address</label>
              <input
                type="text"
                name="streetAddress"
                value={customerInfo.streetAddress}
                onChange={handleChange}
                className="border-[#9F9F9F] border rounded-md px-4 py-2"
              />
              {errors.streetAddress && (
                <span className="text-red-500 text-sm">
                  {errors.streetAddress}
                </span>
              )}
            </div>

            {/* Town/City */}
            <div className="flex flex-col gap-2">
              <label className="text-sm md:text-base">Town / City</label>
              <input
                type="text"
                name="city"
                value={customerInfo.city}
                onChange={handleChange}
                className="border-[#9F9F9F] border rounded-md px-4 py-2"
              />
              {errors.city && (
                <span className="text-red-500 text-sm">{errors.city}</span>
              )}
            </div>

            {/* Province Selector */}
            <div className="flex flex-col gap-2">
              <label className="text-sm md:text-base">Province</label>
              <select
                value={province}
                name="province"
                onChange={handleProvinceChange}
                className="border-[#9F9F9F] border rounded-md px-4 py-2 bg-white"
              >
                <option value="" disabled>
                  Select Province
                </option>
                {provinces.map((prov, index) => (
                  <option key={index} value={prov}>
                    {prov}
                  </option>
                ))}
              </select>
              {errors.province && (
                <span className="text-red-500 text-sm">{errors.province}</span>
              )}
            </div>

            {/* ZIP Code */}
            <div className="flex flex-col gap-2">
              <label className="text-sm md:text-base">ZIP Code</label>
              <input
                type="text"
                name="zipCode"
                value={customerInfo.zipCode}
                onChange={handleChange}
                className="border-[#9F9F9F] border rounded-md px-4 py-2"
              />
              {errors.zipCode && (
                <span className="text-red-500 text-sm">{errors.zipCode}</span>
              )}
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label className="text-sm md:text-base">Phone</label>
              <input
                type="text"
                name="phone"
                value={customerInfo.phone}
                onChange={handleChange}
                className="border-[#9F9F9F] border rounded-md px-4 py-2"
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">{errors.phone}</span>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-sm md:text-base">Email Address</label>
              <input
                type="email"
                name="email"
                value={customerInfo.email}
                onChange={handleChange}
                className="border-[#9F9F9F] border rounded-md px-4 py-2"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
            </div>

            {/* Additional Notes */}
            <div className="flex flex-col gap-2">
              <label className="text-sm md:text-base">Additional Notes</label>
              <textarea
                rows={2}
                name="additionalNotes"
                value={customerInfo.additionalNotes}
                onChange={handleChange}
                className="border-[#9F9F9F] border rounded-md px-4 py-2"
              />
              {errors.additionalNotes && (
                <span className="text-red-500 text-sm">
                  {errors.additionalNotes}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4"
            >
              Submit
            </button>
          </form>
        </div>
              {/* Billing Details */}
        <div className="flex justify-center">
          <BilllingDetails handleCustomers={handleSubmit} isProcessing={isProcessing} />
      </div>
      </div>
        <Services/>
    </div>
  );
}

export default Page;


// "use client";

// import BilllingDetails from "@/components/BilllingDetails";
// import RouteHero from "@/components/RouteHero";
// import Services from "@/components/Services";
// import { useCart } from "@/Hooks/Context/CartContext";
// import customer from "@/sanity/schemaTypes/customer";
// import React, { useState } from "react";

// function Page() {
//   const [province, setProvince] = useState("");
//   const {cartItems , getTotalPrice} = useCart()
//   const [customerInfo, setCustomerInfo] = useState({
//     firstName: "",
//     lastName: "",
//     streetAddress: "",
//     city: "",
//     province: "",
//     zipCode: "",
//     phone: "",
//     email: "",
//     additionalNotes: "",
//     fullName: "", // Added field for full name
//   });

//   const provinces = [
//     "Sindh",
//     "Punjab",
//     "Balochistan",
//     "KPK",
//     "Gilgit-Baltistan",
//   ];

//   const handleProvinceChange = (
//     event: React.ChangeEvent<HTMLSelectElement>
//   ) => {
//     setProvince(event.target.value);
//     setCustomerInfo((prevState) => ({
//       ...prevState,
//       province: event.target.value,
//     }));
//   };

//   const handleChange = (
//     event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = event.target;
//     setCustomerInfo((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();

//     // Combine the first name and last name into full name before sending
//     const fullName = `${customerInfo.firstName} ${customerInfo.lastName}`;

//     // Send the combined name along with other customer info
//     const customerData = { ...customerInfo, fullName };

//     try {
//       const response = await fetch("http://localhost:3000/api/customers", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(customerData),
//       });

//       if (response.ok) {
//         // Handle success, show a confirmation or redirect to another page
//         alert("Customer created successfully!");
//         const result = await response.json();

//         const customerId = result.customerId;
//         console.log("Customer ID:", customerId);


//               // Step 2: Create the order
//       const orderData = {
//         customerId,
//         products: cartItems.map((item) => ({
//           productId: item.id, // Assuming each cart item has an ID
//           quantity: item.quantity,
//           price: item.price,
//         })),
//         totalAmount: getTotalPrice(),
//       };

//       const orderResponse = await fetch("/api/orders", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(orderData),
//       });

//       const orderResult = await orderResponse.json();
//       if (!orderResponse.ok || !orderResult.success) {
//         throw new Error("Failed to place order");
//       }

//       alert("Order placed successfully!");
//       } else {
//         // Handle error
//         alert("Failed to create customer.");
//       }


//     } catch (error) {
//       console.error("Error creating customer:", error);
//       alert("An error occurred while submitting the form.");
//     }

  
//   };

//   return (
//     <div className="h-auto">
//       <RouteHero prop="Checkout" />
//       <div className="h-auto flex flex-col lg:grid lg:grid-cols-2 w-full px-4 md:px-10 lg:px-20 gap-10 lg:gap-20">
//         {/* Billing Form */}
//         <div className="flex justify-center md:items-start">
//           <form className="flex flex-col gap-6 w-full max-w-[600px] py-10 ">
//             <h1 className="text-[24px] lg:text-[36px] font-semibold">
//               Billing Details
//             </h1>

//             <div className="flex flex-wrap gap-4">
//               <div className="flex flex-col gap-2 w-full md:w-[48%]">
//                 <label className="text-sm md:text-base ">First Name</label>
//                 <input
//                   type="text"
//                   placeholder="First name"
//                   name="firstName"
//                   value={customerInfo.firstName}
//                   onChange={handleChange}
//                   className="border-[#9F9F9F] border rounded-md px-4 py-2 md:py-3 text-sm md:text-base w-full"
//                 />
//               </div>
//               <div className="flex flex-col gap-2 w-full md:w-[48%]">
//                 <label className="text-sm md:text-base">Last Name</label>
//                 <input
//                   type="text"
//                   placeholder="Last name"
//                   name="lastName"
//                   value={customerInfo.lastName}
//                   onChange={handleChange}
//                   className="border-[#9F9F9F] border rounded-md px-4 py-2 md:py-3 text-sm md:text-base w-full"
//                 />
//               </div>
//             </div>

//             <div className="flex flex-col gap-2">
//               <label className="text-sm md:text-base">Street Address</label>
//               <input
//                 type="text"
//                 name="streetAddress"
//                 value={customerInfo.streetAddress}
//                 onChange={handleChange}
//                 className="border-[#9F9F9F] border rounded-md px-4 py-2 md:py-3 text-sm md:text-base w-full"
//               />
//             </div>

//             <div className="flex flex-col gap-2">
//               <label className="text-sm md:text-base">Town / City</label>
//               <input
//                 type="text"
//                 name="city"
//                 value={customerInfo.city}
//                 onChange={handleChange}
//                 className="border-[#9F9F9F] border rounded-md px-4 py-2 md:py-3 text-sm md:text-base w-full"
//               />
//             </div>

//             {/* Province Selector */}
//             <div className="flex flex-col gap-2">
//               <label className="text-sm md:text-base">Province</label>
//               <select
//                 value={province}
//                 name="provience"
//                 onChange={handleProvinceChange}
//                 className="border-[#9F9F9F] border rounded-md px-4 py-2 md:py-3 text-sm md:text-base w-full bg-white"
//               >
//                 <option value="" disabled>
//                   Select Province
//                 </option>
//                 {provinces.map((prov, index) => (
//                   <option key={index} value={prov}>
//                     {prov}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div className="flex flex-col gap-2">
//               <label className="text-sm md:text-base">ZIP Code</label>
//               <input
//                 type="number"
//                 name="zipCode"
//                 value={customerInfo.zipCode}
//                 onChange={handleChange}
//                 className="border-[#9F9F9F] border rounded-md px-4 py-2 md:py-3 text-sm md:text-base w-full"
//               />
//             </div>

//             <div className="flex flex-col gap-2">
//               <label className="text-sm md:text-base">Phone</label>
//               <input
//                 type="number"
//                 name="phone"
//                 value={customerInfo.phone}
//                 onChange={handleChange}
//                 className="border-[#9F9F9F] border rounded-md px-4 py-2 md:py-3 text-sm md:text-base w-full"
//               />
//             </div>

//             <div className="flex flex-col gap-2">
//               <label className="text-sm md:text-base">Email Address</label>
//               <input
//                 type="email"
//                 placeholder="john@gmail.com"
//                 name="email"
//                 value={customerInfo.email}
//                 onChange={handleChange}
//                 className="border-[#9F9F9F] border rounded-md px-4 py-2 md:py-3 text-sm md:text-base w-full"
//               />
//             </div>

//             <div>
//               <textarea
//                 rows={2}
//                 className="border-[#9F9F9F] border rounded-md px-4 py-2 md:py-3 text-sm md:text-base w-full"
//                 placeholder="Additional Notes"
//               />
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4"
//             >
//               Submit
//             </button>
//           </form>
//         </div>

//         {/* Billing Details */}
//         <div className="flex justify-center">
//           <BilllingDetails handleCustomers={handleSubmit} />
//         </div>
//       </div>
//       <Services />
//     </div>
//   );
// }

// export default Page;