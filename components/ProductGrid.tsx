'use client'

import { motion } from 'framer-motion'
import { PRODUCTS, PRODUCTS_1L } from '@/lib/data'
import ProductCard from './ProductCard'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}

export default function ProductGrid() {
  return (
    <section id="produits" className="py-24 lg:py-36 bg-cream-200/40 relative" aria-label="Nos produits">
      <div className="absolute inset-0 bg-grain opacity-[0.025] pointer-events-none" aria-hidden />

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
            La gamme complète
          </p>
          <h2 className="text-4xl lg:text-5xl font-light text-forest-800 mb-4">
            Nos <span className="gold-text font-semibold">Boissons</span>
          </h2>
          <p className="text-forest-600 text-base max-w-md mx-auto">
            Quatre saveurs authentiques, quatre voyages sensoriels au cœur de l&rsquo;Afrique.
          </p>
        </motion.div>

        {/* Grid — 50 cl */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {PRODUCTS.map(product => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        {/* Header — 1 L */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-20 mb-16"
        >
          <p className="text-gold-600 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Format familial
          </p>
          <h2 className="text-4xl lg:text-5xl font-light text-forest-800">
            Nos boissons en <span className="gold-text font-semibold">1 L</span>
          </h2>
        </motion.div>

        {/* Grid — 1 L */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {PRODUCTS_1L.map(product => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
