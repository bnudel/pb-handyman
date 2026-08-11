import { areas, site } from "@/content/site";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";

export default function Areas() {
  return (
    <section id="areas" className="py-24 md:py-32">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <SectionHeading
            eyebrow="Service area"
            title={<>Beach-adjacent, <span className="text-ocean-600">and then some.</span></>}
            body={`Home base is ${site.city}, so coastal jobs get quick turnarounds. We work across the surrounding San Diego neighborhoods too — if you're nearby, just ask.`}
          />

          <div className="flex flex-wrap gap-2.5">
            {areas.map((a) => (
              <span
                key={a}
                className="flex items-center gap-2 rounded-full border border-sand-200 bg-white px-4 py-2.5 text-sm font-semibold text-navy-800 shadow-xs"
              >
                <Icon name="pin" className="h-3.5 w-3.5 text-ocean-600" />
                {a}
              </span>
            ))}
            <span className="flex items-center gap-2 rounded-full border-2 border-dashed border-ocean-600/35 px-4 py-2.5 text-sm font-semibold text-ocean-600">
              <Icon name="plus" className="h-3.5 w-3.5" />
              Nearby? Ask
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
