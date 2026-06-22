import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export type LeistungImage = { src: string; alt: string };
export type WeitereLeistung = { to: string; label: string };

export function LeistungDetail({
  title,
  subline,
  heroImg,
  heroAlt,
  lead,
  paragraphs,
  umfang,
  gallery,
  weitere,
}: {
  title: string;
  subline: string;
  heroImg: string;
  heroAlt: string;
  lead: string;
  paragraphs: string[];
  umfang: string[];
  gallery: LeistungImage[];
  weitere: WeitereLeistung[];
}) {
  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-[82svh] min-h-[520px] overflow-hidden">
        <img
          src={heroImg}
          alt={heroAlt}
          width={2688}
          height={1520}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/25" />
        <div className="relative h-full container-x flex flex-col justify-end pb-16 md:pb-24 pt-40 text-white">
          <Reveal>
            <span className="eyebrow eyebrow-line" style={{ color: "#ECC26B" }}>
              Leistungen
            </span>
            <h1 className="mt-5 font-serif text-[clamp(2.6rem,7vw,6rem)] leading-[0.95] tracking-tight">
              {title}
            </h1>
            <p className="mt-3 font-serif text-2xl md:text-4xl font-light text-white/90">
              {subline}
            </p>
          </Reveal>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="border-b border-border">
        <div className="container-x py-4 flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-stone">
          <Link to="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span aria-hidden>›</span>
          <span className="text-foreground">{title}</span>
        </div>
      </div>

      {/* INTRO + LEISTUNGSUMFANG */}
      <section className="py-20 md:py-28">
        <div className="container-x grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-7">
            <Reveal>
              <p className="font-serif text-2xl md:text-3xl leading-[1.25]">{lead}</p>
            </Reveal>
            <div className="mt-8 space-y-5 text-stone leading-relaxed text-lg">
              {paragraphs.map((p, i) => (
                <Reveal key={i} delay={80 + i * 80}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={240}>
              <Link
                to="/kontakt"
                className="mt-10 inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm font-medium uppercase tracking-[0.12em] hover:bg-primary-dark transition-colors"
              >
                Jetzt Termin anfragen <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <Reveal delay={120}>
              <div className="border border-foreground/12 bg-card p-8 md:p-10">
                <h2 className="font-serif text-2xl">Leistungsumfang</h2>
                <ul className="mt-6 space-y-3 text-stone">
                  {umfang.map((u) => (
                    <li key={u} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{u}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* GALERIE */}
      {gallery.length > 0 && (
        <section className="pb-20 md:pb-28">
          <div className="container-x grid md:grid-cols-3 gap-6 md:gap-8">
            {gallery.map((g, i) => (
              <Reveal as="figure" key={g.src} delay={i * 120} className="group overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* WEITERE LEISTUNGEN */}
      <section className="bg-foreground text-background py-16 md:py-20">
        <div className="container-x">
          <h2 className="font-serif text-2xl md:text-3xl">Weitere Leistungen</h2>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {weitere.map((w) => (
              <Link
                key={w.to}
                to={w.to}
                className="flex items-center justify-between border border-background/20 px-6 py-5 text-lg hover:bg-background hover:text-foreground transition-colors"
              >
                {w.label}
                <ArrowRight size={18} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-x py-20 md:py-24 grid md:grid-cols-12 gap-10 items-center">
          <Reveal className="md:col-span-7">
            <h2 className="font-serif text-3xl md:text-5xl leading-[1.05]">
              Gerne erstellen wir ein detailliertes Angebot für Sie.
            </h2>
            <p className="mt-4 text-primary-foreground/85 max-w-xl">
              Vom Angebot bis zur Abnahme haben Sie immer einen Ansprechpartner: Stefan Huber.
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
