'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

interface TokenCardProps {
  name: string;
  price: string;
  tokenAmount: number;
}

export default function TokenCard({ name, price, tokenAmount } : TokenCardProps) : JSX.Element {
  const router = useRouter();
  const supabase = createClientComponentClient();

  function getColor() {
    switch(name) {
      case 'Bag': return 'text-pink-500';
      case 'Bucket': return 'text-indigo-500';
      case 'Mountain': return 'text-sky-500';
    }
  }

  function getPriceId() {
    switch(name) {
      case 'Bag': return 'price_1ONzgVEebHhmO0USCYxT37i9';
      case 'Bucket': return 'price_1ONzguEebHhmO0USH0TyQY0a';
      case 'Mountain': return 'price_1ONzhGEebHhmO0USsWwPbeV7';
    }
  }

  async function handleClick() {
    const user = (await supabase.auth.getUser()).data.user;

    
    fetch('http://localhost:3000/api/checkout_session', {
      method: 'POST',
      body: JSON.stringify({ 
        priceId: getPriceId(),
        userId: user!.id
      })
    })
      .then(res => res.json())
      .then(data => {
        router.push(data.sessionUrl)
      })

  }

  return (
    <div className="w-full text-center py-8 bg-zinc-900/60 rounded-lg transition hover:scale-105">
      <h6 className={`${getColor()} font-bold uppercase text-sm`}>{name}</h6>
      <h6 className="font-bold text-lg text-indigo-300">{tokenAmount} Tokens</h6>
      <p className="font-bold text-zinc-300 text-xl my-3">{price}</p>

      <button onClick={handleClick} className="bg-indigo-500 py-2 px-6 rounded-lg transition hover:bg-indigo-600 text-sm font-medium">
        Purchase
      </button>
    </div>
  )
}