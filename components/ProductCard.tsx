'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ShoppingCart, Check } from 'lucide-react'
import { useCart } from '@/lib/cart'
import type { Product } from '@/lib/data'
import { cn } from '@/lib/utils'

const accentConfig: Record<string, { badge: string; check: string; btn: string }> = {
  bissap: {
    badge: 'bg-bissap-700',
    check: 'text-bissap-600',
    btn: 'bg-bissap-600 hover:bg-bissap-700 shadow-bissap-600/25',
  },
  gingembre: {
    badge: 'bg-gingembre-700',
    check: 'text-gingembre-600',
    btn: 'bg-gingembre-600 hover:bg-gingembre-700 shadow-gingembre-600/25',
  },
  tamarin: {
    badge: 'bg-tamarin-700',
    check: 'text-tamarin-600',
    btn: 'bg-tamarin-600 hover:bg-tamarin-700 shadow-tamarin-600/25',
  },
  baobab: {
    badge: 'bg-baobab-700',
    check: 'text-baobab-700',
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
      whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
      className={cn(
        "relative bg-white rounded-2xl border border-cream-300/70 shadow-sm hover:shadow-lg transition-shadow p-5",
        "flex flex-col h-full min-h-[420px]"
      )}
      aria-label={product.name}
    >
      <span
        className={cn(
          'self-start text-[10px] font-bold uppercase tracking-wide text-white px-2.5 py-1 rounded-md mb-3',
          accent.badge
        )}
      >
        Nouveau
      </span>

      {/* Ce bloc prend tout l'espace disponible et pousse le bouton en bas */}
      <div className="flex gap-4 flex-1">
        {/* Image avec dimensions explicites pour éviter les déformations */}
        <div className="relative w-20 sm:w-24 aspect-[3/4] shrink-0">
          <Image
            src={product.bottleImage}
            alt={product.name}
            fill
            className="object-contain object-bottom"
            sizes="120px"
          />
        </div>

        {/* Colonne texte : le prix reste en bas grâce à mt-auto */}
        <div className="flex-1 flex flex-col min-w-0">
          <h3 className="text-sm font-bold text-forest-900 leading-tight uppercase">
            {product.name}
          </h3>
          <p className="text-xs text-forest-600 leading-snug mt-1">{product.description}</p>

          <ul className="mt-3 space-y-1.5" aria-label="Bienfaits">
            {product.benefits.map(benefit => (
              <li key={benefit} className="flex items-center gap-2 text-xs text-forest-700">
                <Check className={cn('w-3.5 h-3.5 shrink-0', accent.check)} />
                {benefit}
              </li>
            ))}
          </ul>

          {/* Prix poussé en bas de la colonne */}
          <div className="mt-auto pt-3 flex justify-end">
            <div className="flex flex-col items-center justify-center w-16 h-16 rounded-full bg-cream-300 shrink-0 shadow-sm">
              <span className="text-sm font-bold text-forest-900 leading-none">
                {product.price.toFixed(2)}€
              </span>
              <div className="w-6 h-px mt-1 bg-gold-400 my-0.5"></div>
              <span className="text-[10px] text-forest-500 font-bold">{product.volume}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton toujours en bas de la carte */}
      <motion.button
        onClick={handleAdd}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.96 }}
        className={cn(
          'btn-shine mt-4 w-full flex items-center justify-center gap-2 text-white text-xs font-bold uppercase tracking-wide py-3 rounded-full shadow-lg transition-colors',
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
              <ShoppingCart className="w-4 h-4" /> Ajouter au panier
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.article>
  )
}