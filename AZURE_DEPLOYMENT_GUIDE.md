# Azure Deployment Guide for Pritam Kumar's Portfolio

This project is pre-configured for seamless deployment to **Microsoft Azure**. You have two primary deployment targets on Azure:

---

## Option 1: Azure Static Web Apps (Recommended — 100% Free Tier, Custom Domains, SSL)

Azure Static Web Apps is the best choice for Vite + React SPAs. It includes global CDN, free SSL certificates, and automatic CI/CD with GitHub Actions.

### Method A: Deploy via Azure Portal + GitHub (Fastest)
1. Push this project to your GitHub repository (e.g. `github.com/ingeniouspritam/portfolio`).
2. Open the [Azure Portal](https://portal.azure.com/) and search for **Static Web Apps**.
3. Click **Create**:
   - **Subscription**: Select your subscription.
   - **Resource Group**: Create new or select existing (e.g., `rg-portfolio`).
   - **Name**: `pritam-portfolio`
   - **Plan type**: `Free` (ideal for personal portfolios)
   - **Deployment details**: Select **GitHub** and authorize your account.
   - Select your **Repository** and **main** branch.
   - **Build Presets**: Select `Custom` or `Vite`:
     - **App location**: `/`
     - **Api location**: (leave empty)
     - **Output location**: `dist`
4. Click **Review + Create**. Azure will automatically create the GitHub Actions workflow and deploy your live site with an `https://...azurestaticapps.net` URL!

### Method B: Deploy using Azure CLI
```bash
# 1. Install Azure Static Web Apps CLI
npm install -g @azure/static-web-apps-cli

# 2. Build the project
npm run build

# 3. Deploy directly
swa deploy ./dist --env production
```

---

## Option 2: Azure App Service (Linux / Node 22 LTS)

To deploy on **Azure App Service (Web App)** using **Runtime stack: Node 22-lts**:

### 1. Azure Portal Settings (When Creating App Service):
- **Name**: `pritam-portfolio-app` (or any unique name)
- **Publish**: `Code`
- **Runtime stack**: `Node 22 LTS`
- **Operating System**: `Linux`
- **Region**: Central India / Southeast Asia / East US (your choice)
- **Pricing Plan**: `Free (F1)` or `Basic (B1)`
- **Startup Command**: `npm start` or `node server.js`

### 2. Fast 1-Command CLI Deployment with Node 22 LTS:
```bash
# Step 1: Login to Azure
az login

# Step 2: Build the production bundle (builds Vite & compiles server.js)
npm run build

# Step 3: Create & Deploy directly with Runtime Stack Node 22-lts:
az webapp up \
  --resource-group rg-pritam-portfolio \
  --name pritam-portfolio-app \
  --runtime "NODE:22-lts" \
  --os-type Linux \
  --sku B1
```

### 3. Switch an Existing App Service to Node 22 LTS:
```bash
az webapp config set \
  --resource-group rg-pritam-portfolio \
  --name pritam-portfolio-app \
  --linux-fx-version "NODE|22-lts"
```

### 4. Verify Active Node 22 Runtime:
Once deployed, browse to your app's health endpoint:
`https://<your-app-name>.azurewebsites.net/api/health`
The JSON output will display:
```json
{
  "status": "ok",
  "message": "Azure Web Service is healthy",
  "developer": "Pritam Kumar",
  "nodeVersion": "v22.x.x",
  "environment": "production"
}
```

---

## Pre-configured Azure Files in this Repository:
- `public/staticwebapp.config.json` — Azure SWA routing fallback, SPA redirects & security headers.
- `public/web.config` — Windows IIS rewrite rules for React Router and static mime types.
- `server.ts` — Express production server with health check for Azure App Service Linux.
- `.github/workflows/azure-static-web-apps.yml` — Pre-wired GitHub Actions workflow.
