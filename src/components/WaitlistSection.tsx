// components/WaitlistSection.tsx
"use client";
import { useState } from "react";

export default function WaitlistSection() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  
  // Just use Formspree (free, 50 submissions/month)
  return (
    <section className="bg-slate-50 py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          AI Call Handling — Coming Soon
        </h2>
        <p className="text-lg text-slate-600 mb-8">
          Stop missing jobs while you're on the tools. Our AI receptionist answers your missed calls, 
          captures the enquiry, and books the job — automatically.
        </p>
        
        <ul className="text-left max-w-md mx-auto mb-8 space-y-3">
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            <span className="text-slate-700">Calls back missed enquiries in under 60 seconds</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            <span className="text-slate-700">Books jobs into your calendar while you work</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            <span className="text-slate-700">Works 24/7 — no staff, no missed calls</span>
          </li>
        </ul>

        {status === "success" ? (
          <div className="bg-green-100 text-green-800 px-6 py-4 rounded-lg">
            You're on the list. We'll be in touch when it's ready.
          </div>
        ) : (
          <form 
            action="https://formspree.io/f/YOUR_FORM_ID" 
            method="POST"
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              fetch(form.action, {
                method: "POST",
                body: new FormData(form),
                headers: { Accept: "application/json" }
              }).then(r => {
                if (r.ok) setStatus("success");
                else setStatus("error");
              });
            }}
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Join the Waitlist
            </button>
          </form>
        )}
        
        {status === "error" && (
          <p className="text-red-600 mt-3 text-sm">Something went wrong. Please try again.</p>
        )}
        
        <p className="text-xs text-slate-500 mt-4">
          No spam. No commitment. Just first access.
        </p>
      </div>
    </section>
  );
}