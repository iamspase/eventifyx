import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

function getTokenAmount(priceId: string) {
  switch(priceId) {
    case 'price_1ONzgVEebHhmO0USCYxT37i9': return 50;
    case 'price_1ONzguEebHhmO0USH0TyQY0a': return 250;
    case 'price_1ONzhGEebHhmO0USsWwPbeV7': return 500;
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  const headerList = headers();
  const { priceId, userId } = await req.json();

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: 1
        },
      ],
      metadata: {
        userId,
        tokens: getTokenAmount(priceId),
      },
      mode: "payment",
      success_url: `${headerList.get("origin")}/thank-you`,
      cancel_url: `${headerList.get("origin")}/`,
  });

  return NextResponse.json({sessionUrl: session.url, status: 303});
  }
  catch(error) {
  }

  return NextResponse.json(priceId);
}