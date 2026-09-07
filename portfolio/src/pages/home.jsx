import React from 'react';
import Header from '../components/header.jsx';
import Section2 from '../components/section2.jsx';
import Section3 from '../components/section3.jsx';
import AnalyticsSection from '../components/AnalyticsSection.jsx';
import profImage from '../assets/prof.jpg'; 

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-lime-400 selection:text-slate-950 scroll-smooth">
      <Header />

      <main>
        {/* --- SECTION 1: HERO --- */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
          
          {/* Neon Background Ambience */}
          <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-lime-400 rounded-full mix-blend-screen filter blur-[150px] opacity-[0.07] animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-pink-500 rounded-full mix-blend-screen filter blur-[150px] opacity-[0.07] animate-pulse transition-delay-2000"></div>

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
              
              {/* LEFT SIDE: Typography */}
              <div className="w-full lg:w-3/5 order-2 lg:order-1 text-center lg:text-left">
                <div className="inline-block mb-6 px-4 py-1 rounded-full border border-lime-400/30 bg-lime-400/5">
                   <span className="text-lime-400 font-mono text-xs uppercase tracking-[0.3em]">
                    // Innovation Engine Active
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-6xl xl:text-7xl font-black tracking-tight mb-8 leading-[1.1]">
                  Breaking complex <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-pink-500 to-pink-600">
                    problems into elegant,
                  </span> <br className="hidden md:block" />
                  scalable code.
                </h1>

                <p className="text-base md:text-lg text-slate-400 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium italic">
                  "I thrive in the space where logic meets raw creativity. My goal is to push the boundaries of the web, turning static layouts into living, breathing digital products."
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                  <a href="#projects" className="px-8 py-4 bg-lime-400 text-slate-950 rounded-xl font-bold uppercase text-sm tracking-widest hover:translate-y-[-4px] transition-all duration-300 shadow-[0_10px_20px_rgba(163,230,53,0.3)]">
                    View Projects
                  </a>
                  <a href="#contact" className="px-8 py-4 border border-slate-700 hover:border-pink-500 text-white rounded-xl font-bold uppercase text-sm tracking-widest hover:bg-pink-500/5 transition-all duration-300">
                    Get In Touch
                  </a>
                </div>
              </div>

              {/* RIGHT SIDE: Profile Image */}
              <div className="w-full max-w-[450px] lg:w-2/5 order-1 lg:order-2">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-lime-400 to-pink-600 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-700"></div>
                  
                  <div className="relative aspect-[4/5] w-full bg-slate-900 rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                    <img 
                      src={profImage} 
                      alt="Profile"
                      className="w-full h-full object-cover grayscale hover:grayscale-0 scale-105 hover:scale-100 transition-all duration-700 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60"></div>
                  </div>

                  <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-lime-400 opacity-50"></div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-pink-500 opacity-50"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: PROJECT CAROUSEL --- */}
        <Section2 />

        {/* --- ANALYTICS SECTION: DATA & BUSINESS INTELLIGENCE --- */}
        <AnalyticsSection />

        {/* --- SECTION 3: TECH STACK GRID --- */}
        <Section3 />

        {/* --- FOOTER / CONTACT SECTION --- */}
        <footer id="contact" className="py-24 border-t border-slate-900 bg-slate-950">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h4 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tighter">
                Let's build something <span className="text-lime-400 italic">insane.</span>
              </h4>
              <p className="text-slate-400 mb-10 text-lg">
                Have a project in mind? Let's connect and create something amazing together.
              </p>

              {/* Contact Methods */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
                {/* Email */}
                <a 
                  href="mailto:vinnylucci01@gmail.com" 
                  className="group flex items-center gap-3 px-8 py-4 bg-slate-900 border border-slate-800 hover:border-lime-400 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(163,230,53,0.3)] min-w-[280px]"
                >
                  <svg className="w-6 h-6 text-lime-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span className="text-slate-300 group-hover:text-lime-400 font-mono text-sm transition-colors">
                    vinnylucci01@gmail.com
                  </span>
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/john-marvin-salazar-896a29434" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-8 py-4 bg-slate-900 border border-slate-800 hover:border-pink-500 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] min-w-[280px]"
                >
                  <svg className="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span className="text-slate-300 group-hover:text-pink-500 font-mono text-sm transition-colors">
                    LinkedIn Profile
                  </span>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-6 mb-12">
                <a 
                  href="https://github.com/SaintedGraci" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-800 hover:border-lime-400 text-slate-400 hover:text-lime-400 transition-all duration-300 hover:shadow-[0_0_15px_rgba(163,230,53,0.3)]"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>

              <div className="opacity-50">
                <p className="text-slate-500 font-mono text-xs tracking-[0.3em] uppercase">
                  Designed & Built by <span className="text-white">Saintedgraci</span> — 2026
                </p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Home;