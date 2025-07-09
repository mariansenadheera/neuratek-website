import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Brain, Workflow, Code, BarChart3, Cpu, Smartphone, Rocket, Globe } from 'lucide-react';
const services = [{
  title: 'AI Solutions',
  description: 'Predictive modeling, NLP, computer vision',
  icon: Brain
}, {
  title: 'Business Process Reengineering',
  description: 'Streamline operations and optimize workflows',
  icon: Workflow
}, {
  title: 'Custom Software Development',
  description: 'Tailored solutions for unique business needs',
  icon: Code
}, {
  title: 'Data Science & Analytics',
  description: 'Extract actionable insights from your data',
  icon: BarChart3
}, {
  title: 'IoT Automation & Integration',
  description: 'Connect and control your smart devices',
  icon: Cpu
}, {
  title: 'Mobile Applications',
  description: 'Engaging native and cross-platform apps',
  icon: Smartphone
}, {
  title: 'Prototyping and MVPs',
  description: 'Validate ideas quickly and efficiently',
  icon: Rocket
}, {
  title: 'Web Applications',
  description: 'Scalable, responsive web solutions',
  icon: Globe
}];
export function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  return <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16" ref={ref}>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            What We Offer
          </h2>
          <p className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-300 transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Comprehensive technology solutions to drive your business forward
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
          const [serviceRef, serviceInView] = useInView({
            triggerOnce: true,
            threshold: 0.1
          });
          const Icon = service.icon;
          return <div key={index} ref={serviceRef} className={`bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border-b-2 border-[#FF6F00] transform ${serviceInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{
            transitionDelay: `${index * 100}ms`
          }}>
                <div className="bg-[#FF6F00]/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Icon className="text-[#FF6F00]" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>;
        })}
        </div>
      </div>
    </section>;
}