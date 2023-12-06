import FeatureCard from "@/components/FeatureCard/FeatureCard";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import PricingCard from "@/components/PricingCard/PricingCard";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero section */}
        <section className="container text-center py-56">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-zinc-200">The world's <b className="text-transparent bg-clip-text bg-gradient-to-tr from-indigo-400 to-blue-600">leading</b> event hosting platform</h1>
          <p className="mt-4 text-zinc-400 font-medium">Whether you are an invidual, startup or a big company, you can easily host your events and track all of it's activity</p>
          <div className="flex items-center justify-center flex-wrap mt-12">
            <Link href={'/events'}>
              <button className="py-2 px-6 rounded-lg font-medium bg-white text-indigo-500 transition hover:scale-105">Explore events</button>
            </Link>
            <p className="font-bold mx-4 text-sm text-zinc-400">OR</p>
            <Link href={'/auth/sign-in'}>
              <button className="py-2 px-6 rounded-lg font-medium text-white bg-indigo-500 transition hover:scale-105">Create your own</button>
            </Link>
          </div>
          <div className="light hidden md:block animate-pulse absolute top-56 left-[30%] -z-10 bg-indigo-500 h-80 w-96 opacity-40 rounded-full blur-[100px]"></div>
          <div className="light hidden md:block animate-pulse absolute top-48 md:left-[30%] lg:left-[60%] -z-10 bg-blue-500 h-60 w-96 opacity-40 rounded-full blur-[100px]"></div>
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

        {/* Pricing section */}
        <section className="container my-24">
          <div className="flex flex-col items-center justify-center md:justify-between lg:flex-row">
            <PricingCard name="Basic" price="40.2$" features={['']} />
            <PricingCard name="Premium" price="89.7$" features={['']} />
            <PricingCard name="Enterprise" price="Contact us" features={['']} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
