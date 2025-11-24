

// // export default function Hero() {
// //   return (
// //     <section
// //       id="hero"
// //       className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-black text-white"
// //     >
// //       {/* Name */}
// //       <h1 className="text-4xl md:text-6xl font-bold mb-4">
// //         Jeet Vasani
// //       </h1>

// //       {/* Role */}
// //       <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
// //         AI Engineer & Full-Stack Developer
// //       </h2>

// //       {/* Description */}
// //       <p className="text-base md:text-lg max-w-2xl text-gray-400 mb-10">
// //         I build intelligent systems, automation tools, and high-performance MVPs 
// //         using Next.js, Python, and machine learning.
// //       </p>

// //       {/* CTA Buttons */}
// //       <div className="flex flex-col sm:flex-row gap-4">
// //         <a
// //           href="#projects"
// //           className="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-300 transition"
// //         >
// //           View My Work
// //         </a>

// //         <a
// //           href="#contact"
// //           className="px-6 py-3 rounded-lg border border-gray-400 text-gray-200 hover:bg-gray-800 transition"
// //         >
// //           Contact Me
// //         </a>
// //       </div>
// //     </section>
// //   );
// // }
// export default function Hero() {
//   return (
//     <section
//       id="hero"
//       className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-background text-foreground"
//     >
//       {/* Name */}
//       <h1 className="text-4xl md:text-6xl font-bold mb-4">
//         Jeet Vasani
//       </h1>

//       {/* Role */}
//       <h2 className="text-xl md:text-2xl text-muted mb-6">
//         AI Engineer & Full-Stack Developer
//       </h2>

//       {/* Description */}
//       <p className="text-base md:text-lg max-w-2xl text-subtle mb-10">
//         I build intelligent systems, automation tools, and high-performance MVPs 
//         using Next.js, Python, and machine learning.
//       </p>

//       {/* CTA Buttons */}
//       <div className="flex flex-col sm:flex-row gap-4">
//          <a
//           href="#projects"
//           className="px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-300 transition"
//         >
//           View My Work
//         </a>

//         <a
//           href="#contact"
//           className="px-6 py-3 rounded-lg border border-bordercolor text-muted hover:bg-card-hover transition"
//         >
//           Contact Me
//         </a>
//       </div>
//     </section>
//   );
// }
export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gray-900 text-white"
    >
      {/* Name */}
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Jeet Vasani</h1>

      {/* Role */}
      <h2 className="text-xl md:text-2xl text-gray-200 mb-6">
        AI Engineer & Full-Stack Developer
      </h2>

      {/* Description */}
      <p className="text-base md:text-lg max-w-2xl text-gray-300 mb-10">
        I build intelligent systems, automation tools, and high-performance MVPs
        using Next.js, Python, and machine learning.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#projects"
          className="px-6 py-3 rounded-lg bg-blue-700 hover:bg-blue-600 text-white font-semibold shadow-lg transition"
        >
          View My Work
        </a>

        <a
          href="#contact"
          className="px-6 py-3 rounded-lg border border-blue-700/30 text-blue-400 hover:text-blue-300 hover:bg-gray-800 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
