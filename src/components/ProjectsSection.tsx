import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData.ts';
import { Project } from '../types/portfolio.ts';
import { ExternalLink, Github, ChevronRight, Layers, Sparkles, X, Check, Laptop, Smartphone, Utensils, Receipt, ShoppingBag } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'react' | 'fullstack' | 'enterprise'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  return (
    <section id="projects" className="py-20 border-b border-slate-900 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-semibold text-sky-400 tracking-wider uppercase mb-2">Featured Work</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Selected projects & production applications.
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-900 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveFilter('react')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeFilter === 'react'
                  ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              React.js
            </button>
            <button
              onClick={() => setActiveFilter('enterprise')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeFilter === 'enterprise'
                  ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Enterprise / ERP
            </button>
            <button
              onClick={() => setActiveFilter('fullstack')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeFilter === 'fullstack'
                  ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Full-Stack
            </button>
          </div>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-slate-700/80 transition-all overflow-hidden flex flex-col group"
            >
              {/* Card Visual Header / Interactive Canvas Preview */}
              <div className="h-56 relative bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border-b border-slate-800/80 p-5 overflow-hidden flex flex-col justify-between">
                {/* Visual UI mock preview depending on project */}
                {project.id === 'jsdhaba-app' && (
                  <div className="relative z-10 w-full h-full flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                          <Utensils className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white font-mono">JS Dhaba Restaurant</div>
                          <div className="text-[10px] text-slate-400">Smart Contactless Menu & Table Service</div>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Live at jsdhaba.netlify.app
                      </span>
                    </div>

                    {/* Miniature UI simulation */}
                    <div className="grid grid-cols-3 gap-2 mt-3">
                      <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
                        <div className="text-[10px] font-medium text-slate-300">Paneer Tikka Roll</div>
                        <div className="text-[11px] font-mono text-amber-400 mt-1 font-semibold">₹180 · Added</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
                        <div className="text-[10px] font-medium text-slate-300">Dal Makhani Combo</div>
                        <div className="text-[11px] font-mono text-amber-400 mt-1 font-semibold">₹220 · In Cart</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
                        <div className="text-[10px] font-medium text-slate-300">Table #04 (NFC)</div>
                        <div className="text-[11px] font-mono text-emerald-400 mt-1 font-semibold">Active Session</div>
                      </div>
                    </div>

                    <div className="text-[11px] text-slate-400 flex items-center justify-between pt-1">
                      <span>LowDB Client State · localStorage Engine</span>
                      <span className="text-sky-400 font-mono">Academic Project 2024</span>
                    </div>
                  </div>
                )}

                {project.id === 'responsive-portfolio' && (
                  <div className="relative z-10 w-full h-full flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400">
                          <Laptop className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white font-mono">ingeniouspritam.dev</div>
                          <div className="text-[10px] text-slate-400">Dual Deploy: Azure & Netlify</div>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-sky-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                        Live at ingeniouspritam.netlify.app
                      </span>
                    </div>

                    {/* Miniature UI simulation */}
                    <div className="grid grid-cols-2 gap-3 mt-3">
                      <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1">
                        <div className="text-[10px] text-slate-400">Azure Static Web Apps</div>
                        <div className="text-[11px] font-mono text-sky-300 font-medium">staticwebapp.config.json</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 space-y-1">
                        <div className="text-[10px] text-slate-400">Azure App Service Linux</div>
                        <div className="text-[11px] font-mono text-teal-300 font-medium">server.ts · Express API</div>
                      </div>
                    </div>

                    <div className="text-[11px] text-slate-400 flex items-center justify-between pt-1">
                      <span>Modular Components · Vite v8 Build</span>
                      <span className="text-sky-400 font-mono">Modern Portfolio</span>
                    </div>
                  </div>
                )}

                {project.id === 'enterprise-billing-dashboard' && (
                  <div className="relative z-10 w-full h-full flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                          <Receipt className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white font-mono">Enterprise Billing Ledger</div>
                          <div className="text-[10px] text-slate-400">SAP B1 & Tally Prime Workflows</div>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-emerald-400">Production Tested</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mt-3 text-center">
                      <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800">
                        <div className="text-[9px] text-slate-400 uppercase">Dispatch Orders</div>
                        <div className="text-[12px] font-mono font-bold text-white">100%</div>
                      </div>
                      <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800">
                        <div className="text-[9px] text-slate-400 uppercase">E-Way Bills</div>
                        <div className="text-[12px] font-mono font-bold text-emerald-400">Verified</div>
                      </div>
                      <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800">
                        <div className="text-[9px] text-slate-400 uppercase">Ledger Audit</div>
                        <div className="text-[12px] font-mono font-bold text-sky-400">Balanced</div>
                      </div>
                    </div>

                    <div className="text-[11px] text-slate-400 flex items-center justify-between pt-1">
                      <span>GRPO · A/R & A/P Invoices · GST Ledgers</span>
                      <span className="text-emerald-400 font-mono">Industrial ERP</span>
                    </div>
                  </div>
                )}

                {project.id === 'solitaire-ecommerce' && (
                  <div className="relative z-10 w-full h-full flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                          <ShoppingBag className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white font-mono">Solitaire E-Commerce</div>
                          <div className="text-[10px] text-slate-400">Full-Stack Storefront & DB</div>
                        </div>
                      </div>
                      <span className="text-[11px] font-mono text-indigo-400">Solitaire Infosys</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mt-3">
                      <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
                        <div className="text-[10px] text-slate-400">Database Schema</div>
                        <div className="text-[11px] font-mono text-white font-medium">MySQL Normalized</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
                        <div className="text-[10px] text-slate-400">Backend API</div>
                        <div className="text-[11px] font-mono text-white font-medium">PHP REST Endpoints</div>
                      </div>
                    </div>

                    <div className="text-[11px] text-slate-400 flex items-center justify-between pt-1">
                      <span>Relational Storefront Architecture</span>
                      <span className="text-indigo-400 font-mono">Internship 2023</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="text-xs text-sky-400 font-mono font-medium">{project.subtitle}</div>
                  <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Zero-Pill Technologies Unboxed with Separators */}
                <div className="pt-2 border-t border-slate-800/80">
                  <div className="flex flex-wrap items-center gap-y-1 gap-x-2 text-xs text-slate-400">
                    <span className="text-slate-300 font-medium">Stack:</span>
                    {project.technologies.slice(0, 5).map((tech, index) => (
                      <React.Fragment key={tech}>
                        <span className="text-slate-300">{tech}</span>
                        {index < Math.min(project.technologies.length, 5) - 1 && (
                          <span aria-hidden="true" className="text-slate-600">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-sky-400 hover:text-sky-300 transition-colors cursor-pointer"
                  >
                    <span>View Architecture & Specs</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 bg-sky-400 hover:bg-sky-300 px-3 py-1.5 rounded-lg transition-colors shadow-sm"
                      >
                        <span>Launch App</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Deep Dive Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl text-left">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-5">
              <div>
                <p className="text-xs font-mono text-sky-400 mb-1">{selectedProject.subtitle}</p>
                <h3 className="text-xl sm:text-2xl font-bold text-white">{selectedProject.title}</h3>
              </div>

              <div className="text-sm text-slate-300 leading-relaxed space-y-3">
                <p>{selectedProject.longDescription}</p>
              </div>

              {/* Highlights */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">Key Engineering Highlights</h4>
                <ul className="space-y-2">
                  {selectedProject.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies unboxed */}
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wider">Technologies Used</h4>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-300">
                  {selectedProject.technologies.map((t, i) => (
                    <React.Fragment key={t}>
                      <span>{t}</span>
                      {i < selectedProject.technologies.length - 1 && (
                        <span aria-hidden="true" className="text-slate-600">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Architecture Notes */}
              {selectedProject.architectureNotes && (
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 space-y-1">
                  <div className="font-semibold text-sky-400">Architecture Pipeline:</div>
                  <div>{selectedProject.architectureNotes}</div>
                </div>
              )}

              {/* Modal Actions */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
                >
                  Close
                </button>

                <div className="flex items-center gap-3">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-900 bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors"
                    >
                      <span>Open Live Application</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
