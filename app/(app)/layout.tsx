import Navbar from '@/components/Navbar/Navbar'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })
  
  return (
    <div>
      <Navbar user={((((await supabase.auth.getUser()).data.user)))}/>
        {children}
    </div>
  )
}
