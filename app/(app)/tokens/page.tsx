import TokenCard from "@/components/PricingCard/TokenCard";

export default async function TokensPage(): Promise<JSX.Element> {
  return (
    <main className="container py-12">
      <h1 className="text-zinc-300 text-xl font-bold">Buy tokens</h1>
      <p className="text-zinc-500 font-medium text-sm">Tokens can be used to buy event tickets.</p>
      
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <TokenCard name="Bag" price="$5.45" tokenAmount={50}/>
        <TokenCard name="Bucket" price="$15.89" tokenAmount={250}/>
        <TokenCard name="Mountain" price="$25.69" tokenAmount={500}/>
      </section>
    </main>
  )
}