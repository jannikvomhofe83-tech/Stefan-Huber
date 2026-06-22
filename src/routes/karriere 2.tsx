import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Grid2x2, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import karriereHero from "@/assets/karriere-hero.jpg";
import karriereTeam from "@/assets/karriere-team.jpg";
import untEntwicklung from "@/assets/unt-entwicklung.jpg";
import jobFacharbeiter from "@/assets/job-facharbeiter.jpg";
import jobAusbildung from "@/assets/job-ausbildung.jpg";
import jobPraktikum from "@/assets/job-praktikum.jpg";

export const Route = createFileRoute("/karriere 2")({
  head: () => ({
    meta: [
      { title: "Karriere — Anderka GmbH Bauunternehmen" },
      { name: "description", content: "Offene Stellen für Maurer, Auszubildende und Praktikanten zur Berufsorientierung im familiengeführten Bauunternehmen Anderka GmbH in Kirchdorf-Moosham." },
      { property: "og:title", content: "Karriere — Anderka GmbH" },
      { property: "og:description", content: "Werde Teil eines Teams, das zusammenhält." },
      { property: "og:url", content: "/karriere" },
    ],
    links: [{ rel: "canonical", href: "/karriere" }],
  }),
  component: Karriere,
});

const jobs = [
  {
    img: jobFacharbeiter,
    label: "Facharbeiter / Maurer",
    text: "Ausgelernt? Werde Teil eines eingespielten Teams auf abwechslungsreichen Baustellen in der Region.",
  },
  {
    img: jobAusbildung,
    label: "Ausbildung",
    text: "Wir bilden mit Sorgfalt aus und begleiten dich auf deinem ganzen Weg ins Bauhandwerk.",
  },
  {
    img: jobPraktikum,
    label: "Praktikum",
    text: "Finde im Praktikum zur Berufsorientierung heraus, ob das Bauhandwerk dein Beruf wird.",
  },
];

const benefits = [
  "Familienbetrieb mit kurzen Wegen und persönlicher Wertschätzung",
  "Sichere, wiederholt ausgezeichnete Ausbildung",
  "Laufend erneuerter Fuhr- und Maschinenpark",
  "Eingespieltes, stabiles Team",
  "Gelebte Jubiläumskultur und langjährige Mitarbeiter",
];

