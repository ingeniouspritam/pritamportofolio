import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData.ts';
import { Search, Layers, CheckCircle2 } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryNames = ['All', ...SKILL_CATEGORIES.map((c) => c.name)];

  const filteredCategories = SKILL_CATEGORIES.map((cat) => {
    if (selectedCategory !== 'All' && cat.name !== selectedCategory) {
      return null;
    }

    const filteredSkills = cat.skills.filter((skill) => {
      const matchesSearch =
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });

    if (filteredSkills.length === 0) return null;

    return {
      ...cat,
      skills: filteredSkills
    };
  }).filter(Boolean) as typeof SKILL_CATEGORIES;

  return (
    <section id="skills" className="py-20 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-semibold text-sky-400 tracking-wider uppercase mb-2">Technical Competency</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Tools, frameworks, and enterprise software stack.
            </h2>
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Filter skills (e.g. React, SAP, SQL)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-900/80 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
            />
          </div>
        </div>

        {/* Interactive Segmented Filter Controls */}
        <div className="flex flex-wrap items-center gap-1.5 mb-8 p-1.5 bg-slate-900/60 rounded-xl border border-slate-800/80 w-fit">
          {categoryNames.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === category
                  ? 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Categories & Skill Cards */}
        <div className="space-y-8">
          {filteredCategories.map((category) => (
            <div key={category.name} className="space-y-3">
              <h3 className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                <Layers className="w-4 h-4 text-sky-400" />
                <span>{category.name}</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/70 hover:border-slate-700/80 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="font-semibold text-white text-sm">{skill.name}</span>
                        {/* Unboxed level text with clean indicator */}
                        <span className="text-[11px] font-mono text-sky-400">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {skill.description}
                      </p>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] text-emerald-400/90 font-medium">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Verified in Production & Projects</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {filteredCategories.length === 0 && (
            <div className="text-center py-12 border border-dashed border-slate-800 rounded-xl">
              <p className="text-sm text-slate-400">No skills matching "{searchQuery}".</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="mt-2 text-xs text-sky-400 hover:underline"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
