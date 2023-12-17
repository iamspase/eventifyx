'use client'

export default function SearchInput({ value, setValue } : { value: string, setValue: any }): JSX.Element {
  return (
    <input onChange={(event) => setValue(event.target.value)} value={value} type="text" placeholder="Search for a event"
    className="py-2 w-full px-2 rounded-md bg-zinc-800 text-zinc-200 focus:ring-2 focus:ring-indigo-500 outline-none border-none"
    />
  )
}