import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum — Anderka GmbH Bauunternehmen" },
      { name: "description", content: "Impressum der Anderka GmbH Bauunternehmen, Kirchdorf/Moosham." },
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
            <h2 className="font-serif text-2xl text-foreground mb-3">Anbieter</h2>
            <p>
              Anderka GmbH Bauunternehmen<br />
              Isener Str. 6, Moosham<br />
              83527 Kirchdorf
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-serif text-2xl text-foreground mb-3">Kontakt</h2>
            <p>
              Telefon: 08072 / 575<br />
              E-Mail: info@anderka-bau-gmbh.de
            </p>
          </Reveal>
          <Reveal delay={140}>
            <p className="text-sm">
              Weitere Pflichtangaben (Handelsregister, USt-IdNr., Vertretungsberechtigte, zuständige Aufsichtsbehörde, verantwortlich für den Inhalt nach § 18 Abs. 2 MStV) werden vom Auftraggeber ergänzt.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
