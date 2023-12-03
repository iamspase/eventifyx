import Link from "next/link";

export default function Logo() : JSX.Element {
  return (
    <Link href={"/"} className="text-zinc-200 font-bold text-xl">Eventifyx<span className="text-indigo-500">.</span></Link>
  )
}