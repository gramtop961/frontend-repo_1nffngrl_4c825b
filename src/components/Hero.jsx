import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] grid lg:grid-cols-2 items-center">
      <div className="relative z-10 px-6 py-16 md:py-24">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 ring-1 ring-inset ring-blue-500/30 mb-4">
            Mechatronics • Automation • Control
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Syed Haidar Alhaddad Bin Syed Esa
          </h1>
          <p className="mt-3 text-blue-200/90 text-lg">
            Mechatronics & Automation Engineer specializing in PLCs, control systems, and end-to-end automation.
          </p>
          <p className="mt-4 text-slate-300">
            Passionate about building robust industrial solutions with Siemens PLCs, HMI/SCADA, sensors, VFDs, and embedded systems.
          </p>

          <div className="mt-8 grid grid-cols-2 sm:flex gap-3">
            <a href="/about" className="inline-flex justify-center items-center px-5 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition shadow-lg shadow-blue-500/20">
              About Me
            </a>
            <a href="/projects" className="inline-flex justify-center items-center px-5 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition ring-1 ring-inset ring-white/15">
              Projects
            </a>
            <a href="/certifications" className="inline-flex justify-center items-center px-5 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition ring-1 ring-inset ring-white/15">
              Certifications
            </a>
            <a href="/contact" className="inline-flex justify-center items-center px-5 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition ring-1 ring-inset ring-white/15">
              Contact
            </a>
          </div>
        </div>
      </div>

      <div className="relative h-[50vh] lg:h-[80vh]">
        <Spline scene="https://prod.spline.design/Geb1kGWmIba9zPiH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-slate-900 via-slate-900/20 to-transparent" />
      </div>
    </section>
  );
}
