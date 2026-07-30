'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import type { ProductId } from './data'

export interface CartItem {
  id: ProductId | 'pack'
  name: string
  price: number
  qty: number
}

interface CartContextValue {
  items: CartItem[]
  add: (id: ProductId | 'pack', name: string, price: number) => void
  setQty: (id: string, qty: number) => void
  remove: (id: string) => void
  clear: () => void
  count: number
  total: number
  open: boolean
  setOpen: (open: boolean) => void
}

const CartContext = createContext<CartContextValue | null>(null)
const STORAGE_KEY = 'inas-drink-cart'

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [open, setOpen] = useState(false)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setItems(JSON.parse(raw) as CartItem[])
    } catch {}
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {}
  }, [items, hydrated])

  const add = useCallback((id: ProductId | 'pack', name: string, price: number) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === id)
      if (existing) return prev.map(i => (i.id === id ? { ...i, qty: i.qty + 1 } : i))
      return [...prev, { id, name, price, qty: 1 }]
    })
  }, [])

  const setQty = useCallback((id: string, qty: number) => {
    setItems(prev =>
      qty <= 0 ? prev.filter(i => i.id !== id) : prev.map(i => (i.id === id ? { ...i, qty } : i))
    )
  }, [])

  const remove = useCallback((id: string) => setItems(prev => prev.filter(i => i.id !== id)), [])
  const clear = useCallback(() => setItems([]), [])

  const count = items.reduce((s, i) => s + i.qty, 0)
  const total = items.reduce((s, i) => s + i.qty * i.price, 0)

  return (
    <CartContext.Provider value={{ items, add, setQty, remove, clear, count, total, open, setOpen }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
