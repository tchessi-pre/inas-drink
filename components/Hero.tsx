'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Star } from 'lucide-react'
import { PRODUCTS } from '@/lib/data'
import { cn } from '@/lib/utils'

const floatConfig = [
  { delay: 0, duration: 6, y: [-16, 0] },
  { delay: 1.4, duration: 7, y: [-12, 4] },
  { delay: 0.7, duration: 5.5, y: [-20, 0] },
  { delay: 2, duration: 6.5, y: [-14, 2] },
]

const productAccents: Record<string, string> = {
  bissap: 'from-bissap-500/15 to-bissap-500/5 border-bissap-500/20',
  gingembre: 'from-gingembre-500/15 to-gingembre-500/5 border-gingembre-500/20',
  tamarin: 'from-tamarin-500/15 to-tamarin-500/5 border-tamarin-500/20',
  baobab: 'from-baobab-500/20 to-baobab-500/8 border-baobab-500/25',
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const textY = useTransform(scrollYProgress, [0, 1], [0, 50])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-cream-100"
      aria-label="Bienvenue sur INA'S DRINK"
    >
      {/* Grain overlay */}
      <div className="absolute inset-0 bg-grain opacity-[0.035] pointer-events-none" aria-hidden />

      {/* Decorative leaf shapes */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none" aria-hidden>
        <svg
          className="absolute -top-8 -right-8 w-96 h-96 text-forest-700 opacity-[0.04] rotate-12"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <path d="M100,10 C60,10 20,50 20,100 C20,140 50,175 90,188 C85,160 90,135 110,120 C125,108 145,108 155,95 C168,78 165,55 150,42 C135,68 118,78 100,90 C82,78 65,68 50,42 C35,55 32,78 45,95" />
        </svg>
        <svg
          className="absolute bottom-20 -left-12 w-80 h-80 text-gold-500 opacity-[0.04] -rotate-45"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <ellipse cx="100" cy="100" rx="40" ry="90" />
          <line x1="100" y1="10" x2="100" y2="190" stroke="currentColor" strokeWidth="3" />
          <path d="M100,50 Q130,70 100,90 Q70,70 100,50" />
          <path d="M100,90 Q135,110 100,130 Q65,110 100,90" />
        </svg>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold-500/[0.03] blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-28 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen">

          {/* ── Left: Text ── */}
          <motion.div style={{ y: textY }} className="relative z-10 order-2 lg:order-1">
            {/* Rating badge */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2.5 glass rounded-full px-4 py-2 mb-8 shadow-sm"
            >
              <div className="flex gap-0.5" aria-label="5 étoiles">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-gold-500 text-gold-500" />
                ))}
              </div>
              <span className="text-xs font-semibold text-forest-700 tracking-wide">
                4.9 / 5 — Satisfaction Client
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.04] mb-6 text-forest-800 text-balance"
            >
              LE GOÛT{' '}
              <span className="gold-text-shimmer font-semibold">AUTHENTIQUE</span>
              <br />
              DE L&rsquo;AFRIQUE
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-forest-600 text-lg leading-relaxed mb-10 max-w-md"
            >
              Découvrez des boissons naturelles inspirées des recettes africaines
              traditionnelles, élaborées avec des ingrédients soigneusement sélectionnés.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#produits"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-shine inline-flex items-center gap-2 bg-forest-700 text-cream-100 px-8 py-4 rounded-full font-medium text-sm tracking-wide hover:bg-forest-600 transition-colors shadow-lg shadow-forest-700/25"
              >
                Découvrir nos produits
              </motion.a>
              <motion.a
                href="#pack"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 border border-gold-500/50 text-forest-700 px-8 py-4 rounded-full font-medium text-sm tracking-wide hover:border-gold-500 hover:bg-gold-500/6 transition-all"
              >
                Commander maintenant
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ── Right: Floating bottles ── */}
          <div className="order-1 lg:order-2 h-[440px] sm:h-[520px] lg:h-[640px]">
            <div className="grid grid-cols-2 gap-4 h-full">
              {PRODUCTS.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 60, scale: 0.88 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 1, delay: 0.35 + i * 0.14, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <motion.div
                    animate={{ y: floatConfig[i].y }}
                    transition={{
                      duration: floatConfig[i].duration,
                      delay: floatConfig[i].delay,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      ease: 'easeInOut',
                    }}
                    className={cn(
                      'relative h-full rounded-3xl overflow-hidden shadow-xl border',
                      'bg-gradient-to-b',
                      productAccents[product.colorKey]
                    )}
                  >
                    <Image
                      src={product.bottleImage}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 40vw, 22vw"
                      priority={i < 2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="glass rounded-xl px-3 py-1.5">
                        <p className="font-display text-[13px] font-semibold text-forest-800 truncate">
                          {product.name}
                        </p>
                        <p className="text-[11px] text-forest-600 truncate">{product.subtitle}</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden
      >
        <span className="text-xs text-forest-500 tracking-widest uppercase">Découvrir</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-gold-500 to-transparent"
        />
      </motion.div>
    </section>
  )
}
