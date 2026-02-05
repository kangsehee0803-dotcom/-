
import React from 'react';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
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
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden bg-deepbase">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.postimg.cc/vT6XSMkM/jemog-eul-iblyeoghaejuseyo-(67).png" 
          alt="NEBULA Core Background" 
          className="w-full h-full object-cover opacity-100 brightness-[0.5] saturate-[1.2]"
        />
        
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-deepbase/70 via-darkteal/20 to-deepbase/90"></div>
        
        {/* Nebula Fog Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(112,0,255,0.15)_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_rgba(0,242,255,0.1)_0%,_transparent_50%)]"></div>
        
        {/* Tactical Grid */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-overlay" 
             style={{ backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 242, 255, .1) 25%, rgba(0, 242, 255, .1) 26%, transparent 27%, transparent 74%, rgba(0, 242, 255, .1) 75%, rgba(0, 242, 255, .1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 242, 255, .1) 25%, rgba(0, 242, 255, .1) 26%, transparent 27%, transparent 74%, rgba(0, 242, 255, .1) 75%, rgba(0, 242, 255, .1) 76%, transparent 77%, transparent)', backgroundSize: '60px 60px' }}>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center max-w-7xl w-full px-6 py-20">
        {/* Tactical Frame Elements */}
        <div className="absolute top-10 left-10 w-24 h-24 border-t border-l border-mint/20 hidden md:block"></div>
        <div className="absolute top-10 right-10 w-24 h-24 border-t border-r border-mint/20 hidden md:block"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 border-b border-l border-mint/20 hidden md:block"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border-b border-r border-mint/20 hidden md:block"></div>

        {/* Header Badge */}
        <div className="mb-12 inline-flex items-center space-x-3 px-5 py-2 bg-darkteal/40 border border-nebula/40 animate-in fade-in slide-in-from-top-4 duration-1000 backdrop-blur-md rounded-full">
          <span className="w-2 h-2 bg-mint rounded-full animate-pulse shadow-[0_0_12px_#00f2ff]"></span>
          <span className="font-mono text-[10px] text-offwhite tracking-[0.4em] uppercase font-bold">
            NEBULA LINK STATUS: SYNCHRONIZED
          </span>
        </div>

        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-6xl md:text-9xl font-bold px-6 leading-[0.85] tracking-tighter uppercase">
            <span className="hologram-text block text-offwhite drop-shadow-[0_0_20px_rgba(0,242,255,0.3)]">EREBOS</span>
            <span className="text-mint relative">
              NEBULA
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-nebula via-mint to-nebula opacity-50 blur-[2px]"></div>
            </span>
          </h1>
          
          <div className="flex flex-col items-center">
            <p className="max-w-3xl text-offwhite text-base md:text-xl font-medium px-8 leading-relaxed tracking-wider mt-12 bg-deepbase/60 backdrop-blur-md py-6 border-x-2 border-nebula/30 shadow-2xl rounded-sm">
              상위 1%를 위한 초국적 PMC <span className="font-bold text-mint">EREBOS</span> 소속<br className="hidden md:block" />
              최정예 전술팀 <span className="font-mono font-bold text-nebula tracking-normal text-glow">[NEBULA]</span>의 공식 기밀 데이터베이스.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-10 mt-20 w-full max-w-xl justify-center animate-in fade-in zoom-in-95 duration-1000 delay-300">
          <button 
            onClick={() => scrollTo('universe')}
            className="group relative px-12 py-5 bg-mint text-deepbase font-black transition-all hover:tracking-[0.5em] active:scale-95 overflow-hidden text-sm uppercase tracking-[0.3em] shadow-[0_0_40px_rgba(0,242,255,0.4)]"
          >
            <span className="relative z-10">세계관 입장</span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
          </button>
          
          <button 
            onClick={() => scrollTo('members')}
            className="group px-12 py-5 tactical-border text-offwhite font-bold transition-all hover:bg-nebula/20 active:scale-95 text-sm uppercase tracking-[0.3em] border-nebula/40"
          >
            <span className="group-hover:tracking-[0.5em] transition-all">요원 프로필</span>
          </button>
        </div>

        {/* Tech Decorative Elements */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-32 hidden lg:flex flex-col items-center space-y-4 font-mono">
            <div className="w-px h-24 bg-gradient-to-b from-transparent via-nebula/60 to-mint animate-pulse"></div>
            <div className="text-[9px] text-nebula tracking-[1em] uppercase font-bold">Deep Space Protocol Ready</div>
        </div>
      </div>
      
      {/* Redesigned Scroll Anchor */}
      <div 
        onClick={() => scrollTo('universe')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer flex flex-col items-center group z-20"
      >
        <div className="w-6 h-10 border-2 border-nebula/40 rounded-full flex justify-center p-1 transition-all group-hover:border-mint group-hover:shadow-[0_0_15px_rgba(0,242,255,0.4)]">
          <div className="w-1 h-2 bg-mint rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
