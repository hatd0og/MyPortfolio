import { useTypewriter } from '../lib/useTypewriter';
import profilePic from '../assets/images/pfp.png';
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  const typedText = useTypewriter(['Front-End Developer', 'Visual Graphics Designer', 'UI/UX Designer']);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 bg-stars"
    >
<div className="container max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-5 md:gap-8">
        {/* Info Section */}
        <div className="flex-1 text-center md:text-left space-y-6 px-4">
          <h1 className="tracking-tight leading-tight">
            <span className="block text-2xl font-semibold opacity-0 animate-fade-in">
              Hello There, I'm
            </span>

            <span className="block whitespace-nowrap opacity-0 animate-fade-in-delay-1 gradient text-3xl sm:text-4xl md:text-6xl font-bold">
              Arvilyn Kate Nicerio
            </span>
          </h1>

          {/* Animated Title Swap */}
          <div className="h-10 text-xl sm:text-2xl opacity-0 animate-fade-in-delay-2 font-semibold text-gradient flex flex-wrap justify-center md:justify-start gap-1">
            <span>An aspiring </span>
            <span className="text-primary font-bold gradient">{typedText}</span>
            <span className="animate-blink ml-1">|</span>
          </div>

          {/* Bio */}
          <p className="text-sm md:text-base leading-relaxed opacity-0 animate-fade-in-delay-4 max-w-md mx-auto md:mx-0 text-foreground">
            I'm still learning front-end development and visual graphics design, exploring how creativity connects with technology. I'm excited to keep improving and create projects that look good and work well.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-4 animate-fade-in-delay-5 opacity-0">
            <a
              href="#projects"
              className="button px-6 py-2 rounded-full bg-[#7C3AED] text-white hover:bg-[#6D28D9] hover:shadow-[0_0_10px_rgba(124,58,237,0.5)] transition duration-300"
            >
              View My Work
            </a>
          </div>
        </div>

        {/* Image Section with Cool Animation */}
        <div className=" opacity-0 animate-fade-in-delay-1 relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center mx-auto md:mx-0 group">
          {/* Outer rotating ring with gradient */}
          <div className="absolute inset-0 rounded-full animate-spin-slow opacity-75">
            <div className="w-full h-full rounded-full border-4 border-transparent border-t-blue-500 border-r-purple-500"></div>
          </div>

          {/* Middle counter-rotating ring */}
          <div className="absolute inset-2 rounded-full animate-spin-reverse opacity-60">
            <div className="w-full h-full rounded-full border-4 border-transparent border-l-purple-400 border-b-blue-400"></div>
          </div>

          {/* Inner pulsing glow */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse-subtle blur-xl"></div>

          {/* Orbiting dots */}
          <div className="absolute inset-0 animate-spin-slow">
            <div className="absolute top-0 left-1/2 w-3 h-3 -ml-1.5 bg-blue-500 rounded-full shadow-lg shadow-blue-500/50"></div>
          </div>
          <div className="absolute inset-0 animate-spin-reverse" style={{ animationDelay: '0.5s' }}>
            <div className="absolute bottom-0 left-1/2 w-3 h-3 -ml-1.5 bg-purple-500 rounded-full shadow-lg shadow-purple-500/50"></div>
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0 animate-float">
            <div className="absolute top-1/4 right-0 w-2 h-2 bg-blue-400/60 rounded-full blur-sm"></div>
          </div>
          <div className="absolute inset-0 animate-float" style={{ animationDelay: '1s' }}>
            <div className="absolute bottom-1/4 left-0 w-2 h-2 bg-purple-400/60 rounded-full blur-sm"></div>
          </div>
          <div className="absolute inset-0 animate-float" style={{ animationDelay: '2s' }}>
            <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-blue-300/60 rounded-full blur-sm"></div>
          </div>

          {/* Profile Image Container */}
          <div className=" opacity-0 animate-fade-in-delay-1 relative w-56 h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary shadow-2xl shadow-primary/30 group-hover:scale-105 transition-transform duration-500 z-10">
            {/* Shine effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            {/* Image */}
            <img
              src={profilePic}
              alt="Arvilyn Kate Nicerio"
              className="w-full h-full object-cover "
            />
          </div>

          {/* Hexagonal accent shapes */}
          <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-blue-500/50 rotate-45 animate-pulse-subtle"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-purple-500/50 rotate-45 animate-pulse-subtle" style={{ animationDelay: '0.5s' }}></div>
        </div>

        {/* SCROLL */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span>Scroll</span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </div>
      </div>

      <style>{`
        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        .animate-spin-reverse {
          animation: spin-reverse 8s linear infinite;
        }
      `}</style>
    </section>
  );
};