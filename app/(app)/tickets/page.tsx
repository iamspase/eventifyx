import TicketCard from "@/components/TicketCard/TicketCard";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers"

export default async function TicketsPage(): Promise<JSX.Element> {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({cookies: () => cookieStore});

  const { data: ticketData, error: ticketError } = await supabase.from('Ticket').select();
  const { data: eventData, error } = await supabase.from('Event').select().eq('event_id', ticketData![0].event_id);

  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-12">
      {ticketData?.map(ticket => <TicketCard key={eventData![0].id} eventId={eventData![0].id} eventName={eventData![0].name} ticketId={ticket.id} />)}
    </div>
  )
}