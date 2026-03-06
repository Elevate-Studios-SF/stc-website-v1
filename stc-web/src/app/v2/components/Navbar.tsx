const navItems = [
  "Programs",
  "Approach",
  "Locations",
  "Insurance",
  "About",
  "Resources",
];

export default function Navbar() {
  return (
    <header className="bg-[#e8f1ff] text-indigo-deep sticky top-0 z-40 shadow-lg backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/stc-logo-horizontal.png"
            alt="Solutions Treatment Center"
            className="h-15 w-auto"
          />
        </div>
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <a key={item} href="#" className="hover:text-primary transition-colors">
              {item}
            </a>
          ))}
          <a
            href="#"
            className="hover:text-primary transition-colors border-l border-indigo-deep/20 pl-8"
          >
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="tel:8774991354"
            className="hidden md:inline-flex bg-primary hover:bg-opacity-90 text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all shadow-md"
          >
            Call for Free Consultation
          </a>
          <a
            href="#"
            className="md:hidden text-sm font-semibold border border-indigo-deep/30 px-4 py-2 rounded-full"
          >
            Menu
          </a>
        </div>
      </div>
    </header>
  );
}
