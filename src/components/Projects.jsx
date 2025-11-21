import { Wrench, Cpu, Layers, BadgeCheck } from 'lucide-react';

const projects = [
  {
    category: 'Automation / PLC',
    title: 'PLC-Based Dam Gate Control System (FYP)',
    description: 'Designed and implemented a PLC-driven control system for automated dam gate operation with safety interlocks and real-time monitoring.',
    tech: ['Siemens S7-1200', 'TIA Portal', 'WinCC', 'Sensors', 'VFDs'],
    achievements: ['Real-time HMI dashboard', 'Fail-safe logic', 'Scalable architecture'],
  },
  {
    category: 'Automation / PLC',
    title: 'PLC Fertigation Control System',
    description: 'Automated nutrient mixing and irrigation cycles using PLC logic with sensor feedback and variable flow control.',
    tech: ['Siemens PLC', 'SCADA', 'Flow sensors'],
    achievements: ['Optimized cycles', 'Remote monitoring'],
  },
  {
    category: 'Mechatronics / Embedded',
    title: 'VTOL Surveillance Drone (Team Leader)',
    description: 'Led a team to design a VTOL drone platform with onboard stabilization and telemetry for surveillance applications.',
    tech: ['Embedded control', 'Arduino', 'CAD', 'Sensors'],
    achievements: ['Stable VTOL flight model', 'Team leadership', 'System integration'],
  },
  {
    category: 'CAD / Mechanical',
    title: 'Piston Pump Mechanical Design',
    description: 'Modeled and analyzed a piston pump mechanism focusing on efficiency, manufacturability, and durability.',
    tech: ['Autodesk Inventor', 'Mechanism design'],
    achievements: ['Optimized geometry', 'Clear documentation'],
  },
];

function ProjectCard({ p }) {
  return (
    <div className="rounded-2xl bg-white/5 ring-1 ring-inset ring-white/10 overflow-hidden">
      <div className="aspect-[16/9] bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-slate-400">
        <div className="text-center">
          <Layers className="mx-auto mb-2" />
          <div className="text-xs">Image placeholder</div>
        </div>
      </div>
      <div className="p-6">
        <div className="text-xs text-blue-300 font-medium">{p.category}</div>
        <h3 className="mt-1 text-white font-semibold text-lg">{p.title}</h3>
        <p className="mt-2 text-slate-300 text-sm">{p.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-full text-xs bg-white/5 ring-1 ring-inset ring-white/10 text-slate-300">{t}</span>
          ))}
        </div>
        <ul className="mt-3 text-sm text-slate-300 space-y-1">
          {p.achievements.map((a) => (
            <li key={a} className="flex items-center gap-2"><BadgeCheck size={16} className="text-blue-400" /> {a}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">Projects</h2>
        <p className="mt-2 text-slate-300">A selection of university and personal projects.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
