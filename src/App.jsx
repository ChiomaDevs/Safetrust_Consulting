import { Link, NavLink, Routes, Route } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Solutions from "@/pages/Solutions";
import Courses from "@/pages/Courses";
import Recommended from "@/pages/Recommended";
import Methodology from "@/pages/Methodology";
import Contact from "@/pages/Contact";
import { BRAND, NAV } from "@/constants";

function StickyNav() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-[#1D4ED8] to-[#0F766E]" />
          <div className="leading-tight">
            <div className="font-semibold">{BRAND.name}</div>
            <div className="text-xs opacity-70">{BRAND.tagline}</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map(n => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `px-3 py-2 text-sm rounded-lg hover:bg-gray-100 ${isActive ? "font-semibold" : ""}`
              }
            >
              {n.label}
            </NavLink>
          ))}
          <Link to="/contact"><Button size="sm">Get in Touch</Button></Link>
        </nav>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen text-gray-900">
      <StickyNav />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/recommended" element={<Recommended />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="mt-20 border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</div>
          <div className="flex items-center gap-3 opacity-70">
            <span>Technology</span><span>•</span><span>Strategy</span><span>•</span><span>People</span>
          </div>
        </div>
      </footer>
      <style>{`html { scroll-behavior: smooth; }`}</style>
    </div>
  );
}
