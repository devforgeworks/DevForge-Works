import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { TwitchLiveStatus } from './TwitchLiveStatus';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detect scroll for navbar background effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { to: '/projects', label: 'Projects', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
    { to: '/about', label: 'About', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
    { to: '/contact', label: 'Contact', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'glass border-b border-tech'
        : 'bg-transparent'
    }`}>
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <NavLink to="/" className="group flex items-center gap-3 z-10">
            <div className="relative">
              {/* Subtle Glow on Hover */}
              <div className="absolute inset-0 bg-[#0071e3] rounded-lg blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>

              {/* Logo Container */}
              <div className="hidden relative flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-lg border border-tech-accent group-hover:border-[#0071e3] transition-all duration-300">
                <span className="text-2xl font-black text-white">R</span>
              </div>
            </div>

            <div className="hidden">
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-[#0071e3] transition-colors duration-300">
                RATHOZ
              </span>
              <div className="flex items-center gap-2 mt-0.5">
                <div className="w-1.5 h-1.5 bg-[#0071e3] rounded-full animate-indicator-pulse"></div>
                <span className="text-xs font-medium text-[#86868b] uppercase tracking-wider">Developer</span>
              </div>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `group relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                    isActive
                      ? 'text-white bg-[#0071e3]/10 border border-[#0071e3]/40'
                      : 'text-[#86868b] hover:text-white border border-transparent hover:border-tech hover:bg-[#1a1a1a]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {/* Active Indicator */}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#0071e3] rounded-full"></span>
                    )}

                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={link.icon}></path>
                      </svg>
                      {link.label}
                    </span>
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Twitch Live Status (Desktop) */}
          <div className="hidden lg:block">
            <TwitchLiveStatus channelName="rathoz" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-10 p-2 rounded-lg border border-tech-accent bg-[#1a1a1a] hover:border-[#0071e3] transition-all duration-300"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-screen opacity-100 pb-6' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-2 pt-4 border-t border-tech">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `group relative px-4 py-3 rounded-lg font-medium text-sm transition-all duration-300 ${
                    isActive
                      ? 'text-white bg-[#0071e3]/10 border border-[#0071e3]/40'
                      : 'text-[#86868b] hover:text-white border border-transparent hover:border-tech hover:bg-[#1a1a1a]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <span className="absolute top-1/2 -translate-y-1/2 left-2 w-1 h-4 bg-[#0071e3] rounded-full"></span>
                    )}

                    <span className="flex items-center gap-3 pl-3">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={link.icon}></path>
                      </svg>
                      {link.label}
                    </span>
                  </>
                )}
              </NavLink>
            ))}

            {/* Mobile Twitch Status */}
            <div className="mt-4 px-4">
              <TwitchLiveStatus channelName="rathoz" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
