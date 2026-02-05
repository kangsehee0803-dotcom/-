
import React, { useState } from 'react';
import { TEAM_MEMBERS } from '../constants';
import { CharacterProfile } from '../types';

const HeartbeatGraph: React.FC = () => {
  return (
    <div className="relative w-full h-12 overflow-hidden bg-deepbase/50 border border-mint/20 rounded-sm">
      <svg
        viewBox="0 0 200 40"
        className="w-full h-full stroke-mint fill-none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 20 L20 20 L25 15 L30 20 L40 20 L45 5 L50 35 L55 20 L70 20 L75 12 L80 20 L100 20 L120 20 L125 15 L130 20 L140 20 L145 5 L150 35 L155 20 L170 20 L175 12 L180 20 L200 20"
          strokeWidth="2"
          className="animate-ekg"
        />
        <path
          d="M0 20 L20 20 L25 15 L30 20 L40 20 L45 5 L50 35 L55 20 L70 20 L75 12 L80 20 L100 20 L120 20 L125 15 L130 20 L140 20 L145 5 L150 35 L155 20 L170 20 L175 12 L180 20 L200 20"
          strokeWidth="4"
          className="animate-ekg opacity-30 blur-[4px]"
        />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-r from-deepbase via-transparent to-deepbase opacity-50 pointer-events-none"></div>
      
      <style>{`
        @keyframes ekg {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ekg {
          animation: ekg 3s linear infinite;
          stroke-dasharray: 200;
        }
      `}</style>
    </div>
  );
};

