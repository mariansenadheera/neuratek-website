import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Factory, ShoppingCart, Warehouse, Building2, Building } from 'lucide-react';
const industries = [{
  name: 'Manufacturing',
  icon: Factory
}, {
  name: 'Real Estate',
  icon: Building2
}, {
  name: 'Warehousing',
  icon: Warehouse
}, {
  name: 'Retail Chains',
  icon: ShoppingCart
}, {
  name: 'Government',
  icon: Building
}];
export function IndustriesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  return <section id="industries" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16" ref={ref}>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Industries We Serve
          </h2>
          <p className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-300 transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Delivering specialized solutions across diverse sectors
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 max-w-4xl mx-auto">
          {industries.map((industry, index) => {
          const [industryRef, industryInView] = useInView({
            triggerOnce: true,
            threshold: 0.1
          });
          const Icon = industry.icon;
          return <div key={index} ref={industryRef} className={`flex flex-col items-center transition-all duration-500 transform ${industryInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{
            transitionDelay: `${index * 100}ms`
          }}>
                <div className="bg-gray-100 p-5 rounded-full w-20 h-20 flex items-center justify-center mb-3">
                  <Icon className="text-[#FF6F00]" size={32} />
                </div>
                <h3 className="text-center font-medium">{industry.name}</h3>
              </div>;
        })}
        </div>
      </div>
    </section>;
}