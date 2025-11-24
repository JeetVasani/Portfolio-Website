"use client";

import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
     <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0F0A1A]/70 border-b border-[#7C3AED40]"> 
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div
          className="text-lg font-bold cursor-pointer text-white"
          onClick={() => scrollToSection("hero")}
        >
          Jeet Vasani
        </div>

        <div className="hidden md:flex space-x-8 text-[#A78BFA]">
          <button className="hover:text-white transition" onClick={() => scrollToSection("about")}>
            About
          </button>
          <button className="hover:text-white transition" onClick={() => scrollToSection("projects")}>
            Projects
          </button>
          <button className="hover:text-white transition" onClick={() => scrollToSection("contact")}>
            Contact
          </button>
        </div>

        <button className="md:hidden text-white text-2xl" onClick={() => setOpen(!open)}>
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden flex flex-col items-center bg-[#0F0A1A]/95 text-[#A78BFA] py-6 space-y-6 border-t border-[#7C3AED40]">
          <button onClick={() => scrollToSection("about")} className="hover:text-white transition">
            About
          </button>
          <button onClick={() => scrollToSection("projects")} className="hover:text-white transition">
            Projects
          </button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-white transition">
            Contact
          </button>
        </div>
      )}
    </header>
  );
}
