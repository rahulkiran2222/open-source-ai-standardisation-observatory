# Open-Source AI Standardisation Observatory

An auditable research engine, evidence database, and interactive network observatory investigating open-source AI participation in global standardisation and European regulatory processes (e.g., CEN-CENELEC JTC 21, ISO/IEC JTC 1/SC 42, NIST AISIC, and the EU AI Act).

---

## Quickstart

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your web browser.

### 3. Build for Production
```bash
npm run build
```
The optimized static build will be placed into the `dist/` directory.

### 4. Run Python Verification Tests
```bash
python3 tests/test_validation.py
# or using pytest
pytest tests/test_validation.py
```

---

## Deploying to GitHub Pages

This project is already pre-configured for GitHub Pages:
- `vite.config.ts` includes `base: './'` for relative sub-path asset resolution.
- `.github/workflows/deploy.yml` is included for automated zero-config deployments.

### Steps to publish on GitHub:

1. Create a new repository on [GitHub](https://github.com/new).
2. Push your project code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Open-Source AI Standardisation Observatory"
   git branch -M main
   git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
   git push -u origin main
   ```
3. Enable GitHub Pages in your repository settings:
   - Go to your repository on GitHub.
   - Click **Settings** → **Pages** (under "Code and automation").
   - Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will run automatically and deploy your site to `https://<YOUR-USERNAME>.github.io/<YOUR-REPO-NAME>/`.

---

## Architecture

1. **Evidence Database**: Structured taxonomy of entities, source URLs, verbatim passages, and audit statuses (`candidate`, `documented`, `independently_verified`, `gap`).
2. **Research Engine**: Rigorous validation preventing false attribution of committee membership from repository links alone.
3. **Interactive Observatory**: SVG network graph with quadrant sectors, researcher working table, candidate retrieval aid, and exportable research reports.
