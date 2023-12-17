import UpdatePasswordForm from "@/components/Forms/UpdatePasswordForm/UpdatePasswordForm";
import { createRouteHandlerClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function UpdatePasswordPage() : Promise<JSX.Element> {
  const cookieStore = cookies()
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore })

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-full md:w-[60%] lg:w-[50%] xl:w-[30%] mx-6 bg-zinc-950 p-6 rounded-md border-zinc-900 border-[1px] shadow">
        <h1 className="text-zinc-200 text-2xl font-bold">Update <b className="text-transparent bg-clip-text bg-gradient-to-tr from-indigo-400 to-indigo-600">password</b></h1>
        <p className="font-medium text-zinc-500">Stronger is always better.</p>

        <UpdatePasswordForm />

        <p className="text-sm font-medium text-zinc-500">Changed your mind? <Link href={'/'}className="font-semibold text-indigo-400">Go home</Link></p>
      </div>
    </div>
  )
}