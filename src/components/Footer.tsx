import React from 'react';
import { ArrowUp, Cloud, ExternalLink, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';

interface FooterProps {
  onOpenResume: () => void;
  onOpenAzureGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenAzureGuide }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-slate-950 border-t border-slate-900 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & info */}
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-bold text-white text-sm">Pritam Kumar</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">Frontend & React Developer</span>
            </div>
            <p className="text-slate-500">
              Samastipur, Bihar, India · SLIET Diploma & Manipal University BCA
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400">
            <button
              onClick={onOpenAzureGuide}
              className="hover:text-sky-300 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Cloud className="w-3.5 h-3.5" />
              <span>Azure Deploy Guide</span>
            </button>

            <button
              onClick={onOpenResume}
              className="hover:text-sky-300 transition-colors cursor-pointer"
            >
              Resume PDF
            </button>

            <a
              href="https://ingeniouspritam.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-300 transition-colors flex items-center gap-1"
            >
              <span>Reference (ingeniouspritam)</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <a
              href="https://jsdhaba.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-300 transition-colors flex items-center gap-1"
            >
              <span>JS Dhaba App</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors flex items-center gap-1 cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-[11px] gap-2">
          <div>
            © {new Date().getFullYear()} Pritam Kumar. All rights reserved. Built with React.js & Tailwind CSS.
          </div>
          <div className="flex items-center gap-1 font-mono">
            <span>Configured for Azure App Service & Static Web Apps</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
