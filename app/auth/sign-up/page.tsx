import SignUpForm from "@/components/Forms/SignUpForm/SignUpForm";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function SignUpPage() : Promise<JSX.Element> {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })
  
  if((await supabase.auth.getUser()).data.user !== null) {
    return redirect('/');
  }

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-full md:w-[60%] lg:w-[50%] xl:w-[30%] mx-6 bg-zinc-950 p-6 rounded-md border-zinc-900 border-[1px] shadow">
        <h1 className="text-zinc-200 text-2xl font-bold">Sign <b className="text-transparent bg-clip-text bg-gradient-to-tr from-indigo-400 to-indigo-600">up</b></h1>
        <p className="font-medium text-zinc-500">Create an account to start hosting events.</p>

        <SignUpForm />

        <p className="text-sm font-medium text-zinc-500">Have an account? <Link href={'/auth/sign-in'}className="font-semibold text-indigo-400">Sign in</Link></p>
      </div>
    </div>
  )
}