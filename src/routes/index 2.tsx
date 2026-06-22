import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import heroHaus from "@/assets/hero-einfamilienhaus.jpg";
import heroLandwirtschaft from "@/assets/hero-landwirtschaft.jpg";
import heroTiefbau from "@/assets/hero-tiefbau.jpg";
import heroGewerbe from "@/assets/hero-gewerbebau.jpg";
import leistungPlanung from "@/assets/leistung-planung.jpg";
import leistungRohbau from "@/assets/leistung-rohbau.jpg";
import leistungUmbau from "@/assets/leistung-umbau.jpg";
import kompetenzNeubau from "@/assets/kompetenz-neubau.png";
import kompetenzBestand from "@/assets/kompetenz-bestand.png";
import kompetenzGewerbe from "@/assets/kompetenz-gewerbe.png";
import refFeuerwehr from "@/assets/ref-feuerwehr.jpg";
import refHotel from "@/assets/ref-hotel.jpg";
import refKinderkrippe from "@/assets/ref-kinderkrippe.jpg";
import refKirche from "@/assets/ref-kirche.jpg";
import refMehrfamilienhaus from "@/assets/ref-mehrfamilienhaus.jpg";
import refPension from "@/assets/ref-pension.jpg";
import ortKirchdorf from "@/assets/ort-kirchdorf.jpg";
import { Reveal } from "@/components/site/Reveal";

const heroSlides = [
  { src: heroHaus, alt: "Schlüsselfertiges Einfamilienhaus von Baugeschäft Stefan Huber" },
  { src: heroLandwirtschaft, alt: "Fertiggestelltes Doppelhaus von Baugeschäft Stefan Huber" },
  { src: heroTiefbau, alt: "Mehrfamilienhaus von Baugeschäft Stefan Huber" },
  { src: heroGewerbe, alt: "Gewerbe- und Kommunalbau von Baugeschäft Stefan Huber" },
];

