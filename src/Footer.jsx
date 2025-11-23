export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-gradient-to-b from-[#0a0a0a] to-[#000000] overflow-hidden border-t border-tech">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 tech-grid opacity-10"></div>

            {/* Minimal Accent Elements */}
            <div className="absolute top-10 right-20 w-32 h-32 border border-tech-accent rounded-lg rotate-12 opacity-10"></div>
            <div className="absolute bottom-10 left-20 w-24 h-24 border border-tech-teal rounded-full opacity-10"></div>

            <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 lg:py-16">
                <div className="md:flex md:justify-between md:items-start gap-12">
                    {/* Brand Section */}
                    <div className="mb-8 md:mb-0 max-w-sm">
                        <a href="#" className="flex items-center group mb-4">
                            <span className="self-center text-2xl font-bold whitespace-nowrap text-white group-hover:text-[#0071e3] transition-colors duration-300">
                                RATHOZ
                            </span>
                        </a>
                        <p className="text-sm text-[#86868b] leading-relaxed mb-4">
                            Full-stack developer and content creator. Building digital experiences and streaming the journey.
                        </p>
                        <div className="flex gap-2">
                            <span className="px-3 py-1 text-xs font-medium bg-[#0071e3]/10 text-[#0071e3] border border-[#0071e3]/30 rounded-md">
                                Developer
                            </span>
                            <span className="px-3 py-1 text-xs font-medium bg-[#00c7be]/10 text-[#00c7be] border border-[#00c7be]/30 rounded-md">
                                Streamer
                            </span>
                            <span className="px-3 py-1 text-xs font-medium bg-[#c70000]/10 text-[#c70000] border border-[#c70000]/30 rounded-md">
                                Gamer
                            </span>
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="grid grid-cols-2 gap-8 sm:gap-12 sm:grid-cols-3">
                        {/* Navigation */}
                        <div>
                            <h2 className="mb-4 text-sm font-semibold text-white">
                                Navigate
                            </h2>
                            <ul className="text-[#86868b] space-y-3 text-sm">
                                <li>
                                    <a href="#about" className="hover:text-white transition-colors duration-300">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#projects" className="hover:text-white transition-colors duration-300">
                                        Projects
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Connect */}
                        <div>
                            <h2 className="mb-4 text-sm font-semibold text-white">
                                Connect
                            </h2>
                            <ul className="text-[#86868b] space-y-3 text-sm">
                                <li>
                                    <a
                                        href="https://twitch.tv/rathoz"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-[#9146ff] transition-colors duration-300"
                                    >
                                        Twitch
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.twitch.tv/subs/rathoz"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-[#9146ff] transition-colors duration-300"
                                    >
                                        Subscribe
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors duration-300"
                                    >
                                        GitHub
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Social */}
                        <div>
                            <h2 className="mb-4 text-sm font-semibold text-white">
                                Social
                            </h2>
                            <div className="flex gap-3">
                                <a
                                    href="https://twitch.tv/rathoz"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-[#9146ff]/10 hover:bg-[#9146ff]/20 border border-[#9146ff]/30 hover:border-[#9146ff] rounded-lg transition-all duration-300"
                                    aria-label="Twitch"
                                >
                                    <svg className="w-5 h-5 text-[#9146ff]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="p-2 bg-[#86868b]/10 hover:bg-[#86868b]/20 border border-[#86868b]/30 hover:border-[#86868b] rounded-lg transition-all duration-300"
                                    aria-label="GitHub"
                                >
                                    <svg className="w-5 h-5 text-[#86868b]" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-8 h-px bg-gradient-to-r from-transparent via-[#86868b]/30 to-transparent"></div>

                {/* Bottom Section */}
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-[#86868b]">
                        {currentYear} <a href="#" className="text-white hover:text-[#0071e3] transition-colors duration-300 font-medium">RATHOZ</a>. All rights reserved.
                    </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                        <span className="text-xs text-[#86868b] flex items-center gap-2">
                            Built with React & Tailwind CSS
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
