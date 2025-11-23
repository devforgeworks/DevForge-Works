import { RecentProjectCard } from "../Cards";
import { Link } from 'react-router-dom';
import { AnimatedPage } from '../components/AnimatedPage';

export const ProjectsView = () => {
  return (
    <AnimatedPage>
      <div className="relative min-h-[calc(100vh-80px)] py-16 px-4 mx-auto max-w-7xl lg:py-24 lg:px-6">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-10"></div>

      {/* Minimal Accent Elements */}
      <div className="absolute top-40 right-20 w-24 h-24 border border-tech-accent rounded-lg rotate-12 opacity-20"></div>
      <div className="absolute bottom-40 left-20 w-20 h-20 border border-tech-teal rounded-full opacity-20"></div>

      <div className="relative z-10">
        <div className="mx-auto max-w-screen-sm text-center mb-12 lg:mb-16">
          {/* Section Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass border border-tech-accent animate-fade-in">
            <svg className="w-4 h-4 text-[#0071e3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
            </svg>
            <span className="text-sm font-medium text-[#86868b] tracking-wide">Portfolio</span>
          </div>

          <h2 className="mb-6 text-4xl md:text-5xl tracking-tight font-bold text-white animate-fade-in-delay">
            Recent Projects
          </h2>

          <p className="text-[#86868b] sm:text-lg animate-fade-in-delay-2">
            Showcasing my latest work and technical solutions
          </p>
        </div>

        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 mb-12 lg:mb-16 md:grid-cols-2 animate-fade-in-delay-2">
            <RecentProjectCard />
          </div>
        </div>

        <div className="flex justify-center animate-slide-in-left">
          <Link
            to="/all-projects"
            className="group inline-flex items-center justify-center px-6 py-3 text-base font-medium text-center text-white border border-tech rounded-lg hover:bg-[#1a1a1a] transition-all duration-300 hover:-translate-y-0.5"
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
              View All Projects
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
    </AnimatedPage>
  );
};
