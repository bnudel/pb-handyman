import { site, nav, services } from "@/content/site";
import { Logo } from "./Logo";
import Icon from "./Icon";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-sand-200 bg-sand-100/70 pt-16 pb-28 md:pb-16">
      <div className="container-page">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Logo uid="footer" />
            <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-navy-800/65">
              {site.tagline} {site.subTagline}
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={site.phoneHref}
                className="flex items-center gap-2.5 text-[0.95rem] font-bold text-navy-900 transition hover:text-sunset-500"
              >
                <Icon name="phone" className="h-4 w-4 text-ocean-600" filled />
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2.5 text-[0.95rem] text-navy-800/75 transition hover:text-sunset-500"
              >
                <Icon name="mail" className="h-4 w-4 text-ocean-600" />
                {site.email}
              </a>
              <span className="flex items-center gap-2.5 text-[0.95rem] text-navy-800/75">
                <Icon name="clock" className="h-4 w-4 text-ocean-600" />
                {site.hours}
              </span>
            </div>
          </div>

          <nav aria-label="Footer">
            <h3 className="font-display text-lg font-bold uppercase tracking-wide text-navy-900">
              Site
            </h3>
            <ul className="mt-4 space-y-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-[0.95rem] text-navy-800/65 transition hover:text-sunset-500"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-lg font-bold uppercase tracking-wide text-navy-900">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.title} className="text-[0.95rem] text-navy-800/65">
                  {s.title}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-sand-300/70 pt-7 text-xs text-navy-800/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name} · {site.legalName}
          </p>
          <p>
            Based in {site.city}, {site.region} {site.postalCode}
          </p>
        </div>
      </div>
    </footer>
  );
}
