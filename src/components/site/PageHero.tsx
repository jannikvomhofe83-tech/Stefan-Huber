import { Reveal } from "./Reveal";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  intro?: string;
}

export function PageHero({ eyebrow, title, intro }: PageHeroProps) {
  return (
    <section className="pt-40 md:pt-52 pb-20 md:pb-28 border-b border-border">
      <div className="container-x grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-7">
          <Reveal>
            <span className="eyebrow eyebrow-line">{eyebrow}</span>
            <h1 className="mt-6 font-serif text-[clamp(2.6rem,6.5vw,5.5rem)] leading-[1.02] tracking-[-0.025em] text-foreground">
              {title}
            </h1>
          </Reveal>
        </div>
        {intro && (
          <div className="md:col-span-5 md:pt-10">
            <Reveal delay={120}>
              <p className="text-lg leading-relaxed text-stone">{intro}</p>
            </Reveal>
          </div>
        )}
      </div>
    </section>
  );
}
