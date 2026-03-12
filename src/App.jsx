import React from 'react';
import HeroSection from "./components/HeroSection";
import ActivitySection from "./components/ActivitySection";
import ProjectsSection from "./components/ProjectsSection";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white font-sans overflow-x-hidden">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-5 md:gap-5 ">
        <HeroSection />
        <ActivitySection />
        <ProjectsSection />
      </main>

      <footer className="w-full py-8 border-t border-white/5 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Nivas Reddy.</p>
        </div>
      </footer>

    </div>
  );
}