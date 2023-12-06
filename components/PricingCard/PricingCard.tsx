import Link from "next/link";

interface PricingCardProps {
  name: string;
  price: string;
  features: string[];
}

export default function PricingCard({ name, price, features } : PricingCardProps) : JSX.Element {
  function getColor() {
    switch(name) {
      case 'Basic': return 'text-pink-500';
      case 'Premium': return 'text-indigo-500';
      case 'Enterprise': return 'text-sky-500';
    }
  }

  return (
    <div className="w-[80%] lg:w-[30%] m-4 lg:m-0 text-center py-8 bg-zinc-900/60 rounded-lg border-[1px] border-indigo-800/50 transition hover:scale-105">
      <p className={`${getColor()} font-bold uppercase text-sm`}>{name}</p>
      <h6 className="font-bold text-zinc-300 text-xl my-3">{price}</h6>

      <ul className="my-4">
        <li className="font-medium text-sm text-zinc-500 my-2">Lorem ipsum dolor sit.</li>
        <li className="font-medium text-sm text-zinc-500 my-2">Lorem ipsum dolor sit.</li>
        <li className="font-medium text-sm text-zinc-500 my-2">Lorem ipsum dolor sit.</li>
      </ul>

      <Link href={'/pricing'} className="bg-indigo-500 py-2 px-6 rounded-lg transition hover:bg-indigo-600 text-sm font-medium">
        Purchase
      </Link>
    </div>
  )
}