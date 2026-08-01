'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, Minus, Plus, ShoppingCart, Trash2, Check } from 'lucide-react'
import { useCart } from '@/lib/cart'
import { PRODUCTS, BRAND } from '@/lib/data'
import { cn } from '@/lib/utils'

function getProductImage(id: string): string {
  const baseId = id.replace(/-1l$/, '')
  const p = PRODUCTS.find(p => p.id === baseId)
  return p?.bottleImage ?? ''
}

export default function CartDrawer() {
  const { items, open, setOpen, setQty, remove, clear, total, count } = useCart()
  const [customerName, setCustomerName] = useState('')
  const [customerPhone, setCustomerPhone] = useState('')
  const [orderSent, setOrderSent] = useState(false)

  const canCheckout = customerName.trim() !== '' && customerPhone.trim() !== ''

  const handleWhatsAppOrder = () => {
    if (!canCheckout) return
    const lines = items.map(
      item => `- ${item.qty}x ${item.name} (${(item.price * item.qty).toFixed(2)} €)`
    )
    const message = [
      'Bonjour, je souhaite commander :',
      ...lines,
      '',
      `Total : ${total.toFixed(2)} €`,
      '',
      `Nom et prénom : ${customerName.trim()}`,
      `Téléphone : ${customerPhone.trim()}`,
    ].join('\n')
    window.open(
      `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    )
    setOrderSent(true)
    clear()
    setCustomerName('')
    setCustomerPhone('')
  }

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    if (open) setOrderSent(false)
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

            {orderSent ? (
              /* Order confirmation */
              <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-16">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="w-16 h-16 rounded-full bg-gingembre-500/15 flex items-center justify-center mb-5"
                >
                  <Check className="w-8 h-8 text-gingembre-600" />
                </motion.div>
                <p className="font-display text-2xl font-semibold text-forest-800 mb-2">
                  Commande envoyée !
                </p>
                <p className="text-forest-600 text-sm max-w-xs mb-8">
                  Votre commande a été transmise via WhatsApp. Nous vous recontactons rapidement pour la confirmer.
                </p>
                <button
                  onClick={() => setOpen(false)}
                  className="btn-shine bg-forest-700 text-cream-100 px-7 py-3 rounded-full text-sm font-medium hover:bg-forest-600 transition-colors"
                >
                  Fermer
                </button>
              </div>
            ) : (
              <>
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
                      const imgSrc = item.id === 'pack' ? '/images/package.png' : getProductImage(item.id)
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
                                className="object-contain"
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
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-forest-500">Livraison</span>
                  <span className={cn('text-xs font-medium', total >= 40 ? 'text-gingembre-600' : 'text-forest-500')}>
                    {total >= 40 ? 'Offerte ✓' : `Dès 40 € d'achat`}
                  </span>
                </div>

                {/* Customer contact info */}
                <div className="space-y-2.5 mb-4">
                  <div>
                    <label htmlFor="customer-name" className="sr-only">
                      Nom et prénom
                    </label>
                    <input
                      id="customer-name"
                      type="text"
                      value={customerName}
                      onChange={e => setCustomerName(e.target.value)}
                      placeholder="Nom et prénom"
                      className="w-full text-sm bg-white border border-cream-300 rounded-xl px-4 py-2.5 text-forest-800 placeholder:text-forest-400 focus:outline-none focus:border-gold-500/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="customer-phone" className="sr-only">
                      Numéro de téléphone
                    </label>
                    <input
                      id="customer-phone"
                      type="tel"
                      value={customerPhone}
                      onChange={e => setCustomerPhone(e.target.value)}
                      placeholder="Numéro de téléphone"
                      className="w-full text-sm bg-white border border-cream-300 rounded-xl px-4 py-2.5 text-forest-800 placeholder:text-forest-400 focus:outline-none focus:border-gold-500/60 transition-colors"
                    />
                  </div>
                </div>

                <motion.button
                  onClick={handleWhatsAppOrder}
                  disabled={!canCheckout}
                  whileHover={canCheckout ? { scale: 1.02 } : undefined}
                  whileTap={canCheckout ? { scale: 0.97 } : undefined}
                  className={cn(
                    'btn-shine w-full flex items-center justify-center gap-2 text-white py-4 rounded-full font-semibold text-sm shadow-lg transition-colors mb-3',
                    canCheckout
                      ? 'bg-[#25D366] hover:bg-[#1ebe5a] shadow-green-500/25'
                      : 'bg-forest-700/30 shadow-none cursor-not-allowed'
                  )}
                  aria-label={`Commander via WhatsApp (${total.toFixed(2)} €)`}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Commander via WhatsApp ({total.toFixed(2)} €)
                </motion.button>

                <button
                  onClick={clear}
                  className="w-full text-xs text-forest-500 hover:text-red-400 transition-colors py-1"
                >
                  Vider le panier
                </button>
              </div>
            )}
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
