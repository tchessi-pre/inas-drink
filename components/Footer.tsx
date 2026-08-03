'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { QRCodeSVG } from 'qrcode.react'
import { Leaf, Phone, Mail, Heart, MapPin, Instagram, Facebook } from 'lucide-react'
import { BRAND, NAV_LINKS, PRODUCTS, LEGAL_LINKS } from '@/lib/data'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-forest-900 text-cream-300 relative overflow-hidden" aria-label="Pied de page">
      {/* ── Promo banner ── */}
      <div className="bg-forest-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-[0.04] pointer-events-none" aria-hidden />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 lg:py-12 relative">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y divide-white/10 lg:divide-y-0 lg:divide-x lg:divide-white/10">

            {/* Call to action */}
            <div className="lg:pr-8 pb-8 lg:pb-0">
              <h3 className="text-2xl font-semibold text-cream-100 leading-tight">
                Envie de nature ?
              </h3>
              <p className="text-gold-400 font-semibold text-sm tracking-wide uppercase mt-1 mb-3">
                Commandez maintenant !
              </p>
              <p className="text-sm text-cream-400 leading-relaxed max-w-[240px]">
                Des boissons naturelles, authentiques et faites avec passion pour vous.
              </p>
            </div>

            {/* Contact */}
            <div className="lg:px-8 py-8 lg:py-0 flex flex-col justify-center gap-3.5">
              <a
                href={`tel:${BRAND.phoneDigits}`}
                className="flex items-center gap-3 text-sm text-cream-200 hover:text-gold-400 transition-colors group"
              >
                <span className="w-8 h-8 rounded-full border border-gold-500/40 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/10 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-gold-400" />
                </span>
                {BRAND.phone}
              </a>
              <a
                href={`https://wa.me/${BRAND.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-cream-200 hover:text-gold-400 transition-colors group"
              >
                <span className="w-8 h-8 rounded-full border border-gold-500/40 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/10 transition-colors">
                  <svg className="w-3.5 h-3.5 text-gold-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </span>
                {BRAND.phone}
              </a>
              <a
                href={`mailto:${BRAND.email}`}
                className="flex items-center gap-3 text-sm text-cream-200 hover:text-gold-400 transition-colors group"
              >
                <span className="w-8 h-8 rounded-full border border-gold-500/40 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/10 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-gold-400" />
                </span>
                {BRAND.email}
              </a>
            </div>

            {/* QR code */}
            <div className="lg:px-8 py-8 lg:py-0 flex items-center gap-4">
              <div>
                <p className="text-gold-400 font-semibold text-sm tracking-wide uppercase mb-1.5">
                  Scannez-moi
                </p>
                <p className="text-xs text-cream-400 leading-relaxed max-w-[170px]">
                  pour découvrir plus sur nos produits et passer vos commandes.
                </p>
              </div>
              <div className="w-20 h-20 rounded-lg bg-cream-50 p-1.5 flex-shrink-0">
                <QRCodeSVG
                  value={BRAND.website}
                  size={80}
                  bgColor="transparent"
                  fgColor="#1E4D2B"
                  level="M"
                  className="w-full h-full"
                  aria-label={`QR code vers ${BRAND.website}`}
                />
              </div>
            </div>

            {/* Africa */}
            <div className="lg:pl-8 pt-8 lg:pt-0 flex flex-col items-center justify-center text-center gap-2.5">
              <Image
                src="/images/africa_map.png"
                alt="Carte de l'Afrique"
                width={40}
                height={40}
                unoptimized
                className="w-14 h-14"
              />
              <p className="text-gold-400 text-[11px] font-semibold tracking-widest uppercase leading-snug">
                Fait avec passion
                <br />
                en Afrique
              </p>
            </div>

          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-grain opacity-[0.05] pointer-events-none" aria-hidden />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20 relative">
      <div className="h-px bg-white/10 mb-10" aria-hidden />
        <div className="grid sm:grid-cols-3 gap-10 lg:gap-12 mb-16">

          {/* ── Brand ── */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full bg-gold-500/15 border border-gold-500/25 flex items-center justify-center">
                <Leaf className="w-4 h-4 text-gold-400" />
              </div>
              <span className="text-xl font-semibold text-cream-100">
                {BRAND.name}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-cream-400 mb-4 max-w-[220px]">
              Des boissons naturelles premium d&rsquo;Afrique, pour l&rsquo;Europe.
            </p>
            <div className="flex items-start gap-3 text-sm text-cream-400 mb-6 max-w-[220px]">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-cream-500" />
              <span className="leading-snug">{BRAND.address}</span>
            </div>

            {/* Social icons */}
            <div className="flex gap-3" aria-label="Réseaux sociaux">
              <motion.a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                className="w-9 h-9 rounded-full bg-white/8 border border-white/10 flex items-center justify-center hover:bg-gold-500/20 hover:border-gold-500/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-cream-300" />
              </motion.a>
              <motion.a
                href={BRAND.facebook}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                className="w-9 h-9 rounded-full bg-white/8 border border-white/10 flex items-center justify-center hover:bg-gold-500/20 hover:border-gold-500/30 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-cream-300" />
              </motion.a>
              <motion.a
                href={BRAND.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                className="w-9 h-9 rounded-full bg-white/8 border border-white/10 flex items-center justify-center hover:bg-gold-500/20 hover:border-gold-500/30 transition-colors"
                aria-label="TikTok"
              >
                {/* TikTok icon via SVG */}
                <svg className="w-4 h-4 text-cream-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.73a8.16 8.16 0 004.77 1.52V6.8a4.85 4.85 0 01-1-.11z" />
                </svg>
              </motion.a>
            </div>
          </div>

          {/* ── Navigation ── */}
          <div>
            <h3 className="font-semibold text-cream-100 text-sm tracking-wide mb-5">Navigation</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream-400 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Products ── */}
          <div>
            <h3 className="font-semibold text-cream-100 text-sm tracking-wide mb-5">Nos boissons</h3>
            <ul className="space-y-3">
              {PRODUCTS.map(p => (
                <li key={p.id}>
                  <Link
                    href="/#produits"
                    className="text-sm text-cream-400 hover:text-gold-400 transition-colors"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/#pack"
                  className="text-sm text-gold-400 hover:text-gold-300 transition-colors font-medium"
                >
                  Pack Découverte ✦
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <p className="text-xs text-cream-500">
              © {year} {BRAND.name}. Tous droits réservés.
            </p>
            {LEGAL_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-cream-500 hover:text-gold-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-xs text-cream-600">
            Boissons naturelles - sans conservateurs - fabriquées avec passion
          </p>
        </div>
      </div>

      <div className="h-3 bg-chevron" aria-hidden />

      <div className="border-t border-b border-gold-500/20 py-3 relative bg-gold-200/20">
        <p className="text-center text-xs tracking-wide text-gold-400 font-medium flex items-center justify-center gap-1.5">
          {BRAND.name} &ndash; {BRAND.slogan}
          <Heart className="w-3 h-3 fill-current" />
        </p>
      </div>
      <div className="h-3 bg-chevron" aria-hidden />
    </footer>
  )
}
