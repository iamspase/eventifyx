'use client'

import { useEffect, useState } from "react"
import SearchInput from "../SearchInput/SearchInput"
import Link from "next/link";
import EventCard from "../EventCard/EventCard";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function EventList(): JSX.Element {
  const [events, setEvents] = useState<any>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const supabase = createClientComponentClient();

  useEffect(() => {
    async function getDefaultEvents() {
      const { data, error } = await supabase.from('Event').select().limit(10);

      setEvents(data);
    }

    getDefaultEvents();
  }, []);

  async function searchEvents() {
    if(searchValue.length < 3) return;

    const { data, error } = await supabase.from("Event").select().ilike('name', `%${searchValue}%`);

    setEvents(data);
  }

  return (
    <div>
      <div className="flex items-center justify-between my-4">
        <SearchInput 
          value={searchValue}
          setValue={setSearchValue}
        />
        <button onClick={searchEvents} className="ml-4 text-sm transition hover:scale-105 text-white bg-indigo-500 rounded-md py-2 px-4">Search</button>
      </div>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-6">
        {events?.map((event: any) => 
          <Link href={`/events/${event.id}`} key={event.id}>
            <EventCard 
              id={event.id}
              name={event.name}
              description={event.description}
              location={event.location}
            />
          </Link>
        )}
      </section>
    </div>
  )
}