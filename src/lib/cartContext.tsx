import { createContext, useContext, useState, ReactNode } from "react"

export interface CartItem {
  id: number
  name: string
  price: string
  priceNum: number
  category: string
  image: string
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addItem: (item: Omit<CartItem, "quantity">) => void
  removeItem: (id: number) => void
  updateQty: (id: number, qty: number) => void
  total: number
  count: number
  clear: () => void
}

const CartContext = createContext<CartContextType | null>(null)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([])

  const addItem = (item: Omit<CartItem, "quantity">) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === item.id)
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i)
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const removeItem = (id: number) => setItems(prev => prev.filter(i => i.id !== id))

  const updateQty = (id: number, qty: number) => {
    if (qty <= 0) { removeItem(id); return }
    setItems(prev => prev.map(i => i.id === id ? { ...i, quantity: qty } : i))
  }

  const total = items.reduce((sum, i) => sum + i.priceNum * i.quantity, 0)
  const count = items.reduce((sum, i) => sum + i.quantity, 0)

  const clear = () => setItems([])

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQty, total, count, clear }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}
