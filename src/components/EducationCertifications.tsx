import React from 'react';
import { EDUCATION, CERTIFICATIONS } from '../data/portfolioData.ts';
import { GraduationCap, Award, Users, BookOpen, Check } from 'lucide-react';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="education" className="py-20 border-b border-slate-900 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Education Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <p className="text-xs font-semibold text-sky-400 tracking-wider uppercase mb-2">Academic Foundation</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Education & Degrees
              </h2>
            </div>

            <div className="space-y-6">
              {EDUCATION.map((edu) => (
                <div
                  key={edu.id}
                  className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                    <span className="text-xs font-mono text-sky-400">{edu.period}</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="font-semibold text-slate-200">{edu.institution}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="text-slate-400">{edu.location}</span>
                    {edu.grade && (
                      <>
                        <span aria-hidden="true" className="text-slate-600">·</span>
                        <span className="font-mono text-emerald-400 font-semibold">{edu.grade}</span>
                      </>
                    )}
                  </div>

                  <ul className="space-y-1.5 pt-2 border-t border-slate-800/60">
                    {edu.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-400 leading-relaxed">
                        <Check className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Leadership Column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs font-semibold text-sky-400 tracking-wider uppercase mb-2">Verified Credentials</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Certifications & Leadership
              </h2>
            </div>

            <div className="space-y-4">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.id}
                  className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700/80 transition-all space-y-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0">
                      {cert.category === 'data' ? <Award className="w-4 h-4" /> : <Users className="w-4 h-4" />}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-white leading-snug">{cert.title}</h4>
                      <p className="text-xs text-sky-400/90 font-medium mt-0.5">{cert.issuer}</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed pl-10">
                    {cert.description}
                  </p>
                </div>
              ))}

              {/* Extra Leadership highlight box */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <BookOpen className="w-4 h-4 text-emerald-400" />
                  <span>Extracurricular Leadership Highlights</span>
                </div>
                <div className="text-xs text-slate-400 space-y-2 pl-6">
                  <div>
                    <span className="text-slate-200 font-medium">SLIET Happy Club (2022–2023):</span> Facilitated student interactive groups, career guidance sessions, and GS exam preparations.
                  </div>
                  <div>
                    <span className="text-slate-200 font-medium">SLIET Science Club (2021–2022):</span> Key committee member leading operations and project demonstrations at Science Exhibition 2022.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
