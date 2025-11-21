const certifications = [
  'DELE Spanish B1',
  'Spanish Intensive Courses',
  'Industrial visit (HMY Factory – Zaragoza)',
  'Excel / software certificates',
  'Community service, leadership, cultural events',
  'Additional academic/technical certificates',
];

export default function Certifications() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">Certifications</h2>
        <p className="mt-2 text-slate-300">A snapshot of courses and achievements.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((c) => (
            <div key={c} className="rounded-2xl bg-white/5 ring-1 ring-inset ring-white/10 p-6">
              <div className="aspect-[16/9] rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-slate-400 mb-4">
                <div className="text-xs">Certificate image placeholder</div>
              </div>
              <div className="text-white font-medium">{c}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
