import Link from "next/link";

export default function TicketCard({ eventName, eventId, ticketId } : { eventName: string, eventId: string, ticketId: string }): JSX.Element {
  return (
    <div className="w-full bg-zinc-950 p-3 rounded-md border-[1px] border-gray-900 transition hover:scale-[102%]">
      <h1 className="text-zinc-300 font-bold text-lg">{eventName}</h1>

      <p className="text-sm font-semibold text-zinc-600 my-2">Ticket ID: {ticketId}</p>

      <Link href={`/events/${eventId}`} className="bg-indigo-500 py-1 px-3 text-sm rounded-md font-medium">Visit Event</Link>
    </div>
  )
}