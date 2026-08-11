import { site } from "@/content/site";
import Icon from "./Icon";

/** Always-visible tap-to-call bar on phones — where most handyman leads come from. */
export default function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-navy-900/10 bg-white/95 p-3 backdrop-blur-md md:hidden">
      <div className="flex gap-2.5">
        <a
          href={site.smsHref}
          className="flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-navy-900/15 py-3.5 text-sm font-bold text-navy-900"
        >
          <Icon name="message" className="h-4 w-4" />
          Text
        </a>
        <a
          href={site.phoneHref}
          className="flex flex-[1.6] items-center justify-center gap-2 rounded-full bg-sunset-500 py-3.5 text-sm font-bold text-white shadow-lg shadow-sunset-500/25"
        >
          <Icon name="phone" className="h-4 w-4" filled />
          Call {site.phone}
        </a>
      </div>
    </div>
  );
}
