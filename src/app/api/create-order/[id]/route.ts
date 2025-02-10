
import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params; // Extract the dynamic `id` from the URL
  console.log(id);
  try {
    // Fetch order data from Sanity using the order ID
    const order = await client.fetch(
      `*[_type == "order" && _id == $id][0]{
      ...,
      customer->{
      fullName,
      email,
      phone,
      address
    }}`,
      { id }
    );

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    return NextResponse.json(order, { status: 200 });
  } catch (error) {
    console.error("Error fetching order:", error);
    return NextResponse.json(
      { error: "Failed to fetch order" },
      { status: 500 }
    );
  }
}


// // app/api/orders/[orderId]/route.js

// import { client } from "@/sanity/lib/client";
// import { NextRequest, NextResponse } from "next/server";
// export async function GET(req: NextRequest, { params }: { params: { orderId: string } }) {
//     const { orderId } = params;

//   try {
//     const order = await client.fetch(
//       `*[_type == "order" && _id == $orderId][0]{
//         _id,
//         sessionId,
//         status,
//         totalAmount,
//         products,
//         createdAt,
//         customer->{
//           _id,
//           fullName,
//           email,
//           phone,
//           address
//         }
//       }`,
//       { orderId }
//     );

//     if (!order) {
//       return NextResponse.json({ error: "Order not found." }, { status: 404 });
//     }

//     return NextResponse.json({ success: true, order }, { status: 200 });
//   } catch (error) {
//     console.error("Error fetching order:", error);
//     return NextResponse.json(
//       { error: "Failed to fetch order." },
//       { status: 500 }
//     );
//   }
// }
