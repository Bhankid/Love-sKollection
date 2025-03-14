"use client"

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingBag, Search, Menu, X } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { cn } from '@/lib/utils'
import { CartSheet } from './cart-sheet'
import { ThemeToggle } from './theme-toggle'
import { motion } from 'framer-motion'

const categories = [
  { name: 'Clothing', href: '/category/clothing' },
  { name: 'Wigs', href: '/category/wigs' },
  { name: 'Footwear', href: '/category/footwear' },
]

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Left Section - Mobile Menu & Logo */}
          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-6 pt-8">
                  {categories.map((category) => (
                    <Link
                      key={category.href}
                      href={category.href}
                      className="text-lg font-medium transition-colors hover:text-primary"
                    >
                      {category.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            
            <Link href="/" className="flex items-center space-x-3">
              <ShoppingBag className="h-8 w-8" />
              <span className="hidden text-xl font-bold sm:inline-block">
                Love'sKollection
              </span>
            </Link>
          </div>

          {/* Center Section - Desktop Navigation */}
          <nav className="hidden flex-1 lg:block">
            <ul className="flex justify-center space-x-12">
              {categories.map((category) => (
                <motion.li
                  key={category.href}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    href={category.href}
                    className="text-base font-medium transition-colors hover:text-primary"
                  >
                    {category.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Right Section - Search, Theme, Cart */}
          <div className="flex items-center gap-6">
          <div className="relative">
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10"
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        >
          {isSearchOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Search className="h-5 w-5" />
          )}
          <span className="sr-only">Toggle search</span>
        </Button>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isSearchOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={cn(
            "absolute right-0 top-[calc(100%+1rem)] w-[380px] rounded-xl border bg-background/95 p-6 shadow-2xl backdrop-blur-lg",
            !isSearchOpen && "hidden"
          )}
        >
          <div className="relative">
            <Input
              type="search"
              placeholder="Search products..."
              className="h-12 pl-12 pr-4 text-base rounded-xl bg-background border-input focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          </div>
          
          <div className="mt-4">
            <p className="text-sm text-muted-foreground mb-2">Popular Searches</p>
            <div className="flex flex-wrap gap-2">
              {[
                { name: 'Dresses', href: '/category/clothing/dresses' },
                { name: 'Shoes', href: '/category/footwear' },
                { name: 'Accessories', href: '/category/accessories' }
              ].map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className="px-3 py-1.5 text-sm bg-muted hover:bg-muted/80 rounded-full text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>   
            <ThemeToggle />
            <CartSheet />
          </div>
        </div>
      </div>
      
    </header>
  )
}
