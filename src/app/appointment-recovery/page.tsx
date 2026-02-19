import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Re-Engagement Sprint for Aesthetic Clinics | FixBlox',
  description:
    'Fill empty appointment slots by re-engaging past enquiries and patients — without ads or long contracts. GDPR & PECR aware, permission-first messaging, performance-based.',
};

export default function AppointmentRecoveryPage() {
  // Reuse the existing Formspree endpoint already used on the FixBlox Websites homepage.
  const formAction = 'https://formspree.io/f/xqeavjrq';

  return (
    <main className="bg-white text-slate-900">
      {/* Simple header (no navigation links added) */}
      <header className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-6xl items-baseline justify-between px-4 py-4">
          <div className="text-lg font-extrabold tracking-tight text-[#0A0E27]">FixBlox</div>
          <div className="text-sm font-semibold text-slate-500">Private pilot</div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section
        className="text-white text-center py-16 px-5 sm:py-20"
        style={{ background: 'linear-gradient(135deg, #4A9EFF 0%, #42D9FF 100%)' }}
      >
        <div className="max-w-[1200px] mx-auto px-5">
          <h1 className="text-4xl font-bold mb-6 sm:text-5xl">
            Turn Past Enquiries Into Booked Appointments
          </h1>
          <p className="text-xl mb-8 opacity-90 sm:text-2xl max-w-3xl mx-auto">
            We help aesthetic clinics fill empty appointment slots by re-engaging past enquiries and
            patients — without ads or long contracts.
          </p>

          <div className="flex justify-center mt-8">
            <a
              href="#book"
              className="px-8 py-4 text-lg rounded-lg cursor-pointer font-semibold no-underline inline-block transition-all duration-200 bg-white text-[#4A9EFF] hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)]"
            >
              Book a 10-minute call
            </a>
          </div>

          <p className="mt-5 text-sm font-semibold text-white/90">
            No upfront cost. GDPR-aware. Performance-based.
          </p>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="bg-[#F0F8FF] py-16 px-5 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-3xl font-bold mb-10 text-center text-slate-900 sm:text-4xl">
            Most clinics sit on lost revenue
          </h2>

          <ul className="list-none max-w-[800px] mx-auto space-y-4">
            <li className="p-5 bg-white rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] relative pl-12">
              <span className="absolute left-5 text-slate-500 text-2xl font-bold">•</span>
              Past enquiries that never booked
            </li>
            <li className="p-5 bg-white rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] relative pl-12">
              <span className="absolute left-5 text-slate-500 text-2xl font-bold">•</span>
              Patients who haven’t returned in 6–18 months
            </li>
            <li className="p-5 bg-white rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] relative pl-12">
              <span className="absolute left-5 text-slate-500 text-2xl font-bold">•</span>
              Empty slots that can’t be recovered once the day passes
            </li>
          </ul>

          <div className="max-w-[900px] mx-auto mt-8 text-center text-lg text-slate-700 leading-relaxed">
            Clinics already invest time and money to generate enquiries — but most never get followed up
            properly. A simple, respectful check-in can bring the right patients back at the right time.
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="bg-white py-16 px-5 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-3xl font-bold mb-8 text-center text-slate-900 sm:text-4xl">
            Our Client Re-Engagement Sprint
          </h2>

          <div className="max-w-[900px] mx-auto text-lg text-slate-700 leading-relaxed">
            <ul className="list-none space-y-4">
              <li className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#4A9EFF] to-[#42D9FF] text-sm font-extrabold text-white">
                  ✓
                </span>
                <div>We contact past enquiries or patients who have already interacted with the clinic</div>
              </li>
              <li className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#4A9EFF] to-[#42D9FF] text-sm font-extrabold text-white">
                  ✓
                </span>
                <div>Messages are polite, permission-first, and compliant</div>
              </li>
              <li className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#4A9EFF] to-[#42D9FF] text-sm font-extrabold text-white">
                  ✓
                </span>
                <div>The goal is simple: book high-value treatments back into the diary</div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS (3 STEPS) */}
      <section className="bg-slate-50 py-16 px-5 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-3xl font-bold mb-10 text-center text-slate-900 sm:text-4xl">
            How It Works
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#4A9EFF] to-[#42D9FF] text-base font-extrabold text-white">
                  1
                </div>
                <h3 className="text-lg font-bold text-[#0A0E27]">
                  We review your existing enquiry or patient list
                </h3>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#4A9EFF] to-[#42D9FF] text-base font-extrabold text-white">
                  2
                </div>
                <h3 className="text-lg font-bold text-[#0A0E27]">
                  We send a short, compliant message offering a relevant treatment or check-in
                </h3>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#4A9EFF] to-[#42D9FF] text-base font-extrabold text-white">
                  3
                </div>
                <h3 className="text-lg font-bold text-[#0A0E27]">
                  Interested patients are booked directly with your clinic
                </h3>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-lg text-slate-700">
            You only pay for booked appointments.
          </p>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="bg-white py-16 px-5 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-3xl font-bold mb-10 text-center text-slate-900 sm:text-4xl">
            Who This Is For
          </h2>

          <ul className="list-none max-w-[800px] mx-auto space-y-4">
            <li className="p-5 bg-[#F0F8FF] rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] relative pl-12">
              <span className="absolute left-5 text-[#4A9EFF] text-2xl font-bold">✓</span>
              Aesthetic clinics &amp; med spas
            </li>
            <li className="p-5 bg-[#F0F8FF] rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] relative pl-12">
              <span className="absolute left-5 text-[#4A9EFF] text-2xl font-bold">✓</span>
              Botox &amp; filler providers
            </li>
            <li className="p-5 bg-[#F0F8FF] rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] relative pl-12">
              <span className="absolute left-5 text-[#4A9EFF] text-2xl font-bold">✓</span>
              Skin &amp; laser clinics
            </li>
            <li className="p-5 bg-[#F0F8FF] rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] relative pl-12">
              <span className="absolute left-5 text-[#4A9EFF] text-2xl font-bold">✓</span>
              Clinics with unused appointment capacity
            </li>
          </ul>

          <p className="mt-6 text-center text-sm text-slate-600 max-w-2xl mx-auto">
            This service is not suitable for cold lists or purchased data.
          </p>
        </div>
      </section>

      {/* PRICING / RISK REVERSAL */}
      <section className="bg-[#F0F8FF] py-16 px-5 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-3xl font-bold mb-6 text-center text-slate-900 sm:text-4xl">
            Simple, low-risk pricing
          </h2>

          <div className="max-w-[900px] mx-auto text-center text-lg text-slate-700 leading-relaxed space-y-4">
            <p>For our pilot clients, there is no upfront fee.</p>
            <p>
              You only pay per booked appointment for high-value treatments.
              <br />
              If no one books, you don’t pay.
            </p>
          </div>
        </div>
      </section>

      {/* COMPLIANCE & TRUST */}
      <section className="bg-white py-16 px-5 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-3xl font-bold mb-10 text-center text-slate-900 sm:text-4xl">
            GDPR &amp; PECR aware
          </h2>

          <ul className="list-none max-w-[800px] mx-auto space-y-4">
            <li className="p-5 bg-slate-50 rounded-lg border border-slate-200 shadow-sm relative pl-12">
              <span className="absolute left-5 text-[#4A9EFF] text-2xl font-bold">✓</span>
              Uses existing clinic contacts only
            </li>
            <li className="p-5 bg-slate-50 rounded-lg border border-slate-200 shadow-sm relative pl-12">
              <span className="absolute left-5 text-[#4A9EFF] text-2xl font-bold">✓</span>
              Permission-first messaging
            </li>
            <li className="p-5 bg-slate-50 rounded-lg border border-slate-200 shadow-sm relative pl-12">
              <span className="absolute left-5 text-[#4A9EFF] text-2xl font-bold">✓</span>
              Clear opt-out included
            </li>
            <li className="p-5 bg-slate-50 rounded-lg border border-slate-200 shadow-sm relative pl-12">
              <span className="absolute left-5 text-[#4A9EFF] text-2xl font-bold">✓</span>
              Client remains data controller
            </li>
          </ul>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="book" className="bg-slate-50 py-16 px-5 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-3xl font-bold mb-6 text-center text-slate-900 sm:text-4xl">
            Want to fill empty slots this month?
          </h2>

          <div className="flex justify-center mt-8">
            <a
              href="#contact-form"
              className="px-8 py-4 text-lg rounded-lg cursor-pointer font-semibold no-underline inline-block transition-all duration-200 bg-white text-[#4A9EFF] hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)]"
            >
              Book a 10-minute call
            </a>
          </div>

          <p className="mt-4 text-center text-sm text-slate-600">
            We’ll tell you honestly if this will work for your clinic.
          </p>

          <div className="mt-10 max-w-[640px] mx-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <form id="contact-form" action={formAction} method="POST" className="space-y-5">
              <input type="hidden" name="source" value="appointment-recovery" />
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-base outline-none focus:border-[#4A9EFF]"
                />
              </div>

              <div>
                <label htmlFor="clinic" className="block text-sm font-semibold text-slate-900 mb-2">
                  Clinic name
                </label>
                <input
                  id="clinic"
                  name="clinic"
                  type="text"
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-base outline-none focus:border-[#4A9EFF]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-base outline-none focus:border-[#4A9EFF]"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                  Phone (optional)
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 text-base outline-none focus:border-[#4A9EFF]"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 text-lg rounded-lg font-semibold transition-all duration-200 text-white hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)]"
                style={{ background: 'linear-gradient(135deg, #4A9EFF 0%, #42D9FF 100%)' }}
              >
                Book a 10-minute call
              </button>

              <p className="text-center text-xs text-slate-500">
                We’ll reply to arrange a short call. No pressure.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER NOTE */}
      <footer className="border-t border-slate-100 bg-white py-10 px-5">
        <div className="mx-auto max-w-6xl px-4 text-center text-sm text-slate-600">
          <a href="/websites/" className="font-semibold text-[#4A9EFF] hover:underline">
            FixBlox
          </a>{' '}
          also provides websites, call handling, and managed enquiry systems for service businesses.
        </div>
      </footer>
    </main>
  );
}

