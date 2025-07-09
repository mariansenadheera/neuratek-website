import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  return <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center" ref={ref}>
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 transition-all duration-700 transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Who We Are
          </h2>
          <p className={`text-lg md:text-xl mb-8 transition-all duration-700 delay-300 transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            NeuraTek is a technology company focused on building solutions that
            empower businesses to make smarter, faster, and more accurate
            decisions.
          </p>
          <div className={`inline-block bg-[#FF6F00] h-1 w-20 mb-8 transition-all duration-700 delay-500 ${inView ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
          <p className={`text-lg md:text-xl font-medium transition-all duration-700 delay-700 transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Our mission is to help companies gain competitive advantage using AI
            and Data Science.
          </p>
        </div>
      </div>
    </section>;
}