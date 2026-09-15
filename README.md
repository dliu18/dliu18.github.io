# David M. Liu's website

Personal academic website at <https://dliu18.github.io>, built with Jekyll and [al-folio](https://github.com/alshedivat/al-folio).

## Local development

Use Ruby 3.3.6 (see `.ruby-version`) and Node 22:

```sh
bundle install
npm ci
bundle exec jekyll serve
```

Open <http://localhost:4000>. The production site is hosted at the domain root, so `baseurl` is empty.

## Content

- `_pages/about.md`: biography, homepage publication lists, and teaching.
- `_data/news.yml`: news entries, newest first, with month/year labels such as `Jun '26`.
- `_bibliography/papers.bib`: research publications, using al-folio's standard bibliography fields.
- `_bibliography/public-scholarship.bib`: reports and essays.
- `_data/socials.yml`: contact and profile links.
- `_pages/ds4400.md`: teaching detail page.
- `files/cv/`: the preserved CV folder. The website links to `cv.pdf`.
- `assets/img/`: profile photo and publication previews.
- `assets/pdf/`: PDFs used by bibliography buttons. Existing downloads under `files/` are retained.

Navigation pages use Jekyll redirects to the homepage sections, Medium, and the CV download. There are no standalone `/publication/` pages.

Theme layouts, styles, and JavaScript come from the pinned `al_folio_core` gem. Two small theme overrides format month/year news and publication badges/buttons; `.al-folio-overrides.yml` tracks their upstream versions. No custom asset pipeline is used. Formatting can be applied with `npx prettier . --write`.

## Validation and deployment

```sh
npm run lint:prettier
bundle exec al-folio upgrade audit
JEKYLL_ENV=production bundle exec jekyll build
```

GitHub Actions validates pull requests. Only `main` deploys to GitHub Pages; migration branches do not deploy.

## AcademicPages checkpoint

The GitHub tag `academicpages-before-al-folio` points to commit `17fa469`, the tracked site before migration. To restore it without rewriting history, restore its tracked tree in a new commit and merge that commit into `main`.

The tag does not contain the three CV files that were untracked when it was created. Preserve local untracked files separately before any checkout or restoration.

Migration provenance and verification notes are in [docs/migration.md](docs/migration.md).
