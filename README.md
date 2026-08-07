# Zhenhua Xue — After Effects Script Developer Portfolio

A fast, responsive, single-page portfolio for presenting After Effects scripts and workflow automation tools. The site uses only HTML, CSS, and JavaScript and is fully compatible with GitHub Pages.

## Project structure

```text
.
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    ├── images/
    │   ├── favicon.svg
    │   ├── tool-01.jpg       # Preview Queue Manager screenshot
    │   ├── tool-02.jpg       # Procedural Shape Generator screenshot
    │   └── tool-03.jpg       # AE Workflow Utilities screenshot
    └── videos/
        ├── tool-01.mp4       # Preview Queue Manager card/detail demo
        ├── tool-02.mp4       # Procedural Shape Generator card/detail demo
        ├── tool-03.mp4       # AE Workflow Utilities card/detail demo
        ├── demo-01.mp4       # Tool Demos section, item 1
        ├── demo-02.mp4       # Tool Demos section, item 2
        └── demo-03.mp4       # Tool Demos section, item 3
```

The image and video files listed above are optional. When a file is missing, the page automatically shows a designed placeholder instead of a broken image or video control.

## 1. Preview locally

No installation or build step is required.

### Simplest method

Double-click `index.html` to open it in a browser.

### Recommended method

If Python is already installed, open a terminal in this folder and run:

```bash
python -m http.server 8000
```

Then visit `http://127.0.0.1:8000` in your browser. This address is only for local preview; it is not included in the website code and is not used after deployment.

## 2. Create a GitHub repository

1. Sign in at [github.com](https://github.com/).
2. Click **New repository**.
3. Enter a repository name, for example `after-effects-portfolio`.
4. Choose **Public** so aescripts reviewers can open the site.
5. Do not add another README, `.gitignore`, or license if this folder is already initialized with Git.
6. Click **Create repository**.

## 3. Push the site to GitHub

Open a terminal in the project folder. If Git has not been initialized yet, run:

```bash
git init
git add .
git commit -m "Create After Effects developer portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/after-effects-portfolio.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username. If the project already has a remote named `origin`, check it with `git remote -v` instead of adding it again.

For later updates:

```bash
git add .
git commit -m "Update portfolio content"
git push
```

## 4. Enable GitHub Pages

1. Open the repository on GitHub.
2. Go to **Settings** → **Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder.
5. Click **Save**.

GitHub will publish the site automatically. No server, database, API, package installation, or build process is required.

## 5. Get the public URL

After GitHub Pages finishes deploying, the public URL normally follows this format:

```text
https://YOUR-USERNAME.github.io/after-effects-portfolio/
```

The exact URL also appears in **Settings** → **Pages**. Open it in a private/incognito browser window to confirm that reviewers can access it without signing in.

## 6. Update screenshots

Place your exported AE screenshots in `assets/images/` using these filenames:

- `tool-01.jpg`
- `tool-02.jpg`
- `tool-03.jpg`

Recommended format: JPG or WebP, approximately 1600 × 900 pixels, with readable UI text and no private project information.

To use a different filename or format, search `index.html` for:

```html
<!-- REPLACE WITH YOUR AE SCREENSHOT -->
```

Change the nearby relative `src`, for example:

```html
<img src="assets/images/my-real-tool.webp" ...>
```

Do not start the path with `/` and do not use a Windows drive path such as `C:\...`.

## 7. Update demo videos

Place MP4 videos in `assets/videos/` using the filenames shown in the project structure. H.264 MP4 is recommended for broad browser compatibility and reasonable file size.

To use different filenames, search `index.html` for:

```html
<!-- REPLACE WITH YOUR DEMO VIDEO -->
```

Change the nearby source path:

```html
<source src="assets/videos/my-real-demo.mp4" type="video/mp4">
```

Keep videos concise, remove sensitive client content, and show the input, action, and result clearly. Consider compressing large files before committing them to GitHub.

## 8. Add a new AE Script project

1. In `index.html`, find the `project-list` container.
2. Copy one complete `<article class="project-card ...">...</article>` block.
3. Paste it after the existing project cards.
4. Update the project number, status, title, description, features, technologies, development notes, screenshot path, video path, image alt text, and video label.
5. Give the article a unique `data-project` value.
6. Add the new screenshot and video to the appropriate asset folders.

The **View Details** modal reads content directly from each project card, so no additional JavaScript data needs to be added.

## Before sharing with aescripts + aeplugins

- Replace the screenshot placeholders with clear images of your real tools.
- Add at least one short, working demo video.
- Confirm that each status accurately reflects the tool's current stage.
- Check the public URL on desktop and mobile.
- Test every **View Details** button and the email links.
- Make sure screenshots and videos contain no confidential client data.
- Keep the repository public while the portfolio is under review.

## Technical notes

- All website asset paths are relative.
- The page works by opening `index.html` directly.
- JavaScript is progressively enhanced: core content remains visible even if JavaScript is unavailable.
- Missing image and video files are handled by visual fallback components.
- No React, Next.js, Node.js, PHP, database, server API, or third-party runtime is used.
- The site uses system fonts, so it does not wait for external font downloads.
