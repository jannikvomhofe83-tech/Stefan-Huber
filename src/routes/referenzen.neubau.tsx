import { createFileRoute } from "@tanstack/react-router";
import { ReferenzGalerie } from "@/components/site/ReferenzGalerie";
import galHero from "@/assets/gal-neubau-4.jpg";
import gal1 from "@/assets/gal-neubau-1.jpg";
import gal2 from "@/assets/gal-neubau-2.jpg";
import gal3 from "@/assets/gal-neubau-3.jpg";

export const Route = createFileRoute("/referenzen/neubau")({
  head: () => ({
    meta: [
      { title: "Bildergalerie Neubau — Baugeschäft Stefan Huber" },
      { name: "description", content: "Neubau Einfamilienhaus mit Carport — Rohbau, Estrich und Verputzarbeiten vom Baugeschäft Stefan Huber. Vom Keller bis zum fertigen Haus." },
      { property: "og:title", content: "Bildergalerie Neubau — Baugeschäft Stefan Huber" },
      { property: "og:url", content: "/referenzen/neubau" },
    ],
    links: [{ rel: "canonical", href: "/referenzen/neubau" }],
  }),
  component: () => (
    <ReferenzGalerie
      title="Neubau Einfamilienhaus"
      intro="Einfamilienhaus mit Carport — KG, EG, OG"
      heroImg={galHero}
      steps={[
        {
          img: gal1,
          title: "Kellerwand",
          text: "Die äußere Schalung wird aufgestellt und die Bewehrung verlegt.",
        },
        {
          img: gal2,
          title: "Kellergeschoss",
          text: "Zur Abdichtung des Kellers wird eine Bitumendickbeschichtung aufgebracht. Die Außenwände werden gedämmt. Die Innenwände werden gemauert.",
        },
        {
          img: gal3,
          title: "Erdgeschoss",
          text: "Der Eingangsbereich dieses Einfamilienhauses wird in Sichtbeton erstellt. Die Betonfertigteile werden in zwei Teilen aufgestellt und zur Montage abgestützt.",
        },
      ]}
      umfangTitel="Unser Leistungsumfang für dieses Einfamilienhaus mit Carport"
      umfang={["Rohbau", "Estrich", "Verputzarbeiten"]}
      weitere={[
        { to: "/referenzen/bauen-im-bestand", label: "Bauen im Bestand" },
        { to: "/referenzen/gewerbe-kommune", label: "Gewerbe/Kommune" },
      ]}
    />
  ),
});
