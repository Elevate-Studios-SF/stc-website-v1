import Link from "next/link";
import type { ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";
import type { TreatmentPage } from "../content";

const buildSchema = (page: TreatmentPage) => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const conditionSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    name: page.conditions.join(", "),
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "Solutions Treatment Center",
    areaServed: "New Mexico",
    url: "https://treatmentsolutions.org",
  };

  return [orgSchema, conditionSchema, faqSchema];
};

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="bg-white/70 border border-white/60 rounded-2xl p-8 shadow-sm">
    <h2 className="text-2xl font-semibold text-indigo-deep mb-4">{title}</h2>
    {children}
  </section>
);

const BulletList = ({ items }: { items: string[] }) => (
  <ul className="space-y-3 text-slate-700 leading-relaxed">
    {items.map((item) => (
      <li key={item} className="flex gap-3">
        <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const FAQ = ({ items }: { items: TreatmentPage["faqs"] }) => (
  <div className="space-y-6">
    {items.map((item) => (
      <div key={item.q} className="border-b border-indigo-deep/10 pb-4">
        <h3 className="text-lg font-semibold text-indigo-deep mb-2">{item.q}</h3>
        <p className="text-slate-700 leading-relaxed">{item.a}</p>
      </div>
    ))}
  </div>
);

export default function DiagnosisPage({ page }: { page: TreatmentPage }) {
  const schema = buildSchema(page);

  return (
    <div className="bg-[#D4E3FC]">
      <div className="stc-texture">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-indigo-deep/70 font-semibold">
              Solutions Treatment Center
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-indigo-deep mt-4 mb-6">
              {page.title}
            </h1>
            <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
              {page.intro.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow-sm"
                href={page.cta.primaryHref}
                onClick={() =>
                  trackEvent("cta_call_click", {
                    page: page.slug,
                    location: "hero",
                  })
                }
              >
                {page.cta.primaryLabel}
              </a>
              <a
                className="px-6 py-3 rounded-lg font-semibold border border-indigo-deep/20 text-indigo-deep"
                href={page.cta.secondaryHref}
                onClick={() =>
                  trackEvent("cta_form_click", {
                    page: page.slug,
                    location: "hero",
                  })
                }
              >
                {page.cta.secondaryLabel}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-20 space-y-10">
        <Section title="Who It’s For">
          <BulletList items={page.whoItsFor} />
        </Section>

        <Section title="How We Help">
          <BulletList items={page.howWeHelp} />
        </Section>

        <Section title="What to Expect">
          <BulletList items={page.whatToExpect} />
        </Section>

        <Section title="Clinician-Reviewed & Patient-Centered">
          <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
            <div>
              <p className="text-slate-700 leading-relaxed mb-4">{page.proof.testimonial}</p>
              <p className="text-sm text-indigo-deep font-semibold">
                {page.proof.testimonialAttribution}
              </p>
            </div>
            <div className="bg-white/80 border border-white/60 rounded-xl p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Reviewed by
              </p>
              <p className="text-lg font-semibold text-indigo-deep mt-2">
                {page.proof.reviewerName}
              </p>
              <p className="text-sm text-slate-600">{page.proof.reviewerTitle}</p>
              <p className="text-xs text-slate-500 mt-3">Updated {page.proof.reviewDate}</p>
            </div>
          </div>
        </Section>

        <Section title="Frequently Asked Questions">
          <FAQ items={page.faqs} />
        </Section>

        <Section title="Related Treatment Pages">
          <div className="grid gap-3 md:grid-cols-2">
            {page.relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-white/80 border border-white/60 rounded-lg px-4 py-3 text-indigo-deep font-semibold hover:shadow-sm transition"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </Section>

        <Section title="Ready to Talk?">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold text-indigo-deep mb-2">
                Call for a confidential consultation
              </h3>
              <p className="text-slate-700">{page.cta.secondaryNote}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow-sm text-center"
                href={page.cta.primaryHref}
                onClick={() =>
                  trackEvent("cta_call_click", {
                    page: page.slug,
                    location: "footer",
                  })
                }
              >
                {page.cta.primaryLabel}
              </a>
              <a
                className="px-6 py-3 rounded-lg font-semibold border border-indigo-deep/20 text-indigo-deep text-center"
                href={page.cta.secondaryHref}
                onClick={() =>
                  trackEvent("cta_form_click", {
                    page: page.slug,
                    location: "footer",
                  })
                }
              >
                {page.cta.secondaryLabel}
              </a>
            </div>
          </div>
        </Section>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </div>
  );
}
