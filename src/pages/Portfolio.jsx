import React, { useState, useEffect } from "react";
import {
  Moon,
  Sun,
  Menu,
  X,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Phone,
  ExternalLink,
  Code,
  Smartphone,
  Database,
  ChevronDown,
  Award,
  Briefcase,
  Globe,
  Download,
  Server,
} from "lucide-react";

import emailjs from "@emailjs/browser";

import GyanBrixImg from "../assets/gyanbrix.png";
import VoiceTranslation from "../assets/voice-translation.png";
import CarWash from "../assets/car-wash.png";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Failed to send message");
          console.error(error);
        }
      );
  };

  const getCurrentYear = () => new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // const skills = {
  //   frontend: [
  //     { name: "React.js", level: 95 },
  //     { name: "React Native", level: 90 },
  //     { name: "Tailwind CSS", level: 95 },
  //     { name: "JavaScript", level: 92 },
  //     { name: "HTML/CSS", level: 98 },
  //   ],
  //   backend: [
  //     { name: "Node.js", level: 90 },
  //     { name: "Express.js", level: 88 },
  //     { name: "MongoDB", level: 85 },
  //     { name: "PostgreSQL", level: 82 },
  //     { name: "Firebase", level: 93 },
  //     { name: "REST API", level: 90 },
  //   ],
  // };

  const skills = [
    { name: "React.js", icon: "⚛️", color: "from-cyan-400 to-blue-500" },
    { name: "React Native", icon: "📱", color: "from-blue-400 to-indigo-500" },
    { name: "Node.js", icon: "🟢", color: "from-green-400 to-emerald-500" },
    { name: "Express.js", icon: "🚂", color: "from-gray-400 to-gray-600" },
    { name: "MongoDB", icon: "🍃", color: "from-green-500 to-teal-500" },
    { name: "Firebase", icon: "🔥", color: "from-yellow-400 to-orange-500" },
    { name: "Tailwind CSS", icon: "🎨", color: "from-sky-400 to-cyan-500" },
    { name: "JavaScript", icon: "⚡", color: "from-yellow-300 to-yellow-500" },
  ];

  const projects = [
    {
      title: "GyanBrix – Assamese Medium Learning Platform",
      description:
        "GyanBrix is a full-stack education platform built for Assamese Medium students. It offers chapter-wise solutions, quizzes and structured learning content through a mobile app, managed via a powerful admin web dashboard.",
      tech: ["React Native (Expo)", "React", "Firebase", "Tailwind CSS"],
      demo: "https://www.gyanbrix.in/",
      github: null,
      image: GyanBrixImg,
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "AI Powered - Assamese to English Voice-to-Voice Translator",
      description:
        "An AI-powered voice-to-voice translation system that converts spoken Assamese into English speech. In addition to bridging language gaps, it helps Assamese speakers learn English naturally by listening to English translations of their spoken Assamese sentences.",
      tech: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "OpenAI API",
        "Gemini API",
      ],
      demo: null,
      github: "#",
      image: VoiceTranslation,
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Car Wash Management System with Loyalty Program",
      description:
        "A MERN stack–based car wash management system featuring admin and user dashboards, wash tracking, and an automatic loyalty program where every 7th wash is free after 6 paid washes.Both admins and users can track wash history, payments, and vehicle details seamlessly.",
      tech: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT Authentication",
        "REST API",
      ],
      demo: null,
      github: "https://github.com/sadid14n/car-wash",
      image: CarWash,
      gradient: "from-cyan-500 to-blue-500",
    },
    // {
    //   title: "E-Commerce Solution",
    //   description:
    //     "Complete e-commerce platform with admin dashboard, inventory management, and payment integration",
    //   tech: ["MERN Stack", "Redux", "JWT", "PayPal"],
    //   demo: "#",
    //   github: "#",
    //   image: "🛒",
    //   gradient: "from-blue-500 to-purple-500",
    // },
    // {
    //   title: "Car Wash Management System",
    //   description:
    //     "Booking and management system for car wash services with scheduling and customer analytics",
    //   tech: ["React", "Express", "MongoDB", "Socket.io"],
    //   demo: "#",
    //   github: "#",
    //   image: "🚗",
    //   gradient: "from-cyan-400 to-teal-500",
    // },
    // {
    //   title: "Real-time Football Score Tracker",
    //   description:
    //     "Live football match scores with real-time updates, team stats, and match highlights",
    //   tech: ["React", "Firebase", "Firestore", "Cloud Functions"],
    //   demo: "#",
    //   github: "#",
    //   image: "⚽",
    //   gradient: "from-green-500 to-emerald-500",
    // },
    // {
    //   title: "AI Assamese Translator",
    //   description:
    //     "Speech-to-text translator converting Assamese speech to English text using AI/ML",
    //   tech: ["Python", "TensorFlow", "React", "Flask"],
    //   demo: "#",
    //   github: "#",
    //   image: "🎤",
    //   gradient: "from-purple-500 to-pink-500",
    // },
    // {
    //   title: "College News Feed",
    //   description:
    //     "Social platform for college news, announcements, and student engagement with real-time updates",
    //   tech: ["MERN Stack", "Socket.io", "Cloudinary", "JWT"],
    //   demo: "#",
    //   github: "#",
    //   image: "📰",
    //   gradient: "from-orange-500 to-red-500",
    // },
  ];

  const experiences = [
    {
      role: "Full-Stack Developer Intern",
      company: "SynthWeb",
      companyUrl: "https://synthweb.in/",
      period: "July 2025 - Oct 2025",
      description:
        "Worked on full-stack development using MERN stack, TypeScript, PostgreSQL, Express.js, and Dockerized setups. Contributed to API development, frontend features, database handling, and deployment workflows.",
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      role: "Web Developer Intern",
      company: "Beakball (VR/AR Company)",
      companyUrl: "https://www.beakball.com/",
      period: "March 2025 - April 2025",
      description:
        "Improved the main website by integrating email workflows and refining UI/UX components. Built a testimonials module, enhanced contact form functionality, and assisted in creating professional pitch decks for fundraising.",
      icon: <Briefcase className="w-5 h-5" />,
    },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div
      className={`${
        darkMode ? "dark bg-slate-950" : "bg-gray-50"
      } min-h-screen transition-colors duration-300`}
    >
      <div
        className={`${
          darkMode ? "text-white" : "text-gray-900"
        } relative overflow-hidden`}
      >
        {/* Custom Cursor Effect */}
        <div
          className="fixed w-4 h-4 rounded-full bg-cyan-500/30 pointer-events-none z-50 mix-blend-screen transition-transform duration-100"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Animated Background Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
            style={{ top: "-192px", left: "-192px" }}
          ></div>
          <div
            className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
            style={{
              bottom: "-192px",
              right: "-192px",
              animationDelay: "700ms",
            }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1400ms" }}
          ></div>
        </div>

        {/* Navigation */}
        <nav
          className={`fixed top-0 w-full z-50 backdrop-blur-lg ${
            darkMode
              ? "bg-slate-900/80 border-slate-800"
              : "bg-white/80 border-gray-200"
          } border-b transition-all duration-300`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                SA
              </div>

              <div className="hidden md:flex space-x-8">
                {[
                  "home",
                  "about",
                  "skills",
                  "projects",
                  "experience",
                  "contact",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize transition-all duration-300 relative group ${
                      activeSection === item
                        ? darkMode
                          ? "text-cyan-400"
                          : "text-cyan-600"
                        : darkMode
                        ? "text-gray-300 hover:text-cyan-400"
                        : "text-gray-700 hover:text-cyan-600"
                    }`}
                  >
                    {item}
                    <span
                      className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 group-hover:w-full ${
                        activeSection === item ? "w-full" : ""
                      }`}
                    ></span>
                  </button>
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`p-2 rounded-lg ${
                    darkMode
                      ? "bg-slate-800 text-yellow-400"
                      : "bg-gray-200 text-slate-800"
                  } hover:scale-110 transition-transform duration-300`}
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button
                  className="md:hidden p-2"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {menuOpen && (
            <div
              className={`md:hidden ${
                darkMode
                  ? "bg-slate-900 border-slate-800"
                  : "bg-white border-gray-200"
              } border-t`}
            >
              {[
                "home",
                "about",
                "skills",
                "projects",
                "experience",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block w-full text-left px-4 py-3 capitalize ${
                    darkMode ? "hover:bg-slate-800" : "hover:bg-gray-100"
                  } transition-colors`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center relative px-4 pt-16"
        >
          <div className="max-w-7xl mx-auto text-center z-10">
            <div
              className={`inline-block px-4 py-2 rounded-full ${
                darkMode
                  ? "bg-slate-800/50 border-slate-700"
                  : "bg-white/50 border-gray-300"
              } backdrop-blur-sm border mb-8`}
            >
              <span
                className={`${
                  darkMode ? "text-cyan-400" : "text-cyan-600"
                } font-medium`}
              >
                👋 Welcome to my portfolio
              </span>
            </div>

            <h1
              className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Sadid Alam
              </span>
            </h1>

            <h2
              className={`text-2xl sm:text-3xl mb-6 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Full-stack Web & Mobile Developer
            </h2>

            <p
              className={`text-lg sm:text-xl mb-12 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              MERN Stack | React Native | Firebase
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {/* <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download CV
              </button> */}
              <a
                href="/Sadid_Alam_Resume.pdf"
                download
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download CV
              </a>

              <button
                onClick={() => scrollToSection("contact")}
                className={`px-8 py-4 ${
                  darkMode
                    ? "bg-slate-800 text-white border-slate-700"
                    : "bg-white text-gray-900 border-gray-300"
                } rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 border`}
              >
                Hire Me
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className={`px-8 py-4 ${
                  darkMode
                    ? "bg-slate-800/50 text-cyan-400"
                    : "bg-gray-100 text-cyan-600"
                } rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105`}
              >
                View Projects
              </button>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/sadid14n"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  darkMode ? "hover:text-cyan-400" : "hover:text-cyan-600"
                } transition-colors hover:scale-110 transform`}
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/sadid14n/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  darkMode ? "hover:text-cyan-400" : "hover:text-cyan-600"
                } transition-colors hover:scale-110 transform`}
              >
                <Linkedin size={28} />
              </a>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown size={32} className="text-gray-400" />
            </div>
          </div>

          <div className="absolute inset-0 pointer-events-none">
            <Code
              className="absolute w-12 h-12 text-cyan-500/20"
              style={{
                top: "25%",
                left: "25%",
                animation: "float 3s ease-in-out infinite",
              }}
            />
            <Database
              className="absolute w-10 h-10 text-blue-500/20"
              style={{
                top: "33%",
                right: "25%",
                animation: "float 3s ease-in-out infinite",
                animationDelay: "0.3s",
              }}
            />
            <Smartphone
              className="absolute w-8 h-8 text-purple-500/20"
              style={{
                bottom: "25%",
                left: "33%",
                animation: "float 3s ease-in-out infinite",
                animationDelay: "0.7s",
              }}
            />
            <Globe
              className="absolute w-10 h-10 text-cyan-500/20"
              style={{
                bottom: "33%",
                right: "33%",
                animation: "float 3s ease-in-out infinite",
                animationDelay: "0.5s",
              }}
            />
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className={`py-20 px-4 relative z-10 ${
            darkMode ? "bg-slate-900/50" : "bg-white"
          }`}
        >
          <div className="max-w-5xl mx-auto">
            <h2
              className={`text-4xl sm:text-5xl font-bold mb-12 text-center ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              About{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Me
              </span>
            </h2>

            {/* <div className="grid md:grid-cols-2 gap-8">
              <div
                className={`${
                  darkMode
                    ? "bg-slate-800/50 border-slate-700"
                    : "bg-gray-50 border-gray-200"
                } rounded-2xl p-8 border backdrop-blur-sm`}
              >
                <h3
                  className={`text-2xl font-bold mb-4 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Passionate Developer
                </h3>
                <p
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  } mb-6 leading-relaxed`}
                >
                  I'm a versatile full-stack developer specializing in building
                  modern web and mobile applications. With expertise in MERN
                  stack and React Native, I create seamless, user-friendly
                  experiences that solve real-world problems.
                </p>
                <p
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  } leading-relaxed`}
                >
                  My passion lies in crafting clean, efficient code and
                  beautiful interfaces that users love. I'm constantly learning
                  and exploring new technologies to stay at the forefront of web
                  and mobile development.
                </p>
              </div>

              <div className="space-y-6">
                <div
                  className={`${
                    darkMode
                      ? "bg-slate-800/50 border-slate-700"
                      : "bg-gray-50 border-gray-200"
                  } p-6 rounded-xl backdrop-blur-sm border hover:scale-105 transition-transform duration-300`}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <Code className="w-8 h-8 text-cyan-500" />
                    <h4
                      className={`text-xl font-semibold ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Full Stack Developer
                    </h4>
                  </div>
                  <p
                    className={`${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Expert in MERN stack, building scalable web applications
                  </p>
                </div>

                <div
                  className={`${
                    darkMode
                      ? "bg-slate-800/50 border-slate-700"
                      : "bg-gray-50 border-gray-200"
                  } p-6 rounded-xl backdrop-blur-sm border hover:scale-105 transition-transform duration-300`}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <Smartphone className="w-8 h-8 text-blue-500" />
                    <h4
                      className={`text-xl font-semibold ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Mobile Developer
                    </h4>
                  </div>
                  <p
                    className={`${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Creating cross-platform mobile apps with React Native
                  </p>
                </div>

                <div
                  className={`${
                    darkMode
                      ? "bg-slate-800/50 border-slate-700"
                      : "bg-gray-50 border-gray-200"
                  } p-6 rounded-xl backdrop-blur-sm border hover:scale-105 transition-transform duration-300`}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <Award className="w-8 h-8 text-purple-500" />
                    <h4
                      className={`text-xl font-semibold ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Award Winner
                    </h4>
                  </div>
                  <p
                    className={`${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    2nd Prize - Inter-college Web Development Competition
                  </p>
                </div>
              </div>
            </div> */}

            <div className="grid md:grid-cols-2 gap-8">
              <div
                className={`backdrop-blur-lg ${
                  darkMode
                    ? "bg-slate-800/50 border-slate-700"
                    : "bg-white/50 border-gray-300"
                } rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-cyan-500 transition-all duration-300 hover:shadow-xl`}
              >
                <Code className="w-12 h-12 mb-4 text-purple-600 dark:text-cyan-400" />
                <h3 className="text-2xl font-bold mb-4">Web Development</h3>
                <p
                  className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  Specialized in building scalable web applications using MERN
                  Stack. Expert in React.js, Node.js, Express.js, and MongoDB
                  with a focus on performance and user experience.
                </p>
              </div>

              <div
                className={`backdrop-blur-lg ${
                  darkMode
                    ? "bg-slate-800/50 border-slate-700"
                    : "bg-white/50 border-gray-300"
                } rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-cyan-500 transition-all duration-300 hover:shadow-xl`}
              >
                <Smartphone className="w-12 h-12 mb-4 text-purple-600 dark:text-cyan-400" />
                <h3 className="text-2xl font-bold mb-4">Mobile Development</h3>
                <p
                  className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  Creating cross-platform mobile applications with React Native
                  and Firebase. Delivering native-like experiences with smooth
                  animations and optimal performance.
                </p>
              </div>

              <div
                className={`backdrop-blur-lg ${
                  darkMode
                    ? "bg-slate-800/50 border-slate-700"
                    : "bg-white/50 border-gray-300"
                } rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-cyan-500 transition-all duration-300 hover:shadow-xl`}
              >
                <Server className="w-12 h-12 mb-4 text-purple-600 dark:text-cyan-400" />
                <h3 className="text-2xl font-bold mb-4">Backend Development</h3>
                <p
                  className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  Building robust RESTful APIs and server-side applications.
                  Experienced with Node.js, Express.js, authentication.
                </p>
              </div>

              <div
                className={`backdrop-blur-lg ${
                  darkMode
                    ? "bg-slate-800/50 border-slate-700"
                    : "bg-white/50 border-gray-300"
                } rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-cyan-500 transition-all duration-300 hover:shadow-xl`}
              >
                <Database className="w-12 h-12 mb-4 text-purple-600 dark:text-cyan-400" />
                <h3 className="text-2xl font-bold mb-4">Database Design</h3>
                <p
                  className={`${darkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  Proficient in MongoDB and Firebase for data management.
                  Designing efficient database schemas, implementing indexing,
                  and optimizing queries for performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className={`py-20 px-4 relative z-10 ${
            darkMode ? "bg-slate-950" : "bg-gray-50"
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <h2
              className={`text-4xl sm:text-5xl font-bold mb-12 text-center ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Skills &{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>

            {/* <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div
                className={`${
                  darkMode
                    ? "bg-slate-900/50 border-slate-800"
                    : "bg-white border-gray-200"
                } p-8 rounded-2xl backdrop-blur-sm border`}
              >
                <h3
                  className={`text-2xl font-bold mb-8 flex items-center gap-3 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  <Globe className="text-cyan-500" />
                  Frontend
                </h3>
                <div className="space-y-6">
                  {skills.frontend.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span
                          className={`font-medium ${
                            darkMode ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          {skill.name}
                        </span>
                        <span className="text-cyan-500">{skill.level}%</span>
                      </div>
                      <div
                        className={`h-2 ${
                          darkMode ? "bg-slate-800" : "bg-gray-200"
                        } rounded-full overflow-hidden`}
                      >
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`${
                  darkMode
                    ? "bg-slate-900/50 border-slate-800"
                    : "bg-white border-gray-200"
                } p-8 rounded-2xl backdrop-blur-sm border`}
              >
                <h3
                  className={`text-2xl font-bold mb-8 flex items-center gap-3 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  <Database className="text-blue-500" />
                  Backend
                </h3>
                <div className="space-y-6">
                  {skills.backend.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span
                          className={`font-medium ${
                            darkMode ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          {skill.name}
                        </span>
                        <span className="text-blue-500">{skill.level}%</span>
                      </div>
                      <div
                        className={`h-2 ${
                          darkMode ? "bg-slate-800" : "bg-gray-200"
                        } rounded-full overflow-hidden`}
                      >
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div> */}

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`group backdrop-blur-lg  ${
                    darkMode
                      ? "bg-slate-800/50 border-slate-700"
                      : "bg-white/50 border-gray-300"
                  }} rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-300 hover:shadow-xl hover:scale-105`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`text-5xl mb-3 group-hover:scale-110 transition-transform`}
                  >
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold text-center">{skill.name}</h3>
                  <div
                    className={`h-1 mt-3 rounded-full bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className={`py-20 px-4 relative z-10 ${
            darkMode ? "bg-slate-900/50" : "bg-white"
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <h2
              className={`text-4xl sm:text-5xl font-bold mb-12 text-center ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Featured{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className={`group ${
                    darkMode
                      ? "bg-slate-800/50 border-slate-700"
                      : "bg-gray-50 border-gray-200"
                  } rounded-2xl overflow-hidden backdrop-blur-sm border hover:scale-105 hover:shadow-2xl transition-all duration-300`}
                >
                  <div
                    className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-6xl`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3
                      className={`text-xl font-bold mb-3 ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      } mb-4`}
                    >
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 text-xs rounded-full ${
                            darkMode
                              ? "bg-slate-700 text-cyan-400"
                              : "bg-cyan-100 text-cyan-700"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* button */}
                    <div className="flex gap-4 pt-4">
                      {/* <button
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg hover:shadow-lg transition-all cursor-pointer"
                        onClick={() => window.open(project.demo, "_blank")}
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </button> */}
                      {project.demo && (
                        <button
                          onClick={() => window.open(project.demo, "_blank")}
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg hover:shadow-lg transition-all"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </button>
                      )}
                      {/* <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:border-purple-600 dark:hover:border-cyan-400 transition-all">
                        <Github size={16} />
                        Code
                      </button> */}
                      {project.github && (
                        <button
                          onClick={() => window.open(project.github, "_blank")}
                          className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:border-purple-600 dark:hover:border-cyan-400 transition-all"
                        >
                          <Github size={16} />
                          Code
                        </button>
                      )}
                    </div>
                    {/* <div className="flex gap-4">
                      <a
                        href={project.demo}
                        className="flex items-center gap-2 text-cyan-500 hover:text-cyan-400 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                      <a
                        href={project.github}
                        className={`flex items-center gap-2 ${
                          darkMode
                            ? "text-gray-500 hover:text-gray-400"
                            : "text-gray-600 hover:text-gray-700"
                        } transition-colors`}
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </div> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className={`py-20 px-4 relative z-10 ${
            darkMode ? "bg-slate-950" : "bg-gray-50"
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <h2
              className={`text-4xl sm:text-5xl font-bold mb-12 text-center ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Experience &{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>

            <div className="max-w-4xl mx-auto space-y-8">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className={`${
                    darkMode
                      ? "bg-slate-900/50 border-slate-800"
                      : "bg-white border-gray-200"
                  } p-8 rounded-2xl backdrop-blur-sm border hover:scale-105 transition-all duration-300`}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white">
                      {exp.icon}
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`text-xl font-bold mb-2 ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {exp.role}
                      </h3>
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-500 mb-2 inline-block hover:underline hover:text-cyan-400 transition-colors"
                      >
                        {exp.company}
                      </a>

                      <p
                        className={`text-sm ${
                          darkMode ? "text-gray-400" : "text-gray-600"
                        } mb-3`}
                      >
                        {exp.period}
                      </p>
                      <p
                        className={`${
                          darkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className={`py-20 px-4 relative z-10 ${
            darkMode ? "bg-slate-900/50" : "bg-white"
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <h2
              className={`text-4xl sm:text-5xl font-bold mb-12 text-center ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Get In{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <h3
                  className={`text-2xl font-bold mb-6 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Let's Connect
                </h3>
                <p
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  } mb-8`}
                >
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-cyan-500" />
                    <span
                      className={darkMode ? "text-gray-300" : "text-gray-700"}
                    >
                      sadidalam14@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-cyan-500" />
                    <span
                      className={darkMode ? "text-gray-300" : "text-gray-700"}
                    >
                      +91 88220 97309
                    </span>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <a
                    href="https://github.com/sadid14n"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-110"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sadid14n/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <div
                className={`${
                  darkMode
                    ? "bg-slate-800/50 border-slate-700"
                    : "bg-gray-50 border-gray-200"
                } p-8 rounded-2xl backdrop-blur-sm border`}
              >
                <div className="space-y-6">
                  <div>
                    <label
                      className={`block mb-2 font-medium ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={`w-full px-4 py-3 rounded-lg ${
                        darkMode
                          ? "bg-slate-900 text-white border-slate-700"
                          : "bg-white text-gray-900 border-gray-300"
                      } border focus:ring-2 focus:ring-cyan-500 outline-none transition-all`}
                    />
                  </div>
                  <div>
                    <label
                      className={`block mb-2 font-medium ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className={`w-full px-4 py-3 rounded-lg ${
                        darkMode
                          ? "bg-slate-900 text-white border-slate-700"
                          : "bg-white text-gray-900 border-gray-300"
                      } border focus:ring-2 focus:ring-cyan-500 outline-none transition-all`}
                    />
                  </div>
                  <div>
                    <label
                      className={`block mb-2 font-medium ${
                        darkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Your message"
                      className={`w-full px-4 py-3 rounded-lg ${
                        darkMode
                          ? "bg-slate-900 text-white border-slate-700"
                          : "bg-white text-gray-900 border-gray-300"
                      } border focus:ring-2 focus:ring-cyan-500 outline-none transition-all resize-none`}
                    />
                  </div>
                  <button
                    onClick={sendEmail}
                    className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          className={`${
            darkMode
              ? "bg-slate-950 border-slate-800"
              : "bg-gray-900 border-gray-800"
          } border-t py-12`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                © {getCurrentYear()} Sadid Alam. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a
                  href="https://github.com/sadid14n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sadid14n/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                {/* <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a> */}
              </div>
            </div>
            <div className="text-center mt-8">
              <button
                onClick={() => scrollToSection("home")}
                className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                ↑ Back to Top
              </button>
            </div>
          </div>
        </footer>

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
        `}</style>
      </div>
    </div>
  );
}
