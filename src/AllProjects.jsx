import { useState, useEffect } from "react";
import projectsData from "./data/projects.json";

export const AllProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const sortedProjects = projectsData.sort((a, b) => b.id - a.id);
    setProjects(sortedProjects);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#000000] to-[#0a0a0a]">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-10"></div>

      {/* Minimal Accent Elements */}
      <div className="absolute top-20 right-10 w-24 h-24 border border-tech-accent rounded-lg rotate-12 opacity-20"></div>
      <div className="absolute bottom-20 left-10 w-20 h-20 border border-tech-teal rounded-full opacity-20"></div>

      <div className="relative z-10 py-16 px-4 mx-auto max-w-7xl lg:py-24 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-12 lg:mb-16">
          {/* Section Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass border border-tech-accent animate-fade-in">
            <svg className="w-4 h-4 text-[#0071e3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
            </svg>
            <span className="text-sm font-medium text-[#86868b] tracking-wide">Full Portfolio</span>
          </div>

          <h1 className="mb-6 text-4xl md:text-5xl tracking-tight font-bold text-white animate-fade-in-delay">
            All Projects
          </h1>
          <p className="text-[#86868b] sm:text-lg mb-8 animate-fade-in-delay-2">
            Browse through my complete portfolio of work
          </p>
          <a
            href="/"
            className="group inline-flex items-center justify-center px-6 py-3 text-base font-medium text-center text-white border border-tech rounded-lg hover:bg-[#1a1a1a] transition-all duration-300 hover:-translate-y-0.5 animate-slide-in-left"
          >
            <svg className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Home
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 animate-fade-in-delay-2">
          {projects.map((card) => (
            <div
              key={card.id}
              className="group relative flex flex-col bg-[#1a1a1a] rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 border border-tech card-shadow"
            >
              {/* Image Section - Compact */}
              <div className="relative h-32 overflow-hidden border-b border-tech">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={card.img}
                  alt={card.imgAlt}
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent opacity-70"></div>

                {/* Project Number Badge */}
                <div className="absolute top-2 right-2 px-1.5 py-0.5 glass rounded">
                  <span className="text-[10px] font-medium text-[#86868b]">#{card.id}</span>
                </div>
              </div>

              {/* Content Section - Compact */}
              <div className="p-3 flex flex-col flex-grow">
                <div className="flex items-center gap-1.5 mb-1.5">
                  <div className="w-1 h-1 bg-[#0071e3] rounded-full animate-indicator-pulse"></div>
                  <h3 className="text-base font-semibold tracking-tight text-white line-clamp-1">
                    {card.title}
                  </h3>
                </div>

                <p className="text-[#86868b] text-xs mb-3 flex-grow leading-relaxed line-clamp-2">
                  {card.description}
                </p>

                {/* Action Buttons - Compact */}
                <div className="flex gap-2">
                  <a
                    href={card.liveUrl}
                    className="flex-1 inline-flex items-center justify-center gap-1 px-2.5 py-1.5 text-[10px] font-medium text-white bg-[#0071e3] rounded-md transition-all duration-300 hover:bg-[#005bb5] hover:shadow-md"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                    Live
                  </a>
                  <a
                    href={card.repoUrl}
                    className="flex-1 inline-flex items-center justify-center gap-1 px-2.5 py-1.5 text-[10px] font-medium text-[#86868b] bg-transparent border border-tech rounded-md hover:text-white hover:border-[#86868b] transition-all duration-300"
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
