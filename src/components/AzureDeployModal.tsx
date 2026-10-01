import React, { useState } from 'react';
import { X, Cloud, Terminal, Check, Copy, ExternalLink, ShieldCheck, Zap, Server, Code } from 'lucide-react';

interface AzureDeployModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AzureDeployModal: React.FC<AzureDeployModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'swa' | 'appservice' | 'files'>('swa');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const swaCliCommand = `# Step 1: Build the optimized production bundle
npm run build

# Step 2: Install Azure Static Web Apps CLI
npm install -g @azure/static-web-apps-cli

# Step 3: Deploy directly to Azure
swa deploy ./dist --app-name pritam-portfolio --env production`;

  const appServiceCliCommandNode26 = `# Deploy using Node 26 (Preview) on Azure App Service Linux
az webapp up \\
  --resource-group rg-pritam-portfolio \\
  --name pritam-portfolio-app \\
  --runtime "NODE:26-preview" \\
  --sku B1

# Or set existing App Service to Node 26 (preview):
az webapp config set \\
  --resource-group rg-pritam-portfolio \\
  --name pritam-portfolio-app \\
  --linux-fx-version "NODE|26-preview"`;

  const appServiceCliCommand = `# Step 1: Login to Azure
az login

# Step 2: Build the production bundle
npm run build

# Step 3: Deploy with Runtime Stack: Node 22 LTS
az webapp up \\
  --resource-group rg-pritam-portfolio \\
  --name pritam-portfolio-app \\
  --runtime "NODE:22-lts" \\
  --os-type Linux \\
  --sku B1`;

  const staticWebAppConfig = `{
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": ["/images/*.{png,jpg,gif,svg}", "/assets/*"]
  },
  "responseOverrides": {
    "404": {
      "rewrite": "/index.html",
      "statusCode": 200
    }
  },
  "globalHeaders": {
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "SAMEORIGIN"
  }
}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col">
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400">
              <Cloud className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white">Azure Web Service Deployment Suite</h3>
              <p className="text-[11px] text-slate-400">Pre-configured files & workflows for Microsoft Azure</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 px-6 pt-4 border-b border-slate-800 bg-slate-950/40">
          <button
            onClick={() => setActiveTab('swa')}
            className={`px-4 py-2 text-xs font-semibold rounded-t-lg transition-colors border-b-2 flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'swa'
                ? 'border-sky-400 text-sky-300 bg-slate-900/60'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Azure Static Web Apps (Recommended)</span>
          </button>

          <button
            onClick={() => setActiveTab('appservice')}
            className={`px-4 py-2 text-xs font-semibold rounded-t-lg transition-colors border-b-2 flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'appservice'
                ? 'border-sky-400 text-sky-300 bg-slate-900/60'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Server className="w-3.5 h-3.5" />
            <span>Azure App Service</span>
          </button>

          <button
            onClick={() => setActiveTab('files')}
            className={`px-4 py-2 text-xs font-semibold rounded-t-lg transition-colors border-b-2 flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'files'
                ? 'border-sky-400 text-sky-300 bg-slate-900/60'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>Config Files</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 space-y-6">
          {activeTab === 'swa' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-sky-950/20 border border-sky-800/40 text-xs text-sky-200 leading-relaxed flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Why Azure Static Web Apps is best for React Vite:</span> Free tier includes unlimited global CDN caching, custom domain with free auto-renewing SSL certificate, and built-in GitHub Actions CI/CD pipeline.
                </div>
              </div>

              {/* Step-by-step Guide */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Method A: 3-Minute Azure Portal Deployment</h4>
                <div className="space-y-2.5 text-xs text-slate-300">
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 font-mono flex items-center justify-center shrink-0">1</span>
                    <div>Push this codebase to your GitHub repository (e.g. <code className="text-sky-300 font-mono">github.com/ingeniouspritam/portfolio</code>).</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 font-mono flex items-center justify-center shrink-0">2</span>
                    <div>In <a href="https://portal.azure.com" target="_blank" rel="noopener noreferrer" className="text-sky-400 underline">Azure Portal</a>, search for <strong>Static Web Apps</strong> &gt; Click <strong>Create</strong>.</div>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 font-mono flex items-center justify-center shrink-0">3</span>
                    <div>
                      Choose <strong>Free Plan</strong>, link your GitHub repo, and in <strong>Build Presets</strong> set:
                      <ul className="mt-1 space-y-0.5 pl-2 font-mono text-[11px] text-slate-400">
                        <li>• App location: <span className="text-emerald-400">/</span></li>
                        <li>• Output location: <span className="text-emerald-400">dist</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Azure CLI alternative */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Method B: Direct Azure CLI Command</h4>
                  <button
                    onClick={() => handleCopy('swa-cli', swaCliCommand)}
                    className="flex items-center gap-1 text-xs text-sky-400 hover:text-sky-300 cursor-pointer"
                  >
                    {copiedId === 'swa-cli' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedId === 'swa-cli' ? 'Copied' : 'Copy Commands'}</span>
                  </button>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto">
                  <pre>{swaCliCommand}</pre>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'appservice' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                Deploying to <span className="text-white font-medium">Azure App Service (Linux Web App)</span> runs the Node.js production server defined in <code className="text-sky-300 font-mono">server.ts</code>, complete with health check probes at <code className="text-sky-300 font-mono">/api/health</code>.
              </div>

              {/* Node 26 Preview Highlight Box */}
              <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-800/40 text-xs text-purple-200 space-y-2">
                <div className="font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                  <span>Node 26 (Preview) Support on Azure:</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  <strong>Haan, Node 26 (Preview) bilkul support karta hai!</strong> Azure App Service Linux preview runtimes provide early access to upcoming Node.js releases. Our project is built with modern ES Modules, React 19, and native fetch, ensuring 100% zero-dependency compatibility with Node 26.
                </p>
                <div className="text-[11px] text-purple-300">
                  Azure Portal setting: <strong>Settings &gt; Configuration &gt; General Settings &gt; Stack: Node &gt; Version: Node 26 (Preview)</strong>
                </div>
              </div>

              {/* Node 26 Preview CLI */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-purple-300 uppercase tracking-wider flex items-center gap-1.5">
                    <span>Deploy with Node 26 (Preview)</span>
                  </h4>
                  <button
                    onClick={() => handleCopy('appservice-cli-26', appServiceCliCommandNode26)}
                    className="flex items-center gap-1 text-xs text-purple-400 hover:text-purple-300 cursor-pointer"
                  >
                    {copiedId === 'appservice-cli-26' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedId === 'appservice-cli-26' ? 'Copied' : 'Copy Node 26 Commands'}</span>
                  </button>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto">
                  <pre>{appServiceCliCommandNode26}</pre>
                </div>
              </div>

              {/* Node 22 LTS CLI (Requested Primary Stack) */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                    <span>Deploy with Node 22 LTS (Selected Stack)</span>
                  </h4>
                  <button
                    onClick={() => handleCopy('appservice-cli', appServiceCliCommand)}
                    className="flex items-center gap-1 text-xs text-sky-400 hover:text-sky-300 cursor-pointer"
                  >
                    {copiedId === 'appservice-cli' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedId === 'appservice-cli' ? 'Copied' : 'Copy Node 22 Commands'}</span>
                  </button>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto">
                  <pre>{appServiceCliCommand}</pre>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 space-y-1">
                <div className="font-semibold text-slate-200">Runtime Verification:</div>
                <div>Once deployed, ping your app at <code className="text-sky-300 font-mono">/api/health</code> to inspect the active Node version in the response JSON.</div>
              </div>
            </div>
          )}

          {activeTab === 'files' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-300">
                The following Azure deployment configuration files are already generated and active in this project:
              </p>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <div className="font-mono font-bold text-sky-300 mb-1">public/staticwebapp.config.json</div>
                  <div className="text-slate-400">Controls SPA route fallback (/index.html), asset exclusions, and HTTP security headers for Azure Static Web Apps.</div>
                </div>

                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <div className="font-mono font-bold text-sky-300 mb-1">public/web.config</div>
                  <div className="text-slate-400">IIS URL Rewrite rules for Azure App Service Windows instances to prevent 404s on page refresh.</div>
                </div>

                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <div className="font-mono font-bold text-sky-300 mb-1">.github/workflows/azure-static-web-apps.yml</div>
                  <div className="text-slate-400">Automated GitHub Actions CI/CD workflow that triggers on push to main branch.</div>
                </div>

                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <div className="font-mono font-bold text-sky-300 mb-1">server.ts</div>
                  <div className="text-slate-400">Node/Express server handling static assets and Azure App Service probe endpoint /api/health.</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 z-20 flex items-center justify-between px-6 py-3.5 bg-slate-950 border-t border-slate-800 text-xs text-slate-400">
          <span>Azure Web Service Ready</span>
          <a
            href="https://portal.azure.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sky-400 hover:text-sky-300 font-semibold"
          >
            <span>Open Azure Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
