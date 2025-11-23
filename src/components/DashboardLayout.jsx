import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from '../Footer';

export const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000000] via-[#0a0a0a] to-[#141414] relative overflow-x-hidden">
      {/* Dark Tech Grid Background */}
      <div className="fixed inset-0 tech-grid opacity-10 pointer-events-none"></div>

      {/* Subtle Gradient Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#0071e3]/5 via-transparent to-[#00c7be]/5 pointer-events-none"></div>

      {/* Minimal Floating Accents - Dark Tech Style */}
      <div className="fixed top-20 right-10 w-32 h-32 border border-tech-accent rounded-lg rotate-45 opacity-20 pointer-events-none hidden lg:block"></div>
      <div className="fixed bottom-20 left-10 w-24 h-24 border border-tech-teal rounded-full opacity-20 pointer-events-none hidden lg:block"></div>
      <div className="fixed top-1/2 right-1/4 w-16 h-16 border border-tech rounded-lg rotate-12 opacity-20 pointer-events-none hidden lg:block"></div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content Area with top padding for fixed navbar */}
      <main className="relative z-10 pt-20">
        {/* Page Content */}
        <div className="min-h-[calc(100vh-80px)]">
          <Outlet />
        </div>

        {/* Footer */}
        <Footer />
      </main>

      {/* Subtle Ambient Effects - Dark Tech */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-[#0071e3]/5 rounded-full blur-[120px] opacity-40 pointer-events-none"></div>
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-[#00c7be]/5 rounded-full blur-[120px] opacity-40 pointer-events-none"></div>
    </div>
  );
};
