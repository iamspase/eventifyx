'use client'

import { useState } from "react";
import Logo from "../Logo/Logo";
import NavLink from "./NavLink/NavLink";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";

export default function Navbar() : JSX.Element {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <header className="bg-zinc-950 sticky top-0 border-b-[1px] border-b-zinc-900">
      <div className="container py-3 md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <Logo />
          <button className={`text-2xl text-zinc-200 transition hover:text-indigo-500 md:hidden`} onClick={() => setNavOpen(navOpen => !navOpen)}><FiMenu /></button>
        </div>

        <nav className={`py-3 md:py-0 ${navOpen ? 'block' : 'hidden md:block'}`}>
          <ul className="md:flex md:justify-between md:items-center md:w-96">
            <NavLink name="Home" path="/" />
            <NavLink name="Events" path="/events" />
            <NavLink name="Pricing" path="/pricing" />
            <NavLink name="Contact" path="/contact" />

            <Link href={"/auth/sign-in"}>
              <button className="bg-indigo-500 transition hover:bg-indigo-500 text-white py-2 md:py-1 w-full mt-3 md:mt-0 md:w-20 text-sm font-medium rounded-md">Sign in</button>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  )
}