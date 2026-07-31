import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter, Kaushan_Script } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/lib/cart'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const kaushan = Kaushan_Script({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-logo',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "INA'S DRINK – Le goût authentique de l'Afrique",
  description:
    'Boissons naturelles premium inspirées des recettes africaines traditionnelles. Bissap, Gingembre, Tamarin, Baobab. Sans conservateurs, 100 % naturel.',
  keywords: ['boissons africaines', 'jus naturels', 'bissap', 'gingembre', 'tamarin', 'baobab', 'premium'],
  openGraph: {
    title: "INA'S DRINK – Le goût authentique de l'Afrique",
    description: 'Boissons naturelles premium inspirées des recettes africaines traditionnelles.',
    type: 'website',
    locale: 'fr_FR',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: "INA'S DRINK",
      description: 'Boissons naturelles premium africaines',
      url: 'https://inasdrink.com',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+33-6-12-34-56-78',
        contactType: 'customer service',
      },
    },
    {
      '@type': 'Product',
      name: 'Jus de Bissap',
      brand: { '@type': 'Brand', name: "INA'S DRINK" },
      offers: { '@type': 'Offer', price: '2.50', priceCurrency: 'EUR' },
    },
    {
      '@type': 'Product',
      name: 'Jus de Gingembre',
      brand: { '@type': 'Brand', name: "INA'S DRINK" },
      offers: { '@type': 'Offer', price: '2.50', priceCurrency: 'EUR' },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${inter.variable} ${kaushan.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-cream text-forest-800 font-sans antialiased overflow-x-hidden">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}
