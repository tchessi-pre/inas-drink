'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Leaf, ShieldCheck, Globe } from 'lucide-react'

const heroBadges = [
  { icon: Leaf, title: '100% Naturel', text: 'Ingrédients naturels sans colorant' },
  { icon: ShieldCheck, title: 'Sans conservateur', text: 'Pour une consommation saine et sûre' },
  { icon: Globe, title: 'Made in Africa', text: 'Inspiré par la richesse de notre continent' },
]

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const textY = useTransform(scrollYProgress, [0, 1], [0, 50])

  return (
    <section
      ref={ref}
      id="accueil"
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
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.04] mb-6 text-forest-800 text-balance"
            >
              LE GOÛT AUTHENTIQUE
              <br />
              <span className="gold-text-shimmer">DE L&rsquo;AFRIQUE</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="text-forest-600 text-lg leading-relaxed mb-8 max-w-md"
            >
              INA&rsquo;S DRINK vous propose des boissons naturelles et rafraîchissantes,
              élaborées à partir d&rsquo;ingrédients soigneusement sélectionnés en Afrique.
              Savourez le meilleur de la nature, à chaque gorgée.
            </motion.p>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-6 sm:gap-8 mb-10"
            >
              {heroBadges.map(badge => (
                <div key={badge.title} className="flex items-start gap-3 max-w-[170px]">
                  <div className="shrink-0 w-11 h-11 rounded-full border border-forest-700/25 flex items-center justify-center">
                    <badge.icon className="w-[18px] h-[18px] text-forest-700" />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-wide text-forest-800 uppercase">
                      {badge.title}
                    </p>
                    <p className="text-xs text-forest-600 leading-snug mt-0.5">{badge.text}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.a
                href="#produits"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-shine inline-flex items-center gap-2 border-2 border-forest-800 text-forest-800 px-8 py-4 rounded-full font-semibold text-sm tracking-wide uppercase hover:bg-forest-800 hover:text-cream-100 transition-colors"
              >
                Découvrir nos produits
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ── Right: Bottles ── */}
          <div className="order-1 lg:order-2 relative h-[320px] sm:h-[420px] lg:h-[600px] flex items-center justify-center">
            {/* Ground shadow */}
            <div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[75%] h-10 bg-forest-900/10 blur-2xl rounded-full"
              aria-hidden
            />

            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full h-full"
              style={{
                maskImage:
                  'radial-gradient(ellipse 68% 68% at 50% 48%, black 55%, transparent 100%)',
                WebkitMaskImage:
                  'radial-gradient(ellipse 68% 68% at 50% 48%, black 55%, transparent 100%)',
              }}
            >
              <Image
                src="/images/bouteilles-inas3.png"
                alt="Les quatre boissons INA'S DRINK : Bissap, Tamarin, Gingembre, Baobab"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 90vw, 48vw"
                priority
              />
            </motion.div>
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
