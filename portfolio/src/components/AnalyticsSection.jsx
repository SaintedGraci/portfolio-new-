import React from 'react';
import cebuAnalysis from '../assets/cebu-analysis.png';

const AnalyticsSection = () => {
  const analyticsProjects = [
    {
      title: "Cebu Big 3 Cities Analysis",
      tags: ["Data Analytics", "Excel", "Dashboard", "Financial Analysis"],
      description: "Household income & expenditure analysis across Cebu's major cities: Lapu-Lapu, Mandaue, and Cebu City",
      image: cebuAnalysis,
      color: "border-pink-500",
      github: ["#"], // Add your GitHub link here when you upload the project
      isPlaceholder: false
    }
  ];

  return (
    <section id="analytics" className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-pink-500 font-mono text-sm tracking-widest mb-3">
            // DATA_DRIVEN_INSIGHTS
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-white italic uppercase mb-4">
            Analytics & Business Intelligence
          </h3>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Transforming data into actionable insights through advanced analytics and visualization
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {analyticsProjects.map((project, index) => (
            <div 
              key={index} 
              className="group relative"
            >
              <div className={`relative aspect-[16/10] rounded-3xl overflow-hidden border-2 ${project.color} bg-slate-900 transition-all duration-500 group-hover:shadow-[0_0_30px_-10px_rgba(236,72,153,0.5)]`}>
                {/* Placeholder Content */}
                {project.isPlaceholder ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="mb-6">
                        <svg 
                          className="w-20 h-20 mx-auto text-pink-500/30 animate-pulse" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={1.5} 
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" 
                          />
                        </svg>
                      </div>
                      <h4 className="text-2xl font-black text-white/50 uppercase mb-2">
                        {project.title}
                      </h4>
                      <p className="text-sm text-slate-500">
                        Projects in development
                      </p>
                    </div>
                  </div>
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
                  />
                )}
                
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="text-[10px] font-bold uppercase tracking-widest bg-black/50 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-white/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {!project.isPlaceholder && (
                    <>
                      <h4 className="text-2xl md:text-3xl font-black text-white group-hover:text-pink-500 transition-colors uppercase italic mb-3">
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
                              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-slate-900/80 backdrop-blur-md border border-pink-500/30 hover:border-pink-500 px-3 py-2 rounded-lg text-pink-500 hover:bg-pink-500/10 transition-all duration-300"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                              </svg>
                              Repo
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Additional placeholder cards */}
          <div className="group relative opacity-50">
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border-2 border-dashed border-slate-800 bg-slate-900/30">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <svg 
                    className="w-16 h-16 mx-auto text-slate-700 mb-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.5} 
                      d="M12 4v16m8-8H4" 
                    />
                  </svg>
                  <p className="text-sm text-slate-600 font-mono uppercase tracking-wider">
                    Future Project
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative opacity-30">
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border-2 border-dashed border-slate-800 bg-slate-900/30">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <svg 
                    className="w-16 h-16 mx-auto text-slate-700 mb-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.5} 
                      d="M12 4v16m8-8H4" 
                    />
                  </svg>
                  <p className="text-sm text-slate-600 font-mono uppercase tracking-wider">
                    Future Project
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 font-mono text-sm">
            💡 This section will showcase data analysis, business intelligence dashboards, and predictive analytics projects
          </p>
        </div>
      </div>
    </section>
  );
};

export default AnalyticsSection;
