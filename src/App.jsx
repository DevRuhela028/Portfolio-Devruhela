
import { useState, useEffect } from "react";
import { faGithub,faTwitter  } from "@fortawesome/free-brands-svg-icons";
import * as LucideIcons from "lucide-react";
import * as echarts from "echarts";
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import { Code } from "lucide-react";
const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [activeFilter, setActiveFilter] = useState("All");

 

      const projectsData = [
  {
    title: "Chat-IIITA",
    category: "Web Development",
    description:
      "Chat-IIITA is an AI-powered chatbot designed to assist IIITA students, prospective students, and faculty members.It provides instant responses to academic queries, administrative processes, and campus-related guidance. The bot is capable of handling both text and voice inputs, offering an interactive and intuitive experience for users.",
    image: "/chatiiita_web.png",
    technologies: ["React", "Firebase", "Zustand", "Python", "FastAPI" , "GroqAPI", "LangChain", "LLMs"],
      challenges:
        "Generating fast and accurate responses with handling multiple concurrent users and ensuring optimal performance across different devices.",
      approach:
        "Made use of Groq API for ultra-fast inference and LangChain to manage the conversation flow effectively. Built a robust backend using FastAPI to efficiently handle API requests and ensure scalability. Deployed the backend on Railway for reliable cloud hosting.Integrated Firebase for real-time data synchronization and secure user authentication. Designed an interactive and responsive UI using React and Tailwind CSS, ensuring a smooth and intuitive user experience across all devices.",
      timeline: "Sep 2024 - Nov 2024",
      outcome:
        "Successfully launched with 95% user satisfaction rate with 500+ active participants in alpha and beta testing.",
      keyFeatures: [
        "AI-Powered Query Resolution",
        "Voice & Text Chat Interface",
        "Dynamic Sidebar with Saved Chats & Quick Links",
        "Secure Authentication System",
        "Responsive UI with Tailored UX",
      ],
  },
  
  {
    title: "Testiflow",
    category: "Web Development",
    description:
      "TestiFlow is an AI-powered testimonial management platform built with the MERN stack. It empowers users to seamlessly collect, manage, and display client testimonials on their websites. What sets TestiFlow apart is its integration with generative AI, which not only summarizes testimonials but also creates compelling case studies to boost brand credibility and trust. The platform provides an intuitive interface for users to gather testimonials using a simple link and display them with customizable widgets.",
    image: "/testiflow.png",
    technologies: ["React", "Zustand", "Node.js", "Express", "MongoDB", "Python", "FastAPI" , "GroqAPI", "LLMs"],
      challenges:
        " Securing testimonial data and managing user permissions without exposing sensitive content.Training the AI to create meaningful summaries and case studies without losing context or tone.Designing an intuitive UX that is friendly for both technical and non-technical users.Creating dynamic testimonial links that users can personalize and distribute to clients. Integrating AI tools with the MERN stack, especially managing async operations efficiently.",
      approach:
        "Leveraged MongoDB for flexible schema handling, Express and Node.js for a scalable backend, and React with Tailwind CSS for a responsive frontend.Used OpenAI (or similar LLMs) to process raw testimonials into summaries and case studies with adjustable tone and length.Implemented dynamic routes for generating unique testimonial collection links for each user or product.Built reusable testimonial display components that can be embedded with minimal setup.",
      timeline: "Dec 2024 - Jan 2025",
      outcome:
        "Successfully launched with 98% user satisfaction rate and 40% improvement in processing efficiency.",
      keyFeatures: [
        "AI Testimonial Summarizer",
        "AI Case Study Generator",
        "Testimonial Gathering Page",
        "Embeddable Widget",
        "AI Space Generator",
      ],
  },
  {
    title: "Spectrum",
    category: "Web Development",
    description:
      "Spectrum is an inclusive, community-first platform designed to upskill uneducated or underserved members of the LGBTQ+ community and connect them to meaningful employment opportunities. The platform provides accessible learning resources, job guidance, and a supportive environment where users can grow personally and professionally. It’s built with simplicity and dignity in mind, helping individuals bridge the gap between their potential and the professional world.",
    image: "/spectrum.png",
    technologies: ["React", "Firebase", "Gemini", "Google Maps", "VertexAI"],
      challenges:
        " Building a UI that works on mobile devices and handles different languages or local dialects.Maintaining safety, privacy, and mental well-being for LGBTQ+ users who might face stigma.Making sure chatbot responses are empathetic, respectful, and don’t spread misinformation.Curating job listings from organizations that are genuinely inclusive—not just performatively.",
      approach:
        "Used Firebase for fast backend deployment, real-time DB, and authentication. React + Tailwind for a clean frontend.Deployed a Vertex AI or Gemini chatbot to guide users and answer basic questions with a friendly tone.",
      timeline: "Jan 2025 - Mar 2025",
      outcome:
        "Successfully launched with 98% user satisfaction rate and 40% improvement in processing efficiency.",
      keyFeatures: [
        "AI-Powered Chatbot Assistant",
        "Safe Space Community Forum",
        "Identity-Affirming Onboarding",
        "Beginner-Friendly Learning Modules",
        "Job Board & Employer Connect",
      ],
  },
  {
    title: "M-Cell Management System",
    category: "Web Development",
    description:
      "M-Cell is a smart, role-based Maintenance Cell Management System tailored for campuses and large institutions. It streamlines the entire complaint lifecycle—from issue registration by students to resolution by engineers and oversight by administrators. M-Cell provides a centralized system for effective complaint tracking, engineer assignment, status updates, and reporting.",
    image: "/mcell_web.png",
    technologies: ["React", "Node.js", "Express", "MySQL"],
      challenges:
        "Real-time Sync Between Web & Mobile ensuring that changes (e.g. complaint status updates) reflect immediately across platforms. Building a fair and efficient engineer allocation system based on availability and workload. Preventing cross-role data leakage and enforcing permission boundaries.Adapting features for different screen sizes and environments (labs, dorms, admin office, etc.).Structuring relational tables to support complaint timelines, user types, and complaint categories without redundancy.",
      approach:
        "Designed for scalability with relationships for users, complaints, engineers, and timelines.Used functional components, hooks, and role-based routing with responsive design.Created clean interfaces with SwiftUI and used URLSession for API communication with SQL backend via REST.Built a RESTful API to act as a bridge between frontend/app and MySQL.Secure login with tokens and middleware to validate roles on API requests.",
      timeline: "Mar 2025 - Apr 2025",
      outcome:
        "Successfully launched with 98% user satisfaction rate and 40% improvement in processing efficiency.",
      keyFeatures: [
        "Student Complaint Submission",
        "Complaint Status Tracking",
        "Engineer, Student and Admin Dashboards",
        "Timeline View & History",
        "Role-based authentication",
      ],
  },
  {
    title: "M-Cell Management System (iOS)",
    category: "iOS App",
    description:
      "Mobile application that streamlines the entire complaint lifecycle—from issue registration by students to resolution by engineers and oversight by administrators. M-Cell provides a centralized system for effective complaint tracking, engineer assignment, status updates, and reporting.",
    image: "/mcell_app.png",
    technologies: ["SwiftUI","Node.js", "Express", "MySQL"],
      challenges:
        "Real-time Sync Between Web & Mobile ensuring that changes (e.g. complaint status updates) reflect immediately across platforms. Building a fair and efficient engineer allocation system based on availability and workload. Preventing cross-role data leakage and enforcing permission boundaries.Adapting features for different screen sizes and environments (labs, dorms, admin office, etc.).Structuring relational tables to support complaint timelines, user types, and complaint categories without redundancy.",
      approach:
        " Designed for scalability with relationships for users, complaints, engineers, and timelines.Created clean interfaces with SwiftUI and used URLSession for API communication with SQL backend via REST.Built a RESTful API to act as a bridge between frontend/app and MySQL.Secure login with tokens and middleware to validate roles on API requests.",
      timeline: "Mar 2025 - May 2025",
      outcome:
        "Successfully launched with 98% user satisfaction rate and 40% improvement in processing efficiency.",
      keyFeatures: [
        "Photo-Based Reporting",
        "Push Notifications",
        "Student Complaint Submission",
        "Complaint Status Tracking",
        "Engineer, Student and Admin Dashboards",
        "Timeline View & History",
        "Role-based authentication",
      ],
  },
  {
    title: "Portfolio",
    category: "UI/UX Design",
    description:
      "A sleek, modern personal portfolio website designed to showcase my skills, projects, and experiences with a strong focus on UI/UX principles. The design emphasizes clarity, minimalism, and smooth user interactions to create a memorable experience for visitors, recruiters, and collaborators.",
    image: "/portfolio.png",
    technologies: ["React", "JavaScript", "TailwindCSS"],
      challenges:
        "",
      approach:
        "",
      timeline: "May 2025",
      outcome:
        "",
      keyFeatures: [
        "Minimalistic & Responsive Design",
        "Interactive Project Gallery",
        "Smooth Animations with AOS & Framer Motion",
        "Integrated Contact & Resume Download Section",
      ],
  },
];


