export type FlavorKey = 'bissap' | 'gingembre' | 'tamarin' | 'baobab'
export type ProductId = FlavorKey | `${FlavorKey}-1l`

export interface Product {
  id: ProductId
  name: string
  subtitle: string
  description: string
  benefits: string[]
  volume: string
  price: number
  colorKey: FlavorKey
  accent: string
  bottleImage: string
  ingredientImage: string
}

export const PRODUCTS: Product[] = [
  {
    id: 'bissap',
    name: 'Jus de Bissap',
    subtitle: 'Hibiscus',
    description: "Boisson naturelle à base de fleurs d'hibiscus, fraîche et légèrement acidulée.",
    benefits: ['Riche en antioxydants', 'Rafraîchissant', 'Favorise la digestion'],
    volume: '50 cl',
    price: 3,
    colorKey: 'bissap',
    accent: 'bissap',
    bottleImage: '/images/bottle-bissap.png',
    ingredientImage:
      'https://images.pexels.com/photos/6463340/pexels-photo-6463340.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'gingembre',
    name: 'Jus de Gingembre',
    subtitle: 'Ginger tonic',
    description: 'Boisson tonique au gingembre frais, vivifiante et naturellement piquante.',
    benefits: ["Renforce l'immunité", 'Anti-inflammatoire', 'Énergisant'],
    volume: '50 cl',
    price: 4,
    colorKey: 'gingembre',
    accent: 'gingembre',
    bottleImage: '/images/bottle-gingembre.png',
    ingredientImage:
      'https://images.pexels.com/photos/161556/dark-green-ginger-healthy-161556.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'tamarin',
    name: 'Jus de Tamarin',
    subtitle: 'Tamarind',
    description: 'Boisson au goût légèrement acidulé, naturellement riche et désaltérante.',
    benefits: ['Source de vitamines', 'Facilite la digestion', 'Énergie naturelle'],
    volume: '50 cl',
    price: 4,
    colorKey: 'tamarin',
    accent: 'tamarin',
    bottleImage: '/images/bottle-tamarin.png',
    ingredientImage:
      'https://images.pexels.com/photos/6604142/pexels-photo-6604142.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
  {
    id: 'baobab',
    name: 'Jus de Baobab',
    subtitle: 'Baobab pulp',
    description: 'Boisson riche en vitamine C obtenue à partir de la pulpe de baobab.',
    benefits: ['Source de fibres', 'Vitamine C', 'Revitalisant naturel'],
    volume: '50 cl',
    price: 4,
    colorKey: 'baobab',
    accent: 'baobab',
    bottleImage: '/images/bottle-baobab.png',
    ingredientImage:
      'https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg?auto=compress&cs=tinysrgb&w=900',
  },
]

export const PRODUCTS_1L: Product[] = PRODUCTS.map(product => ({
  ...product,
  id: `${product.colorKey}-1l`,
  volume: '1 L',
  price: product.colorKey === 'bissap' ? 6 : 8,
}))

export const PACK_PRICE = 9.0
export const PACK_ORIGINAL_PRICE = 10.0

export const BRAND = {
  name: "INA'S DRINK",
  slogan: "Le goût authentique de l'Afrique",
  website: 'https://inas-drink.com',
  phone: '+33 6 50 34 58 04',
  phoneDigits: '33650345804',
  email: 'contact@inasdrink.com',
  address: 'Marseille, France',
  whatsapp: '33650345804',
  instagram: 'https://instagram.com/inasdrink',
  facebook: 'https://facebook.com/inasdrink',
  tiktok: 'https://tiktok.com/@inasdrink',
}

export const FEATURES = [
  {
    title: '100 % Naturel',
    text: "Des recettes pures, sans additifs ni artifices. Chaque gorgée est un retour à l'essentiel.",
    icon: 'Leaf',
  },
  {
    title: 'Sans conservateur',
    text: 'Une conservation naturelle qui respecte votre corps et préserve tous les bienfaits.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Fabriqué en Afrique',
    text: 'Directement sourcé auprès des producteurs locaux, au cœur du continent africain.',
    icon: 'Globe',
  },
  {
    title: 'Riches en bienfaits',
    text: 'Des ingrédients sélectionnés pour leurs vertus nutritionnelles et leur saveur unique.',
    icon: 'Sparkles',
  },
] as const

export const TESTIMONIALS = [
  {
    name: 'Aïcha D.',
    city: 'Lyon',
    rating: 5,
    text: 'Excellent goût, très rafraîchissant. On sent vraiment la qualité du naturel. Mon Bissap préféré !',
    avatar:
      'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    name: 'Marc L.',
    city: 'Paris',
    rating: 5,
    text: "Enfin des boissons naturelles africaines de qualité. Le jus de gingembre est incroyablement bien dosé.",
    avatar:
      'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    name: 'Sofia M.',
    city: 'Marseille',
    rating: 5,
    text: 'Le pack découverte est une vraie révélation. Mes préférés restent le Bissap et le Baobab.',
    avatar:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
]

export const FAQS = [
  {
    q: 'Quels sont les ingrédients ?',
    a: "Des ingrédients naturels issus d'Afrique : fleurs d'hibiscus, gingembre frais, tamarin, pulpe de baobab, eau purifiée et un léger apport naturel en sucre de canne.",
  },
  {
    q: 'Les boissons sont-elles naturelles ?',
    a: 'Oui, 100 %. Nos boissons sont entièrement naturelles, sans conservateur ni colorant artificiel. La conservation se fait grâce à des méthodes naturelles éprouvées.',
  },
  {
    q: 'Où livrez-vous ?',
    a: "Pour le moment, nous livrons uniquement à Marseille et ses environs. Délai moyen : 24 à 48 heures.",
  },
  {
    q: 'Quelle est la durée de conservation ?',
    a: "Nos jus se conservent 6 mois en bouteille fermée, à l'abri de la lumière et au frais. Une fois ouverts, à consommer dans les 48 heures et à garder au réfrigérateur.",
  },
]

export const NAV_LINKS = [
  { label: 'Accueil', href: '/#accueil' },
  { label: 'Nos Produits', href: '/#produits' },
  { label: 'À Propos', href: '/#histoire' },
  { label: 'Nos Engagements', href: '/#engagements' },
  { label: 'Contact', href: '/#contact' },
]

export const LEGAL_LINKS = [
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'Politique de confidentialité', href: '/politique-confidentialite' },
]
