import { createFileRoute } from "@tanstack/react-router";
import { LeistungDetail } from "@/components/site/LeistungDetail";
import heroRohbau from "@/assets/leistung-rohbau.jpg";
import imgKeller from "@/assets/job-ausbildung.jpg";
import imgSichtbeton from "@/assets/leistung-sichtbeton.jpg";
import imgStahlbeton from "@/assets/unternehmen-video.jpg";

export const Route = createFileRoute("/leistungen/rohbau")({
  head: () => ({
    meta: [
      { title: "Rohbau — Baugeschäft Stefan Huber" },
      { name: "description", content: "Rohbau in massiver Ziegelbauweise vom Baugeschäft Stefan Huber. Vertrauen Sie unserer Erfahrung aus vielen Projekten im Rohbau." },
      { property: "og:title", content: "Rohbau — Baugeschäft Stefan Huber" },
      { property: "og:description", content: "Wir erstellen Ihren Rohbau in massiver Ziegelbauweise." },
      { property: "og:url", content: "/leistungen/rohbau" },
    ],
    links: [{ rel: "canonical", href: "/leistungen/rohbau" }],
  }),
  component: () => (
    <LeistungDetail
      title="Rohbau"
      subline="Massive Ziegelbauweise"
      heroImg={heroRohbau}
      heroAlt="Mehrfamilienhaus im Rohbau von Baugeschäft Stefan Huber"
      lead="Wir erstellen Ihren Rohbau in massiver Ziegelbauweise."
      paragraphs={[
        "Vertrauen Sie unserer Erfahrung aus vielen Projekten im Rohbau. Vom Keller über das Mauerwerk bis zur Stahlbetondecke arbeiten wir präzise, sauber und termintreu — die solide Grundlage für jedes Bauvorhaben.",
        "Ob Einfamilienhaus, Mehrfamilienhaus mit Tiefgarage oder Gewerbebau: Wir setzen Kellerwände und Bodenplatten, mauern in Ziegelbauweise und stellen tragende Elemente in Stahlbeton her — Stützen, Unterzüge, Ringanker und Decken.",
        "Unsere Stärke ist eine durchdachte Ablaufplanung und die perfekte Organisation der verschiedenen Gewerke und Tätigkeiten. So läuft es auf Ihrer Baustelle reibungslos.",
      ]}
      umfang={[
        "Kellerwände und Bodenplatte",
        "Mauerwerk in massiver Ziegelbauweise",
        "Stahlbeton: Stützen, Unterzüge, Decken",
        "Sichtbeton und Sichtmauerwerk",
        "Estrich",
        "Verputzarbeiten",
      ]}
      gallery={[
        { src: imgKeller, alt: "Kellergeschoss im Rohbau" },
        { src: imgSichtbeton, alt: "Erdgeschoss in Sichtbeton" },
        { src: imgStahlbeton, alt: "Mauerwerk mit Stahlbetonstützen" },
      ]}
      weitere={[
        { to: "/leistungen/schluesselfertiges-bauen", label: "Schlüsselfertiges Bauen" },
        { to: "/leistungen/umbau-sanierung", label: "Umbau & Sanierung" },
      ]}
    />
  ),
});
