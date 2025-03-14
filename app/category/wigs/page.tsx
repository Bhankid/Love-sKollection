import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

const wigProducts = [
  {
    id: 1,
    name: "Natural Wave Wig",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    name: "Straight Long Wig",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    name: "Curly Bob Wig",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 4,
    name: "Bohemian Lace Wig",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 5,
    name: "Body Wave Hair Extensions",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1559563362-2229ddaebb25?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 6,
    name: "Luxury Blonde Wig",
    price: 229.99,
    image: "https://images.unsplash.com/photo-1605980776106-6bd6e065048f?auto=format&fit=crop&q=80&w=600"
  }
]

export default function WigsPage() {
  return (
    <div className="container py-12 mx-auto">
      {/* Wigs Category Banner */}
      <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
        <Image
          src="https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80&w=1200"
          alt="Wigs Collection"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1 className="text-4xl font-bold text-white">Discover Premium Wigs & Hair</h1>
        </div>
      </div>

      {/* Featured Wigs */}
      <section className="py-12">
        <h2 className="mb-8 text-3xl font-bold">Top Wigs & Hair Extensions</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {wigProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="relative aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-muted-foreground">${product.price}</p>
                <Button className="mt-4 w-full" asChild>
                  <Link href={`/product/${product.id}`}>View Details</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
