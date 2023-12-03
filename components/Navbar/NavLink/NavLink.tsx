'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavLinksProps {
  path: string;
  name: string;
}

export default function NavLink({ path, name } : NavLinksProps) : JSX.Element {
  const pathname = usePathname();
  
  return (
    <li className="text-center text-zinc-300 text-sm transition hover:text-indigo-500 hover:bg-zinc-900 md:hover:bg-zinc-950 p-2 md:p-0 rounded-md font-medium">
      <Link href={path} className={`${path === pathname && 'text-indigo-500'}`}>{name}</Link>
    </li>
  )
}