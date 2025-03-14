import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { HeroCarousel } from "@/components/hero-carousel"

const featuredProducts = [
  {
    id: 1,
    name: "Summer Collection Dress",
    price: 89.99,
    category: "clothing",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    name: "Natural Wave Wig",
    price: 199.99,
    category: "wigs",
    image: "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    name: "Designer Heels",
    price: 129.99,
    category: "footwear",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 4,
    name: "Elegant Evening Gown",
    price: 299.99,
    category: "clothing",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 5,
    name: "Bohemian Lace Wig",
    price: 189.99,
    category: "wigs",
    image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 6,
    name: "Leather Ankle Boots",
    price: 159.99,
    category: "footwear",
    image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&q=80&w=600"
  }
]

export default function Home() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <HeroCarousel />

      {/* Categories Section */}
      <section className="container py-12">
        <h2 className="mb-8 text-3xl font-bold">Shop by Category</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Link href="/category/clothing" className="group relative h-[300px] overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=600"
              alt="Clothing"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <div className="absolute bottom-4 left-4">
                <h3 className="text-2xl font-bold text-white">Clothing</h3>
                <p className="text-white/90">Latest trends & styles</p>
              </div>
            </div>
          </Link>
          <Link href="/category/wigs" className="group relative h-[300px] overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80&w=600"
              alt="Wigs"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <div className="absolute bottom-4 left-4">
                <h3 className="text-2xl font-bold text-white">Wigs</h3>
                <p className="text-white/90">Premium quality hair</p>
              </div>
            </div>
          </Link>
          <Link href="/category/footwear" className="group relative h-[300px] overflow-hidden rounded-lg sm:col-span-2 lg:col-span-1">
            <Image
              src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=600"
              alt="Footwear"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <div className="absolute bottom-4 left-4">
                <h3 className="text-2xl font-bold text-white">Footwear</h3>
                <p className="text-white/90">Comfort meets style</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container py-12">
        <h2 className="mb-8 text-3xl font-bold">Featured Products</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="relative aspect-square overflow-hidden">
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