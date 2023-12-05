'use client'

export default function SignUpForm() : JSX.Element {
  return (
    <div className="mt-8 mb-4">
      <form className="flex flex-col">
        <label htmlFor="username" className="my-2 font-medium text-sm text-zinc-300">Username</label>
        <input type="text" placeholder="johnsmith" name="username" className="py-2 px-2 rounded-md bg-zinc-800 text-zinc-200 focus:ring-2 focus:ring-indigo-500 outline-none border-none"/>
        <p className="text-red-400 font-medium text-sm mt-1"></p>
        
        <label htmlFor="email" className="my-2 font-medium text-sm text-zinc-300">Email</label>
        <input type="text" placeholder="john@smith.com" name="email" className="py-2 px-2 rounded-md bg-zinc-800 text-zinc-200 focus:ring-2 focus:ring-indigo-500 outline-none border-none"/>
        <p className="text-red-400 font-medium text-sm mt-1"></p>

        <label htmlFor="password" className="my-2 font-medium text-sm text-zinc-300">Password</label>
        <input type="password" placeholder="Secret password" name="password" className="py-2 px-2 rounded-md bg-zinc-800 text-zinc-200 focus:ring-2 focus:ring-indigo-500 outline-none border-none"/>
        <p className="text-red-400 font-medium text-sm mt-1"></p>

        <label htmlFor="confirmPassword" className="my-2 font-medium text-sm text-zinc-300">Confirm Password</label>
        <input type="password" placeholder="Confirm your secret password" name="confirmPassword" className="py-2 px-2 rounded-md bg-zinc-800 text-zinc-200 focus:ring-2 focus:ring-indigo-500 outline-none border-none"/>
        <p className="text-red-400 font-medium text-sm mt-1"></p>

        <input type="submit" value={'Sign up'} className="bg-gradient-to-r from-indigo-400 to-indigo-600 py-2 rounded-md mt-6 font-medium text-sm cursor-pointer" />
      </form>
    </div>
  )
}