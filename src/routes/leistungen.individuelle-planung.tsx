import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import heroPlanung from "@/assets/leistung-planung-hero.jpg";
import lgMassgeschneidert from "@/assets/lg-massgeschneidert.jpg";
import leistungPlanung from "@/assets/leistung-planung.jpg";
import heroHaus from "@/assets/hero-einfamilienhaus.jpg";

export const Route = createFileRoute("/leistungen/individuelle-planung")({
  head: () => ({
    meta: [
      { title: "Individuelle Planung — Anderka GmbH Bauunternehmen" },
      { name: "description", content: "Vom ersten Strich bis zur Genehmigung: Unser Planer entwickelt mit Ihnen Konzept und Eingabeplanung und begleitet Ihr Bauvorhaben — individuell, präzise, machbar." },
      { property: "og:title", content: "Individuelle Planung — Anderka GmbH" },
      { property: "og:description", content: "Konzept, Eingabeplanung und Begleitung bis zur Genehmigung — aus einer Hand." },
      { property: "og:url", content: "/leistungen/individuelle-planung" },
    ],
    links: [{ rel: "canonical", href: "/leistungen/individuelle-planung" }],
  }),
  component: IndividuellePlanung,
});

const pakete = [
  {
    img: lgMassgeschneidert,
    titel: "Konzept & Entwurf",
    text: "Wir entwickeln gemeinsam die Idee — vom Grundriss bis zum stimmigen Gesamtbild.",
  },
  {
    img: leistungPlanung,
    titel: "Eingabeplanung",
    text: "Präzise Pläne und Unterlagen, die bei der Behörde reibungslos durchgehen.",
  },
  {
    img: heroHaus,
    titel: "Bis zur Genehmigung",
    text: "Wir begleiten Ihr Vorhaben bis zum Baubescheid — ein Ansprechpartner für alles.",
  },
];

function IndividuellePlanung() {
  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-[82svh] min-h-[520px] overflow-hidden">
        <img
          src={heroPlanung}
          alt="Individuell geplantes modernes Wohnhaus in bayerischer Landschaft"
          width={2688}
          height={1520}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/25" />
        <div className="relative h-full container-x flex flex-col justify-end pb-16 md:pb-24 pt-40 text-white">
          <Reveal>
            <h1 className="font-serif text-[clamp(2.6rem,7vw,6rem)] leading-[0.95] tracking-tight">
              Individuelle Planung
            </h1>
            <p className="mt-3 font-serif text-2xl md:text-4xl font-light text-white/90">
              Vom ersten Strich an
            </p>
          </Reveal>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="border-b border-border">
        <div className="container-x py-4 flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-stone">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span aria-hidden>›</span>
          <Link to="/leistungen/individuelle-planung" className="hover:text-foreground transition-colors">Leistungen</Link>
          <span aria-hidden>›</span>
          <span className="text-foreground">Individuelle Planung</span>
        </div>
      </div>

      {/* INTRO (dunkel) + PAKETE */}
      <section className="bg-foreground text-background py-20 md:py-28">
        <div className="container-x">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <h2 className="font-serif text-4xl md:text-6xl leading-[1.05]">
                Ihr Partner für die individuelle Bauplanung
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-8 font-medium text-lg md:text-xl">
                Wer mit Anderka plant, baut auf Erfahrung.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-6 space-y-5 text-background/80 leading-relaxed text-lg text-left md:text-center">
                <p>
                  Unser Planer entwickelt mit Ihnen das Konzept, erstellt die Eingabeplanung und
                  begleitet Ihr Vorhaben bis zur Genehmigung — individuell, präzise und machbar.
                  Vom ersten Strich auf dem Papier bis zum Schlüssel in Ihrer Hand bleiben Sie bei
                  einem Ansprechpartner.
                </p>
                <p>
                  Am Anfang steht das persönliche Gespräch: Wir hören zu, schauen uns Ihr Grundstück
                  an und verstehen, wie Sie wohnen oder arbeiten wollen. Aus Ihren Ideen, dem Budget
                  und den Gegebenheiten vor Ort entsteht ein Entwurf, der zu Ihnen passt — funktional
                  durchdacht, energieeffizient und auf den Quadratmeter abgestimmt.
                </p>
                <p>
                  Anschließend bringen wir alles zu Papier, das die Behörde sehen will: Eingabepläne,
                  Ansichten und die nötigen Unterlagen für einen reibungslosen Bauantrag. Wir kennen
                  die Abläufe in der Region, stimmen uns mit Ämtern und Fachplanern ab und halten Sie
                  über jeden Schritt auf dem Laufenden.
                </p>
                <p>
                  Der große Vorteil: Planung und Ausführung kommen bei Anderka aus einer Hand. Was
                  wir zeichnen, können wir auch bauen — das spart Reibungsverluste, Zeit und
                  Missverständnisse. So wird aus Ihrer Idee ein Bauwerk, das bleibt.
                </p>
              </div>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-10">
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-medium uppercase tracking-[0.12em] hover:bg-primary-dark transition-colors"
                >
                  Jetzt Termin anfragen <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <h3 className="mt-20 md:mt-28 text-center font-serif text-3xl md:text-4xl">
              Von der Idee bis zum Baubescheid
            </h3>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-3 gap-6 md:gap-8">
            {pakete.map((p, i) => (
              <Reveal as="article" key={p.titel} delay={i * 120} className="group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.titel}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                  <h4 className="absolute bottom-0 left-0 p-6 font-serif text-2xl text-white">
                    {p.titel}
                  </h4>
                </div>
                <p className="mt-4 text-background/75 leading-relaxed">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-x py-20 md:py-24 grid md:grid-cols-12 gap-10 items-center">
          <Reveal className="md:col-span-7">
            <h2 className="font-serif text-3xl md:text-5xl leading-[1.05]">
              Ihre Idee — unser erster Strich.
            </h2>
            <p className="mt-4 text-primary-foreground/85 max-w-xl">
              Erzählen Sie uns von Ihrem Vorhaben. Wir melden uns persönlich zurück.
            </p>
          </Reveal>
          <div className="md:col-span-5 md:text-right">
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-3 bg-background text-foreground px-6 py-4 font-medium hover:bg-foreground hover:text-background transition-colors"
            >
              Projekt anfragen <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
