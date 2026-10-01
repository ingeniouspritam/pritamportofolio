import { Project, ExperienceItem, EducationItem, CertificationItem, SkillCategory } from '../types/portfolio.ts';

export const PERSONAL_INFO = {
  name: 'Pritam Kumar',
  role: 'Frontend & React.js Developer',
  tagline: 'Building clean, responsive, and production-ready web applications with modern React and robust data workflows.',
  location: 'Samastipur, Bihar, India',
  phone: '+91-9162260878',
  email: 'ingeniouspritam@gmail.com',
  linkedin: 'https://linkedin.com/in/pritam-kumar-062769288',
  github: 'https://github.com/ingeniouspritam',
  portfolioNetlify: 'https://ingeniouspritam.netlify.app/',
  liveRestaurantApp: 'https://jsdhaba.netlify.app/',
  summary: `BCA student with a Diploma in Computer Science & Engineering and a strong foundation in modern frontend web development. Hands-on experience with JavaScript, React.js, HTML5, CSS3, Tailwind CSS, Bootstrap, PHP, and MySQL. Experienced with enterprise software, data handling, and web development workflows. Seeking an entry-level React.js / Frontend Developer role to build clean, responsive, and production-quality web applications.`,
  languages: ['Hindi', 'English'],
  availability: 'Actively Interviewing · Available for Immediate Joining'
};

