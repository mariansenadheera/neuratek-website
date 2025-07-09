import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { IndustriesSection } from './components/IndustriesSection';
import { FeaturesSection } from './components/FeaturesSection';
import { GovernanceSection } from './components/GovernanceSection';
import { UseCasesSection } from './components/UseCasesSection';
import { ApproachSection } from './components/ApproachSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
export function App() {
  return <div className="min-h-screen w-full bg-white text-black font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <IndustriesSection />
        <FeaturesSection />
        <GovernanceSection />
        <UseCasesSection />
        <ApproachSection />
        <ContactSection />
      </main>
      <Footer />
    </div>;
}