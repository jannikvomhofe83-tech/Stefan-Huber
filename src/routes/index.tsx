import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import heroHaus from "@/assets/hero-einfamilienhaus.jpg";
import heroLandwirtschaft from "@/assets/hero-landwirtschaft.jpg";
import heroTiefbau from "@/assets/hero-tiefbau.jpg";
import heroGewerbe from "@/assets/hero-gewerbebau.jpg";
import leistungPlanung from "@/assets/leistung-planung.jpg";
import leistungRohbau from "@/assets/leistung-rohbau.jpg";
import leistungOeffentlich from "@/assets/leistung-oeffentlich.jpg";
import leistungSichtbeton from "@/assets/leistung-sichtbeton.jpg";
import leistungUmbau from "@/assets/leistung-umbau.jpg";
import leistungKiesgrube from "@/assets/leistung-kiesgrube.jpg";
import ortKirchdorf from "@/assets/ort-kirchdorf.jpg";
import { Reveal } from "@/components/site/Reveal";

const heroSlides = [
  { src: heroHaus, alt: "Einfamilienhaus mit Familie davor — Wohnbau von Anderka" },
  { src: heroGewerbe, alt: "Gewerbebau im Bau — Hallen- und Bürogebäude von Anderka" },
  { src: heroLandwirtschaft, alt: "Landwirtschaftliches Funktionsgebäude von Anderka" },
  { src: heroTiefbau, alt: "Tiefbau — Erdarbeiten, Kanal- und Leitungsbau von Anderka" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anderka GmbH Bauunternehmen — Qualität und Leistung seit 1962" },
      { name: "description", content: "Familiengeführtes Bauunternehmen in Kirchdorf/Moosham. Rohbau, Schlüsselfertigbau, Gewerbe-, Landwirtschafts- und öffentliche Bauten in ganz Bayern." },
      { property: "og:title", content: "Anderka GmbH Bauunternehmen — seit 1962" },
      { property: "og:description", content: "Familienbetrieb in dritter Generation. Bayerisches Bauhandwerk mit Anspruch." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const leistungen = [
  { n: "01", title: "Individuelle Planung", img: leistungPlanung, text: "Unser Planer entwickelt mit Ihnen das Konzept, erstellt die Eingabeplanung und begleitet das Vorhaben bis zur Genehmigung." },
  { n: "02", title: "Ein- und Mehrfamilienhäuser", img: heroHaus, text: "Wohnbauten in massiver Bauweise — individuell, energieeffizient und auf Ihren Grundriss zugeschnitten." },
  { n: "03", title: "Rohbau bis Schlüsselfertigbau", img: leistungRohbau, text: "Vom Fundament bis zum bezugsfertigen Gebäude. Alles aus einer Hand, ein Ansprechpartner — vom Aushub bis zur Übergabe." },
  { n: "04", title: "Gewerbebau", img: heroGewerbe, text: "Hallen, Büro- und Funktionsgebäude für Unternehmen, die zuverlässig und termintreu bauen lassen wollen." },
  { n: "05", title: "Landwirtschaftliche Bauten", img: heroLandwirtschaft, text: "Ställe, Lager und Funktionsgebäude — als zertifizierter Fachbetrieb für JGS-Anlagen seit 2019." },
  { n: "06", title: "Öffentliche Bauten", img: leistungOeffentlich, text: "Kommunale Projekte wie Feuerwehrhäuser, Schulen und Verwaltungsgebäude — robust, funktional, wirtschaftlich." },
  { n: "07", title: "Sichtbeton & Sichtmauerwerk", img: leistungSichtbeton, text: "Sichtbares Handwerk. Wir beherrschen die Disziplinen, bei denen jede Fuge und jede Schalung zählt." },
  { n: "08", title: "Umbau & Renovierung", img: leistungUmbau, text: "Bestand erhalten, weiterentwickeln, modernisieren — mit Respekt vor dem, was schon steht." },
  { n: "09", title: "Tiefbau", img: heroTiefbau, text: "Erdarbeiten, Kanal- und Leitungsbau, Außenanlagen — die Grundlage für jedes solide Bauwerk." },
  { n: "10", title: "Kiesgrube — regional", img: leistungKiesgrube, text: "Eigene Kiesgruben liefern Material aus der Region. Kurze Wege, geprüfte Qualität, planbare Verfügbarkeit." },
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
            <span className="eyebrow eyebrow-line text-primary-tint" style={{ color: "#F5EBEB" }}>
              Bauunternehmen · seit 1962
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 font-serif text-[clamp(2.25rem,5vw,4rem)] leading-[1.0] tracking-[-0.02em]">
              Anderka <span className="italic font-normal text-white/90">GmbH</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-6 grid md:grid-cols-12 gap-8 items-end">
              <p className="md:col-span-6 text-sm md:text-base leading-relaxed text-white/80 max-w-md">
                Qualität und Leistung seit 1962. Drei Generationen bayerisches Bauhandwerk — vom ersten Strich auf dem Papier bis zum Schlüssel in Ihrer Hand.
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
                <span className="block pl-[0.4em] md:pl-24">Kompetenzen</span>
              </h2>
            </Reveal>
            <div className="md:col-span-5 md:col-start-8 md:pt-6">
              <Reveal delay={120}>
                <p className="text-stone leading-relaxed">
                  Von der individuellen Planung über den Rohbau bis zur eigenen Kiesgrube — wir decken die gesamte Wertschöpfung am Bau ab. Ein Team, ein Ansprechpartner.
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

      {/* ARBEITEN BEI ANDERKA */}
      <section className="pt-4 md:pt-6 pb-24 md:pb-32">
        <div className="container-x">
          <Reveal className="max-w-3xl">
            <h2 className="font-serif text-4xl md:text-6xl leading-[1.05]">
              Arbeiten bei Anderka
            </h2>
            <p className="mt-8 text-lg text-stone leading-relaxed max-w-2xl">
              Anderka ist ein attraktiver Arbeitgeber und Ausbildungsbetrieb mit interessanten Jobchancen sowie echten Entwicklungsmöglichkeiten. Am besten, Sie überzeugen sich selbst.
            </p>
            <Link
              to="/karriere"
              className="mt-10 inline-flex items-center border border-foreground/30 px-7 py-4 text-xs uppercase tracking-[0.18em] hover:bg-foreground hover:text-background transition-colors"
            >
              Karriereportal
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ORTSCHAFT — FULL WIDTH */}
      <section className="relative w-full h-[55vh] min-h-[360px] md:h-[72vh] overflow-hidden">
        <img
          src={ortKirchdorf}
          alt="Kirchdorf bei Haag in Oberbayern mit der Pfarrkirche Mariä Himmelfahrt — Heimat der Anderka GmbH"
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
                  Kirchdorf-Moosham
                </h2>
                <p className="mt-2 font-serif text-xl md:text-2xl font-light text-white/85">
                  Hier sind wir verwurzelt — seit 1962
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

      {/* AKTUELLES */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <Reveal>
            <h2 className="text-center font-serif text-4xl md:text-6xl leading-[1.05]">
              Aktuelles bei Anderka
            </h2>
          </Reveal>

          <div className="mt-14 md:mt-20 grid md:grid-cols-3 gap-8 md:gap-10">
            {[
              { img: heroGewerbe, tag: "Gewerbebau", titel: "Neubau Ärztehaus", datum: "12.05.2026" },
              { img: leistungOeffentlich, tag: "Öffentliche Bauten", titel: "Neubau Feuerwehrhaus St. Wolfgang", datum: "03.03.2026" },
              { img: heroLandwirtschaft, tag: "Landwirtschaftliche Bauten", titel: "Neues landwirtschaftliches Funktionsgebäude", datum: "18.11.2025" },
            ].map((p, i) => (
              <Reveal as="article" key={p.titel} delay={i * 120} className="group">
                <Link to="/unternehmen" className="block">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.titel}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute bottom-0 left-0 bg-foreground text-background text-[11px] uppercase tracking-[0.18em] px-4 py-2">
                      {p.tag}
                    </span>
                  </div>
                  <h3 className="mt-6 font-serif text-2xl leading-snug group-hover:text-primary transition-colors">
                    {p.titel}
                  </h3>
                  <p className="mt-4 text-sm text-stone">{p.datum}</p>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <Link
              to="/unternehmen"
              className="inline-flex items-center border border-foreground/30 px-7 py-4 text-xs uppercase tracking-[0.18em] hover:bg-foreground hover:text-background transition-colors"
            >
              Mehr über Anderka
            </Link>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-x py-20 md:py-24 grid md:grid-cols-12 gap-10 items-center">
          <Reveal className="md:col-span-7">
            <h2 className="font-serif text-3xl md:text-5xl leading-[1.05]">
              Ein Projekt im Kopf?<br />Wir hören zu.
            </h2>
          </Reveal>
          <Reveal delay={120} className="md:col-span-5 md:text-right">
            <p className="text-primary-foreground/85 mb-6">
              Schreiben Sie uns oder rufen Sie an — 08072 / 575.
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
