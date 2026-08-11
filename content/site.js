// =============================================================
//  EDIT EVERYTHING HERE.
//  All the words, numbers, and links on the site live in this
//  one file. Change them here and the whole site updates.
//  Look for  TODO:  markers — those need Mike to confirm.
// =============================================================

export const site = {
  name: "PB Handyman",
  legalName: "Mike's C&C LLC",
  owner: "Michael",

  tagline: "Local handyman services in Pacific Beach and all across San Diego.",
  subTagline: "No job too small or too large.",

  // TODO: the old site listed TWO numbers — (716) 710-2420 and (716) 710-2425.
  // Confirm which one is right and use it in both places below.
  phone: "(716) 710-2420",
  phoneHref: "tel:+17167102420",
  smsHref: "sms:+17167102420",

  // TODO: the old site listed TWO emails — Michael10830183@gmail.com and
  // pbhandyman716@gmail.com. Using the branded one; confirm it's monitored.
  email: "pbhandyman716@gmail.com",

  city: "Pacific Beach",
  region: "San Diego, CA",
  postalCode: "92109",
  url: "https://www.pb-handyman.com",

  hours: "Mon–Sat, 7am–6pm",
  startingPrice: "$150",

  // TODO: confirm before publishing. If Mike isn't licensed/insured,
  // delete the matching trust badge in components/TrustBar.jsx.
  licensed: true,
  insured: true,
};

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "How It Works", href: "#process" },
  { label: "Reviews", href: "#reviews" },
  { label: "Areas", href: "#areas" },
  { label: "FAQ", href: "#faq" },
];

export const services = [
  {
    icon: "wrench",
    title: "General Repairs",
    blurb:
      "The list on the fridge. Sticking doors, loose handles, patched holes, trim, and all the odd jobs that keep piling up.",
    price: "Starting at $150",
  },
  {
    icon: "roller",
    title: "Drywall & Painting",
    blurb:
      "Holes, cracks, and water damage patched, textured to match, and repainted so you can't tell anything happened.",
  },
  {
    icon: "drop",
    title: "Plumbing",
    blurb:
      "Leaky faucets, running toilets, garbage disposals, shutoff valves, and fixture swaps — handled same visit.",
  },
  {
    icon: "bolt",
    title: "Electrical & Lighting",
    blurb:
      "Light fixtures, ceiling fans, switches, outlets, recessed lighting, and appliance hookups installed clean.",
  },
  {
    icon: "thermo",
    title: "Heating & Cooling",
    blurb:
      "Mini-split and HVAC troubleshooting, servicing, and airflow fixes — including the tricky ones other guys pass on.",
  },
  {
    icon: "chair",
    title: "Furniture Assembly",
    blurb:
      "Flat-pack builds done right the first time, plus wood furniture repair and refinishing.",
  },
  {
    icon: "tv",
    title: "Mounting & Installs",
    blurb:
      "TVs, floating shelves, mirrors, blinds, curtain rods, hardware, and appliance installation — anchored properly.",
  },
  {
    icon: "door",
    title: "Doors & Windows",
    blurb:
      "Closet door tracks, screens, locks, weatherstripping, and doors that finally close the way they should.",
  },
  {
    icon: "wave",
    title: "Coastal Maintenance",
    blurb:
      "Salt air is hard on a house. Rust, deck and fence repair, and exterior touch-ups built for beach properties.",
  },
];

export const valueProps = [
  {
    icon: "target",
    title: "Expert Precision",
    body: "Decades of hands-on experience on every job, from a single hinge to a full room. It gets done to standard, not just done.",
  },
  {
    icon: "calendar",
    title: "Straightforward Scheduling",
    body: "Call or text, get a real answer on timing, and pay only once the work is finished. No deposits, no runaround.",
  },
  {
    icon: "shield",
    title: "Quality Guarantee",
    body: "Every job is backed. If something isn't right, it gets made right — that's the whole reason the referrals keep coming.",
  },
];

export const steps = [
  {
    step: "01",
    title: "Tell Us What's Going On",
    body: "Call or text a quick description — photos help. We'll talk through what you need and give you a straight answer on cost and timing.",
  },
  {
    step: "02",
    title: "On-Site Assessment",
    body: "We show up, find the actual root cause instead of the obvious symptom, and walk you through the fix before any work starts.",
  },
  {
    step: "03",
    title: "Done Right, Cleaned Up",
    body: "The work gets completed to spec, the site gets cleaned, and you pay when it's finished and you're happy with it.",
  },
];

export const reviews = [
  {
    quote:
      "Michael resolved our intricate heating and cooling issues with great skill and expertise, and painted our master bedroom on top of it.",
    name: "David Miller",
    location: "Pacific Beach",
  },
  {
    quote:
      "Reliable and efficient service. Our electrical lights and appliance install was completed on time and the quality of the work is excellent.",
    name: "Sarah Jenkins",
    location: "Mission Beach",
  },
  {
    quote:
      "We couldn't ask for a better handyman. They fixed our plumbing issue quickly and explained everything in detail.",
    name: "Michael Chen",
    location: "La Jolla",
  },
];

export const areas = [
  "Pacific Beach",
  "Mission Beach",
  "La Jolla",
  "Ocean Beach",
  "Point Loma",
  "Bay Park",
  "Clairemont",
  "Bird Rock",
  "Crown Point",
  "Mission Bay",
  "Morena",
  "North Park",
];

export const faqs = [
  {
    q: "What areas do you cover?",
    a: "Home base is Pacific Beach, and we regularly work across Mission Beach, La Jolla, Ocean Beach, Point Loma, Bay Park, Clairemont, and the surrounding San Diego neighborhoods. If you're a little outside that, just ask.",
  },
  {
    q: "How much does a job cost?",
    a: "Jobs start at $150. Pricing depends on scope and materials, so call or text with a quick description — photos help a lot — and you'll get a clear number before anything begins.",
  },
  {
    q: "When do I pay?",
    a: "After the work is complete and you're satisfied with it. No deposits required for standard jobs.",
  },
  {
    q: "Is any job too small?",
    a: "No. A single leaky faucet or a whole punch list — both are worth the trip. Small jobs are often the ones nobody else will show up for.",
  },
  {
    q: "How soon can you come out?",
    a: "Most jobs get scheduled within the same week, and urgent issues can often be handled sooner. Call or text and you'll get a real answer, not a callback promise.",
  },
  {
    q: "Do you work with landlords and vacation rentals?",
    a: "Yes. A lot of PB is rental property, and quick turnarounds between tenants and guests are a regular part of the work.",
  },
];
