import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Play, Heart, Volume2, Settings, Maximize } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import unternehmenVideo from "@/assets/unternehmen-video.jpg";
import untStart from "@/assets/unt-start.jpg";
import untEntwicklung from "@/assets/unt-entwicklung.jpg";
import untGegenwart from "@/assets/unt-gegenwart.jpg";
import lgFamilie from "@/assets/lg-familie.jpg";
import lgMassgeschneidert from "@/assets/lg-massgeschneidert.jpg";
import lgAusbildung from "@/assets/lg-ausbildung.jpg";
import logoMarker from "@/assets/logo-anderka.png";

export const Route = createFileRoute("/unternehmen")({
  head: () => ({
    meta: [
      { title: "Über uns — Baugeschäft Stefan Huber" },
      { name: "description", content: "Familienbetrieb in Wartenberg. Gegründet von Konrad Huber sen., seit 2008 von Stefan Huber geführt. Durchdachte Ablaufplanung für Rohbau, schlüsselfertiges Bauen sowie Umbau & Sanierung." },
      { property: "og:title", content: "Über uns — Baugeschäft Stefan Huber" },
      { property: "og:description", content: "Familienbetrieb für Rohbau, schlüsselfertiges Bauen sowie Umbau & Sanierung in der Region." },
      { property: "og:url", content: "/unternehmen" },
    ],
    links: [{ rel: "canonical", href: "/unternehmen" }],
  }),
  component: Unternehmen,
});

const meilensteine = [
  {
    titel: "Gründung",
    img: untStart,
    text: [
      "Unser Familienbetrieb wurde von Konrad Huber sen. gegründet. Darauf bauen wir bis heute.",
      "Ein Team aus erfahrenen, langjährigen Mitarbeitern bildet seither die Grundlage für hochwertige Bauarbeiten.",
    ],
  },
  {
    titel: "2008 — Neuausrichtung",
    img: untEntwicklung,
    text: [
      "Seit 2008 wird der Betrieb mit neuem Namen von Stefan Huber geführt und weiterentwickelt.",
      "Er ist staatl. geprüfter Bautechniker und Maurer- und Betonbaumeister.",
    ],
  },
  {
    titel: "Heute",
    img: untGegenwart,
    text: [
      "Unser Ziel ist, dass unsere Bauherren zufrieden sind und uns weiterempfehlen. Darauf bauen wir seit 2008.",
      "Vertrauen Sie unserer Erfahrung aus vielen Projekten im Rohbau, beim schlüsselfertig Bauen oder im Umbau. Wir bauen in der Region mit Partnern aus der Region.",
    ],
  },
];

