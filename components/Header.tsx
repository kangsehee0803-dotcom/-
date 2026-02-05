
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isCinematicMode, setIsCinematicMode] = useState(false);

  const navItems = [
    { label: 'DASHBOARD', id: 'home' },
    { label: 'UNIVERSE', id: 'universe' },
    { label: 'TEAM NEBULA', id: 'members' },
    { label: 'PROTOCOLS', id: 'protocols' },
    { label: 'OPS LOG', id: 'logs' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen || isCinematicMode) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen, isCinematicMode]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[100] bg-deepbase/90 backdrop-blur-md border-b border-darkteal/30 transition-all duration-500 ${isCinematicMode ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-5 group">
            {/* Tactical Nebula Core Insignia - Activates Cinematic Mode */}
            <div 
              className="relative w-12 h-12 flex items-center justify-center transition-all group-hover:scale-110 active:scale-95 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setIsCinematicMode(true);
              }}
              title="Activate Cinematic Neural Feed"
            >
              {/* Outer Hex Frame */}
              <svg viewBox="0 0 100 100" className="absolute w-full h-full fill-none stroke-mint/20 stroke-[2px] transition-all group-hover:stroke-mint/50 group-hover:rotate-90 duration-700">
                <polygon points="50,3 93,25 93,75 50,97 7,75 7,25" />
              </svg>
              {/* Inner "N" Core Symbol */}
              <svg viewBox="0 0 100 100" className="w-8 h-8 fill-mint transition-all group-hover:drop-shadow-[0_0_12px_#00f2ff]">
                <path d="M25 25 L35 25 L75 75 L65 75 Z" />
                <path d="M25 25 L35 25 L35 75 L25 75 Z" />
                <path d="M65 25 L75 25 L75 75 L65 75 Z" />
                <rect x="45" y="45" width="10" height="10" className="fill-nebula animate-pulse" />
              </svg>
              {/* Decorative Brackets */}
              <div className="absolute inset-0 border border-nebula/30 scale-125 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-sm"></div>
            </div>
            
            <div className="flex flex-col cursor-pointer" onClick={() => handleNavClick('home')}>
              <span className="font-mono font-black tracking-tighter text-xl hologram-text uppercase leading-none text-offwhite">
                EREBOS <span className="text-mint/40">//</span> NEBULA
              </span>
              <div className="flex items-center space-x-2 mt-1">
                <span className="w-1.5 h-1.5 bg-mint rounded-full animate-pulse shadow-[0_0_5px_#00f2ff]"></span>
                <span className="font-mono text-[9px] text-mint tracking-[0.4em] uppercase opacity-80 font-bold">Tactical Command Node</span>
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-mono text-xs tracking-[0.2em] transition-all hover:text-mint group relative py-2 ${
                  activeSection === item.id ? 'text-mint font-black' : 'text-offwhite/40'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                <span className={`absolute bottom-0 left-0 h-[2px] bg-mint transition-all duration-300 ${activeSection === item.id ? 'w-full shadow-[0_0_10px_#00f2ff]' : 'w-0 group-hover:w-full'}`}></span>
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-6">
            <div className="hidden lg:block text-right border-l border-darkteal/50 pl-6">
              <p className="text-[9px] text-nebula font-mono leading-none tracking-widest uppercase font-bold">Node Status</p>
              <p className="text-[10px] text-mint font-mono leading-none uppercase mt-1 font-black">CONNECTED // ALPHA</p>
            </div>
            
            <button 
              className="md:hidden text-mint z-[110] p-2 hover:bg-mint/10 transition-colors relative"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg viewBox="0 0 100 100" className="w-8 h-8 fill-mint">
                  <rect x="10" y="25" width="80" height="4" />
                  <rect x="10" y="48" width="80" height="4" />
                  <rect x="10" y="71" width="80" height="4" />
                  <rect x="10" y="25" width="4" height="50" className="opacity-40" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay - 보라색 배경을 불투명하게 조정하여 글씨 가독성 개선 */}
        <div className={`fixed inset-0 h-screen w-screen bg-[#0d0221] z-[105] flex flex-col items-center justify-center transition-all duration-500 md:hidden ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(112,0,255,0.3)_0%,_transparent_85%)]"></div>
          
          <nav className="flex flex-col items-center space-y-10 w-full px-12 relative z-10">
            <div 
              className="mb-8 relative cursor-pointer group"
              onClick={() => {
                setIsMenuOpen(false);
                setIsCinematicMode(true);
              }}
            >
              <svg viewBox="0 0 100 100" className="w-24 h-24 fill-mint/10 stroke-mint/60 stroke-[1px] group-hover:stroke-mint animate-[spin_20s_linear_infinite]">
                <polygon points="50,3 93,25 93,75 50,97 7,75 7,25" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                 <span className="font-mono text-3xl font-black text-mint hologram-text">N</span>
              </div>
            </div>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`font-mono text-2xl tracking-[0.4em] transition-all w-full text-center py-4 active:text-mint ${
                  activeSection === item.id 
                    ? 'text-mint font-black drop-shadow-[0_0_20px_#00f2ff] scale-110' 
                    : 'text-offwhite/80 hover:text-offwhite'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="mt-12 w-full max-w-[200px] h-[1px] bg-gradient-to-r from-transparent via-mint/40 to-transparent"></div>
            <p className="text-[10px] text-mint font-mono tracking-[0.5em] uppercase font-bold opacity-70">Nebula Alpha Access Required</p>
          </nav>
        </div>
      </header>

      {/* Cinematic Neural View - Zen Mode */}
      <div 
        className={`fixed inset-0 z-[200] bg-deepbase flex items-center justify-center transition-all duration-1000 cursor-pointer overflow-hidden ${isCinematicMode ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsCinematicMode(false)}
      >
        {/* Full Screen Visual Feed */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.postimg.cc/vT6XSMkM/jemog-eul-iblyeoghaejuseyo-(67).png" 
            alt="NEBULA Neural Feed" 
            className={`w-full h-full object-cover transition-transform duration-[10s] ease-out ${isCinematicMode ? 'scale-105' : 'scale-125'}`}
          />
          {/* Subtle Dynamic Overlays for a "Live Feed" feel */}
          <div className="absolute inset-0 bg-gradient-to-t from-deepbase/80 via-transparent to-deepbase/40"></div>
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          
          {/* Scanning Line Effect */}
          <div className="absolute top-0 left-0 w-full h-1 bg-mint/10 blur-sm animate-[scan_6s_linear_infinite] pointer-events-none"></div>
        </div>

        {/* Minimalist HUD - only shown in Cinematic Mode */}
        <div className={`absolute inset-0 p-10 flex flex-col justify-between transition-opacity duration-1000 delay-500 ${isCinematicMode ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex justify-between items-start">
            <div className="space-y-1">
               <div className="flex items-center space-x-3">
                 <div className="w-2 h-2 bg-mint rounded-full animate-ping"></div>
                 <span className="font-mono text-xs text-mint font-black tracking-[0.4em] uppercase">NEURAL LINK ACTIVE</span>
               </div>
               <p className="font-mono text-[10px] text-offwhite/40 tracking-widest uppercase ml-5">Argos Visual Synchronized</p>
            </div>
            <div className="text-right font-mono">
               <p className="text-[10px] text-nebula font-bold tracking-[0.4em] uppercase">Clearance: ALPHA</p>
               <p className="text-[10px] text-offwhite/20 mt-1">REC // 00:42:12</p>
            </div>
          </div>

          <div className="flex justify-between items-end">
             <div className="max-w-xs space-y-4">
                <div className="w-12 h-px bg-mint animate-pulse"></div>
                <p className="font-mono text-[9px] text-mint/40 leading-relaxed uppercase tracking-widest">
                  본 인터페이스는 보안 등급 레벨 5 이상의 대원에게만 허용됩니다. <br/>
                  모든 시각 데이터는 실시간으로 TCC에 기록됩니다.
                </p>
             </div>
             <div className="flex flex-col items-end">
                <p className="font-mono text-[9px] text-mint/60 uppercase tracking-[0.6em] animate-pulse">Click anywhere to return to dashboard</p>
             </div>
          </div>
        </div>

        {/* Global Scanlines Overlay for the "Screen" feel */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 4px, 3px 100%' }}></div>
      </div>

      <style>{`
        @keyframes scan {
          from { top: -5%; }
          to { top: 105%; }
        }
      `}</style>
    </>
  );
};

export default Header;
