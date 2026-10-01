import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { Code2, Database, Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 border-b border-slate-900 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold text-sky-400 tracking-wider uppercase mb-2">Background & Focus</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Bridging structured computer science fundamentals with modern frontend engineering.
          </h2>
        </div>

        {/* Grid of Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Pillar 1: Frontend Craftsmanship */}
          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-4">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Modern Frontend Engineering</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Specialized in React.js, Tailwind CSS, and ES6+ JavaScript. Passionate about component reusability, clean state orchestration, mobile-first responsive architecture, and rapid user feedback loops.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
              <span className="text-slate-300 font-medium">Core Stack</span>
              <span aria-hidden="true">·</span>
              <span>React.js</span>
              <span aria-hidden="true">·</span>
              <span>Tailwind CSS</span>
              <span aria-hidden="true">·</span>
              <span>Vite</span>
            </div>
          </div>

          {/* Pillar 2: Enterprise Software & Data Integrity */}
          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Industrial ERP & Billing</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Active industry experience at Shri Lakshmi Steel Suppliers utilizing SAP Business One, SAP Portal, and Tally Prime for daily billing, dispatch planning, sales orders, and E-Way bills with zero error tolerance.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
              <span className="text-slate-300 font-medium">Enterprise</span>
              <span aria-hidden="true">·</span>
              <span>SAP B1</span>
              <span aria-hidden="true">·</span>
              <span>Tally Prime</span>
              <span aria-hidden="true">·</span>
              <span>GST & Invoicing</span>
            </div>
          </div>

          {/* Pillar 3: Computer Science Pedigree */}
          <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors md:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Computer Science Rigor</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Graduated with a 7.19 CGPA in Computer Science & Engineering from SLIET (Centrally Funded Technical Institute) and pursuing Bachelor of Computer Applications at Manipal University Jaipur.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
              <span className="text-slate-300 font-medium">Academics</span>
              <span aria-hidden="true">·</span>
              <span>SLIET Punjab</span>
              <span aria-hidden="true">·</span>
              <span>Manipal University</span>
              <span aria-hidden="true">·</span>
              <span>7.19 CGPA</span>
            </div>
          </div>
        </div>

        {/* Quote / Philosophy Bar */}
        <div className="mt-10 p-6 rounded-xl bg-slate-900/40 border border-slate-800/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold text-white">Engineering Approach</h4>
            <p className="text-xs text-slate-300 max-w-3xl leading-relaxed">
              "{PERSONAL_INFO.summary}"
            </p>
          </div>
          <div className="flex items-center gap-3 text-xs text-slate-400 shrink-0">
            <span>Languages:</span>
            <span className="text-slate-200 font-medium">English & Hindi</span>
          </div>
        </div>
      </div>
    </section>
  );
};
