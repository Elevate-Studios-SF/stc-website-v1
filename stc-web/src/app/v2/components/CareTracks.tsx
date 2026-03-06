const modalities = [
  {
    title: "CBT & DBT",
    desc: "Foundational tools for emotional regulation and cognitive restructuring.",
  },
  {
    title: "Trauma-Informed Care",
    desc: "Safety-focused clinical work that addresses the nervous system and trauma.",
  },
  {
    title: "Art Therapy",
    desc: "Creative expression to explore complex emotions and build self-awareness.",
  },
  {
    title: "Equine Therapy",
    desc: "Working with horses develops trust, empathy, and boundary-setting.",
  },
];

const programs = [
  {
    title: "Adult IOP",
    desc: "Day and evening intensive outpatient programs to fit work and family schedules.",
    tags: ["Day Tracks", "Evening Tracks"],
  },
  {
    title: "Family Support",
    desc: "Workshops and family nights to help the entire support system heal together.",
    tags: ["Family Nights", "Workshops"],
  },
];

export default function CareTracks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">
            Comprehensive Care Tracks
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-indigo-deep mb-6">
            Built Around Your Life
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Flexible programs designed to fit your life, combining clinical
            excellence with holistic healing in Santa Fe and Albuquerque.
          </p>
        </div>

        <div className="v2-glass rounded-3xl shadow-2xl overflow-hidden border border-indigo-deep/10">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="lg:col-span-1 bg-indigo-deep p-12 text-white flex flex-col justify-center">
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
                Clinical Excellence
              </span>
              <h2 className="text-4xl font-bold mb-6">Therapy Modalities</h2>
              <p className="text-indigo-100/80 mb-8 leading-relaxed">
                Evidence-based clinical practices paired with experiential
                therapies to treat the mind, body, and spirit.
              </p>
              <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all px-8 py-3 rounded-xl font-bold text-sm inline-flex items-center gap-2 self-start">
                View All Methods
              </button>
            </div>
            <div className="lg:col-span-2 p-12 grid grid-cols-1 md:grid-cols-2 gap-12">
              {modalities.map((item) => (
                <div key={item.title}>
                  <h4 className="text-xl font-bold text-indigo-deep mb-3">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          {programs.map((item) => (
            <div
              key={item.title}
              className="bg-white p-8 rounded-2xl border border-indigo-deep/5 flex gap-6 items-start shadow-lg"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold">
                {item.title.split(" ")[0]}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-indigo-deep mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {item.desc}
                </p>
                <div className="flex gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
