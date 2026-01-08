import React, { useState, useEffect } from "react";
import {
  Moon,
  Sun,
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Smartphone,
  Server,
  Database,
  ChevronDown,
} from "lucide-react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
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
      title: "E-Commerce Platform",
      desc: "Full-stack MERN application with payment integration, admin dashboard, and real-time inventory management.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Social Media Mobile App",
      desc: "Cross-platform mobile app built with React Native featuring real-time chat, stories, and push notifications.",
      tech: ["React Native", "Firebase", "Redux"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Task Management System",
      desc: "Collaborative project management tool with team features, real-time updates, and analytics dashboard.",
      tech: ["MERN Stack", "Socket.io", "Tailwind"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Fitness Tracking App",
      desc: "Mobile fitness application with workout plans, progress tracking, and social features.",
      tech: ["React Native", "Firebase", "Chart.js"],
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className={`${darkMode ? "dark" : ""} transition-colors duration-300`}>
      <div className="dark:bg-gray-900 bg-gray-50 text-gray-900 dark:text-white min-h-screen relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        {/* Mouse Follower */}
        <div
          className="fixed w-64 h-64 rounded-full pointer-events-none transition-all duration-300 ease-out z-0 opacity-30 blur-3xl"
          style={{
            background: darkMode
              ? "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)",
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
          }}
        ></div>

        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Sadid.dev
              </div>

              <div className="hidden md:flex space-x-8">
                {["home", "about", "skills", "projects", "contact"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className={`capitalize transition-all duration-300 relative group ${
                        activeSection === item
                          ? "text-purple-600 dark:text-cyan-400"
                          : ""
                      }`}
                    >
                      {item}
                      <span
                        className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 transition-all duration-300 group-hover:w-full ${
                          activeSection === item ? "w-full" : ""
                        }`}
                      ></span>
                    </button>
                  )
                )}
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:scale-110 transition-transform"
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

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
              {["home", "about", "skills", "projects", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left px-4 py-3 capitalize hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center relative px-4 pt-16"
        >
          <div className="max-w-7xl mx-auto text-center z-10">
            <div className="mb-6 inline-block">
              <div className="relative">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 p-1 animate-pulse">
                  <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-5xl">
                    👨‍💻
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent">
                Sadid Alam
              </span>
            </h1>

            <p className="text-xl sm:text-2xl lg:text-3xl mb-4 text-gray-600 dark:text-gray-300">
              Full-Stack Developer
            </p>

            <p className="text-lg sm:text-xl mb-8 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              Building exceptional web & mobile experiences with MERN Stack,
              React Native, and modern technologies
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-purple-500/50"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 border-2 border-purple-600 dark:border-cyan-400 rounded-lg font-semibold hover:bg-purple-600 dark:hover:bg-cyan-400 hover:text-white transition-all"
              >
                Get In Touch
              </button>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-600 dark:hover:text-cyan-400 transition-colors hover:scale-110 transform"
              >
                <Github size={28} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-600 dark:hover:text-cyan-400 transition-colors hover:scale-110 transform"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="mailto:sadid@example.com"
                className="hover:text-purple-600 dark:hover:text-cyan-400 transition-colors hover:scale-110 transform"
              >
                <Mail size={28} />
              </a>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown size={32} className="text-gray-400" />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
              About{" "}
              <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Me
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="backdrop-blur-lg bg-white/50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-cyan-500 transition-all duration-300 hover:shadow-xl">
                <Code className="w-12 h-12 mb-4 text-purple-600 dark:text-cyan-400" />
                <h3 className="text-2xl font-bold mb-4">Web Development</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Specialized in building scalable web applications using MERN
                  Stack. Expert in React.js, Node.js, Express.js, and MongoDB
                  with a focus on performance and user experience.
                </p>
              </div>

              <div className="backdrop-blur-lg bg-white/50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-cyan-500 transition-all duration-300 hover:shadow-xl">
                <Smartphone className="w-12 h-12 mb-4 text-purple-600 dark:text-cyan-400" />
                <h3 className="text-2xl font-bold mb-4">Mobile Development</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Creating cross-platform mobile applications with React Native
                  and Firebase. Delivering native-like experiences with smooth
                  animations and optimal performance.
                </p>
              </div>

              <div className="backdrop-blur-lg bg-white/50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-cyan-500 transition-all duration-300 hover:shadow-xl">
                <Server className="w-12 h-12 mb-4 text-purple-600 dark:text-cyan-400" />
                <h3 className="text-2xl font-bold mb-4">Backend Development</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Building robust RESTful APIs and server-side applications.
                  Experienced with Node.js, Express.js, authentication, and
                  real-time features using Socket.io.
                </p>
              </div>

              <div className="backdrop-blur-lg bg-white/50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-cyan-500 transition-all duration-300 hover:shadow-xl">
                <Database className="w-12 h-12 mb-4 text-purple-600 dark:text-cyan-400" />
                <h3 className="text-2xl font-bold mb-4">Database Design</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Proficient in MongoDB and Firebase for data management.
                  Designing efficient database schemas, implementing indexing,
                  and optimizing queries for performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
              Technical{" "}
              <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group backdrop-blur-lg bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-300 hover:shadow-xl hover:scale-105"
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
        <section id="projects" className="py-20 px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
              Featured{" "}
              <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group backdrop-blur-lg bg-white/50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-300 hover:shadow-2xl hover:scale-105"
                >
                  <div
                    className={`h-2 w-20 rounded-full bg-gradient-to-r ${project.gradient} mb-6`}
                  ></div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg hover:shadow-lg transition-all">
                      <ExternalLink size={16} />
                      Live Demo
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:border-purple-600 dark:hover:border-cyan-400 transition-all">
                      <Github size={16} />
                      Code
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
              Get In{" "}
              <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>

            <div className="backdrop-blur-lg bg-white/50 dark:bg-gray-800/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <p className="text-center text-lg mb-8 text-gray-600 dark:text-gray-300">
                I'm currently available for freelance work and full-time
                opportunities. Let's build something amazing together!
              </p>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 focus:border-purple-600 dark:focus:border-cyan-400 outline-none transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 focus:border-purple-600 dark:focus:border-cyan-400 outline-none transition-colors"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 focus:border-purple-600 dark:focus:border-cyan-400 outline-none transition-colors"
                />

                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 focus:border-purple-600 dark:focus:border-cyan-400 outline-none transition-colors resize-none"
                ></textarea>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    alert(
                      "Thank you for your message! This is a demo portfolio."
                    );
                  }}
                  className="w-full py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105"
                >
                  Send Message
                </button>
              </div>

              <div className="flex justify-center space-x-8 mt-8">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-cyan-400 transition-colors"
                >
                  <Github size={24} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-cyan-400 transition-colors"
                >
                  <Linkedin size={24} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="mailto:sadid@example.com"
                  className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-cyan-400 transition-colors"
                >
                  <Mail size={24} />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-800 text-center relative z-10">
          <p className="text-gray-600 dark:text-gray-400">
            © 2025 Sadid Alam. Built with React & Tailwind CSS
          </p>
        </footer>
      </div>
    </div>
  );
}
