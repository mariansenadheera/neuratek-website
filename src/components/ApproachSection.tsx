import React from 'react';
import { useInView } from 'react-intersection-observer';
import { UserCheck, Scale, MessageCircle, Layers } from 'lucide-react';
const approaches = [{
  title: 'Dedicated account managers',
  description: 'Personal point of contact for your project needs',
  icon: UserCheck
}, {
  title: 'Scalable support models',
  description: 'Flexible solutions that grow with your business',
  icon: Scale
}, {
  title: 'Transparent communication',
  description: 'Clear, consistent updates throughout your project',
  icon: MessageCircle
}, {
  title: 'Flexible engagement models',
  description: 'Tailored partnership approaches to suit your needs',
  icon: Layers
}];
export function ApproachSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  return <section className="py-16 md:py-24 bg-[#FF6F00]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16" ref={ref}>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 text-white transition-all duration-700 transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Client-Centric Approach
          </h2>
          <p className={`text-lg text-white/80 max-w-2xl mx-auto transition-all duration-700 delay-300 transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Building lasting partnerships through exceptional service
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {approaches.map((approach, index) => {
          const [approachRef, approachInView] = useInView({
            triggerOnce: true,
            threshold: 0.1
          });
          const Icon = approach.icon;
          return <div key={index} ref={approachRef} className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 transition-all duration-500 transform ${approachInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{
            transitionDelay: `${index * 100}ms`
          }}>
                <div className="bg-white rounded-full p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Icon className="text-[#FF6F00]" size={20} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {approach.title}
                </h3>
                <p className="text-white/80">{approach.description}</p>
              </div>;
        })}
        </div>
      </div>
    </section>;
}