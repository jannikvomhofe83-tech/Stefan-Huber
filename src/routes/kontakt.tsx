import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, Printer, MapPin } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Baugeschäft Stefan Huber" },
      { name: "description", content: "Kontaktieren Sie das Baugeschäft Stefan Huber in Wartenberg per Telefon 08762 - 18 89 oder per E-Mail. Öffnungszeiten und Anfahrt." },
      { property: "og:title", content: "Kontakt — Baugeschäft Stefan Huber" },
      { property: "og:description", content: "Wir freuen uns auf Ihre Anfrage." },
      { property: "og:url", content: "/kontakt" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
  }),
  component: Kontakt,
});

function Kontakt() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Erzählen Sie uns von Ihrem Vorhaben."
        intro="Gerne erstellen wir ein detailliertes Angebot für Sie. Vom Angebot bis zur Abnahme haben Sie immer einen Ansprechpartner: Stefan Huber."
      />

      <section className="py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow eyebrow-line">So erreichen Sie uns</span>
          </Reveal>
          <ul className="mt-12 grid sm:grid-cols-2 gap-x-10 gap-y-12 max-w-3xl">
            <InfoItem icon={Phone} label="Telefon">
              <a href="tel:+4987621889" className="link-underline">08762 - 18 89</a>
            </InfoItem>
            <InfoItem icon={Printer} label="Telefax">
              <a href="fax:+4987625183" className="link-underline">08762 - 51 83</a>
            </InfoItem>
            <InfoItem icon={Mail} label="E-Mail">
              <a href="mailto:info@baugeschaeft-huber.de" className="link-underline">
                info@baugeschaeft-huber.de
              </a>
            </InfoItem>
            <InfoItem icon={MapPin} label="Standort">
              Baugeschäft Stefan Huber GmbH &amp; Co. KG<br />
              Manhartsdorf 18<br />
              85456 Wartenberg
            </InfoItem>
          </ul>
        </div>
      </section>

      {/* MAP */}
      <section className="pb-24">
        <div className="container-x">
          <Reveal>
            <div className="relative aspect-[16/9] md:aspect-[21/8] overflow-hidden border border-border">
              <iframe
                title="Standort Baugeschäft Stefan Huber in Wartenberg"
                src="https://www.google.com/maps?q=Baugesch%C3%A4ft%20Stefan%20Huber%2C%20Manhartsdorf%2018%2C%2085456%20Wartenberg&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="mt-3 text-xs text-stone">Manhartsdorf 18 · 85456 Wartenberg</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function InfoItem({ icon: Icon, label, children }: { icon: any; label: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-5">
      <span className="grid place-items-center w-11 h-11 bg-primary-tint text-primary shrink-0">
        <Icon size={18} />
      </span>
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-stone">{label}</p>
        <div className="mt-2 text-foreground leading-relaxed">{children}</div>
      </div>
    </li>
  );
}
