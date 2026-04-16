# Portfolio site

Static HTML/CSS/JS portfolio. **Edit your copy in `js/content.js`**, then deploy the folder to GitHub Pages.

## Deploy to `nirmalshah123.github.io`

1. On GitHub, create a **public** repository named **`nirmalshah123.github.io`** (exact name; use your GitHub username).
2. Push this project to the **`main`** branch (repository root should contain `index.html`).
3. In the repo: **Settings → Pages → Build and deployment → Source**: **Deploy from a branch**, branch **`main`**, folder **`/ (root)`**, then Save.
4. After a minute or two, the site will be live at **https://nirmalshah123.github.io/**

Optional: add a `resume.pdf` in the repo and set `resumeUrl: "/resume.pdf"` in `js/content.js`.

## Local preview

From this directory:

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080` (needed so `content.js` loads correctly).
