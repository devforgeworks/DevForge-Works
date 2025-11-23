import { RecentProjectCard } from "./Cards"

export const Projects = () => {
    return(
        <section id="projects" className="relative bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1e] scroll-mt-16 overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 cyber-grid opacity-20"></div>

            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00f5ff] to-transparent"></div>

            {/* Floating Geometric Shapes */}
            <div className="absolute top-40 right-20 w-32 h-32 border-2 border-[#ff006e]/30 rounded-lg rotate-45 opacity-20"></div>
            <div className="absolute bottom-40 left-20 w-24 h-24 border-2 border-[#00f5ff]/30 rounded-full opacity-20"></div>

            <div className="relative z-10 py-16 px-4 mx-auto max-w-7xl lg:py-24 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center mb-12 lg:mb-16">
                    {/* Section Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-[#00f5ff]/20 to-[#a855f7]/20 border border-[#00f5ff]/50">
                        <svg className="w-4 h-4 text-[#00f5ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                        </svg>
                        <span className="text-sm font-mono text-[#00f5ff] uppercase tracking-wider">Portfolio</span>
                    </div>

                    <h2 className="mb-6 text-4xl md:text-5xl tracking-tight font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ff006e] via-[#a855f7] to-[#00f5ff] uppercase">
                        Recent Projects
                    </h2>

                    <p className="font-mono text-gray-400 sm:text-lg">
                        <span className="text-[#00ff88]">//</span> Showcasing my latest builds and creations
                    </p>
                </div>

                <div className="grid gap-8 mb-12 lg:mb-16 md:grid-cols-2">
                    <RecentProjectCard />
                </div>

                <div className="flex justify-center">
                    <a
                        href="/all-projects"
                        className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-center text-[#00f5ff] border-2 border-[#00f5ff] rounded-lg hover:bg-[#00f5ff]/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,245,255,0.5)] overflow-hidden"
                    >
                        <span className="relative flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                            </svg>
                            View All Projects
                            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </span>
                    </a>
                </div>
            </div>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#a855f7] to-transparent"></div>
        </section>
    )
}