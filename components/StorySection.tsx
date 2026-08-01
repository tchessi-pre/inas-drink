'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Leaf } from 'lucide-react'

export default function StorySection() {
  return (
    <section id="histoire" className="py-24 lg:py-36 bg-cream-100 overflow-hidden" aria-label="Notre histoire">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Left: Image ── */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Decorative frame offset */}
            <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border-2 border-gold-500/25" />

            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/history2.png"
                alt="Préparation naturelle des boissons INA'S DRINK"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/30 via-transparent to-transparent" />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 shadow-xl border border-gold-500/20 max-w-[160px]"
            >
              <p className="font-display text-4xl font-semibold text-forest-800 mb-1">100%</p>
              <p className="text-xs font-medium text-forest-600 leading-snug">
                Ingrédients naturels<br />sans additifs
              </p>
            </motion.div>
          </motion.div>

          {/* ── Right: Text ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-forest-700/10 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-forest-700" />
              </div>
              <p className="text-gold-600 text-sm font-semibold tracking-[0.2em] uppercase">
                Notre histoire
              </p>
            </div>

            <h2 className="font-display text-4xl lg:text-5xl font-light text-forest-800 mb-6 leading-tight">
              Chaque bouteille{' '}
              <span className="gold-text font-semibold">raconte une histoire</span>
            </h2>

            {/* Decorative divider */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-gold-500/50 to-transparent" />
              <div className="w-2 h-2 rounded-full bg-gold-500" />
            </div>

            <div className="space-y-5 text-forest-600 leading-relaxed">
              <p>
                Nos recettes sont inspirées des traditions africaines et préparées avec des
                ingrédients soigneusement sélectionnés afin d&rsquo;offrir une boisson naturelle,
                saine et authentique.
              </p>
              <p>
                Chaque gorgée est un voyage entre le matin chaud d&rsquo;un village sénégalais,
                les marchés colorés d&rsquo;Abidjan et les jardins luxuriants de Madagascar.
                Une expérience sensorielle qui honore l&rsquo;héritage africain.
              </p>
              <p>
                INA&rsquo;S DRINK, c&rsquo;est bien plus qu&rsquo;une boisson — c&rsquo;est
                un lien entre deux continents, une invitation à redécouvrir la richesse des
                saveurs africaines.
              </p>
            </div>

            {/* Values pills */}
            <div className="flex flex-wrap gap-2.5 mt-8">
              {['Naturel', 'Tradition', 'Authenticité', 'Qualité', 'Afrique'].map(value => (
                <span
                  key={value}
                  className="text-xs font-semibold text-forest-700 border border-forest-700/25 px-4 py-1.5 rounded-full hover:bg-forest-700/6 transition-colors cursor-default"
                >
                  {value}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
