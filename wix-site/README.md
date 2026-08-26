# Ajmera Fashion Limited — Wix Velo Setup Guide

This repo is Velo (Wix's code layer) page code, ready to push through
**Git Integration & Wix CLI** into your connected Wix site. It is
**not** a standalone static site — Velo code only controls elements
that already exist in the Wix Editor, so a short one-time setup in
the Editor is required before this code does anything. Follow the
steps below in order.

---

## 0. How this connects to your Wix site

1. In the Wix Editor: **Dev Mode → Enable Dev Mode → Local Editor →
   Connect to Git**. This links your site to a GitHub repo.
2. Clone that repo locally, then copy the contents of this project
   (`src/`, `wix.config.json`, `package.json`) into it, replacing the
   matching files.
3. `git add . && git commit -m "Real content + dynamic images" && git push`
4. Back in the Wix Editor's Local Editor (`wix dev` from the repo
   folder), your changes sync automatically.
5. Publish from the Wix Editor as usual.

Full official guide: https://support.wix.com/en/article/velo-setting-up-git-integration-wix-cli-beta

---

## 1. Upload the Logo

1. In the Wix Editor: **Media Manager → Upload Media** → upload
   `assets/ajmera-fashion-logo.png` (included in this project).
2. Drag a Logo/Image element into your header (top-left, as in the
   original project) and set its **Element ID** to `image16` (this
   matches `masterPage.js`, which also drives the hover animation).
3. That's the static fallback. For the *dynamic* version (swap the
   logo from the CMS admin panel without touching the Editor), also
   complete the CMS step below and add a row with `key: "logo"`.

---

## 2. Set Up the "SiteImages" CMS Collection (makes images dynamic)

This is what lets you or your team change images later from the
**Wix admin panel (CMS/Content Manager)** — no code, no redeploy.

1. Go to **CMS → Create Collection**, name it exactly `SiteImages`.
2. Add fields:
   | Field    | Type  | Notes                          |
   |----------|-------|----------------------------------|
   | `key`    | Text  | Set as unique. e.g. `hero-main`  |
   | `image`  | Image |                                   |
   | `altText`| Text  |                                   |
   | `page`   | Text  | e.g. `home`, `about` (for grouping) |
3. Collection **permissions**: content readable by *Anyone*, editable
   by *Admin* — so any admin can log in and swap a photo any time.
4. Add one row per key needed. Suggested starting rows:

   | key            | page   | what it's for                        |
   |----------------|--------|----------------------------------------|
   | `logo`         | (any)  | header logo                           |
   | `hero-main`    | home   | homepage hero background              |
   | `home-intro`   | home   | "Why Choose Ajmera Fashion" image     |
   | `about-ajay`   | about  | Director Ajay Ajmera's photo          |
   | `about-vijay`  | about  | Director Vijay Ajmera's photo         |

   Add more rows/keys as you add more image elements — just give the
   matching page code an element ID and a `fetchImagesByPage()` /
   `fetchImageByKey()` call (see `src/backend/siteImages.jsw`).

---

## 3. Element IDs required per page

Velo can only bind to elements that exist in the Editor. Add the
following elements (Text, Image, Button as noted) to each page and
set their **Element ID** (right-click element → Properties → ID) to
match exactly. Each page's `.js` file has this same list in a comment
at the top.

**Home** (`Home.c1dmp.js`): `heroHeadline`, `heroSubtext`, `heroImage`,
`introHeadline`, `introBody`, `introImage`, `statYears`,
`statYearsLabel`, `statRetailers`, `statRetailersLabel`,
`qualityHeadline`, `qualityBody`, `ctaButton`

**About** (`About.kr7wa.js`): `aboutIntro`, `founderAjayName`,
`founderAjayBio`, `founderAjayImage`, `founderVijayName`,
`founderVijayBio`, `founderVijayImage`, `visionHeadline`, `visionBody`,
`offeringsHeadline`, `offeringsBody`, `valuesHeadline`, `valuesBody`,
`officeBody`, `futureHeadline`, `futureBody`, `cinText`

**Contact** (`Contact.k23ci.js`): `addressText`, `phoneText`,
`emailText`, plus either the Wix Forms app element, or
`inputName` / `inputEmail` / `inputPhone` / `inputMessage` /
`submitButton` / `successMessage` if building the form manually.

**Investor Relations**: intentionally left blank for now, per your
instruction — real financial/annual-report PDFs will be added once
supplied. When ready, see the comment at the top of
`Investor Relations.z6l0z.js` for how to wire up a document list.

**Blogs**: if you use the built-in **Wix Blog app**, you don't need
custom element IDs — just connect the Blog Feed element and posts are
managed entirely from the Wix admin panel (Blog dashboard). This is
the recommended path since it gives you full CMS-editable blog posts
out of the box, including images.

---

## 4. Real content already wired into the code

The text you see hard-coded in `Home.c1dmp.js`, `About.kr7wa.js` and
`Contact.k23ci.js` was pulled from your live site, afsurat.com —
company description, director bios (Ajaykumar Nagarmal Jain &
Vijaykumar Jain), vision, offerings, values, office address, CIN
(`U17299GJ2022PLC129445`), phone (`+91-635-890-7210`) and email
(`ajmerafashionlimited@gmail.com`). Edit the constants at the top of
each file directly if anything needs updating — no CMS required for
plain text changes, only for images.

---

## 5. Investor Relations — kept blank on purpose

As instructed, this page is left in its original/blank format. Once
annual reports, financial statements or investor notices are ready as
PDFs, upload them to the Wix **Media Manager** (or a CMS collection,
for a filterable document table) and this page can be built out —
just say the word and I'll wire it up the same way as the other pages.

---

## 6. Why a plain HTML/CSS/JS folder can't be "uploaded directly" to Wix

Wix's Editor is a proprietary drag-and-drop system — pages are built
from Wix's own elements, not raw markup. Velo (this code) can only
read/write properties on elements you've placed in the Editor; it
can't generate new layout or design the way a `.html`/`.css` file
does. That's why this project is structured as page-code files that
plug into elements you (or I, guiding you) place in the Editor, plus
a CMS collection for anything that needs to be editable by an admin
without code — this is the closest real equivalent to "drop in a
folder and it just works" that Wix supports.
