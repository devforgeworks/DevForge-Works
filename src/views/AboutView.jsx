import RathozLogo from "../assets/RathozLogo.png";
import { TwitchLiveStatus } from "../components/TwitchLiveStatus";
import { AnimatedPage } from '../components/AnimatedPage';

export const AboutView = () => {
  return (
    <AnimatedPage>
      <div className="relative min-h-[calc(100vh-80px)] py-16 px-4 mx-auto max-w-7xl sm:py-24 lg:px-6">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-10"></div>

      <div className="relative z-10 gap-12 items-center xl:gap-20 md:grid md:grid-cols-2">
        {/* Image Section - Clean & Professional */}
        <div className="relative group animate-fade-in">
          {/* Subtle Glow - Always Visible */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#0071e3]/10 to-[#00c7be]/10 rounded-2xl blur-2xl opacity-100 transition-opacity duration-500"></div>

          {/* Image Container */}
          <div className="relative rounded-2xl overflow-hidden border border-tech card-shadow">
            <img
              className="w-full scale-105 transition-transform duration-500"
              src={RathozLogo}
              alt="Rathoz logo"
            />

            {/* Minimal Overlay - Always Visible */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 via-transparent to-transparent opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Minimal Accent Elements - Always Visible */}
          <div className="absolute -top-4 -right-4 w-16 h-16 border border-tech-accent rounded-lg rotate-12 opacity-40 transition-opacity duration-500"></div>
        </div>

        {/* Content Section */}
        <div className="mt-8 md:mt-0 space-y-6 animate-fade-in-delay">
          {/* Section Header */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full glass border border-tech-accent">
              <span className="text-xs font-medium text-[#86868b] tracking-wide">Professional Profile</span>
            </div>

            <h2 className="mb-6 text-4xl md:text-5xl tracking-tight font-bold text-white">
              About Rathoz
            </h2>
          </div>

          {/* Bio Content - Code Style but More Subtle */}
          <div className="space-y-3 animate-fade-in-delay-2 p-6 glass rounded-lg border border-tech">
            <p className="font-mono text-[#86868b] text-sm leading-relaxed">
              <span className="text-[#0071e3]">const</span> <span className="text-white">rathoz</span> <span className="text-[#86868b]">=</span> <span className="text-white">{'{'}</span>
            </p>
            <p className="font-mono text-[#86868b] text-sm leading-relaxed pl-4">
              <span className="text-white">name:</span> <span className="text-[#00c7be]">"Mattias"</span>,
            </p>
            <p className="font-mono text-[#86868b] text-sm leading-relaxed pl-4">
              <span className="text-white">role:</span> <span className="text-[#00c7be]">"Developer & Streamer"</span>,
            </p>
            <p className="font-mono text-[#86868b] text-sm leading-relaxed pl-4">
              <span className="text-white">life:</span> <span className="text-[#00c7be]">"Father of 4, Fiance"</span>,
            </p>
            <p className="font-mono text-[#86868b] text-sm leading-relaxed pl-4">
              <span className="text-white">focus:</span> <span className="text-[#00c7be]">["Development", "Streaming", "Gaming"]</span>,
            </p>
            <p className="font-mono text-[#86868b] text-sm leading-relaxed pl-4">
              <span className="text-white">platform:</span> <span className="text-[#00c7be]">"Twitch"</span>
            </p>
            <p className="font-mono text-[#86868b] text-sm leading-relaxed pl-4">
              <span className="text-white">schedule:</span> <span className="text-[#00c7be]">"Wed, Fri, Sun,"</span>
            </p>
            <p className="font-mono text-[#86868b] text-sm leading-relaxed">
              <span className="text-white">{'}'}</span>
            </p>
          </div>

          {/* Skills Tags - Clean Design */}
          <div className="flex flex-wrap gap-2 pt-4 animate-slide-in-left">
            <span className="px-3 py-1.5 text-xs font-medium bg-[#0071e3]/10 text-[#0071e3] border border-[#0071e3]/30 rounded-md hover:border-[#0071e3] transition-all duration-300">
              Development
            </span>
            <span className="px-3 py-1.5 text-xs font-medium bg-[#00c7be]/10 text-[#00c7be] border border-[#00c7be]/30 rounded-md hover:border-[#00c7be] transition-all duration-300">
              Streaming
            </span>
            <span className="px-3 py-1.5 text-xs font-medium bg-[#86868b]/10 text-[#86868b] border border-[#86868b]/30 rounded-md hover:border-[#86868b] transition-all duration-300">
              Gaming
            </span>
            <span className="px-3 py-1.5 text-xs font-medium bg-white/10 text-white border border-white/30 rounded-md hover:border-white transition-all duration-300">
              Community
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-slide-in-left">
            <TwitchLiveStatus channelName="rathoz" />

            <a
              href="https://www.twitch.tv/subs/rathoz"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-center text-white bg-[#9146ff] rounded-lg transition-all duration-300 hover:bg-[#772ce8] hover:shadow-lg hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm-1 4v12l10-6-10-6z"/>
              </svg>
              Subscribe
              <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    </AnimatedPage>
  );
};
