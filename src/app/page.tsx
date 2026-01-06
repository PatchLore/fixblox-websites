'use client';

import { useEffect, useState } from 'react';

export default function LandingPage() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [redirectUrl, setRedirectUrl] = useState('');

  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement;
      
      if (anchor) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  useEffect(() => {
    // Set redirect URL for Formspree
    if (typeof window !== 'undefined') {
      setRedirectUrl(`${window.location.origin}${window.location.pathname}#contact?submitted=true`);
    }

    // Check for Formspree success redirect
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('submitted') === 'true') {
      setSubmitStatus('success');
      // Clean up URL
      window.history.replaceState({}, '', window.location.pathname + '#contact');
    }
  }, []);

  return (
    <div className="font-sans text-[#333] leading-relaxed">
      {/* Header */}
      <header
        className="text-white text-center py-[60px] px-5"
        style={{
          background: 'linear-gradient(135deg, #4A9EFF 0%, #42D9FF 100%)',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-5">
          <h1 className="text-[2rem] md:text-[2.5rem] mb-5 font-bold">
            Small Business Websites
          </h1>
          <p className="text-[1.1rem] md:text-[1.3rem] mb-4 opacity-95">
            Professional websites for small businesses — live in 48 hours.
          </p>
          <p className="text-[1.1rem] mb-8 opacity-90">
            Clean, mobile-friendly websites that help local businesses get more calls.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#contact"
              className="px-[35px] py-4 text-[1.1rem] rounded-lg cursor-pointer font-semibold no-underline inline-block transition-all duration-200 bg-white text-[#4A9EFF] hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)]"
            >
              Get Your Website Built
            </a>
            <a
              href="https://wa.me/447375949211"
              target="_blank"
              rel="noopener noreferrer"
              className="px-[35px] py-4 text-[1.1rem] rounded-lg cursor-pointer font-semibold no-underline inline-block transition-all duration-200 bg-[#42D9FF] text-white border-2 border-white hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)]"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </header>

      {/* Problem Section */}
      <section className="bg-[#F0F8FF] py-20 px-5">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-[1.8rem] md:text-[2.2rem] mb-8 text-center text-[#2d3748]">
            The Problem Most Small Businesses Face
          </h2>
          <ul className="list-none max-w-[700px] mx-auto">
            <li className="p-5 mb-4 bg-white rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] relative pl-[50px]">
              <span className="absolute left-5 text-[#e53e3e] text-2xl font-bold">✗</span>
              Old, slow websites that frustrate potential customers
            </li>
            <li className="p-5 mb-4 bg-white rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] relative pl-[50px]">
              <span className="absolute left-5 text-[#e53e3e] text-2xl font-bold">✗</span>
              No mobile optimisation — customers can't use your site on their phones
            </li>
            <li className="p-5 mb-4 bg-white rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] relative pl-[50px]">
              <span className="absolute left-5 text-[#e53e3e] text-2xl font-bold">✗</span>
              Customers leaving without calling because your site doesn't build trust
            </li>
            <li className="p-5 mb-4 bg-white rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] relative pl-[50px]">
              <span className="absolute left-5 text-[#e53e3e] text-2xl font-bold">✗</span>
              Embarrassed to share your site with potential customers
            </li>
          </ul>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-white py-20 px-5">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-[1.8rem] md:text-[2.2rem] mb-8 text-center text-[#2d3748]">
            The Solution: Professional Websites Built for You
          </h2>
          <div className="max-w-[800px] mx-auto leading-loose">
            <p className="mb-5 text-[1.1rem]">
              We build 1–3 page professional websites designed specifically for local businesses like plumbers, electricians, roofers, and cleaners.
            </p>
            <p className="mb-5 text-[1.1rem]">
              Your website will be mobile-first, meaning it looks and works perfectly on phones, tablets, and desktops.
            </p>
            <p className="mb-5 text-[1.1rem]">
              We ensure fast loading times so customers don't get frustrated waiting.
            </p>
            <p className="mb-5 text-[1.1rem]">
              Every site includes a contact form and WhatsApp button so customers can reach you easily.
            </p>
            <p className="mb-5 text-[1.1rem]">
              We handle hosting and deployment for you, so you can focus on running your business.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#F0F8FF] py-20 px-5">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-[1.8rem] md:text-[2.2rem] mb-8 text-center text-[#2d3748]">
            What's Included
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 max-w-[900px] mt-10 mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] text-center">
              <div className="text-[2.5rem] mb-4">🎨</div>
              <h3 className="mb-2.5 text-[#2d3748]">Design + Build</h3>
              <p>Professional custom design tailored to your business</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] text-center">
              <div className="text-[2.5rem] mb-4">📱</div>
              <h3 className="mb-2.5 text-[#2d3748]">Mobile & Desktop</h3>
              <p>Perfect on all devices and screen sizes</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] text-center">
              <div className="text-[2.5rem] mb-4">📧</div>
              <h3 className="mb-2.5 text-[#2d3748]">Contact Form</h3>
              <p>Easy way for customers to reach you</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] text-center">
              <div className="text-[2.5rem] mb-4">💬</div>
              <h3 className="mb-2.5 text-[#2d3748]">WhatsApp Button</h3>
              <p>Click-to-chat functionality</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] text-center">
              <div className="text-[2.5rem] mb-4">🔍</div>
              <h3 className="mb-2.5 text-[#2d3748]">Basic SEO</h3>
              <p>Help customers find you online</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] text-center">
              <div className="text-[2.5rem] mb-4">🚀</div>
              <h3 className="mb-2.5 text-[#2d3748]">Hosting & Deployment</h3>
              <p>We handle the technical details</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        className="text-white text-center py-20 px-5"
        style={{
          background: 'linear-gradient(135deg, #4A9EFF 0%, #42D9FF 100%)',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-[1.8rem] md:text-[2.2rem] mb-8 text-white">Launch Offer</h2>
          <div className="text-[2.5rem] md:text-5xl font-bold my-5 text-white">£199</div>
          <p className="text-[1.2rem] mb-8 opacity-90 text-white">
            One-time payment. No subscriptions. No hidden fees.
          </p>
          <a
            href="#contact"
            className="px-[35px] py-4 text-[1.1rem] rounded-lg cursor-pointer font-semibold no-underline inline-block transition-all duration-200 bg-white text-[#4A9EFF] hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)]"
          >
            Get Started Today
          </a>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-20 px-5">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-[1.8rem] md:text-[2.2rem] mb-8 text-center text-[#2d3748]">
            Simple Process
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 max-w-[1000px] mt-10 mx-auto">
            <div className="text-center">
              <div
                className="w-[60px] h-[60px] text-white rounded-full flex items-center justify-center text-[1.8rem] font-bold mx-auto mb-5"
                style={{
                  background: 'linear-gradient(135deg, #4A9EFF 0%, #42D9FF 100%)',
                }}
              >
                1
              </div>
              <h3 className="mb-4 text-[#2d3748]">Quick call or message</h3>
              <p>Tell us about your business and what you need</p>
            </div>
            <div className="text-center">
              <div
                className="w-[60px] h-[60px] text-white rounded-full flex items-center justify-center text-[1.8rem] font-bold mx-auto mb-5"
                style={{
                  background: 'linear-gradient(135deg, #4A9EFF 0%, #42D9FF 100%)',
                }}
              >
                2
              </div>
              <h3 className="mb-4 text-[#2d3748]">We build your site</h3>
              <p>Our team designs and builds your professional website</p>
            </div>
            <div className="text-center">
              <div
                className="w-[60px] h-[60px] text-white rounded-full flex items-center justify-center text-[1.8rem] font-bold mx-auto mb-5"
                style={{
                  background: 'linear-gradient(135deg, #4A9EFF 0%, #42D9FF 100%)',
                }}
              >
                3
              </div>
              <h3 className="mb-4 text-[#2d3748]">You go live in days</h3>
              <p>Your website is live and ready for customers in 48 hours</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <a
              href="#contact"
              className="px-[35px] py-4 text-[1.1rem] rounded-lg cursor-pointer font-semibold no-underline inline-block transition-all duration-200 text-white hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)]"
              style={{
                background: 'linear-gradient(135deg, #4A9EFF 0%, #42D9FF 100%)',
              }}
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-[#F0F8FF] py-20 px-5">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-[1.8rem] md:text-[2.2rem] mb-8 text-center text-[#2d3748]">
            Ready to get your professional website?
          </h2>
          <p className="text-center mb-10 text-[1.1rem]">
            Fill out the form below or message us on WhatsApp.
          </p>
          <div className="max-w-[600px] mx-auto bg-white py-[30px] px-5 md:p-10 rounded-lg shadow-[0_2px_20px_rgba(0,0,0,0.08)]">
            {submitStatus === 'success' ? (
              <div className="text-center py-8">
                <div className="text-green-600 text-lg font-semibold mb-2">
                  Thanks — we'll be in touch shortly.
                </div>
              </div>
            ) : (
              <form
                action="https://formspree.io/f/xqeavjrq"
                method="POST"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="New Website Enquiry – FixBlox"
                />
                <input
                  type="hidden"
                  name="_next"
                  value={redirectUrl}
                />
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 font-semibold text-[#2d3748]">
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full p-3 border-2 border-[#e2e8f0] rounded-md text-base font-sans transition-colors focus:outline-none focus:border-[#4A9EFF]"
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="business" className="block mb-2 font-semibold text-[#2d3748]">
                    Type of business
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    required
                    className="w-full p-3 border-2 border-[#e2e8f0] rounded-md text-base font-sans transition-colors focus:outline-none focus:border-[#4A9EFF]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full p-4 text-white border-none rounded-md text-[1.1rem] font-semibold cursor-pointer transition-transform duration-200 hover:-translate-y-0.5"
                  style={{
                    background: 'linear-gradient(135deg, #4A9EFF 0%, #42D9FF 100%)',
                  }}
                >
                  Get Your Website Built
                </button>
              </form>
            )}
            <div className="text-center my-8 text-[#718096] font-semibold">OR</div>
            <a
              href="https://wa.me/447375949211"
              target="_blank"
              rel="noopener noreferrer"
              className="px-[35px] py-4 text-[1.1rem] rounded-lg cursor-pointer font-semibold no-underline inline-block transition-all duration-200 bg-[#42D9FF] text-white border-2 border-white hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)] w-full text-center"
            >
              WhatsApp Us Instead
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
