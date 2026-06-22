import { createFileRoute } from "@tanstack/react-router";
import { LeistungDetail } from "@/components/site/LeistungDetail";
import heroSchluessel from "@/assets/leistung-planung.jpg";
import imgEfh from "@/assets/projekt-haus.jpg";
import imgDoppelhaus from "@/assets/hero-landwirtschaft.jpg";
import imgMfh from "@/assets/hero-tiefbau.jpg";

export const Route = createFileRoute("/leistungen/schluesselfertiges-bauen")({
  head: () => ({
    meta: [
      { title: "Schlüsselfertiges Bauen — Baugeschäft Stefan Huber" },
      { name: "description", content: "Schlüsselfertiges Bauen vom Baugeschäft Stefan Huber. Teil- oder komplett schlüsselfertig, ganz nach Ihren Wünschen — mit einem festen Ansprechpartner." },
      { property: "og:title", content: "Schlüsselfertiges Bauen — Baugeschäft Stefan Huber" },
      { property: "og:description", content: "Ihr Haus aus einer Hand. Teil- oder komplett schlüsselfertig." },
      { property: "og:url", content: "/leistungen/schluesselfertiges-bauen" },
    ],
    links: [{ rel: "canonical", href: "/leistungen/schluesselfertiges-bauen" }],
  }),
  component: () => (
    <LeistungDetail
      title="Schlüsselfertiges Bauen"
      subline="Ihr Haus aus einer Hand"
      heroImg={heroSchluessel}
      heroAlt="Schlüsselfertiges Einfamilienhaus von Baugeschäft Stefan Huber"
      lead="Wir sind Ihr Partner beim Bau Ihres Hauses."
      paragraphs={[
        "Sie entscheiden den Umfang der Leistungen von uns und unseren regionalen Partnern. Teil- oder komplett schlüsselfertig, ganz nach Ihren Wünschen.",
        "Beim schlüsselfertig Bauen zeigt sich unsere Stärke in der Ablaufplanung, denn hier sind unterschiedlichste Handwerkerleistungen zu koordinieren und abzustimmen. Wir bauen in der Region mit Partnern aus der Region.",
        "Vom Angebot bis zur Abnahme haben Sie immer einen Ansprechpartner: Stefan Huber. Er sorgt dafür, dass auf Ihrer Baustelle alles läuft.",
      ]}
      umfang={[
        "Koordination und Abstimmung aller Gewerke",
        "Ein fester Ansprechpartner: Stefan Huber",
        "Zuverlässige regionale Partner",
        "Teil- oder komplett schlüsselfertig",
        "Nachvollziehbares Angebot und detaillierte Ablaufplanung",
        "Einfamilien-, Mehrfamilien-, Doppel- und Reihenhäuser",
      ]}
      gallery={[
        { src: imgEfh, alt: "Fertiggestelltes Einfamilienhaus" },
        { src: imgDoppelhaus, alt: "Fertiggestelltes Doppelhaus" },
        { src: imgMfh, alt: "Fertiggestelltes Mehrfamilienhaus" },
      ]}
      weitere={[
        { to: "/leistungen/rohbau", label: "Rohbau" },
        { to: "/leistungen/umbau-sanierung", label: "Umbau & Sanierung" },
      ]}
    />
  ),
});
