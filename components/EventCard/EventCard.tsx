import Link from "next/link";

interface EventCardProps {
  id?: string;
  name: string;
  description: string;
  location: string;
}

export default function EventCard({ id, name, description, location } : EventCardProps): JSX.Element {
  return (
    <div className="bg-zinc-950 p-3 rounded-md border-[1px] border-gray-900 transition hover:scale-[102%] max-h-36">
      <h1 className="text-zinc-300 font-bold text-lg">{name}</h1>
      <p className="text-zinc-500 font-medium overflow-ellipsis">{description}</p>

      <div className="flex items-center justify-between mt-4">
        <p className="text-sm font-semibold text-zinc-600">{location}</p>
        <button className="bg-indigo-500 text-sm text-white font-medium py-1 px-3 rounded-md transition hover:scale-105">Buy Ticket</button>
      </div>
    </div>
  )
}