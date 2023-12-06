'use client'

import { useForm } from "react-hook-form"

export default function SignInForm() : JSX.Element {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  }

  return (
    <div className="mt-8 mb-4">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <label htmlFor="email" className="my-2 font-medium text-sm text-zinc-300">Email</label>
        <input {...register("email")} type="text" placeholder="john@smith.com" name="email" className="py-2 px-2 rounded-md bg-zinc-800 text-zinc-200 focus:ring-2 focus:ring-indigo-500 outline-none border-none"/>
        <p className="text-red-400 font-medium text-sm mt-1"></p>

        <label htmlFor="password" className="my-2 font-medium text-sm text-zinc-300">Password</label>
        <input {...register("password")} type="password" placeholder="Secret password" name="password" className="py-2 px-2 rounded-md bg-zinc-800 text-zinc-200 focus:ring-2 focus:ring-indigo-500 outline-none border-none"/>
        <p className="text-red-400 font-medium text-sm mt-1"></p>

        <input type="submit" value={'Sign in'} className="bg-gradient-to-r from-indigo-400 to-indigo-600 py-2 rounded-md mt-6 font-medium text-sm cursor-pointer" />
      </form>
    </div>
  )
}