import { createFileRoute } from "@tanstack/react-router";
import { ReferenzGalerie } from "@/components/site/ReferenzGalerie";
import galHero from "@/assets/gal-gewerbe-5.jpg";
import gal1 from "@/assets/gal-gewerbe-1.jpg";
import gal2 from "@/assets/gal-gewerbe-2.jpg";
import gal3 from "@/assets/gal-gewerbe-3.jpg";
import gal4 from "@/assets/gal-gewerbe-4.jpg";

export const Route = createFileRoute("/referenzen/gewerbe-kommune")({
  head: () => ({
    meta: [
      { title: "Bildergalerie Gewerbe/Kommune — Baugeschäft Stefan Huber" },
      { name: "description", content: "Neubau einer Wäscherei mit Betriebsleiterwohnhaus, Garagen und Bürogebäude — Rohbau in Stahlbeton und Mauerwerk vom Baugeschäft Stefan Huber." },
      { property: "og:title", content: "Bildergalerie Gewerbe/Kommune — Baugeschäft Stefan Huber" },
      { property: "og:url", content: "/referenzen/gewerbe-kommune" },
    ],
    links: [{ rel: "canonical", href: "/referenzen/gewerbe-kommune" }],
  }),
  component: () => (
    <ReferenzGalerie
      title="Gewerbe/Kommune"
      intro="Neubau einer Wäscherei"
      heroImg={galHero}
      steps={[
        {
          img: gal1,
          title: "Bodenplatte und Giebel Garagen im Rohbau",
          text: "Verlegen der Rollbewehrung für die Bodenplatte.",
        },
        {
          img: gal2,
          title: "Untergeschoss",
          text: "Wände und Stützen in Stahlbeton.",
        },
        {
          img: gal3,
          title: "Erdgeschoss",
          text: "Einsetzen der Bewehrung im Mauerwerk für die Stahlbetonstützen.",
        },
        {
          img: gal4,
          title: "Erdgeschoss und Giebel",
          text: "Mauerwerk mit Stahlbetonstützen, Unterzügen und Ringanker. Stahlbetoneinhausung für den Wäscherei-Dampfkessel.",
        },
      ]}
      umfangTitel="Unsere Leistungen im Rohbau"
      umfang={["Betriebsleiterwohnhaus", "Garagen mit Unterfahrt", "Wäschereigebäude", "Bürogebäude"]}
      weitere={[
        { to: "/referenzen/neubau", label: "Neubau" },
        { to: "/referenzen/bauen-im-bestand", label: "Bauen im Bestand" },
      ]}
    />
  ),
});
