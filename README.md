# Analytics By Henry

Portfolio site for Henry, data analyst. Plain HTML, CSS and vanilla JS. No build step, no framework.

## Structure

```
index.html      Home: hero, auto-scrolling featured projects, process, CTA
about.html      Bio, photo, experience timeline, skill cards
projects.html   All projects with tool filters
contact.html    Contact links + message form
css/style.css   All styles (design tokens at the top)
js/data.js      Projects and skills content  <- edit this to update content
js/main.js      Interactions (menu, carousel, filters, form)
assets/         Logo mark + favicon
```

## Run locally

Open `index.html` in a browser, or use the VS Code **Live Server** extension.

## Updating content

- **Projects:** edit `window.PROJECTS` in `js/data.js`. Each `repo` currently points to the GitHub profile. Swap in the real repo URLs.
- **Skills:** edit `window.SKILLS` in `js/data.js` (name, percentage, note, link).
- **Photo:** save the headshot as `assets/henry.jpg` (portrait, roughly 4:5), then uncomment the `<img>` line in `about.html`.
- **Experience dates:** replace the `Month YYYY` placeholders in `about.html`.
- **Header/footer:** these are repeated in all four HTML files. Change all four if you edit the nav.

## Design tokens

| Token | Value | Use |
|---|---|---|
| `--bg` | `#090B10` | Page background |
| `--surface` / `--surface-2` | `#12161E` / `#181D27` | Cards |
| `--border` | `#212735` | Card borders |
| `--text` / `--text-2` / `--muted` | `#EEF1F6` / `#B3B9C6` / `#7D8597` | Text levels |
| `--accent` | `#FF6A2B` | Buttons, highlights, glow |
| `--accent-hi` | `#FF8A5C` | Hover state |

Fonts: Space Grotesk (headings), Inter (body), JetBrains Mono (labels and numbers).

## Deploy

**Netlify:** drag the folder into Netlify, or connect the GitHub repo. No build command, publish directory is the root. The contact form works through Netlify Forms automatically; submissions show under *Forms* in the Netlify dashboard.

**Vercel:** import the repo, framework preset "Other", no build command. Netlify Forms won't work there, so the form falls back to opening the visitor's email app with the message pre-filled. For a proper inbox on Vercel, point the form at Formspree.
