import PasswordResetForm from "@/components/Forms/PasswordResetForm/PasswordResetForm";
import SignInForm from "@/components/Forms/SignInForm/SignInForm";
import Link from "next/link";

export default function ForgotPasswordPage(): JSX.Element {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-full md:w-[60%] lg:w-[50%] xl:w-[30%] mx-6 bg-zinc-950 p-6 rounded-md border-zinc-900 border-[1px] shadow">
        <h1 className="text-zinc-200 text-2xl font-bold">Reset <b className="text-transparent bg-clip-text bg-gradient-to-tr from-indigo-400 to-indigo-600">password</b></h1>
        <p className="font-medium text-zinc-500">It happens, we often forget passwords.</p>

        <PasswordResetForm />

        <p className="text-sm font-medium text-zinc-500">Changed your mind? <Link href={'/auth/sign-in'} className="font-semibold text-indigo-400">Sign in</Link></p>
      </div>
    </div>
  )
}