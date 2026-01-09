import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Managed Services for Trades | FixBlox',
  description: "We manage enquiries, bookings, and follow-ups so trades don't miss work.",
};

export default function ManagedServicesPage() {
  const whatsappHref = "https://wa.me/447375949211";

  return (
    <main className="bg-white text-slate-900">
      {/* Header */}
      <header className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-6xl items-baseline justify-between px-4 py-4">
          <div className="text-lg font-extrabold tracking-tight text-[#0A0E27]">FixBlox</div>
          <div className="text-sm font-semibold text-slate-500">Managed Services</div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="text-white text-center py-16 px-5 sm:py-20"
        style={{
          background: 'linear-gradient(135deg, #4A9EFF 0%, #42D9FF 100%)',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-5">
          <h1 className="text-4xl font-bold mb-6 sm:text-5xl">
            We Don't Just Build Systems — We Run Them
          </h1>
          <p className="text-xl mb-8 opacity-90 sm:text-2xl max-w-3xl mx-auto">
            Missed enquiries, forgotten follow-ups, and double bookings cost trades real money. We make sure enquiries turn into booked, paid jobs.
          </p>
          <div className="flex justify-center mt-8">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-lg rounded-lg cursor-pointer font-semibold no-underline inline-block transition-all duration-200 bg-white text-[#4A9EFF] hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)]"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="bg-[#F0F8FF] py-16 px-5 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-3xl font-bold mb-10 text-center text-slate-900 sm:text-4xl">
            Where Jobs Are Lost
          </h2>
          <ul className="list-none max-w-[700px] mx-auto space-y-4">
            <li className="p-5 bg-white rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] relative pl-12">
              <span className="absolute left-5 text-red-500 text-2xl font-bold">✗</span>
              Emails left unanswered
            </li>
            <li className="p-5 bg-white rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] relative pl-12">
              <span className="absolute left-5 text-red-500 text-2xl font-bold">✗</span>
              Quotes sent but never followed up
            </li>
            <li className="p-5 bg-white rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] relative pl-12">
              <span className="absolute left-5 text-red-500 text-2xl font-bold">✗</span>
              Jobs not added to the calendar
            </li>
            <li className="p-5 bg-white rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] relative pl-12">
              <span className="absolute left-5 text-red-500 text-2xl font-bold">✗</span>
              Leads paid for but wasted
            </li>
          </ul>
        </div>
      </section>

      {/* What We Manage Section */}
      <section className="bg-white py-16 px-5 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-3xl font-bold mb-10 text-center text-slate-900 sm:text-4xl">
            What We Handle For You
          </h2>
          <ul className="list-none max-w-[700px] mx-auto space-y-4">
            <li className="p-5 bg-[#F0F8FF] rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] relative pl-12">
              <span className="absolute left-5 text-green-500 text-2xl font-bold">✓</span>
              Enquiry inbox management
            </li>
            <li className="p-5 bg-[#F0F8FF] rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] relative pl-12">
              <span className="absolute left-5 text-green-500 text-2xl font-bold">✓</span>
              Job booking & calendar updates
            </li>
            <li className="p-5 bg-[#F0F8FF] rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] relative pl-12">
              <span className="absolute left-5 text-green-500 text-2xl font-bold">✓</span>
              Sending quotes from templates
            </li>
            <li className="p-5 bg-[#F0F8FF] rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] relative pl-12">
              <span className="absolute left-5 text-green-500 text-2xl font-bold">✓</span>
              Chasing quote approvals
            </li>
            <li className="p-5 bg-[#F0F8FF] rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] relative pl-12">
              <span className="absolute left-5 text-green-500 text-2xl font-bold">✓</span>
              Payment follow-ups
            </li>
          </ul>
        </div>
      </section>

      {/* What We Don't Do Section */}
      <section className="bg-[#F0F8FF] py-16 px-5 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-3xl font-bold mb-10 text-center text-slate-900 sm:text-4xl">
            What This Is Not
          </h2>
          <ul className="list-none max-w-[700px] mx-auto space-y-4 mb-6">
            <li className="p-5 bg-white rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] relative pl-12">
              <span className="absolute left-5 text-slate-400 text-2xl font-bold">✗</span>
              No personal inbox management
            </li>
            <li className="p-5 bg-white rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] relative pl-12">
              <span className="absolute left-5 text-slate-400 text-2xl font-bold">✗</span>
              No supplier or staff coordination
            </li>
            <li className="p-5 bg-white rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] relative pl-12">
              <span className="absolute left-5 text-slate-400 text-2xl font-bold">✗</span>
              No bookkeeping or accounts
            </li>
            <li className="p-5 bg-white rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] relative pl-12">
              <span className="absolute left-5 text-slate-400 text-2xl font-bold">✗</span>
              No general VA work
            </li>
          </ul>
          <p className="text-center text-slate-600 text-lg max-w-2xl mx-auto">
            This keeps the service focused, reliable, and sustainable.
          </p>
        </div>
      </section>

      {/* How This Fits FixBlox Section */}
      <section className="bg-white py-16 px-5 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-3xl font-bold mb-6 text-center text-slate-900 sm:text-4xl">
            How This Fits With FixBlox
          </h2>
          <div className="max-w-[800px] mx-auto text-lg text-slate-700 leading-relaxed space-y-4">
            <p>
              Websites capture enquiries, AI receptionist handles first contact, and managed services ensure conversion.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-[#F0F8FF] py-16 px-5 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-3xl font-bold mb-6 text-center text-slate-900 sm:text-4xl">
            Simple Monthly Pricing
          </h2>
          <div className="max-w-[800px] mx-auto text-lg text-slate-700 text-center">
            <p>
              Managed services are priced monthly based on enquiry volume and workflow.
            </p>
            <p className="mt-4">
              Most businesses fall between £200–£400 per month.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-white py-16 px-5 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <p className="text-center text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
            If you're too busy to manage enquiries properly, we can handle it for you.
          </p>
          <div className="flex justify-center">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-lg rounded-lg cursor-pointer font-semibold no-underline inline-block transition-all duration-200 bg-[#4A9EFF] text-white hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)]"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
