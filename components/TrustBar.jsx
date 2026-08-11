import { site } from "@/content/site";
import Icon from "./Icon";

// TODO: delete any badge here that Mike can't back up.
const badges = [
  { icon: "pin", label: "Based in PB", sub: "92109 & surrounding" },
  { icon: "shield", label: "Work guaranteed", sub: "Made right, always" },
  { icon: "check", label: "Pay on completion", sub: "No deposit required" },
  { icon: "clock", label: site.hours, sub: "Same-week scheduling" },
];

export default function TrustBar() {
  return (
    <section className="relative -mt-6 pb-4">
      <div className="container-page">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-sand-200 bg-sand-200 shadow-[0_10px_40px_-20px_rgba(10,46,69,0.35)] lg:grid-cols-4">
          {badges.map((b) => (
            <div key={b.label} className="flex items-start gap-3.5 bg-white px-5 py-6">
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ocean-600/10 text-ocean-600">
                <Icon name={b.icon} className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-bold leading-tight text-navy-900">
                  {b.label}
                </span>
                <span className="mt-1 block text-xs leading-snug text-navy-800/55">{b.sub}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