const MemberProfiles: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<CharacterProfile | null>(null);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="mb-16 border-l-4 border-nebula pl-6">
        <h2 className="text-3xl font-bold tracking-tight uppercase hologram-text text-offwhite">Operative Profiles</h2>
        <p className="text-mint/60 font-sans text-xs mt-2 tracking-[0.3em] uppercase font-bold">대원 프로필 // MEMBER DOSSIER</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {TEAM_MEMBERS.map((member) => (
          <div 
            key={member.id}
            onClick={() => setSelectedMember(member)}
            className={`group relative tactical-border transition-all cursor-pointer overflow-hidden bg-darkteal/20 ${
              selectedMember?.id === member.id ? 'border-mint shadow-[0_0_30px_rgba(0,242,255,0.3)]' : 'border-mint/10 hover:border-mint/50 hover:bg-darkteal/40'
            }`}
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img 
                src={member.imageUrl} 
                alt={member.codeName}
                className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deepbase via-transparent to-transparent opacity-90"></div>
              
              <div className="absolute bottom-4 left-4 z-10">
                <p className="text-mint font-mono text-[9px] mb-1 uppercase tracking-widest font-bold drop-shadow-md">{member.position}</p>
                <h3 className="text-2xl font-black tracking-tighter uppercase text-offwhite group-hover:text-mint transition-colors">[{member.codeName}]</h3>
              </div>
            </div>
            {/* Visual Scan Detail */}
            <div className={`absolute top-0 right-0 p-2 font-mono text-[8px] transition-opacity ${selectedMember?.id === member.id ? 'opacity-100' : 'opacity-0'}`}>
               <span className="text-mint animate-pulse font-bold">● BIO-SYNCHRONIZED</span>
            </div>
          </div>
        ))}
      </div>

      {selectedMember ? (
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-12 bg-darkteal/10 border border-nebula/30 p-8 md:p-12 animate-in fade-in zoom-in-95 duration-700 relative backdrop-blur-xl shadow-[0_0_60px_rgba(0,0,0,0.5)] rounded-lg">
          <button 
            onClick={() => setSelectedMember(null)}
            className="absolute top-6 right-6 text-mint/30 hover:text-mint transition-colors p-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="space-y-8">
            <div className="border-b border-nebula/20 pb-8">
              <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-2 uppercase text-mint hologram-text">
                {selectedMember.codeName}
              </h3>
              <p className="text-mint/70 font-bold font-mono uppercase tracking-[0.2em] text-sm">{selectedMember.realName}</p>
              <p className="text-nebula text-[10px] font-mono mt-4 uppercase tracking-widest font-black">{selectedMember.nationality}</p>
              <p className="text-mint/40 text-[10px] font-mono mt-1 uppercase tracking-widest font-bold">POSITION // {selectedMember.position}</p>
            </div>

            <div className="p-6 border-l-2 border-mint bg-mint/5 italic text-mint text-sm leading-relaxed font-medium shadow-inner">
              "{selectedMember.keyPhrase}"
            </div>

            <div className="grid grid-cols-2 gap-y-8 gap-x-4 text-xs">
              <div>
                <p className="text-mint/40 font-mono text-[9px] uppercase tracking-widest mb-1 font-bold">STATUS // 상태</p>
                <p className="text-mint font-black uppercase text-[11px] shadow-mint">Active / Nebula-01</p>
              </div>
              <div>
                <p className="text-mint/40 font-mono text-[9px] uppercase tracking-widest mb-1 font-bold">MBTI // 성향</p>
                <p className="text-mint font-bold">{selectedMember.mbti}</p>
              </div>
              <div>
                <p className="text-mint/40 font-mono text-[9px] uppercase tracking-widest mb-1 font-bold">AGE // 나이</p>
                <p className="text-mint font-bold">{selectedMember.age}</p>
              </div>
              <div>
                <p className="text-mint/40 font-mono text-[9px] uppercase tracking-widest mb-1 font-bold">BODY // 신체</p>
                <p className="text-mint font-bold">{selectedMember.height} / {selectedMember.weight}</p>
              </div>
            </div>
          </div>

          <div className="space-y-10 lg:border-x lg:border-nebula/20 lg:px-12">
            <div>
              <h4 className="font-mono text-[10px] text-mint mb-4 uppercase tracking-[0.4em] font-black underline decoration-nebula/40 underline-offset-4">DOSSIER // 배경</h4>
              <p className="text-mint/80 leading-relaxed text-[13px] font-medium">
                {selectedMember.description}
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="font-mono text-[10px] text-mint/40 mb-4 uppercase tracking-[0.4em] font-bold">VISUAL // 외형</h4>
                <ul className="text-mint/70 text-[12px] space-y-3 font-medium">
                  {selectedMember.appearance.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-nebula mr-2 font-black">»</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h4 className="font-mono text-[10px] text-mint mb-4 uppercase tracking-[0.4em] font-black underline decoration-nebula/40 underline-offset-4">HISTORY // 이력</h4>
              <ul className="text-mint/70 text-[12px] space-y-3 font-medium">
                {selectedMember.past.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-mint mr-2 font-black">»</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-[10px] text-mint/40 mb-4 uppercase tracking-[0.4em] font-bold">TRAITS // 특성</h4>
              <div className="flex flex-wrap gap-2">
                {selectedMember.traits.map((item, i) => (
                  <span key={i} className="px-3 py-1.5 bg-mint/10 text-mint text-[10px] border border-mint/30 uppercase tracking-widest font-black rounded-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-nebula/20">
              <div className="flex justify-between items-center mb-4">
                <p className="font-mono text-[9px] text-mint/40 uppercase tracking-widest font-bold">Argos Bio-Stream</p>
                <div className="flex items-center space-x-2">
                   <div className="w-1.5 h-1.5 bg-mint rounded-full animate-pulse shadow-[0_0_8px_#00f2ff]"></div>
                   <p className="font-mono text-[9px] text-mint uppercase tracking-widest font-bold">Link: Secure</p>
                </div>
              </div>
              <HeartbeatGraph />
              <div className="mt-4 flex justify-between font-mono text-[10px] text-mint/60 font-bold">
                <span className="text-mint">BPM: 72</span>
                <span className="text-nebula">STRESS: LOW</span>
                <span className="text-mint">NEBULA-ID: OK</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 border border-dashed border-nebula/30 rounded-lg group hover:border-mint/40 transition-all cursor-default bg-darkteal/5">
          {/* New Tactical Empty State Icon */}
          <div className="relative mb-8 group-hover:scale-110 transition-transform duration-500">
            <svg viewBox="0 0 100 100" className="w-20 h-20 fill-none stroke-mint/20 stroke-[1px] group-hover:stroke-mint/40 transition-colors">
               <polygon points="50,5 95,27 95,73 50,95 5,73 5,27" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-8 h-8 fill-mint/20 group-hover:fill-mint/40 transition-colors">
                <path d="M25 25 L35 25 L75 75 L65 75 Z" />
                <path d="M25 25 L35 25 L35 75 L25 75 Z" />
                <path d="M65 25 L75 25 L75 75 L65 75 Z" />
              </svg>
            </div>
          </div>
          <div className="text-center space-y-2">
            <p className="text-mint/40 font-mono uppercase text-xs tracking-[0.5em] animate-pulse font-bold">
              Accessing Nebula Central Node...
            </p>
            <p className="text-nebula/50 text-[11px] font-bold tracking-widest uppercase">
              대원을 선택하여 기밀 파일을 해제하십시오 // SELECT AN OPERATIVE
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemberProfiles;