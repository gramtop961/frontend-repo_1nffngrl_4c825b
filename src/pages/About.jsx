import Skills from '../components/Skills';

export default function About() {
  return (
    <div className="px-6">
      <section className="py-12 max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white">About Me</h1>
        <p className="mt-4 text-slate-300">
          Mechatronics Engineering graduate from Universidad de Zaragoza (Spain), specializing in automation, PLC programming, industrial control, CAD, embedded electronics, and mechatronic system design.
        </p>
        <p className="mt-3 text-slate-300">
          Interests in automation, PLCs, control systems, and mechatronics. Focused on building efficient, reliable, and safe industrial solutions.
        </p>
      </section>
      <Skills />
    </div>
  );
}
