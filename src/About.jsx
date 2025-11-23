import RathozLogo from "./assets/RathozLogo.png"
import { TwitchLiveStatus } from "./components/TwitchLiveStatus"

export const About = () => {
    return(
        <section id="about" className="relative bg-gradient-to-b from-[#1a1a2e] via-[#0f0f1e] to-[#1a1a2e] scroll-mt-16 overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 cyber-grid opacity-20"></div>

            {/* Diagonal Accent Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#a855f7] to-transparent"></div>

            <div className="relative z-10 gap-12 items-center py-16 px-4 mx-auto max-w-7xl xl:gap-20 md:grid md:grid-cols-2 sm:py-24 lg:px-6">
                {/* Image Section with Cyberpunk Effects */}
                <div className="relative group">
                    {/* Glow Background */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#ff006e]/20 via-[#a855f7]/20 to-[#00f5ff]/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Image Container */}
                    <div className="relative rounded-2xl overflow-hidden border-2 border-[#00f5ff]/30 shadow-[0_0_30px_rgba(0,245,255,0.3)]">
                        <img
                            className="w-full transition-transform duration-500 group-hover:scale-110"
                            src={RathozLogo}
                            alt="Rathoz logo"
                        />

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Corner Accents */}
                        <div className="absolute top-0 left-0 w-20 h-20 border-l-4 border-t-4 border-[#ff006e] opacity-50"></div>
                        <div className="absolute bottom-0 right-0 w-20 h-20 border-r-4 border-b-4 border-[#00f5ff] opacity-50"></div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-6 -right-6 w-24 h-24 border border-[#a855f7] rounded-lg rotate-45 opacity-30 group-hover:rotate-90 transition-transform duration-700"></div>
                    <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-[#ff006e]/20 to-transparent rounded-full blur-xl"></div>
                </div>

                {/* Content Section */}
                <div className="mt-8 md:mt-0 space-y-6">
                    {/* Section Header */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-[#a855f7]/20 border border-[#a855f7]/50">
                            <span className="text-xs font-mono text-[#a855f7] uppercase tracking-wider">Level 99 Streamer</span>
                        </div>

                        <h2 className="mb-6 text-4xl md:text-5xl tracking-tight font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] to-[#a855f7] uppercase">
                            About Rathoz
                        </h2>
                    </div>

                    {/* Bio Content */}
                    <div className="space-y-4">
                        <p className="font-mono text-gray-300 md:text-lg leading-relaxed">
                            <span className="text-[#ff006e]">const</span> <span className="text-[#00f5ff]">rathoz</span> <span className="text-gray-400">=</span> <span className="text-[#00ff88]">{'{'}</span>
                        </p>
                        <p className="font-mono text-gray-300 md:text-lg leading-relaxed pl-6">
                            <span className="text-[#a855f7]">name:</span> <span className="text-[#ffff00]">"Mattias"</span>,
                        </p>
                        <p className="font-mono text-gray-300 md:text-lg leading-relaxed pl-6">
                            <span className="text-[#a855f7]">role:</span> <span className="text-[#ffff00]">"Streamer & Developer"</span>,
                        </p>
                        <p className="font-mono text-gray-300 md:text-lg leading-relaxed pl-6">
                            <span className="text-[#a855f7]">life:</span> <span className="text-[#ffff00]">"Father of 4, Fiance"</span>,
                        </p>
                        <p className="font-mono text-gray-300 md:text-lg leading-relaxed pl-6">
                            <span className="text-[#a855f7]">streams:</span> <span className="text-[#ffff00]">["Gaming", "Coding"]</span>,
                        </p>
                        <p className="font-mono text-gray-300 md:text-lg leading-relaxed pl-6">
                            <span className="text-[#a855f7]">schedule:</span> <span className="text-[#ffff00]">"Weekly on Twitch"</span>
                        </p>
                        <p className="font-mono text-gray-300 md:text-lg leading-relaxed">
                            <span className="text-[#00ff88]">{'}'}</span>
                        </p>
                    </div>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-3 pt-4">
                        <span className="px-4 py-2 text-sm font-mono bg-[#ff006e]/20 text-[#ff006e] border border-[#ff006e]/50 rounded-lg">
                            Gaming
                        </span>
                        <span className="px-4 py-2 text-sm font-mono bg-[#00f5ff]/20 text-[#00f5ff] border border-[#00f5ff]/50 rounded-lg">
                            Coding
                        </span>
                        <span className="px-4 py-2 text-sm font-mono bg-[#a855f7]/20 text-[#a855f7] border border-[#a855f7]/50 rounded-lg">
                            Streaming
                        </span>
                        <span className="px-4 py-2 text-sm font-mono bg-[#00ff88]/20 text-[#00ff88] border border-[#00ff88]/50 rounded-lg">
                            Community
                        </span>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                        <TwitchLiveStatus channelName="rathoz" />

                        <a
                            href="https://www.twitch.tv/subs/rathoz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center px-6 py-3 text-base font-bold text-center text-white bg-gradient-to-r from-[#9146ff] to-[#772ce8] rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(145,70,255,0.5)]"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm-1 4v12l10-6-10-6z"/>
                            </svg>
                            Subscribe on Twitch
                            <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff006e] to-transparent"></div>
        </section>
    )
}