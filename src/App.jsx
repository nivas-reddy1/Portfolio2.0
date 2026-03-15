import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ActivitySection from './components/ActivitySection';
import ProjectsSection from './components/ProjectsSection';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white font-sans overflow-x-hidden relative">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-4 md:gap-32 pt-24 pb-12 md:pb-20">
        <HeroSection />
        <ProjectsSection />
        <ActivitySection />
      </main>
      <footer className="w-full py-8 border-t border-white/5 mt-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center text-gray-500 text-sm gap-2">
          <p>© {new Date().getFullYear()} Nivas Reddy.</p>
        </div>
      </footer>

    </div>
  );
}