const filters = ["All", "Web Development", "UI/UX Design", "iOS App"];

 const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  const openProjectModal = (project) => {
    setSelectedProject({
      ...project,
      // technologies: ["React", "TypeScript", "Node.js", "MongoDB", "AWS"],
      // challenges:
      //   "Implementing real-time data synchronization and ensuring optimal performance across different devices and browsers.",
      // approach:
      //   "Utilized WebSocket for real-time features and implemented responsive design patterns with progressive enhancement.",
      // timeline: "March 2025 - May 2025",
      // outcome:
      //   "Successfully launched with 98% user satisfaction rate and 40% improvement in processing efficiency.",
      // keyFeatures: [
      //   "Real-time data synchronization",
      //   "Responsive design",
      //   "Advanced analytics dashboard",
      //   "Secure payment processing",
      //   "User authentication and authorization",
      // ],
    });
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // whether animation should happen only once
    });
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      // Update scroll progress
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);

      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Initialize skills chart
    const skillsChart = document.getElementById("skills-chart");
    if (skillsChart) {
      const chart = echarts.init(skillsChart);
      const option = {
        animation: false,
        radar: {
          indicator: [
            { name: "JavaScript", max: 100 },
            { name: "React", max: 100 },
            { name: "Node.js", max: 100 },
            { name: "UI/UX", max: 100 },
            { name: "HTML/CSS", max: 100 },
            { name: "SwiftUI", max: 100 },
          ],
          radius: "65%",
          splitNumber: 4,
          axisName: {
            color: "#333",
            fontSize: 14,
          },
        },
        series: [
          {
            type: "radar",
            data: [
              {
                value: [90, 95, 85, 80, 90, 85],
                name: "Skills",
                areaStyle: {
                  color: "rgba(64, 158, 255, 0.6)",
                },
                lineStyle: {
                  color: "#409EFF",
                },
              },
            ],
          },
        ],
      };
      chart.setOption(option);

      // Handle resize
      window.addEventListener("resize", () => {
        chart.resize();
      });
    }
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen font-Cormorant bg-white text-gray-800 ">
      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-purple-500 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Navigation */}
      <header className="fixed w-full bg-white bg-opacity-95 dark:bg-black/90 dark:bg-opacity-8 dark:backdrop-blur-2xl shadow-sm z-40 transition-all duration-300">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-bold text-purple-600 dark:text-purple-400 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            Dev<span className="text-gray-800 dark:text-gray-200">Ruhela</span>
          </a>

          {/* Desktop Navigation */}
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "contact"].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`capitalize text-lg font-medium transition-colors duration-300 cursor-pointer whitespace-nowrap ${
                    activeSection === section
                      ? "text-purple-600 dark:text-purple-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section);
                  }}
                >
                  {section}
                </a>
              ))}
            </nav>
            <DarkModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 dark:text-gray-300 focus:outline-none cursor-pointer !rounded-button whitespace-nowrap"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i
              className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}
            ></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden bg-white dark:bg-gray-900 shadow-lg transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-60" : "max-h-0"
          }`}
        >
          <div className="container mx-auto px-6 py-2">
            {["home", "about", "skills", "projects", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`block py-3 capitalize font-medium transition-colors duration-300 cursor-pointer ${
                  activeSection === section
                    ? "text-purple-600 dark:text-purple-400"
                    : "text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section);
                }}
              >
                {section}
              </a>
            ))}
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section
          id="home"
          className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[url('/bg.png')] dark:bg-[url('/dark-bg.png')] bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-transparent dark:to-transparent"></div>

          <div className="container mx-auto px-6 z-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left" data-aos="fade-right">
                <p className="text-purple-600 dark:text-purple-400 text-2xl font-medium mb-2">Hello, I'm</p>
                <h1 className="text-6xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight dark:text-white">
                  Dev Ruhela
                </h1>
                <h2 className="text-3xl md:text-3xl text-gray-700 dark:text-gray-300 font-normal mb-6 hover:text-purple-700 dark:hover:text-purple-400 transition-all duration-300">
                  Full Stack Web & iOS App Developer
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-xl font-extralight mb-8 max-w-lg">
                  Currently studying in <span className="font-bold dark:text-white">IIIT Allahabad</span>, I am pursuing <br />
                  <span className="font-bold dark:text-white">Bachelors of Technology</span> with specialization in <span className="font-bold dark:text-white">Business Informatics</span>.
                  I specialize in building modern web applications using <span className="font-semibold dark:text-white">React</span>, <span className="font-semibold dark:text-white">Node.js</span>, and 
                  <span className="font-semibold dark:text-white"> MongoDB</span>, as well as crafting native iOS apps using <span className="font-semibold dark:text-white">SwiftUI</span>. 
                </p>

                <div className="flex space-x-6 mb-8">
                  {[
                    ["fab fa-github", "https://github.com/DevRuhela028"],
                    ["fab fa-linkedin", "#"],
                    ["fab fa-twitter", "#"],
                    ["fab fa-dribbble", "#"],
                    ["fab fa-medium", "#"],
                  ].map(([icon, href]) => (
                    <a
                      key={icon}
                      href={href}
                      className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 cursor-pointer"
                    >
                      <i className={`${icon} text-2xl`}></i>
                    </a>
                  ))}
                </div>

                <div className="flex text-lg flex-wrap gap-4">
                  <a
                    href="#projects"
                    className="px-8 py-3 bg-purple-500 text-white rounded-lg shadow-lg hover:bg-purple-700 transition-all duration-300 cursor-pointer !rounded-button whitespace-nowrap"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("projects");
                    }}
                  >
                    View My Work
                  </a>
                  <a
                    href="#contact"
                    className="px-8 py-3 bg-white dark:bg-transparent text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50 dark:hover:bg-gray-800 transition-all duration-300 cursor-pointer !rounded-button whitespace-nowrap"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("contact");
                    }}
                  >
                    Contact Me
                  </a>
                </div>
              </div>

              <div className="relative hidden md:block" data-aos="fade-left">
                <div className="relative w-fit h-fit overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="/image.png"
                    alt="Dev Ruhela - Full Stack Developer"
                    className="w-full h-full object-contain object-top"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
            >
              <i className="fas fa-chevron-down text-purple-600 dark:text-purple-400 text-2xl"></i>
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="relative py-20 bg-gray-50 dark:bg-black overflow-hidden">
      {/* Simple whitish spotlight at top */}
      <div className="absolute -top-50 left-1/2  -translate-x-1/2 w-96 h-96 bg-white/20 rounded-full blur-3xl dark:rotate-45 dark:block hidden"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-200">
            About Me
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white dark:bg-inherit rounded-xl shadow-lg dark:shadow-none  p-8">
            <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
              My Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg leading-relaxed">
              With over 6 months of experience in web development, I've
              cultivated a passion for creating intuitive, user-centered
              digital experiences. My journey began with front-end
              development, and I've since expanded my expertise to
              full-stack development and UI/UX design.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg leading-relaxed">
              I believe in the power of clean code and thoughtful design to
              solve complex problems. My approach combines technical
              expertise with creative thinking to deliver solutions that are
              both functional and beautiful.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Apart from web development, I am also a hobbyist iOS App developer and eagerly learning SwiftUI for building interactive applications.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              {
                icon: "fas fa-code",
                title: "Development",
                description: "Building responsive, accessible, and performant web applications and iOS apps with modern technologies."
              },
              {
                icon: "fas fa-paint-brush",
                title: "Design",
                description: "Creating intuitive user interfaces and engaging user experiences that delight."
              },
              {
                icon: "fas fa-lightbulb",
                title: "Problem Solving",
                description: "Approaching challenges with analytical thinking and creative solutions."
              },
              {
                icon: "fas fa-users",
                title: "Collaboration",
                description: "Working effectively with teams to deliver exceptional results."
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-900/20 rounded-xl shadow-lg dark:shadow-none dark:border dark:border-gray-800/80 p-6 transform hover:scale-105 transition-transform duration-300 dark:hover:bg-gray-900/40"
              >
                <div className="text-purple-600 dark:text-purple-400 text-2xl mb-4">
                  <i className={item.icon}></i>
                </div>
                <h4 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>


        {/* Skills Section */}
        <section id = "skills" className="relative py-20 bg-white dark:bg-black overflow-hidden">
      {/* Diagonal spotlights */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-white/20 rounded-full blur-3xl dark:block hidden transform rotate-45 -translate-x-48 -translate-y-48"></div>
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-white/20 rounded-full blur-3xl dark:block hidden transform -rotate-45 translate-x-48 -translate-y-48"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="h-[400px] dark:text-white" data-aos="fade-right">
                <div id="skills-chart" className="w-full h-full dark:text-white"></div>
              </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              {
                name: "Front-End",
                skills: [
                  "React",
                  "JavaScript",
                  "SwiftUI",
                  "HTML/CSS",
                ],
                icon: "Code",
                color: "red",
              },
              {
                name: "Back-End",
                skills: ["Node.js", "Express", "MongoDB", "SQL"],
                icon: "Server",
                color: "green",
              },
              {
                name: "Design",
                skills: [
                  "Figma",
                  "Canva",
                  "UI/UX",
                  "Responsive Design",
                ],
                icon: "Palette",
                color: "purple",
              },
              {
                name: "Tools",
                skills: ["Git", "Groq", "Render", "Docker"],
                icon: "Wrench",
                color: "red",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900/40 rounded-xl shadow-lg dark:shadow-none dark:border dark:border-gray-800 p-6 hover:shadow-xl dark:hover:bg-gray-900/60 transition-all duration-300"
              >
                <div className={`text-${category.color}-600 dark:text-white text-3xl mb-4`}>
                  {LucideIcons[category.icon] ? (
                    React.createElement(LucideIcons[category.icon], { size: 32 })
                  ) : (
                    <LucideIcons.Circle size={32} /> // fallback icon
                  )}
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{category.name}</h4>
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-gray-600 dark:text-gray-300"
                    >
                      <i className="fas fa-check text-green-600 dark:text-green-400 font-bold mr-2 text-sm"></i>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
            Technical Proficiency
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "JavaScript", level: 90 },
              { name: "React", level: 95 },
              { name: "Node.js", level: 85 },
              { name: "HTML/CSS", level: 90 },
              { name: "SwiftUI", level: 85 },
              { name: "UI/UX Design", level: 80 },
            ].map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 dark:text-gray-300 text-lg font-semibold">
                    {skill.name}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400 text-xl">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-1.5">
                  <div
                    className="bg-purple-500 dark:bg-purple-300/90  h-1.5 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="py-20 bg-gray-50 dark:bg-gray-900 dark:bg-[url('/project1.png')] bg-cover bg-center bg-no-repeat relative"
        >
          {/* <div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"></div> */}

          <div className="relative container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                My Projects
              </h2>
              <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-xl">
                Here's a selection of my recent work. Each project represents a unique
                challenge and solution.
              </p>
            </div>

            <div className="flex justify-center mb-8">
              <div className="inline-flex bg-white dark:bg-gray-900/70 rounded-lg shadow-md p-1">
                {filters.map((filter, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 text-lg font-medium rounded-lg transition-colors duration-300 cursor-pointer whitespace-nowrap ${
                      activeFilter === filter
                        ? "bg-purple-600 text-white"
                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                    onClick={() => setActiveFilter(filter)}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700/30 rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="relative overflow-hidden h-60 bg-gradient-to-t from-gray-50 to-gray-200 dark:from-gray-200 dark:to-gray-400">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-100 object-contain object-top transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6">
                        <span className="text-white text-sm font-medium bg-purple-600 px-3 py-1 rounded-full">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description.slice(0, 100) + "..."}
                    </p>
                    <div className="flex justify-between items-center">
                      <button
                        onClick={() => openProjectModal(project)}
                        className="text-purple-600 dark:text-purple-400 text-sm border border-purple-700 px-2 py-1 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900 font-medium transition-colors duration-300 cursor-pointer whitespace-nowrap"
                      >
                        View Details
                      </button>
                      <div className="flex space-x-2">
                        <a
                          href="https://github.com/DevRuhela028"
                          className="text-gray-400 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white transition-colors duration-300"
                        >
                          <i className="fab fa-github"></i>
                        </a>
                        <a
                          href="#"
                          className="text-gray-400 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white transition-colors duration-300"
                        >
                          <i className="fas fa-external-link-alt"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white dark:bg-black transition-colors duration-300">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white transition-colors duration-300">
                Get In Touch
              </h2>
              <div className="w-20 h-1 bg-purple-600 dark:bg-purple-500 mx-auto mb-6 transition-colors duration-300"></div>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl text-xl mx-auto transition-colors duration-300">
                Have a project in mind or want to collaborate? I'd love to hear
                from you. Fill out the form below or reach out through my social
                channels.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Contact Information Card */}
              <div
                className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/30 p-8 border border-gray-200 dark:border-gray-700 transition-all duration-300"
                data-aos="fade-right"
              >
                <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100 transition-colors duration-300">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {/* Location */}
                  <div className="flex items-start group">
                    <div className="text-purple-600 dark:text-purple-400 text-xl mr-4 group-hover:scale-110 transition-transform duration-200">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200 mb-1 transition-colors duration-300">
                        Location
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-lg transition-colors duration-300">
                        Prayagraj, UttarPradesh
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start group">
                    <div className="text-purple-600 dark:text-purple-400 text-xl mr-4 group-hover:scale-110 transition-transform duration-200">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200 mb-1 transition-colors duration-300">
                        Email
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-lg hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 cursor-pointer">
                        dev.ruhela120@gmail.com
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start group">
                    <div className="text-purple-600 dark:text-purple-400 text-xl mr-4 group-hover:scale-110 transition-transform duration-200">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-lg text-gray-800 dark:text-gray-200 mb-1 transition-colors duration-300">
                        Phone
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-lg hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300 cursor-pointer">
                        +91 7302611179
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <h4 className="font-medium text-gray-800 dark:text-gray-200 text-lg mb-4 transition-colors duration-300">
                    Connect with me
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/DevRuhela028"
                      className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-purple-600 dark:hover:bg-purple-500 hover:text-white dark:hover:text-white transition-all duration-300 cursor-pointer transform hover:scale-110 hover:shadow-lg"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-purple-600 dark:hover:bg-purple-500 hover:text-white dark:hover:text-white transition-all duration-300 cursor-pointer transform hover:scale-110 hover:shadow-lg"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-purple-600 dark:hover:bg-purple-500 hover:text-white dark:hover:text-white transition-all duration-300 cursor-pointer transform hover:scale-110 hover:shadow-lg"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-purple-600 dark:hover:bg-purple-500 hover:text-white dark:hover:text-white transition-all duration-300 cursor-pointer transform hover:scale-110 hover:shadow-lg"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/30 p-8 border border-gray-200 dark:border-gray-700 transition-all duration-300"
                data-aos="fade-left"
              >
                <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100 transition-colors duration-300">
                  Send Me a Message
                </h3>

                <form>
                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent transition-all duration-300 text-sm"
                        placeholder="Your Name"
                        required
                      />
                    </div>

                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent transition-all duration-300 text-sm"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="mb-6">
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent transition-all duration-300 text-sm"
                      placeholder="Subject"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent transition-all duration-300 text-sm resize-none"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-8 py-3 bg-purple-600 dark:bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 dark:hover:bg-purple-500 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer !rounded-button whitespace-nowrap font-medium"
                  >
                    <i className="fas fa-paper-plane mr-2"></i>
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <a
                href="#home"
                className="text-2xl font-bold text-white mb-4 block"
              >
                Dev<span className="text-purple-500">Ruhela</span>
              </a>
              <p className="text-gray-400 mb-6 max-w-md">
                Creating elegant, user-centered digital experiences with clean
                code and creative design solutions.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/DevRuhela028"
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <i className="fab fa-linkedin-in text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <i className="fab fa-dribbble text-xl"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <i className="fab fa-medium text-xl"></i>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="flex space-x-2">
                <li>
                  <a
                    href="#home"
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("home");
                    }}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("about");
                    }}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("skills");
                    }}
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("projects");
                    }}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("contact");
                    }}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            
            <div className="mt-4 md:mt-0 flex space-x-4">
              
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-purple-600 text-white shadow-lg flex items-center justify-center transition-all duration-300 cursor-pointer z-50 !rounded-button whitespace-nowrap ${
          scrollProgress > 20
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <i className="fas fa-arrow-up"></i>
      </button>
      {isModalOpen && selectedProject && (
  <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 dark:bg-black/80 backdrop-blur-sm">
    <div className="bg-white dark:bg-black rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl border border-gray-200 dark:border-gray-600 transition-colors duration-300">
      <button
        onClick={closeProjectModal}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-xl cursor-pointer !rounded-button whitespace-nowrap z-10 p-2rounded-full transition-all duration-200"
      >
       <LucideIcons.X/>
      </button>

      <div className="p-8">
        {/* Project Image Section */}
        <div className="flex items-center justify-center h-80 mb-6 rounded-lg overflow-hidden bg-gradient-to-t from-gray-50 to-gray-200 dark:from-gray-200 dark:to-gray-300 border border-gray-200 dark:border-gray-600">
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            className="mt-35 w-full h-120 object-contain object-top"
          />
        </div>

        {/* Project Title */}
        <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100 transition-colors duration-300">
          {selectedProject.title}
        </h2>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            {/* Project Overview */}
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200 transition-colors duration-300">
              Project Overview
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
              {selectedProject.description}
            </p>

            {/* Technologies Used */}
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200 transition-colors duration-300">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 rounded-full text-sm border border-purple-200 dark:border-purple-700 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Key Features */}
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200 transition-colors duration-300">
              Key Features
            </h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-2 transition-colors duration-300">
              {selectedProject.keyFeatures.map((feature, index) => (
                <li key={index} className="leading-relaxed">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div>
            {/* Challenges Faced */}
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200 transition-colors duration-300">
              Challenges Faced
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
              {selectedProject.challenges}
            </p>

            {/* Solution Approach */}
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200 transition-colors duration-300">
              Solution Approach
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
              {selectedProject.approach}
            </p>

            {/* Timeline */}
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200 transition-colors duration-300">
              Timeline
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
              {selectedProject.timeline}
            </p>

            {/* Outcome */}
            <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200 transition-colors duration-300">
              Outcome
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
              {selectedProject.outcome}
            </p>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="flex-1 px-6 py-3 bg-purple-600 hover:bg-purple-700 dark:bg-purple-600 dark:hover:bg-purple-500 text-white rounded-lg text-center transition-all duration-300 cursor-pointer !rounded-button whitespace-nowrap shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <i className="fas fa-external-link-alt mr-2"></i>
                Live Demo
              </a>
              <a
                href="https://github.com/DevRuhela028"
                className="flex-1 px-6 py-3 border border-purple-600 dark:border-purple-500 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg text-center transition-all duration-300 cursor-pointer !rounded-button whitespace-nowrap shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <i className="fab fa-github mr-2"></i>
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default App;
