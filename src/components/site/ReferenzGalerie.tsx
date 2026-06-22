import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export type GalerieStep = { img: string; title: string; text: string };
export type GalerieWeitere = { to: string; label: string };

export function ReferenzGalerie({
  title,
  intro,
  heroImg,
  steps,
  umfangTitel,
  umfang,
  weitere,
}: {
  title: string;
  intro: string;
  heroImg: string;
  steps: GalerieStep[];
  umfangTitel: string;
  umfang: string[];
  weitere: GalerieWeitere[];
}) {
  return (
    <>
      {/* HEADER (ohne Bild-Hero) */}
      <section className="pt-32 md:pt-40 pb-10 md:pb-14 border-b border-border">
        <div className="container-x">
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-stone mb-8">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span aria-hidden>›</span>
            <a href="/#referenzen" className="hover:text-foreground transition-colors">
              Referenzen
            </a>
            <span aria-hidden>›</span>
            <span className="text-foreground">{title}</span>
          </div>
          <Reveal>
            <span className="eyebrow eyebrow-line">Referenzen</span>
            <h1 className="mt-5 font-serif text-4xl md:text-6xl leading-[1.02] tracking-tight">
              {title}
            </h1>
            <p className="mt-4 text-lg md:text-2xl text-stone font-light max-w-2xl">{intro}</p>
          </Reveal>
        </div>
      </section>

      {/* SCHRITTE */}
      <section className="py-16 md:py-24">
        <div className="container-x flex flex-col gap-16 md:gap-24">
          {steps.map((s, i) => {
            const flip = i % 2 === 1;
            return (
              <Reveal as="article" key={i} className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div
                  className={`relative aspect-[4/3] overflow-hidden shadow-editorial ${
                    flip ? "md:order-2" : ""
                  }`}
                >
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className={flip ? "md:order-1" : ""}>
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-primary text-primary-foreground font-serif text-base">
                    {i + 1}
                  </span>
                  <h2 className="mt-5 font-serif text-3xl md:text-4xl leading-tight">{s.title}</h2>
                  <p className="mt-4 text-lg text-stone leading-relaxed">{s.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ERGEBNIS + LEISTUNGSUMFANG */}
      <section className="pb-16 md:pb-24">
        <div className="container-x grid md:grid-cols-2 items-stretch shadow-editorial">
          <div className="relative aspect-[4/3] md:aspect-auto min-h-[280px] overflow-hidden">
            <img
              src={heroImg}
              alt={title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="bg-foreground text-background p-8 md:p-12 flex flex-col justify-center">
            <h2 className="font-serif text-2xl md:text-3xl leading-snug">{umfangTitel}</h2>
            <ul className="mt-7 space-y-3">
              {umfang.map((u) => (
                <li key={u} className="flex items-center gap-3 text-lg">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {u}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WEITERE GALERIEN */}
      <section className="pb-20 md:pb-28">
        <div className="container-x">
          <h2 className="font-serif text-2xl md:text-3xl">Weitere Bildergalerien</h2>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {weitere.map((w) => (
              <Link
                key={w.to}
                to={w.to}
                className="group flex items-center justify-between border border-foreground/15 px-6 py-5 text-lg hover:bg-foreground hover:text-background transition-colors"
              >
                {w.label}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
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