function Unternehmen() {
  return (
    <>
      {/* HERO VIDEO */}
      <section className="pt-28 md:pt-36 pb-10 md:pb-14">
        <div className="container-x">
          <nav className="mb-6 flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-stone">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span aria-hidden>›</span>
            <span className="text-foreground">Über uns</span>
          </nav>

          <div className="relative aspect-video w-full overflow-hidden bg-black group select-none cursor-pointer">
            <img
              src={unternehmenVideo}
              alt="Baugeschäft Stefan Huber — Unternehmensfilm (Vorschau)"
              width={2688}
              height={1520}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />

            {/* Like */}
            <div className="absolute top-4 right-4 grid place-items-center w-10 h-10 bg-black/55 text-white">
              <Heart size={18} />
            </div>

            {/* Play */}
            <div className="absolute inset-0 grid place-items-center">
              <span className="grid place-items-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary text-white shadow-xl ring-8 ring-white/15 transition-transform duration-300 group-hover:scale-105">
                <Play size={34} fill="currentColor" className="translate-x-0.5" />
              </span>
            </div>

            {/* Label-Box */}
            <div className="absolute bottom-16 md:bottom-20 right-5 md:right-10 border border-white/70 px-5 md:px-8 py-3 md:py-5 text-right text-white">
              <div className="font-serif text-2xl md:text-4xl tracking-wide">Arbeitswelt</div>
              <div className="mt-2 inline-block bg-primary text-primary-foreground px-3 py-1 text-[10px] md:text-xs uppercase tracking-[0.2em]">
                Stefan Huber
              </div>
            </div>

            {/* Steuerleiste (Attrappe) */}
            <div className="absolute bottom-0 inset-x-0 bg-black/80 px-3 md:px-4 py-2.5 flex items-center gap-3 text-white">
              <Play size={16} fill="currentColor" />
              <span className="text-[11px] tabular-nums text-white/80">00:00</span>
              <div className="flex-1 h-1 bg-white/25 rounded-full overflow-hidden">
                <div className="h-full w-1/4 bg-primary" />
              </div>
              <span className="text-[11px] tabular-nums text-white/80">04:54</span>
              <Volume2 size={16} className="hidden sm:block" />
              <Settings size={16} className="hidden sm:block" />
              <Maximize size={16} />
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="pt-6 md:pt-10 pb-4">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="eyebrow eyebrow-line">Über uns</span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05]">
                Baugeschäft Stefan Huber
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-8 text-lg font-medium text-foreground leading-relaxed">
                Unsere absolute Stärke ist eine durchdachte Ablaufplanung und eine perfekte Organisation der verschiedenen Gewerke und Tätigkeiten.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-8 space-y-6 text-lg text-stone leading-relaxed text-center">
                <p>
                  Unser Ziel ist, dass unsere Bauherren zufrieden sind und uns weiterempfehlen. Darauf bauen wir seit 2008. Wir, das ist ein Team aus erfahrenen, langjährigen Mitarbeitern. Unser Familienbetrieb, wurde von Konrad Huber sen. gegründet und wird seit 2008 mit neuem Namen von Stefan Huber, geführt und weiterentwickelt. Er ist staatl. geprüfter Bautechniker und Maurer- und Betonbaumeister.
                </p>
                <p>
                  Sie haben während der ganzen Bauphase immer einen Ansprechpartner der dafür sorgt, dass auf Ihrer Baustelle alles läuft.
                </p>
                <p>
                  Vertrauen Sie unserer Erfahrung aus vielen Projekten im Rohbau oder im Umbau. Beim schlüsselfertig Bauen zeigt sich unsere Stärke in der Ablaufplanung, denn hier sind unterschiedlichste Handwerkerleistungen zu koordinieren und abzustimmen. Wir bauen in der Region mit Partnern aus der Region.
                </p>
                <p>
                  Verstärkung für unser Team ist immer willkommen. Deshalb freuen wir uns auf Bewerbungen von Facharbeitern (m/w/d) im Bauhandwerk.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-12 md:py-24">
        <div className="container-x">
          <div className="relative">
            {/* Gestrichelte Mittellinie */}
            <span
              className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px border-l border-dashed border-stone/40"
              aria-hidden
            />
            <div className="flex flex-col gap-16 md:gap-28">
              {meilensteine.map((m, i) => {
                const imageLeft = i % 2 === 1;
                return (
                  <Reveal as="div" key={m.titel} className="relative md:grid md:grid-cols-2 md:gap-20 md:items-center">
                    {/* Logo-Marker auf der Linie */}
                    <span className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 items-center justify-center bg-background px-2 py-3">
                      <img src={logoMarker} alt="" aria-hidden className="w-12 h-auto" />
                    </span>

                    {/* Text */}
                    <div className={imageLeft ? "md:order-2 md:pl-10" : "md:order-1 md:pr-10"}>
                      <h3 className="font-serif text-3xl md:text-4xl leading-[1.1]">{m.titel}</h3>
                      <div className="mt-5 space-y-4 text-stone leading-relaxed">
                        {m.text.map((p, j) => (
                          <p key={j}>{p}</p>
                        ))}
                      </div>
                    </div>

                    {/* Bild */}
                    <div className={`mt-6 md:mt-0 ${imageLeft ? "md:order-1 md:pr-10" : "md:order-2 md:pl-10"}`}>
                      <div className="relative aspect-[3/2] overflow-hidden shadow-editorial">
                        <img
                          src={m.img}
                          alt={`Baugeschäft Stefan Huber — ${m.titel}`}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* LEITGEDANKEN */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <h2 className="font-serif text-4xl md:text-6xl leading-[1.05]">
                Unsere Leitgedanken
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-8 text-lg text-stone leading-relaxed">
                Bauen ist für uns mehr als Material und Termin. Drei Leitgedanken bestimmen, wie wir planen, bauen und zusammenarbeiten — sie sind das Bindeglied über alle Bereiche hinweg und zeigen sich an jeder Baustelle, die wir hinterlassen.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 md:mt-24 flex flex-col gap-16 md:gap-24">
            {[
              { titel: "Durchdachte Ablaufplanung", img: lgFamilie, text: "Unsere absolute Stärke ist eine durchdachte Ablaufplanung und eine perfekte Organisation der verschiedenen Gewerke und Tätigkeiten — denn beim schlüsselfertig Bauen sind unterschiedlichste Handwerkerleistungen zu koordinieren und abzustimmen." },
              { titel: "Ein fester Ansprechpartner", img: lgMassgeschneidert, text: "Sie haben während der ganzen Bauphase immer einen Ansprechpartner, der dafür sorgt, dass auf Ihrer Baustelle alles läuft — vom Angebot bis zur Abnahme." },
              { titel: "Regional mit regionalen Partnern", img: lgAusbildung, text: "Wir bauen in der Region mit Partnern aus der Region. Vertrauen Sie unserer Erfahrung aus vielen Projekten im Rohbau, beim schlüsselfertigen Bauen oder im Umbau." },
            ].map((g, i) => {
              const imageLeft = i % 2 === 1;
              return (
                <Reveal as="div" key={g.titel} className="relative md:flex md:items-center md:min-h-[360px]">
                  {/* Bild — bricht oben/unten aus dem Rahmen aus, ohne den Text zu überlappen */}
                  <div className={`relative z-10 md:absolute md:inset-y-0 md:w-1/2 ${imageLeft ? "md:left-0" : "md:right-0"}`}>
                    <div className="relative aspect-[3/2] md:aspect-auto md:h-full overflow-hidden shadow-editorial">
                      <img src={g.img} alt={g.titel} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                  </div>

                  {/* Rahmen mit Text */}
                  <div className={`mt-6 md:mt-0 w-full border border-stone/30 p-8 md:py-16 md:my-6 md:flex md:flex-col md:justify-center ${imageLeft ? "md:pl-[54%] md:pr-12" : "md:pr-[54%] md:pl-12"}`}>
                    <h3 className="font-serif text-3xl md:text-4xl leading-[1.1]">{g.titel}</h3>
                    <p className="mt-5 text-stone leading-relaxed max-w-md">{g.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* TEAM — FULL WIDTH */}
      <section className="relative w-full h-[55vh] min-h-[360px] md:h-[72vh] overflow-hidden">
        <img
          src={lgFamilie}
          alt="Das Team von Baugeschäft Stefan Huber"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-black/10" />
        <div className="absolute inset-0 flex items-end">
          <div className="m-6 md:m-10 border border-white/50 text-white backdrop-blur-[1px]">
            <div className="flex items-stretch">
              {/* Senkrechte Beschriftung */}
              <div className="flex items-center justify-center border-r border-white/25 px-2 md:px-3">
                <span className="[writing-mode:vertical-rl] rotate-180 text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/80 py-6">
                  Team
                </span>
              </div>
              {/* Inhalt */}
              <div className="p-6 md:p-10 pr-10 md:pr-20">
                <h2 className="font-serif text-3xl md:text-5xl tracking-wide">Unser Team</h2>
                <p className="mt-2 font-serif text-xl md:text-2xl font-light text-white/85">
                  Ein starkes Team — seit 2008
                </p>
                <Link
                  to="/karriere"
                  className="mt-8 inline-block border-t border-white/40 pt-3 text-sm uppercase tracking-[0.18em] text-white/90 hover:text-white transition-colors"
                >
                  Karriere
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEITGEDANKE — ZITAT */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="container-x">
          <div className="relative mx-auto max-w-3xl text-center">
            <Reveal>
              <h2 className="font-serif text-4xl md:text-6xl leading-[1.05]">
                Wir nehmen uns Zeit für Ihre Ideen
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-8 space-y-6 text-lg text-stone leading-relaxed">
                <p>
                  Wir nehmen uns Zeit für Ihre Ideen und Wünsche und sorgen mit einem nachvollziehbaren Angebot sowie einer detaillierten Ablaufplanung dafür, dass es auf Ihrer Baustelle reibungslos läuft.
                </p>
                <p>
                  Bereits während der Angebotsphase überlegen wir uns, wie wir Ihr Projekt ausführen können und besprechen alle Punkte detailliert mit Ihnen. Uns ist wichtig, dass Ihre Fragen beantwortet werden.
                </p>
                <p className="font-medium text-foreground">
                  Vom Angebot bis zur Abnahme haben Sie immer einen Ansprechpartner: Stefan Huber.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-x py-20 md:py-24 grid md:grid-cols-12 gap-10 items-center">
          <h2 className="md:col-span-7 font-serif text-3xl md:text-5xl leading-[1.05]">
            Lernen Sie uns kennen.
          </h2>
          <div className="md:col-span-5 md:text-right">
            <Link to="/kontakt" className="inline-flex items-center gap-3 bg-background text-foreground px-6 py-4 font-medium hover:bg-foreground hover:text-background transition-colors">
              Kontakt aufnehmen <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
