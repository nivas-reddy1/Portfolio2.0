import React, { useState } from 'react';

export default function Navbar() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCertOpen, setIsCertOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const certificates = [
    { name: "Full Stack Development", issuer: "GUVI", link: "https://www.zenclass.in/certificateDownload/dT5CctA27d89HbWz" },
    { name: "Ambient Agents with LangGraph", issuer: "LangChain Academy", link: "https://academy.langchain.com/certificates/na8tq1pt60" },
    { name: "LangChain for LLM Application Development", issuer: "DeepLearning.AI", link: "https://learn.deeplearning.ai/accomplishments/23a6d6ff-eef6-4e37-8dbd-d2d61474e2d2?usp=sharing" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false); 
  };

  const handleModalOpen = (setModalState) => {
    setModalState(true);
    setIsMobileMenuOpen(false); 
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0D0D0D] border-b border-white/10 h-20 flex items-center justify-center shadow-2xl">
        <div className="w-full max-w-7xl mx-auto px-6 flex justify-between md:justify-center items-center">
          <button onClick={scrollToTop} className="md:hidden text-white font-extrabold tracking-widest text-xl">
            NR<span className="text-violet-500">.</span>
          </button>

          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            <button onClick={scrollToTop} className="text-violet-400 hover:text-gray-300 cursor-pointer font-bold transition-colors tracking-wide uppercase text-sm">
              About Me
            </button>
            
            <a href="/nivas_reddy.pdf" target="_blank" rel="noreferrer" className="text-violet-400 hover:text-gray-300 font-bold transition-colors tracking-wide uppercase text-sm">
              Resume
            </a>

            <button onClick={() => setIsCertOpen(true)} className="text-violet-400 hover:text-gray-300 cursor-pointer font-bold transition-colors tracking-wide uppercase text-sm">
              Certificates
            </button>

            <button onClick={() => setIsContactOpen(true)} className="px-5 py-2 rounded-full border border-violet-400 text-violet-400 hover:text-white hover:bg-violet-900/20 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] cursor-pointer transition-all font-bold text-sm tracking-wide uppercase">
              Contact Form
            </button>

            <div className="w-px h-8 bg-gray-800 mx-2"></div>

            <div className="flex items-center gap-5">
              <a href="mailto:bhogesainivas@gmail.com" title="Contact Mail" className="text-gray-400 hover:text-violet-400 transition-colors drop-shadow-sm hover:drop-shadow-[0_0_10px_rgba(139,92,246,0.4)]">
                <svg className="w-6 h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </a>
              
              <a href="https://github.com/nivas-reddy1" target="_blank" rel="noreferrer" title="GitHub" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6 lg:w-7 lg:h-7" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
              </a>
              
              <a href="https://www.linkedin.com/in/sai-nivas-reddy-bhoge-828b89277/" target="_blank" rel="noreferrer" title="LinkedIn" className="text-gray-400 hover:text-[#0A66C2] transition-colors">
                <svg className="w-6 h-6 lg:w-7 lg:h-7" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path></svg>
              </a>
            </div>
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="md:hidden text-gray-300 hover:text-violet-400 transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>

        <div className={`md:hidden absolute top-20 left-0 w-full bg-[#0D0D0D] border-b border-white/10 flex flex-col items-center py-8 gap-6 shadow-2xl transition-all duration-300 origin-top ${isMobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
          <button onClick={scrollToTop} className="text-violet-400 hover:text-white cursor-pointer font-bold tracking-widest uppercase text-lg">
            About Me
          </button>
          <a href="/nivas_reddy.pdf" target="_blank" rel="noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="text-violet-400 hover:text-white font-bold tracking-widest uppercase text-lg">
            Resume
          </a>
          <button onClick={() => handleModalOpen(setIsCertOpen)} className="text-violet-400 hover:text-white cursor-pointer font-bold tracking-widest uppercase text-lg">
            Certificates
          </button>
          
          <button onClick={() => handleModalOpen(setIsContactOpen)} className="mt-2 px-8 py-3 rounded-full border-2 border-violet-400 text-violet-400 hover:text-white hover:bg-violet-900/20 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] cursor-pointer transition-all font-bold tracking-widest uppercase">
            Contact Form
          </button>

          <div className="w-16 h-px bg-gray-800 my-2"></div>

          <div className="flex items-center gap-8">
            <a href="mailto:bhogesainivas@gmail.com" className="text-gray-400 hover:text-violet-400 transition-colors">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </a>
            <a href="https://github.com/nivas-reddy1" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/sai-nivas-reddy-bhoge-828b89277/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-[#0A66C2] transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path></svg>
            </a>
          </div>
        </div>
      </nav>

      {isContactOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80">
          <div className="bg-[#111111] border-2 border-violet-400 shadow-[0_0_20px_rgba(139,92,246,0.3)] p-6 md:p-8 rounded-3xl w-full max-w-lg relative">
            <button onClick={() => setIsContactOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors cursor-pointer">
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
                const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
                const data = await response.json();
                if (data.success) {
                  submitBtn.innerText = "Message Sent!";
                  submitBtn.classList.replace("bg-violet-600", "bg-emerald-500");
                  submitBtn.classList.replace("shadow-[0_0_20px_rgba(139,92,246,0.3)]", "shadow-[0_0_20px_rgba(16,185,129,0.3)]");
                  setTimeout(() => {
                    setIsContactOpen(false);
                    form.reset();
                    submitBtn.innerText = "Send Message";
                    submitBtn.classList.replace("bg-emerald-500", "bg-violet-600");
                    submitBtn.classList.replace("shadow-[0_0_20px_rgba(16,185,129,0.3)]", "shadow-[0_0_20px_rgba(139,92,246,0.3)]");
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
                <input type="text" name="name" placeholder="Nivas Reddy" className="w-full px-4 py-3 rounded-xl bg-[#0D0D0D] border-2 border-violet-500/30 text-white focus:outline-none focus:border-violet-400 focus:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Gmail</label>
                <input type="email" name="email" placeholder="bhogesainivas@gmail.com" className="w-full px-4 py-3 rounded-xl bg-[#0D0D0D] border-2 border-violet-500/30 text-white focus:outline-none focus:border-violet-400 focus:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea name="message" rows="4" placeholder="What do you want to say?" className="w-full px-4 py-3 rounded-xl bg-[#0D0D0D] border-2 border-violet-500/30 text-white focus:outline-none focus:border-violet-400 focus:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300 resize-none" required></textarea>
              </div>
              <button type="submit" className="w-full mt-2 px-6 py-3 rounded-xl bg-violet-600 text-white font-medium hover:bg-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer">Send Message</button>
            </form>
          </div>
        </div>
      )}

      {isCertOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80">
          <div className="bg-[#111111] border-2 border-violet-400 shadow-[0_0_20px_rgba(139,92,246,0.3)] p-6 md:p-8 rounded-3xl w-full max-w-2xl relative">
            <button onClick={() => setIsCertOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors cursor-pointer">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <h2 className="text-3xl font-bold text-white mb-2">My Certifications</h2>
            <p className="text-gray-400 mb-8 text-sm">Official credentials verifying my expertise in Full-Stack and AI Engineering.</p>
            <div className="flex flex-col gap-4">
              {certificates.map((cert, i) => (
                <a key={i} href={cert.link} target="_blank" rel="noreferrer" className="group flex flex-col md:flex-row md:items-center justify-between p-5 rounded-2xl border-2 border-violet-500/30 bg-[#0D0D0D] hover:border-violet-400 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-300">
                  <div className="flex flex-col">
                    <span className="text-violet-400 font-bold text-xs uppercase tracking-widest mb-1">{cert.issuer}</span>
                    <span className="text-white font-medium text-lg group-hover:text-violet-200 transition-colors">{cert.name}</span>
                  </div>
                  <div className="mt-4 md:mt-0 flex items-center gap-2 text-gray-500 group-hover:text-violet-400 transition-colors text-sm font-medium">
                    View Credential 
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}