import EventCard from "@/components/EventCard/EventCard";
import EventList from "@/components/EventList/EventList";
import SearchInput from "@/components/SearchInput/SearchInput";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function EventsPage(): Promise<JSX.Element> {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  const { data, error } = await supabase.from('Event').select();

  if(error) console.log(error);

  return (
    <main className="container pt-12">
      <EventList />
    </main>
  )
}