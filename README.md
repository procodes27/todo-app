# Todo App

Live demo: https://procodes27.github.io/todo-app/

A simple, responsive Todo web app to track tasks. This repository contains the static site files (HTML, CSS, JavaScript, and assets) used to power the GitHub Pages demo above.

## Features
- Add new todos
- Mark todos complete / uncomplete
- Edit and delete todos
- Persist todos locally (localStorage)
- Filter by All / Active / Completed
- Responsive layout for desktop and mobile
- Keyboard-friendly interactions

If your app implements additional features (drag & drop reordering, sync to a backend, due dates, reminders), add those here.

## Tech
- HTML, CSS, JavaScript (vanilla)
- Uses browser localStorage for persistence
- Hosted on GitHub Pages

## Getting started (local)
Option 1 — Open locally:
1. Clone the repo:
   git clone https://github.com/procodes27/todo-app.git
2. Open `index.html` in your browser.

Option 2 — Run a simple local server (recommended):
1. Install a static server (example using npm):
   npm install -g live-server
2. From the project root run:
   live-server

Your browser will open a local dev server and auto-reload on changes.

## Usage
- Type a task into the input field and press Enter or click Add.
- Use the checkbox to mark a task complete.
- Use edit/delete controls on each task to modify or remove it.
- Use the filter controls to show All, Active, or Completed tasks.
- Tasks are saved in your browser so they persist across reloads.

## Customization
- Edit `index.html` to change layout or text.
- Update styles in the CSS file (likely in `css/` or `styles/`) to change colors, fonts, and spacing.
- Modify JavaScript (likely `app.js` or `main.js`) to change behavior (storage, extra fields, syncing).
- Add icons or images in an `assets/` or `images/` folder and reference them from HTML/CSS.

## Deployment (GitHub Pages)
This repository is already configured for GitHub Pages. To publish updates:
1. Commit and push changes to the `main` branch (or the branch configured in repo settings).
2. GitHub Pages will serve the site at:
   https://procodes27.github.io/todo-app/

To use a custom domain, add a `CNAME` file to the repo and configure DNS with your domain provider.

## Troubleshooting
- If tasks disappear after reload, ensure localStorage is enabled and check browser console for errors.
- If styles look broken, confirm the CSS files are being loaded (check network tab).

## Contributing
Contributions are welcome — open a PR for bug fixes, UI improvements, accessibility, or new features. Please include a short description and screenshots if UI changes are included.

## License
Add a LICENSE file to apply an open-source license (MIT is a common choice).

## Contact
- GitHub: https://github.com/procodes27
- Site: https://procodes27.github.io/todo-app/