export const Route = createFileRoute("/index 2")({
  head: () => ({
    meta: [
      { title: "Baugeschäft Stefan Huber — Rohbau · schlüsselfertiges Bauen · Sanierung" },
      { name: "description", content: "Baugeschäft Stefan Huber GmbH & Co. KG in Manhartsdorf bei Wartenberg. Ihr Ansprechpartner für Rohbau, schlüsselfertiges Bauen sowie Umbau und Sanierung — in der Region mit Partnern aus der Region." },
      { property: "og:title", content: "Baugeschäft Stefan Huber — seit 2008" },
      { property: "og:description", content: "Rohbau, schlüsselfertiges Bauen und Sanierung. Vom Angebot bis zur Abnahme ein fester Ansprechpartner: Stefan Huber." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const leistungen = [
  {
    n: "01",
    title: "Rohbau",
    img: leistungRohbau,
    text: "Wir erstellen Ihren Rohbau in massiver Ziegelbauweise. Vertrauen Sie unserer Erfahrung aus vielen Projekten im Rohbau.",
  },
  {
    n: "02",
    title: "Schlüsselfertiges Bauen",
    img: leistungPlanung,
    text: "Wir sind Ihr Partner beim Bau Ihres Hauses. Sie entscheiden den Umfang der Leistungen von uns und unseren regionalen Partnern. Teil- oder komplett schlüsselfertig, ganz nach Ihren Wünschen.",
  },
  {
    n: "03",
    title: "Umbau und Sanierung",
    img: leistungUmbau,
    text: "Um Ihr bestehendes Objekt der aktuellen Wohnsituation anzupassen oder um dieses zu sanieren, beraten wir Sie gerne.",
  },
];

const kompetenzen = [
  {
    img: kompetenzNeubau,
    title: "Neubau",
    items: ["Einfamilienhäuser", "Mehrfamilienhäuser", "Doppelhäuser", "Reihenhäuser"],
  },
  {
    img: kompetenzBestand,
    title: "Bauen im Bestand",
    items: ["Umbau", "Altbausanierung", "Wohnraumerweiterung", "Anbau/Aufstockung"],
  },
  {
    img: kompetenzGewerbe,
    title: "Gewerbe/Kommunen",
    items: ["Schulen", "Kindergärten", "Gewerbehallen", "Bürogebäude"],
  },
];

const referenzen = [
  { img: refFeuerwehr, titel: "Feuerwehr Wartenberg", leistung: "Umbau · Rohbau · Verputzarbeiten" },
  { img: refHotel, titel: "Hotel Kandler", leistung: "Umbau · Rohbau" },
  { img: refKinderkrippe, titel: "Kinderkrippe Fraunberg", leistung: "Rohbau · Verputzarbeiten" },
  { img: refKirche, titel: "Kirche Berglern", leistung: "Sanierung und Verputzarbeiten" },
  { img: refMehrfamilienhaus, titel: "Mehrfamilienhaus mit Tiefgarage", leistung: "Rohbau" },
  { img: refPension, titel: "Umbau Pension", leistung: "Rohbau, Estrich, Verputzarbeiten" },
];

function Home() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden">
        {heroSlides.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            width={1920}
            height={1080}
            loading={i === 0 ? "eager" : "lazy"}
            aria-hidden={i !== slide}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${i === slide ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/85" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_30%,transparent_0%,rgba(0,0,0,0.4)_100%)]" />

        <div className="relative w-full pb-20 md:pb-28 pt-40 text-white pl-8 pr-6 md:pl-16 md:pr-10 xl:pl-28 xl:pr-16">
          <Reveal>
            <span className="eyebrow eyebrow-line" style={{ color: "#ECC26B" }}>
              Baugeschäft Stefan Huber · seit 2008
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 font-serif text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-[-0.02em] max-w-4xl">
              Ihr Ansprechpartner für <span className="italic font-normal text-white/90">Rohbau, schlüsselfertiges Bauen und Sanierung</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-6 grid md:grid-cols-12 gap-8 items-end">
              <p className="md:col-span-6 text-sm md:text-base leading-relaxed text-white/80 max-w-md">
                Wir sind Ihr Partner beim Bau Ihres Hauses. Sie entscheiden den Umfang der Leistungen von uns und unseren regionalen Partnern. Teil- oder komplett schlüsselfertig, ganz nach Ihren Wünschen.
              </p>
              <div className="md:col-span-6 flex flex-wrap gap-4 md:justify-end">
                <Link to="/leistungen" className="btn-primary">
                  Leistungen entdecken <ArrowRight size={16} />
                </Link>
                <Link to="/kontakt" className="btn-ghost text-white border-white/70 hover:!bg-white hover:!text-foreground">
                  Kontakt aufnehmen
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Slide-Indikatoren */}
          <div className="mt-12 flex items-center gap-3">
            {heroSlides.map((s, i) => (
              <button
                key={s.src}
                type="button"
                onClick={() => setSlide(i)}
                aria-label={`Hintergrundbild ${i + 1} anzeigen`}
                aria-current={i === slide}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === slide ? "w-10 bg-white" : "w-5 bg-white/40 hover:bg-white/70"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* LEISTUNGEN */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="grid md:grid-cols-12 gap-10 mb-14 md:mb-20">
            <Reveal className="md:col-span-6">
              <h2 className="font-serif text-5xl md:text-7xl leading-[0.95] tracking-tight">
                <span className="block">Unsere</span>
                <span className="block pl-[0.4em] md:pl-24">Leistungen</span>
              </h2>
            </Reveal>
            <div className="md:col-span-5 md:col-start-8 md:pt-6">
              <Reveal delay={120}>
                <p className="text-stone leading-relaxed">
                  Vom Rohbau in massiver Ziegelbauweise bis zum schlüsselfertigen Haus — und beim Umbau wie bei der Sanierung. Vom Angebot bis zur Abnahme haben Sie immer einen Ansprechpartner: Stefan Huber.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="flex flex-col gap-10 md:gap-14">
            {leistungen.map((l, i) => {
              const even = i % 2 === 1;
              const panel = even
                ? "bg-foreground text-background"
                : "bg-primary text-primary-foreground";
              return (
                <Reveal as="article" key={l.n} delay={(i % 2) * 60} className="relative">
                  <div className="md:grid md:grid-cols-12 md:items-stretch">
                    {/* Foto */}
                    <div
                      className={`relative z-10 md:row-start-1 ${
                        even ? "md:col-start-8 md:col-span-5" : "md:col-start-1 md:col-span-5"
                      }`}
                    >
                      <div className="relative aspect-[4/3] md:aspect-auto md:h-full overflow-hidden shadow-editorial">
                        <img
                          src={l.img}
                          alt={l.title}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Farbiges Panel */}
                    <div
                      className={`relative md:row-start-1 ${panel} ${
                        even ? "md:col-start-1 md:col-span-9" : "md:col-start-4 md:col-span-9"
                      }`}
                    >
                      <div
                        className={`p-8 md:py-12 lg:py-14 md:min-h-[400px] flex flex-col justify-center ${
                          even
                            ? "md:pl-12 lg:pl-16 md:pr-[42%]"
                            : "md:pr-12 lg:pr-16 md:pl-[42%]"
                        }`}
                      >
                        <span className="font-serif text-sm tracking-wider opacity-70">{l.n}</span>
                        <h3 className="mt-3 font-serif text-2xl md:text-3xl lg:text-4xl leading-[1.08]">
                          {l.title}
                        </h3>
                        <p className="mt-4 leading-relaxed opacity-90 max-w-lg">{l.text}</p>
                        <Link
                          to="/leistungen"
                          className="mt-7 inline-flex items-center gap-2 border border-current px-6 py-3 text-xs uppercase tracking-[0.18em] hover:bg-background hover:text-foreground transition-colors"
                        >
                          Mehr erfahren <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* KOMPETENZEN */}
      <section className="pb-20 md:pb-28">
        <div className="container-x">
          <Reveal className="max-w-3xl mb-14 md:mb-20">
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05]">
              Unsere Kompetenzen
            </h2>
            <p className="mt-8 text-lg text-stone leading-relaxed">
              Ob Neubau, Bauen im Bestand oder Gewerbe und Kommunen — unsere Stärke ist eine durchdachte Ablaufplanung und die perfekte Organisation der verschiedenen Gewerke und Tätigkeiten.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {kompetenzen.map((k, i) => (
              <Reveal as="article" key={k.title} delay={i * 120} className="flex flex-col border border-foreground/12 bg-card">
                <div className="flex items-center justify-center bg-primary-tint p-10 md:p-12">
                  <img
                    src={k.img}
                    alt={k.title}
                    loading="lazy"
                    className="h-28 md:h-32 w-auto object-contain"
                  />
                </div>
                <div className="flex flex-col flex-1 p-8">
                  <h3 className="font-serif text-2xl md:text-3xl leading-tight">{k.title}</h3>
                  <ul className="mt-5 space-y-2 text-stone">
                    {k.items.map((it) => (
                      <li key={it} className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {it}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#referenzen"
                    className="mt-7 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-foreground link-underline self-start"
                  >
                    Realisierte Projekte <ArrowRight size={14} />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SLOGAN / ABLAUFPLANUNG */}
      <section className="bg-foreground text-background py-20 md:py-28">
        <div className="container-x grid md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-4">
            <h2 className="font-serif text-3xl md:text-4xl leading-[1.1]">
              Ein Haus baut man im Team
            </h2>
          </Reveal>
          <Reveal delay={120} className="md:col-span-7 md:col-start-6">
            <p className="text-lg leading-relaxed text-background/85">
              Wir nehmen uns Zeit für Ihre Ideen und Wünsche und sorgen mit einem nachvollziehbaren Angebot sowie einer detaillierten Ablaufplanung dafür, dass es auf Ihrer Baustelle reibungslos läuft.
            </p>
            <p className="mt-6 leading-relaxed text-background/70">
              Bereits während der Angebotsphase überlegen wir uns, wie wir Ihr Projekt ausführen können und besprechen alle Punkte detailliert mit Ihnen. Uns ist wichtig, dass Ihre Fragen beantwortet werden. Vom Angebot bis zur Abnahme haben Sie immer einen Ansprechpartner: Stefan Huber.
            </p>
          </Reveal>
        </div>
      </section>

      {/* REFERENZEN */}
      <section id="referenzen" className="py-24 md:py-32 scroll-mt-24">
        <div className="container-x">
          <Reveal>
            <h2 className="text-center font-serif text-4xl md:text-6xl leading-[1.05]">
              Referenzen
            </h2>
            <p className="mt-6 text-center text-stone max-w-2xl mx-auto leading-relaxed">
              Ein Haus baut man im Team und am besten mit einem erfahrenen Partner an der Seite. Gerne stellen wir Ihnen hier einige unserer Projekte vor.
            </p>
          </Reveal>

          <div className="mt-14 md:mt-20 grid md:grid-cols-3 gap-8 md:gap-10">
            {referenzen.map((p, i) => (
              <Reveal as="article" key={p.titel} delay={(i % 3) * 120} className="group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.titel}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute bottom-0 left-0 bg-foreground text-background text-[11px] uppercase tracking-[0.18em] px-4 py-2">
                    {p.leistung}
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-2xl leading-snug">
                  {p.titel}
                </h3>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <Link
              to="/kontakt"
              className="inline-flex items-center border border-foreground/30 px-7 py-4 text-xs uppercase tracking-[0.18em] hover:bg-foreground hover:text-background transition-colors"
            >
              Detailliertes Angebot anfragen
            </Link>
          </div>
        </div>
      </section>

      {/* STANDORT — FULL WIDTH */}
      <section className="relative w-full h-[55vh] min-h-[360px] md:h-[72vh] overflow-hidden">
        <img
          src={ortKirchdorf}
          alt="Baugeschäft Stefan Huber in Manhartsdorf, 85456 Wartenberg"
          width={2688}
          height={1520}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-black/10" />
        <div className="absolute inset-0 flex items-end">
          <div className="m-6 md:m-10 border border-white/50 text-white backdrop-blur-[1px]">
            <div className="flex items-stretch">
              {/* Senkrechte Beschriftung */}
              <div className="flex items-center justify-center border-r border-white/25 px-2 md:px-3">
                <span className="[writing-mode:vertical-rl] rotate-180 text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/80 py-6">
                  Standort
                </span>
              </div>
              {/* Inhalt */}
              <div className="p-6 md:p-10 pr-10 md:pr-20">
                <h2 className="font-serif text-3xl md:text-5xl leading-[1.05]">
                  Manhartsdorf
                </h2>
                <p className="mt-2 font-serif text-xl md:text-2xl font-light text-white/85">
                  85456 Wartenberg — hier sind wir verwurzelt seit 2008
                </p>
                <Link
                  to="/kontakt"
                  className="mt-8 inline-block border-t border-white/40 pt-3 text-sm uppercase tracking-[0.18em] text-white/90 hover:text-white transition-colors"
                >
                  Anfahrt
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-x py-20 md:py-24 grid md:grid-cols-12 gap-10 items-center">
          <Reveal className="md:col-span-7">
            <h2 className="font-serif text-3xl md:text-5xl leading-[1.05]">
              Gerne erstellen wir ein<br />detailliertes Angebot für Sie.
            </h2>
          </Reveal>
          <Reveal delay={120} className="md:col-span-5 md:text-right">
            <p className="text-primary-foreground/85 mb-6">
              Schreiben Sie uns oder rufen Sie an — 08762 - 18 89.
            </p>
            <Link to="/kontakt" className="inline-flex items-center gap-3 bg-background text-foreground px-6 py-4 font-medium hover:bg-foreground hover:text-background transition-colors">
              Anfrage starten <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
