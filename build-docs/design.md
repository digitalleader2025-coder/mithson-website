# Mithson design system — Product pages and Industry pages

**Scope: product pages and industry pages only.** Not the home page, not the company pages, not the navbar or footer.

**Read this file before designing any product or industry page.** When Dinesh pastes the copy for a page, no mock-up is needed: read the copy, pick the sections and the motion from this file, and build. If the copy needs a section pattern that is not listed here, say so and ask before inventing one.

The goal is Apple-level calm and precision, in Mithson blue and white. Lots of white, one accent colour, generous space, large confident type, and motion that explains rather than decorates.

---

## 1. The unbreakable rules

1. **Blue and white only.** Navy `#0336A3`, accent blue `#42A4FF`, white. No other brand colour, ever. Greys come from the tokens, never invented.
2. **Every image tile is white.** Product photos sit on `linear-gradient(180deg, #ffffff 0%, #f1f7ff 100%)`, never on a dark tile — including on a navy band, where a white card holds the photo.
3. **Never invent a figure.** Temperature, pressure, speed, size, tolerance, lead time: only values already in `src/content/typicalSpecs.js` or `src/content/productItems.js`, shown with their **Typical** or **Mithson** badge. No figure for an item means "Confirm with Mithson", not a guess.
4. **Keep the user's caveats.** If the pasted copy hedges ("confirm with Mithson", "must be verified"), that hedge appears on the page.
5. **Never touch the navbar or the footer.**
6. **Reduced motion is honoured** in every animation, with `useReducedMotion()`.
7. **No competitor text, images or brand names.** Their layouts are inspiration; their words are not.
8. **Max width 1382px** (`--container-max`), 16px side gap, no sideways scroll at any size.

## 2. Tokens (already in `src/index.css` — never hardcode)

| Use | Token |
|---|---|
| Navy, accent, white | `--color-navy-base`, `--color-blue-accent`, `--color-white` |
| Section tint | `--color-bg-2` `#F8FAFC` |
| Body text | `--color-text-2`, muted `--color-muted` |
| Headings | `--font-display` Outfit; body `--font-body` Inter |
| Spacing | `--space-1` … `--space-32` |
| Radius | cards `20–22px`, pills `--radius-full` |
| Shadow | `0 14px 40px rgba(3,54,163,0.09)` for cards |
| Motion | `--duration-base` 300ms, `--duration-slow` 600ms, `--ease-out` `cubic-bezier(0.16,1,0.3,1)` |
| Reveal easing in JS | `const EASE = [0.22, 1, 0.36, 1]` |

Deep-navy band gradient (used once or twice per page, never more):
`radial-gradient(ellipse at 70% 30%, rgba(10,108,255,0.45), transparent 58%), linear-gradient(135deg, #01133f 0%, #021f66 55%, #0336a3 100%)`

## 3. The shared base — identical on every page

These five things never change, so the pages feel like one family:

1. **Numbered sections.** Every section opens with a pill — `01 · PRODUCT OVERVIEW` — then an `h2`, then one intro line. Component: `Head`.
2. **Rhythm of backgrounds.** White → tint → **navy band** → white → tint → **navy band** → white → navy CTA. Never two navy bands touching.
3. **Hero.** Navy, left column (label pill, three-line headline with the middle line in the accent gradient, lead, two buttons), right column the product photo on white, then a white chip strip of four facts under it.
4. **Closing CTA + Related products.** Navy CTA band with two buttons and the contact email, then `<RelatedProducts />`.
5. **Reveal on scroll.** Everything fades up 26px over 600ms, staggered 60–80ms, once only.

Stylesheet: the shared look lives in `src/pages/Products/MITH-PLATE/MithPlate.css` (`mp-*` classes). A new page imports it and adds **only its own deltas** in its own sheet with its own prefix (`mu-`, `hu-`, …). Never copy the shared sheet.

## 4. The section menu — pick 8 to 13 per page

Choose the patterns that fit the pasted copy. Two pages should never use the same set in the same order.

| # | Pattern | Use it for | Already used on |
|---|---|---|---|
| A | **Split overview** — cards on the left, one large photo on the right | "What is …" | MITH PLATE, M-UNI, Hammer Union |
| B | **Step line** — 4–6 numbered steps on a line that draws itself | "How it works" | M-UNI (4), Hammer Union (5) |
| C | **Tab band** — tabs on navy, selected item shows photo + text + spec rows | A family of variants | M-UNI (5 types), Hammer Union (3 constructions) |
| D | **Side picker** — option list on the left, large panel on the right | Materials, profiles, springs | MITH PLATE, M-UNI, Hammer Union |
| E | **Icon card grid** — 3 columns of icon + title + text | Advantages, applications, characteristics | all three |
| F | **Numbered list** — selection factors | "What to check before selecting" | M-UNI, Hammer Union |
| G | **Two-column table** — parameter / information | Enquiry fields, published data | M-UNI, Hammer Union |
| H | **Checklist columns** — 3 columns of ticked items | Installation and maintenance | M-UNI, Hammer Union |
| I | **Accordion FAQ** | Questions | all three |
| J | **Dimension figure** — labelled photo plus dimension cards | Sizes | Hammer Union |
| K | **Rating cards** — big number, label, Typical badge | Pressure and temperature | Hammer Union |
| L | **Spec envelope** — boxed operating window | Compressor-style limits | MITH PLATE |

