"use client";

import RouteHero from "@/components/RouteHero";
import Services from "@/components/Services";

import React, { useState } from "react";
import { z } from "zod";
import BilllingDetails from "@/components/BilllingDetails";
import { useCart  } from "@/Hooks/Context/CartContext";



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
  
  phone: z
    .string()
    .nonempty("Phone number is required")
    .regex(/^\d{11}$/, "Phone number must be exactly 11 digits"),
  email: z.string().nonempty("Email is required").email("Invalid email format"),
  additionalNotes: z
    .string() 
    .optional(),
});

function Page() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [province, setProvince] = useState("");
  const {cartItems , clearCart} = useCart()
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
    "USA",
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
    

    const validationResult = customerSchema.safeParse(customerInfo);

    if (!validationResult.success) {
      const fieldErrors: Record<string, string> = {};
      validationResult.error.errors.forEach((error) => {
        if (error.path[0]) {
          fieldErrors[error.path[0]] = error.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setIsProcessing(true);

    const fullName = `${customerInfo.firstName} ${customerInfo.lastName}`;
    const customerData = { ...customerInfo, fullName };

    // const shippingData = {
    //   ship_from: {
    //     geolocation: "-",
    //     email: "adnanirfan284@gmail.com",
    //     name: "Kulsoom Adnan",
    //     address_line1: "123 Sender St.",
    //     city_locality: "Austin",
    //     company_name: "adfok",
    //     state_province: "TX",
    //     postal_code: "78756",
    //     country_code: "US",
    //     phone: "+1 323-456-7890",
    //   },
    //   ship_to: {
    //     name: `${customerInfo.firstName.trim()} ${customerInfo.lastName?.trim()}`,
    //     address_line1: customerInfo.streetAddress?.trim(),
    //     email: customerInfo.email?.trim(),
    //     city_locality: customerInfo.city?.trim(),
    //     phone: customerInfo.phone?.trim(),
    //     state_province: "CA",
    //     postal_code: customerInfo.zipCode?.trim(),
    //     country_code: "US",
    //     address_residential_indicator: "no",
    //   },
    //   packages: [
    //     {
    //       weight: { value: 100, unit: "pound" },
    //       dimensions: {
    //         length: 5,
    //         width: 70,
    //         height: 5,
    //         unit: "inch",
    //       },
    //     },
    //   ],
    //   carrier_id: "se-217142",
    //   service_code: "fedex_ground",
    // };

    try {
      // console.log(
      //   "Shipping Data being sent:",
      //   JSON.stringify(shippingData, null, 2)
      // );

      // const response = await fetch("/api/create-shipping", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(shippingData),
      // });

      // if (!response.ok) {
      //   const errorDetails = await response.text();
      //   console.error("Response Error:", errorDetails);
      //   throw new Error(`Failed to fetch rates. Status: ${response.status}`);
      // }

      // const shippingResult = await response.json();
      // console.log("Shipping Data Response:", shippingResult);

      
      // const {
      //   name,
      //   phone,
      //   email,
      //   address_line1,
      //   city_locality,
      //   state_province,
      //   postal_code,
      //   country_code,
      // } = shippingResult.ship_to;

      // const orderData = {
      //   customerId: CustomerResult._id, // Use your customer ID logic
      //   fullName: `${customerInfo.firstName} ${customerInfo.lastName}`,
      //   shipTo: {
      //     name,
      //     phone,
      //     email,
      //     addressLine1: address_line1,
      //     city: city_locality,
      //     state: state_province,
      //     postalCode: postal_code,
      //     country: country_code,
      //   },
      //   trackingNumber: shippingResult.tracking_number,
      //   shipmentCost: shippingResult.shipment_cost.amount,
      //   trackingUrl: shippingResult.tracking_url,
      //   createdAt: shippingResult.created_at,
      //   labelPrint: shippingResult.label_download.pdf,
      //   carrierCode: shippingResult.carrier_code,
      //   AdditionalInfo: customerInfo.additionalNotes,
      // };

      // const sanityResponse = await fetch("/api/sanity-create-order", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(orderData),
      // });

      // if (!sanityResponse.ok) {
      //   throw new Error("Error saving order to Sanity.");
      // }

      // const sanityResult = await sanityResponse.json();
      // console.log("Order Saved to Sanity:", sanityResult);
      
      // Navigate to Order Confirmation Page
      // router.push(`/order-confirmation/order?orderId=${sanityResult._id}`);


      const customerResponse = await fetch("/api/customers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(customerData),
      });

      if (!customerResponse.ok) {
        const errorDetails = await customerResponse.text();
        console.error("Error creating customer:", errorDetails);
        throw new Error(
          `Failed to create customer. Status: ${customerResponse.status}`
        );
      }

      const CustomerResult = await customerResponse.json();
      console.log("Customer creation result:", CustomerResult);

      console.log('CustomerResult Id:' , CustomerResult.customer._id)

      const products = await Promise.all(
        cartItems.map(async (item) => {
          console.log(item.productImage)
          const imageRef = typeof item.productImage !== 'string' && item.productImage.asset ? item.productImage.asset._ref : null;
          
      
          // Step 2: Return the product with the correct image reference
          return {
            title: item.title,
            quantity: item.quantity,
            price: item.price,
            image: {
              _type: "image",
              asset: { _ref: imageRef }, // Use the image reference (_ref)
            },
          };
        })
      );
      
      const orderData = {
        _type: "order",
        _key: `item-${Date.now()}`,
        customer: {
          _type: "reference",
          _ref: CustomerResult.customer._id, // Ensure `CustomerResult._id` exists
        },
        products,
        totalAmount: cartItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        ),
        status: "pending", // Initial order status,
        AdditionalInfo : customerInfo.additionalNotes
      };

    // Create order in Sanity
    const orderResponse = await fetch("/api/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData),
    });

    if (!orderResponse.ok) {
      throw new Error("Failed to create order");
    }

    const order = await orderResponse.json();
    console.log("Order created:", order);

      

      const response = await fetch("/api/checkout", {
        method : 'POST',
        headers: { "Content-Type": "application/json" },
        body : JSON.stringify({products : cartItems , orderId :order})
      })

      const result = await response.json()
      console.log(result)
      if(result.url){
        clearCart();
        setIsProcessing(false);
        window.location.href = `${result.url}`
      }

    } catch (error) {
      console.error("Error during submission:", error);
      alert("An error occurred while submitting the form.");
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
                  <span className="text-red-500 text-sm">
                    {errors.firstName}
                  </span>
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
                  <span className="text-red-500 text-sm">
                    {errors.lastName}
                  </span>
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

      
          </form>
        </div>
        {/* Billing Details */}
        <div className="flex justify-center">
          <BilllingDetails
            handleCustomers={handleSubmit}
            isProcessing={isProcessing}
          />
        </div>
      </div>
      <Services />
    </div>
  );
}

export default Page;
