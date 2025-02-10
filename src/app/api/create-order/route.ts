

import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";
// Adjust path based on your project structure

export async function POST(req: NextRequest) {
  try {
    const orderData = await req.json();
    console.log('Order Data Creating  ',orderData)
    const result = await client.create({
      _type: "order",
      ...orderData,
    });
    console.log('Order Created Successfully:', result);
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
  }
}


// import { NextResponse } from "next/server";
// import { client } from "@/sanity/lib/client";

// export async function POST(req : Request) {
//   try {
//     const { sessionId, customer, products, totalAmount } = await req.json();

//     console.log('Creating order:', { sessionId, customer, products, totalAmount });

//     const newOrder = {
//       _type: "order",
//       sessionId,
//        // customer is the Sanity customer _id
//       products, // Array of products (each with name, quantity, and price)
//       totalAmount,
//       status: "pending",
//       createdAt: new Date().toISOString(),
//     };

//     const order = await client.create(newOrder);
//     console.log('Order created successfully:', order);
//     return NextResponse.json({ success: true, order }, { status: 201 });
//   } catch (error) {
//     console.error("Error creating order:", error);
//     return NextResponse.json(
//       { success: false, message: "Failed to create order." },
//       { status: 500 }
//     );
//   }
// }



// import { client } from "@/sanity/lib/client";
// import type { NextRequest } from "next/server";
// import { NextResponse } from "next/server";

// export const runtime = "edge";

// // Create a new order
// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const {
//       customerId,
//       fullName,
//       shipTo,
//       trackingNumber,
//       shipmentCost,
//       trackingUrl,
//       carrierCode,
//       labelPrint,
//       AdditionalInfo,
//     } = body;

//     // Ensure `shipTo` has the required structure
//     if (
//       !shipTo ||
//       !shipTo.name ||
//       !shipTo.email ||
//       !shipTo.phone ||
//       !shipTo.address_line1 ||
//       !shipTo.city_locality ||
//       !shipTo.state_province ||
//       !shipTo.postal_code ||
//       !shipTo.country_code
//     ) {
//       return NextResponse.json(
//         { success: false, message: "Invalid or missing shipping address." },
//         { status: 400 }
//       );
//     }

//     const newOrder = {
//       _type: "order",
//       customerId,
//       fullName,
//       shipTo: {
//         _type: "object",
//         name: shipTo.name,
//         email: shipTo.email,
//         phone: shipTo.phone,
//         addressLine1: shipTo.addressLine1,
//         city: shipTo.city,
//         state: shipTo.state,
//         postalCode: shipTo.postalCode,
//         country: shipTo.country,
//       },
//       trackingNumber: trackingNumber || "",
//       shipmentCost: shipmentCost || 0,
//       trackingUrl: trackingUrl || "",
//       carrierCode: carrierCode || "",
//       labelPrint: labelPrint || "",
//       AdditionalInfo: AdditionalInfo || "",
//       status: "Pending",
//       createdAt: new Date().toISOString(),
//     };

//     const order = await client.create(newOrder);

//     return NextResponse.json({ success: true, order }, { status: 201 });
//   } catch (error) {
//     console.error("Error creating order:", error);
//     return NextResponse.json(
//       { success: false, message: "Failed to create order." },
//       { status: 500 }
//     );
//   }
// }


