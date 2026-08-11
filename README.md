# PB Handyman

Marketing site for PB Handyman (Mike's C&C LLC) — Pacific Beach, San Diego.

Next.js 15 (App Router) · React 19 · Tailwind CSS v4 · zero runtime dependencies beyond React.

---

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

```bash
npm run build   # production build — run this before deploying
```

> Note: this project was written without network access to npm, so `npm install`
> and `npm run build` have not been executed yet. Run both once before deploying.
> Everything was statically reviewed, but the first `npm run build` is the real test.

---

## Deploy to Vercel

**Option A — CLI**

```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production
```

**Option B — Git (recommended, gives auto-deploys on every push)**

1. Push this folder to a new GitHub repo.
2. Go to vercel.com → **Add New → Project** → import the repo.
3. Vercel auto-detects Next.js. No settings to change. Click **Deploy**.

**Pointing pb-handyman.com at it**

1. Vercel project → **Settings → Domains** → add `pb-handyman.com` and `www.pb-handyman.com`.
2. Vercel shows the DNS records to add. Update them at whatever registrar holds the
   domain today (the current site is on a website builder, so DNS may live there).
3. HTTPS is issued automatically once DNS propagates.

---

## Editing the site

**Almost everything lives in one file: `content/site.js`.**

Phone number, email, hours, services, prices, reviews, FAQs, and service areas are
all plain text in there. Change them and the whole site updates — no component edits
needed.

There are `TODO:` comments in that file flagging things to confirm before launch:

- **Phone number.** The old site listed two: (716) 710-2420 and (716) 710-2425.
  Only one is used now — confirm which is right. It appears in three places in
  `site.js` (`phone`, `phoneHref`, `smsHref`) and all three must match.
- **Email.** The old site listed both `Michael10830183@gmail.com` and
  `pbhandyman716@gmail.com`. The branded one is in use.
- **Trust badges.** `components/TrustBar.jsx` claims work is guaranteed and payment
  is due on completion. Both came from the old site's copy — delete any badge Mike
  can't stand behind.
- **Reviews.** The three testimonials came from the old site. If they aren't real
  named customers, either get permission to use the names or swap in real Yelp
  reviews.

### Adding a service

Add an object to the `services` array in `content/site.js`:

```js
{
  icon: "wrench",              // any name from components/Icon.jsx
  title: "Fence Repair",
  blurb: "One or two sentences about the work.",
  price: "Starting at $200",   // optional — omit for no price tag
}
```

Available icons: `wrench, roller, drop, bolt, thermo, chair, tv, door, wave,
target, calendar, shield, phone, message, mail, clock, check, pin, star, arrow, plus`.

---

## Structure

```
app/
  layout.jsx      metadata, fonts, LocalBusiness JSON-LD schema
  page.jsx        section order — rearrange the page here
  globals.css     brand colors and fonts (the @theme block)
  icon.svg        favicon
  sitemap.js      auto-generated /sitemap.xml
  robots.js       auto-generated /robots.txt
components/       one file per page section
content/site.js   ← all copy and contact info
public/
  logo.svg        horizontal lockup — for invoices, business cards, truck decals
  logo-mark.svg   emblem only — for social profile pics, stickers
```

## Brand

| Token | Hex | Use |
|---|---|---|
| Navy | `#0A2E45` | Text, dark sections, logo outline |
| Ocean | `#14708E` | Accents, eyebrows, icons |
| Surf teal | `#2AA8B0` | Highlights on dark backgrounds |
| Sunset | `#F26D3D` | Call-to-action buttons — the only true "click me" color |
| Sand | `#F7EFE4` | Light section backgrounds |

Fonts: **Barlow Condensed** (headings) and **Inter** (body), loaded from Google Fonts.

Colors are defined once in the `@theme` block of `app/globals.css`. Change a hex
there and it updates everywhere.

## SEO notes

- `LocalBusiness` / `HomeAndConstructionBusiness` JSON-LD is in `app/layout.jsx` —
  this is what feeds Google's local business panel. Keep the phone and address in
  sync with `content/site.js`.
- After launch, claim/update the **Google Business Profile** and point it at the new
  site. For a local handyman, that listing drives more calls than the site itself.
- Add real job photos when available — before/after shots are the single biggest
  conversion lift for trades sites, and there's a natural place for them between
  Services and Why Us.
