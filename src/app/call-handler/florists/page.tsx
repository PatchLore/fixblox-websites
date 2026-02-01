import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Missed Call Handling for Florists | FixBlox',
  description: "Stop missing flower orders and enquiries when you're busy. Simple call handling for florists to capture every booking.",
};

export default function FloristCallHandlerPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* Header */}
      <header className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-6xl items-baseline justify-between px-4 py-4">
          <div className="text-lg font-extrabold tracking-tight text-[#0A0E27]">FixBlox</div>
          <div className="text-sm font-semibold text-slate-500">Call Handling for Florists</div>
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
            Stop Missing Flower Orders When You're Busy
          </h1>
          <p className="text-xl mb-8 opacity-90 sm:text-2xl max-w-3xl mx-auto">
            When you're serving customers, arranging flowers, or out on deliveries, we make sure calls don't go unanswered.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#final-cta"
              className="px-8 py-4 text-lg rounded-lg cursor-pointer font-semibold no-underline inline-block transition-all duration-200 bg-white text-[#4A9EFF] hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)]"
            >
              Get Call Handling Set Up
            </a>
            <a
              href="#solution"
              className="px-8 py-4 text-base rounded-lg cursor-pointer font-medium no-underline inline-block transition-all duration-200 text-white underline hover:opacity-80"
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-[#F0F8FF] py-16 px-5 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-3xl font-bold mb-10 text-center text-slate-900 sm:text-4xl">
            Busy Florists Miss Calls Every Day
          </h2>
          <ul className="list-none max-w-[700px] mx-auto space-y-4">
            <li className="p-5 bg-white rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] relative pl-12">
              <span className="absolute left-5 text-red-500 text-2xl font-bold">✗</span>
              Customers don't leave voicemails
            </li>
            <li className="p-5 bg-white rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] relative pl-12">
              <span className="absolute left-5 text-red-500 text-2xl font-bold">✗</span>
              Calls come in during peak times
            </li>
            <li className="p-5 bg-white rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] relative pl-12">
              <span className="absolute left-5 text-red-500 text-2xl font-bold">✗</span>
              You can't answer while serving walk-ins
            </li>
            <li className="p-5 bg-white rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] relative pl-12">
              <span className="absolute left-5 text-red-500 text-2xl font-bold">✗</span>
              Missed calls often mean lost orders
            </li>
          </ul>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="bg-white py-16 px-5 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-3xl font-bold mb-6 text-center text-slate-900 sm:text-4xl">
            A Simple Way to Catch Every Enquiry
          </h2>
          <p className="text-lg text-slate-700 mb-10 max-w-3xl mx-auto text-center">
            When you can't answer the phone, the system answers politely for you and collects the details.
          </p>

          <div className="max-w-[800px] mx-auto mb-8">
            <ol className="list-none space-y-6">
              <li className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4A9EFF] text-white font-bold flex items-center justify-center text-lg">
                  1
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-lg">A customer calls your shop</div>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4A9EFF] text-white font-bold flex items-center justify-center text-lg">
                  2
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-lg">The call is answered and they're asked what they need</div>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4A9EFF] text-white font-bold flex items-center justify-center text-lg">
                  3
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-lg">You receive a text with their details so you can follow up</div>
                </div>
              </li>
            </ol>
          </div>

          <p className="text-center text-slate-600 text-lg max-w-2xl mx-auto">
            It doesn't replace you — it just makes sure orders aren't missed.
          </p>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="bg-[#F0F8FF] py-16 px-5 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-3xl font-bold mb-10 text-center text-slate-900 sm:text-4xl">
            Who This Is For
          </h2>
          <ul className="list-none max-w-[700px] mx-auto space-y-4">
            <li className="p-5 bg-white rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] relative pl-12">
              <span className="absolute left-5 text-green-500 text-2xl font-bold">✓</span>
              Florists handling walk-ins and phone orders
            </li>
            <li className="p-5 bg-white rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] relative pl-12">
              <span className="absolute left-5 text-green-500 text-2xl font-bold">✓</span>
              Shops busy during peak seasons
            </li>
            <li className="p-5 bg-white rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.05)] relative pl-12">
              <span className="absolute left-5 text-green-500 text-2xl font-bold">✓</span>
              Florists who miss calls while arranging or delivering
            </li>
          </ul>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-white py-16 px-5 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-3xl font-bold mb-10 text-center text-slate-900 sm:text-4xl">
            Simple Pricing
          </h2>
          <div className="max-w-[600px] mx-auto rounded-2xl border-2 border-slate-200 bg-white p-8 shadow-lg">
            <div className="text-center space-y-4">
              <div className="text-4xl font-bold text-slate-900">£100</div>
              <div className="text-lg text-slate-600">one-off setup</div>
              <div className="pt-4 border-t border-slate-200">
                <div className="text-4xl font-bold text-slate-900">£70</div>
                <div className="text-lg text-slate-600">per month</div>
              </div>
              <p className="pt-4 text-sm text-slate-500">
                Usually pays for itself if it saves just one order a month.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Reversal Section */}
      <section className="bg-[#F0F8FF] py-12 px-5">
        <div className="max-w-[1200px] mx-auto px-5">
          <p className="text-center text-slate-700 text-lg max-w-2xl mx-auto">
            No long-term contracts. Cancel anytime if it's not useful.
          </p>
        </div>
      </section>

      {/* Managed Services Cross-Sell Section */}
      <section className="bg-white py-12 px-5">
        <div className="max-w-[1200px] mx-auto px-5">
          <h3 className="text-2xl font-bold mb-4 text-center text-slate-900 sm:text-3xl">
            Already getting enquiries?
          </h3>
          <p className="text-center text-slate-600 text-base mb-6 max-w-2xl mx-auto">
            We can also manage replies, bookings, and follow-ups for you — so enquiries don't get lost.
          </p>
          <div className="text-center">
            <a
              href="/managed-services"
              className="inline-block text-[#4A9EFF] font-semibold text-base hover:underline"
            >
              View managed services
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="final-cta" className="bg-white py-16 px-5 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-5">
          <h2 className="text-3xl font-bold mb-6 text-center text-slate-900 sm:text-4xl">
            Ready to Stop Missing Orders?
          </h2>
          <div className="flex justify-center mt-10">
            <a
              href="https://wa.me/447375949211"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-lg rounded-lg cursor-pointer font-semibold no-underline inline-block transition-all duration-200 bg-[#4A9EFF] text-white hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)]"
            >
              Message Us on WhatsApp
            </a>
          </div>
          <p className="text-center text-slate-600 mt-4 text-sm">
            We'll ask a few questions and get you set up quickly.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6">
        <div className="max-w-[1200px] mx-auto px-5">
          <p className="text-center text-xs text-slate-500">
            FixBlox helps small local businesses avoid missed enquiries.
          </p>
        </div>
      </footer>
    </main>
  );
}
