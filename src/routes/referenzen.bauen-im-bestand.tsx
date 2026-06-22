import { createFileRoute } from "@tanstack/react-router";
import { ReferenzGalerie } from "@/components/site/ReferenzGalerie";
import galHero from "@/assets/gal-bestand-5.jpg";
import gal1 from "@/assets/gal-bestand-1.jpg";
import gal2 from "@/assets/gal-bestand-2.jpg";
import gal3 from "@/assets/gal-bestand-3.jpg";
import gal4 from "@/assets/gal-bestand-4.jpg";

export const Route = createFileRoute("/referenzen/bauen-im-bestand")({
  head: () => ({
    meta: [
      { title: "Bildergalerie Bauen im Bestand — Baugeschäft Stefan Huber" },
      { name: "description", content: "Umbau eines landwirtschaftlichen Gebäudes in eine Pension mit 12 Appartements — Teilabbruch, Rohbau, Estrich und Verputzarbeiten vom Baugeschäft Stefan Huber." },
      { property: "og:title", content: "Bildergalerie Bauen im Bestand — Baugeschäft Stefan Huber" },
      { property: "og:url", content: "/referenzen/bauen-im-bestand" },
    ],
    links: [{ rel: "canonical", href: "/referenzen/bauen-im-bestand" }],
  }),
  component: () => (
    <ReferenzGalerie
      title="Bauen im Bestand"
      intro="Umbau eines landwirtschaftlichen Gebäudes in eine Pension"
      heroImg={galHero}
      steps={[
        {
          img: gal1,
          title: "Teilabbruch Obergeschoss",
          text: "Der Dachstuhl wird entfernt, neue Öffnungen werden erstellt und die bestehenden Fenster vergrößert.",
        },
        {
          img: gal2,
          title: "Obergeschoss",
          text: "Als tragende Elemente für die neue Stahlbetondecke werden Stahlstützen gesetzt und Unterzüge geschalt.",
        },
        {
          img: gal3,
          title: "Stahlbetondecke",
          text: "Die neue Decke wird betoniert. Vorbereitung für den neuen Giebel und Stahlbetonaufkantung.",
        },
        {
          img: gal4,
          title: "Aussenansicht",
          text: "Der neue Giebel wird gemauert.",
        },
      ]}
      umfangTitel="Umbau eines ehemaligen landwirtschaftlichen Gebäudes in eine Pension mit 12 Appartements und Lagerräume"
      umfang={["Teilabbruch", "Rohbau", "Estrich", "Verputzarbeiten"]}
      weitere={[
        { to: "/referenzen/neubau", label: "Neubau" },
        { to: "/referenzen/gewerbe-kommune", label: "Gewerbe/Kommune" },
      ]}
    />
  ),
});
