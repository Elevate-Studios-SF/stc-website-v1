const testimonials = [
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
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#E8F1FF]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-indigo-deep">
            Real Success Stories
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((item) => (
            <div key={item.author} className="bg-white/80 p-12 rounded-3xl shadow-xl">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
