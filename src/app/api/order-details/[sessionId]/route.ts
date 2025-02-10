import { NextResponse } from "next/server";
import Stripe from "stripe";
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string, {
  
});

export async function GET(
  req: Request,
  { params }: { params: { sessionId: string } }
) {
  const { sessionId } = params;

  try {
    // Fetch the session from Stripe using the session ID
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (!session) {
      return NextResponse.json({ error: "Session not found" }, { status: 404 });
    }

    // Optionally, fetch additional order data (e.g., customer details, product info)
    const orderData = {
      session,
      customer: session.customer_details,

      lineItems: await stripe.checkout.sessions.listLineItems(sessionId, {
        limit: 10,
      }),
    };

    return NextResponse.json(orderData);
  } catch (error) {
    console.error("Error retrieving order details:", error);
    return NextResponse.json(
      { error: "Error retrieving order details" },
      { status: 500 }
    );
  }
}

// app/api/order-details/[sessionId]/route.ts

// import { NextResponse } from "next/server";
// import { client } from "@/sanity/lib/client"; // Adjust the path

// export async function GET(req: Request, { params }: { params: { sessionId: string } }) {
//   const { sessionId } = params;

//   try {
//     const orderQuery = `*[_type == "order" && sessionId == "${sessionId}"][0]`;

//     const order = await client.fetch(orderQuery);

//     if (!order) {
//       return NextResponse.json(
//         { success: false, message: "Order not found." },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json({ success: true, order }, { status: 200 });
//   } catch (error) {
//     console.error("Error fetching order:", error);
//     return NextResponse.json(
//       { success: false, message: "Error fetching order." },
//       { status: 500 }
//     );
//   }
// }
