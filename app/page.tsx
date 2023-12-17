import FeatureCard from "@/components/FeatureCard/FeatureCard";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function Home() {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  let user = (await supabase.auth.getUser()).data.user;

  return (
    <>
      <Navbar user={user}/>

      <main>
        {/* Hero section */}
        <section className="container py-56 overflow-hidden">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-zinc-200">The world's <b className="text-transparent bg-clip-text bg-gradient-to-tr from-indigo-400 to-blue-600">leading</b> event hosting platform</h1>
          <p className="mt-4 text-zinc-400 font-medium">Whether you are an invidual, startup or a big company, you can easily host your events and track all of it's activity</p>
          <div className="flex items-center justify-start flex-wrap mt-12">
            <Link href={'/events'}>
              <button className="py-2 px-6 rounded-lg font-medium bg-white text-indigo-500 transition hover:scale-105">Explore events</button>
            </Link>
            <p className="font-bold mx-4 text-sm text-zinc-400">OR</p>
            <Link href={user ? '/events/create' : '/auth/sign-in'}>
              <button className="py-2 px-6 rounded-lg font-medium text-white bg-indigo-500 transition hover:scale-105">Create your own</button>
            </Link>
          </div>
        </section>

        {/* Features section */}
        <section className="container my-36">
          <div className="features grid grid-cols-2 gap-8">
            <div className="col-span-2">
              <FeatureCard title="" description="" />
            </div>
            <FeatureCard title="" description="" />
            <FeatureCard title="" description="" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
