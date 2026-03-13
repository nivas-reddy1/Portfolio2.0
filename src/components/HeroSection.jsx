import React, { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const scrollRef = useRef(null);
  
  // 1. STATE FOR MODAL
  const [isContactOpen, setIsContactOpen] = useState(false);

  const personalData = {
    name: "Nivas Reddy",
    title: "Full-Stack Developer & AI Engineer",
    bio: "I’m an ECE Major at Shiv Nadar University ('25). I specialize in the MERN stack, FastAPI, with a focus on building autonomous agents using LangGraph, Pinecone and also GUVI certified.",
    imagePath: "/pfp.png",
    links: {
      github: "https://github.com/nivas-reddy1",
      linkedin: "https://www.linkedin.com/in/sai-nivas-reddy-bhoge-828b89277/",
      email: "mailto:bhogesainivas@gmail.com",
      resume: "/nivas_reddy.pdf"
    },
    certificates: [
      { name: "Full Stack Development", issuer: "GUVI", link: "https://www.zenclass.in/certificateDownload/dT5CctA27d89HbWz" },
      { name: "Ambient Agents with LangGraph", issuer: "LangChain Academy", link: "https://academy.langchain.com/certificates/na8tq1pt60" },
      { name: "LangChain for LLM Application Development", issuer: "DeepLearning.AI", link: "https://learn.deeplearning.ai/accomplishments/23a6d6ff-eef6-4e37-8dbd-d2d61474e2d2?usp=sharing" }
    ]
  };

  const languages = ["JavaScript", "Python","SQL", "TypeScript" ];
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
    <>
      <section className="w-full py-12 md:py-20 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-8 bg-[#0D0D0D]">
        
        <div className="flex flex-col gap-10 w-full lg:w-[55%] xl:w-1/2">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 text-center sm:text-left">
            <div className="w-40 h-40 sm:w-48 sm:h-48 shrink-0 rounded-3xl bg-gray-800/50 border border-gray-800 flex items-center justify-center overflow-hidden shadow-[0_0_30px_rgba(139,92,246,0.1)]">
               <img src={personalData.imagePath} alt={personalData.name} className="w-full h-full object-cover" />
            </div>
            
            <div className="flex flex-col justify-center space-y-4 pt-2">
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white">{personalData.name}</h1>
              <h2 className="text-2xl text-gray-400 font-medium">{personalData.title}</h2>
              <div className="w-16 h-1.5 bg-violet-600 rounded mx-auto sm:mx-0 mt-2 mb-2"></div>
              <p className="text-lg text-gray-300 max-w-lg leading-relaxed">{personalData.bio}</p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-wrap justify-center sm:justify-start gap-4 items-center">
              <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                <a href={personalData.links.github} target="_blank" rel="noreferrer" className="px-6 py-2.5 rounded-full border border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors font-medium">GitHub</a>
                <a href={personalData.links.linkedin} target="_blank" rel="noreferrer" className="px-6 py-2.5 rounded-full border border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors font-medium">LinkedIn</a>
                <a href={personalData.links.email} className="px-6 py-2.5 rounded-full border border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white transition-colors font-medium">Contact via Mail</a>
                
                {/* 2. NEW CONTACT FORM BUTTON */}
                <button 
                  onClick={() => setIsContactOpen(true)} 
                  className="px-6 py-2.5 rounded-full border border-violet-500/50 text-violet-300 bg-violet-900/10 hover:bg-violet-600/20 hover:text-white hover:border-violet-500 transition-colors font-medium"
                >
                  Contact Form
                </button>

              </div>
              <div className="hidden sm:block w-px h-8 bg-gray-800 mx-2"></div>
              <a href={personalData.links.resume} target="_blank" rel="noreferrer" className="px-8 py-3 rounded-full bg-violet-600 text-white font-semibold hover:bg-violet-500 shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-all flex items-center justify-center text-lg">Resume</a>
            </div>

            <div className="flex flex-col items-center sm:items-start gap-4">
              <h3 className="text-gray-500 text-sm uppercase tracking-[0.2em] font-bold">Certifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                {personalData.certificates.map((cert, i) => (
                  <a 
                    key={i} 
                    href={cert.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="group flex flex-col p-4 rounded-2xl border border-white/5 bg-white/5 hover:bg-violet-600/10 hover:border-violet-600/50 transition-all duration-300"
                  >
                    <span className="text-violet-400 font-bold text-xs uppercase tracking-wider mb-1">{cert.issuer}</span>
                    <span className="text-white font-medium text-sm group-hover:text-violet-200 transition-colors">{cert.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-[380px] lg:w-[400px] h-[450px] relative flex flex-col items-center lg:items-end">
          <div className="text-white font-extrabold text-5xl mb-4 text-center lg:text-right w-full tracking-tight opacity-90">Skills.</div>
          <div className="relative w-full flex-1 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-[#0D0D0D] to-transparent z-10 pointer-events-none"></div>
            <div ref={scrollRef} className="h-full overflow-y-hidden space-y-8 pb-8 px-2 hide-scrollbar">
              {repeatedContent.map((section, index) => (
                <div key={index} className="flex flex-col lg:items-end">
                  <h3 className="text-violet-400/80 font-semibold text-sm tracking-widest uppercase mb-3 text-center lg:text-right w-full">{sectionTitles[index % 6]}</h3>
                  <div className="flex flex-wrap justify-center lg:justify-end gap-2">
                    {section.map((tech, i) => (
                      <span key={i} className="px-4 py-1.5 border border-violet-500 text-gray-300 text-sm font-medium rounded-full bg-gray-900 transition-all duration-300 hover:scale-110 hover:border-transparent hover:text-white cursor-default shadow-sm hover:shadow-[0_0_10px_rgba(139,92,246,0.2)]">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#0D0D0D] to-transparent z-10 pointer-events-none"></div>
          </div>
        </div>
      </section>

      {isContactOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#111111] border border-white/10 p-6 md:p-8 rounded-3xl w-full max-w-lg relative shadow-2xl">
            
            <button 
              onClick={() => setIsContactOpen(false)} 
              className="absolute top-4 right-4 text-gray-400 hover:text-white cursor-pointer transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <h2 className="text-3xl font-bold text-white mb-2">Get in touch</h2>
            <p className="text-gray-400 mb-6 text-sm">Have a question or want to work together? Drop a message below.</p>

            <form 
              onSubmit={async (event) => {
                event.preventDefault();
                const form = event.target;
                const submitBtn = form.querySelector('button[type="submit"]');
                submitBtn.innerText = "Sending...";
                submitBtn.disabled = true;

                const formData = new FormData(form);
                formData.append("access_key", "5825d3fb-579d-4546-8fd1-3323f2a8b7ca");

                const response = await fetch("https://api.web3forms.com/submit", {
                  method: "POST",
                  body: formData
                });

                const data = await response.json();

                if (data.success) {
                  submitBtn.innerText = "Message Sent!";
                  submitBtn.classList.replace("bg-violet-600", "bg-emerald-500");
                  setTimeout(() => {
                    setIsContactOpen(false);
                    form.reset();
                    submitBtn.innerText = "Send Message";
                    submitBtn.classList.replace("bg-emerald-500", "bg-violet-600");
                    submitBtn.disabled = false;
                  }, 2000);
                } else {
                  submitBtn.innerText = "Error. Try again.";
                  submitBtn.disabled = false;
                }
              }} 
              className="flex flex-col gap-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Nivas Reddy" 
                  className="w-full px-4 py-3 rounded-xl bg-[#0D0D0D] border border-white/5 text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Gmail</label>

                <input 
                  type="email" 
                  name="email"
                  placeholder="bhogesainivas@gmail.com" 
                  className="w-full px-4 py-3 rounded-xl bg-[#0D0D0D] border border-white/5 text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea 
                  name="message"
                  rows="4" 
                  placeholder="What do you want to say?" 
                  className="w-full px-4 py-3 rounded-xl bg-[#0D0D0D] border border-white/5 text-white focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all resize-none"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full mt-2 px-6 py-3 rounded-xl bg-violet-600 text-white font-medium hover:bg-violet-500 shadow-[0_0_15px_rgba(139,92,246,0.2)] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                Send Message
              </button>
            </form>

          </div>
        </div>
      )}
    </>
  );
}