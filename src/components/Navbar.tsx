import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { id: "00", label: "Home", path: "/" },
  { id: "01", label: "Destination", path: "/destination" },
  { id: "02", label: "Crew", path: "/crew" },
  { id: "03", label: "Technology", path: "/technology" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 lg:px-12">
      {/* Logo + Divider */}
      <div className="flex items-center bg-b gap-8 flex-grow">
        {/* Logo from index.css */}
        <div className="logo"></div>

        {/* Divider line (desktop only) */}
        <div className="hidden lg:block flex-grow h-[1px] bg-white/25"></div>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden lg:flex bg-white/5 backdrop-blur-md px-20 py-8 gap-12 tracking-widest uppercase font-condensed">
        {navLinks.map((link) => (
          <Link
            key={link.id}
            to={link.path}
            className={`text-white hover:underline flex items-center gap-2 ${
              location.pathname === link.path ? "border-b-2 border-white" : ""
            }`}
          >
            <span className="font-bold">{link.id}</span>
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-white z-50"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white/10 backdrop-blur-xl transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col mt-24 gap-8 px-8 uppercase font-condensed tracking-widest">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`text-white flex items-center gap-2 ${
                location.pathname === link.path
                  ? "border-r-4 border-white pr-4"
                  : ""
              }`}
            >
              <span className="font-bold">{link.id}</span>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