function Karriere() {
  const [active, setActive] = useState(0);
  const prev = () => setActive((i) => (i - 1 + jobs.length) % jobs.length);
  const next = () => setActive((i) => (i + 1) % jobs.length);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const subject = `Bewerbung – ${fd.get("position") || "Initiativbewerbung"}`;
    const body = [
      `Name: ${fd.get("vorname")} ${fd.get("nachname")}`,
      `E-Mail: ${fd.get("email")}`,
      `Telefon: ${fd.get("telefon")}`,
      `Position: ${fd.get("position")}`,
      "",
      `${fd.get("nachricht")}`,
    ].join("\n");
    window.location.href = `mailto:info@anderka-bau-gmbh.de?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-[88svh] min-h-[560px] overflow-hidden">
        <img
          src={karriereHero}
          alt="Lachender Bauarbeiter mit Helm auf einer Anderka-Baustelle"
          width={2048}
          height={1360}
          className="absolute inset-0 w-full h-full object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

        <div className="relative h-full container-x flex flex-col justify-center pt-32 text-white">
          <Reveal>
            <h1 className="font-serif text-[clamp(2.6rem,7vw,6rem)] leading-[0.98] tracking-tight max-w-[14ch]">
              Bau mit an dem,<br />was bleibt.
            </h1>
          </Reveal>
        </div>

        {/* Freie-Stellen-Box */}
        <div className="absolute bottom-0 right-0 left-0">
          <div className="container-x pb-8 md:pb-12 flex md:justify-end">
            <Link
              to="/kontakt"
              className="group inline-flex items-center justify-between gap-8 bg-background text-foreground px-6 md:px-8 py-5 md:py-6 w-full md:w-auto md:min-w-[360px] hover:bg-foreground hover:text-background transition-colors"
            >
              <span className="inline-flex items-center gap-4">
                <Grid2x2 size={22} strokeWidth={1.5} className="text-primary group-hover:text-background" />
                <span className="font-serif text-xl md:text-2xl">Freie Stellen bei uns</span>
              </span>
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO + AKTIONEN */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="max-w-4xl">
            <Reveal>
              <p className="font-serif text-2xl md:text-4xl leading-[1.2] text-foreground">
                Deine Zukunft bei Anderka beginnt jetzt.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-8 text-lg text-stone leading-relaxed">
                Der Grundstein jedes Unternehmens sind tatkräftige, qualifizierte Mitarbeiter.
                Fachpersonal ist heute mehr gefragt denn je — und wir sind stolz darauf, dass die
                von uns ausgebildeten Maurer wiederholt ausgezeichnet werden. Eine besondere Freude
                sind unsere langjährigen Mitarbeiter, mit denen wir immer wieder Berufsjubiläen
                feiern dürfen. Bist du bereit, mit uns die Region zu prägen?
              </p>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/kontakt" className="btn-primary">Jetzt bewerben <ArrowRight size={16} /></Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WER WIR SIND */}
      <section className="pb-20 md:pb-28">
        <div className="container-x">
          <Reveal as="div" className="relative md:flex md:items-stretch md:min-h-[420px]">
            {/* Bild */}
            <div className="relative z-10 md:absolute md:inset-y-0 md:w-1/2 md:left-0">
              <div className="relative aspect-[4/3] md:aspect-auto md:h-full overflow-hidden shadow-editorial">
                <img src={untEntwicklung} alt="Das Betriebsgelände der Anderka GmbH" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
            {/* Rahmen mit Text */}
            <div className="mt-6 md:mt-0 w-full border border-stone/30 p-8 md:py-14 md:pl-[54%] md:pr-12 md:flex md:flex-col md:justify-center">
              <h2 className="font-serif text-3xl md:text-4xl leading-[1.1]">Wer wir sind</h2>
              <p className="mt-5 text-stone leading-relaxed">
                Die Anderka GmbH ist ein familiengeführtes Bauunternehmen in Kirchdorf-Moosham —
                seit 1962, heute in dritter Generation. Wir bauen in und um Moosham und decken die
                gesamte Wertschöpfung am Bau ab.
              </p>
              <ul className="mt-6 space-y-2 text-stone">
                <li className="flex gap-3"><span className="text-primary">—</span> Hoch-, Rohbau & Schlüsselfertigbau</li>
                <li className="flex gap-3"><span className="text-primary">—</span> Gewerbe- & Landwirtschaftsbau</li>
                <li className="flex gap-3"><span className="text-primary">—</span> Tiefbau & Außenanlagen</li>
                <li className="flex gap-3"><span className="text-primary">—</span> Eigene Kiesgrube & PV-Anlage</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WOFÜR WIR STEHEN */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <Reveal as="div" className="relative md:flex md:items-stretch md:min-h-[460px]">
            {/* Bild rechts */}
            <div className="relative z-10 md:absolute md:inset-y-0 md:w-1/2 md:right-0">
              <div className="relative aspect-[4/3] md:aspect-auto md:h-full overflow-hidden shadow-editorial">
                <img src={karriereTeam} alt="Mitarbeiter der Anderka GmbH auf der Baustelle" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
            {/* Rahmen mit Text links */}
            <div className="mt-6 md:mt-0 w-full border border-stone/30 p-8 md:py-14 md:pr-[54%] md:pl-12 md:flex md:flex-col md:justify-center">
              <h2 className="font-serif text-3xl md:text-4xl leading-[1.1]">Wofür wir stehen</h2>
              <p className="mt-5 text-stone leading-relaxed">
                Wer bei Anderka arbeitet, baut nicht irgendwo — sondern in der Region, mit guten
                Werkzeugen und unter Menschen, die zueinander stehen. Dienst nach Vorschrift ist bei
                uns ein Fremdwort: Was zählt, sind Handwerk, Verlässlichkeit und ein gutes Miteinander.
              </p>
              <p className="mt-6 font-medium text-foreground">Das bieten wir:</p>
              <ul className="mt-3 space-y-2 text-stone">
                {benefits.map((b) => (
                  <li key={b} className="flex gap-3"><span className="text-primary">—</span> {b}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STELLENANGEBOTE — KARUSSELL */}
      <section className="py-20 md:py-28 bg-background overflow-hidden">
        <div className="container-x">
          <div className="flex items-end justify-between gap-6 mb-10 md:mb-14">
            <Reveal>
              <span className="eyebrow eyebrow-line">Stellenangebote</span>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.02] whitespace-nowrap">
                Deine Stelle bei Anderka
              </h2>
            </Reveal>
            <Reveal delay={120} className="hidden sm:block shrink-0">
              <Link
                to="/kontakt"
                className="inline-flex items-center border border-foreground/40 px-7 py-4 text-xs uppercase tracking-[0.18em] hover:bg-foreground hover:text-background transition-colors"
              >
                Alle Jobs
              </Link>
            </Reveal>
          </div>
        </div>

        {/* Karussell */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(calc(${-active * 70}% + 15%))` }}
            >
              {jobs.map((j, i) => (
                <div key={j.label} className="shrink-0 basis-[70%] px-2 md:px-4">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`${j.label} anzeigen`}
                    className="block w-full text-left"
                  >
                    <div
                      className={`relative aspect-[16/9] overflow-hidden transition-all duration-500 ${
                        i === active ? "opacity-100 shadow-editorial" : "opacity-45 scale-[0.97]"
                      }`}
                    >
                      <img
                        src={j.img}
                        alt={j.label}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-6 md:p-10 text-white">
                        <h3 className="font-serif text-2xl md:text-4xl">{j.label}</h3>
                        <p className="mt-2 max-w-md text-white/85 hidden md:block">{j.text}</p>
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Pfeile */}
          <button
            type="button"
            onClick={prev}
            aria-label="Vorherige Stelle"
            className="absolute left-3 md:left-10 top-1/2 -translate-y-1/2 z-10 grid place-items-center w-12 h-12 md:w-14 md:h-14 bg-background text-foreground shadow-editorial hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Nächste Stelle"
            className="absolute right-3 md:right-10 top-1/2 -translate-y-1/2 z-10 grid place-items-center w-12 h-12 md:w-14 md:h-14 bg-background text-foreground shadow-editorial hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Indikatoren + CTA */}
        <div className="container-x mt-10 flex flex-col items-center gap-8">
          <div className="flex items-center gap-3">
            {jobs.map((j, i) => (
              <button
                key={j.label}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`${j.label} anzeigen`}
                aria-current={i === active}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? "w-10 bg-primary" : "w-5 bg-foreground/25 hover:bg-foreground/50"
                }`}
              />
            ))}
          </div>
          <Link to="/kontakt" className="btn-primary">
            Jetzt bewerben <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* BEWERBUNG CTA */}
      <section className="bg-foreground text-background">
        <div className="container-x py-20 md:py-28 grid md:grid-cols-12 gap-10 items-center">
          <Reveal className="md:col-span-7">
            <span className="eyebrow eyebrow-line" style={{ color: "#F5EBEB" }}>Bewerbung</span>
            <h2 className="mt-6 font-serif text-3xl md:text-5xl leading-[1.05]">
              Schick uns deine Bewerbung — wir lesen jede.
            </h2>
            <p className="mt-6 text-background/80 max-w-xl">
              Per Mail an <a href="mailto:info@anderka-bau-gmbh.de" className="link-underline">info@anderka-bau-gmbh.de</a> oder ganz einfach über das Formular unten. Wir melden uns persönlich zurück.
            </p>
          </Reveal>
        </div>
      </section>

      {/* BEWERBUNGSFORMULAR */}
      <section className="py-20 md:py-28 bg-background border-t border-border">
        <div className="container-x">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <span className="eyebrow eyebrow-line">Bewerbungsformular</span>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-[1.05]">
                In zwei Minuten bei uns.
              </h2>
              <p className="mt-4 text-stone max-w-xl">
                Fülle das Formular aus — Lebenslauf und Zeugnisse kannst du anschließend per Mail
                nachreichen. Wir melden uns persönlich zurück.
              </p>
            </Reveal>

            <Reveal delay={100}>
              <form onSubmit={handleSubmit} className="mt-10 grid sm:grid-cols-2 gap-5">
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-foreground">Vorname *</span>
                  <input name="vorname" required className="w-full bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-foreground">Nachname *</span>
                  <input name="nachname" required className="w-full bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-foreground">E-Mail *</span>
                  <input type="email" name="email" required className="w-full bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-foreground">Telefon</span>
                  <input type="tel" name="telefon" className="w-full bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" />
                </label>
                <label className="flex flex-col gap-2 sm:col-span-2">
                  <span className="text-sm font-medium text-foreground">Ich bewerbe mich als</span>
                  <select name="position" defaultValue="Facharbeiter / Maurer" className="w-full bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors">
                    <option>Facharbeiter / Maurer</option>
                    <option>Ausbildung</option>
                    <option>Praktikum zur Berufsorientierung</option>
                    <option>Initiativbewerbung</option>
                  </select>
                </label>
                <label className="flex flex-col gap-2 sm:col-span-2">
                  <span className="text-sm font-medium text-foreground">Nachricht</span>
                  <textarea name="nachricht" rows={5} className="w-full bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-y" placeholder="Erzähl uns kurz von dir …" />
                </label>
                <div className="sm:col-span-2 flex flex-wrap items-center gap-4 pt-2">
                  <button type="submit" className="btn-primary">
                    Bewerbung absenden <ArrowRight size={16} />
                  </button>
                  <span className="text-xs text-stone">* Pflichtfelder</span>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
