import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { ArrowRight, FileText, Cloud, Check, Copy, Terminal, ExternalLink, MapPin, Mail } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
  onOpenAzureGuide: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenAzureGuide }) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'azure' | 'skills'>('profile');
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    profile: `// Pritam Kumar — Frontend & React.js Developer
export const developerProfile = {
  name: "Pritam Kumar",
  degrees: [
    "BCA — Manipal University Jaipur (2026-2030)",
    "Diploma CSE — SLIET Punjab (CGPA 7.19)"
  ],
  coreStack: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "Vite"],
  enterprise: ["SAP Business One", "Tally Prime", "Invoice Ledgers"],
  status: "Available for Frontend & React Roles",
  location: "Samastipur, Bihar, India",
  email: "ingeniouspritam@gmail.com"
};`,
    azure: `# Deploy this React app directly to Microsoft Azure
# Target: Azure Static Web Apps (Free Tier + CDN)
swa deploy ./dist \\
  --app-name pritam-portfolio \\
  --env production

# Or Deploy to Azure App Service (Linux Node.js)
az webapp up \\
  --name pritam-portfolio-app \\
  --runtime "NODE:22-lts" \\
  --sku B1`,
    skills: `{
  "frontend": ["React.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
  "backendBasics": ["Node.js", "Express", "PHP", "MySQL", "REST APIs"],
  "enterprise": ["SAP B1", "SAP Portal", "Tally Prime", "Dispatch Planning"],
  "tools": ["Git", "GitHub", "VS Code", "MS Excel (Deloitte Certified)"]
}`
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-slate-900">
      {/* Background ambient radial glow */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hero */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status line without pill badge */}
            <div className="flex items-center gap-2 text-xs font-medium text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Immediate Joining</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span className="text-slate-400">Samastipur, Bihar, India (Open to Remote / Relocate)</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Frontend Developer building fast, modular <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-300">React.js</span> web applications.
            </h1>

            {/* Bio summary */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              I am <span className="text-white font-medium">Pritam Kumar</span>, a BCA scholar with a Diploma in Computer Science & Engineering from SLIET. I bridge modern responsive frontend architecture with real-world enterprise billing software experience (SAP B1 & Tally Prime).
            </p>

            {/* Unboxed Metadata with Typographic Separators */}
            <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-slate-400 pt-1">
              <span className="text-slate-300 font-medium">React.js & Tailwind CSS</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>SLIET CSE Diploma (7.19 CGPA)</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Manipal University BCA</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-sky-400 font-mono">Azure Web Service Ready</span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors shadow-sm"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>Resume PDF</span>
              </button>

              <button
                onClick={onOpenAzureGuide}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-sky-300 hover:text-sky-200 bg-sky-950/40 hover:bg-sky-900/50 border border-sky-800/50 rounded-lg transition-colors cursor-pointer"
              >
                <Cloud className="w-4 h-4" />
                <span>Azure Deploy Guide</span>
              </button>
            </div>

            {/* Claim-to-Proof Adjacency Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-900">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">7.19</div>
                <div className="text-xs text-slate-400 mt-0.5">SLIET Diploma CGPA</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">2+ Yrs</div>
                <div className="text-xs text-slate-400 mt-0.5">Tech & ERP Exposure</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-sky-400 font-mono tabular-nums">100%</div>
                <div className="text-xs text-slate-400 mt-0.5">Azure & Netlify Ready</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Code Sandbox Card */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-slate-800 bg-slate-900/90 shadow-2xl overflow-hidden backdrop-blur-sm">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs text-slate-400 font-mono ml-2 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-sky-400" />
                    pritam@azure-workspace:~$
                  </span>
                </div>

                <button
                  onClick={() => handleCopy(codeSnippets[activeTab])}
                  className="flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
                  title="Copy code snippet"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 text-[11px]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Segmented Interactive Control Tabs */}
              <div className="flex items-center gap-1 p-1.5 bg-slate-950/60 border-b border-slate-800/80">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`px-3 py-1 text-xs font-mono rounded-md transition-colors ${
                    activeTab === 'profile'
                      ? 'bg-slate-800 text-sky-300 font-semibold shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Profile.ts
                </button>
                <button
                  onClick={() => setActiveTab('azure')}
                  className={`px-3 py-1 text-xs font-mono rounded-md transition-colors ${
                    activeTab === 'azure'
                      ? 'bg-slate-800 text-sky-300 font-semibold shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  AzureDeploy.sh
                </button>
                <button
                  onClick={() => setActiveTab('skills')}
                  className={`px-3 py-1 text-xs font-mono rounded-md transition-colors ${
                    activeTab === 'skills'
                      ? 'bg-slate-800 text-sky-300 font-semibold shadow-sm'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Stack.json
                </button>
              </div>

              {/* Code display area */}
              <div className="p-4 overflow-x-auto text-xs font-mono text-slate-300 bg-slate-950/70 min-h-[260px] max-h-[340px]">
                <pre className="leading-relaxed">
                  <code>{codeSnippets[activeTab]}</code>
                </pre>
              </div>

              {/* Terminal Footer status */}
              <div className="px-4 py-2.5 bg-slate-950/90 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                  <span>Build: Vite v8 · Node 22 LTS</span>
                </div>
                <a
                  href="https://ingeniouspritam.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <span>Live Ref</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
