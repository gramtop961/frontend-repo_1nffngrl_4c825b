import { Cpu, Cog, CircuitBoard, CpuIcon, Wrench, Chip, PanelsTopLeft, Boxes, Cable, PencilRuler, Gauge, Layout, MonitorCog } from 'lucide-react';

export default function Skills() {
  const skills = [
    {
      icon: MonitorCog,
      title: 'PLC & Automation',
      items: ['Siemens S7-1200, S7-300', 'TIA Portal, WinCC'],
    },
    {
      icon: Layout,
      title: 'HMI / SCADA',
      items: ['Interface design', 'Process visualization'],
    },
    {
      icon: Gauge,
      title: 'Sensors & VFDs',
      items: ['Industrial sensors', 'Variable Frequency Drives'],
    },
    {
      icon: PencilRuler,
      title: 'CAD',
      items: ['Autodesk Inventor', 'AutoCAD'],
    },
    {
      icon: CircuitBoard,
      title: 'Electronics',
      items: ['Circuit design', 'DC-DC converters', 'Amplifiers'],
    },
    {
      icon: Chip,
      title: 'Embedded',
      items: ['Arduino', 'NI USB-6008', 'LabVIEW'],
    },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">What I Do</h2>
        <p className="mt-2 text-slate-300 max-w-3xl">
          Mechatronics Engineering graduate from Universidad de Zaragoza (Spain), specializing in automation, PLC programming, industrial control, CAD, embedded electronics, and mechatronic system design.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s) => (
            <div key={s.title} className="rounded-2xl bg-white/5 ring-1 ring-inset ring-white/10 p-6 hover:bg-white/[0.07] transition">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                <s.icon size={22} />
              </div>
              <h3 className="mt-4 text-white font-semibold">{s.title}</h3>
              <ul className="mt-2 text-sm text-slate-300 space-y-1 list-disc list-inside">
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h4 className="text-white font-semibold">Languages</h4>
          <ul className="mt-2 text-slate-300 grid sm:grid-cols-3 gap-2">
            <li className="rounded-xl bg-white/5 ring-1 ring-inset ring-white/10 px-4 py-2">English (Fluent)</li>
            <li className="rounded-xl bg-white/5 ring-1 ring-inset ring-white/10 px-4 py-2">Malay (Native)</li>
            <li className="rounded-xl bg-white/5 ring-1 ring-inset ring-white/10 px-4 py-2">Spanish (B1 – Certified)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
