import DevForgeLogo from "../assets/DevForgeLogo.png";
import { Link } from 'react-router-dom';
import { AnimatedPage } from '../components/AnimatedPage';

export const HomeView = () => {
  return (
    <AnimatedPage>
      <div className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-20"></div>

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0071e3]/5 via-transparent to-[#00c7be]/5"></div>

      <div className="relative z-10 grid max-w-7xl px-4 py-8 mx-auto lg:gap-12 xl:gap-16 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          {/* Professional Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass border border-tech-accent animate-fade-in">
            <div className="w-1.5 h-1.5 bg-[#0071e3] rounded-full animate-indicator-pulse"></div>
            <span className="text-sm font-medium text-[#86868b] tracking-wide">Developer + Streamer + Gamer</span>
          </div>

          <h1 className="max-w-2xl mb-6 text-5xl font-bold tracking-tight leading-tight md:text-6xl xl:text-7xl text-white animate-fade-in-delay">
            WELCOME TO
            <span className="block text-3xl md:text-4xl xl:text-5xl mt-2 pb-1 bg-gradient-to-r from-[#0071e3] to-[#00c7be] bg-clip-text text-transparent leading-normal">
              DevForge Works
            </span>
          </h1>

          <p className="max-w-2xl mb-8 text-[#86868b] lg:mb-10 md:text-lg lg:text-xl animate-fade-in-delay-2 leading-relaxed">
            Full-stack developer creating innovative solutions. Explore my work, learn about my expertise, and let's build something great together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-left">
            <Link
              to="/projects"
              className="group inline-flex items-center justify-center px-6 py-3 text-base font-medium text-center text-white rounded-lg bg-[#0071e3] transition-all duration-300 hover:bg-[#005bb5] hover:shadow-lg hover:-translate-y-0.5"
            >
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
                View Projects
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </span>
            </Link>

            <Link
              to="/about"
              className="group inline-flex items-center justify-center px-6 py-3 text-base font-medium text-center text-white border border-tech rounded-lg hover:bg-[#1a1a1a] transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                About Me
              </span>
            </Link>
          </div>

          {/* Professional Stats */}
          <div className="mt-12 grid grid-cols-3 gap-4 animate-fade-in-delay-2">
            <div className="p-4 rounded-lg glass border border-tech-accent hover:border-[#0071e3] transition-all duration-300">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">Live</div>
                <div className="text-xs text-[#86868b] mt-1">Streaming</div>
              </div>
            </div>

            <div className="p-4 rounded-lg glass border border-tech-teal hover:border-[#00c7be] transition-all duration-300">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">Code</div>
                <div className="text-xs text-[#86868b] mt-1">Development</div>
              </div>
            </div>

            <div className="p-4 rounded-lg glass border border-tech hover:border-[#86868b] transition-all duration-300">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">Game</div>
                <div className="text-xs text-[#86868b] mt-1">Grind</div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo Section */}
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex lg:items-center lg:justify-center">
          <div className="relative">
            {/* Subtle Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0071e3] to-[#00c7be] opacity-10 blur-3xl"></div>

            {/* Logo Container */}
            <div className="relative w-full max-w-md animate-float">
              <img
                src={DevForgeLogo}
                alt="Rathoz Logo"
                className="w-full drop-shadow-2xl opacity-90"
              />
            </div>

            {/* Minimal Accent Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 border border-tech-accent rounded-lg rotate-12 opacity-30"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 border border-tech-teal rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </div>
    </AnimatedPage>
  );
};
