import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

const clothingProducts = [
  {
    id: 1,
    name: "Summer Collection Dress",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    name: "Elegant Evening Gown",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    name: "Casual Linen Shirt",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 4,
    name: "Designer Blazer",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 5,
    name: "Bohemian Maxi Dress",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1503342394128-c104d54dba07?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 6,
    name: "Classic Denim Jacket",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1617634667030-e157d6be0cdd?auto=format&fit=crop&q=80&w=600"
  }
]

export default function ClothingPage() {
  return (
    <div className="container py-12 mx-auto">
      {/* Clothing Category Banner */}
      <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
        <Image
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=1200"
          alt="Clothing Collection"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <h1 className="text-4xl font-bold text-white">Explore Our Clothing Collection</h1>
        </div>
      </div>

      {/* Featured Clothing Products */}
      <section className="py-12">
        <h2 className="mb-8 text-3xl font-bold">Trending Outfits</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clothingProducts.map((product) => (
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
