import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface CartItem {
  id: number
  name: string
  price: number
  image: string
  quantity: number
}

interface CartStore {
  items: CartItem[]
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
  total: number
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      total: 0,
      addItem: (item) => {
        const items = get().items
        const existingItem = items.find((i) => i.id === item.id)
        
        if (existingItem) {
          set({
            items: items.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            ),
            total: get().total + item.price
          })
        } else {
          set({
            items: [...items, { ...item, quantity: 1 }],
            total: get().total + item.price
          })
        }
      },
      removeItem: (id) => {
        const items = get().items
        const item = items.find((i) => i.id === id)
        if (item) {
          set({
            items: items.filter((i) => i.id !== id),
            total: get().total - (item.price * item.quantity)
          })
        }
      },
      updateQuantity: (id, quantity) => {
        const items = get().items
        const item = items.find((i) => i.id === id)
        if (item) {
          const priceDiff = (quantity - item.quantity) * item.price
          set({
            items: items.map((i) =>
              i.id === id ? { ...i, quantity } : i
            ),
            total: get().total + priceDiff
          })
        }
      },
      clearCart: () => set({ items: [], total: 0 }),
    }),
    {
      name: 'cart-storage',
    }
  )
)