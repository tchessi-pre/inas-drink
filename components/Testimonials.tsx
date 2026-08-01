'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/data'
import { cn } from '@/lib/utils'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)
  const total = TESTIMONIALS.length

  const next = useCallback(() => {
    setDirection(1)
    setCurrent(c => (c + 1) % total)
  }, [total])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent(c => (c - 1 + total) % total)
  }, [total])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 4800)
    return () => clearInterval(id)
  }, [next, paused])

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0, scale: 0.94 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({ x: d > 0 ? -80 : 80, opacity: 0, scale: 0.94 }),
  }

  const t = TESTIMONIALS[current]

  return (
    <section className="py-24 lg:py-36 bg-cream-200/40 overflow-hidden" aria-label="Témoignages">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="text-gold-600 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Ils nous font confiance
          </p>
          <h2 className="text-4xl lg:text-5xl font-light text-forest-800">
            Ce qu&rsquo;ils <span className="gold-text font-semibold">disent de nous</span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-cream-300/60 relative"
                aria-live="polite"
              >
                {/* Quote icon */}
                <div className="absolute top-8 right-8 sm:top-12 sm:right-12">
                  <Quote className="w-10 h-10 text-gold-500/20" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6" aria-label={`${t.rating} étoiles sur 5`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl sm:text-xl lg:text-2xl font-light text-forest-800 leading-relaxed mb-8 max-w-2xl">
                  &ldquo;{t.text}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gold-500/30 flex-shrink-0">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-forest-800">{t.name}</p>
                    <p className="text-forest-500 text-sm">{t.city}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-cream-300 shadow-md flex items-center justify-center hover:border-gold-500/50 hover:shadow-lg transition-all group"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="w-5 h-5 text-forest-700 group-hover:text-gold-600 transition-colors" />
          </button>
          <button
            onClick={next}
            className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-cream-300 shadow-md flex items-center justify-center hover:border-gold-500/50 hover:shadow-lg transition-all group"
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="w-5 h-5 text-forest-700 group-hover:text-gold-600 transition-colors" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2.5 mt-8" role="tablist" aria-label="Navigation des témoignages">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Témoignage ${i + 1}`}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
              className="focus:outline-none"
            >
              <motion.div
                animate={{ width: i === current ? 28 : 8, backgroundColor: i === current ? '#C89B3C' : '#E8DDCB' }}
                transition={{ duration: 0.35 }}
                className="h-2 rounded-full"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
