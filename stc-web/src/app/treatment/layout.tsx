import Link from "next/link";

const navItems = [
  { label: "Mental Health", href: "/treatment/mental-health" },
  { label: "Addiction", href: "/treatment/addiction" },
  { label: "Dual Diagnosis", href: "/treatment/dual-diagnosis" },
  { label: "Relationships", href: "/treatment/relationships" },
];

export default function TreatmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#D4E3FC]">
      <header className="bg-[#e8f1ff] text-indigo-deep border-b border-indigo-deep/10 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/stc-logo-horizontal.png"
              alt="Solutions Treatment Center"
              className="h-10 w-auto"
            />
          </Link>
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-primary">
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            href="tel:8774991354"
            className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm"
          >
            Call for Consultation
          </a>
        </div>
      </header>

      <main>{children}</main>

      <footer className="bg-[#e8f1ff] text-indigo-deep border-t border-indigo-deep/10">
        <div className="max-w-6xl mx-auto px-6 py-10 grid gap-6 md:grid-cols-[1.5fr,1fr]">
          <div>
            <h3 className="text-lg font-semibold">Solutions Treatment Center</h3>
            <p className="text-slate-700 mt-2 max-w-md">
              Outpatient and intensive outpatient care for mental health, addiction,
              and dual diagnosis across New Mexico.
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
              Admissions
            </p>
            <a
              href="tel:8774991354"
              className="text-lg font-semibold text-indigo-deep"
            >
              877-499-1354
            </a>
            <p className="text-sm text-slate-600">Mon-Fri, 8am-6pm</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
