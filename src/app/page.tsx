'use client';

import { useEffect, useState, useRef } from 'react';

const WHATSAPP_NUMBER = '447925990923';
const PHONE_NUMBER = '+447925990923';
const PHONE_DISPLAY = '07925 990923'; // UK format: 07xxx xxxxxx
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi FixBlox, I need my website fixed this week. Can you help?')}`;
const CALENDLY_LINK = 'https://calendly.com/fixblox/15min'; // Replace with your Calendly link

export default function LandingPage() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [redirectUrl, setRedirectUrl] = useState('');
  const [stickyBarVisible, setStickyBarVisible] = useState(false);
  const lastScrollYRef = useRef(0);

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

  // Sticky mobile bar: hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const nearBottom = currentScrollY + windowHeight > docHeight - 100;

      if (currentScrollY > lastScrollYRef.current && currentScrollY > 100) {
        setStickyBarVisible(false);
      } else if (currentScrollY < lastScrollYRef.current || nearBottom) {
        setStickyBarVisible(true);
      }
      lastScrollYRef.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans text-[#333] leading-relaxed pb-20 md:pb-0">
      {/* Simple header */}
      <header className="border-b border-slate-800 bg-[#0F1419]">
        <div className="mx-auto flex max-w-[1200px] items-baseline justify-between px-5 py-4">
          <div className="text-lg font-extrabold tracking-tight text-white">FixBlox</div>
          <div className="text-sm font-semibold text-slate-400">Websites for Trades</div>
        </div>
      </header>

      {/* Hero Section - Trades Focused */}
      <header className="bg-[#0F1419] text-white overflow-hidden relative">
        {/* Missed Call Notification Graphic - mobile: inline, desktop: floats */}
        <div className="md:hidden flex justify-center mb-6">
          <div className="inline-flex items-center gap-3 bg-red-900/40 border border-red-500/50 rounded-xl px-4 py-3">
            <div className="w-10 h-10 rounded-full bg-red-500/30 flex items-center justify-center">
              <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <span className="text-red-400 font-bold text-sm">£2,500 job lost</span>
          </div>
        </div>
        <div className="hidden md:block absolute top-24 right-[8%] xl:right-[15%] z-10 animate-pulse">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-red-500/20 border-2 border-red-500 flex items-center justify-center">
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded shadow-lg">
              £2,500 job lost
            </div>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-5 py-12 md:py-16 relative">
          <div className="text-center mb-10 md:mb-12">
            <h1 className="text-[1.75rem] sm:text-[2.25rem] md:text-[3rem] lg:text-[3.25rem] font-extrabold leading-tight mb-4">
              Stop Losing <span className="text-[#F59E0B]">£2,500</span> Jobs to Missed Calls
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-[700px] mx-auto mb-8">
              Trades websites that actually work. Built today. Loading in 2 seconds. With SMS alerts when customers try to reach you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap mb-8">
              <a
                href="#contact"
                className="px-8 py-4 text-lg rounded-lg cursor-pointer font-bold no-underline inline-block transition-all duration-200 bg-[#F59E0B] text-[#0F1419] hover:bg-[#FBBF24] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(245,158,11,0.4)]"
              >
                Fix My Website This Week
              </a>
              <a
                href="#pricing"
                className="px-8 py-4 text-lg rounded-lg cursor-pointer font-semibold no-underline inline-block transition-all duration-200 bg-transparent text-white border-2 border-slate-500 hover:border-white hover:text-white"
              >
                See Pricing
              </a>
            </div>

            {/* Micro-trust bar + Speed badge */}
            {/* TODO: Update with real PageSpeed data after deployment. If LCP < 2.5s, replace badge with "Loads in [X] seconds" */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 flex-wrap">
              <p className="text-sm text-slate-400">
                Built for Trades • Live in 48 Hours • No £4k Agency Fees
              </p>
              <span className="text-sm text-[#22C55E] font-medium">
                ⚡ Mobile-Optimized • No Bloat • Instant Loading
              </span>
            </div>
          </div>

          {/* Split-screen: Broken site vs FixBlox - stacks on mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6 items-center max-w-[900px] mx-auto">
            {/* Left: Slow broken website on phone - customer calling competitor */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="text-center mb-2 text-sm text-red-400 font-medium">Without FixBlox</div>
                <div className="bg-[#1a1f26] rounded-[2.5rem] p-3 shadow-2xl mx-auto max-w-[280px]">
                  <div className="bg-[#0F1419] rounded-[2rem] overflow-hidden">
                    <div className="h-8 bg-[#1a1f26] flex items-center justify-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                      <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                      <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                    </div>
                    <div className="aspect-[9/16] p-4 bg-slate-800/50">
                      <div className="h-full flex flex-col items-center justify-center text-slate-500">
                        <div className="w-12 h-12 border-2 border-slate-600 border-t-slate-400 rounded-full animate-spin mb-4"></div>
                        <p className="text-sm">Loading...</p>
                        <p className="text-xs mt-1 opacity-70">3 seconds and counting</p>
                        <p className="text-xs mt-4 text-slate-600">Customer called competitor instead</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: FixBlox site with "New Lead!" SMS alert */}
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="text-center mb-2 text-sm text-[#22C55E] font-medium">With FixBlox</div>
                <div className="bg-[#1a1f26] rounded-[2.5rem] p-3 shadow-2xl mx-auto max-w-[280px] relative">
                  {/* SMS notification badge */}
                  <div className="absolute -top-2 -right-2 z-20 bg-[#22C55E] text-white text-xs font-bold px-3 py-2 rounded-lg shadow-lg animate-bounce">
                    New Lead!
                  </div>
                  <div className="bg-[#0F1419] rounded-[2rem] overflow-hidden">
                    <div className="h-8 bg-[#1a1f26] flex items-center justify-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                      <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                      <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                    </div>
                    <div className="aspect-[9/16] flex flex-col">
                      <div className="flex-1 p-4 bg-gradient-to-b from-slate-800/80 to-[#0F1419]">
                        <div className="h-3 bg-slate-600 rounded w-3/4 mb-4"></div>
                        <div className="h-2 bg-slate-700 rounded w-full mb-2"></div>
                        <div className="h-2 bg-slate-700 rounded w-5/6 mb-2"></div>
                        <div className="h-2 bg-slate-700 rounded w-4/5 mb-6"></div>
                        <div className="flex gap-2">
                          <div className="flex-1 h-10 bg-[#F59E0B] rounded-lg flex items-center justify-center text-xs font-bold text-[#0F1419]">CALL</div>
                          <div className="flex-1 h-10 bg-slate-600 rounded-lg flex items-center justify-center text-xs">WhatsApp</div>
                        </div>
                        <p className="text-xs text-[#22C55E] mt-4 flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse"></span>
                          SMS alert sent
                        </p>
                      </div>
                      {/* Fake SMS notification at bottom */}
                      <div className="p-3 bg-slate-800/80 border-t border-slate-700">
                        <div className="flex items-center gap-2 text-xs">
                          <div className="w-6 h-6 rounded-full bg-[#22C55E] flex items-center justify-center text-[10px]">✓</div>
                          <div>
                            <p className="font-semibold text-white">FixBlox</p>
                            <p className="text-slate-400">New lead from website — Call back now!</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Here's Why You're Losing Jobs */}
      <section className="bg-slate-100 py-16 md:py-20 px-5">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[1.75rem] md:text-[2.25rem] font-extrabold text-[#0F1419] text-center mb-2">
            Here&apos;s Why You&apos;re Losing Jobs
          </h2>
          <p className="text-center text-slate-600 text-lg mb-10">Sound familiar?</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {/* Card 1: Slow turtle with phone */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-slate-200">
              <div className="w-16 h-16 mb-5 flex items-center justify-center text-4xl">
                <span className="relative inline-block">
                  🐢
                  <svg className="absolute -right-2 -bottom-1 w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#0F1419] mb-3">
                Your Website Takes 8 Seconds to Load
              </h3>
              <p className="text-slate-600 text-[0.95rem] leading-relaxed">
                Customers tap back. They call the next guy. You never knew they visited.
              </p>
            </div>

            {/* Card 2: Phone with red X and money flying away */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-slate-200">
              <div className="w-16 h-16 mb-5 flex items-center justify-center relative">
                <svg className="w-12 h-12 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="absolute top-0 right-0 w-8 h-8 flex items-center justify-center text-red-500 font-bold text-lg">✕</span>
                <span className="absolute -top-1 -right-2 text-red-500 text-xs font-bold">£</span>
                <span className="absolute top-2 -right-3 text-red-500/80 text-[10px] font-bold">£</span>
                <span className="absolute -bottom-1 right-0 text-red-500/60 text-xs font-bold">£</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#0F1419] mb-3">
                You Miss enquiries While Working
              </h3>
              <p className="text-slate-600 text-[0.95rem] leading-relaxed">
                On a roof? In a crawl space? That voicemail goes to your competitor.
              </p>
            </div>

            {/* Card 3: Invoice with £4,000 crossed out */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-slate-200">
              <div className="w-16 h-16 mb-5 flex items-center justify-center">
                <div className="relative bg-slate-100 rounded-lg p-2 w-14 h-14 flex items-center justify-center border border-slate-200">
                  <svg className="w-6 h-6 text-slate-500 absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-red-600 font-bold text-xs line-through relative z-10">£4,000</span>
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#0F1419] mb-3">
                Agencies Charge £4k and Disappear
              </h3>
              <p className="text-slate-600 text-[0.95rem] leading-relaxed">
                6 weeks later, still no site. We&apos;ve launched 47 trade sites in 48 hours.
              </p>
            </div>
          </div>

          {/* Statistic banner */}
          <div className="bg-[#0F1419] text-white rounded-xl py-5 px-6 text-center">
            <p className="text-base md:text-lg font-semibold">
              The average tradesperson loses <span className="text-[#F59E0B]">12 leads/month</span> to slow websites
            </p>
          </div>
        </div>
      </section>

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

      {/* Managed Services Section */}
      <section className="bg-slate-50 py-20 px-5">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-[1.8rem] md:text-[2.2rem] mb-4 text-center text-[#2d3748]">
            Managed Services (Optional)
          </h2>
          <p className="text-[1.1rem] md:text-[1.2rem] mb-8 text-center text-slate-700 max-w-[800px] mx-auto">
            For businesses that want us to handle enquiries end-to-end — not just build the system.
          </p>
          <div className="max-w-[700px] mx-auto mb-8">
            <ul className="list-none space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#4A9EFF] text-xl font-bold mt-0.5">•</span>
                <span className="text-[1.1rem] text-slate-700">We reply to incoming enquiries</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#4A9EFF] text-xl font-bold mt-0.5">•</span>
                <span className="text-[1.1rem] text-slate-700">We manage bookings and calendars</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#4A9EFF] text-xl font-bold mt-0.5">•</span>
                <span className="text-[1.1rem] text-slate-700">We send and chase quotes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#4A9EFF] text-xl font-bold mt-0.5">•</span>
                <span className="text-[1.1rem] text-slate-700">We follow up missed enquiries</span>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <a
              href="/managed-services"
              className="px-[35px] py-4 text-[1.1rem] rounded-lg cursor-pointer font-semibold no-underline inline-block transition-all duration-200 bg-white text-[#4A9EFF] border-2 border-[#4A9EFF] hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)]"
            >
              See how managed services work
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Section - Simple Pricing for Trades */}
      <section id="pricing" className="bg-slate-100 py-20 px-5">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-[1.8rem] md:text-[2.25rem] font-extrabold text-[#0F1419] text-center mb-4">
            Simple Pricing for Trades
          </h2>

          {/* Trust elements - comparison and guarantee */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10 text-sm text-slate-600">
            <span className="line-through">vs £3–4k agency fees</span>
            <span>•</span>
            <span>Money-back guarantee if not live in 48 hours</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Option 1: Just the Fix */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-slate-200 flex flex-col">
              <h3 className="text-xl font-bold text-[#0F1419] mb-1">Just the Fix</h3>
              <p className="text-slate-600 text-sm mb-4">Already have a site</p>
              <div className="text-3xl font-extrabold text-[#0F1419] mb-6">£449</div>
              <p className="text-slate-500 text-sm mb-6">one-time • VAT included</p>
              <ul className="list-none space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <span className="text-[#22C55E] mt-0.5">✓</span>
                  <span className="text-slate-700">Speed optimization + mobile fix</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#22C55E] mt-0.5">✓</span>
                  <span className="text-slate-700">Missed enquiry SMS alerts setup</span>
                </li>
              </ul>
              <a
                href="#contact"
                className="block w-full py-4 px-6 text-center font-semibold rounded-lg border-2 border-slate-300 text-[#0F1419] hover:border-slate-500 hover:bg-slate-50 transition-all no-underline"
              >
                Book This
              </a>
            </div>

            {/* Option 2: The Full Package - RECOMMENDED */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-xl border-2 border-[#F59E0B] relative flex flex-col">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F59E0B] text-[#0F1419] text-xs font-bold px-4 py-1 rounded-full">
                RECOMMENDED
              </div>
              <h3 className="text-xl font-bold text-[#0F1419] mb-1 mt-2">The Full Package</h3>
              <p className="text-slate-600 text-sm mb-4">Need a new site</p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl font-extrabold text-[#0F1419]">£449</span>
                <span className="text-slate-500 text-sm">setup</span>
              </div>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-2xl font-bold text-[#0F1419]">+ £39</span>
                <span className="text-slate-500 text-sm">/month</span>
              </div>
              <ul className="list-none space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <span className="text-[#22C55E] mt-0.5">✓</span>
                  <span className="text-slate-700">Custom website built in 48 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#22C55E] mt-0.5">✓</span>
                  <span className="text-slate-700">Missed enquiry SMS alerts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#22C55E] mt-0.5">✓</span>
                  <span className="text-slate-700">Google Business Profile optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#22C55E] mt-0.5">✓</span>
                  <span className="text-slate-700">3 months priority support</span>
                </li>
              </ul>
              <a
                href="#contact"
                className="block w-full py-4 px-6 text-center font-bold rounded-lg bg-[#F59E0B] text-[#0F1419] hover:bg-[#FBBF24] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(245,158,11,0.4)] transition-all no-underline"
              >
                Get Started This Week
              </a>
            </div>
          </div>

          {/* Payment & cancel */}
          <div className="mt-8 text-center space-y-2">
            <p className="text-sm text-slate-600">Bank transfer or card • VAT included</p>
            <span className="inline-flex items-center gap-2 bg-slate-200/80 text-slate-600 text-sm font-medium px-4 py-2 rounded-full">
              Cancel anytime
            </span>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-20 px-5">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[1.8rem] md:text-[2.25rem] font-extrabold text-[#0F1419] text-center mb-12">
            How It Works
          </h2>

          {/* 3 Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 max-w-[1100px] mx-auto mb-14">
            {/* Step 1: 15-Minute Call */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-[#0F1419] text-[#F59E0B]">
                <div className="relative">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <svg className="absolute -bottom-2 -right-2 w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#0F1419] mb-3">15-Minute Call</h3>
              <p className="text-slate-600 leading-relaxed">
                Show us your current site. We identify the leaks.
              </p>
            </div>

            {/* Step 2: We Build Tonight - wrench (trade) + code brackets (tech) */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-[#0F1419] text-[#F59E0B]">
                <div className="flex flex-col items-center">
                  <span className="text-3xl">🔧</span>
                  <span className="text-[10px] font-mono text-slate-400 mt-0.5">&lt;/&gt;</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#0F1419] mb-3">We Build Tonight</h3>
              <p className="text-slate-600 leading-relaxed">
                While you sleep, we build. You wake up to a new site.
              </p>
            </div>

            {/* Step 3: You Stop Losing Jobs */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-2xl bg-[#0F1419] text-[#F59E0B] relative">
                <svg className="w-10 h-10 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span className="absolute -top-1 -right-1 text-[#22C55E] text-xs font-bold">£</span>
                <span className="absolute top-0 -right-2 text-[#22C55E]/80 text-[10px] font-bold">£</span>
                <span className="absolute -bottom-1 right-0 text-[#22C55E]/60 text-xs font-bold">£</span>
              </div>
              <h3 className="text-xl font-bold text-[#0F1419] mb-3">You Stop Losing Jobs</h3>
              <p className="text-slate-600 leading-relaxed">
                SMS alerts hit your phone. Customers actually reach you.
              </p>
            </div>
          </div>

          {/* Timeline graphic */}
          <div className="max-w-[700px] mx-auto mb-10">
            <div className="bg-[#0F1419] rounded-xl py-6 px-6 md:px-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                  <span className="text-[#F59E0B] font-bold text-sm md:text-base">Monday: Call</span>
                  <span className="text-slate-500 hidden md:inline">→</span>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                  <span className="text-white font-semibold text-sm md:text-base">Tuesday: Site Live</span>
                  <span className="text-slate-500 hidden md:inline">→</span>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <span className="text-[#22C55E] font-bold text-sm md:text-base">Wednesday: First Alert</span>
                </div>
              </div>
            </div>
          </div>

          {/* Small print */}
          <p className="text-center text-slate-500 text-sm">
            No meetings. No back-and-forth. Just results.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="bg-[#0F1419] py-16 md:py-20 px-5 relative">
        {/* Scarcity bar above header */}
        <div className="bg-amber-500/20 border-b border-amber-500/40 py-2 px-5 text-center">
          <p className="text-amber-200 text-sm font-medium">
            ⚠️ We build max 5 sites/week to ensure 48-hour delivery
          </p>
        </div>

        <div className="max-w-[1100px] mx-auto px-5 pt-12">
          {/* Slot counter */}
          <p className="text-center text-amber-400 font-bold text-sm mb-6">
            🔥 Only 2 slots left this week
          </p>

          <h2 className="text-[1.75rem] md:text-[2.5rem] font-extrabold text-white text-center mb-3">
            One More Missed Call = One More £2.5K Job to Your Competitor
          </h2>
          <p className="text-center text-slate-400 text-lg mb-10">
            We only build 5 sites per week. WhatsApp us now for instant response.
          </p>

          {/* 3 CTA buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* PRIMARY: WhatsApp */}
            <div className="md:col-span-1">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-5 px-6 rounded-xl bg-[#25D366] text-white font-bold text-center no-underline hover:bg-[#20BD5A] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-all"
              >
                <span className="inline-block animate-pulse mr-1">💬</span> WhatsApp Now for Instant Quote
              </a>
              <p className="text-center text-slate-400 text-xs mt-2">⚡ Usually reply in 5 mins</p>
            </div>

            {/* SECONDARY: Phone */}
            <div>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="block w-full py-4 px-6 rounded-xl border-2 border-slate-500 text-white font-semibold text-center no-underline hover:border-white hover:bg-white/5 transition-all"
              >
                📞 Emergency Call
              </a>
              <p className="text-center text-slate-500 text-xs mt-2">For urgent missed enquiry fixes</p>
            </div>

            {/* TERTIARY: Calendar */}
            <div>
              <a
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 px-6 rounded-xl bg-transparent text-slate-300 font-semibold text-center no-underline border border-slate-600 hover:border-slate-500 hover:bg-white/5 transition-all"
              >
                📅 Book 15-Min Demo
              </a>
              <p className="text-center text-slate-500 text-xs mt-2">See a live trade site example</p>
            </div>
          </div>

          {/* Trust badge */}
          <p className="text-center text-slate-500 text-sm mb-0">
            ⏱️ Response time: 2 hours max | 💬 WhatsApp priority support
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0d12] py-12 px-5 border-t border-slate-800">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-slate-400 text-center md:text-left text-sm">
            Built by trades, for trades. Emergency website fixes available 24/7.
          </p>
          <div className="flex flex-col items-center gap-3">
            <p className="text-slate-500 text-xs">Scan to WhatsApp us (desktop)</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block p-2 bg-white rounded-lg">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(WHATSAPP_URL)}`}
                alt="WhatsApp QR Code"
                width={120}
                height={120}
                loading="lazy"
                decoding="async"
                className="block"
              />
            </a>
          </div>
        </div>
      </footer>

      {/* Sticky mobile bar - shows on scroll up, hides on scroll down */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0F1419] border-t border-slate-700 px-4 py-3 flex items-center justify-between transition-transform duration-300 ${
          stickyBarVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <span className="text-slate-400 text-sm">📱 Text us: {PHONE_DISPLAY}</span>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-lg bg-[#25D366] text-white font-bold text-sm no-underline"
        >
          WhatsApp →
        </a>
      </div>
    </div>
  );
}
