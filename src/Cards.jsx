import { useState, useEffect } from "react";
import projectsData from "./data/projects.json";

export function RecentProjectCard() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const recentProjects = projectsData
      .sort((a, b) => b.id - a.id)
      .slice(0, 4);
    setProjects(recentProjects);
  }, []);

  return (
    <>
      {projects.map((card) => (
        <div
          key={card.id}
          className="group relative flex flex-col bg-[#1a1a1a] rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 border border-tech card-shadow w-full"
        >
          {/* Image Section - Compact size */}
          <div className="relative h-32 overflow-hidden border-b border-tech">
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              src={card.img}
              alt={card.imgAlt}
            />

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/40 to-transparent opacity-70"></div>

            {/* Project Number Badge - Smaller */}
            <div className="absolute top-2 right-2 px-1.5 py-0.5 glass rounded">
              <span className="text-[10px] font-medium text-[#86868b]">#{card.id}</span>
            </div>
          </div>

          {/* Content Section - Compact padding */}
          <div className="p-3 flex flex-col flex-grow">
            <div className="flex items-center gap-1.5 mb-1.5">
              <div className="w-1 h-1 bg-[#0071e3] rounded-full animate-indicator-pulse"></div>
              <h3 className="text-base font-semibold tracking-tight text-white">
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
    </>
  );
}
