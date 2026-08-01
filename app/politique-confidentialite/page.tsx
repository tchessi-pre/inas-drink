import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { BRAND } from '@/lib/data'

export const metadata: Metadata = {
  title: `Politique de confidentialité — ${BRAND.name}`,
  description: `Comment ${BRAND.name} traite les données lors de votre navigation et de vos commandes.`,
}

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="bg-cream-100 pt-32 pb-24 lg:pt-40 lg:pb-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <p className="text-gold-600 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Vos données
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-forest-800 mb-10 text-balance">
            Politique de confidentialité
          </h1>

          <div className="space-y-10 text-forest-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-forest-800 mb-3">
                1. Responsable du traitement
              </h2>
              <p>
                {BRAND.name}, joignable à l&rsquo;adresse {BRAND.email} ou au {BRAND.phone}, est
                responsable du traitement des données décrites ci-dessous.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-forest-800 mb-3">
                2. Le site ne collecte aucune donnée sur nos serveurs
              </h2>
              <p>
                {BRAND.name} fonctionne sans compte utilisateur, sans formulaire d&rsquo;inscription
                et sans base de données. Aucune information que vous consultez ou ajoutez à
                votre panier n&rsquo;est transmise à un serveur ni stockée par nous : votre
                panier est conservé uniquement dans la mémoire locale de votre navigateur
                (<code className="text-sm bg-forest-800/5 px-1.5 py-0.5 rounded">localStorage</code>),
                sur votre propre appareil. Il n&rsquo;est jamais envoyé ni consultable par
                {' '}{BRAND.name} tant que vous n&rsquo;avez pas finalisé une commande.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-forest-800 mb-3">
                3. Données transmises lors d&rsquo;une commande
              </h2>
              <p>
                Lorsque vous cliquez sur « Commander via WhatsApp », le contenu de votre panier
                (produits, quantités, montant) est inséré dans un message pré-rempli et vous
                êtes redirigé vers WhatsApp, où vous choisissez librement d&rsquo;envoyer ce
                message. À partir de cet instant, l&rsquo;échange (et les données que vous
                communiquez : nom, adresse de livraison, numéro de téléphone) est traité
                directement au sein de WhatsApp, un service exploité par Meta, selon la
                politique de confidentialité de WhatsApp. {BRAND.name} n&rsquo;a accès qu&rsquo;à
                la conversation elle-même, utilisée uniquement pour traiter votre commande.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-forest-800 mb-3">
                4. Cookies et traceurs
              </h2>
              <p>
                Ce site ne dépose aucun cookie publicitaire ou de mesure d&rsquo;audience. Seul
                le stockage local de votre navigateur est utilisé, uniquement pour retenir le
                contenu de votre panier d&rsquo;une visite à l&rsquo;autre sur cet appareil. Vous
                pouvez l&rsquo;effacer à tout moment via les réglages de votre navigateur, sans
                que cela n&rsquo;affecte votre navigation sur le site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-forest-800 mb-3">
                5. Durée de conservation
              </h2>
              <p>
                Le contenu du panier reste sur votre appareil jusqu&rsquo;à ce que vous le
                supprimiez, que vous videz le cache de votre navigateur, ou que vous finalisiez
                votre commande. {BRAND.name} ne conserve aucune donnée au-delà de la
                conversation WhatsApp nécessaire au traitement de votre commande.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-forest-800 mb-3">
                6. Vos droits
              </h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la
                loi Informatique et Libertés, vous disposez d&rsquo;un droit d&rsquo;accès, de
                rectification, d&rsquo;effacement, de limitation et d&rsquo;opposition sur les
                données que vous nous avez communiquées via WhatsApp. Pour exercer ces droits,
                contactez-nous à {BRAND.email}. Vous disposez également du droit d&rsquo;introduire
                une réclamation auprès de la CNIL (www.cnil.fr) si vous estimez que vos droits ne
                sont pas respectés.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-forest-800 mb-3">
                7. Sécurité
              </h2>
              <p>
                L&rsquo;absence de base de données côté serveur limite fortement les risques
                liés à la conservation de vos données : nous ne pouvons pas subir de fuite de
                données que nous ne détenons pas. Les échanges via WhatsApp bénéficient du
                chiffrement de bout en bout propre à ce service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-forest-800 mb-3">
                8. Modifications de cette politique
              </h2>
              <p>
                Cette politique de confidentialité peut être mise à jour, notamment si de
                nouveaux outils (statistiques de visite, formulaire de contact, etc.) venaient à
                être ajoutés au site. La version en ligne fait toujours foi.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-forest-800 mb-3">
                9. Contact
              </h2>
              <p>
                Pour toute question relative à cette politique ou à vos données, écrivez-nous à{' '}
                {BRAND.email} ou appelez-nous au {BRAND.phone}.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
