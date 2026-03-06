const insurers = [
  "BlueCross BlueShield",
  "Presbyterian Healthcare",
  "Turquoise Care (Medicaid)",
  "United Healthcare",
  "Aetna",
  "Cigna",
];

export default function Insurance() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold text-indigo-deep mb-6">
            We Accept Major Insurance
          </h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Reducing the financial barrier to high-quality care. We work directly
            with providers to ensure you maximize your benefits.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {insurers.map((name) => (
              <div
                key={name}
                className="p-5 border border-indigo-deep/10 rounded-xl bg-indigo-deep/5 flex flex-col justify-center h-24 items-center text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-indigo-deep font-extrabold text-xs uppercase tracking-tight leading-tight">
                  {name}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-slate-500 italic">
            Plus many other private PPO plans. Contact us for a full verification.
          </p>
        </div>

        <div className="v2-glass rounded-3xl p-12 text-center border-2 border-dashed border-primary/30">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Fast Benefit Verification
          </h3>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Get a response within 2 hours. Our insurance specialists handle all
            the paperwork for you.
          </p>
          <a
            href="#"
            className="bg-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-lg inline-flex"
          >
            Start Verification Now
          </a>
        </div>
      </div>
    </section>
  );
}
