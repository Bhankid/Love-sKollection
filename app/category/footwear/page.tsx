import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

const footwearProducts = [
  {
  id: 1,
  name: "Designer Heels",
  price: 129.99,
  image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=600"
},
  {
    id: 2,
    name: "Comfort Sneakers",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    name: "Classic Boots",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 4,
    name: "Elegant Stilettos",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1559563361-fb9e2e0c76c6?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 5,
    name: "Casual Loafers",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1586363119846-5a61ae4a9f18?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 6,
    name: "Sporty Running Shoes",
    price: 109.99,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=600"
  }
]

export default function FootwearPage() {
  return (
    <div className="container py-12 mx-auto">
      {/* Footwear Category Banner */}
      <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
        <Image
            src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1200"
            alt="Footwear Collection"
            fill
            className="object-cover"
            />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1 className="text-4xl font-bold text-white">Step into Style & Comfort</h1>
        </div>
      </div>

      {/* Featured Footwear */}
      <section className="py-12">
        <h2 className="mb-8 text-3xl font-bold">Best Footwear Collection</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {footwearProducts.map((product) => (
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
                <p className="text-sm text-muted-foreground">₵{product.price}</p>
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
