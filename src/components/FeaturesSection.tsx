import React from 'react';
import { useInView } from 'react-intersection-observer';
import { BarChart, Settings, Zap, Globe2, Shield } from 'lucide-react';
const features = [{
  title: 'Data-Driven Strategy',
  description: 'Every solution is backed by data insights to drive measurable outcomes.',
  icon: BarChart
}, {
  title: 'Tailored Technology',
  description: 'Custom-built systems designed to fit business needs.',
  icon: Settings
}, {
  title: 'Agile Execution',
  description: 'Fast-moving, sprint-based delivery with scalable results.',
  icon: Zap
}, {
  title: 'Cross-Industry Expertise',
  description: 'Proven success across domains.',
  icon: Globe2
}, {
  title: 'Innovation with Accountability',
  description: 'Secure, transparent, and compliant tech delivery.',
  icon: Shield
}];
export function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  return <section className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16" ref={ref}>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Why <span className="text-[#FF6F00]">NeuraTek</span>?
          </h2>
          <p className={`text-lg text-gray-300 max-w-2xl mx-auto transition-all duration-700 delay-300 transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Our competitive advantages that drive client success
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          {features.map((feature, index) => {
          const [featureRef, featureInView] = useInView({
            triggerOnce: true,
            threshold: 0.1
          });
          const Icon = feature.icon;
          return <div key={index} ref={featureRef} className={`flex items-start mb-10 transition-all duration-700 transform ${featureInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{
            transitionDelay: `${index * 100}ms`
          }}>
                <div className="bg-[#FF6F00] rounded-lg p-3 mr-4">
                  <Icon className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>;
        })}
        </div>
      </div>
    </section>;
}