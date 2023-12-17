import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST(req: Request) {
  const cookieStore = cookies()
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

  const body = await req.text();

  const signature = headers().get("stripe-signature");

  const event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET);

  

  if (event.type === "checkout.session.completed") {
    if (!event.data.object.metadata.tokens || !event.data.object.metadata.userId) {
      return new Error(`missing userId or token amount on metadata, ${event.id}`);
    }

    console.log(event.data.object.metadata);

    // Get user's current amount of tokens
    const { data } = await supabase.from('UserData').select('tokens').eq('id', event.data.object.metadata.userId);

    // Give tokens to users after checkout complete
    await supabase.from('UserData').update({
      tokens: Number(data![0].tokens) + Number(event.data.object.metadata.tokens)
    }).eq('id', event.data.object.metadata.userId)

    console.log("Added tokens to user");

  }
  return NextResponse.json(event)
}