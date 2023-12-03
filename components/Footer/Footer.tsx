import Link from "next/link";
import Logo from "../Logo/Logo";
import { MdFacebook } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io5";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";


export default function Footer(): JSX.Element {
  return (
    <footer className="bg-zinc-950 border-t-[1px] border-t-zinc-900 mt-4">
      <div className="container py-6">
        <div className="">
          <div className="flex items-center justify-between flex-wrap">
            <div>
              <Logo />
              <p className="text-sm text-zinc-600 font-medium">Just a personal project made by <a href="https://www.github.com/iamspase" target="_blank" className="text-indigo-500 transition hover:text-indigo-400">iamspase</a></p>
            </div>
            <div className="socials">
              <h6 className="text-zinc-600 text-sm font-medium">Socials</h6>
              <ul className="flex items-center justify-between mt-2">
                <li>
                  <Link href={'https://www.facebook.com'} className="text-zinc-400 transition hover:text-indigo-500 text-2xl"><MdFacebook /></Link>
                </li>
                <li className="ml-2">
                  <Link href={'https://www.github.com/iamspase'} className="text-zinc-400 transition hover:text-indigo-500 text-2xl"><AiFillGithub /></Link>
                </li>
                <li className="ml-2">
                  <Link href={'https://www.twitter.com'} className="text-zinc-400 transition hover:text-indigo-500 text-2xl"><AiOutlineTwitter /></Link>
                </li>
                <li className="ml-2">
                  <Link href={'https://www.linkedin.com'} className="text-zinc-400 transition hover:text-indigo-500 text-2xl"><IoLogoLinkedin /></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}