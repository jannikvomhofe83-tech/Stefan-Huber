import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Grid2x2, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import karriereHero from "@/assets/karriere-hero.jpg";
import karriereTeam from "@/assets/karriere-team.jpg";
import untEntwicklung from "@/assets/unt-entwicklung.jpg";
import jobFacharbeiter from "@/assets/job-facharbeiter.jpg";
import jobAusbildung from "@/assets/job-ausbildung.jpg";
import jobPraktikum from "@/assets/job-praktikum.jpg";

export const Route = createFileRoute("/karriere")({
  head: () => ({
    meta: [
      { title: "Karriere — Baugeschäft Stefan Huber" },
      { name: "description", content: "Verstärkung für unser Team ist immer willkommen. Wir freuen uns auf Bewerbungen von Facharbeitern (m/w/d) im Bauhandwerk sowie auf Auszubildende und Praktikanten beim Baugeschäft Stefan Huber in Wartenberg." },
      { property: "og:title", content: "Karriere — Baugeschäft Stefan Huber" },
      { property: "og:description", content: "Werde Teil eines Teams, das zusammenhält." },
      { property: "og:url", content: "/karriere" },
    ],
    links: [{ rel: "canonical", href: "/karriere" }],
  }),
  component: Karriere,
});

const ausbildungText = [
  "Als Auszubildender im Baugewerbe lernst du nicht nur, wie man Häuser baut, sondern auch, wie man alte Gebäude saniert, umbaut oder erweitert. Du arbeitest mit unterschiedlichsten Materialien, deren Einsatzmöglichkeiten du auf der Baustelle und in der Berufsschule lernst. Neben dem Wissen zu verschiedenen Techniken lernst du vor allem eines: Teamarbeit. Ein Haus kann man nur gemeinsam bauen.",
  "Du bist an der frischen Luft und viel in Bewegung, da beim Hausbau immer noch viel Handarbeit gefragt ist, auch wenn dir Maschinen zur Verfügung stehen. Die Arbeiten als Maurer sind abwechslungsreich, da du nicht nur auf verschiedenen Baustellen bist, sondern auch unterschiedliche Tätigkeitsbereiche hast wie z.B. betonieren, mauern, ein- oder ausschalen. Räumliches Vorstellungsvermögen und gute Kenntnisse in Mathe brauchst du auf jeden Fall.",
];

const ausbildungEckdaten = [
  { label: "Ausbildungsdauer", wert: "3 Jahre" },
  { label: "Schulische Voraussetzung", wert: "mind. qual. Mittelschulabschluss" },
  { label: "Weiterbildungsmöglichkeiten", wert: "Maurermeister/in, Betonbaumeister/in" },
];

const jobs = [
  {
    img: jobFacharbeiter,
    label: "Facharbeiter (m/w/d) im Bauhandwerk",
    text: "Verstärkung für unser Team ist immer willkommen. Wir freuen uns auf Ihre Bewerbung. Einfach per E-Mail an Stefan Huber.",
    details: {
      paragraphs: [
        "Verstärkung für unser Team ist immer willkommen. Deshalb freuen wir uns auf Bewerbungen von Facharbeitern (m/w/d) im Bauhandwerk.",
        "Du wirst Teil eines Teams aus erfahrenen, langjährigen Mitarbeitern und arbeitest auf abwechslungsreichen Baustellen in der Region — im Rohbau, beim schlüsselfertigen Bauen und bei Umbau & Sanierung. Wir bauen in der Region mit Partnern aus der Region.",
        "Sie haben während der ganzen Bauphase immer einen Ansprechpartner: Stefan Huber. Einfach per E-Mail bewerben — wir melden uns persönlich zurück.",
      ],
      eckdaten: [] as { label: string; wert: string }[],
    },
  },
  {
    img: jobAusbildung,
    label: "Ausbildung zum Maurer (m/w/d)",
    text: "Als Auszubildender im Baugewerbe lernst du, wie man Häuser baut, saniert, umbaut oder erweitert — und vor allem: Teamarbeit. Ein Haus kann man nur gemeinsam bauen.",
    details: {
      paragraphs: ausbildungText,
      eckdaten: ausbildungEckdaten,
    },
  },
  {
    img: jobPraktikum,
    label: "Praktikum",
    text: "Bei Interesse an einer Maurerlehre: schau dir den Beruf des Maurers doch bei einem Praktikum an.",
    details: {
      paragraphs: [
        "Bei Interesse an einer Maurerlehre: schau dir den Beruf des Maurers doch bei einem Praktikum an.",
        "So bekommst du einen echten Einblick in den Beruf des Maurers und unseren Familienbetrieb — und findest heraus, ob die Maurerlehre das Richtige für dich ist.",
      ],
      eckdaten: [] as { label: string; wert: string }[],
    },
  },
];

const benefits = [
  "Familienbetrieb mit kurzen Wegen und einem festen Ansprechpartner",
  "Durchdachte Ablaufplanung und gute Organisation der Gewerke",
  "Abwechslungsreiche Baustellen in der Region",
  "Eingespieltes Team aus erfahrenen, langjährigen Mitarbeitern",
  "Wir bauen in der Region mit Partnern aus der Region",
];