export const PROJECTS: Project[] = [
  {
    id: 'jsdhaba-app',
    title: 'JS Dhaba — NFC Smart Restaurant & Food Ordering System',
    subtitle: 'Academic Project 2024 · Live Web Application',
    category: 'react',
    featured: true,
    description: 'A contactless food ordering and digital table reservation web app built with React.js, Vite, and LowDB, utilizing local persistence and modern UI components.',
    longDescription: 'Developed a short-range wireless ordering concept using NFC simulation for touchless digital dining. Features responsive front-end user interfaces using React.js with modular component architecture, a rich menu catalogue with live filtering, real-time cart computation, table booking, and structured client-side storage.',
    technologies: ['React.js', 'Vite', 'JavaScript (ES6+)', 'LowDB', 'localStorage', 'Tailwind CSS', 'HTML5', 'CSS3'],
    metrics: 'Active Web App · 0ms server latency via client-side data layer',
    liveUrl: 'https://jsdhaba.netlify.app/',
    githubUrl: 'https://github.com/ingeniouspritam',
    highlights: [
      'Designed responsive front-end user interfaces using React.js with reusable page components with LowDB',
      'Engineered JavaScript client data layer using localStorage for state persistence of users, menu items, orders and table reservations',
      'Simulated short-range wireless NFC interactions for contactless table check-in and checkout',
      'Integrated interactive shopping cart with instant subtotal, tax calculation, and order confirmation modal'
    ],
    architectureNotes: 'Vite build pipeline with client-side reactive state store, component-level CSS modularization, and instant offline-ready localStorage syncing.'
  },
  {
    id: 'responsive-portfolio',
    title: 'Responsive Developer Portfolio & Interactive Showcase',
    subtitle: 'Portfolio Project 2026 · Azure & Netlify Ready',
    category: 'react',
    featured: true,
    description: 'Modular, high-performance portfolio engineered with React.js, Tailwind CSS, and full Microsoft Azure Web App deployment architecture.',
    longDescription: 'Built reusable, modular UI components utilizing modern ES6+ React principles, client-side routing, and accessible styling. Configured with dual deployment pipelines for Netlify and Microsoft Azure Web Service (Azure Static Web Apps & Azure App Service Linux/Windows IIS).',
    technologies: ['React.js', 'Tailwind CSS', 'TypeScript', 'Node.js Express', 'Azure Web App', 'Vite'],
    metrics: '100% Mobile Responsive · Pre-configured for Azure App Service & Static Web Apps',
    liveUrl: 'https://ingeniouspritam.netlify.app/',
    githubUrl: 'https://github.com/ingeniouspritam',
    highlights: [
      'Built reusable, modular UI components using React.js, state management, and modern JavaScript (ES6+)',
      'Designed clean, mobile-first responsive web interfaces utilizing Tailwind CSS and CSS3 utility classes',
      'Configured web.config and staticwebapp.config.json for production deployment to Microsoft Azure Web App Service',
      'Integrated client-side interactive resume viewer, contact dispatch, and quick terminal simulator'
    ],
    architectureNotes: 'Dual target configuration: Express server with /api/health for App Service Linux containers, and web.config rewrite rules for Azure Static Web Apps.'
  },
  {
    id: 'enterprise-billing-dashboard',
    title: 'Industrial Billing & Dispatch Ledger Automation Tool',
    subtitle: 'Enterprise Workflow Prototype · SAP B1 & Tally Logic',
    category: 'enterprise',
    featured: true,
    description: 'Interactive ledger and invoice reconciliation dashboard modelled after real-world industrial supply chain processes handled at Shri Lakshmi Steel Suppliers.',
    longDescription: 'Synthesizing professional experience handling SAP Business One, Dispatch Planning, E-Way bills, and accounting ledgers into an intuitive web interface. Allows operators to track sales orders, calculate GST breakdowns, generate invoice previews, and audit dispatch status.',
    technologies: ['React.js', 'Tailwind CSS', 'SAP B1 Logic', 'Tally Prime Workflows', 'Tabular Data', 'Excel Export'],
    metrics: 'Structured Invoice Modeling · E-Way & GST Compliance workflows',
    githubUrl: 'https://github.com/ingeniouspritam',
    highlights: [
      'Models core SAP B1 transaction phases: Sales Orders, GRPO, A/R & A/P Invoices, and Dispatch Planning',
      'Interactive financial calculation for tax ledgers, trade discounts, and multi-state E-Way bill compliance',
      'Designed high-density tabular data views with search, sorting, and tabular numerals',
      'Export-ready data formatting directly compatible with enterprise ERP spreadsheets'
    ],
    architectureNotes: 'Pure front-end state engine with deterministic accounting calculations and tabular numerical rendering.'
  },
  {
    id: 'solitaire-ecommerce',
    title: 'Full-Stack Responsive E-Commerce Platform',
    subtitle: 'Industrial Internship Project · Solitaire Infosys',
    category: 'fullstack',
    featured: false,
    description: 'Dynamic e-commerce website with product catalogue, MySQL database schemas, and session-driven shopping cart management.',
    longDescription: 'Developed during a professional web development internship at Solitaire Infosys (Punjab, India). Features a responsive front-end user experience, server-side data handling via PHP, relational database structuring with MySQL, and responsive layout styling.',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'REST APIs', 'Bootstrap'],
    metrics: 'Production internship delivery · Dynamic relational database integration',
    githubUrl: 'https://github.com/ingeniouspritam',
    highlights: [
      'Developed responsive E-Commerce web interface using PHP, MySQL, HTML, CSS, and JavaScript',
      'Engineered normalized database schemas for product categories, customer profiles, and order histories',
      'Implemented secure user input sanitization and form validation workflows',
      'Integrated cart state management and dynamic checkout summary generation'
    ],
    architectureNotes: 'LAMP stack architecture with clean separation of client-side presentations and server-side relational database queries.'
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Executive Billing',
    company: 'Shri Lakshmi Steel Suppliers',
    location: 'Mysuru, India',
    period: 'Oct 2024 – Present',
    isCurrent: true,
    type: 'Full-time',
    description: 'Managing enterprise billing operations, accounts, and ERP data flows using SAP Business One, SAP Portal, and Tally Prime.',
    bulletPoints: [
      'Utilize SAP B1, SAP Portal, and Tally Prime for daily billing, accounts, and business transaction workflows.',
      'Handle core SAP B1 processes including Dispatch Planning, Sales Orders, E-Way Bills, GRPO, A/R & A/P Invoices, and Production Entries.',
      'Support end-to-end invoice processing and structured accounting data handling with high accuracy.',
      'Coordinate with logistics and dispatch teams to ensure real-time status syncing and regulatory GST compliance.'
    ],
    technologies: ['SAP B1', 'SAP Portal', 'Tally Prime', 'MS Excel', 'E-Way Bill Portal', 'Accounting Workflows']
  },
  {
    id: 'exp-2',
    role: 'Training / Executive Billing',
    company: 'Shri Lakshmi Steel Suppliers',
    location: 'Bengaluru, India',
    period: 'Aug 2024 – Oct 2024',
    type: 'Training',
    description: 'Intensive corporate onboarding and enterprise accounting workflows across retail and wholesale billing pipelines.',
    bulletPoints: [
      'Handled billing, accounts, invoice processing, and E-Way Bill operations via Tally Prime.',
      'Mastered commercial documentation, ledger reconciliation, and tax structure classifications.',
      'Audited transaction records and assisted in daily ledger balancing with senior accounting leadership.'
    ],
    technologies: ['Tally Prime', 'MS Excel', 'Billing Workflows', 'Invoice Reconciliation']
  },
  {
    id: 'exp-3',
    role: 'Web Development Intern',
    company: 'Solitaire Infosys',
    location: 'Punjab, India',
    period: 'June 2023 – July 2023',
    type: 'Internship',
    description: 'Hands-on frontend & backend web development developing full-stack web applications and user interfaces.',
    bulletPoints: [
      'Developed a responsive E-Commerce website using PHP, MySQL, HTML, CSS, and JavaScript.',
      'Created reusable front-end layouts and integrated dynamic database-driven product listings.',
      'Tested web application cross-device responsiveness and resolved cross-browser rendering inconsistencies.'
    ],
    technologies: ['PHP', 'MySQL', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Bootstrap']
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'edu-bca',
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Manipal University Jaipur',
    location: 'Jaipur, Rajasthan',
    period: 'July 2026 – 2030',
    highlights: [
      'Advanced undergraduate program focusing on Software Engineering, Data Structures, Modern Web Architectures, and Cloud Computing.',
      'Balancing academic excellence with active hands-on frontend web application engineering.'
    ]
  },
  {
    id: 'edu-diploma',
    degree: 'Diploma in Computer Science & Engineering',
    institution: 'Sant Longowal Institute of Engineering & Technology (SLIET)',
    location: 'Punjab, India',
    period: '2021 – 2024',
    grade: 'CGPA: 7.19',
    highlights: [
      'Centrally Funded Technical Institute (CFTI) under Ministry of Education, Govt. of India.',
      'Core coursework: Data Structures, Computer Networks, Database Management Systems (DBMS), Operating Systems, Software Engineering.',
      'Completed academic capstone project on Short-Range Wireless NFC solutions.'
    ]
  },
  {
    id: 'edu-matric',
    degree: 'Class X (Matriculation)',
    institution: 'High School Gunai Basahi (BSEB)',
    location: 'Bihar, India',
    period: '2021',
    grade: 'Score: 73.4%',
    highlights: [
      'Distinction in Mathematics and Science.',
      'Foundation in analytical reasoning and problem-solving.'
    ]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'cert-deloitte',
    title: 'Data Analytics Job Simulation Certification',
    issuer: 'Deloitte',
    category: 'data',
    description: 'Comprehensive simulation focusing on Advanced Excel data modeling, forensic reconciliation, and business intelligence reporting.'
  },
  {
    id: 'cert-happy-club',
    title: 'Executive Leadership Certificate — Happy Club',
    issuer: 'Sant Longowal Institute of Engineering & Technology (SLIET)',
    category: 'leadership',
    description: 'Recognized for executive leadership, organizing interactive development sessions for 50+ students focusing on social activities and GS exam preparation.'
  },
  {
    id: 'cert-science-club',
    title: 'Executive Leadership Certificate — Science Club',
    issuer: 'Sant Longowal Institute of Engineering & Technology (SLIET)',
    category: 'leadership',
    description: 'Coordinated and organized the annual SLIET Science Exhibition Events 2022, managing technical logistics and cross-batch participant coordination.'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Frontend Web Development',
    skills: [
      { name: 'React.js', level: 'Advanced', description: 'Functional components, hooks, custom state logic, modular UI architecture' },
      { name: 'JavaScript (ES6+)', level: 'Advanced', description: 'Async/await, closures, promises, array methods, DOM manipulation' },
      { name: 'Tailwind CSS', level: 'Advanced', description: 'Utility-first styling, responsive layouts, theme customization, CSS grid' },
      { name: 'HTML5 & CSS3', level: 'Advanced', description: 'Semantic markup, accessibility (a11y), flexbox, animations, media queries' },
      { name: 'Bootstrap', level: 'Proficient', description: 'Rapid grid prototyping, responsive component integration' }
    ]
  },
  {
    name: 'Programming & Languages',
    skills: [
      { name: 'JavaScript', level: 'Proficient', description: 'Client-side scripts, reactive event loops, DOM manipulation' },
      { name: 'C & C++', level: 'Intermediate', description: 'Object-oriented programming, data structures, algorithm design' },
      { name: 'PHP', level: 'Proficient', description: 'Server-side scripts, relational database queries, CRUD operations' }
    ]
  },
  {
    name: 'Database & Backend Basics',
    skills: [
      { name: 'MySQL', level: 'Proficient', description: 'Relational schemas, queries, joins, foreign key constraints' },
      { name: 'Node.js & Express', level: 'Intermediate', description: 'REST APIs, server-side static serving, JSON endpoints' },
      { name: 'REST APIs & Fetch', level: 'Proficient', description: 'Data fetching, asynchronous API handling, error boundaries' }
    ]
  },
  {
    name: 'Enterprise & Industrial Software',
    skills: [
      { name: 'SAP Business One (B1)', level: 'Proficient', description: 'Dispatch Planning, Sales Orders, E-Way Bills, GRPO, Invoices' },
      { name: 'SAP Portal', level: 'Proficient', description: 'Enterprise user management, daily billing and commercial workflows' },
      { name: 'Tally Prime', level: 'Advanced', description: 'Accounts, billing workflows, ledger reconciliation, GST reports' },
      { name: 'MS Excel (Advanced)', level: 'Advanced', description: 'Deloitte Certified — VLOOKUP, pivot tables, audit workflows' }
    ]
  },
  {
    name: 'CS Fundamentals & Tools',
    skills: [
      { name: 'Git & GitHub', level: 'Proficient', description: 'Version control, branching, PR reviews, repository hosting' },
      { name: 'VS Code & Tooling', level: 'Advanced', description: 'Productivity workflows, linting, debugging, Vite' },
      { name: 'Computer Networks', level: 'Intermediate', description: 'TCP/IP, HTTP/HTTPS, DNS, client-server models' },
      { name: 'SDLC Methodologies', level: 'Proficient', description: 'Agile basics, requirement analysis, modular testing' }
    ]
  }
];
