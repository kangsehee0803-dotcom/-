
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MemberProfiles from './components/MemberProfiles';
import WorldBuilding from './components/WorldBuilding';
import TacticalProtocols from './components/TacticalProtocols';
import OperationalLogs from './components/OperationalLogs';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-deepbase font-mono text-mint p-6 overflow-hidden">
        {/* Animated Nebula background for loader */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_#7000ff_0%,_transparent_50%)] animate-pulse"></div>
        </div>
        
        <div className="relative mb-12 flex items-center justify-center scale-150">
           {/* New Tactical Spinner */}
           <svg viewBox="0 0 100 100" className="w-24 h-24 stroke-mint/20 stroke-[2px] fill-none animate-[spin_4s_linear_infinite]">
             <polygon points="50,3 93,25 93,75 50,97 7,75 7,25" />
           </svg>
           <div className="absolute inset-0 flex items-center justify-center">
             <svg viewBox="0 0 100 100" className="w-10 h-10 fill-mint drop-shadow-[0_0_15px_#00f2ff]">
                <path d="M25 25 L35 25 L75 75 L65 75 Z" />
                <path d="M25 25 L35 25 L35 75 L25 75 Z" />
                <path d="M65 25 L75 25 L75 75 L65 75 Z" />
             </svg>
           </div>
           <div className="absolute -inset-4 border border-mint/10 rounded-full animate-ping opacity-20"></div>
        </div>

        <div className="mb-4 text-sm md:text-base font-bold tracking-[0.5em] animate-pulse text-center uppercase text-offwhite">
          Erebos OS v.2017.09.14 // NEBULA SYNCING...
        </div>
        <div className="w-full max-w-xs h-[2px] bg-darkteal overflow-hidden relative">
          <div className="h-full bg-mint shadow-[0_0_10px_#00f2ff] animate-[loading_2s_ease-in-out]"></div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-2 text-[9px] text-mint/40 uppercase tracking-widest text-center font-bold">
          <p>Initializing Raffles Place TCC Uplink...</p>
          <p>Syncing Argos Biometric Feed [Team Nebula]...</p>
          <p>Decrypting Classified Operational Data...</p>
        </div>
        <style>{`
          @keyframes loading {
            0% { width: 0%; }
            100% { width: 100%; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen selection:bg-mint/30 scroll-smooth bg-deepbase">
      <div className="scanline"></div>
      
      <Header />
      
      <main className="pt-16">
        <section id="home">
          <Hero />
        </section>

        <div className="max-w-7xl mx-auto">
          {/* 섹션 간의 수직 간격을 더 줄임 (py-6 -> py-4) */}
          <section id="universe" className="py-4 px-6 md:px-12 border-t border-darkteal/50">
            <WorldBuilding />
          </section>
          
          <section id="members" className="py-4 px-6 md:px-12 border-t border-darkteal/50">
            <MemberProfiles />
          </section>

          <section id="protocols" className="py-4 px-6 md:px-12 border-t border-darkteal/50">
            <TacticalProtocols />
          </section>
          
          <section id="logs" className="py-4 px-6 md:px-12 border-t border-darkteal/50">
            <OperationalLogs />
          </section>
        </div>
      </main>

      <Footer />

      {/* Global Background Glows - Nebula Palette */}
      <div className="fixed -z-20 top-0 right-0 w-[1000px] h-[1000px] bg-nebula/10 blur-[180px] rounded-full"></div>
      <div className="fixed -z-20 bottom-0 left-0 w-[800px] h-[800px] bg-mint/5 blur-[150px] rounded-full"></div>
      <div className="fixed -z-10 inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,_transparent_0%,_#020205_80%)]"></div>
    </div>
  );
};

export default App;
