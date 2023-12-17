import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { Inter } from 'next/font/google'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })
  
  if((await supabase.auth.getUser()).data.user !== null) {
    return redirect('/')
  }
  
  return (
    <div>
      {children}
    </div>
  )
}
