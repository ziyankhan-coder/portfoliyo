/**
 * ====================================================================
 * PORTFOLIO CONTENT
 * ====================================================================
 * Every piece of text, link and project on the site lives in this file.
 * Edit here; no other file needs to change for content updates.
 *
 * Things you still need to fill in (search for "TODO"):
 *   - hero.stats        -> LeetCode card (real count + profile URL)
 *   - achievements      -> Sunhack result (exact rank)
 */

window.PORTFOLIO_DATA = {
  meta: {
    name: "Ziyan Khan",
    title: "Ziyan Khan | Python Django & WordPress Developer",
    location: "Bhopal • Indore, India"
  },

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

  hero: {
    greeting: "Hi, I'm Ziyan Khan",
    leadIn: "I'm a",
    // First role is the static default when JS is off or reduced motion is on.
    typingRoles: [
      "Python Django Developer",
      "WordPress & SEO Developer",
      "React Frontend Developer"
    ],
    subtext:
      "Final-year B.Tech CSE (AI/ML) student from Bhopal. I build Django + React web apps and WordPress websites that work for real businesses.",
    badge: "Open to full-time & internships | Bhopal • Indore",
    resumeUrl: "/Ziyan_Khan_Resume.pdf",
    floatingCards: [
      {
        icon: "fa-solid fa-server",
        title: "Backend Lead Intern",
        subtitle: "Infosys Springboard (BugFlow)",
        badge: "5-Member Team"
      },
      {
        icon: "fa-solid fa-graduation-cap",
        title: "LNCT&S Bhopal",
        subtitle: "B.Tech CSE (AI/ML) | CGPA 7.9",
        badge: "Class of 2027"
      }
    ],
    // value is animated as a counter; suffix is appended after the number.
    stats: [
      { value: 4, suffix: "+", label: "Projects Built" },
      { value: 1, suffix: "", label: "Live Client Website" },
      { value: 5, suffix: "", label: "Member Team (Backend Lead)" }
      // TODO LeetCode: add back only with a real count and profile URL, e.g.
      // { value: 300, suffix: "+", label: "Problems Solved", href: "https://leetcode.com/u/your-handle/" }
    ]
  },

  marquee: [
    { name: "Python", icon: "fa-brands fa-python" },
    { name: "Django", icon: "fa-solid fa-layer-group" },
    { name: "DRF", icon: "fa-solid fa-network-wired" },
    { name: "React", icon: "fa-brands fa-react" },
    { name: "PostgreSQL", icon: "fa-solid fa-database" },
    { name: "WordPress", icon: "fa-brands fa-wordpress" },
    { name: "Git", icon: "fa-brands fa-git-alt" },
    { name: "GitHub", icon: "fa-brands fa-github" },
    { name: "Postman", icon: "fa-solid fa-paper-plane" }
  ],

  about: {
    label: "About",
    heading: "Practical developer with a real-business focus",
    summary: [
      "I build full-stack apps with Django, Django REST Framework, React and PostgreSQL, and WordPress sites with on-page SEO for local businesses.",
      "I handle client requirements end to end, from the first call to DNS, hosting and Google Business Profile.",
      "Right now I work in a 5-member team on BugFlow, an issue-tracking platform, as the backend lead."
    ],
    education: {
      degree:
        "Bachelor of Technology in Computer Science & Engineering (Artificial Intelligence & Machine Learning)",
      institute: "LNCT&S Bhopal",
      cgpa: "CGPA 7.9",
      timeline: "2023 – 2027",
      schooling: "Class 12: 76% (MPBSE, 2023) • Class 10: 82% (MPBSE, 2021)"
    }
  },

  skills: {
    label: "Skills",
    heading: "Tools I work with",
    groups: [
      {
        category: "Backend",
        items: ["Python", "Django", "Django REST Framework", "JWT", "OAuth 2.0", "REST APIs"]
      },
      {
        category: "Frontend",
        items: ["React.js", "JavaScript", "HTML", "CSS"]
      },
      {
        category: "Databases",
        items: ["PostgreSQL", "MySQL", "SQLite", "SQL"]
      },
      {
        category: "WordPress & SEO",
        items: [
          "WordPress",
          "Elementor",
          "Yoast / Rank Math",
          "On-page SEO",
          "Keyword Research",
          "Google Analytics (GA4)",
          "Search Console",
          "Google Business Profile"
        ]
      },
      {
        category: "AI / Data",
        items: ["Pandas", "NumPy", "Scikit-Learn", "Matplotlib"]
      },
      {
        category: "Tools",
        items: ["Git", "GitHub", "Postman", "CI/CD", "Vercel", "Render", "cPanel"]
      },
      {
        category: "Core",
        items: ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks", "Java (basic)"]
      }
    ]
  },

  experience: {
    label: "Experience",
    heading: "Where I've worked",
    subtitle:
      "Backend lead in a 5-member team building BugFlow, plus a live WordPress client website.",
    items: [
      {
        role: "Backend Lead Intern (BugFlow)",
        organization: "Infosys Springboard Virtual Internship",
        period: "Nov 2026 – Present",
        location: "Remote",
        badge: "In progress",
        description:
          "Backend lead in a 5-member team building an issue-tracking platform with Django REST Framework, PostgreSQL and React.",
        done: [
          "Set up the Django project structure.",
          "Implemented JWT authentication.",
          "Built role-based user models."
        ],
        next: "Next: issue APIs, role-based access control (RBAC) and a workflow state machine."
      },
      {
        role: "WordPress Developer & SEO (Freelance)",
        organization: "Fair Tours & Travels",
        period: "Aug 2026 – Present",
        location: "Bhopal",
        badge: "Live client",
        link: "https://fairtoursandtravels.com",
        description:
          "Built and maintain the website of an IATA-authorized travel agency, working directly with the client.",
        done: [
          "Page structure, UI and lead-capture forms in WordPress and Elementor.",
          "On-page SEO, backlinks, GA4 and Google Business Profile optimization.",
          "DNS setup and cPanel hosting."
        ]
      },
      {
        role: "Training & virtual internships",
        compact: true,
        items: [
          { name: "Cisco AI Virtual Internship", meta: "Cisco Networking Academy & AICTE • Jun – Aug 2026" },
          { name: "AI & Digital Literacy", meta: "Edunet Foundation & IBM SkillsBuild • Nov – Dec 2025" }
        ]
      }
    ]
  },

  projects: {
    label: "Projects",
    heading: "Things I've built",
    subtitle: "A live client website and full-stack web apps.",
    items: [
      {
        id: "bugflow",
        title: "BugFlow",
        status: "In progress",
        description:
          "Issue tracking and resolution platform for software teams, built as a 5-member team project.",
        tech: ["Django REST Framework", "PostgreSQL", "React", "JWT"],
        github: "https://github.com/ziyankhan-coder/_Intelligent-Software-Defect-Tracking-System-Group-2",
        live: null,
        images: ["assets/projects/bugflow.webp"]
      },
      {
        id: "fairtours",
        title: "Fair Tours & Travels",
        status: "Client project",
        description:
          "Website and ongoing SEO for a Bhopal travel agency. Scores 78/100 for SEO and accessibility on PageSpeed Insights.",
        tech: ["WordPress", "Elementor", "GA4", "SEO"],
        github: null,
        live: "https://fairtoursandtravels.com",
        images: [
          "assets/projects/fairtours-1.webp",
          "assets/projects/fairtours-2.webp",
          "assets/projects/fairtours-3.webp"
        ]
      },
      {
        id: "cinesense",
        title: "CineSense",
        status: "Live",
        description:
          "AI movie recommender using cosine similarity on 5,000+ TMDB records, with a Gemini API chat and JWT login.",
        tech: ["React", "Django REST", "Pandas", "Gemini API", "OMDb", "YouTube API"],
        github: "https://github.com/ziyankhan-coder/CineSence-movieRecommendation",
        live: "https://cine-sence-movie-recommendation.vercel.app/",
        images: [
          "assets/projects/cinesense.webp",
          "assets/projects/cinesense-2.webp",
          "assets/projects/cinesense-3.webp"
        ]
      },
      {
        // Hidden until its live link works again. Set showJobRec: true to show it.
        id: "jobrec",
        showJobRec: false,
        title: "AI Job Recommender & Resume Analyzer",
        status: "Maintenance",
        description:
          "Matches resumes to job descriptions with NLP and cosine similarity to produce an ATS match score.",
        tech: ["React", "Django REST", "Scikit-Learn", "NLP", "PostgreSQL"],
        github: "https://github.com/ziyankhan-coder/Job-Recommandation-System",
        live: "https://job-recommandation-system-dsv6.onrender.com/",
        images: ["assets/projects/jobrec.webp"]
      }
    ]
  },

  services: {
    label: "Services",
    heading: "How I can help",
    subtitle: "For small businesses and teams that need a site, an API or better search visibility.",
    quoteText: "Get a quote",
    items: [
      {
        icon: "fa-brands fa-wordpress",
        title: "Business Websites (WordPress)",
        description:
          "Mobile-friendly sites built with WordPress and Elementor, with lead forms, WhatsApp links, domain, SSL and cPanel hosting.",
        mailSubject: "Quote: WordPress business website"
      },
      {
        icon: "fa-solid fa-layer-group",
        title: "Django Web Apps & APIs",
        description:
          "REST APIs and web apps with Django, DRF and PostgreSQL, with JWT login and a React frontend where needed.",
        mailSubject: "Quote: Django web app or API"
      },
      {
        icon: "fa-solid fa-chart-line",
        title: "SEO & Google Business Profile",
        description:
          "On-page SEO, GA4 and Search Console setup, and Google Business Profile optimization for local businesses.",
        mailSubject: "Quote: SEO & Google Business Profile setup"
      },
      {
        icon: "fa-solid fa-rocket",
        title: "Launch Support",
        description:
          "Google Play Console account setup, publishing coordination and payment gateway onboarding help for small businesses.",
        mailSubject: "Quote: App launch support"
      }
    ]
  },

  achievements: {
    label: "Achievements",
    heading: "Highlights",
    subtitle: "Hackathons and measurable site-performance results.",
    items: [
      { icon: "fa-solid fa-trophy", text: "Participated in Smart India Hackathon (SIH)." },
      // TODO Sunhack: replace with the exact result, e.g. "Won 2nd place at the Sunhack offline hackathon."
      // { icon: "fa-solid fa-medal", text: "[exact rank/result] at Sunhack offline hackathon." },
      { icon: "fa-solid fa-lightbulb", text: "Built a prototype tourism website in a college hackathon." },
      {
        icon: "fa-solid fa-gauge-high",
        text: "Optimized a client WordPress site to 78/100 SEO and Accessibility on PageSpeed Insights."
      },
      {
        icon: "fa-solid fa-rocket",
        text: "Helped a client launch their e-commerce app on Google Play: account setup, publishing coordination and PhonePe payment gateway onboarding assistance."
      }
    ]
  },

  certifications: {
    label: "Certifications",
    heading: "Courses and credentials",
    subtitle: "From NASSCOM, Wipro, EY, Microsoft, Infosys and others.",
    featuredCount: 4,
    showAllText: "Show all certifications",
    showLessText: "Show fewer",
    items: [
      {
        title: "AI & ML Certification Program (Gold, 80%)",
        issuer: "NASSCOM FutureSkills Prime",
        image: "assets/certs/nasscom1.webp"
      },
      {
        title: "Python Foundation Certification",
        issuer: "Infosys Springboard",
        image: "assets/certs/infosys-python.webp"
      },
      {
        title: "AI Skills Passport",
        issuer: "EY & Microsoft",
        image: "assets/certs/ey-microsoft.webp"
      },
      {
        title: "Database Solutions Expert",
        issuer: "Wipro TalentNext",
        credentialId: "TNext-SE-2026-DB_261360251",
        image: "assets/certs/wipro-talentnext.webp"
      },
      {
        title: "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
        issuer: "Oracle",
        image: "assets/certs/oracle.webp"
      },
      {
        title: "Cisco AICTE Virtual Internship in Artificial Intelligence",
        issuer: "Cisco Networking Academy & AICTE",
        credentialId: "STU68165385d82a11746293637",
        image: "assets/certs/cisco.webp"
      },
      {
        title: "Programming Fundamentals Python",
        issuer: "Infosys Springboard",
        image: "assets/certs/infosys-fundamentals.webp"
      },
      {
        title: "ServiceNow Virtual Internship Program",
        issuer: "ServiceNow, AICTE & SmartBridge",
        image: "assets/certs/servicenow.webp"
      },
      {
        title: "Employability & Digital Literacy with AI",
        issuer: "Edunet Foundation & IBM SkillsBuild",
        image: "assets/certs/edunet.webp"
      },
      {
        title: "Data Science for Beginners",
        issuer: "Board Infinity",
        image: "assets/certs/boardinfinity.webp"
      },
      {
        title: "Django Web Development",
        issuer: "Simplilearn",
        image: "assets/certs/django.webp"
      },
      {
        title: "Cybersecurity Analyst Job Simulation",
        issuer: "Tata Group & Forage",
        image: "assets/certs/tata.webp"
      },
      {
        title: "Web Development Internship",
        issuer: "TechnoHacks EduTech",
        image: "assets/certs/technohacks.webp"
      },
      {
        title: "Infosys Springboard Internship",
        issuer: "Infosys Springboard",
        image: "assets/certs/infosys-internship.webp"
      },
      {
        title: "Full Stack Web Development",
        issuer: "Udemy",
        image: "assets/certs/udemy.webp"
      }
    ]
  },

  contact: {
    label: "Contact",
    heading: "Open to full-time and internship roles in Bhopal and Indore.",
    email: "ziyankhan809@gmail.com",
    linkedin: "https://www.linkedin.com/in/ziyankhan",
    github: "https://github.com/ziyankhan-coder",
    resumeUrl: "/Ziyan_Khan_Resume.pdf"
  },

  footer: {
    copyright: "© 2026 Ziyan Khan"
  }
};
