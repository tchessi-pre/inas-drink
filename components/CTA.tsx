'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Leaf } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 lg:py-32 bg-forest-700 relative overflow-hidden" aria-label="Appel à l'action">
      {/* Grain overlay */}
      <div className="absolute inset-0 bg-grain opacity-[0.07] pointer-events-none" aria-hidden />

      {/* Decorative glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold-500/8 blur-3xl pointer-events-none"
        aria-hidden
      />

      {/* Leaf decorations */}
      <div className="absolute top-6 left-8 opacity-10" aria-hidden>
        <Leaf className="w-24 h-24 text-cream-100 rotate-12" />
      </div>
      <div className="absolute bottom-6 right-8 opacity-10" aria-hidden>
        <Leaf className="w-20 h-20 text-cream-100 -rotate-45" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-gold-400 text-sm font-semibold tracking-[0.2em] uppercase mb-5"
        >
          Commandez maintenant
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl lg:text-5xl font-light text-cream-100 mb-6 leading-tight text-balance"
        >
          Prêt à découvrir les saveurs{' '}
          <span className="gold-text font-semibold">authentiques de l&rsquo;Afrique ?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="text-cream-300 text-base leading-relaxed mb-10 max-w-lg mx-auto"
        >
          Commencez par le Pack Découverte et laissez-vous surprendre par la richesse
          de nos boissons naturelles africaines.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a
            href="#pack"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="btn-shine inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-white px-10 py-4 rounded-full font-semibold text-base shadow-xl shadow-gold-500/30 transition-colors"
          >
            Commander maintenant
            <ArrowRight className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="#produits"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 border border-cream-100/30 text-cream-100 px-10 py-4 rounded-full font-medium text-base hover:border-cream-100/60 hover:bg-white/5 transition-all"
          >
            Voir nos produits
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
