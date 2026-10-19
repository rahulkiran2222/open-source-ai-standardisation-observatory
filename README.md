---
title: Open-Source AI Standardisation Observatory
emoji: 🏛️
colorFrom: yellow
colorTo: red
sdk: gradio
sdk_version: 5.20.1
app_file: app.py
pinned: false
---

# Open-Source AI Standardisation Observatory

An auditable research engine, evidence database, and interactive network observatory investigating open-source AI participation in global standardisation and European regulatory processes (e.g., CEN-CENELEC JTC 21, ISO/IEC JTC 1/SC 42, NIST AISIC, and the EU AI Act).

---

## Deploying to Hugging Face Spaces (Recommended)

Hugging Face Spaces provides free, instant cloud hosting with custom subdomains (e.g. `https://huggingface.co/spaces/<your-username>/ai-standardisation-observatory`).

### Method 1: Push via Git (Automated Docker Build)

1. Go to [huggingface.co/new-space](https://huggingface.co/new-space).
2. Set a **Space name** (e.g. `ai-standardisation-observatory`).
3. Under **Space SDK**, select **Docker** (Blank template).
4. Set Space hardware to **CPU Basic** (Free).
5. Click **Create Space**.
6. On your computer, inside your extracted project directory, run:
   ```bash
   git init
   git add .
   git commit -m "Deploy to Hugging Face Spaces"
   git branch -M main
   git remote add origin https://huggingface.co/spaces/<YOUR-HF-USERNAME>/<YOUR-SPACE-NAME>
   git push -u origin main --force
   ```
*(When prompted for password, use your Hugging Face [Access Token](https://huggingface.co/settings/tokens) with "Write" permissions).*

Hugging Face will automatically build the included `Dockerfile` and launch your live application on port 7860!

---

### Method 2: Browser Upload (No Git / CLI required)

1. Create a Space on Hugging Face with **Docker** SDK.
2. In your Space, click the **Files** tab.
3. Click **Add file** → **Upload files**.
4. Drag and drop all project files from the unzipped archive.
5. Click **Commit changes to main**. Hugging Face will automatically build and start the app.

---

## Deploying to GitHub Pages (Live in 30 Seconds)

The project includes a pre-compiled `/docs` folder and `.nojekyll` file so it runs live on GitHub Pages with zero build steps or server requirements.

### Quickest Method: Deploy from `/docs` folder (Recommended)

1. Create a repository on [GitHub](https://github.com/new).
2. Push your project code:
   ```bash
   git init
   git add .
   git commit -m "Deploy Open-Source AI Standardisation Observatory"
   git branch -M main
   git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPO-NAME>.git
   git push -u origin main
   ```
3. In your GitHub repository:
   - Go to **Settings** → **Pages** (in the left sidebar).
   - Under **Build and deployment** → **Source**, keep **Deploy from a branch**.
   - Under **Branch**, select **`main`** and choose the **`/docs`** folder from the dropdown.
   - Click **Save**.
4. Your observatory will be live at:
   `https://<YOUR-USERNAME>.github.io/<YOUR-REPO-NAME>/`

### Alternative Method: Deploy via GitHub Actions
If you prefer automated CI/CD builds on every commit:
- Under **Settings** → **Pages** → **Source**, select **GitHub Actions**.
- The included `.github/workflows/deploy.yml` workflow will automatically build Vite and deploy the site.

---

## Running Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your web browser.

### 3. Run Python Verification Tests
```bash
python3 tests/test_validation.py
# or using pytest
pytest tests/test_validation.py
```
