'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ShoppingCart, Menu, X, Leaf } from 'lucide-react'
import { useCart } from '@/lib/cart'
import { NAV_LINKS, BRAND } from '@/lib/data'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const { count, setOpen } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled ? 'glass shadow-sm py-3' : 'bg-transparent py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-forest-700 flex items-center justify-center shadow-md group-hover:bg-forest-600 transition-colors">
              <Leaf className="w-4 h-4 text-gold-400" />
            </div>
            <span className="font-display text-xl font-semibold tracking-wide text-forest-800">
              {BRAND.name}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-forest-700 hover:text-gold-600 transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <motion.button
              onClick={() => setOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2 rounded-full hover:bg-forest-700/10 transition-colors"
              aria-label={`Panier (${count} articles)`}
            >
              <ShoppingCart className="w-5 h-5 text-forest-700" />
              <AnimatePresence>
                {count > 0 && (
                  <motion.span
                    key={count}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-gold-500 text-white text-xs font-bold rounded-full flex items-center justify-center"
                  >
                    {count}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex btn-shine bg-forest-700 text-cream-100 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-forest-600 transition-colors shadow-md shadow-forest-700/20"
              onClick={() => {
                document.getElementById('pack')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Commander
            </motion.button>

            <button
              className="md:hidden p-2 rounded-full hover:bg-forest-700/10 transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Ouvrir le menu"
            >
              <Menu className="w-5 h-5 text-forest-700" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-50 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 280 }}
              className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-cream-100 z-50 shadow-2xl flex flex-col md:hidden"
            >
              <div className="flex items-center justify-between p-6 border-b border-cream-300">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-forest-700 flex items-center justify-center">
                    <Leaf className="w-4 h-4 text-gold-400" />
                  </div>
                  <span className="font-display text-lg font-semibold text-forest-800">{BRAND.name}</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-full hover:bg-forest-700/10 transition-colors"
                  aria-label="Fermer le menu"
                >
                  <X className="w-5 h-5 text-forest-700" />
                </button>
              </div>

              <nav className="flex flex-col p-6 gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3.5 px-4 text-base font-medium text-forest-700 hover:bg-forest-700/8 hover:text-forest-900 rounded-xl transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto p-6 border-t border-cream-300">
                <button
                  className="btn-shine w-full bg-forest-700 text-cream-100 py-3.5 rounded-full font-medium hover:bg-forest-600 transition-colors"
                  onClick={() => {
                    setMobileOpen(false)
                    setOpen(true)
                  }}
                >
                  Mon panier {count > 0 && `(${count})`}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
