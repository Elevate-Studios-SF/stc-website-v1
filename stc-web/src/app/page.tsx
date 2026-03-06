"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Palette,
  Users,
  Waves,
  Phone,
  Menu,
  X,
  ShieldCheck,
  HeartPulse,
  ChevronDown,
  Quote,
  CreditCard,
  MapPin,
  PawPrint,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-indigo-deep text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/stc-logo-horizontal.png"
            alt="Solutions Treatment Center"
            className="h-8 w-auto"
          />
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {[
            "Programs",
            "Approach",
            "Locations",
            "Insurance",
            "About",
            "Resources",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="#"
            className="hover:text-primary transition-colors border-l border-white/20 pl-8"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="bg-primary hover:bg-opacity-90 text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all shadow-md hidden sm:block">
            Call for Free Consultation
          </button>
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-indigo-deep border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-4">
              {[
                "Programs",
                "Approach",
                "Locations",
                "Insurance",
                "About",
                "Resources",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
              <button className="bg-primary text-white px-6 py-4 rounded-lg font-bold mt-4">
                Call for Free Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10, 16, 30, 0.7), rgba(10, 16, 30, 0.5)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuALDh4IctTAD2mIdpY5yWgv4mRAQ8POh-t17xpPBYr1dE_CtdO5L7aX8Fd9_zRYc1BMkk-73R2__Hktyuqulxkf2j_Gr0VZj8U7BU_Vebd9cKZokT0VlIcqKtqfZX5j7xJFhU5tO_8TRV16hITFqFjbrlH02AMZ5KQfu18dRQDWiVesS0h0WNLsqOJFS-mNObcz9T5jmWbNMtvxbc2ztXMtFvFzEl-ny68ECBKoZ4lmThsGo9XZPbcS39qy8dCQxESYQwFWIjn0pQ')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">
            The Solutions Method™
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Beyond Symptom Management: <br />
            <span className="text-blue-200">The Whole Life Paradigm</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-100 leading-relaxed mb-10 max-w-2xl">
            Experience transformation through our dual-track Intensive Outpatient
            Programs (IOP) in Santa Fe & Albuquerque. We treat the whole person,
            addressing addiction as a symptom of deeper life challenges.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-shadow flex items-center gap-2"
            >
              Request Mental Health Assessment
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 text-white border-2 border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
            >
              Verify Insurance Benefits
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const SolutionsMethod = () => {
  return (
    <section className="py-24 bg-[#E8F1FF]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div
              className="h-64 rounded-2xl bg-cover bg-center mt-12 shadow-lg"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuARjX3rHNHHGSawkqi1flOFp-CFTNXLACvfhD2AQx_a8bFBtLCYN_xsNioMzfgx79RpLvdbTgEnAu43yQkhtyJO-Jl3NtKtXqMeR1JblbzL-GsUNieJRwGm2oOMykrd-DhS_7ZKbWqaDuUiztiDqBVqPzbz5npPHbo6xaNX8ZWgqAlox8OOPfDyq4OmfQvbDbMb8k2om2iBpnWxT-75HBRlUJf2JhRq25bY5OMLz5crOltNc8aVCBr0nON2wgEARs8w5G3Jg3-9NQ')",
              }}
            />
            <div
              className="h-64 rounded-2xl bg-cover bg-center shadow-lg"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB2FpcJ8TLPNohf6t8Iw-1z4nHv33BSsTwbWwrSFCEwrW3kB0aQ7Tg39WflqEAKytb0eAa88gciHuIpHTPibIe4OpNhoiWQVOMAkGjgw-D06ZH-S-qBfa5T2U-E5Zs9tYjtFrI4Qz64IH-cCJ0KdNcFutJ98kFz4q_64L1ZUzPdj5dvyAMC24F4Ls2NQBh-_OV2HspOq9q_nuK1tEk9oR3Y_q7zxOZUfGnt--de310zKpBYOG2MuTEkFGQWDBQcZ9B57rPU2XUV-w')",
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">
              Transformational Care
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-indigo-deep mb-6">
              The Solutions Method™
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              We don’t just treat substance use. We treat the whole person through
              a dual-track approach that includes clinical addiction care and deep
              mental health therapy. Our compassionate team delivers results
              through evidence-based practices and a human-first philosophy.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {["Addiction Track", "Mental Health Track", "Family Program"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary w-5 h-5" />
                    <span className="font-semibold text-slate-700">{item}</span>
                  </div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CareTracks = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block"
          >
            Comprehensive Care Tracks
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-indigo-deep mb-6"
          >
            Comprehensive Care Tracks
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto text-lg"
          >
            Flexible programs designed to fit your life, combining clinical
            excellence with holistic healing in Santa Fe and Albuquerque.
          </motion.p>
        </div>

        <div className="rounded-3xl shadow-2xl overflow-hidden border border-indigo-deep/10 bg-white/50 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="lg:col-span-1 bg-indigo-deep p-12 text-white flex flex-col justify-center">
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">
                Clinical Excellence
              </span>
              <h2 className="text-4xl font-bold mb-6">Therapy Modalities</h2>
              <p className="text-indigo-100/80 mb-8 leading-relaxed">
                Our approach integrates evidence-based clinical practices with
                experiential therapies to treat the mind, body, and spirit.
              </p>
              <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all px-8 py-3 rounded-xl font-bold text-sm inline-flex items-center gap-2 self-start">
                View All Methods <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="lg:col-span-2 p-12 grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  icon: <HeartPulse className="text-primary" />,
                  title: "CBT & DBT",
                  desc: "Cognitive Behavioral Therapy and Dialectical Behavior Therapy provide the foundational tools for emotional regulation and cognitive restructuring.",
                },
                {
                  icon: <ShieldCheck className="text-primary" />,
                  title: "Trauma-Informed Care",
                  desc: "Safety-focused clinical work that addresses the nervous system and processes the underlying trauma often associated with substance use.",
                },
                {
                  icon: <Palette className="text-primary" />,
                  title: "Art Therapy",
                  desc: "A creative outlet for non-verbal expression, allowing participants to explore complex emotions and build self-awareness.",
                },
                {
                  icon: <PawPrint className="text-primary" />,
                  title: "Equine Therapy",
                  desc: "Working with horses helps develop trust, empathy, and boundary-setting while providing immediate feedback on emotional states.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    {item.icon}
                    <h4 className="text-xl font-bold text-indigo-deep">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {[
            {
              icon: <Users className="w-8 h-8" />,
              title: "Adult IOP",
              desc: "Intensive Outpatient Programs offered during the day and evening to accommodate work and family schedules.",
              tags: ["Day Tracks", "Evening Tracks"],
            },
            {
              icon: <Waves className="w-8 h-8" />,
              title: "Family Support",
              desc: "Healing is a collective journey. We provide intensive support and education for the entire family unit.",
              tags: ["Family Nights", "Workshops"],
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl border border-indigo-deep/5 flex gap-6 items-start shadow-lg"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                {item.icon}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Insurance = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-4xl font-bold text-indigo-deep mb-6">
            We Accept Major Insurance
          </h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Reducing the financial barrier to high-quality care. We work directly
            with providers to ensure you maximize your benefits.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "BlueCross BlueShield",
              "Presbyterian Healthcare",
              "Turquoise Care (Medicaid)",
            ].map((name) => (
              <div
                key={name}
                className="p-6 border border-indigo-deep/10 rounded-xl bg-indigo-deep/5 flex flex-col justify-center h-28 items-center text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-indigo-deep font-extrabold text-sm uppercase tracking-tight leading-tight">
                  {name}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-slate-500 italic">
            Plus many other private PPO plans. Contact us for a full verification.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex-1 w-full bg-primary/5 rounded-3xl p-12 text-center border-2 border-dashed border-primary/30 glass-card"
        >
          <CreditCard className="w-16 h-16 text-primary mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Fast Benefit Verification
          </h3>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Get a response within 2 hours. Our insurance specialists handle all
            the paperwork for you.
          </p>
          <button className="bg-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-lg">
            Start Verification Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#E8F1FF]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-indigo-deep">
            Real Success Stories
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            {
              quote:
                "Solutions didn't just help me stop using; they helped me figure out why I was using in the first place. I finally feel equipped to meet reality with confidence.",
              author: "M.R.",
              track: "Completed IOP 2023",
            },
            {
              quote:
                "The dual-track program was exactly what I needed. Addressing my clinical depression alongside my recovery journey was the missing piece to my puzzle.",
              author: "S.L.",
              track: "Completed Mental Health Track",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-12 rounded-3xl relative shadow-xl"
            >
              <Quote className="w-12 h-12 text-primary/10 absolute top-8 right-10" />
              <p className="text-xl italic text-slate-700 leading-relaxed mb-8">
                "{item.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-deep/10 flex items-center justify-center font-bold text-indigo-deep">
                  {item.author}
                </div>
                <div>
                  <p className="font-bold text-slate-900">Alumni Participant</p>
                  <p className="text-sm text-slate-500">{item.track}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-indigo-deep mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-indigo-deep/10 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
                className="w-full p-6 text-left flex justify-between items-center font-bold text-slate-800 text-lg hover:bg-indigo-deep/5 transition-colors"
              >
                {faq.q}
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="bg-indigo-deep py-24 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Start Your Journey Today
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-indigo-100/80 text-lg mb-12 max-w-2xl mx-auto"
        >
          Healing begins with a single conversation. Our clinical coordinators
          are ready to listen and help you find the right path.
        </motion.p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-16">
          <div className="text-center">
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">
              Main Admissions
            </p>
            <a
              className="text-3xl font-bold hover:text-primary transition-colors flex items-center gap-2 justify-center"
              href="tel:8774991354"
            >
              <Phone className="w-6 h-6" /> 877-499-1354
            </a>
          </div>
          <div className="h-16 w-[1px] bg-white/20 hidden md:block" />
          <div className="text-center">
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">
              Santa Fe Office
            </p>
            <a
              className="text-3xl font-bold hover:text-primary transition-colors flex items-center gap-2 justify-center"
              href="tel:5054243170"
            >
              <Phone className="w-6 h-6" /> 505-424-3170
            </a>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary text-white px-12 py-5 rounded-xl font-bold text-xl hover:shadow-2xl transition-all"
        >
          Get Started Now
        </motion.button>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-16 mb-16">
        <div className="col-span-1 lg:col-span-2">
          <div className="flex items-center gap-3 mb-8">
            <img
              src="/stc-logo-horizontal.png"
              alt="Solutions Treatment Center"
              className="h-10 w-auto"
            />
          </div>
          <p className="text-slate-400 max-w-md leading-relaxed mb-8">
            Providing clinically excellent and compassionate outpatient care for
            addiction and mental health in New Mexico. Accredited by The Joint
            Commission and LegitScript certified.
          </p>
          <div className="flex gap-4">{}</div>
        </div>

        <div>
          <h4 className="text-primary font-bold mb-8 uppercase tracking-widest text-sm">
            Our Locations
          </h4>
          <div className="space-y-8">
            <div>
              <p className="font-bold flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-primary" /> Santa Fe
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                2209 Miguel Chavez Rd
                <br />
                Santa Fe, NM 87505
              </p>
            </div>
            <div>
              <p className="font-bold flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-primary" /> Albuquerque Area
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
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
          <ul className="space-y-4 text-slate-400 text-sm">
            {[
              "Verify Insurance",
              "Mental Health Track",
              "Addiction Track",
              "Privacy Policy",
              "Contact Clinical Team",
            ].map((link) => (
              <li key={link}>
                <a className="hover:text-white transition-colors" href="#">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs gap-6">
        <p>© 2024 Solutions Treatment Center. All rights reserved.</p>
        <div className="flex gap-8">
          <a className="hover:text-white transition-colors" href="#">
            Accessibility
          </a>
          <a className="hover:text-white transition-colors" href="#">
            Patient Portal
          </a>
          <a className="hover:text-white transition-colors" href="#">
            Careers
          </a>
        </div>
      </div>
    </footer>
  );
};

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <SolutionsMethod />
        <CareTracks />
        <Insurance />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
