import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz — Anderka GmbH Bauunternehmen" },
      { name: "description", content: "Datenschutzerklärung der Anderka GmbH Bauunternehmen." },
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
              Anderka GmbH Bauunternehmen, Isener Str. 6, Moosham, 83527 Kirchdorf.
              E-Mail: info@anderka-bau-gmbh.de · Telefon: 08072 / 575
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
