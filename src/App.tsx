/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { SkillsSection } from './components/SkillsSection.tsx';
import { ProjectsSection } from './components/ProjectsSection.tsx';
import { ExperienceSection } from './components/ExperienceSection.tsx';
import { EducationCertifications } from './components/EducationCertifications.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { ResumeModal } from './components/ResumeModal.tsx';
import { AzureDeployModal } from './components/AzureDeployModal.tsx';
import { Cloud, FileText } from 'lucide-react';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isAzureGuideOpen, setIsAzureGuideOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-sky-500/20 selection:text-sky-300">
      {/* Top Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenAzureGuide={() => setIsAzureGuideOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Split Screen Hero with Code Terminal */}
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenAzureGuide={() => setIsAzureGuideOpen(true)}
        />

        {/* Engineering Background & Pillars */}
        <AboutSection />

        {/* Technical Skills & Proficiency Matrix */}
        <SkillsSection />

        {/* Featured Projects Bento Grid & Live Demonstrations */}
        <ProjectsSection />

        {/* Professional Experience Timeline */}
        <ExperienceSection />

        {/* Education & Verified Certifications */}
        <EducationCertifications />

        {/* Contact & Inquiries */}
        <ContactSection />
      </main>

      {/* Minimal Footer */}
      <Footer
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenAzureGuide={() => setIsAzureGuideOpen(true)}
      />

      {/* Floating Fast-Action Azure Badge (Bottom Right) */}
      <div className="fixed bottom-5 right-5 z-30 flex items-center gap-2">
        <button
          onClick={() => setIsAzureGuideOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-sky-200 bg-slate-900/90 hover:bg-slate-800 border border-sky-500/40 rounded-full shadow-lg shadow-black/50 backdrop-blur-md transition-all hover:scale-105 cursor-pointer"
          title="Azure Web Service Deployment Instructions"
        >
          <Cloud className="w-3.5 h-3.5 text-sky-400" />
          <span>Azure Deploy</span>
        </button>

        <button
          onClick={() => setIsResumeOpen(true)}
          className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-900 bg-sky-400 hover:bg-sky-300 rounded-full shadow-lg shadow-black/50 transition-all hover:scale-105 cursor-pointer"
          title="View Resume PDF"
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Resume</span>
        </button>
      </div>

      {/* Printable ATS-Friendly Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Step-by-Step Azure Deployment Guide Modal */}
      <AzureDeployModal
        isOpen={isAzureGuideOpen}
        onClose={() => setIsAzureGuideOpen(false)}
      />
    </div>
  );
}
