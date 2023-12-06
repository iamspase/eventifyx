import SignInForm from "@/components/Forms/SignInForm/SignInForm";
import Link from "next/link";

export default function SignInPage() : JSX.Element {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-full md:w-[60%] lg:w-[50%] xl:w-[30%] mx-6 bg-zinc-950 p-6 rounded-md border-zinc-900 border-[1px] shadow">
        <h1 className="text-zinc-200 text-2xl font-bold">Sign <b className="text-transparent bg-clip-text bg-gradient-to-tr from-indigo-400 to-indigo-600">in</b></h1>
        <p className="font-medium text-zinc-500">You are a step away from accessing your events.</p>

        <SignInForm />

        <p className="text-sm font-medium text-zinc-500">Don't have an account? <Link href={'/auth/sign-up'}className="font-semibold text-indigo-400">Sign up</Link></p>
      </div>
    </div>
  )
}