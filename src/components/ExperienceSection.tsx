import React from 'react';
import { EXPERIENCES } from '../data/portfolioData.ts';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold text-sky-400 tracking-wider uppercase mb-2">Professional Experience</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Industry track record across billing systems, accounts & web engineering.
          </h2>
        </div>

        {/* Timeline list */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-5 md:before:left-7 before:w-0.5 before:bg-slate-800">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative flex items-start gap-4 md:gap-8 group">
              {/* Timeline marker */}
              <div className="relative z-10 w-10 h-10 md:w-14 md:h-14 rounded-full bg-slate-950 border-2 border-slate-700 group-hover:border-sky-400 flex items-center justify-center shrink-0 transition-colors">
                <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-sky-400" />
              </div>

              {/* Content Card */}
              <div className="flex-1 p-6 md:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
                      <span>{exp.role}</span>
                      {exp.isCurrent && (
                        <span className="text-xs font-mono font-normal text-emerald-400">
                          (Current Role)
                        </span>
                      )}
                    </h3>
                    <div className="text-sm font-semibold text-sky-400 mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  {/* Clean unboxed metadata with separators */}
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.period}</span>
                    </span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                <p className="text-xs md:text-sm text-slate-300 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Bullet achievements */}
                <div className="space-y-2 mb-4">
                  {exp.bulletPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400/90 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>

                {/* Tech & tools unboxed */}
                <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-slate-400">
                  <span className="text-slate-300 font-medium">Tools & Systems:</span>
                  {exp.technologies.map((t, i) => (
                    <React.Fragment key={t}>
                      <span className="text-slate-300">{t}</span>
                      {i < exp.technologies.length - 1 && (
                        <span aria-hidden="true" className="text-slate-600">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