function Karriere() {
  const [active, setActive] = useState(0);
  const [openJob, setOpenJob] = useState<number | null>(null);
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
    window.location.href = `mailto:info@baugeschaeft-huber.de?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      {/* HERO */}
      <section className="relative w-full h-[88svh] min-h-[560px] overflow-hidden">
        <img
          src={karriereHero}
          alt="Lachender Bauarbeiter mit Helm auf einer Baustelle von Baugeschäft Stefan Huber"
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
                Verstärkung für unser Team ist immer willkommen.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-8 text-lg text-stone leading-relaxed">
                Deshalb freuen wir uns auf Bewerbungen von Facharbeitern (m/w/d) im Bauhandwerk.
                Du wirst Teil eines Teams aus erfahrenen, langjährigen Mitarbeitern und arbeitest
                auf abwechslungsreichen Baustellen in der Region. Einfach per E-Mail an Stefan Huber:{" "}
                <a href="mailto:info@baugeschaeft-huber.de" className="link-underline">info@baugeschaeft-huber.de</a>.
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
                <img src={untEntwicklung} alt="Baustelle von Baugeschäft Stefan Huber" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
            {/* Rahmen mit Text */}
            <div className="mt-6 md:mt-0 w-full border border-stone/30 p-8 md:py-14 md:pl-[54%] md:pr-12 md:flex md:flex-col md:justify-center">
              <h2 className="font-serif text-3xl md:text-4xl leading-[1.1]">Wer wir sind</h2>
              <p className="mt-5 text-stone leading-relaxed">
                Baugeschäft Stefan Huber ist ein Familienbetrieb in Wartenberg — gegründet von
                Konrad Huber sen. und seit 2008 mit neuem Namen von Stefan Huber geführt. Wir bauen
                in der Region mit Partnern aus der Region.
              </p>
              <ul className="mt-6 space-y-2 text-stone">
                <li className="flex gap-3"><span className="text-primary">—</span> Rohbau</li>
                <li className="flex gap-3"><span className="text-primary">—</span> Schlüsselfertiges Bauen</li>
                <li className="flex gap-3"><span className="text-primary">—</span> Umbau & Sanierung</li>
                <li className="flex gap-3"><span className="text-primary">—</span> Durchdachte Ablaufplanung</li>
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
                <img src={karriereTeam} alt="Mitarbeiter von Baugeschäft Stefan Huber auf der Baustelle" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </div>
            {/* Rahmen mit Text links */}
            <div className="mt-6 md:mt-0 w-full border border-stone/30 p-8 md:py-14 md:pr-[54%] md:pl-12 md:flex md:flex-col md:justify-center">
              <h2 className="font-serif text-3xl md:text-4xl leading-[1.1]">Wofür wir stehen</h2>
              <p className="mt-5 text-stone leading-relaxed">
                Wer bei Baugeschäft Stefan Huber arbeitet, baut nicht irgendwo — sondern in der
                Region, mit guten Werkzeugen und unter Menschen, die zueinander stehen. Was zählt,
                sind Handwerk, Verlässlichkeit und ein gutes Miteinander in einem eingespielten Team.
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
                Deine Stelle bei uns
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
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => setActive(i)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActive(i);
                      }
                    }}
                    aria-label={`${j.label} anzeigen`}
                    className="block w-full text-left cursor-pointer"
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-6 md:p-10 text-white">
                        <h3 className="font-serif text-2xl md:text-4xl">{j.label}</h3>
                        <p className="mt-2 max-w-md text-white/85 hidden md:block">{j.text}</p>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActive(i);
                            setOpenJob(i);
                          }}
                          className="mt-4 inline-flex items-center gap-2 bg-background text-foreground px-5 py-2.5 text-xs uppercase tracking-[0.18em] hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          Mehr erfahren <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
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
            <span className="eyebrow eyebrow-line text-background/70">Bewerbung</span>
            <h2 className="mt-6 font-serif text-3xl md:text-5xl leading-[1.05]">
              Schick uns deine Bewerbung — wir lesen jede.
            </h2>
            <p className="mt-6 text-background/80 max-w-xl">
              Einfach per E-Mail an Stefan Huber: <a href="mailto:info@baugeschaeft-huber.de" className="link-underline">info@baugeschaeft-huber.de</a> oder ganz einfach über das Formular unten. Wir melden uns persönlich zurück.
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
                  <select name="position" defaultValue="Facharbeiter (m/w/d) im Bauhandwerk" className="w-full bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors">
                    <option>Facharbeiter (m/w/d) im Bauhandwerk</option>
                    <option>Ausbildung zum Maurer (m/w/d)</option>
                    <option>Praktikum</option>
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

      {/* STELLEN-DETAIL MODAL */}
      <Dialog open={openJob !== null} onOpenChange={(o) => !o && setOpenJob(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          {openJob !== null && (
            <>
              <DialogHeader>
                <DialogTitle className="font-serif text-2xl md:text-3xl leading-tight">
                  {jobs[openJob].label}
                </DialogTitle>
              </DialogHeader>
              <div className="mt-2 space-y-4 text-stone leading-relaxed">
                {jobs[openJob].details.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              {jobs[openJob].details.eckdaten.length > 0 && (
                <dl className="mt-6 grid sm:grid-cols-3 gap-px bg-border border border-border">
                  {jobs[openJob].details.eckdaten.map((e) => (
                    <div key={e.label} className="bg-background p-4">
                      <dt className="text-xs uppercase tracking-[0.18em] text-stone">{e.label}</dt>
                      <dd className="mt-1 font-medium text-foreground leading-snug">{e.wert}</dd>
                    </div>
                  ))}
                </dl>
              )}
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/kontakt" onClick={() => setOpenJob(null)} className="btn-primary">
                  Jetzt bewerben <ArrowRight size={16} />
                </Link>
                <a
                  href="mailto:info@baugeschaeft-huber.de"
                  className="inline-flex items-center px-6 py-3 border border-foreground/30 text-sm hover:bg-foreground hover:text-background transition-colors"
                >
                  Per E-Mail bewerben
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
