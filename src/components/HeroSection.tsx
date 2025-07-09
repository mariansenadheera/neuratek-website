import React, { useEffect, useState } from 'react';
export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return <section className="relative bg-black text-white pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537504-6427a16b0a28?q=80&w=1932&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0" style={{
        backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(255, 111, 0, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(255, 111, 0, 0.15) 0%, transparent 50%)
            `
      }}></div>
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FF6F00] rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#FF6F00] rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{
          animationDelay: '1s'
        }}></div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Empowering Decisions with{' '}
            <span className="text-[#FF6F00]">Data-Driven</span> Technology
          </h1>
          <p className={`text-xl md:text-2xl mb-10 text-gray-200 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Helping companies evolve, scale, and lead through AI, data science,
            and innovation.
          </p>
          <div className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <a href="#contact" className="bg-[#FF6F00] hover:bg-[#FF8F00] text-white font-medium px-8 py-3 rounded-md transition-all duration-300 hover:scale-105 transform">
              Get Started
            </a>
            <a href="#services" className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-medium px-8 py-3 rounded-md transition-all duration-300 hover:scale-105 transform">
              Explore Services
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>;
}