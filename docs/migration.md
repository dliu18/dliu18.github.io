# AcademicPages to al-folio migration

Based on official al-folio starter revision `8ec1f3608d997491e0206c4e7a9368547a5ef255`, following its [bootstrap skill](https://github.com/alshedivat/al-folio/blob/8ec1f3608d997491e0206c4e7a9368547a5ef255/.agents/skills/al-folio-bootstrap/SKILL.md), agent guidelines, and ownership boundaries.

The site uses pinned core, icons, citations, and upgrade gems. Unused demonstration features and their plugins are omitted. Local `_includes/news.liquid` and `_layouts/bib.liquid` overrides implement the requested month/year news table and publication venue badges and button labels/order. Their upstream versions are recorded in `.al-folio-overrides.yml`; there are no Sass or JavaScript overrides.

## Content and routes

- Biography, five news items, ten research publications, two public-scholarship entries, teaching, and personal links are retained.
- Publications are rendered on the homepage using the standard bibliography layout. STABLE's abstract, figure, caption, and supplemental PDF are retained through its bibliography entry.
- Standalone `/publication/...` pages and redirects are intentionally removed.
- The teaching permalink, about aliases, sitemap, and existing downloads are retained.
- Standard redirect pages provide navigation to homepage anchors, Medium, and the CV.
- All five documents and the hidden Finder metadata in `files/cv/` are retained unchanged, including the three originally untracked files. No CV files were added to the checkpoint commit.
- The Maine forecasts page was verified live at `https://dliu18.github.io/maine-2026-primaries/`. Its source is not in this repository; the homepage uses its absolute production URL so the link also works from the local preview.
- Google Analytics 4 uses measurement ID `G-9786S8E7XK` through the pinned `al_analytics` plugin, replacing the former Universal Analytics setup.

## Rollback

The remote tag `academicpages-before-al-folio` preserves the original tracked source. Migration work is on `codex/migrate-al-folio`. Production deployment remains gated to `main`.

## Verification

- `npm ci` and `npm run lint:prettier` passed.
- `bundle exec al-folio upgrade audit` reported zero blocking and zero non-blocking findings.
- The two intentional overrides are acknowledged in `.al-folio-overrides.yml`.
- Both the production-root build and the bootstrap skill's `/al-folio` build passed.
- Generated HTML contains all 12 publication and public-scholarship titles, valid section anchors, and no internal `/publication/` routes or links.
- Local page and asset links resolve, apart from the Maine and CS jobs project URLs, which was verified on the live site instead.
- SHA-256 checks confirm the entire CV folder is unchanged. All five documents are copied unchanged into the generated site; Finder metadata is excluded by Jekyll.
- Desktop and 390px mobile previews were inspected. Navigation, teaching, the STABLE abstract toggle, and dark mode work. No browser console errors were observed.
- GitHub Actions itself has not run for this migration, and the migration has not been published.

## Presentation refinements

News is maintained in `_data/news.yml`, using display dates such as `Jun '26` without invented days. Research publications show venue/year badges and a first `Paper` button; STABLE points to its SIAM DOI. Public scholarship uses `Link`. Local `TODO.md` tracks remaining abstracts, is gitignored, and is excluded from the generated website.

## Final site audit

The production build, source formatting, content and internal-link checks, and override audit pass. The job dashboard link uses its verified production URL so it works from the preview, just like the Maine project link. The STABLE abstract control supports keyboard activation. The bibliography override record was refreshed after the requested label changes.

An HTTP check of 42 external destinations found no 404 or 5xx responses. Medium, LinkedIn, SIAM, ACM, and SAGE returned access restrictions to automated requests; those links have not been verified end to end. The job dashboard and Maine project both returned HTTP 200.
