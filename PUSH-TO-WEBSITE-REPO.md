# Push landing page only to speak-ease-website

This guide pushes **only** the contents of the `landing/` folder to https://github.com/cyphinai/speak-ease-website (so the app code in `app/`, `components/`, etc. is not pushed).

---

## Prerequisites

- You're in the **speakease** repo root: `D:\speakease`
- Remote `origin` is already set to: `https://github.com/cyphinai/speak-ease-website.git`
- You have push access to that repo (and Git credentials/SSH set up)

---

## Method: Git subtree push (recommended)

This pushes only the `landing/` subtree to `origin`. The contents of `landing/` become the **root** of the website repo (e.g. `landing/index.html` → `index.html` on GitHub).

### 1. Commit your landing changes (from repo root)

```powershell
cd D:\speakease

# Stage only landing-related files
git add landing/

# Commit
git commit -m "Update landing page"
```

### 2. Push only the landing subtree to the website repo

```powershell
git subtree push --prefix=landing origin master
```

- **`--prefix=landing`** – only the `landing/` folder is pushed  
- **`origin`** – remote (speak-ease-website)  
- **`master`** – branch on the website repo  

After this, https://github.com/cyphinai/speak-ease-website will contain only the landing page (index.html, css/, js/, app.apk, etc.) at the repo root.

---

## If subtree push fails (e.g. “rejected – non-fast-forward”)

The website repo may have a different history. You can either:

**A) Force-push the subtree (overwrites `master` on the website repo):**

```powershell
git subtree split --prefix=landing -b landing-only
git push origin landing-only:master --force
git branch -D landing-only
```

**B) Use a separate clone and copy files:**

1. Clone the website repo somewhere else:
   ```powershell
   cd D:\
   git clone https://github.com/cyphinai/speak-ease-website.git speak-ease-website-deploy
   cd speak-ease-website-deploy
   ```

2. Copy everything from `D:\speakease\landing\` into this clone (so the clone’s root has index.html, css/, js/, app.apk, etc.). Replace existing files.

3. Commit and push:
   ```powershell
   git add -A
   git commit -m "Update landing page"
   git push origin master
   ```

---

## Summary

| Step | Command |
|------|---------|
| 1. Go to repo root | `cd D:\speakease` |
| 2. Stage landing | `git add landing/` |
| 3. Commit | `git commit -m "Update landing page"` |
| 4. Push only landing | `git subtree push --prefix=landing origin master` |

After step 4, only the landing page is on https://github.com/cyphinai/speak-ease-website.
