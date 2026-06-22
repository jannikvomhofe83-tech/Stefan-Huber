import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum — Baugeschäft Stefan Huber" },
      { name: "description", content: "Impressum des Baugeschäfts Stefan Huber GmbH & Co. KG, Wartenberg." },
      { name: "robots", content: "noindex" },
      { property: "og:url", content: "/impressum" },
    ],
    links: [{ rel: "canonical", href: "/impressum" }],
  }),
  component: Impressum,
});

function Impressum() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Impressum" intro="Pflichtangaben gemäß § 5 TMG." />
      <section className="py-20">
        <div className="container-x max-w-3xl space-y-10 text-stone leading-relaxed">
          <Reveal>
            <h2 className="font-serif text-2xl text-foreground mb-3">Angaben gemäß § 5 TMG</h2>
            <p>
              Baugeschäft Stefan Huber GmbH &amp; Co. KG<br />
              Manhartsdorf 18<br />
              85456 Wartenberg
            </p>
            <p className="mt-4">
              Handelsregister: HRA 93219<br />
              Registergericht: Amtsgericht München
            </p>
            <p className="mt-4">Vertreten durch: Stefan Huber</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-serif text-2xl text-foreground mb-3">Kontakt</h2>
            <p>
              Telefon: 08762-1889<br />
              Telefax: 08762-5183<br />
              E-Mail: info@baugeschaeft-huber.de
            </p>
          </Reveal>
          <Reveal delay={140}>
            <h2 className="font-serif text-2xl text-foreground mb-3">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE262771101
            </p>
            <p className="mt-4">Redaktionell Verantwortlicher: Stefan Huber</p>
          </Reveal>
          <Reveal delay={160}>
            <h2 className="font-serif text-2xl text-foreground mb-3">EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a href="https://ec.europa.eu/consumers/odr" className="link-underline" target="_blank" rel="noopener noreferrer">
                https://ec.europa.eu/consumers/odr
              </a>
              . Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <h2 className="font-serif text-2xl text-foreground mb-3">
              Verbraucherstreitbeilegung/Universalschlichtungsstelle
            </h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <h2 className="font-serif text-2xl text-foreground mb-3">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <h2 className="font-serif text-2xl text-foreground mb-3">Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <h2 className="font-serif text-2xl text-foreground mb-3">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
