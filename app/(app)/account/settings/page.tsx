import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers"

export default async function SettingsPage(): Promise<JSX.Element> {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({cookies: () => cookieStore});

  if((await supabase.auth.getUser()).data.user === null) {
    return (
      <div className="container py-12">
        <p className="text-xl font-medium text-zinc-300">You are not allowed to access this page.</p>
      </div>
    )
  }

  return (
    <div className="container py-12">
      <p className="text-xl font-medium text-zinc-300">This page is under construction.</p>
    </div>
  )
}