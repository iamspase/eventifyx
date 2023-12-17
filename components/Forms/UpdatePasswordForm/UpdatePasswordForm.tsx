"use client"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const schema = yup.object({
  password: yup.string()
    .min(8, "Password must be at least 8 characters.")
    .max(64, "Password can not be longer than 64 characters.")
    .required("Required field."),
});

export default function UpdatePasswordForm(): JSX.Element {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const supabase = createClientComponentClient();
  const router = useRouter();
  const [error, setError] = useState<string>("");

  const searchParams = useSearchParams()
  const errorDescription = searchParams.get('error_description');

  let code = searchParams.get('code');

  console.log('code', code);
  

  const updatePassword = async (inputData: any) => {
    const { password } = inputData;

    const { error } = await supabase.auth.updateUser({
      password: password
    })

    if (error) {
      setError("Could not update password. Please try again.");
    }
    router.push('/');

  }

  return (
    <div className="mt-8 mb-4">
      {
        !code ? 
        <p className="text-red-400 text-lg">Email link is invalid or has expired</p>
        : <form onSubmit={handleSubmit(updatePassword)} className="flex flex-col">
          <label htmlFor="password" className="my-2 font-medium text-sm text-zinc-300">Password</label>
          <input {...register("password")} type="password" placeholder="Secret password" name="password" className="py-2 px-2 rounded-md bg-zinc-800 text-zinc-200 focus:ring-2 focus:ring-indigo-500 outline-none border-none" />
          <p className="text-red-400 font-medium text-sm mt-1">{errors.password?.message}</p>

          <p className="text-red-400 font-medium text-sm mt-3">{error}</p>

          <input type="submit" value={'Update Password'} className="bg-gradient-to-r from-indigo-400 to-indigo-600 py-2 rounded-md mt-6 font-medium text-sm cursor-pointer" />
        </form>
      }
    </div>
  )
}