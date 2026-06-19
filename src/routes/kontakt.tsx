import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, Clock, MapPin } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Anderka GmbH Bauunternehmen" },
      { name: "description", content: "Kontaktieren Sie die Anderka GmbH in Kirchdorf/Moosham per Telefon 08072 / 575 oder per E-Mail. Öffnungszeiten und Anfahrt." },
      { property: "og:title", content: "Kontakt — Anderka GmbH" },
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
        intro="Ob konkrete Anfrage, Bewerbung oder erste Idee — rufen Sie uns an oder schreiben Sie uns eine E-Mail. Wir melden uns persönlich bei Ihnen zurück."
      />

      <section className="py-20 md:py-28">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow eyebrow-line">So erreichen Sie uns</span>
          </Reveal>
          <ul className="mt-12 grid sm:grid-cols-2 gap-x-10 gap-y-12 max-w-3xl">
            <InfoItem icon={Phone} label="Telefon">
              <a href="tel:+498072575" className="link-underline">08072 / 575</a>
            </InfoItem>
            <InfoItem icon={Mail} label="E-Mail">
              <a href="mailto:info@anderka-bau-gmbh.de" className="link-underline">
                info@anderka-bau-gmbh.de
              </a>
            </InfoItem>
            <InfoItem icon={Clock} label="Öffnungszeiten">
              Mo–Do  8:00–17:00<br />Fr  8:00–12:00
            </InfoItem>
            <InfoItem icon={MapPin} label="Standort">
              Anderka GmbH Bauunternehmen<br />
              Isener Str. 6, Moosham<br />
              83527 Kirchdorf
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
                title="Standort Anderka GmbH in Kirchdorf/Moosham"
                src="https://www.google.com/maps?q=Anderka%20GmbH%20Bauunternehmen%2C%20Isener%20Str.%206%2C%2083527%20Kirchdorf&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="mt-3 text-xs text-stone">Isener Str. 6, Moosham · 83527 Kirchdorf</p>
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
