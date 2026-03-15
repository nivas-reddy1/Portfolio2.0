import React, { useEffect, useRef } from "react";

export default function HeroSection() {
  const scrollRef = useRef(null);

  const personalData = {
    name: "Nivas Reddy",
    title: "Full-Stack Developer & AI Engineer",
    bio: "I’m an ECE Major at Shiv Nadar University ('25). I specialize in the MERN stack, FastAPI, with a focus on building autonomous agents using LangGraph, Pinecone and also GUVI certified.",
    imagePath: "/pfp.png",
  };

  const languages = ["JavaScript", "Python", "SQL", "TypeScript"];
  const databases = ["PostgreSQL", "MongoDB"];
  const webTechnologies = ["React.js", "Node.js", "Express.js", "WebRTC", "WebSocket", "Tailwind CSS", "FastAPI"];
  const tools = ["Git", "GitHub", "Docker"];
  const genAI = ["LangGraph", "LangChain", "AI Agents", "RAG", "Gemini API", "Pinecone", "Prompts"];
  const softSkills = ["Problem Solving", "Systemic Thinking", "Adaptability", "Collaboration", "Technical Writing"];

  const sectionTitles = ["Languages", "Databases", "Web Technologies", "Tools", "AI Engineering", "Soft Skills"];
  const repeatedContent = [...Array(2)].flatMap(() => [languages, databases, webTechnologies, tools, genAI, softSkills]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    let animationId;
    const scrollSpeed = 0.5;
    const scroll = () => {
      if (container.scrollTop >= container.scrollHeight / 2) { container.scrollTop = 0; }
      else { container.scrollTop += scrollSpeed; }
      animationId = requestAnimationFrame(scroll);
    };
    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section id="about" className="w-full pt-4 pb-12 md:pt-8 md:pb-1 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-8 bg-[#0D0D0D]">
      
      <div className="flex flex-col gap-10 w-full lg:w-[55%] xl:w-[60%]">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10 text-center md:text-left">
          
          {/* APPLIED GLOW: Added the border-2 border-violet-400 and the heavier shadow glow here */}
          <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 shrink-0 rounded-3xl bg-[#0D0D0D] border-3 border-violet-400 flex items-center justify-center overflow-hidden shadow-[0_0_30px_rgba(139,92,246,0.5)]">
             <img src={personalData.imagePath} alt={personalData.name} className="w-full h-full object-cover" />
          </div>
          
          <div className="flex flex-col justify-center space-y-5 pt-2 md:pt-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white">{personalData.name}</h1>
            <h2 className="text-2xl lg:text-3xl text-gray-400 font-medium">{personalData.title}</h2>
            
            {/* APPLIED GLOW: Made the divider line glow too */}
            <div className="w-16 h-1.5 bg-violet-400 shadow-[0_0_15px_rgba(139,92,246,0.5)] rounded mx-auto md:mx-0 mt-2 mb-2"></div>
            
            <p className="text-lg lg:text-xl text-gray-300 max-w-lg leading-relaxed">{personalData.bio}</p>
          </div>

        </div>
      </div>

      <div className="w-full sm:w-[380px] lg:w-[400px] h-[450px] lg:h-[500px] relative flex flex-col items-center lg:items-end">
        <div className="text-white font-extrabold text-5xl lg:text-6xl mb-6 text-center lg:text-right w-full tracking-tight opacity-90">Skills.</div>
        <div className="relative w-full flex-1 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-[#0D0D0D] to-transparent z-10 pointer-events-none"></div>
          <div ref={scrollRef} className="h-full overflow-y-hidden space-y-8 pb-8 px-2 hide-scrollbar">
            {repeatedContent.map((section, index) => (
              <div key={index} className="flex flex-col lg:items-end">
                <h3 className="text-violet-400 font-bold text-sm tracking-widest uppercase mb-3 text-center lg:text-right w-full">{sectionTitles[index % 6]}</h3>
                <div className="flex flex-wrap justify-center lg:justify-end gap-2">
                  {section.map((tech, i) => (
                    // APPLIED GLOW: Matched the hover state to the certificate cards
                    <span 
                      key={i} 
                      className="px-4 py-1.5 border-2 border-violet-400 text-gray-300 text-sm font-medium rounded-full bg-[#0D0D0D] transition-all duration-300 hover:scale-110 hover:border-violet-400 hover:text-white cursor-default shadow-sm hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#0D0D0D] to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}