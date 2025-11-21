import { Mail, Phone, Linkedin, Download } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">Get in touch</h2>
        <p className="mt-2 text-slate-300">Feel free to reach out for collaborations or opportunities.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white/5 ring-1 ring-inset ring-white/10 p-6 space-y-4">
            <a href="mailto:your.email@example.com" className="flex items-center gap-3 text-slate-200 hover:text-white">
              <Mail className="text-blue-400" /> your.email@example.com
            </a>
            <a href="tel:+1234567890" className="flex items-center gap-3 text-slate-200 hover:text-white">
              <Phone className="text-blue-400" /> +12 345 678 90
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-200 hover:text-white">
              <Linkedin className="text-blue-400" /> LinkedIn
            </a>
            <a href="/resume.pdf" className="flex items-center gap-3 text-slate-200 hover:text-white">
              <Download className="text-blue-400" /> Download Resume
            </a>
          </div>

          <form className="rounded-2xl bg-white/5 ring-1 ring-inset ring-white/10 p-6 space-y-4">
            <div>
              <label className="block text-sm text-slate-300 mb-1">Name</label>
              <input type="text" className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Email</label>
              <input type="email" className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Message</label>
              <textarea className="w-full rounded-xl bg-slate-900/60 border border-white/10 px-4 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50" rows="4" placeholder="Hello..."></textarea>
            </div>
            <button type="button" className="w-full py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
}
