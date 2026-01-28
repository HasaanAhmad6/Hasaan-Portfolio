import { Github, Mail, Linkedin, Sun, Moon, Download, ArrowUp, Code2, Database, Cloud, Brain, Phone, MapPin, Calendar, Award, BookOpen, Briefcase } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import ProjectCard from "./components/ProjectCard";

export default function App() {
  const [dark, setDark] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const skills = [
    { icon: Code2, name: "Frontend Development", items: ["React.js", "JavaScript ES6+", "Tailwind CSS", "Responsive Design"] },
    { icon: Cloud, name: "Cloud & DevOps", items: ["AWS (EC2, S3, Lambda)", "Firebase", "REST APIs", "Serverless"] },
    { icon: Database, name: "Database Systems", items: ["SQL/MySQL", "MongoDB", "Database Design", "Query Optimization"] },
    { icon: Brain, name: "AI & Machine Learning", items: ["TensorFlow", "Python", "Computer Vision", "Data Analysis"] },
  ];

  const achievements = [
    { icon: Award, text: "Built 4+ production-ready projects" },
    { icon: Code2, text: "Proficient in modern web technologies" },
    { icon: Briefcase, text: "Available for internships & freelance work" },
    { icon: BookOpen, text: "Continuous learner & problem solver" },
  ];

  return (
    <div
      className={`${
        dark ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"
      } min-h-screen font-sans transition-colors duration-500 relative overflow-x-hidden`}
    >
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* Dark Mode Toggle */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="fixed top-6 right-6 z-50"
      >
        <button
          onClick={() => setDark(!dark)}
          className={`p-3 rounded-full ${
            dark ? "bg-slate-800 text-yellow-400 border-slate-700" : "bg-white text-slate-800 border-slate-200"
          } shadow-lg hover:scale-110 transition-all duration-300 border`}
          aria-label="Toggle dark mode"
        >
          {dark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </motion.div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0
        }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 p-3 bg-teal-600 text-white rounded-full shadow-lg hover:bg-teal-500 transition-all duration-300"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </motion.button>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative max-w-6xl mx-auto px-6 py-32 md:py-40"
      >
        <div className="text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-sm font-medium mb-4">
              <span className="inline-block w-2 h-2 bg-teal-400 rounded-full mr-2 animate-pulse"></span>
              Available for Internships & Freelance Projects
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Hasaan Ahmad
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl opacity-80 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Computer Science Student | Full-Stack Developer
            <br />
            <span className="text-teal-400 font-semibold">React • AWS • AI/ML</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <a
              href="https://github.com/Hasaan6"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-xl hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 flex items-center gap-2 font-medium"
            >
              <Github size={20} />
              <span>View GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/hasaan-ahmad-13b605334/"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-3 ${
                dark
                  ? "bg-slate-800 border-slate-700 hover:border-teal-500"
                  : "bg-white border-slate-300 hover:border-teal-500"
              } border-2 rounded-xl transition-all duration-300 flex items-center gap-2 font-medium`}
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="/Resume1.pdf"
              download
              className={`px-6 py-3 ${
                dark
                  ? "bg-slate-800 border-slate-700 hover:border-teal-500"
                  : "bg-white border-slate-300 hover:border-teal-500"
              } border-2 rounded-xl transition-all duration-300 flex items-center gap-2 font-medium`}
            >
              <Download size={20} />
              <span>Download Resume</span>
            </a>
          </motion.div>

          {/* Quick Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 text-sm opacity-70"
          >
            <a href="mailto:hasaanahmadn6@gmail.com" className="flex items-center gap-2 hover:text-teal-400 transition-colors">
              <Mail size={16} />
              <span>hasaanahmadn6@gmail.com</span>
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Gujranwala, Pakistan</span>
            </span>
          </motion.div>
        </div>
      </motion.section>

      {/* Achievements Bar */}
      <section className={`border-y ${dark ? "border-slate-800 bg-slate-900/30" : "border-slate-200 bg-white/30"} backdrop-blur-sm`}>
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center gap-2"
              >
                <div className="p-3 bg-teal-500/10 rounded-lg">
                  <achievement.icon className="text-teal-400" size={24} />
                </div>
                <p className="text-sm opacity-80">{achievement.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="space-y-4 text-lg leading-relaxed opacity-90 max-w-4xl">
            <p>
              I'm a passionate Computer Science undergraduate at the <span className="text-teal-400 font-semibold">University of Central Punjab</span>, 
              dedicated to building innovative web applications and AI-powered solutions that solve real-world problems.
            </p>
            <p>
              With hands-on experience in <span className="text-teal-400 font-semibold">React, AWS, and machine learning</span>, 
              I've developed multiple production-ready projects that demonstrate my ability to work with modern technologies 
              and deliver practical, scalable solutions.
            </p>
            <p>
              I'm actively seeking <span className="text-teal-400 font-semibold">internship opportunities</span> and 
              <span className="text-teal-400 font-semibold"> freelance projects</span> where I can contribute my skills, 
              learn from experienced professionals, and make a meaningful impact.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className={`border-y ${dark ? "border-slate-800 bg-slate-900/30" : "border-slate-200 bg-white/30"} backdrop-blur-sm`}>
        <div className="max-w-6xl mx-auto px-6 py-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Technical Expertise
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`${
                  dark ? "bg-slate-800/40 border-slate-700" : "bg-white border-slate-200"
                } border rounded-2xl p-6 hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-teal-500/10 rounded-lg">
                    <skill.icon className="text-teal-400" size={24} />
                  </div>
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-sm opacity-80 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-teal-400 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center opacity-70 mb-12 max-w-2xl mx-auto"
        >
          Real-world applications demonstrating problem-solving skills and technical proficiency
        </motion.p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            title="Image Tampering Detection System"
            desc="AI-powered computer vision system using TensorFlow to detect authentic vs tampered images with a Flask backend for real-time analysis and verification."
            impact="⚡ 90%+ accuracy in detecting image manipulations"
            tech={["TensorFlow", "Python", "Flask", "OpenCV", "Neural Networks"]}
          />
          <ProjectCard
            title="Firebase Automation Tool"
            desc="Serverless automation solution leveraging Firebase Cloud Functions to optimize workflows, reduce manual tasks, and streamline business processes."
            impact="🚀 Reduced processing time by 60%"
            tech={["Firebase", "Cloud Functions", "Node.js", "NoSQL"]}
          />
          <ProjectCard
            title="Electricity Consumption Forecasting"
            desc="Time-series forecasting application using AWS Free Tier services and Streamlit to analyze historical data and predict future electricity usage patterns."
            impact="📊 Helps optimize energy consumption planning"
            tech={["AWS EC2", "Python", "Streamlit", "Pandas", "ML"]}
          />
          <ProjectCard
            title="Truck Dispatch Management System"
            desc="Comprehensive relational database system for managing drivers, vehicles, routes, schedules, and logistics operations with optimized query performance."
            impact="✅ Manages 100+ daily operations efficiently"
            tech={["SQL", "MySQL", "Database Design", "Normalization"]}
          />
        </div>
      </section>

      {/* Currently Learning Section */}
      <section className={`border-y ${dark ? "border-slate-800 bg-slate-900/30" : "border-slate-200 bg-white/30"} backdrop-blur-sm`}>
        <div className="max-w-6xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Continuous Learning
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Advanced AWS Architecture",
                  desc: "Diving deep into AWS services, serverless computing, and cloud-native design patterns"
                },
                {
                  title: "Deep Learning & Neural Networks",
                  desc: "Exploring advanced ML techniques, model optimization, and deployment strategies"
                },
                {
                  title: "Scalable Backend Development",
                  desc: "Building robust APIs, microservices architecture, and performance optimization"
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className={`${
                    dark ? "bg-slate-800/40 border-slate-700" : "bg-white border-slate-200"
                  } border rounded-xl p-6 hover:border-teal-500/50 transition-all duration-300`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-teal-500/10 border border-teal-500/20 rounded-full flex items-center justify-center text-teal-400 font-semibold">
                      {idx + 1}
                    </span>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                  </div>
                  <p className="opacity-80 text-sm leading-relaxed ml-11">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="opacity-80 text-lg max-w-2xl mx-auto">
            Open to internships, freelance projects, and collaboration opportunities. 
            Feel free to reach out for any inquiries!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className={`${
              dark ? "bg-slate-800/40 border-slate-700" : "bg-white border-slate-200"
            } border rounded-2xl p-8 space-y-6`}>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <a
                href="mailto:hasaanahmadn6@gmail.com"
                className="flex items-start gap-4 group cursor-pointer hover:bg-teal-500/5 p-3 rounded-lg transition-colors"
              >
                <div className="p-3 bg-teal-500/10 rounded-lg group-hover:bg-teal-500/20 transition-colors">
                  <Mail className="text-teal-400" size={24} />
                </div>
                <div>
                  <p className="font-medium text-teal-400 mb-1">Email</p>
                  <p className="opacity-80 text-sm break-all">hasaanahmadn6@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+923035696807"
                className="flex items-start gap-4 group cursor-pointer hover:bg-teal-500/5 p-3 rounded-lg transition-colors"
              >
                <div className="p-3 bg-teal-500/10 rounded-lg group-hover:bg-teal-500/20 transition-colors">
                  <Phone className="text-teal-400" size={24} />
                </div>
                <div>
                  <p className="font-medium text-teal-400 mb-1">Phone</p>
                  <p className="opacity-80 text-sm">+92 300 1234567</p>
                  <p className="opacity-60 text-xs mt-1">Available Mon-Sat, 9AM-6PM PKT</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-3">
                <div className="p-3 bg-teal-500/10 rounded-lg">
                  <MapPin className="text-teal-400" size={24} />
                </div>
                <div>
                  <p className="font-medium text-teal-400 mb-1">Location</p>
                  <p className="opacity-80 text-sm">Gujranwala, Pakistan</p>
                  <p className="opacity-60 text-xs mt-1">Open to remote opportunities worldwide</p>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-700">
                <p className="text-sm opacity-70 mb-4">Connect on social media:</p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Hasaan6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-teal-500/10 rounded-lg hover:bg-teal-500/20 transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github className="text-teal-400" size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/hasaan-ahmad-13b605334/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-teal-500/10 rounded-lg hover:bg-teal-500/20 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="text-teal-400" size={20} />
                  </a>
                  <a
                    href="mailto:hasaanahmadn6@gmail.com"
                    className="p-3 bg-teal-500/10 rounded-lg hover:bg-teal-500/20 transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="text-teal-400" size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const name = formData.get('name');
                const email = formData.get('email');
                const message = formData.get('message');
                window.location.href = `mailto:hasaanahmadn6@gmail.com?subject=Portfolio Inquiry from ${name}&body=${message}%0D%0A%0D%0AFrom: ${name}%0D%0AEmail: ${email}`;
              }}
            >  
            
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 opacity-80">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  className={`w-full p-4 rounded-xl border ${
                    dark
                      ? "bg-slate-800/50 border-slate-700 text-white focus:border-teal-500"
                      : "bg-white border-slate-300 text-slate-900 focus:border-teal-500"
                  } focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all`}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 opacity-80">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  className={`w-full p-4 rounded-xl border ${
                    dark
                      ? "bg-slate-800/50 border-slate-700 text-white focus:border-teal-500"
                      : "bg-white border-slate-300 text-slate-900 focus:border-teal-500"
                  } focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all`}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 opacity-80">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or inquiry..."
                  required
                  rows="6"
                  className={`w-full p-4 rounded-xl border ${
                    dark
                      ? "bg-slate-800/50 border-slate-700 text-white focus:border-teal-500"
                      : "bg-white border-slate-300 text-slate-900 focus:border-teal-500"
                  } focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-all resize-none`}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-4 rounded-xl hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 font-semibold flex items-center justify-center gap-2 group"
              >
                <span>Send Message</span>
                <Mail size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-xs text-center opacity-60 mt-4">
                Usually responds within 24 hours
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t ${dark ? "border-slate-800" : "border-slate-200"} py-8`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-60 text-center md:text-left">
              © {new Date().getFullYear()} Hasaan Ahmad. Built with React, Vite & Tailwind CSS.
            </p>
            <div className="flex items-center gap-6 text-sm opacity-60">
              <a href="#" className="hover:text-teal-400 transition-colors">Privacy</a>
              <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
              <a href="/Resume1.pdf" download className="hover:text-teal-400 transition-colors">Resume</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
