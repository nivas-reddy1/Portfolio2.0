import React from 'react';

export default function ActivitySection() {
  const githubUsername = "nivas-reddy1"; 
  const themeColor = "8B5CF6"; 

  return (
    <section className="w-full py-16 md:py-5 flex flex-col items-center justify-center bg-[#0D0D0D]">
      <div className="mb-12 text-center flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Github Calendar.
        </h2>
        <div className="w-12 h-1 bg-violet-600 rounded mt-3 mb-4"></div>
        <p className="text-gray-400 text-sm uppercase tracking-widest">
          Consistency over the last year
        </p>
      </div>

      <div className="w-full max-w-5xl overflow-x-auto pb-4 hide-scrollbar flex justify-center">
        <div className="min-w-[800px] w-full px-4 flex justify-center opacity-80 hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_0_15px_rgba(139,92,246,0.1)]">
          <img 
            src={`https://ghchart.rshah.org/${themeColor}/${githubUsername}`} 
            alt={`${githubUsername}'s GitHub Contribution Chart`} 
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>
      
      <div className="mt-8 text-violet-400/60 text-sm flex gap-4">
        <span>Pushing code</span>
      </div>

    </section>
  );
}