'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react'
import { useCart } from '@/lib/cart'
import { PRODUCTS, PACK_PRICE } from '@/lib/data'
import { cn } from '@/lib/utils'

function getProductImage(id: string): string {
  const p = PRODUCTS.find(p => p.id === id)
  return p?.ingredientImage ?? p?.bottleImage ?? ''
}

export default function CartDrawer() {
  const { items, open, setOpen, setQty, remove, clear, total, count } = useCart()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            onClick={() => setOpen(false)}
            aria-hidden
          />

          {/* Drawer */}
          <motion.aside
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 280 }}
            className="fixed inset-y-0 right-0 w-full max-w-md bg-cream-100 z-50 shadow-2xl flex flex-col"
            aria-label="Panier"
            role="dialog"
            aria-modal="true"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-cream-300 flex-shrink-0">
              <div className="flex items-center gap-3">
                <ShoppingCart className="w-5 h-5 text-forest-700" />
                <h2 className="font-display text-xl font-semibold text-forest-800">
                  Mon Panier
                </h2>
                {count > 0 && (
                  <span className="text-xs font-bold bg-gold-500 text-white px-2 py-0.5 rounded-full">
                    {count}
                  </span>
                )}
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-full hover:bg-forest-700/10 transition-colors"
                aria-label="Fermer le panier"
              >
                <X className="w-5 h-5 text-forest-700" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto scrollbar-hide px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-cream-300/60 flex items-center justify-center mb-4">
                    <ShoppingCart className="w-7 h-7 text-forest-400" />
                  </div>
                  <p className="font-display text-xl text-forest-700 mb-2">Votre panier est vide</p>
                  <p className="text-forest-500 text-sm">Ajoutez des produits pour commencer.</p>
                  <button
                    onClick={() => setOpen(false)}
                    className="mt-6 btn-shine bg-forest-700 text-cream-100 px-7 py-3 rounded-full text-sm font-medium hover:bg-forest-600 transition-colors"
                  >
                    Découvrir nos produits
                  </button>
                </div>
              ) : (
                <AnimatePresence initial={false}>
                  <ul className="space-y-3">
                    {items.map(item => {
                      const imgSrc = item.id !== 'pack' ? getProductImage(item.id) : ''
                      return (
                        <motion.li
                          key={item.id}
                          layout
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, x: 30, transition: { duration: 0.2 } }}
                          className="flex gap-4 bg-white rounded-2xl p-4 border border-cream-300/50 shadow-sm"
                        >
                          {/* Image */}
                          <div className="w-16 h-16 rounded-xl overflow-hidden bg-cream-200 flex-shrink-0 relative">
                            {imgSrc ? (
                              <Image
                                src={imgSrc}
                                alt={item.name}
                                fill
                                className="object-cover"
                                sizes="64px"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <ShoppingCart className="w-6 h-6 text-forest-400" />
                              </div>
                            )}
                          </div>

                          {/* Info */}
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-forest-800 text-sm truncate">{item.name}</p>
                            <p className="text-gold-600 font-semibold text-sm mt-0.5">
                              {(item.price * item.qty).toFixed(2)} €
                            </p>

                            {/* Qty controls */}
                            <div className="flex items-center gap-2 mt-2">
                              <button
                                onClick={() => setQty(item.id, item.qty - 1)}
                                className="w-7 h-7 rounded-full border border-cream-300 flex items-center justify-center hover:border-gold-500/50 transition-colors"
                                aria-label="Diminuer la quantité"
                              >
                                <Minus className="w-3 h-3 text-forest-700" />
                              </button>
                              <span className="text-sm font-semibold text-forest-800 w-5 text-center">
                                {item.qty}
                              </span>
                              <button
                                onClick={() => setQty(item.id, item.qty + 1)}
                                className="w-7 h-7 rounded-full border border-cream-300 flex items-center justify-center hover:border-gold-500/50 transition-colors"
                                aria-label="Augmenter la quantité"
                              >
                                <Plus className="w-3 h-3 text-forest-700" />
                              </button>
                            </div>
                          </div>

                          {/* Remove */}
                          <button
                            onClick={() => remove(item.id)}
                            className="p-1.5 rounded-lg hover:bg-red-50 hover:text-red-500 text-forest-400 transition-colors flex-shrink-0 self-start"
                            aria-label={`Supprimer ${item.name}`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </motion.li>
                      )
                    })}
                  </ul>
                </AnimatePresence>
              )}
            </div>

            {/* Footer: total + checkout */}
            {items.length > 0 && (
              <div className="flex-shrink-0 px-6 py-5 border-t border-cream-300 bg-white/50">
                {/* Subtotal */}
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm text-forest-600">Sous-total</span>
                  <span className="font-semibold text-forest-800">{total.toFixed(2)} €</span>
                </div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs text-forest-500">Livraison</span>
                  <span className={cn('text-xs font-medium', total >= 40 ? 'text-gingembre-600' : 'text-forest-500')}>
                    {total >= 40 ? 'Offerte ✓' : `Dès 40 € d'achat`}
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-shine w-full bg-forest-700 hover:bg-forest-600 text-cream-100 py-4 rounded-full font-semibold text-sm shadow-lg shadow-forest-700/20 transition-colors mb-3"
                >
                  Commander ({total.toFixed(2)} €)
                </motion.button>

                <button
                  onClick={clear}
                  className="w-full text-xs text-forest-500 hover:text-red-400 transition-colors py-1"
                >
                  Vider le panier
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
