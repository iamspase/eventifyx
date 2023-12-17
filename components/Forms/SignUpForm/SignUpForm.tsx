'use client'

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

const schema = yup.object({
  username: yup.string()
    .min(3, "Username must be at least 3 characters.")
    .max(16, "Username can not be longer than 16 characters.")
    .required("Required field."),
  email: yup.string()
    .min(6, "Email must be at least 6 characters.")
    .max(32, "Email can not be longer than 32 characters.")
    .email("Field must contain a valid email.")
    .required("Required field."),
  password: yup.string()
    .min(8, "Password must be at least 8 characters.")
    .max(64, "Password can not be longer than 64 characters.")
    .required("Required field.")
});

export default function SignUpForm() : JSX.Element {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const [error, setError] = useState<string>("");
  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleSignUp = async (inputs : {
    email: string,
    username: string,
    password: string
  }) => {
    const { email, username, password } = inputs;

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      }
    });

    await supabase.from('UserData').insert({
      username,
    });

    if(error) {
      console.log(error);
      setError("User already registered.");
      return;
    }

    router.push("/");
  }

  return (
    <div className="mt-8 mb-4">
      <form onSubmit={handleSubmit(handleSignUp)} className="flex flex-col">
        <label htmlFor="username" className="my-2 font-medium text-sm text-zinc-300">Username</label>
        <input {...register("username")} type="text" placeholder="johnsmith" name="username" className="py-2 px-2 rounded-md bg-zinc-800 text-zinc-200 focus:ring-2 focus:ring-indigo-500 outline-none border-none"/>
        <p className="text-red-400 font-medium text-sm mt-1">{errors.username?.message}</p>
        
        <label htmlFor="email" className="my-2 font-medium text-sm text-zinc-300">Email</label>
        <input {...register("email")} type="text" placeholder="john@smith.com" name="email" className="py-2 px-2 rounded-md bg-zinc-800 text-zinc-200 focus:ring-2 focus:ring-indigo-500 outline-none border-none"/>
        <p className="text-red-400 font-medium text-sm mt-1">{errors.email?.message}</p>

        <label htmlFor="password" className="my-2 font-medium text-sm text-zinc-300">Password</label>
        <input {...register("password")} type="password" placeholder="Secret password" name="password" className="py-2 px-2 rounded-md bg-zinc-800 text-zinc-200 focus:ring-2 focus:ring-indigo-500 outline-none border-none"/>
        <p className="text-red-400 font-medium text-sm mt-1">{errors.password?.message}</p>

        <label htmlFor="confirmPassword" className="my-2 font-medium text-sm text-zinc-300">Confirm Password</label>
        <input type="password" placeholder="Confirm your secret password" name="confirmPassword" className="py-2 px-2 rounded-md bg-zinc-800 text-zinc-200 focus:ring-2 focus:ring-indigo-500 outline-none border-none"/>
        <p className="text-red-400 font-medium text-sm mt-1"></p>

        <p className="my-3 text-red-400 font-medium text-sm">{error}</p>

        <input type="submit" value={'Sign up'} className="bg-gradient-to-r from-indigo-400 to-indigo-600 py-2 rounded-md mt-6 font-medium text-sm cursor-pointer" />
      </form>
    </div>
  )
}