# NEET Computers — React Port

A React port of the static neet.computer website. The original site is plain
HTML, CSS, and JavaScript; this project rebuilds it as a React single page
app while keeping the current design, content, URLs, and behavior.

Next.js is intentionally not part of this step. That port waits until the
redesign is done (Kayla's call).

## Tech

- React 18.2.0 (with react-dom 18.2.0)
- react-router-dom 6.20.0 for routing
- react-scripts 5.0.1 (Create React App) for the dev server and build
- No other runtime dependencies. The site's own stylesheet and images are
  carried over from the static site unchanged.

## Requirements

- Node.js: developed and verified with v26.13.1. Any current LTS release
  works.
- npm: verified with 11.20.0. npm is the package manager for this project,
  and the lockfile (package-lock.json) is committed, so installs are
  reproducible.

## Run it locally from a fresh setup

1. Clone the repository:

       git clone https://github.com/neetcomputers/neet-computers-react.git
       cd neet-computers-react

2. Install dependencies:

       npm install

3. Start the dev server:

       npm start

   The site opens at http://localhost:3000 and reloads as you edit.

4. For a production build:

       npm run build

   The static output lands in the build/ folder.

## URLs

Every page from the static site answers at both its clean path and its
original .html path, exactly as linked today:

| URL | Page component |
| --- | --- |
| / or /index.html | src/pages/Home.js |
| /about or /about.html | src/pages/About.js |
| /services or /services.html | src/pages/Services.js |
| /portfolio or /portfolio.html | src/pages/Portfolio.js |
| /reviews or /reviews.html | src/pages/Reviews.js |
| /pay or /pay.html | src/pages/Pay.js |
| /contact or /contact.html | src/pages/Contact.js |
| /mods or /mods.html | src/pages/Mods.js |
| /servers or /servers.html | src/pages/Servers.js |
| /terms or /terms.html | src/pages/Terms.js |
| /workstations or /workstations.html | src/pages/Workstations.js |
| /wraps or /wraps.html | src/pages/Wraps.js |
| anything else | src/pages/NotFound.js (the ported 404 page) |

## Project layout

- src/pages/ — one component per original page. The markup in each file is
  the page's own HTML converted to JSX, so the words, prices, links, and
  image references are the site's real ones.
- src/components/Chrome.js — the shared header and footer, taken from the
  static pages so every route shows the same chrome.
- src/App.js — the router. Internal page links render as router Links;
  external links are untouched.
- src/siteEffects.js — the behaviors from the static site's js/main.js,
  ported: the home gallery shuffle, the showcase carousels, the expand
  buttons, the header fade on scroll, smooth anchor scrolling, the contact
  form flow, and the Elfsight loader for the reviews widgets. Inline
  onclick handlers in the original markup became data-fn / data-arg
  attributes that this file dispatches.
- public/css/style.css — the original css/style.css, plus the PayPal button
  style that pay.html carried inline. It is linked from public/index.html
  exactly as the static site links it, not bundled.
- public/images/ — the original image tree, all 215 files, referenced by
  the same /images/... paths as the static site.
- public/index.html — the app shell with the original page head: fonts,
  Bootstrap Icons, favicons, and meta tags.

## Behavior notes

- The home gallery is a CSS marquee, as on the static site; the JavaScript
  shuffle on load is ported.
- The contact form keeps the original flow: it validates in the browser and
  posts to contact-form-handler.php. That PHP endpoint lives on the
  production webserver, so on a local run the submit ends in the form's
  error state, which is the same code path the static site takes when the
  endpoint is unreachable.
- The reviews page loads Elfsight's platform script for its two review
  widgets, as the static page does inline.
- The pay page keeps the original PayPal hosted payment form.
- The static site used the same <title> on every page, so the app keeps a
  single title.

## Status

All 13 pages are ported and the production build passes. Content fidelity
was checked page by page against the static source in
neetcomputers/NEET-Computers-Website.
