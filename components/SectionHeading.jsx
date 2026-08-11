export default function SectionHeading({ eyebrow, title, body, light = false, center = false }) {
  return (
    <div className={`${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      {eyebrow && (
        <p
          className={`mb-4 flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.18em] ${
            center ? "justify-center" : ""
          } ${light ? "text-ocean-400" : "text-ocean-600"}`}
        >
          <span className={`h-px w-8 ${light ? "bg-ocean-400/50" : "bg-ocean-600/40"}`} />
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-4xl font-bold uppercase leading-[1.02] tracking-tight md:text-5xl ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {body && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            light ? "text-sand-200/75" : "text-navy-800/70"
          }`}
        >
          {body}
        </p>
      )}
    </div>
  );
}
