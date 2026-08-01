import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BRAND } from '@/lib/data'

export const metadata: Metadata = {
  title: `Mentions légales — ${BRAND.name}`,
  description: `Informations légales relatives au site et à la société ${BRAND.name}.`,
}

export default function MentionsLegalesPage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="bg-cream-100 pt-32 pb-24 lg:pt-40 lg:pb-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <p className="text-gold-600 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Informations légales
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-forest-800 mb-10 text-balance">
            Mentions légales
          </h1>

          <div className="space-y-10 text-forest-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-forest-800 mb-3">
                1. Éditeur du site
              </h2>
              <p>
                Le présent site est édité par <strong>{BRAND.name}</strong>.
              </p>
              <ul className="mt-3 space-y-1.5 list-none">
                <li>Adresse : {BRAND.address}</li>
                <li>Téléphone : {BRAND.phone}</li>
                <li>E-mail : {BRAND.email}</li>
                <li>Forme juridique, capital social, SIRET / RCS : [à compléter]</li>
              </ul>
              <p className="mt-3 text-sm text-forest-500">
                Ces informations d&rsquo;identification de la société doivent être complétées
                avec les données officielles de votre entreprise (statut juridique, numéro
                SIRET, RCS, capital social) avant la mise en ligne du site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-forest-800 mb-3">
                2. Directeur de la publication
              </h2>
              <p>
                Le directeur de la publication du site est le représentant légal de{' '}
                {BRAND.name}. Pour toute question relative au contenu du site, vous pouvez le
                contacter à l&rsquo;adresse {BRAND.email}.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-forest-800 mb-3">
                3. Hébergement
              </h2>
              <p>
                Le site est hébergé par : [nom de l&rsquo;hébergeur, adresse et contact à
                compléter].
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-forest-800 mb-3">
                4. Propriété intellectuelle
              </h2>
              <p>
                L&rsquo;ensemble des contenus présents sur ce site (textes, images, logos,
                graphismes, mise en page) sont, sauf mention contraire, la propriété exclusive
                de {BRAND.name} ou de ses partenaires et sont protégés par le droit d&rsquo;auteur
                et le droit de la propriété intellectuelle. Toute reproduction, représentation,
                modification ou diffusion, totale ou partielle, sans autorisation préalable
                écrite, est interdite et pourra faire l&rsquo;objet de poursuites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-forest-800 mb-3">
                5. Liens hypertextes
              </h2>
              <p>
                Le site peut contenir des liens vers des sites tiers, notamment WhatsApp, pour
                faciliter la prise de commande. {BRAND.name} n&rsquo;exerce aucun contrôle sur
                ces sites et décline toute responsabilité quant à leur contenu ou à leurs
                pratiques en matière de données personnelles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-forest-800 mb-3">
                6. Données personnelles
              </h2>
              <p>
                Le traitement des données personnelles des utilisateurs est détaillé dans notre{' '}
                <a href="/politique-confidentialite" className="text-gold-600 underline hover:text-gold-700">
                  politique de confidentialité
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-forest-800 mb-3">
                7. Droit applicable
              </h2>
              <p>
                Les présentes mentions légales sont soumises au droit français. En cas de
                litige, et à défaut de résolution amiable, les tribunaux français seront seuls
                compétents.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
