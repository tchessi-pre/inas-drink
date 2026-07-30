'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ShoppingCart, Award, Truck } from 'lucide-react'
import { PRODUCTS, PACK_PRICE, PACK_ORIGINAL_PRICE } from '@/lib/data'
import { useCart } from '@/lib/cart'

export default function DiscoveryPack() {
  const { add, setOpen } = useCart()

  const handleAdd = () => {
    add('pack', 'Pack Découverte (×4)', PACK_PRICE)
    setOpen(true)
  }

  return (
    <section
      id="pack"
      className="py-24 lg:py-36 relative overflow-hidden bg-forest-700"
      aria-label="Pack Découverte"
    >
      {/* Grain overlay */}
      <div className="absolute inset-0 bg-grain opacity-[0.06] pointer-events-none" aria-hidden />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Bottle grid ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* "Meilleure vente" badge */}
            <div className="absolute -top-4 -right-4 z-10">
              <motion.div
                animate={{ rotate: [0, 3, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="flex items-center gap-1.5 bg-gold-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg shadow-gold-500/30"
              >
                <Award className="w-3.5 h-3.5" />
                Meilleure vente
              </motion.div>
            </div>

            <div className="grid grid-cols-2 gap-4 p-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
              {PRODUCTS.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="relative aspect-[3/4] rounded-2xl overflow-hidden"
                >
                  <Image
                    src={product.bottleImage}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 40vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <p className="absolute bottom-2 left-2 right-2 text-center text-white text-xs font-medium leading-tight">
                    {product.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Info ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-cream-100"
          >
            <p className="text-gold-400 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Offre exclusive
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-light mb-4 leading-tight">
              Pack{' '}
              <span className="gold-text font-semibold">Découverte</span>
            </h2>
            <p className="text-cream-300 text-base leading-relaxed mb-8 max-w-md">
              Partez à la découverte des quatre saveurs authentiques d&rsquo;INA&rsquo;S DRINK
              dans un coffret soigneusement composé — le cadeau idéal ou votre initiation parfaite.
            </p>

            {/* Inclusions */}
            <ul className="space-y-2.5 mb-8">
              {PRODUCTS.map(p => (
                <li key={p.id} className="flex items-center gap-3 text-sm text-cream-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                  1× {p.name} ({p.volume})
                </li>
              ))}
            </ul>

            {/* Perks */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="flex items-center gap-1.5 text-xs font-medium text-cream-300 bg-white/10 px-3 py-1.5 rounded-full">
                <Truck className="w-3.5 h-3.5 text-gold-400" /> Livraison offerte dès 40€
              </span>
              <span className="flex items-center gap-1.5 text-xs font-medium text-cream-300 bg-white/10 px-3 py-1.5 rounded-full">
                <Award className="w-3.5 h-3.5 text-gold-400" /> 100 % naturel
              </span>
            </div>

            {/* Pricing + CTA */}
            <div className="flex items-end gap-4 mb-6">
              <div>
                <span className="block text-cream-400/60 text-sm line-through mb-0.5">
                  {PACK_ORIGINAL_PRICE.toFixed(2)} €
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-5xl font-semibold text-cream-100">
                    {PACK_PRICE.toFixed(2)}
                  </span>
                  <span className="text-cream-300 text-lg">€</span>
                </div>
              </div>
              <span className="mb-1 text-xs font-bold text-gold-400 bg-gold-500/15 px-3 py-1.5 rounded-full border border-gold-500/25">
                Économisez {(PACK_ORIGINAL_PRICE - PACK_PRICE).toFixed(2)} €
              </span>
            </div>

            <motion.button
              onClick={handleAdd}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="btn-shine flex items-center gap-3 bg-gold-500 hover:bg-gold-400 text-white px-10 py-4 rounded-full font-semibold text-base shadow-xl shadow-gold-500/30 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              Commander le pack
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
