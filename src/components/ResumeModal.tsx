import React, { useState } from 'react';
import { PERSONAL_INFO, PROJECTS, EXPERIENCES, EDUCATION, CERTIFICATIONS } from '../data/portfolioData.ts';
import { X, Printer, Copy, Check, Download, Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const plainTextResume = `
PRITAM KUMAR
Samastipur, Bihar, India | +91-9162260878 | ingeniouspritam@gmail.com | https://linkedin.com/in/pritam-kumar-062769288

PROFESSIONAL SUMMARY
${PERSONAL_INFO.summary}

EDUCATION
- Bachelor of Computer Applications (BCA) | Manipal University Jaipur (July 2026 – 2030)
- Diploma in Computer Science & Engineering (CGPA: 7.19) | SLIET Punjab (2021 – 2024)
- High School Gunai Basahi (BSEB) | Class X – 73.4% (2021)

TECHNICAL SKILLS
- Frontend Web Development: React.js, JavaScript (ES6+), HTML, CSS, Tailwind CSS, Bootstrap
- Programming Languages: JavaScript, C, C++, PHP
- Database & Backend: MySQL, PHP, Node.js, REST APIs
- Enterprise Software: SAP B1, SAP Portal, Tally Prime
- Computer Science Fundamentals: Computer Fundamentals, Computer Networks, SDLC
- Tools & Utilities: Git, GitHub, VS Code, MS Excel, MS Word, MS PPT

PROFESSIONAL EXPERIENCE
1. Executive Billing | Shri Lakshmi Steel Suppliers, Mysuru (Oct 2024 – Present)
- Utilize SAP B1, SAP Portal, and Tally Prime for daily billing, accounts, and business transaction workflows.
- Handle core SAP B1 processes including Dispatch Planning, Sales Orders, E-Way Bills, GRPO, A/R & A/P Invoices, and Production Entries.
- Support end-to-end invoice processing and structured accounting data handling with high accuracy.

2. Training / Executive Billing | Shri Lakshmi Steel Suppliers, Bengaluru (Aug 2024 – Oct 2024)
- Handled billing, accounts, invoice processing, and E-Way Bill operations via Tally Prime.

3. Internship / PHP Web Development | Solitaire Infosys, Punjab (June 2023 – July 2023)
- Developed a responsive E-Commerce website using PHP, MySQL, HTML, CSS, and JavaScript.

WEB DEVELOPMENT PROJECTS
- Responsive Website | React.js, JavaScript, Tailwind CSS, HTML5, CSS3 (Live: https://ingeniouspritam.netlify.app/)
- NFC Service as Software / JS Dhaba | JavaScript, HTML, CSS, React.js, Vite, LowDB (Live: https://jsdhaba.netlify.app/)

ACHIEVEMENTS & CERTIFICATIONS
- Data Analytics Certification: Deloitte Data Analytics Job Simulation (Advance Excel)
- Executive Leadership Certifications: Happy Club & Science Club, SLIET
`;

  const handleCopyText = () => {
    navigator.clipboard.writeText(plainTextResume.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col">
        {/* Top Control Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-white">Pritam Kumar — Official Resume</span>
            <span className="hidden sm:inline text-xs text-slate-400 font-mono">· Print & ATS Friendly</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
              title="Copy plain text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-900 bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-2 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Paper Container matching PDF Resume styling */}
        <div className="p-6 sm:p-10 bg-slate-950 text-slate-200 font-sans print:bg-white print:text-black print:p-0">
          {/* Header */}
          <div className="text-center pb-6 border-b border-slate-800 print:border-black">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight print:text-black">
              Pritam Kumar
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-slate-400 print:text-gray-700 mt-2">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-sky-400 print:hidden" />
                <span>Samastipur, Bihar, India</span>
              </span>
              <span aria-hidden="true">|</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-sky-400 print:hidden" />
                <span>+91-9162260878</span>
              </span>
              <span aria-hidden="true">|</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-sky-400 print:hidden" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sky-400 hover:underline print:text-black">
                  {PERSONAL_INFO.email}
                </a>
              </span>
              <span aria-hidden="true">|</span>
              <span className="flex items-center gap-1">
                <Linkedin className="w-3 h-3 text-sky-400 print:hidden" />
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:underline print:text-black"
                >
                  linkedin.com/in/pritam-kumar-062769288
                </a>
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="py-5 border-b border-slate-800 print:border-gray-300">
            <h2 className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-2 print:text-black">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed print:text-gray-800">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Education */}
          <div className="py-5 border-b border-slate-800 print:border-gray-300 space-y-3">
            <h2 className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-2 print:text-black">
              Education
            </h2>
            {EDUCATION.map((edu) => (
              <div key={edu.id} className="text-xs sm:text-sm">
                <div className="flex justify-between font-bold text-white print:text-black">
                  <span>{edu.institution}</span>
                  <span className="font-normal text-slate-400 print:text-gray-600">{edu.location}</span>
                </div>
                <div className="flex justify-between text-slate-300 print:text-gray-700 italic">
                  <span>{edu.degree} {edu.grade ? `(${edu.grade})` : ''}</span>
                  <span className="font-mono text-xs not-italic text-slate-400 print:text-gray-600">{edu.period}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div className="py-5 border-b border-slate-800 print:border-gray-300 space-y-2">
            <h2 className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-2 print:text-black">
              Technical Skills
            </h2>
            <div className="space-y-1 text-xs sm:text-sm text-slate-300 print:text-gray-800">
              <div>
                <span className="font-bold text-white print:text-black">Frontend Web Development:</span> React.js, JavaScript (ES6+), HTML, CSS, Tailwind CSS, Bootstrap
              </div>
              <div>
                <span className="font-bold text-white print:text-black">Programming Languages:</span> JavaScript, C, C++, PHP
              </div>
              <div>
                <span className="font-bold text-white print:text-black">Database & Backend Basics:</span> MySQL, PHP, Node.js, REST APIs
              </div>
              <div>
                <span className="font-bold text-white print:text-black">Enterprise Software:</span> SAP B1, SAP Portal, Tally Prime
              </div>
              <div>
                <span className="font-bold text-white print:text-black">Computer Science Fundamentals:</span> Computer Fundamentals, Computer Networks, SDLC
              </div>
              <div>
                <span className="font-bold text-white print:text-black">Tools & Utilities:</span> Git, GitHub, VS Code, MS Excel, MS Word, MS PPT
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="py-5 border-b border-slate-800 print:border-gray-300 space-y-4">
            <h2 className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-2 print:text-black">
              Professional Experience
            </h2>
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="space-y-1.5 text-xs sm:text-sm">
                <div className="flex justify-between font-bold text-white print:text-black">
                  <span>{exp.role}</span>
                  <span className="font-mono text-xs font-normal text-slate-400 print:text-gray-600">{exp.period}</span>
                </div>
                <div className="flex justify-between text-slate-300 print:text-gray-700 italic">
                  <span>{exp.company}</span>
                  <span className="not-italic text-xs text-slate-400 print:text-gray-600">{exp.location}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-300 print:text-gray-800 pl-1">
                  {exp.bulletPoints.map((bp, i) => (
                    <li key={i} className="leading-relaxed">{bp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Web Development Projects */}
          <div className="py-5 border-b border-slate-800 print:border-gray-300 space-y-4">
            <h2 className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-2 print:text-black">
              Web Development Projects
            </h2>

            <div className="space-y-1 text-xs sm:text-sm">
              <div className="flex justify-between font-bold text-white print:text-black">
                <span>Responsive Website | React.js, JavaScript, Tailwind CSS, HTML5, CSS3</span>
                <span className="font-mono text-xs font-normal text-slate-400 print:text-gray-600">Portfolio Project 2026</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-300 print:text-gray-800 pl-1">
                <li>Built reusable, modular UI components using React.js, state management, and modern JavaScript (ES6+).</li>
                <li>Designed clean, mobile-first responsive web interfaces utilizing Tailwind CSS and CSS3 utility classes.</li>
                <li>Integrated client-side routing, form validation, and pre-configured for Microsoft Azure Web Service deployment.</li>
                <li>Live Demo: https://ingeniouspritam.netlify.app/</li>
              </ul>
            </div>

            <div className="space-y-1 text-xs sm:text-sm">
              <div className="flex justify-between font-bold text-white print:text-black">
                <span>NFC Service as Software | JavaScript, HTML, CSS, React.js, Vite LowDB</span>
                <span className="font-mono text-xs font-normal text-slate-400 print:text-gray-600">Academic Project 2024</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-300 print:text-gray-800 pl-1">
                <li>Developed a short-range wireless technology solution using NFC for secure data exchange.</li>
                <li>Designed responsive front-end user interfaces using React.js with reusable page components with LowDB. Designed JavaScript data layer using localStorage, where users, menu items, orders and reservations are stored.</li>
                <li>Live Demo: https://jsdhaba.netlify.app/</li>
              </ul>
            </div>
          </div>

          {/* Achievements & Certifications */}
          <div className="py-5 border-b border-slate-800 print:border-gray-300 space-y-2 text-xs sm:text-sm text-slate-300 print:text-gray-800">
            <h2 className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-2 print:text-black">
              Achievements & Certifications
            </h2>
            <div>
              <span className="font-bold text-white print:text-black">Data Analytics Certification:</span> Deloitte Data Analytics Job Simulation (Advance Excel).
            </div>
            <div>
              <span className="font-bold text-white print:text-black">Leadership Certifications:</span> Certificates of Completion for Executive Membership at Happy Club & Science Club, SLIET.
            </div>
          </div>

          {/* Languages */}
          <div className="pt-4 text-xs sm:text-sm text-slate-300 print:text-gray-800">
            <span className="font-bold text-white print:text-black">Languages:</span> Hindi, English
          </div>
        </div>
      </div>
    </div>
  );
};
