import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Search, Paintbrush, Code2, ShieldCheck, CheckCircle, Upload, RefreshCw } from 'lucide-react';
const steps = [{
  title: 'Discovery & Planning',
  description: 'Understanding requirements and defining scope',
  icon: Search
}, {
  title: 'Design & Prototyping',
  description: 'Creating blueprints and interactive mockups',
  icon: Paintbrush
}, {
  title: 'Agile Development',
  description: 'Building solutions with iterative sprints',
  icon: Code2
}, {
  title: 'Data & Security Governance',
  description: 'Implementing robust protection measures',
  icon: ShieldCheck
}, {
  title: 'Quality Assurance',
  description: 'Thorough testing and validation',
  icon: CheckCircle
}, {
  title: 'Deployment & Support',
  description: 'Seamless integration and ongoing assistance',
  icon: Upload
}, {
  title: 'Feedback Loop',
  description: 'Continuous improvement and optimization',
  icon: RefreshCw
}];
export function GovernanceSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  return <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16" ref={ref}>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Our Governance Framework
          </h2>
          <p className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-300 transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            A structured approach to delivering successful technology solutions
          </p>
        </div>
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
          {steps.map((step, index) => {
          const [stepRef, stepInView] = useInView({
            triggerOnce: true,
            threshold: 0.1
          });
          const Icon = step.icon;
          const isEven = index % 2 === 0;
          return <div key={index} ref={stepRef} className={`relative flex md:items-center mb-12 last:mb-0 transition-all duration-700 transform ${stepInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{
            transitionDelay: `${index * 100}ms`
          }}>
                {/* Mobile view (stacked) */}
                <div className="flex items-start md:hidden w-full">
                  <div className="bg-[#FF6F00] rounded-full p-3 mr-4 flex-shrink-0">
                    <Icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                {/* Desktop view (alternating) */}
                <div className="hidden md:flex w-full items-center">
                  {/* Left side content */}
                  <div className={`w-1/2 ${isEven ? 'text-right pr-8' : 'pr-8 opacity-0'}`}>
                    {isEven && <div>
                        <h3 className="text-xl font-semibold mb-1">
                          {step.title}
                        </h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>}
                  </div>
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="bg-[#FF6F00] rounded-full p-3">
                      <Icon className="text-white" size={20} />
                    </div>
                  </div>
                  {/* Right side content */}
                  <div className={`w-1/2 ${!isEven ? 'text-left pl-8' : 'pl-8 opacity-0'}`}>
                    {!isEven && <div>
                        <h3 className="text-xl font-semibold mb-1">
                          {step.title}
                        </h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>}
                  </div>
                </div>
              </div>;
        })}
        </div>
      </div>
    </section>;
}