**Patterns still unused — reach for these first on the next page, so it looks different:**

| # | Pattern | What it is |
|---|---|---|
| M | **Comparison table** | 3–4 variants side by side, one row per property, sticky header row |
| N | **Exploded view** | Parts of an assembly that separate as you scroll, each with a label |
| O | **Scroll-pinned photo** | One photo stays still while its captions change beside it (as on the About page journey) |
| P | **Horizontal rail** | Variant cards that scroll sideways with a progress bar — good for 8+ items |
| Q | **Hotspot photo** | One large photo with numbered dots; tapping a dot opens its note |
| R | **Range bars** | Each material drawn as a horizontal bar on a shared temperature scale |
| S | **Before / after slider** | A draggable divider, e.g. a worn seal next to a new one |
| T | **Decision tree** | Two or three questions that lead to the right variant |
| U | **Cross-section reveal** | An SVG cut-away whose layers appear one at a time |

## 5. The motion palette — a different one per page

Keep the shared fade-up reveal everywhere. Then give each page **one signature move** that nothing else on the site has:

| Signature | How it behaves |
|---|---|
| Parallax hero photo | The photo drifts up as the hero scrolls away (M-UNI, Hammer Union — now used) |
| Drawing line | A step line that fills left to right (used) |
| Cursor-follow preview | A photo that follows the pointer (used on the home page) |
| Magnetic cards | Cards that tilt slightly towards the pointer |
| Counting numbers | Figures that count up once when scrolled into view |
| Sticky stack | Sections that stack on top of each other as you scroll |
| Mask wipe | A photo revealed by a wipe instead of a fade |
| Scrub rotation | A product that rotates as the page scrolls |
| Segmented bar fill | Range bars that fill on entry |

**Rules of motion:** never longer than 900ms, never blocks reading, never moves more than ~60px, never loops forever, never runs under reduced motion, never animates on first paint above the fold more than once.

## 6. Features worth borrowing from the competitors

From KC Seals, Maxspare and Omniseal — **the idea only, never their words or pictures:**

| Feature | Where it belongs | Status |
|---|---|---|
| Spec tooltip on a variant thumbnail (pressure · temperature · speed icons) | Variant grids and rails | **Not built** — worth doing |
| Profile count on a category ("8 constructions") | Category and product heroes | **Not built** |
| Filter bar — material, pressure, temperature, industry | Products index | **Not built** |
| Download the datasheet / handbook | Every product page's CTA | Partly: buttons exist, files do not |
| Case studies with photo, problem, result | Industry pages | **Not built** |
| Certification strip (ISO 9001, QIMA, API 6A, NORSOK, BAM) | Industry pages | In the footer only |
| Market-segment tabs, each with its own features, applications and products | Industry pages | **Not built** — the key industry pattern |
| "Other industries" strip at the foot | Industry pages | **Not built** |
| Category overview text above a product card grid | Products index | Partly |
| WhatsApp enquiry button | Site-wide | **Not built** — needs a number |

## 7. Industry pages — the standard shape

Common base as above, then:

1. **Hero** — industry photo, name, one-paragraph lead, and 4–6 capability bullets.
2. **Segment tabs** — e.g. Onshore / Offshore / Subsea. Each tab holds *Features*, *Applications* and *Products for this segment*.
3. **Products used here** — cards linking into the product pages.
4. **Standards and certifications** — only the real five, worded as the certificate itself words it.
5. **Case studies** — only once Mithson approves real ones; until then the section is left out.
6. **Other industries** strip, then the CTA.

The segment tabs are the signature: an industry page should feel like a filter over the product range, not a second product page.

## 8. Writing and content rules

- Plain English, short sentences, no marketing superlatives.
- Section intros are one sentence.
- A card is a title of 2–4 words plus 1–2 sentences.
- Mithson's own name throughout; "Fluoro Carbon Seals" only where accuracy demands it.
- Copy goes in `src/content/<page>.js`, never inline in the page component.

## 9. Responsive and quality gate

Every page is checked at **1518×770, 1024×768, 768×1024 and 375×812** before it is called done:

- no sideways scroll, nothing wider than the viewport;
- no text under 11px on the page's own sections;
- buttons and tabs at least 44px tall on a phone;
- every image loads, no console errors, `npm run build` passes;
- every tab, picker and accordion actually switches;
- the hero title clears the floating menu bar.

Grid collapse: 3 columns → 2 at 1180px → 1 at 640px. Pickers and split layouts become one column at 900px.

## 10. How to use this file when copy is pasted

1. Read the copy and list its real sections.
2. Map each one to a pattern in §4 — **and deliberately pick at least two patterns this product has not used**, preferring the unused list.
3. Choose one signature motion from §5 that no other page uses.
4. Pull the figures for this product from the existing data files; where there are none, write "Confirm with Mithson".
5. Build: `src/content/<page>.js`, then the page, then its delta stylesheet.
6. Tag `before-<page>`, build, test at the four sizes, tag `after-<page>`, commit.
7. Report what was built, what was checked, and what was left out.

If a page would need a brand-new pattern or a new colour, **ask first** — that is a change to this file, and this file changes only with Dinesh's approval.
