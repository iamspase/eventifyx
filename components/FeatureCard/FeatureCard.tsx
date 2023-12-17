interface FeatureCardProps {
  title: string;
  description: string;
  link?: string;
}

export default function FeatureCard({ title, description, link } : FeatureCardProps) : JSX.Element {
  return (
    <div className="p-6 bg-zinc-900/60 rounded-lg col-span-2 md:col-span-1 transition hover:scale-105">
      <h3 className="font-bold text-zinc-400 text-xl">Lorem, ipsum dolor.</h3>
      <p className="text-zinc-600 font-medium mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia commodi cumque quibusdam animi ipsum, ipsa qui molestias modi at sit veritatis quam labore asperiores sint ullam neque! Perferendis, quaerat quas.</p>
    </div>
  )
}