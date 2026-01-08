export const metadata = {
  title: 'Roofer Demo Website | FixBlox',
};

export default function RooferDemoPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-lg font-extrabold tracking-tight text-slate-900">Oakridge Roofing</div>
            <div className="text-sm font-semibold text-slate-500">Repairs • New Roofs • Emergency Call-Outs</div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:01234567890"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
            >
              Call: 01234 567 890
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Reliable Roofing Services You Can Trust
            </h1>
            <p className="mt-5 text-lg text-white/85 sm:text-xl">
              Local roofing repairs, replacements, and emergency call-outs — fast response, clear quotes, no hassle.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-base font-semibold text-slate-900 shadow-sm hover:bg-white/95"
              >
                Get a Free Quote
              </a>
              <a
                href="tel:01234567890"
                className="inline-flex items-center justify-center rounded-xl border border-white/70 bg-transparent px-6 py-3 text-base font-semibold text-white hover:bg-white/10"
              >
                Call Now
              </a>
            </div>
            <div className="mt-3 text-sm text-white/70">We usually respond within the same business day.</div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-5">
          <div className="text-center text-sm font-semibold text-slate-700 sm:text-base">
            Fully Insured <span className="text-amber-600/80">•</span> Local &amp; Reliable{' '}
            <span className="text-amber-600/80">•</span> Free Quotes
          </div>
          <div className="mt-2 text-center text-xs text-slate-600 sm:text-sm">
            Serving homeowners across the local area and surrounding regions.
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Services</h2>
            <p className="mt-3 text-base text-slate-600 sm:text-lg">
              Straightforward roofing help for homes and small commercial buildings.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Roof Repairs',
                desc: 'Fix slipped tiles, leaks, and storm damage quickly and safely.',
              },
              {
                title: 'New Roofs',
                desc: 'Full roof replacements with clear, itemised quotes.',
              },
              {
                title: 'Flat Roofing',
                desc: 'Durable flat roof installs and repairs for extensions and garages.',
              },
              {
                title: 'Guttering & Fascias',
                desc: 'Repair or replace gutters, fascias, and soffits to protect your home.',
              },
              {
                title: 'Roof Inspections',
                desc: 'Practical inspections with honest advice and photos if needed.',
              },
              {
                title: 'Emergency Call-Outs',
                desc: 'Fast response for urgent leaks and weather-related issues.',
              },
            ].map((s) => (
              <div key={s.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-lg font-bold text-slate-900">{s.title}</div>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Why Choose Us</h2>
            <p className="mt-3 text-base text-slate-600 sm:text-lg">A simple, professional service from first call to finish.</p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                title: 'Experienced local roofers',
                desc: 'Skilled workmanship with a focus on safety and long-term fixes.',
              },
              {
                title: 'Clear pricing with no surprises',
                desc: 'Upfront quotes and honest options—no pressure, no jargon.',
              },
              {
                title: 'Fast response and tidy workmanship',
                desc: 'We show up when we say we will and leave the site clean and safe.',
              },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-base font-bold text-slate-900">{c.title}</div>
                <p className="mt-2 text-sm text-slate-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">How It Works</h2>
            <p className="mt-3 text-base text-slate-600 sm:text-lg">Three simple steps to get your roof sorted.</p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              { step: '01', title: 'Get in touch for a free quote', desc: 'Tell us what’s going on and we’ll book a time that suits you.' },
              { step: '02', title: 'We assess and agree the work', desc: 'We inspect the issue, explain options, and confirm the cost before starting.' },
              { step: '03', title: 'Job completed quickly and professionally', desc: 'Work completed safely with tidy workmanship and clear communication.' },
            ].map((s) => (
              <div key={s.step} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-xs font-extrabold tracking-widest text-slate-500">{s.step}</div>
                <div className="mt-2 text-base font-bold text-slate-900">{s.title}</div>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Contact</h2>
            <p className="mt-3 text-base text-slate-600 sm:text-lg">
              Request a free quote and we’ll get back to you as soon as possible.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <form action="#" method="post" className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-slate-700" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700" htmlFor="phone">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
                  placeholder="Tell us what you need help with…"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-slate-900 px-6 py-3 text-base font-semibold text-white hover:bg-slate-800"
              >
                Get a Free, No-Obligation Quote
              </button>

              <p className="text-center text-xs text-slate-500">Demo form UI only — no messages are sent.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6">
          <div className="text-center text-xs text-slate-500">Example demo website built by FixBlox</div>
        </div>
      </footer>
    </main>
  );
}

