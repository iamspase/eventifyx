"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form";

export default function PasswordResetForm(): JSX.Element {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState<string>("");

  const supabase = createClientComponentClient();
  const router = useRouter();

  const sendPasswordResetMail = async (inputData: any) => {
    try {
      const { email } = inputData;

      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: "http://localhost:3000/update-password"
      });

      if (error) {
        setError("For security purposes, you can only request this once every 60 seconds.")
        return;
      }

      router.push('/auth/forgot-password/confirmation');
    }
    catch (error) {
      setError("For security purposes, you can only request this once every 60 seconds.")
    }

  }

  return (
    <div className="mt-8 mb-4">
      <form onSubmit={handleSubmit(sendPasswordResetMail)} className="flex flex-col">
        <label htmlFor="email" className="my-2 font-medium text-sm text-zinc-300">Email</label>
        <input {...register("email")} type="text" placeholder="john@smith.com" name="email" className="py-2 px-2 rounded-md bg-zinc-800 text-zinc-200 focus:ring-2 focus:ring-indigo-500 outline-none border-none" />

        <p className="mt-1 text-red-400 font-medium text-sm">{error}</p>

        <input type="submit" value={'Send password reset link'} className="bg-gradient-to-r from-indigo-400 to-indigo-600 py-2 rounded-md mt-6 font-medium text-sm cursor-pointer" />
      </form>
    </div>
  )
}