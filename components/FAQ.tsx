'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { FAQS } from '@/lib/data'

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 lg:py-36 bg-cream-100" aria-label="Questions fréquentes">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="text-gold-600 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Questions fréquentes
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-light text-forest-800">
            Vous avez des <span className="gold-text font-semibold">questions ?</span>
          </h2>
        </motion.div>

        {/* Accordion */}
        <dl className="space-y-2">
          {FAQS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-2xl border border-cream-300/60 overflow-hidden shadow-sm"
            >
              <dt>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  aria-controls={`faq-answer-${i}`}
                  className="flex items-center justify-between w-full px-7 py-5 text-left hover:bg-cream-100/60 transition-colors group"
                >
                  <span className="font-medium text-forest-800 text-[15px] leading-snug pr-4">
                    <span className="text-gold-500 font-semibold mr-2">{String(i + 1).padStart(2, '0')}.</span>
                    {item.q}
                  </span>
                  <motion.div
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-cream-200 group-hover:bg-gold-500/15 transition-colors flex items-center justify-center"
                  >
                    <Plus className="w-4 h-4 text-forest-700 group-hover:text-gold-600 transition-colors" />
                  </motion.div>
                </button>
              </dt>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.dd
                    id={`faq-answer-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-7 pb-6 text-forest-600 text-sm leading-relaxed border-t border-cream-200/60 pt-4">
                      {item.a}
                    </p>
                  </motion.dd>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  )
}
