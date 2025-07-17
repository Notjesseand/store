// // app/api/payment/route.ts
// import { stripe } from "@/app/utils/stripe";
// import { NextResponse } from "next/server";

// export async function POST(request: Request) {
//   try {
//     const session = await stripe.checkout.sessions.create({
//       ui_mode: "embedded",
//       line_items: [
//         {
//           // this is the product price id from stripe
//           price: process.env.PRO_PRICE_ID,
//           quantity: 1,
//         },
//       ],
//       payment_method_types: ["card"],
//       mode: "payment",
//       automatic_tax: { enabled: true },
//       return_url: `${request.headers.get(
//         "origin"
//       )}/payment-confirmation?session_id={CHECKOUT_SESSION_ID}`,
//     });
//     return NextResponse.json({
//       id: session.id,
//       client_secret: session.client_secret,
//     });
//   } catch (err) {
//     return Response.json(err, {
//       status: 400,
//     });
//   }
// }

// app/api/payment/route.ts
import { stripe } from "@/app/utils/stripe";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const line_items = body.cart.map((item: any) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.title,
        },
        unit_amount: Math.round(item.price * 100), // in cents
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      line_items,
      payment_method_types: ["card"],
      mode: "payment",
      automatic_tax: { enabled: true },
      return_url: `${request.headers.get(
        "origin"
      )}/payment-confirmation?session_id={CHECKOUT_SESSION_ID}`,
    });

    return NextResponse.json({
      id: session.id,
      client_secret: session.client_secret,
    });
  } catch (err) {
    return Response.json(err, {
      status: 400,
    });
  }
}
