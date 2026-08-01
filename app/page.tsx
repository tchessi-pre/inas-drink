import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import ProductGrid from '@/components/ProductGrid'
import DiscoveryPack from '@/components/DiscoveryPack'
import StorySection from '@/components/StorySection'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import CartDrawer from '@/components/CartDrawer'
import FloatingActions from '@/components/FloatingActions'

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        <DiscoveryPack />
        <Features />
        <StorySection />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <CartDrawer />
      <FloatingActions />
    </div>
  )
}
