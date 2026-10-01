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

## Option 2: Azure App Service (Linux / Node.js)

If you prefer deploying to **Azure App Service (Web App)**:

### Configuration details:
- **Runtime stack**: `Node 20 LTS`
- **Operating System**: `Linux`
- **Startup Command**: `node server.ts` or `npm start`
- The repository already includes `server.ts` which runs Express and serves `dist/` with SPA routing and `/api/health`.

### Deploy using Azure CLI (`az webapp`):
```bash
# 1. Log in to Azure
az login

# 2. Build the application
npm run build

# 3. Create and deploy in one command:
az webapp up \
  --resource-group rg-pritam-portfolio \
  --name pritam-portfolio-app \
  --runtime "NODE:20-lts" \
  --sku B1
```

---

## Pre-configured Azure Files in this Repository:
- `public/staticwebapp.config.json` — Azure SWA routing fallback, SPA redirects & security headers.
- `public/web.config` — Windows IIS rewrite rules for React Router and static mime types.
- `server.ts` — Express production server with health check for Azure App Service Linux.
- `.github/workflows/azure-static-web-apps.yml` — Pre-wired GitHub Actions workflow.
