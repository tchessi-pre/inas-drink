'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ShoppingCart, Package, Leaf } from 'lucide-react'
import { PACK_PRICE, PACK_ORIGINAL_PRICE } from '@/lib/data'
import { useCart } from '@/lib/cart'

const perks = [
  {
    icon: Package,
    title: 'Livraison rapide',
    text: 'Partout en France et en Europe',
  },
  {
    icon: Leaf,
    title: 'Emballage écologique',
    text: 'Nous prenons soin de la planète',
  },
]

export default function DiscoveryPack() {
  const { add, setOpen } = useCart()

  const handleAdd = () => {
    add('pack', 'Pack Découverte (×4)', PACK_PRICE)
    setOpen(true)
  }

  return (
    <section id="pack" className="py-16 lg:py-20 bg-cream-100 relative" aria-label="Pack Découverte">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-3xl border border-cream-300/70 shadow-sm p-6 lg:p-8"
        >
          <div className="grid lg:grid-cols-[220px_1fr_auto] gap-8 items-center">

            {/* ── Image ── */}
            <div className="relative aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden bg-cream-100">
              <Image
                src="/images/package.png"
                alt="Pack Découverte : Bissap, Tamarin, Gingembre, Baobab"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 80vw, 220px"
              />
            </div>

            {/* ── Info ── */}
            <div>
              <h3 className="font-display text-2xl lg:text-3xl font-bold text-forest-900">
                Pack Découverte
              </h3>
              <p className="text-gold-600 font-bold text-xs tracking-[0.15em] uppercase mt-1.5">
                4 saveurs, 4 bienfaits
              </p>
              <p className="text-forest-600 text-sm leading-relaxed mt-3 max-w-md">
                Découvrez nos 4 boissons naturelles et profitez d&rsquo;un prix spécial.
              </p>

              <div className="flex items-center flex-wrap gap-3 mt-5">
                <span className="text-forest-400 line-through text-sm">
                  {PACK_ORIGINAL_PRICE.toFixed(2)}€
                </span>
                <span className="flex items-center justify-center px-4 h-11 rounded-full bg-gold-500 text-white font-display font-bold text-lg">
                  {PACK_PRICE.toFixed(2)}€
                </span>
                <span className="text-forest-500 text-sm">Le pack de 4 x 50cl</span>
              </div>

              <motion.button
                onClick={handleAdd}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-shine mt-5 inline-flex items-center gap-2 bg-forest-700 hover:bg-forest-800 text-white px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wide shadow-lg shadow-forest-700/25 transition-colors"
              >
                <ShoppingCart className="w-4 h-4" />
                Ajouter au panier
              </motion.button>
            </div>

            {/* ── Perks ── */}
            <div className="flex sm:flex-row lg:flex-col gap-6 lg:gap-6 pt-6 lg:pt-0 lg:pl-8 border-t lg:border-t-0 lg:border-l border-cream-300">
              {perks.map(perk => (
                <div key={perk.title} className="flex items-center gap-3">
                  <div className="shrink-0 w-11 h-11 rounded-full border border-forest-700/25 flex items-center justify-center">
                    <perk.icon className="w-[18px] h-[18px] text-forest-700" />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-wide text-forest-800 uppercase">
                      {perk.title}
                    </p>
                    <p className="text-xs text-forest-500 leading-snug mt-0.5">{perk.text}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
