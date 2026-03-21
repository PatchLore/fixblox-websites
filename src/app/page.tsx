'use client';

import { useEffect, useState, useRef } from 'react';
import WaitlistSection from '../components/WaitlistSection';

const WHATSAPP_URL = `https://wa.me/447925990923?text=Hi%20FixBlox%2C%20I%27m%20a%20tradesperson%20interested%20in%20the%20AI%20receptionist`;
const CALENDLY_LINK = 'https://calendly.com/fixblox/15min';
const PHONE_DISPLAY = '07925 990923';

export default function LandingPage() {
  const [stickyBarVisible, setStickyBarVisible] = useState(false);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
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
      <header className="border-b border-slate-800 bg-[#0F1419] sticky top-0 z-40">
        <div className="mx-auto flex max-w-[1200px] items-baseline justify-between px-5 py-4">
          <div className="text-lg font-extrabold tracking-tight text-white">FixBlox</div>
          <div className="text-sm font-semibold text-slate-400">AI Receptionist for Trades</div>
        </div>
      </header>

      {/* Hero Section */}
      <header className="bg-[#0F1419] text-white overflow-hidden relative border-b border-slate-800">
        <div className="max-w-[1200px] mx-auto px-5 py-16 md:py-24 relative">
          <div className="text-center mb-10 md:mb-12">
            <h1 className="text-[1.85rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-extrabold leading-tight mb-6 max-w-[900px] mx-auto">
              Your phone rings while you&apos;re on the job. <span className="text-[#F59E0B]">We answer it</span>, qualify the lead, and book the job.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-[750px] mx-auto mb-10 leading-relaxed">
              FixBlox is an AI receptionist for UK tradespeople. It answers every call, filters time-wasters, and puts real jobs straight into your diary — while you stay on the tools.
            </p>
            
            {/* Trade Tags */}
            <div className="flex flex-wrap justify-center gap-3 mb-10 text-sm font-medium text-slate-400">
              <span className="px-3 py-1 bg-slate-800/50 rounded-full border border-slate-700">Plumbers</span>
              <span className="px-3 py-1 bg-slate-800/50 rounded-full border border-slate-700">Electricians</span>
              <span className="px-3 py-1 bg-slate-800/50 rounded-full border border-slate-700">Roofers</span>
              <span className="px-3 py-1 bg-slate-800/50 rounded-full border border-slate-700">Heating engineers</span>
              <span className="px-3 py-1 bg-slate-800/50 rounded-full border border-slate-700">All trades</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-5 text-lg rounded-xl font-bold transition-all duration-200 bg-[#F59E0B] text-[#0F1419] hover:bg-[#FBBF24] hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(245,158,11,0.4)]"
              >
                WhatsApp us for a free demo
              </a>
              <a
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-5 text-lg rounded-xl font-bold transition-all duration-200 bg-transparent text-white border-2 border-slate-600 hover:border-white"
              >
                Prefer a call? Book 15 mins
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Pain Section */}
      <section className="bg-white py-20 px-5 border-b border-slate-100">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-[2rem] md:text-[2.75rem] font-extrabold text-[#0F1419] text-center mb-12">
            Sound familiar?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <div className="text-3xl mb-4">💸</div>
              <p className="text-lg text-slate-700 leading-relaxed font-medium">
                &quot;You miss a call at 9am. By 9:05, they&apos;ve called someone else. That was a £2,000 job gone.&quot;
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <div className="text-3xl mb-4">🛠️</div>
              <p className="text-lg text-slate-700 leading-relaxed font-medium">
                &quot;You&apos;re under a sink or up a roof. You can&apos;t answer. The voicemail never gets a callback.&quot;
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <div className="text-3xl mb-4">🚫</div>
              <p className="text-lg text-slate-700 leading-relaxed font-medium">
                &quot;Time-wasters clog up your day. Tyre-kickers, price-checkers, jobs 40 miles away.&quot;
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <div className="text-3xl mb-4">🌑</div>
              <p className="text-lg text-slate-700 leading-relaxed font-medium">
                &quot;Admin at night. Callbacks, quotes, rescheduling. Running a business solo with no support.&quot;
              </p>
            </div>
          </div>

          <div className="bg-[#0F1419] text-white rounded-2xl p-8 text-center shadow-xl">
            <p className="text-xl md:text-2xl font-bold leading-snug">
              The average tradesperson misses <span className="text-[#F59E0B]">14 calls a month</span>.<br className="hidden md:block" />
              At £1,500 average job value, that&apos;s <span className="text-[#F59E0B]">£21,000 a year</span> walking out the door.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-slate-50 py-20 px-5">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[2rem] md:text-[2.75rem] font-extrabold text-[#0F1419] text-center mb-16">
            Three steps. Zero admin.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="relative">
              <div className="w-16 h-16 bg-[#0F1419] text-[#F59E0B] rounded-2xl flex items-center justify-center text-2xl font-bold mb-6">1</div>
              <h3 className="text-2xl font-bold text-[#0F1419] mb-4">Attract</h3>
              <p className="text-xl font-bold text-[#0F1419] mb-2">Local postcard campaign</p>
              <p className="text-slate-600 leading-relaxed">
                We send a professionally designed postcard to 8,000 homes in your area. Your number. Your offer. Tracked with a unique QR code so you see exactly how many enquiries it drives.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="w-16 h-16 bg-[#0F1419] text-[#F59E0B] rounded-2xl flex items-center justify-center text-2xl font-bold mb-6">2</div>
              <h3 className="text-2xl font-bold text-[#0F1419] mb-4">Capture</h3>
              <p className="text-xl font-bold text-[#0F1419] mb-2">AI receptionist answers every call</p>
              <p className="text-slate-600 leading-relaxed">
                When someone calls, our AI answers in your business name. It qualifies the job — what&apos;s the problem, where are you, when do you need it. No more missed calls. No more time-wasters getting through.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="w-16 h-16 bg-[#0F1419] text-[#F59E0B] rounded-2xl flex items-center justify-center text-2xl font-bold mb-6">3</div>
              <h3 className="text-2xl font-bold text-[#0F1419] mb-4">Convert</h3>
              <p className="text-xl font-bold text-[#0F1419] mb-2">Job booked into your diary</p>
              <p className="text-slate-600 leading-relaxed">
                Qualified leads get booked straight in. You get a text with the details. You just turn up and do the work. No admin. No callbacks. No missed opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Generation Section */}
      <section className="bg-white py-20 px-5 border-b border-slate-100">
        <div className="max-w-[1100px] mx-auto text-center">
          <h2 className="text-[2rem] md:text-[2.75rem] font-extrabold text-[#0F1419] mb-6">
            We don&apos;t just answer your leads. <br className="hidden md:block" /> We generate them.
          </h2>
          <div className="max-w-[800px] mx-auto mb-12">
            <p className="text-lg md:text-xl text-slate-600 mb-6 leading-relaxed">
              Most AI receptionists wait for the phone to ring. FixBlox also makes it ring.
            </p>
            <p className="text-lg md:text-xl text-slate-600 mb-6 leading-relaxed">
              Every Pro and Growth plan includes a local direct mail campaign — a professionally designed postcard sent to 8,000 homes in your area. Your number. Your offer. A unique QR code so you can see exactly how many enquiries it drives.
            </p>
            <p className="text-lg md:text-xl font-bold text-[#0F1419] leading-relaxed">
              Physical mail. Digital tracking. Zero effort from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-[900px] mx-auto">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <p className="text-2xl font-bold text-[#F59E0B] mb-1">8,000</p>
              <p className="text-sm font-semibold text-slate-600">homes per drop</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <p className="text-2xl font-bold text-[#F59E0B] mb-1">Tracked</p>
              <p className="text-sm font-semibold text-slate-600">QR code per campaign</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <p className="text-2xl font-bold text-[#F59E0B] mb-1">Included</p>
              <p className="text-sm font-semibold text-slate-600">in Pro & Growth plans</p>
            </div>
          </div>

          <a
            href="#pricing"
            className="inline-flex items-center text-lg font-bold text-[#0F1419] hover:text-[#F59E0B] transition-colors"
          >
            See pricing →
          </a>
        </div>
      </section>

      {/* With / Without Section */}
      <section className="bg-white py-20 px-5">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Without FixBlox */}
            <div className="bg-red-50/50 border border-red-100 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-red-900 mb-6 flex items-center gap-2">
                <span className="text-2xl">✗</span> Without FixBlox
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-red-800 font-medium">
                  <span className="mt-1">✗</span> Miss calls while working
                </li>
                <li className="flex items-start gap-3 text-red-800 font-medium">
                  <span className="mt-1">✗</span> Lose jobs to competitors in minutes
                </li>
                <li className="flex items-start gap-3 text-red-800 font-medium">
                  <span className="mt-1">✗</span> Evenings spent on callbacks
                </li>
                <li className="flex items-start gap-3 text-red-800 font-medium">
                  <span className="mt-1">✗</span> No idea where leads come from
                </li>
                <li className="flex items-start gap-3 text-red-800 font-medium">
                  <span className="mt-1">✗</span> Time-wasters wasting your day
                </li>
              </ul>
            </div>

            {/* With FixBlox */}
            <div className="bg-green-50/50 border border-green-100 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-green-900 mb-6 flex items-center gap-2">
                <span className="text-2xl">✓</span> With FixBlox
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-green-800 font-medium">
                  <span className="mt-1">✓</span> Every call answered 24/7
                </li>
                <li className="flex items-start gap-3 text-green-800 font-medium">
                  <span className="mt-1">✓</span> Qualified jobs booked automatically
                </li>
                <li className="flex items-start gap-3 text-green-800 font-medium">
                  <span className="mt-1">✓</span> Evenings are yours
                </li>
                <li className="flex items-start gap-3 text-green-800 font-medium">
                  <span className="mt-1">✓</span> Know exactly what&apos;s working
                </li>
                <li className="flex items-start gap-3 text-green-800 font-medium">
                  <span className="mt-1">✓</span> Only real jobs reach you
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-slate-100 py-20 px-5">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[2rem] md:text-[2.75rem] font-extrabold text-[#0F1419] text-center mb-4">
            Simple pricing. No contracts.
          </h2>
          <p className="text-center text-slate-600 mb-12">No contracts · Cancel anytime · VAT included</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-[#0F1419] mb-2">Starter</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold text-[#0F1419]">£49</span>
                <span className="text-slate-500">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-slate-700">
                  <span className="text-green-500 font-bold">✓</span> AI receptionist
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <span className="text-green-500 font-bold">✓</span> Virtual phone number
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <span className="text-green-500 font-bold">✓</span> Call summaries by text
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <span className="text-green-500 font-bold">✓</span> Up to 100 calls/month
                </li>
              </ul>
              <a href={WHATSAPP_URL} className="block w-full py-4 bg-slate-100 text-[#0F1419] text-center rounded-xl font-bold hover:bg-slate-200 transition-colors">Choose Starter</a>
            </div>

            {/* Pro */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-[#F59E0B] relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F59E0B] text-[#0F1419] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                Recommended
              </div>
              <h3 className="text-2xl font-bold text-[#0F1419] mb-2">Pro</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold text-[#0F1419]">£99</span>
                <span className="text-slate-500">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-slate-700">
                  <span className="text-green-500 font-bold">✓</span> Everything in Starter
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <span className="text-green-500 font-bold">✓</span> Diary booking integration
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <span className="text-green-500 font-bold">✓</span> Local postcard drop (quarterly)
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <span className="text-green-500 font-bold">✓</span> QR tracking dashboard
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <span className="text-green-500 font-bold">✓</span> Unlimited calls
                </li>
              </ul>
              <a href={WHATSAPP_URL} className="block w-full py-4 bg-[#F59E0B] text-[#0F1419] text-center rounded-xl font-bold hover:bg-[#FBBF24] transition-colors">Choose Pro</a>
            </div>

            {/* Growth */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-[#0F1419] mb-2">Growth</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold text-[#0F1419]">£249</span>
                <span className="text-slate-500">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-slate-700">
                  <span className="text-green-500 font-bold">✓</span> Everything in Pro
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <span className="text-green-500 font-bold">✓</span> Voice dispatcher (60s callback)
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <span className="text-green-500 font-bold">✓</span> Monthly postcard drop
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <span className="text-green-500 font-bold">✓</span> Priority support
                </li>
              </ul>
              <a href={WHATSAPP_URL} className="block w-full py-4 bg-slate-100 text-[#0F1419] text-center rounded-xl font-bold hover:bg-slate-200 transition-colors">Choose Growth</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      {/* TODO: Replace with real testimonial later */}
      <section className="bg-white py-20 px-5">
        <div className="max-w-[800px] mx-auto text-center">
          <div className="text-4xl mb-8 text-[#F59E0B]">★★★★★</div>
          <p className="text-2xl md:text-3xl font-bold text-[#0F1419] italic mb-8 leading-relaxed">
            &quot;Hasn&apos;t missed a call since we set it up. First week it booked 3 jobs while I was on site.&quot;
          </p>
          <p className="text-lg font-bold text-slate-600">— PD Heating, Surrey</p>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-[#0F1419] text-white py-20 px-5 relative overflow-hidden">
        <div className="max-w-[1000px] mx-auto text-center relative z-10">
          <h2 className="text-[2rem] md:text-[3.5rem] font-extrabold leading-tight mb-6">
            Hear what your customers will hear
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-[700px] mx-auto mb-12">
            Book a 15-minute call and we&apos;ll show you the AI answering a live demo call in your trade. You&apos;ll know within 5 minutes if this is right for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 text-lg rounded-xl font-bold transition-all duration-200 bg-[#F59E0B] text-[#0F1419] hover:bg-[#FBBF24] hover:-translate-y-0.5"
            >
              WhatsApp us for a free demo
            </a>
            <a
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 text-lg rounded-xl font-bold transition-all duration-200 bg-transparent text-white border-2 border-slate-600 hover:border-white"
            >
              Prefer a call? Book 15 mins
            </a>
          </div>
        </div>
      </section>

      {/* Subtle Waitlist Section */}
      <div className="bg-slate-50 opacity-60 hover:opacity-100 transition-opacity">
        <WaitlistSection />
      </div>

      {/* Footer */}
      <footer className="bg-[#0a0d12] py-12 px-5 border-t border-slate-800">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-slate-400 text-center md:text-left text-sm">
            FixBlox: The AI receptionist for UK trades. Stop missing calls, start booking jobs.
          </p>
          <div className="flex flex-col items-center gap-3">
            <p className="text-slate-500 text-xs">Scan to WhatsApp us</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="block p-2 bg-white rounded-lg">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent(WHATSAPP_URL)}`}
                alt="WhatsApp QR Code"
                width={100}
                height={100}
                className="block"
              />
            </a>
          </div>
        </div>
      </footer>

      {/* Sticky mobile bar */}
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
