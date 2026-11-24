/**
 * ====================================================================
 * PORTFOLIO CONTENT & DATA CONFIGURATION
 * ====================================================================
 * You can edit any text, links, or projects directly in this file!
 * All sections on the portfolio website are dynamically rendered
 * from this single configuration.
 */

window.PORTFOLIO_DATA = {
  // ------------------------------------------------------------------
  // Page Meta & SEO
  // ------------------------------------------------------------------
  meta: {
    name: "Ziyan Khan",
    title: "Ziyan Khan | Python Django & WordPress Developer",
    description:
      "Portfolio of Ziyan Khan — Python Django & WordPress/SEO Developer from Bhopal. Building full-stack web applications, REST APIs, and SEO-optimized business websites.",
    canonicalUrl: "https://portfoliyo-olive.vercel.app/",
    ogImage: "og.png",
    location: "Bhopal • Indore, India",
    year: "2026"
  },

  // ------------------------------------------------------------------
  // Navigation Links
  // ------------------------------------------------------------------
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" }
  ],

  // ------------------------------------------------------------------
  // Hero Section
  // ------------------------------------------------------------------
  hero: {
    greeting: "Hi, I'm",
    name: "Ziyan Khan",
    typingRoles: [
      "Python Django Developer",
      "WordPress & SEO Developer",
      "React Frontend Developer"
    ],
    subtext:
      "Final-year B.Tech CSE (AI/ML) student from Bhopal. I build Django + React web apps and WordPress websites that work for real businesses.",
    badge: "Open to full-time & internships | Bhopal • Indore",
    resumeUrl: "/Ziyan_Khan_Resume.pdf",
    primaryCta: { text: "View Projects", href: "#projects" },
    secondaryCta: { text: "Contact Me", href: "#contact" },
    resumeCta: { text: "Download Resume", href: "/Ziyan_Khan_Resume.pdf" },
    floatingCards: [
      {
        icon: "fa-solid fa-server",
        title: "Backend Lead Intern",
        subtitle: "Infosys Springboard (BugFlow)",
        badge: "Agile 5-Member Team"
      },
      {
        icon: "fa-solid fa-graduation-cap",
        title: "LNCT&S Bhopal",
        subtitle: "B.Tech CSE (AI/ML) | CGPA 7.9",
        badge: "Class of 2027"
      }
    ],
    stats: [
      { value: "4+", label: "Projects Built" },
      { value: "1", label: "Live Client Website" },
      { value: "1", label: "App on Google Play" },
      { value: "200+", label: "LeetCode Solved" }
    ]
  },

  // ------------------------------------------------------------------
  // Marquee Technologies
  // ------------------------------------------------------------------
  marquee: [
    { name: "Python", icon: "fa-brands fa-python" },
    { name: "Django", icon: "fa-solid fa-layer-group" },
    { name: "PostgreSQL", icon: "fa-solid fa-database" },
    { name: "WordPress", icon: "fa-brands fa-wordpress" },
    { name: "React.js", icon: "fa-brands fa-react" },
    { name: "SEO & GA4", icon: "fa-solid fa-chart-line" },
    { name: "REST APIs", icon: "fa-solid fa-network-wired" },
    { name: "Git & GitHub", icon: "fa-brands fa-github" },
    { name: "cPanel", icon: "fa-solid fa-server" },
    { name: "Elementor", icon: "fa-solid fa-wand-magic-sparkles" }
  ],

  // ------------------------------------------------------------------
  // About Section (Bento Grid)
  // ------------------------------------------------------------------
  about: {
    summary: [
      "I am a final-year Computer Science student specializing in AI & ML at LNCT&S Bhopal with a practical focus on full-stack web engineering and digital solutions.",
      "I build full-stack apps with Django, Django REST Framework, React, and PostgreSQL, as well as high-performing WordPress websites with on-page SEO for local businesses.",
      "I handle client requirements end to end, manage live deployments on cPanel and cloud hosting, and work collaboratively in agile teams — currently serving as backend lead in a 5-member team on BugFlow."
    ],
    education: {
      degree:
        "Bachelor of Technology in Computer Science & Engineering (Artificial Intelligence & Machine Learning)",
      institute: "LNCT&S Bhopal",
      cgpa: "7.9 CGPA",
      timeline: "2023 – 2027 (Final Year)",
      schooling: "Class 12 (76%, MPBSE, 2023) • Class 10 (82%, MPBSE, 2021)"
    },
    highlights: [
      {
        title: "End-to-End Delivery",
        desc: "From database design to frontend UI, API testing, and live cPanel/Vercel hosting."
      },
      {
        title: "Bhopal & Indore Ready",
        desc: "Available for on-site or hybrid roles in Bhopal & Indore, as well as remote opportunities."
      },
      {
        title: "Practical Client Work",
        desc: "Proven experience dealing directly with business owners to optimize organic web traffic."
      }
    ]
  },

  // ------------------------------------------------------------------
  // Skills (Categorized Chips)
  // ------------------------------------------------------------------
  skills: [
    {
      category: "Backend Development",
      icon: "fa-solid fa-server",
      items: [
        "Python",
        "Django",
        "Django REST Framework",
        "JWT Authentication",
        "OAuth 2.0",
        "REST APIs"
      ]
    },
    {
      category: "Frontend & UI",
      icon: "fa-solid fa-code",
      items: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"]
    },
    {
      category: "WordPress & SEO",
      icon: "fa-brands fa-wordpress-simple",
      items: [
        "WordPress",
        "Elementor Pro",
        "Yoast / Rank Math",
        "On-page SEO",
        "Keyword Research",
        "Google Analytics (GA4)",
        "Google Search Console",
        "Google Business Profile (GMB)"
      ]
    },
    {
      category: "Databases",
      icon: "fa-solid fa-database",
      items: ["PostgreSQL", "MySQL", "SQLite", "SQL Query Optimization"]
    },
    {
      category: "AI, Data & APIs",
      icon: "fa-solid fa-brain",
      items: [
        "Pandas",
        "NumPy",
        "Scikit-Learn",
        "Matplotlib",
        "NLP Basics",
        "Google Gemini API"
      ]
    },
    {
      category: "DevOps, Tools & Hosting",
      icon: "fa-solid fa-screwdriver-wrench",
      items: [
        "Git",
        "GitHub",
        "Postman",
        "CI/CD Basics",
        "Vercel",
        "Render",
        "cPanel & DNS"
      ]
    },
    {
      category: "Core CS Fundamentals",
      icon: "fa-solid fa-microchip",
      items: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming (OOP)",
        "DBMS",
        "Operating Systems",
        "Computer Networks",
        "Java (basic)"
      ]
    }
  ],

  // ------------------------------------------------------------------
  // Work Experience & Internships (Vertical Timeline)
  // ------------------------------------------------------------------
  experience: [
    {
      role: "Backend Lead Intern (BugFlow)",
      organization: "Infosys Springboard Virtual Internship",
      period: "Nov 2026 – Present",
      location: "Remote",
      badge: "In Progress",
      type: "internship",
      description:
        "Backend lead in a 5-member team building 'BugFlow', an intelligent defect tracking and resolution platform with Django REST Framework, PostgreSQL, and React.",
      completedHighlights: [
        "Architected foundational Django modular project structure following clean enterprise architecture standards.",
        "Implemented secure JWT authentication and role-based user management models.",
        "Coordinated database schema design and sprint planning across team members."
      ],
      nextRoadmap:
        "Next Phase: Building RESTful issue management APIs, Role-Based Access Control (RBAC), and automated bug resolution workflow state machines."
    },
    {
      role: "WordPress Developer & SEO (Freelance)",
      organization: "Fair Tours & Travels",
      period: "Aug 2026 – Present",
      location: "Bhopal, India",
      badge: "Live Client",
      type: "client",
      link: "https://fairtoursandtravels.com",
      description:
        "Built and maintain the complete website for an IATA-authorized travel agency in Bhopal, handling direct client communication and technical roadmap.",
      completedHighlights: [
        "Designed responsive UI layouts, package showcases, and interactive lead-capture forms using WordPress and Elementor.",
        "Implemented on-page SEO, backlink coordination, GA4 setup, and Google Business Profile optimization.",
        "Achieved 78/100 SEO & Accessibility score on Google PageSpeed Insights.",
        "Managed DNS configuration, domain routing, and live cPanel web hosting."
      ]
    },
    {
      role: "Training & Virtual Internships",
      organization: "National Initiatives (Govt. of India & Global Tech)",
      period: "2025 – 2026",
      location: "Remote",
      badge: "Completed",
      type: "training",
      compactItems: [
        {
          name: "Cisco AI Virtual Internship Program",
          issuer: "Cisco Networking Academy & AICTE",
          period: "Jun 2026 – Aug 2026",
          id: "STU68165385d82a11746293637"
        },
        {
          name: "AI & Digital Literacy Internship",
          issuer: "Edunet Foundation & IBM SkillsBuild / AICTE",
          period: "Nov 2025 – Dec 2025"
        }
      ]
    }
  ],

  // ------------------------------------------------------------------
  // Featured Projects
  // ------------------------------------------------------------------
  projects: [
    {
      id: "bugflow",
      title: "BugFlow — Issue Tracking Platform",
      tagline: "Intelligent Software Defect Tracking & Resolution System",
      status: "In Progress",
      featured: true,
      description:
        "An enterprise-ready issue tracking platform built with Django REST Framework and PostgreSQL, enabling software teams to log, assign, prioritize, and resolve bugs through customizable workflow state machines.",
      tech: ["Django REST", "PostgreSQL", "React.js", "JWT Auth", "Python"],
      github:
        "https://github.com/ziyankhan-coder/_Intelligent-Software-Defect-Tracking-System-Group-2",
      live: null,
      images: ["assets/projects/bugflow.png"]
    },
    {
      id: "fairtours",
      title: "Fair Tours & Travels",
      tagline: "Commercial Web Platform for IATA-Authorized Travel Agency",
      status: "Live Client Website",
      featured: true,
      description:
        "Full client web build and ongoing SEO management for a Bhopal-based travel agency. Features responsive tour package showcases, inquiry lead capture, and optimized local organic reach.",
      metrics: "78/100 SEO & Accessibility on PageSpeed Insights",
      tech: [
        "WordPress",
        "Elementor Pro",
        "Google Analytics 4",
        "On-page SEO",
        "cPanel"
      ],
      github: null,
      live: "https://fairtoursandtravels.com",
      images: [
        "assets/projects/fairtours-1.jpg",
        "assets/projects/fairtours-2.jpg",
        "assets/projects/fairtours-3.jpg"
      ]
    },
    {
      id: "ecommerce-app",
      title: "Commercial E-Commerce Mobile App",
      tagline: "Production-grade Mobile Application with Payment Gateway",
      status: "Published on Google Play",
      featured: true,
      description:
        "Commercial mobile shopping application published on Google Play Console, integrated with PhonePe Payment Gateway for seamless, real-time UPI and card transactions.",
      tech: ["Mobile App", "PhonePe Gateway", "REST APIs", "Google Play Console"],
      github: null,
      live: null,
      images: ["assets/projects/ecommerce.png"]
    },
    {
      id: "cinesense",
      title: "CineSense — AI Movie Recommender",
      tagline: "Intelligent Movie Recommendation Platform with AI Chat",
      status: "Live Project",
      featured: true,
      description:
        "Netflix-style web application utilizing content-based filtering on 5,000+ TMDB movie records. Integrated Google Gemini AI for conversational recommendations, YouTube trailer streaming, and JWT authentication.",
      tech: [
        "React.js",
        "Django REST",
        "Python",
        "Pandas",
        "Gemini API",
        "TMDB API"
      ],
      github:
        "https://github.com/ziyankhan-coder/CineSence-movieRecommendation",
      live: "https://cine-sence-movie-recommendation.vercel.app/",
      images: ["assets/projects/cinesense.png"]
    },
    {
      // Hidden behind flag as requested until live link is restored
      id: "jobrec",
      showJobRec: false,
      title: "AI Job Recommendation & Resume Analyzer",
      tagline: "NLP-Powered ATS Resume Matcher & Career Recommender",
      status: "Maintenance",
      featured: false,
      description:
        "Full-stack web application that parses candidate resumes against real-time job specifications using NLP and cosine similarity to compute ATS match scores.",
      tech: ["React.js", "Django REST", "Scikit-Learn", "NLP", "PostgreSQL"],
      github:
        "https://github.com/ziyankhan-coder/Job-Recommandation-System",
      live: "https://job-recommandation-system-dsv6.onrender.com/",
      images: ["assets/projects/jobrec.png"]
    }
  ],

  // ------------------------------------------------------------------
  // Services Offered (Bento Grid)
  // ------------------------------------------------------------------
  services: [
    {
      icon: "fa-brands fa-wordpress",
      title: "Business Websites (WordPress)",
      badge: "High Demand",
      description:
        "Custom, mobile-responsive business websites built with WordPress and Elementor. Complete with high-converting landing pages, lead capture forms, WhatsApp integration, and cPanel hosting setup.",
      features: [
        "Mobile-first responsive design down to 360px",
        "Lead capture & inquiry automation",
        "Domain, SSL, DNS & cPanel configuration",
        "Fast load times & security hardening"
      ],
      ctaText: "Get a Website Quote",
      ctaMailSubject: "Inquiry: WordPress Business Website"
    },
    {
      icon: "fa-solid fa-layer-group",
      title: "Django Web Applications & APIs",
      badge: "Full-Stack",
      description:
        "Robust, scalable backend systems and REST APIs built with Python, Django REST Framework, and PostgreSQL. Clean modular architectures, JWT authentication, and seamless React frontend integration.",
      features: [
        "Custom RESTful API architecture",
        "Secure JWT authentication & RBAC models",
        "PostgreSQL & MySQL database design",
        "API integration & cloud deployment (Render/Vercel)"
      ],
      ctaText: "Discuss a Django App",
      ctaMailSubject: "Inquiry: Python Django Web Application"
    },
    {
      icon: "fa-solid fa-chart-line",
      title: "SEO & Google Business Profile Setup",
      badge: "Local Growth",
      description:
        "Targeted on-page SEO optimization and Google Business Profile (GMB) setup to help local Bhopal and Indore businesses get discovered by customers on Google Search and Maps.",
      features: [
        "On-page meta tags & keyword optimization",
        "Google Analytics 4 (GA4) & Search Console setup",
        "Google Business Profile verification & ranking",
        "PageSpeed Insights performance audits"
      ],
      ctaText: "Request an SEO Audit",
      ctaMailSubject: "Inquiry: SEO & Google Business Profile Setup"
    }
  ],

  // ------------------------------------------------------------------
  // Achievements
  // ------------------------------------------------------------------
  achievements: [
    {
      icon: "fa-solid fa-trophy",
      title: "Smart India Hackathon (SIH)",
      desc: "Participated in the prestigious national Smart India Hackathon solving real-world technological problem statements."
    },
    {
      icon: "fa-solid fa-lightbulb",
      title: "College Hackathon Prototype",
      desc: "Architected and presented a functional prototype tourism portal in an inter-college technical hackathon."
    },
    {
      icon: "fa-solid fa-gauge-high",
      title: "78/100 PageSpeed SEO & Accessibility",
      desc: "Optimized commercial WordPress platform for Fair Tours & Travels, achieving 78/100 on Google PageSpeed Insights."
    }
  ],

  // ------------------------------------------------------------------
  // Certifications (Featured 4 + Expandable View)
  // ------------------------------------------------------------------
  certifications: {
    featuredCount: 4,
    items: [
      {
        id: "nasscom",
        title: "AI & ML Certification Program (Gold Category - 80%)",
        issuer: "NASSCOM & Govt. of India (FutureSkills Prime)",
        featured: true,
        image: "assets/certs/nasscom1.jpg",
        tags: ["National Govt. Recognized", "Gold 80%"]
      },
      {
        id: "wipro",
        title: "Database Solutions Expert",
        issuer: "Wipro Limited (TalentNext Program)",
        featured: true,
        credentialId: "TNext-SE-2026-DB_261360251",
        image: "assets/certs/wipro-talentnext.png",
        tags: ["4-Month Intensive", "DBMS & SQL"]
      },
      {
        id: "ey-microsoft",
        title: "AI Skills Passport",
        issuer: "EY (Ernst & Young) & Microsoft",
        featured: true,
        image: "assets/certs/ey-microsoft.png",
        tags: ["Big-4 Consulting", "Enterprise AI"]
      },
      {
        id: "infosys-python",
        title: "Python Foundation Certification",
        issuer: "Infosys Springboard",
        featured: true,
        image: "assets/certs/infosys-python.png",
        tags: ["MNC Verified", "Python"]
      },
      // Non-featured (visible on 'Show All' click)
      {
        id: "oracle",
        title: "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
        issuer: "Oracle",
        featured: false,
        image: "assets/certs/oracle.png",
        tags: ["Cloud AI", "Global Vendor"]
      },
      {
        id: "cisco",
        title: "Cisco AICTE Virtual Internship in Artificial Intelligence",
        issuer: "Cisco Networking Academy & AICTE",
        featured: false,
        credentialId: "STU68165385d82a11746293637",
        image: "assets/certs/cisco.png",
        tags: ["AICTE", "Skill India"]
      },
      {
        id: "infosys-prog",
        title: "Programming Fundamentals Python",
        issuer: "Infosys Springboard",
        featured: false,
        image: "assets/certs/infosys-fundamentals.png",
        tags: ["Algorithms", "Python"]
      },
      {
        id: "servicenow",
        title: "ServiceNow Virtual Internship Program",
        issuer: "ServiceNow / AICTE / SmartBridge",
        featured: false,
        image: "assets/certs/servicenow.png",
        tags: ["ServiceNow", "Enterprise"]
      },
      {
        id: "edunet",
        title: "Employability & Digital Literacy with AI",
        issuer: "Edunet Foundation & IBM SkillsBuild",
        featured: false,
        image: "assets/certs/edunet.jpg",
        tags: ["AICTE", "IBM"]
      },
      {
        id: "boardinfinity",
        title: "Data Science for Beginners",
        issuer: "Board Infinity",
        featured: false,
        image: "assets/certs/boardinfinity.jpg",
        tags: ["Data Science", "Python"]
      },
      {
        id: "django",
        title: "Django Web Development",
        issuer: "Simplilearn",
        featured: false,
        image: "assets/certs/django.png",
        tags: ["Web Dev", "Django"]
      }
    ]
  },

  // ------------------------------------------------------------------
  // Contact Section
  // ------------------------------------------------------------------
  contact: {
    heading: "Let's Build Something Great",
    subheading:
      "Available for full-time software developer roles and internships in Bhopal and Indore. Open to discuss local business website projects, Django development, and technical consulting.",
    email: "ziyankhan809@gmail.com",
    linkedin: "https://www.linkedin.com/in/ziyankhan",
    github: "https://github.com/ziyankhan-coder",
    location: "Bhopal & Indore, Madhya Pradesh, India",
    resumeUrl: "/Ziyan_Khan_Resume.pdf"
  },

  // ------------------------------------------------------------------
  // Footer
  // ------------------------------------------------------------------
  footer: {
    copyright: "© 2026 Ziyan Khan. All rights reserved.",
    tagline: "Designed with modern Aurora Glass & built for high performance."
  }
};
