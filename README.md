# SpeakEase – Landing Page

Single-page marketing site for the SpeakEase AI-powered language learning app. Built with **React** (CDN) and **vanilla CSS**.

## Run locally

Uses **Python's built-in server** (no Node) so VS Code's debugger won't open. The browser opens automatically.

```bash
cd landing
npm install
npm run dev
```

Opens http://localhost:3000 in your default browser. Requires Python 3.

## Deploy (Railway)

Push to GitHub; Railway builds and deploys. The site serves static files and **`/app.apk`** for direct APK download.

## APK download

- **Add your APK:** Place your built APK in the **landing folder** and name it **`app.apk`**.
- All "Download App" / "Download APK" buttons link to **`/app.apk`**, so users get the file directly instead of the Play Store.
- After adding or replacing `app.apk`, commit and push so the live site serves the new file.

## App screens (screenshots)

The "App screens" section shows phone mockups. You can use **real app screenshots**:

1. Placeholder PNGs can be created in **`landing/assets/screens/`**: `home.png`, `learn.png`, `practice.png`, `progress.png`, `profile.png`.
2. Run `node scripts/create-placeholders.js` from the `landing` folder to create placeholder files.
3. Replace any file with your real app screenshot (same filename). If a file is missing, the section falls back to the styled mockup.

## Structure

- `index.html` – Entry; loads React, Babel, `js/app.jsx`
- `css/style.css` – Styles (SpeakEase brand colors, layout, hero, banner, phone mockup)
- `js/app.jsx` – Hero, banner strip, animated phone with screen slides, screen sections, CTA, footer
- `app.apk` – Add your Android APK here for direct download
- `assets/screens/*.png` – Optional app screenshots

## Features

- Hero with gradient background and animated phone mockup (rotating app screens)
- Banner strip (audio lessons, AI tutor, pronunciation, streaks)
- App screens section: optional screenshots or design-accurate mockups in phone frame
- CTA and footer with APK download link
