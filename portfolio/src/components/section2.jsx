import React, { useState } from 'react';
import barangayImage from '../assets/barangay.png';
import recipe from '../assets/recipe.png';
import resta from '../assets/resta.avif';
import catering from '../assets/catering-02.jpg';
import traffisight from '../assets/traffisightai.jpg';
const Section2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Barangay Smart System",
      tags: ["React", "Node.js", "Mysql", "Tailwind"],
      image: barangayImage,
      color: "border-lime-400",
      github: [
        "https://github.com/SaintedGraci/BARANGAY-SMART-SYSTEM-CLIENT.git",
        "https://github.com/SaintedGraci/BARANGAY-BAKILID-SERVER.git"
      ]
    },
    {
      title: "SMART Recipe App",
      tags: ["React", "Node.js", "Mysql", "Tailwind", "API"],
      image: recipe,
      color: "border-pink-500",
      github: ["https://github.com/SaintedGraci/Recipe-Finder-Web.git"]
    },
    {
      title: "Aling Dadai Restaurant",
      tags: ["Laravel", "PHP", "Mysql", "Bootstrap", "tailwind"],
      image: resta,
      color: "border-lime-400",
      github: ["https://github.com/SaintedGraci/RestaurantSystem.git"]
    },
    {
      title: "Catering Smart System",
      tags: ["React", "Node.js", "Mysql", "Tailwind"],
      image: catering,
      color: "border-pink-500",
      github: [
        "https://github.com/SaintedGraci/catering-ui.git",
        "https://github.com/SaintedGraci/Catering-Server.git"
      ]
    },
    {
      title: "TraffiSight",
      tags: ["Python", "AI", "Computer Vision", "YOLOv8", "OpenCV"],
      image: traffisight,
      color: "border-lime-400",
      github: ["https://github.com/SaintedGraci/TraffiSight.git"],
      description: "AI-powered traffic violation detection system"
    }
  ];

  const nextSlide = () => {
    // Limits the index so you don't scroll into empty space
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section id="projects" className="py-24 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h2 className="text-lime-400 font-mono text-sm tracking-widest mb-2">// SELECTED_WORKS</h2>
            <h3 className="text-4xl md:text-5xl font-black text-white italic uppercase">Project Repository</h3>
          </div>
          
          <div className="flex gap-4">
            <button onClick={prevSlide} className="p-4 border border-slate-700 rounded-full hover:border-lime-400 text-white transition-all active:scale-90">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button onClick={nextSlide} className="p-4 border border-slate-700 rounded-full hover:border-pink-500 text-white transition-all active:scale-90">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        {/* Outer container to hide overflow */}
        <div className="relative">
          <div 
            className="flex transition-transform duration-500 ease-out gap-6"
            // FIX: On mobile it moves 100%, on desktop we move by the card width percentage
            style={{ transform: `translateX(-${currentIndex * (window.innerWidth < 768 ? 100 : 33.33)}%)` }}
          >
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="min-w-full md:min-w-[48%] lg:min-w-[31%] group"
              >
                <div className={`relative aspect-[16/10] rounded-3xl overflow-hidden border-2 ${project.color} bg-slate-800 transition-all duration-500 group-hover:shadow-[0_0_30px_-10px_rgba(163,230,53,0.5)]`}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
                  />
                  
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-bold uppercase tracking-widest bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-white/90">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h4 className="text-2xl md:text-3xl font-black text-white group-hover:text-lime-400 transition-colors uppercase italic mb-3">
                      {project.title}
                    </h4>
                    {project.description && (
                      <p className="text-sm text-slate-400 mb-3 font-medium">
                        {project.description}
                      </p>
                    )}
                    {project.github && (
                      <div className="flex flex-wrap gap-2">
                        {project.github.map((link, idx) => (
                          <a 
                            key={idx}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-slate-900/80 backdrop-blur-md border border-lime-400/30 hover:border-lime-400 px-3 py-2 rounded-lg text-lime-400 hover:bg-lime-400/10 transition-all duration-300"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            {project.github.length > 1 ? (idx === 0 ? 'Client' : 'Server') : 'Repo'}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;