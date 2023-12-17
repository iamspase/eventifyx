'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useEffect, useState } from "react";

export default function BuyTicketButton({ id } : { id: string }): JSX.Element {
  const supabase = createClientComponentClient();

  const [event, setEvent] = useState<any>();

  useEffect(() => {
    async function getEvent() {
      const { data, error } = await supabase.from('Event').select().eq('id', id);

      setEvent(data![0]);
    }

    getEvent();
  }, []);

  async function buyTicket() {
    // Get user tokens
    const { data, error } = await supabase.from('UserData').select();

    // Remove tokens from user
    await supabase.from('UserData').update({
      tokens: Number(data![0].tokens) - Number(event.price)
    }).eq('id', data![0].id);

    // Create a ticket
    await supabase.from('Ticket').insert({
      event_id: event.id,
    });    
  }


  return (
    <button onClick={() => buyTicket()} className="mt-7 text-sm transition hover:scale-105 text-white bg-indigo-500 rounded-md py-1 px-4">Buy Ticket {event?.price} Tokens</button>
  )
}