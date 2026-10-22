# SEO notes — בקתות צדיק כתמר

Technical SEO only. The visible wording, layout, hero photo, and stylesheet were left as the owner approved them. Titles, meta descriptions, and alt text on two images that had none are the only guest-facing text changes, and they are not on the page body.

## What changed

- Hebrew title and meta description now name the searches people actually type: a cabin in Moshav Nov, wooden cabins in the Golan, a place for a couple with children, a jacuzzi, and about 30 minutes from the Kinneret. The same text is on the Open Graph and Twitter tags. The English page has its own title and description.
- Canonical URLs, `he` / `en` / `x-default` hreflang, `lang` and `dir` were already correct and stayed. The sitemap now repeats those language alternates and still uses absolute `github.io` URLs with `lastmod`.
- `robots.txt` already allowed all crawlers and pointed at the sitemap. It was not rewritten.
- Open Graph and Twitter cards still use `images/og/share.jpg` (the hammock in the garden), not the jacuzzi photo.
- Favicon was already there. Added `site.webmanifest` and a manifest link.
- Hero and contact photos that had an empty `alt` now have a short description. Other alts were already Hebrew (or English on `en.html`) and were not rewritten.
- Heading levels were already one H1, then H2 sections, then H3. They were not retagged, because that would change the approved type sizes.
- Local links on both pages resolve. Added `404.html` for GitHub Pages (`noindex`), in Hebrew, linking home.
- JSON-LD is a `LodgingBusiness` plus an `FAQPage` whose questions and answers are copied from the FAQ already on that page. Phone is `+972-50-460-6674`. Address is Nov / Golan, country IL, no street. Two rooms; a couple + 6 children per cabin; up to 16 together. Amenities match the page: air conditioning, jacuzzi, kitchenette, garden, summer pool, Shabbat hot plate / urn / timers, and on the Hebrew page the barbecue spot that is not for Shabbat. Pets are not `petsAllowed: true`; the text says the yard only, not inside. No prices, no ratings, no coordinates.
- A comment in each `<head>` marks where the Search Console verification meta tag goes. No token was invented.
- The hero image is preloaded. `styles.css` is preloaded and applied without blocking the first paint; the critical style already in the head covers the hero until the file arrives.

## Target queries

These are the Hebrew searches the title and description are written for. The page does not say the cabins are kosher.

- צימר במושב נוב
- צימרים ברמת הגולן
- צימר למשפחות בגולן
- צימר לזוג עם ילדים
- בקתות עץ בגולן
- צימר עם ג'קוזי בגולן
- צימר ליד הכנרת
- צימר שומר שבת — covered only as ציוד לשבת (hot plate, urn, timers, arrive before Shabbat). Not a kashrut claim.

## Lighthouse, mobile, local `index.html`

Before this branch (main `f150be3`):

| Category | Score |
| --- | --- |
| Performance | 92 |
| SEO | 100 |
| Accessibility | 100 |
| Best practices | 100 |

LCP 3.3 s, CLS 0.031, TBT 0 ms.

After this branch, same command, mobile:

| Category | Score |
| --- | --- |
| Performance | 96 |
| SEO | 100 |
| Accessibility | 100 |
| Best practices | 100 |

LCP 2.8 s, CLS 0.053, TBT 0 ms. `styles.css` is no longer render-blocking. CLS moved from 0.031 to 0.053 because the full stylesheet arrives after the critical hero style; both numbers are in the good range, and the settled first screen matches the previous pixels.

## What matters more than these tags

On-page tweaks will not by themselves rank a new GitHub Pages URL. In rough order:

1. Google Business Profile for בקתות צדיק כתמר, with the real website URL, the Nov gate as the location you are willing to publish, photos, and the phone 050-460-6674. This is the listing Google shows for "צימר במושב נוב".
2. Search Console on the live property. Paste the verification meta tag into the marked comment, then submit `https://oztzadik123-beep.github.io/tzadik-cabins/sitemap.xml`.
3. A real domain (for example a `.co.il`) pointed at the site. `github.io` is a shared host; a domain you control is what people and other sites will link to. Keep one canonical host and redirect the other.
4. Links from sites that already rank for the Golan: the moshav, the regional council, Golan tourism pages, and any directory that already lists the cabins. A link from those pages is worth more than another keyword in the title.
5. Reviews on the Business Profile from guests who stayed. Do not invent ratings on the site. There are no star counts in the structured data because none are published from a real source.
6. Coordinates only after someone stands at the cabin door and confirms the pin. Until `cabinCoordinates` in `js/site-data.js` is filled, the schema has no geo.
