export default function SolutionsMethod() {
  return (
    <section className="py-24 bg-[#E8F1FF]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="grid grid-cols-2 gap-4">
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
        </div>

        <div>
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">
            Transformational Care
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-indigo-deep mb-6">
            The Solutions Method™
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            We don’t just treat substance use. We treat the whole person through a
            dual-track approach that includes clinical addiction care and deep
            mental health therapy. Our compassionate team delivers results through
            evidence-based practices and a human-first philosophy.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {["Addiction Track", "Mental Health Track", "Family Program"].map(
              (item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                  <span className="font-semibold text-slate-700">{item}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
