'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ShoppingCart, Check, Droplets } from 'lucide-react'
import { useCart } from '@/lib/cart'
import type { Product } from '@/lib/data'
import { cn } from '@/lib/utils'

const accentConfig: Record<string, { bg: string; border: string; badge: string; btn: string }> = {
  bissap: {
    bg: 'from-bissap-500/12 via-bissap-500/6 to-transparent',
    border: 'border-bissap-500/20',
    badge: 'bg-bissap-500/10 text-bissap-600',
    btn: 'bg-bissap-500 hover:bg-bissap-600 shadow-bissap-500/25',
  },
  gingembre: {
    bg: 'from-gingembre-500/12 via-gingembre-500/6 to-transparent',
    border: 'border-gingembre-500/20',
    badge: 'bg-gingembre-500/10 text-gingembre-600',
    btn: 'bg-gingembre-500 hover:bg-gingembre-600 shadow-gingembre-500/25',
  },
  tamarin: {
    bg: 'from-tamarin-500/12 via-tamarin-500/6 to-transparent',
    border: 'border-tamarin-500/20',
    badge: 'bg-tamarin-500/10 text-tamarin-600',
    btn: 'bg-tamarin-500 hover:bg-tamarin-600 shadow-tamarin-500/25',
  },
  baobab: {
    bg: 'from-baobab-500/18 via-baobab-500/8 to-transparent',
    border: 'border-baobab-600/20',
    badge: 'bg-baobab-600/10 text-baobab-700',
    btn: 'bg-baobab-600 hover:bg-baobab-700 shadow-baobab-600/25',
  },
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { add, setOpen } = useCart()
  const [added, setAdded] = useState(false)
  const accent = accentConfig[product.colorKey]

  const handleAdd = () => {
    add(product.id, product.name, product.price)
    setAdded(true)
    setOpen(true)
    setTimeout(() => setAdded(false), 2200)
  }

  return (
    <motion.article
      whileHover={{ y: -8, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }}
      className={cn(
        'group relative bg-white rounded-3xl overflow-hidden border shadow-sm hover:shadow-xl transition-shadow flex flex-col',
        accent.border
      )}
      aria-label={product.name}
    >
      {/* Image area */}
      <div className={cn('relative h-64 sm:h-72 bg-gradient-to-b overflow-hidden', accent.bg)}>
        <motion.div
          whileHover={{ scale: 1.06, y: -6 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-full w-full"
        >
          <Image
            src={product.bottleImage}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </motion.div>

        {/* Volume badge */}
        <div className={cn('absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm', accent.badge)}>
          {product.volume}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="mb-4">
          <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gold-600 mb-1">
            {product.subtitle}
          </p>
          <h3 className="font-display text-2xl font-semibold text-forest-800 mb-2">
            {product.name}
          </h3>
          <p className="text-forest-600 text-sm leading-relaxed">{product.description}</p>
        </div>

        {/* Benefits */}
        <ul className="space-y-1.5 mb-6 flex-1" aria-label="Bienfaits">
          {product.benefits.map(benefit => (
            <li key={benefit} className="flex items-center gap-2 text-sm text-forest-700">
              <Droplets className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" />
              {benefit}
            </li>
          ))}
        </ul>

        {/* Footer: price + CTA */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-cream-300/60">
          <div>
            <span className="font-display text-3xl font-semibold text-forest-800">
              {product.price.toFixed(2)}
            </span>
            <span className="text-forest-500 text-sm ml-1">€</span>
          </div>

          <motion.button
            onClick={handleAdd}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              'btn-shine flex items-center gap-2 text-white text-sm font-medium px-5 py-2.5 rounded-full shadow-lg transition-colors',
              accent.btn
            )}
            aria-label={`Ajouter ${product.name} au panier`}
          >
            <AnimatePresence mode="wait" initial={false}>
              {added ? (
                <motion.span
                  key="check"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="flex items-center gap-2"
                >
                  <Check className="w-4 h-4" /> Ajouté
                </motion.span>
              ) : (
                <motion.span
                  key="cart"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="flex items-center gap-2"
                >
                  <ShoppingCart className="w-4 h-4" /> Ajouter
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </motion.article>
  )
}
