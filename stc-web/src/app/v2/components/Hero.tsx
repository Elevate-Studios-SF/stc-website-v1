export default function Hero() {
  return (
    <section className="v2-hero-bg text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-2xl">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-5 block">
            The Solutions Method™
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Beyond Symptom Management:
            <br />
            <span className="text-blue-200">The Whole Life Paradigm</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-100 leading-relaxed mb-10">
            Experience transformation through our dual-track Intensive Outpatient
            Programs (IOP) in Santa Fe & Albuquerque. We treat the whole person,
            addressing addiction as a symptom of deeper life challenges.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-base md:text-lg hover:shadow-xl transition-shadow"
            >
              Request Mental Health Assessment
            </a>
            <a
              href="#"
              className="bg-white/10 text-white border-2 border-white/20 px-8 py-4 rounded-xl font-bold text-base md:text-lg hover:bg-white/20 transition-all"
            >
              Verify Insurance Benefits
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
