import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectsSection() {
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      title: "Video Chat",
      description: "A real-time communication platform engineered with WebRTC and Socket.IO supporting multi-peer video streaming, screen sharing, and dynamic participant state synchronization.",
      techStack: ["React.js", "WebRTC", "Socket.io", "Node.js", "Express.js"],
      githubFrontend: "https://github.com/nivas-reddy1/Frontend-for-Video-Chat",
      githubBackend: "https://github.com/nivas-reddy1/Backend-for-Video-Chat", 
      websiteLink: "https://videochat-two.vercel.app",
      desktopImg: "/videochat1.png", 
      mobileImg: "/videochat2.png"
    },
    {
      title: "Food Delivery Platform",
      description: "A full-stack multi-vendor food delivery platform featuring real-time order tracking, and a comprehensive dashboard for restaurants and customers.",
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Oauth 2.0", "Redux Toolkit", "RazorPay", "REST APIs"],
      githubFrontend: "https://github.com/nivas-reddy1/food-delivery-frontend",
      githubBackend: "https://github.com/nivas-reddy1/food-delivery-backend", 
      websiteLink: "https://giggidy123.netlify.app",
      desktopImg: "/food1.png",
      mobileImg: "/food2.png"
    },
    {
      title: "Password Reset Flow",
      description: "This project demonstrates a complete, secure user authentication journey with a specific focus on the Password Reset functionality.",
      techStack: ["Mongodb", "Express.js", "React.js", "Node.js", "Axios", "JWT's", "Nodemailer", "Bcrypt", "Nodemailer"],
      githubFrontend: "https://github.com/nivas-reddy1/password-reset-client",
      githubBackend: "https://github.com/nivas-reddy1/password-reset", 
      websiteLink: "https://password-reset123.netlify.app",
      desktopImg: "/reset1.png",
      mobileImg: "/reset2.png"
    },
    {
      title: "Gmail Agent",
      description: "An autonomous LangGraph-powered agent that streamlines email triaging and calendar management via Gmail and Google Calendar APIs, achieving a high-performance 3-5 second latency (Please patience to popup signin page as it is not free to deploy backend that runs alltime).",
      techStack: ["React.js", "LangGraph", "Python", "FastAPI", "AI Agents", "Gmail API", "Google Calendar API", "Gemini API"],
      githubFrontend: "https://github.com/nivas-reddy1/Gmail-Assistant-FE2",
      githubBackend: "https://github.com/nivas-reddy1/Gmail-Assistant-BE", 
      websiteLink: "https://gmail-assistant-qqw9.vercel.app",
      desktopImg: "/agent1.png",
      mobileImg: "/agent2.png"
    },
    {
      title: "Github RAG",
      description: "A full-stack application leveraging Google Gemini and Pinecone to enable context-aware code analysis and multi-turn conversations across GitHub repositories.",
      techStack: ["React.js", "Pinecone", "FastAPI", "LangChain", "Python", "Gemini API"],
      githubFrontend: "https://github.com/nivas-reddy1/Git-Rag-FE",
      githubBackend: "https://github.com/nivas-reddy1/Git-Rag-BE",
      websiteLink: "https://githubrag.vercel.app",
      desktopImg: "/gitrag1.png",
      mobileImg: "/gitrag2.png"
    },

    {
      title: "Notes App",
      description: "Developed a notes management application using React JS that allows users to create, organize, and manage notes with tagging, filtering, and data persistence using localStorage.",
      techStack: ["React.js", "JavaScript", "Tailwind CSS", "LocalStorage"],
      githubFrontend: "https://github.com/nivas-reddy1/Notes-App",
      githubBackend: null,
      websiteLink: "https://notes125.netlify.app",
      desktopImg: "/Notesapp1.png",
      mobileImg: "/Notesapp2.png"
    },
    {
      title: "Movie Review",
      description: "Built a movie review application using React JS that allows users to search and filter movies, view detailed information modal/popup, and provide star-based ratings using the TMDB API.",
      techStack: ["React", "TMDB API", "CSS", "JavaScript"],
      githubFrontend: "https://github.com/nivas-reddy1/Movie-Review1",
      githubBackend: null,
      websiteLink: "https://moviehub121.netlify.app",
      desktopImg: "/review1.png",
      mobileImg: "/review2.png"
    },
  ];

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollLeft = container.scrollLeft;
      const isMobile = window.innerWidth < 768;
      const itemStride = isMobile ? 344 : 880;
      
      const newIndex = Math.round(scrollLeft / itemStride);
      
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < projects.length) {
        setActiveIndex(newIndex);
      }
    }
  };

  const activeProject = projects[activeIndex];

  return (
    <section className="w-full py-20 bg-[#0D0D0D] flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="mb-8 md:mb-12 text-center pointer-events-none z-20 flex flex-col items-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Projects.
          </motion.h2>
          <div className="w-12 h-1 bg-violet-600 rounded mt-3 mb-2"></div>
        </div>

        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="w-full flex overflow-x-auto gap-6 md:gap-10 pb-8 pt-4 snap-x snap-mandatory items-center z-10 no-scrollbar relative" 
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
          }}
        >
          <style>{`
            .no-scrollbar {
              padding-left: max(24px, calc(50vw - 160px));
              padding-right: max(24px, calc(50vw - 160px));
            }
            @media (min-width: 768px) {
              .no-scrollbar {
                padding-left: calc(50vw - 420px) !important;
                padding-right: calc(50vw - 420px) !important;
              }
            }
          `}</style>

          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              className="snap-center shrink-0 origin-center transition-all duration-500 ease-out"
              animate={{
                scale: idx === activeIndex ? 1 : 0.9,
                opacity: idx === activeIndex ? 1 : 0.4,
                filter: idx === activeIndex ? "blur(0px)" : "blur(3px)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className={`relative w-[320px] h-[700px] md:w-[840px] md:h-[480px] rounded-3xl overflow-hidden bg-[#111111] border transition-all duration-500 ease-in-out shadow-2xl ${idx === activeIndex ? 'border-violet-500/50 shadow-[0_0_40px_rgba(139,92,246,0.2)]' : 'border-white/5'}`}>
                <img 
                  src={project.mobileImg} 
                  alt={`${project.title} mobile`} 
                  className="block md:hidden absolute inset-0 w-full h-full object-cover"
                />
                <img 
                  src={project.desktopImg} 
                  alt={`${project.title} desktop`} 
                  className="hidden md:block absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/80 to-transparent opacity-60" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="w-full max-w-4xl px-6 md:px-12 mt-6 min-h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center text-center md:items-start md:text-left"
            >
              <div className="flex items-center gap-4 mb-3">
                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                  {activeProject.title}
                </h3>
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
              </div>

              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 max-w-3xl">
                {activeProject.description}
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
                {activeProject.techStack.map((tech, i) => (
                  <span key={i} className="px-3 py-1 text-xs md:text-sm font-medium text-violet-300 bg-violet-900/20 border border-violet-500/20 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 w-full">
                
                <a 
                  href={activeProject.websiteLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-6 py-2.5 rounded-xl bg-violet-600 text-white font-medium hover:bg-violet-500 shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-all flex items-center gap-2"
                >
                  <span>Live Demo</span> <ExternalLinkIcon />
                </a>

                {activeProject.githubFrontend && (
                  <a 
                    href={activeProject.githubFrontend} 
                    target="_blank" 
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2"
                  >
                    <GithubIcon /> <span>Frontend</span>
                  </a>
                )}

                {activeProject.githubBackend && (
                  <a 
                    href={activeProject.githubBackend} 
                    target="_blank" 
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2"
                  >
                    <GithubIcon /> <span>Backend</span>
                  </a>
                )}
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

const GithubIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
);
const ExternalLinkIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);