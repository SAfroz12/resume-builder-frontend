export const dummyData = {
  personalInfo: {
    fullName: "Andrew O'Sullivan",
    role: "Full Stack Developer",
    email: "andrew@sulli.com",
    phone: "+01 1111115",
    location: "Berlin, Germany",
    github: "github.com/andrew",
    linkedin: "linkedin.com/in/andrew",
    summary: `Results-driven Full Stack Developer with 3+ years of experience in building scalable web applications.
    Skilled in designing responsive UI using React and developing robust backend services with Node.js.
    Strong problem-solving abilities with a focus on performance optimization and clean code practices.
    Passionate about learning new technologies and delivering high-quality user experiences.`
  },

  education: [
    {
      school: "Berlin University",
      degree: "B.Tech Computer Science",
      startDate: "2018-06",
      endDate: "2022-05",
      cgpa: "8.5"
    }
  ],

  skills: {
    technical: [
      { label: "React", value: "react" },
      { label: "Node.js", value: "node" },
      { label: "JavaScript", value: "js" },
      { label: "MongoDB", value: "mongo" }
    ],
    soft: [
      { label: "Leadership", value: "leadership" },
      { label: "Communication", value: "communication" },
      { label: "Problem Solving", value: "problem-solving" }
    ],
    tools: [
      { label: "Git", value: "git" },
      { label: "Figma", value: "figma" },
      { label: "Postman", value: "postman" }
    ]
  },

  projects: [
    {
      id: crypto.randomUUID(),
      title: "Resume Builder Application",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      techStack: [{ label: "React" }, { label: "Node.js" }, { label: "CSS" }],
      description: `Developed a full stack resume builder with real-time preview and AI-powered suggestions.
      Implemented dynamic form handling and state management using React Context API.
      Integrated backend APIs for AI resume analysis and optimization.
      Improved user experience by designing a clean and responsive UI.`
    },
    {
      id: crypto.randomUUID(),
      title: "E-Commerce Platform",
      liveUrl: "https://shopdemo.com",
      githubUrl: "https://github.com/shopdemo",
      techStack: [{ label: "React" }, { label: "MongoDB" }, { label: "Express" }],
      description: `Built a scalable e-commerce web application with product listing and cart functionality.
      Implemented authentication and secure payment flow.Optimized performance and reduced load time by 30%.`
    }
  ],

  experience: {
    company: "Tech Corp",
    designation: "Full Stack Developer",
    startDate: "2020-06",
    endDate: "2023-08",
    current: false,
    description: `Developed and maintained web applications using React and Node.js.
    Collaborated with cross-functional teams to deliver high-quality software solutions.
    Improved application performance and reduced API response time by 25%.
    Mentored junior developers and conducted code reviews.`
  },

  certifications: [
    { id: Date.now(), name: "AWS Certified Developer – Associate" },
    { id: Date.now() + 1, name: "Full Stack Web Development – Udemy" }
  ]
};