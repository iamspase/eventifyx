"use client"

import { yupResolver } from '@hookform/resolvers/yup';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string()
    .min(4, "Name must be at least 4 characters.")
    .max(64, "Name cannot be any longer than 64 characters.")
    .required("Field required."),
  description: yup.string()
    .min(8, "Description must be at least 8 characters.")
    .max(128, "Description cannot be any longer than 128 characters.")
    .required("Field required."),
  location: yup.string()
    .min(3, "Location must be at least 3 characters.")
    .max(32, "Location cannot be any longer than 32 characters.")
    .required("Field required."),
  time: yup.string()
    .required("Field required."),
  price: yup.string()
    .required("Field required."),
  fullDescription: yup.string()
    .min(32, "Full description must be at least 32 characters.")
    .max(1000, "Full description cannot be any longer than 1000 characters.")
})

export default function CreateEventForm(): JSX.Element {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const [error, setError] = useState<string>("");
  const supabase = createClientComponentClient();
  const router = useRouter();
  
  const createEvent = async (inputData: any) => {
    const { name, description, location, time, price, fullDescription } = inputData;

    const user = (await supabase.auth.getUser()).data.user;
    const { data, error } = await supabase.from('UserData').select('').eq('id', user?.id);

    if(error) return;

    // @ts-ignore
    const tokens = data[0].tokens;

    if(tokens < 200) {
      setError("Not enough tokens, you need at least 200")
      return;
    }

    await supabase.from('UserData').update({
      tokens: tokens - 200
    }).eq('id', user!.id);

    const { data: eventData, error: eventError } = await supabase.from('Event').insert({
      name,
      description,
      location,
      time,
      price,
      fullDescription
    }).select();

    if(!eventError) {
      router.push(`/events/${eventData[0].id}`)
    }
    
  }

  return (
    <div className='mt-8'>
      <form onSubmit={handleSubmit(createEvent)} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className='flex flex-col'>
          <label htmlFor="name" className="my-2 font-medium text-sm text-zinc-300">Name</label>
          <input {...register("name")} type="text" placeholder="Programmer's Day" name="name" className="py-2 px-2 rounded-md bg-zinc-800 text-zinc-200 focus:ring-2 focus:ring-indigo-500 outline-none border-none" />
          <p className="text-red-400 font-medium text-sm mt-1">{errors.name?.message}</p>
        </div>

        <div className='flex flex-col'>
          <label htmlFor="location" className="my-2 font-medium text-sm text-zinc-300">Location</label>
          <input {...register("location")} type="text" placeholder="Germany, Berlin, Die lautest Strasse" name="location" className="py-2 px-2 rounded-md bg-zinc-800 text-zinc-200 focus:ring-2 focus:ring-indigo-500 outline-none border-none" />
          <p className="text-red-400 font-medium text-sm mt-1">{errors.location?.message}</p>
        </div>

        <div className='flex flex-col col-span-2'>
          <label htmlFor="description" className="my-2 font-medium text-sm text-zinc-300">Description</label>
          <input {...register("description")} type="text" placeholder="An event where programmers meet" name="description" className="py-2 px-2 rounded-md bg-zinc-800 text-zinc-200 focus:ring-2 focus:ring-indigo-500 outline-none border-none" />
          <p className="text-red-400 font-medium text-sm mt-1">{errors.description?.message}</p>
        </div>

        <div className='flex flex-col'>
          <label htmlFor="time" className="my-2 font-medium text-sm text-zinc-300">Time</label>
          <input {...register("time")} type="text" placeholder="12th September 19:00" name="time" className="py-2 px-2 rounded-md bg-zinc-800 text-zinc-200 focus:ring-2 focus:ring-indigo-500 outline-none border-none" />
          <p className="text-red-400 font-medium text-sm mt-1">{errors.time?.message}</p>
        </div>

        <div className='flex flex-col'>
          <label htmlFor="price" className="my-2 font-medium text-sm text-zinc-300">Ticket Price</label>
          <input {...register("price")} type="number" min={5} placeholder="5" defaultValue={5} name="price" className="py-2 px-2 rounded-md bg-zinc-800 text-zinc-200 focus:ring-2 focus:ring-indigo-500 outline-none border-none" />
          <p className="text-red-400 font-medium text-sm mt-1">{errors.price?.message}</p>
        </div>

        <div className="flex flex-col col-span-2">
          <label htmlFor="fullDescription" className="my-2 font-medium text-sm text-zinc-300">Full Description</label>
          <textarea {...register("fullDescription")} name="fullDescription" className="py-2 px-2 rounded-md bg-zinc-800 text-zinc-200 focus:ring-2 focus:ring-indigo-500 outline-none border-none" />
          <p className="text-red-400 font-medium text-sm mt-1">{errors.fullDescription?.message}</p>
        </div>

        <p className='text-red-400 font-medium text-sm mt-1'>{error ? error : ""}</p>

        <div className="mt-4 col-span-2">
          <Link href="/">
            <button className='bg-indigo-900/40 text-indigo-500 w-full p-2 rounded-md transition hover:scale-105'>Cancel</button>
          </Link>
          <button className='bg-indigo-500 text-white w-full p-2 rounded-md mt-3 transition hover:scale-105'>Procceed to payment</button>
      </div>
      </form>
    </div>
  )
}