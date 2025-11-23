import DevForgeLogo from "./assets/DevForgeLogo.png"

export const Hero = () => {
    return(
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1e] to-[#1a1a2e]">
            {/* Cyberpunk Grid Background */}
            <div className="absolute inset-0 cyber-grid opacity-30"></div>

            {/* Animated Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff006e]/10 via-transparent to-[#00f5ff]/10"></div>

            {/* Scanline Effect */}
            <div className="absolute inset-0 scanline-overlay"></div>

            {/* Geometric Accent Lines */}
            <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00f5ff] to-transparent opacity-50"></div>
            <div className="absolute bottom-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#ff006e] to-transparent opacity-50"></div>

            <div className="relative z-10 grid max-w-7xl px-4 py-8 mx-auto lg:gap-12 xl:gap-16 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    {/* Gaming/Streaming Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-[#ff006e]/20 to-[#a855f7]/20 border border-[#ff006e]/50 animate-fade-in">
                        <div className="w-2 h-2 bg-[#00ff88] rounded-full animate-neon-pulse"></div>
                        <span className="text-sm font-mono text-[#00f5ff] uppercase tracking-wider">Streamer + Developer</span>
                    </div>

                    <h1 className="max-w-2xl mb-6 text-5xl font-black tracking-tight leading-tight md:text-6xl xl:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] via-[#a855f7] to-[#ff006e] animate-fade-in-delay uppercase">
                        RATHOZ
                        <span className="block text-3xl md:text-4xl xl:text-5xl mt-2 text-glow-cyan">
                            Gaming / Coding / Streaming
                        </span>
                    </h1>

                    <p className="max-w-2xl mb-8 font-mono text-gray-300 lg:mb-10 md:text-lg lg:text-xl animate-fade-in-delay-2 leading-relaxed">
                        <span className="text-[#00ff88]">&gt;_</span> Welcome to my digital domain. Level up your code, watch epic streams, and join the community.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-left">
                        <a
                            href="#projects"
                            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-center text-white rounded-lg bg-gradient-to-r from-[#ff006e] to-[#a855f7] transition-all duration-300 hover:scale-105 overflow-hidden"
                        >
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#a855f7] to-[#00f5ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            <span className="relative flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                </svg>
                                View Projects
                                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </span>
                        </a>

                        <a
                            href="#about"
                            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-center text-[#00f5ff] border-2 border-[#00f5ff] rounded-lg hover:bg-[#00f5ff]/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,245,255,0.5)]"
                        >
                            <span className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                </svg>
                                About Me
                            </span>
                        </a>
                    </div>

                    {/* Quick Stats */}
                    <div className="mt-12 grid grid-cols-3 gap-6 animate-fade-in-delay-2">
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-black text-glow-pink">LIVE</div>
                            <div className="text-xs text-gray-400 font-mono mt-1">Streaming</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-black text-glow-cyan">CODE</div>
                            <div className="text-xs text-gray-400 font-mono mt-1">Development</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-black text-glow-purple">GAME</div>
                            <div className="text-xs text-gray-400 font-mono mt-1">Entertainment</div>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex lg:items-center lg:justify-center">
                    <div className="relative">
                        {/* Neon Glow Ring */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ff006e] via-[#a855f7] to-[#00f5ff] opacity-50 blur-3xl animate-neon-pulse"></div>

                        {/* Logo Container */}
                        <div className="relative w-full max-w-md animate-float">
                            <img
                                src={DevForgeLogo}
                                alt="Rathoz Logo"
                                className="w-full drop-shadow-2xl"
                            />
                        </div>

                        {/* Orbiting Elements */}
                        <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-[#00f5ff] rounded-lg rotate-12 animate-spin-slow opacity-50"></div>
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-[#ff006e] rounded-full animate-pulse opacity-50"></div>
                    </div>
                </div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a1a2e] to-transparent"></div>
        </section>
    )
}