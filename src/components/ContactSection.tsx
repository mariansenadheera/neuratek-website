import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Globe } from 'lucide-react';
import emailjs from '@emailjs/browser';
export function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    message: string;
    isError: boolean;
  } | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    // EmailJS configuration
    const serviceId = 'service_mxmld3i'; // You'll need to create a service in EmailJS
    const templateId = 'template_g2z0bno'; // You'll need to create a template in EmailJS
    const publicKey = 'OIeJ4qc_bxqBumLus'; // Replace with your actual public key
    const templateParams = {
      to_email: 'marian.effectivesolutions@gmail.com',
      from_name: formState.name,
      from_email: formState.email,
      message: formState.message
    };
    emailjs.send(serviceId, templateId, templateParams, publicKey).then(() => {
      setSubmitStatus({
        message: 'Thank you for your message! We will get back to you soon.',
        isError: false
      });
      // Clear form fields
      setFormState({
        name: '',
        email: '',
        message: ''
      });
    }).catch(error => {
      console.error('Email sending failed:', error);
      setSubmitStatus({
        message: 'Failed to send message. Please try again later.',
        isError: true
      });
    }).finally(() => {
      setIsSubmitting(false);
    });
  };
  return <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16" ref={ref}>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-all duration-700 transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Let's Build the Future Together
          </h2>
          <p className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-300 transform ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            To evolve, scale, and lead with innovation — NeuraTek is your ideal
            partner.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className={`bg-white shadow-lg rounded-lg p-6 md:p-8 transition-all duration-700 transform ${inView ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <h3 className="text-2xl font-semibold mb-6">Company Details</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#FF6F00]/10 p-3 rounded-full mr-4">
                    <Mail className="text-[#FF6F00]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a href="mailto:info@neuratek.co.uk" className="text-[#FF6F00] hover:underline">
                      info@neuratek.co.uk
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#FF6F00]/10 p-3 rounded-full mr-4">
                    <MapPin className="text-[#FF6F00]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-gray-600">London, UK</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#FF6F00]/10 p-3 rounded-full mr-4">
                    <Globe className="text-[#FF6F00]" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Website</h4>
                    <a href="https://www.neuratek.co.uk" target="_blank" rel="noopener noreferrer" className="text-[#FF6F00] hover:underline">
                      www.neuratek.co.uk
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className={`bg-white shadow-lg rounded-lg p-6 md:p-8 transition-all duration-700 transform ${inView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
              {submitStatus && <div className={`mb-6 p-4 rounded-md ${submitStatus.isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
                  {submitStatus.message}
                </div>}
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input type="text" id="name" name="name" value={formState.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF6F00] focus:border-[#FF6F00] outline-none" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input type="email" id="email" name="email" value={formState.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF6F00] focus:border-[#FF6F00] outline-none" required />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea id="message" name="message" value={formState.message} onChange={handleChange} rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#FF6F00] focus:border-[#FF6F00] outline-none" required></textarea>
                </div>
                <button type="submit" disabled={isSubmitting} className={`bg-[#FF6F00] text-white px-6 py-3 rounded-md hover:bg-[#FF8F00] transition-colors w-full sm:w-auto ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
}