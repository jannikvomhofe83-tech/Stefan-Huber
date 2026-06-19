import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo-anderka.png";

const nav = [
  { to: "/", label: "Startseite" },
  { to: "/unternehmen", label: "Unternehmen" },
  { to: "/karriere", label: "Karriere" },
];

export const leistungenNav = [
  { to: "/leistungen/individuelle-planung", label: "Individuelle Planung" },
  { to: "/leistungen/wohnbau", label: "Ein- und Mehrfamilienhäuser" },
  { to: "/leistungen/rohbau-schluesselfertig", label: "Rohbau bis Schlüsselfertigbau" },
  { to: "/leistungen/gewerbebau", label: "Gewerbebau" },
  { to: "/leistungen/landwirtschaftsbau", label: "Landwirtschaftliche Bauten" },
  { to: "/leistungen/oeffentliche-bauten", label: "Öffentliche Bauten" },
  { to: "/leistungen/sichtbeton", label: "Sichtbeton & Sichtmauerwerk" },
  { to: "/leistungen/umbau-renovierung", label: "Umbau & Renovierung" },
  { to: "/leistungen/tiefbau", label: "Tiefbau" },
  { to: "/leistungen/kiesgrube", label: "Kiesgrube — regional" },
];

const textShadow = { textShadow: "0 1px 10px rgba(0,0,0,0.45)" };

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Seiten mit dunklem, formatfüllendem Bild-Hero — hier braucht die Navbar helle Schrift
  const darkHero =
    pathname === "/" || pathname === "/karriere" || pathname.startsWith("/leistungen");
  const onDark = !scrolled && darkHero;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerBg = scrolled
    ? "bg-background/85 backdrop-blur-md border-b border-border/70 py-3"
    : darkHero
      ? "bg-gradient-to-b from-black/45 via-black/20 to-transparent py-5"
      : "bg-transparent py-5";

  const linkBase = onDark
    ? "text-white/90 hover:text-white"
    : "text-foreground/85 hover:text-foreground";
  const linkActive = onDark ? "text-white" : "text-primary";

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${headerBg}`}>
      <div className="container-x flex items-center justify-between gap-6" style={onDark ? textShadow : undefined}>
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <img src={logo} alt="Anderka GmbH Logo" className="h-9 md:h-10 w-auto" />
          <span className={`font-serif text-2xl tracking-tight leading-none ${onDark ? "text-white" : "text-foreground"}`}>
            Anderka
          </span>
          <span className={`hidden sm:inline text-[10px] uppercase tracking-[0.22em] ${onDark ? "text-white/80" : "text-primary"}`}>
            seit 1962
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            className={`link-underline text-sm font-medium ${linkBase}`}
            activeProps={{ className: `link-underline text-sm font-medium ${linkActive}` }}
          >
            Startseite
          </Link>
          <Link
            to="/unternehmen"
            className={`link-underline text-sm font-medium ${linkBase}`}
            activeProps={{ className: `link-underline text-sm font-medium ${linkActive}` }}
          >
            Unternehmen
          </Link>

          {/* Leistungen Dropdown */}
          <div className="relative group">
            <Link
              to="/leistungen/individuelle-planung"
              className={`link-underline text-sm font-medium inline-flex items-center gap-1 ${linkBase}`}
              activeProps={{ className: `link-underline text-sm font-medium inline-flex items-center gap-1 ${linkActive}` }}
            >
              Leistungen
              <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
            </Link>
            <div className="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 focus-within:visible focus-within:opacity-100 focus-within:translate-y-0 transition-all duration-200 absolute left-1/2 -translate-x-1/2 top-full pt-5">
              <div className="w-80 bg-background border border-border shadow-editorial py-2" style={{ textShadow: "none" }}>
                {leistungenNav.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="block px-6 py-2.5 text-sm text-foreground/80 hover:text-primary hover:bg-[color:var(--color-primary-tint)] transition-colors"
                    activeProps={{ className: "block px-6 py-2.5 text-sm text-primary bg-[color:var(--color-primary-tint)]" }}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            to="/karriere"
            className={`link-underline text-sm font-medium ${linkBase}`}
            activeProps={{ className: `link-underline text-sm font-medium ${linkActive}` }}
          >
            Karriere
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/kontakt" className="hidden sm:inline-flex btn-primary text-sm" style={{ textShadow: "none" }}>
            Kontakt
          </Link>
          <button
            type="button"
            aria-label="Menü"
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden inline-grid place-items-center w-10 h-10 border ${onDark ? "text-white border-white/50" : "text-foreground border-border"}`}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background max-h-[80vh] overflow-y-auto">
          <div className="container-x py-6 flex flex-col gap-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground"
                activeProps={{ className: "text-base font-medium text-primary" }}
              >
                {n.label}
              </Link>
            ))}

            <div className="pt-2 mt-2 border-t border-border">
              <span className="text-xs uppercase tracking-[0.2em] text-stone">Leistungen</span>
              <div className="mt-3 flex flex-col gap-3">
                {leistungenNav.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="text-sm text-foreground/85"
                    activeProps={{ className: "text-sm text-primary" }}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/kontakt" onClick={() => setOpen(false)} className="btn-primary mt-3 self-start">
              Kontakt
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
