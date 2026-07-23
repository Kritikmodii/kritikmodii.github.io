# Kritik Modi — Portfolio

A clean, responsive personal portfolio site. Static HTML/CSS/JS — no build step, no dependencies.

## Files

- `index.html` — page structure and content
- `style.css` — all styling (design tokens live at the top of the file)
- `script.js` — typing effect, mobile nav, scroll spy, scroll reveals, contact form handling

## Before you publish

1. **Update your content.** Open `index.html` and replace:
   - The `about` section text and the `~/about` facts (location, experience, stack)
   - The four project cards (title, description, tech tags, live/source links)
   - The contact links (email, GitHub, LinkedIn, Twitter)
   - The `resumeLink` href to point at your actual résumé PDF, if you add one
2. **Contact form.** The form currently only shows a confirmation message in the browser — it doesn't send email anywhere. To make it work, connect it to a service like [Formspree](https://formspree.io), [Netlify Forms](https://docs.netlify.com/forms/setup/), or [EmailJS](https://www.emailjs.com/), and update the `submit` handler in `script.js` accordingly.
3. **Favicon / social preview (optional).** Add a `favicon.ico` and an Open Graph image if you'd like richer link previews when shared.

## Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g. `kritikmodi.github.io` for a user site, or any name for a project site).
2. Push these three files (`index.html`, `style.css`, `script.js`) to the repository root:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Set **Branch** to `main` and folder to `/ (root)`, then **Save**.
6. Wait a minute or two — GitHub will publish your site at:
   - `https://<your-username>.github.io/<repo-name>/` (project site), or
   - `https://<your-username>.github.io/` (if the repo is named `<your-username>.github.io`)

That's it — no build tools, frameworks, or CI needed.

## Local preview

Just open `index.html` in a browser, or run a tiny local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.
