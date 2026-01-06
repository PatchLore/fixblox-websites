export default function ListingHeroPage() {
  const whatsappHref = "https://wa.me/447925990923";
  const freeExampleHref = "#before-after";

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
              Before / After
            </h2>
            <p className="mt-3 text-base text-slate-600 sm:text-lg">
              (Placeholder images — replace with real examples)
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-200">
                {/* TODO: Replace with real BEFORE image */}
                <div className="flex h-full w-full items-center justify-center text-sm font-medium text-slate-600">
                  BEFORE (replace image)
                </div>
              </div>
              <div className="mt-4 text-center text-sm font-semibold text-slate-700">Before</div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-200">
                {/* TODO: Replace with real AFTER image */}
                <div className="flex h-full w-full items-center justify-center text-sm font-medium text-slate-600">
                  AFTER (replace image)
                </div>
              </div>
              <div className="mt-4 text-center text-sm font-semibold text-slate-700">After</div>
            </div>
          </div>
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

          {/* Simple contact form placeholder */}
          <div className="mx-auto mt-6 max-w-xl rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div className="text-sm font-semibold text-slate-700">Contact form (placeholder)</div>
            <div className="mt-2 text-sm text-slate-600">
              If you want a form here, we can reuse the existing marketing contact approach without adding backend.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

