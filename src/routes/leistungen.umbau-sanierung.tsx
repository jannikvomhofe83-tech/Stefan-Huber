import { createFileRoute } from "@tanstack/react-router";
import { LeistungDetail } from "@/components/site/LeistungDetail";
import heroUmbau from "@/assets/leistung-umbau.jpg";
import imgBestand from "@/assets/lg-ausbildung.jpg";
import imgHotel from "@/assets/ref-hotel.jpg";
import imgKirche from "@/assets/ref-kirche.jpg";

export const Route = createFileRoute("/leistungen/umbau-sanierung")({
  head: () => ({
    meta: [
      { title: "Umbau & Sanierung — Baugeschäft Stefan Huber" },
      { name: "description", content: "Umbau und Sanierung vom Baugeschäft Stefan Huber. Wir passen Ihr bestehendes Objekt der aktuellen Wohnsituation an oder sanieren es — mit Erfahrung aus vielen Projekten im Umbau." },
      { property: "og:title", content: "Umbau & Sanierung — Baugeschäft Stefan Huber" },
      { property: "og:description", content: "Bestand erhalten, weiterentwickeln und modernisieren." },
      { property: "og:url", content: "/leistungen/umbau-sanierung" },
    ],
    links: [{ rel: "canonical", href: "/leistungen/umbau-sanierung" }],
  }),
  component: () => (
    <LeistungDetail
      title="Umbau & Sanierung"
      subline="Bestand erhalten und weiterentwickeln"
      heroImg={heroUmbau}
      heroAlt="Umbau eines Bestandsgebäudes von Baugeschäft Stefan Huber"
      lead="Um Ihr bestehendes Objekt der aktuellen Wohnsituation anzupassen oder um dieses zu sanieren, beraten wir Sie gerne."
      paragraphs={[
        "Vertrauen Sie unserer Erfahrung aus vielen Projekten im Umbau. Ob Teilabbruch, neue Öffnungen, eine zusätzliche Stahlbetondecke oder ein neuer Giebel — wir entwickeln Bestand mit Respekt vor dem, was schon steht.",
        "Von der Wohnraumerweiterung über den Anbau und die Aufstockung bis zur kompletten Altbausanierung: Wir bringen Ihr Gebäude technisch und energetisch auf einen aktuellen Stand. Auch anspruchsvolle Projekte wie der Umbau eines landwirtschaftlichen Gebäudes in eine Pension oder die Sanierung öffentlicher Bauten zählen zu unseren Referenzen.",
        "Wie beim Neubau gilt auch hier: Sie haben während der ganzen Bauphase immer einen Ansprechpartner, der dafür sorgt, dass auf Ihrer Baustelle alles läuft.",
      ]}
      umfang={[
        "Umbau und Modernisierung",
        "Altbausanierung",
        "Wohnraumerweiterung",
        "Anbau und Aufstockung",
        "Teilabbruch und neue Öffnungen",
        "Estrich und Verputzarbeiten",
      ]}
      gallery={[
        { src: imgBestand, alt: "Umbau im Bestand" },
        { src: imgHotel, alt: "Umbau Hotel Kandler" },
        { src: imgKirche, alt: "Sanierung Kirche Berglern" },
      ]}
      weitere={[
        { to: "/leistungen/rohbau", label: "Rohbau" },
        { to: "/leistungen/schluesselfertiges-bauen", label: "Schlüsselfertiges Bauen" },
      ]}
    />
  ),
});
