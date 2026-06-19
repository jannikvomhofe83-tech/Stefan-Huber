import { Link } from "@tanstack/react-router";
import { Mail, Phone, Clock, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#141414] text-white/90 mt-32">
      <div className="container-x py-20 grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link to="/" className="font-serif text-3xl text-white">
            Anderka
          </Link>
          <p className="mt-3 text-sm tracking-[0.22em] uppercase text-primary">
            Qualität und Leistung seit 1962
          </p>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60">
            Familienbetrieb in dritter Generation. Vom Rohbau bis zum schlüsselfertigen
            Gebäude — bayerisches Bauhandwerk, mit Anspruch geführt.
          </p>
        </div>

        <div className="md:col-span-4">
          <h4 className="text-xs uppercase tracking-[0.2em] text-white/50 mb-5">Kontakt</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3"><Mail size={16} className="mt-0.5 text-primary shrink-0" />
              <a href="mailto:info@anderka-bau-gmbh.de" className="link-underline">info@anderka-bau-gmbh.de</a>
            </li>
            <li className="flex gap-3"><Phone size={16} className="mt-0.5 text-primary shrink-0" />
              <a href="tel:+498072575" className="link-underline">08072 / 575</a>
            </li>
            <li className="flex gap-3"><MapPin size={16} className="mt-0.5 text-primary shrink-0" />
              <span>Isener Str. 6, Moosham<br />83527 Kirchdorf</span>
            </li>
            <li className="flex gap-3"><Clock size={16} className="mt-0.5 text-primary shrink-0" />
              <span>Mo–Do  8:00–17:00<br />Fr  8:00–12:00</span>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-xs uppercase tracking-[0.2em] text-white/50 mb-5">Navigation</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="link-underline">Startseite</Link></li>
            <li><Link to="/unternehmen" className="link-underline">Unternehmen</Link></li>
            <li><Link to="/leistungen" className="link-underline">Leistungen</Link></li>
            <li><Link to="/karriere" className="link-underline">Karriere</Link></li>
            <li><Link to="/kontakt" className="link-underline">Kontakt</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-xs text-white/50">
          <p>© {new Date().getFullYear()} Anderka GmbH Bauunternehmen. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link to="/impressum" className="hover:text-white">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-white">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
