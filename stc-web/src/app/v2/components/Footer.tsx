const quickLinks = [
  "Verify Insurance",
  "Mental Health Track",
  "Addiction Track",
  "Privacy Policy",
  "Contact Clinical Team",
];

export default function Footer() {
  return (
    <footer className="bg-[#e8f1ff] text-indigo-deep pt-24 pb-12 border-t border-indigo-deep/10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-16 mb-16">
        <div className="col-span-1 lg:col-span-2 text-center">
          <div className="flex items-center justify-center mb-8">
            <img
              src="/stc-logo-stacked.png"
              alt="Solutions Treatment Center"
              className="h-40 w-auto"
            />
          </div>
          <p className="text-slate-700 max-w-md mx-auto leading-relaxed mb-8">
            Providing clinically excellent and compassionate outpatient care for
            addiction and mental health in New Mexico. Accredited by The Joint
            Commission and LegitScript certified.
          </p>
        </div>

        <div>
          <h4 className="text-primary font-bold mb-8 uppercase tracking-widest text-sm">
            Our Locations
          </h4>
          <div className="space-y-8">
            <div>
              <p className="font-bold mb-2">Santa Fe</p>
              <p className="text-slate-700 text-sm leading-relaxed">
                2209 Miguel Chavez Rd
                <br />
                Santa Fe, NM 87505
              </p>
            </div>
            <div>
              <p className="font-bold mb-2">Albuquerque Area</p>
              <p className="text-slate-700 text-sm leading-relaxed">
                Serving the greater Albuquerque metro area with specialized IOP
                programs.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-primary font-bold mb-8 uppercase tracking-widest text-sm">
            Quick Links
          </h4>
          <ul className="space-y-4 text-indigo-deep/80 text-sm">
            {quickLinks.map((link) => (
              <li key={link}>
                <a className="hover:text-primary transition-colors" href="#">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-indigo-deep/10 pt-12 flex flex-col md:flex-row justify-between items-center text-indigo-deep/70 text-xs gap-6">
        <p>© 2024 Solutions Treatment Center. All rights reserved.</p>
        <div className="flex gap-8">
          <a className="hover:text-primary transition-colors" href="#">
            Accessibility
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            Patient Portal
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            Careers
          </a>
        </div>
      </div>
    </footer>
  );
}
