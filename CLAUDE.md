# Mithson website: how to work in this folder

This folder is only for the Mithson Sealing Solutions website. Read this whole file before starting any task.
`AGENT.md` is the original design and content brief: open it only for design, colour or content questions.
`Mithson-text-file.txt` holds Mithson's own approved facts and copy.

## 1. Model and usage

- Use Claude Opus for all work here. The project setting in `.claude/settings.json` selects it.
- Save usage on every task:
  - Read only the files the task needs, and only the relevant lines of large files.
  - Do not re-read a file you just edited, re-run a check that already passed, or repeat earlier explanations.
  - Make several related edits in one go instead of many small rounds.
  - Run `npm run build` once after a batch of changes, not after every edit.
  - Test only the pages and screen sizes the change affects.
  - Keep replies short: what changed, what was checked, what is still open.
- When a chat gets very long, say so and suggest starting a new chat. This file carries the rules over.

## 2. How to get the exact result the user expects

1. Restate the request in one line before starting larger work.
2. If anything is unclear, ask first. Ask up to three short questions, with suggested answers to pick from.
3. Ask for a screenshot or image whenever the look matters: "Please paste a screenshot of the part you mean, or an example you like."
4. For larger work (new pages, redesigns, several files), give a short plan and wait for approval.
5. Change only what was asked. The user often says "other than that don't change anything": treat it as a firm rule.
   Never alter the menu bar (navbar) or the footer unless the user asks for a change to them by name.
   Before any change, save a named restore point (a commit plus a `before-...` tag), and save an `after-...` tag once
   it is done, so the user can say "revert to ..." safely. These are local only: push only when asked.
   If something else must change to make the request work, ask first or state it clearly.
6. When an example image is given, copy the layout and spacing, not the logo, brand or text in it.
7. Show the result, say how it was checked, and say plainly what was not checked.
8. If a mistake was made, admit it in one line and fix it. Do not argue.

## 3. Rules that must never be broken

- **Secrets:** never read, open, print, copy, edit or rewrite `.env` in any way, including from scripts.
  Never ask for or accept passwords or keys in chat. New key names go in `.env.example`, and the user adds the value.
  Never work around the deny rules in `.claude/settings.json`.
- **Git:** commit or push only when the user asks. Push only what the user selects.
  Before larger work, create a restore tag and give each commit a clear title. The GitHub repo is public.
- **flow-mcp:** keep it in its own folder with its file lock on. Never connect it to all folders. Stop if Google shows
  "unusual activity", and do not retry. Never remove, crop or hide Google's image mark.
- **Facts:** never invent figures, ratings, sizes, tolerances, lead times, test results, salaries or benefits.
  Unconfirmed items use `status: 'pending-validation'` and stay hidden. Add `?preview` to a local address to see them.
- **Naming:** new content uses the Mithson name. Fluoro Carbon Seals appears only where needed for accuracy, such as the
  address or company history.
- **Certificates:** ISO 9001:2015 and QIMA are company certifications. API 6A, NORSOK and BAM files are test records for
  named materials, so word them that way.
- **Competitors:** use competitor sites for ideas only. Never copy their text, images or brand names.
- **AI images:** label them "Illustrative image". Never present them as real Mithson factories, labs, staff or products.
- **Unproven claims:** do not publish "unlimited shelf life" or FDA wording until Mithson provides proof.

## 4. Design rules already agreed

- **Product and industry pages: read `build-docs/design.md` first, every time.** It holds the shared base design,
  the section patterns, the motion palette and the quality gate. When the user pastes copy for a product or industry
  page, no example image is needed: follow that file. Changing it needs the user's approval.

- Colours: primary blue `#42A4FF`, navy `#0336A3`, white. Light theme only.
- Page width: content and menu bar share one width, 1350 px at most, with a 16 px side gap (`--container-max` in `src/index.css`).
- Menu bar: floating white rounded bar, menu text in normal capitals, divider lines, and Book a Meeting with a calendar icon.
  Its glass effect matches the dropdown: `rgba(255,255,255,0.82)`, `blur(6px) saturate(160%)`.
  Never put a blur on a parent of the dropdown, because that breaks the dropdown's glass effect.
- Footer: fills the last screen exactly, with a navy bottom strip. Products is one column on laptops and two on tablets,
  and phones use tap-to-open sections.
- Home page main button is Book a Meeting. The menu bar hides on the last screen of a page.
- Animation: smooth and professional, and always respect reduced motion. Never crop images.

## 5. Project facts

- Stack: React 19, Vite 8, React Router 7, Framer Motion, GSAP, Lenis, Three.js. Functions live in `/api` on Vercel.
  Data services are Supabase (files and records), Upstash Redis (booking) and SMTP email.
- Commands: `npm run dev` for the local site (normally http://localhost:5173, or 5174 if busy), and `npm run build` to check.
- Content lives in `src/content/`, for example `products.jsx`, `productDetails.js`, `capabilities.js`, `industries.js`,
  `hsse.js`, `resources.js`, `materials.js`, `careers.js`, `company.js` and `navigation.js`.
- Website images go in `src/assets/site-images/`, named after the page, for example `manufacturing.jpeg`.
  They appear on that page automatically.
- Test at these sizes: laptop 1518x770, landscape tablet 1024x768, tablet 768x1024 and phone 375x812.
  Check that nothing scrolls sideways, that the console shows no errors, and that the build passes.
- The browser pane pauses animation while it is hidden. Test animation in a separate headless Chrome instead.
- Still open: the user must run `alter table public.enquiries add column if not exists application jsonb;` in Supabase.
  Six page images are still missing (see the Images plan), and the Cloudflare move is planned but not started.

## 6. How to reply

- Plain, simple English. The user is not a developer.
- Lead with the answer. Use short sections and tables when they help.
- Give file paths as links. Put commands to run in their own code block.
- End with what changed, what was checked, and anything the user must do.
