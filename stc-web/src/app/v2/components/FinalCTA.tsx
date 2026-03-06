export default function FinalCTA() {
  return (
    <section className="bg-indigo-deep py-24 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Start Your Journey Today
        </h2>
        <p className="text-indigo-100/80 text-lg mb-12 max-w-2xl mx-auto">
          Healing begins with a single conversation. Our clinical coordinators are
          ready to listen and help you find the right path.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-16">
          <div className="text-center">
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">
              Main Admissions
            </p>
            <a
              className="text-3xl font-bold hover:text-primary transition-colors"
              href="tel:8774991354"
            >
              877-499-1354
            </a>
          </div>
          <div className="h-16 w-[1px] bg-white/20 hidden md:block" />
          <div className="text-center">
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">
              Santa Fe Office
            </p>
            <a
              className="text-3xl font-bold hover:text-primary transition-colors"
              href="tel:5054243170"
            >
              505-424-3170
            </a>
          </div>
        </div>

        <a
          href="#"
          className="bg-primary text-white px-12 py-5 rounded-xl font-bold text-xl hover:shadow-2xl transition-all inline-flex"
        >
          Get Started Now
        </a>
      </div>
    </section>
  );
}
