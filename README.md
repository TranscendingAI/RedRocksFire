# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Contact form → Google Sheets log

After `/api/contact` successfully sends an inquiry via Resend (never for
honeypot or Turnstile-rejected spam), it also POSTs the submission as JSON to a
Google Apps Script web app that appends a row to the Inquiries sheet. Set in
Vercel (server-only, optional; logging is skipped if either is unset):

- `SHEETS_WEBHOOK_URL`: the Apps Script deployment's `/exec` URL
- `SHEETS_WEBHOOK_SECRET`: same value as the script's `SHARED_SECRET` property

Payload: `{ secret, submittedAt, name, email, phone, company, message,
hearAbout, hearAboutDetail, form: 'contact page', pageUrl }`. Logging is
best-effort with a 5s timeout; failures are only `console.error`ed.
