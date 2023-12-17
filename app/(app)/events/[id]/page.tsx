
import BuyTicketButton from "@/components/BuyTicketButton/BuyTicketButton";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers"

export default async function EventDetails({ params } : { params: { id: string }}): Promise<JSX.Element> {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const { data, error } = await supabase.from('Event').select().eq('id', params.id);

  if(error) {
    return <p>Invalid event.</p>
  }

  return (
    <main className="container py-12">
      <h1 className="font-bold text-zinc-300 text-2xl">{data[0].name}</h1>
      <p className="font-medium text-zinc-500">{data[0].description}</p>
    
      <p className="mt-4 font-medium text-sm text-indigo-500">{data[0].location}</p>
      <BuyTicketButton id={params.id}/>

      <div className="bg-zinc-950 p-4 w-full rounded-lg mt-16">
        <p className="text-zinc-400 font-medium">{data[0].fullDescription}</p>
      </div>
    </main>
  )
}