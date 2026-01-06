'use client';

import { useEffect, useState } from 'react';

export default function ListingHeroPage() {
  const whatsappHref = "https://wa.me/447925990923";
  const freeExampleHref = "#before-after";
  // Why images weren’t rendering:
  // - Next.js only serves static files from /public (not from /src or repo root).
  // - This project also uses `basePath: "/websites"` so public assets are served at
  //   `/websites/<asset>`. A plain <img> does NOT auto-prefix the basePath.
  const beforeImageSrc = "/websites/images/before.png";
  const afterImageSrc = "/websites/images/after.jpg";
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [redirectUrl, setRedirectUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Return to this page after Formspree submission
      setRedirectUrl(`${window.location.origin}${window.location.pathname}?submitted=true#form`);
    }

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('submitted') === 'true') {
      setSubmitStatus('success');
      window.history.replaceState({}, '', window.location.pathname + '#form');
    }
  }, []);

  return (
    <main className="bg-white text-slate-900">
      {/* Simple header */}
      <header className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-6xl items-baseline justify-between px-4 py-4">
          <div className="text-lg font-extrabold tracking-tight text-[#0A0E27]">FixBlox</div>
          <div className="text-sm font-semibold text-slate-500">Listing Hero</div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0066FF] to-[#00D9FF]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Make Your Property Listings Look £50k More Expensive — In 24 Hours
            </h1>
            <p className="mt-5 text-lg text-white/90 sm:text-xl">
              Professional listing photo polish for estate agents.
              <br />
              More clicks. Better enquiries. Faster sales.
            </p>
            <p className="mt-4 text-sm font-semibold text-white/85">Listing Hero by FixBlox</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-base font-semibold text-[#0066FF] shadow-sm transition hover:bg-white/95"
              >
                WhatsApp Us Your Photos
              </a>
              <a
                href={freeExampleHref}
                className="inline-flex items-center justify-center rounded-xl border border-white/80 bg-transparent px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-white/10"
              >
                Get a Free Example
              </a>
              <div className="text-sm text-white/80">24-hour turnaround • Portal-ready edits</div>
            </div>
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section id="before-after" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#0A0E27] sm:text-4xl">
              See the Difference
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-200">
                {/* Served from /public/images via basePath => /websites/images/before.png */}
                <img
                  src={beforeImageSrc}
                  alt="Before — Original listing photo"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 text-center text-sm font-semibold text-slate-700">
                Before — Original listing photo
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-200">
                {/* Served from /public/images via basePath => /websites/images/after.jpg */}
                <img
                  src={afterImageSrc}
                  alt="After — 24-hour professional polish"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 text-center text-sm font-semibold text-slate-700">
                After — 24-hour professional polish
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-slate-500">
            Example edit using a stock property image to demonstrate our enhancement process.
          </p>
        </div>
      </section>

      {/* What We Fix */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#0A0E27] sm:text-4xl">
              What We Fix
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-3xl">
            <ul className="space-y-3">
              <li className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#0066FF] to-[#00D9FF] text-sm font-extrabold text-white">
                  ✓
                </span>
                <div>
                  <div className="font-semibold text-[#0A0E27]">Exposure & colour</div>
                </div>
              </li>
              <li className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#0066FF] to-[#00D9FF] text-sm font-extrabold text-white">
                  ✓
                </span>
                <div>
                  <div className="font-semibold text-[#0A0E27]">Sky replacement (blue / dusk)</div>
                </div>
              </li>
              <li className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#0066FF] to-[#00D9FF] text-sm font-extrabold text-white">
                  ✓
                </span>
                <div>
                  <div className="font-semibold text-[#0A0E27]">Window pull-through</div>
                </div>
              </li>
              <li className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#0066FF] to-[#00D9FF] text-sm font-extrabold text-white">
                  ✓
                </span>
                <div>
                  <div className="font-semibold text-[#0A0E27]">Portal-ready images</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#0A0E27] sm:text-4xl">
              How It Works
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#0066FF] to-[#00D9FF] text-base font-extrabold text-white">
                  1
                </div>
                <h3 className="text-lg font-bold text-[#0A0E27]">Upload photos (Drive / WhatsApp)</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">Send your listing photos over in minutes.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#0066FF] to-[#00D9FF] text-base font-extrabold text-white">
                  2
                </div>
                <h3 className="text-lg font-bold text-[#0A0E27]">We edit within 24 hours</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">Fast turnaround, consistent results.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#0066FF] to-[#00D9FF] text-base font-extrabold text-white">
                  3
                </div>
                <h3 className="text-lg font-bold text-[#0A0E27]">You upload to Rightmove / Zoopla</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">Post polished images and win better enquiries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#0A0E27] sm:text-4xl">
              Pricing
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="text-center">
              <div className="text-sm font-semibold text-slate-600">£49 per listing</div>
              <div className="mt-2 text-5xl font-extrabold tracking-tight text-[#0A0E27]">£49</div>
              <div className="mt-3 text-sm text-slate-600">One-time payment</div>
              <div className="mt-1 text-sm text-slate-600">No contracts</div>
            </div>

            <div className="mt-8">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#0066FF] to-[#00D9FF] px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:opacity-95"
              >
                WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#0A0E27] sm:text-4xl">
              Who This Is For
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <ul className="space-y-3 text-sm text-slate-700 sm:text-base">
              <li>Estate agents who want more clicks and better enquiries on Rightmove / Zoopla</li>
              <li>Lettings teams wanting consistent, polished listings across a portfolio</li>
              <li>Agencies that need fast, reliable edits without changing photographers</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#0A0E27] sm:text-4xl">
              Final CTA
            </h2>
            <p className="mt-3 text-base text-slate-600 sm:text-lg">
              Message us on WhatsApp and send your photos — we’ll take it from there.
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-xl">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-3 text-base font-semibold text-[#0066FF] shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50"
            >
              WhatsApp Us Your Photos
            </a>
          </div>

          {/* Formspree contact form (secondary CTA) */}
          <section id="form" className="mx-auto mt-10 max-w-xl">
            <h3 className="text-center text-xl font-bold tracking-tight text-[#0A0E27]">
              Prefer a Form Instead?
            </h3>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              {submitStatus === 'success' ? (
                <div className="text-center py-2">
                  <div className="text-green-700 text-base font-semibold">
                    Thanks — we’ll be in touch shortly.
                  </div>
                </div>
              ) : (
                <form action="https://formspree.io/f/xqeavjrq" method="POST" className="space-y-4">
                  <input type="hidden" name="_subject" value="New Website Enquiry – FixBlox" />
                  <input type="hidden" name="_next" value={redirectUrl} />
                  <input type="hidden" name="source" value="listing-hero" />

                  <div>
                    <label htmlFor="email" className="block mb-2 font-semibold text-[#2d3748]">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full p-3 border-2 border-[#e2e8f0] rounded-md text-base font-sans transition-colors focus:outline-none focus:border-[#4A9EFF] bg-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 font-semibold text-[#2d3748]">
                      Message (optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full p-3 border-2 border-[#e2e8f0] rounded-md text-base font-sans transition-colors focus:outline-none focus:border-[#4A9EFF] bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full p-4 text-white border-none rounded-md text-[1.05rem] font-semibold cursor-pointer"
                    style={{
                      background: 'linear-gradient(135deg, #4A9EFF 0%, #42D9FF 100%)',
                    }}
                  >
                    Send Details
                  </button>

                  <p className="text-center text-sm text-slate-600">
                    We’ll get back to you within one working day.
                  </p>
                </form>
              )}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

