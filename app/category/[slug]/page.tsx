// import { notFound } from "next/navigation"
// import Image from "next/image"
// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"

// // This would typically come from a database
// const categoryData = {
//   clothing: {
//     title: "Clothing",
//     description: "Discover the latest fashion trends",
//     products: [
//       {
//         id: 1,
//         name: "Summer Collection Dress",
//         price: 89.99,
//         image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600"
//       },
//       {
//         id: 2,
//         name: "Casual Linen Shirt",
//         price: 59.99,
//         image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=600"
//       },
//       {
//         id: 3,
//         name: "Designer Blazer",
//         price: 149.99,
//         image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=600"
//       }
//     ]
//   },
//   wigs: {
//     title: "Wigs",
//     description: "Premium quality wigs for every style",
//     products: [
//       {
//         id: 4,
//         name: "Natural Wave Wig",
//         price: 199.99,
//         image: "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?auto=format&fit=crop&q=80&w=600"
//       },
//       {
//         id: 5,
//         name: "Straight Long Wig",
//         price: 179.99,
//         image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=600"
//       },
//       {
//         id: 6,
//         name: "Curly Bob Wig",
//         price: 159.99,
//         image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80&w=600"
//       }
//     ]
//   },
//   footwear: {
//     title: "Footwear",
//     description: "Step out in style with our footwear collection",
//     products: [
//       {
//         id: 7,
//         name: "Designer Heels",
//         price: 129.99,
//         image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=600"
//       },
//       {
//         id: 8,
//         name: "Comfort Sneakers",
//         price: 89.99,
//         image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=600"
//       },
//       {
//         id: 9,
//         name: "Classic Boots",
//         price: 159.99,
//         image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&q=80&w=600"
//       }
//     ]
//   }
// } as const

// type CategorySlug = keyof typeof categoryData

// export async function generateStaticParams(): Promise<{ slug: CategorySlug }[]> {
//   return Object.keys(categoryData).map((slug) => ({
//     slug: slug as CategorySlug,
//   }))
// }

// interface CategoryPageProps {
//   params: {
//     slug: CategorySlug
//   }
// }

// export default function CategoryPage({ params }: CategoryPageProps) {
//   const category = categoryData[params.slug]

//   if (!category) {
//     notFound()
//   }

//   return (
//     <div className="container py-8 mx-auto">
//       <div className="mb-8">
//         <h1 className="text-4xl font-bold">{category.title}</h1>
//         <p className="mt-2 text-lg text-muted-foreground">{category.description}</p>
//       </div>

//       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {category.products.map((product) => (
//           <Card key={product.id} className="overflow-hidden">
//             <div className="relative aspect-square">
//               <Image
//                 src={product.image}
//                 alt={product.name}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <CardContent className="p-4">
//               <h3 className="text-lg font-semibold">{product.name}</h3>
//               <p className="text-sm text-muted-foreground">${product.price}</p>
//               <Button className="mt-4 w-full" asChild>
//                 <Link href={`/product/${product.id}`}>View Details</Link>
//               </Button>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   )
// }

import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Mock database data
const categoryData = {
  clothing: {
    title: "Clothing",
    description: "Discover the latest fashion trends",
    products: [
      {
        id: 1,
        name: "Summer Collection Dress",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600"
      },
      {
        id: 2,
        name: "Casual Linen Shirt",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=600"
      },
      {
        id: 3,
        name: "Designer Blazer",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=600"
      }
    ]
  },
  wigs: {
    title: "Wigs",
    description: "Premium quality wigs for every style",
    products: [
      {
        id: 4,
        name: "Natural Wave Wig",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?auto=format&fit=crop&q=80&w=600"
      },
      {
        id: 5,
        name: "Straight Long Wig",
        price: 179.99,
        image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=600"
      },
      {
        id: 6,
        name: "Curly Bob Wig",
        price: 159.99,
        image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80&w=600"
      }
    ]
  },
  footwear: {
    title: "Footwear",
    description: "Step out in style with our footwear collection",
    products: [
      {
        id: 7,
        name: "Designer Heels",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=600"
      },
      {
        id: 8,
        name: "Comfort Sneakers",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=600"
      },
      {
        id: 9,
        name: "Classic Boots",
        price: 159.99,
        image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&q=80&w=600"
      }
    ]
  }
} as const

type CategorySlug = keyof typeof categoryData

export function generateStaticParams(): { slug: CategorySlug }[] {
  return Object.keys(categoryData).map((slug) => ({
    slug: slug as CategorySlug,
  }))
}

interface CategoryPageProps {
  params: { slug: CategorySlug }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categoryData[params.slug]

  if (!category) {
    return notFound()
  }

  return (
    <div className="container py-8 mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">{category.title}</h1>
        <p className="mt-2 text-lg text-muted-foreground">{category.description}</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {category.products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <div className="relative aspect-square">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
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
    </div>
  )
}
