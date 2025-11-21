import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="fixed inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.12),transparent)] pointer-events-none" />
      <Navbar />
      <main className="relative max-w-7xl mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
