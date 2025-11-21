import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItem = (to, label) => (
    <NavLink
      to={to}
      onClick={() => setOpen(false)}
      className={({ isActive }) =>
        `px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
          isActive
            ? 'bg-blue-500/10 text-blue-300 ring-1 ring-inset ring-blue-500/30'
            : 'text-slate-300 hover:text-white hover:bg-white/5'
        }`
      }
    >
      {label}
    </NavLink>
  );

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-slate-900/60 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/20"></div>
            <div className="leading-tight">
              <div className="text-white font-semibold">Syed Haidar Alhaddad</div>
              <div className="text-xs text-blue-300/80">Mechatronics & Automation Engineer</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {navItem('/', 'Home')}
            {navItem('/about', 'About Me')}
            {navItem('/projects', 'Projects')}
            {navItem('/certifications', 'Certifications')}
            {navItem('/contact', 'Contact')}
          </nav>

          <button
            className="md:hidden text-slate-300 hover:text-white p-2 rounded-lg hover:bg-white/5"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2">
            <div className="grid gap-2">
              {navItem('/', 'Home')}
              {navItem('/about', 'About Me')}
              {navItem('/projects', 'Projects')}
              {navItem('/certifications', 'Certifications')}
              {navItem('/contact', 'Contact')}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
