import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz — Baugeschäft Stefan Huber" },
      { name: "description", content: "Datenschutzerklärung des Baugeschäfts Stefan Huber GmbH & Co. KG." },
      { name: "robots", content: "noindex" },
      { property: "og:url", content: "/datenschutz" },
    ],
    links: [{ rel: "canonical", href: "/datenschutz" }],
  }),
  component: Datenschutz,
});

function Datenschutz() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Datenschutz"
        intro="Wir nehmen den Schutz Ihrer persönlichen Daten ernst und behandeln sie vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften."
      />
      <section className="py-20">
        <div className="container-x max-w-3xl space-y-10 text-stone leading-relaxed">
          <Reveal>
            <h2 className="font-serif text-2xl text-foreground mb-3">Verantwortlicher</h2>
            <p>
              Baugeschäft Stefan Huber GmbH &amp; Co. KG, Manhartsdorf 18, 85456 Wartenberg.
              Verantwortlicher: Stefan Huber. E-Mail: info@baugeschaeft-huber.de · Telefon: 08762 - 18 89
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-serif text-2xl text-foreground mb-3">Kontaktformular</h2>
            <p>
              Übermittelte Angaben aus dem Kontaktformular verarbeiten wir ausschließlich zur Bearbeitung Ihrer Anfrage. Eine Weitergabe an Dritte erfolgt nicht.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <h2 className="font-serif text-2xl text-foreground mb-3">Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten. Wenden Sie sich hierzu an die oben genannten Kontaktdaten.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-sm">
              Eine vollständige Datenschutzerklärung wird vom Auftraggeber ergänzt.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
