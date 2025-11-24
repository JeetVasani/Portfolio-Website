// // "use client";

// // import React, { useState } from "react";
// // import { FiMenu, FiX } from "react-icons/fi";

// // export default function Header() {
// //   const [open, setOpen] = useState(false);

// //   const scrollToSection = (id: string) => {
// //     const element = document.getElementById(id);
// //     if (element) {
// //       const yOffset = -80; 
// //       const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

// //       window.scrollTo({ top: y, behavior: "smooth" });
// //       setOpen(false);
// //     }
// //   };

// //   return (
// //     <header className="fixed top-0 left-0 right-0 backdrop-blur-lg bg-black/30 z-50 border-b border-white/10">
// //       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
// //         <div
// //           className="text-lg font-bold cursor-pointer text-white"
// //           onClick={() => scrollToSection("hero")}
// //         >
// //           Jeet Vasani
// //         </div>

// //         <div className="hidden md:flex space-x-8 text-white">
// //           <button className="hover:text-gray-300" onClick={() => scrollToSection("about")}>
// //             About
// //           </button>
// //           <button className="hover:text-gray-300" onClick={() => scrollToSection("projects")}>
// //             Projects
// //           </button>
// //           <button className="hover:text-gray-300" onClick={() => scrollToSection("contact")}>
// //             Contact
// //           </button>
// //         </div>

// //         <button
// //           className="md:hidden text-white text-2xl"
// //           onClick={() => setOpen(!open)}
// //         >
// //           {open ? <FiX /> : <FiMenu />}
// //         </button>
// //       </nav>

// //       {open && (
// //         <div className="md:hidden flex flex-col items-center bg-black/80 text-white py-6 space-y-6">
// //           <button onClick={() => scrollToSection("about")} className="hover:text-gray-300">
// //             About
// //           </button>
// //           <button onClick={() => scrollToSection("projects")} className="hover:text-gray-300">
// //             Projects
// //           </button>
// //           <button onClick={() => scrollToSection("contact")} className="hover:text-gray-300">
// //             Contact
// //           </button>
// //         </div>
// //       )}
// //     </header>
// //   );
// // }
// "use client";

// import React, { useState } from "react";
// import { FiMenu, FiX } from "react-icons/fi";

// export default function Header() {
//   const [open, setOpen] = useState(false);

//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       const yOffset = -80;
//       const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
//       window.scrollTo({ top: y, behavior: "smooth" });
//       setOpen(false);
//     }
//   };

//   return (
//     <header className="fixed top-0 left-0 right-0 backdrop-blur-lg bg-background/40 z-50 border-b border-bordercolor">
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
//         {/* Logo */}
//         <div
//           className="text-lg font-bold cursor-pointer text-foreground"
//           onClick={() => scrollToSection("hero")}
//         >
//           Jeet Vasani
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-8 text-foreground">
//           <button className="hover:text-muted" onClick={() => scrollToSection("about")}>
//             About
//           </button>
//           <button className="hover:text-muted" onClick={() => scrollToSection("projects")}>
//             Projects
//           </button>
//           <button className="hover:text-muted" onClick={() => scrollToSection("contact")}>
//             Contact
//           </button>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <button
//           className="md:hidden text-foreground text-2xl"
//           onClick={() => setOpen(!open)}
//         >
//           {open ? <FiX /> : <FiMenu />}
//         </button>
//       </nav>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="md:hidden flex flex-col items-center bg-background/80 text-foreground py-6 space-y-6">
//           <button onClick={() => scrollToSection("about")} className="hover:text-muted">
//             About
//           </button>
//           <button onClick={() => scrollToSection("projects")} className="hover:text-muted">
//             Projects
//           </button>
//           <button onClick={() => scrollToSection("contact")} className="hover:text-muted">
//             Contact
//           </button>
//         </div>
//       )}
//     </header>
//   );
// }
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
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gray-900/60 border-b border-blue-700/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <div
          className="text-lg font-bold cursor-pointer text-white"
          onClick={() => scrollToSection("hero")}
        >
          Jeet Vasani
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-200">
          <button
            className="hover:text-white transition"
            onClick={() => scrollToSection("about")}
          >
            About
          </button>
          <button
            className="hover:text-white transition"
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </button>
          <button
            className="hover:text-white transition"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          aria-label="Toggle menu"
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col items-center bg-gray-900/95 text-gray-200 py-6 space-y-6 border-t border-blue-700/10">
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-white transition"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="hover:text-white transition"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-white transition"
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
}
