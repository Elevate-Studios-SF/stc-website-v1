const faqs = [
  {
    q: "What is the schedule for IOP?",
    a: "Our Intensive Outpatient Programs (IOP) typically run 3 to 5 days a week. We offer day tracks (morning/afternoon) and evening tracks to accommodate those who work or have childcare responsibilities.",
  },
  {
    q: "Where are you located?",
    a: "We have full-service centers in Santa Fe (Miguel Chavez Rd) and the Albuquerque metro area, allowing us to serve clients across Northern New Mexico.",
  },
  {
    q: "What is the difference between primary tracks?",
    a: "Our 'Dual-Track' system allows us to tailor your therapy whether your primary challenge is substance use (Addiction Track) or a clinical mental health diagnosis like PTSD, Depression, or Anxiety (Mental Health Track).",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 stc-texture">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-indigo-deep mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group border border-indigo-deep/10 rounded-2xl overflow-hidden bg-white/85"
            >
              <summary className="cursor-pointer list-none p-6 text-left flex justify-between items-center font-bold text-slate-800 text-lg hover:bg-indigo-deep/5 transition-colors">
                {faq.q}
                <span className="text-primary text-sm group-open:rotate-180 transition-transform">
                  ▾
                </span>
              </summary>
              <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
