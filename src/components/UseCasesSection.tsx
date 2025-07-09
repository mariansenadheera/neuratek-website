import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { MonitorDot, MessageSquare, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
const useCases = [{
  title: 'Smart Dashboard',
  description: 'Real-time monitoring & predictive analytics for manufacturers, enabling proactive decision-making and resource optimization.',
  icon: MonitorDot,
  image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
}, {
  title: 'AI Chatbot',
  description: 'AI assistant for customer interaction & engagement that learns from conversations to provide increasingly personalized responses.',
  icon: MessageSquare,
  image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2006&auto=format&fit=crop'
}, {
  title: 'Forecasting',
  description: 'Stock optimization and waste reduction through predictive models that analyze historical data and market trends.',
  icon: TrendingUp,
  image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
}];
export function UseCasesSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const nextSlide = () => {
    setCurrentSlide(prev => prev === useCases.length - 1 ? 0 : prev + 1);
  };
  const prevSlide = () => {
    setCurrentSlide(prev => prev === 0 ? useCases.length - 1 : prev - 1);
  };
  return <section id="use-cases" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16" ref={ref}>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Use Cases
          </h2>
          <p className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-300 transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Real-world applications of our technology solutions
          </p>
        </div>
        {/* Desktop View - Cards */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => {
          const [cardRef, cardInView] = useInView({
            triggerOnce: true,
            threshold: 0.1
          });
          const Icon = useCase.icon;
          return <div key={index} ref={cardRef} className={`bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-500 transform ${cardInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{
            transitionDelay: `${index * 200}ms`
          }}>
                <div className="h-48 overflow-hidden">
                  <img src={useCase.image} alt={useCase.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#FF6F00]/10 p-2 rounded-full">
                      <Icon className="text-[#FF6F00]" size={20} />
                    </div>
                    <h3 className="text-xl font-semibold ml-3">
                      {useCase.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
              </div>;
        })}
        </div>
        {/* Mobile View - Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{
            transform: `translateX(-${currentSlide * 100}%)`
          }}>
              {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                      <div className="h-48 overflow-hidden">
                        <img src={useCase.image} alt={useCase.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="bg-[#FF6F00]/10 p-2 rounded-full">
                            <Icon className="text-[#FF6F00]" size={20} />
                          </div>
                          <h3 className="text-xl font-semibold ml-3">
                            {useCase.title}
                          </h3>
                        </div>
                        <p className="text-gray-600">{useCase.description}</p>
                      </div>
                    </div>
                  </div>;
            })}
            </div>
          </div>
          {/* Carousel Controls */}
          <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md">
            <ChevronRight size={24} />
          </button>
          {/* Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {useCases.map((_, index) => <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-[#FF6F00]' : 'bg-gray-300'}`} />)}
          </div>
        </div>
      </div>
    </section>;
}