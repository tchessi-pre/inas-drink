'use client'

import { motion } from 'framer-motion'
import { Leaf, ShieldCheck, Globe, Sparkles } from 'lucide-react'
import { FEATURES } from '@/lib/data'

const iconMap = {
  Leaf,
  ShieldCheck,
  Globe,
  Sparkles,
} as const

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Features() {
  return (
    <section className="py-24 lg:py-32 bg-cream-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" aria-hidden />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="text-gold-600 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Nos engagements
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-light text-forest-800">
            Pourquoi choisir{' '}
            <span className="gold-text font-semibold">INA&rsquo;S DRINK</span>?
          </h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {FEATURES.map(feature => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap]
            return (
              <motion.article
                key={feature.title}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative bg-white/70 backdrop-blur-sm border border-cream-300/60 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                {/* Subtle background accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-forest-700/[0.03] to-transparent rounded-3xl" />

                <div className="relative">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-forest-700/8 flex items-center justify-center mb-6 group-hover:bg-forest-700/15 transition-colors">
                    <Icon className="w-6 h-6 text-forest-700" />
                  </div>

                  <h3 className="font-display text-xl font-semibold text-forest-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-forest-600 text-sm leading-relaxed">{feature.text}</p>
                </div>

                {/* Gold accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
