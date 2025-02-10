import { urlFor } from "@/sanity/lib/image";
import { NextRequest, NextResponse } from "next/server";

import Stripe from "stripe";
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string,);

interface Product {
  title: string;
  price: number;
  productImage: {
    asset: {
      url: string;
    };
  };
  quantity?: number;
}

export async function POST(req: NextRequest) {
  try {
    const { products, orderId }: { products: Product[]; orderId: { _id: string } } = await req.json();

    console.log(products);

    // 1. Fetching Active Products from Stripe
    let activeProducts = await stripe.products.list({
      active: true,
    });

    for (const product of products) {
      // Ensuring name is present
      if (!product.title) {
        throw new Error(
          `Product name is missing for ${JSON.stringify(product)}`
        );
      }

      // 2. Check if product already exists in Stripe
      const matchedProduct = activeProducts?.data.find(
        (stripeProduct: { name: string }) =>
          stripeProduct.name.toLowerCase() === product.title.toLowerCase()
      );

      // 3. Create the product in Stripe if it doesn't exist
      if (!matchedProduct) {
        console.log(`Creating product: ${product.title}`);
        await stripe.products.create({
          name: product.title,
          default_price_data: {
            currency: "usd",
            unit_amount: product.price * 100, // Ensure price is valid
          },
          images: [product.productImage.asset.url],
        });
      }
    }

    // Refresh the list of active products
    activeProducts = await stripe.products.list({
      active: true,
    });

    // Prepare line items for the checkout session
    const stripeProducts = products.map((product: Product) => {
      const stripeProduct = activeProducts.data.find(
        (stripeProduct: { name: string }) =>
          stripeProduct.name.toLowerCase() === product.title.toLowerCase()
      );
      if (!stripeProduct) {
        throw new Error(`Stripe product not found for: ${product.title}`);
      }

      return {
        price_data: {
          currency: "usd",
          unit_amount: Math.round(product.price * 100), // Convert price to cents
          product_data: {
            name: product.title,
            images: product.productImage ? [urlFor(product.productImage).url()] : undefined,
          },
        },
        metadata: {
          // Include image URL in metadata
        }, // Add product image here
        quantity: product.quantity || 1, // Default to 1 if quantity is missing
      };
    });

    // 4. Create a Checkout Session
    const origin = req.headers.get("origin"); // Get the origin from the request headers
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: stripeProducts,
      mode: "payment",
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}&orderId=${orderId._id}`,
      cancel_url: `${origin}/cart`,
    });

    return NextResponse.json({ url: session.url }, { status: 303 });
  } catch (err) {
    console.error("Error in creating Stripe session:", err);
    return NextResponse.json(
      { error: err },
      // { status: err.statusCode || 500 }
    );
  }
}
