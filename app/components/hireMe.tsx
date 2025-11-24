// export default function hireMe() {
//   return (
//     <section
//       id="why-hire-me"
//       className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-black text-white text-center"
//     >
//       {/* Heading */}
//       <h2 className="text-3xl md:text-5xl font-bold mb-6">
//         Why Should You Hire Me?
//       </h2>

//       {/* Description */}
//       <p className="text-base md:text-lg text-gray-400 max-w-2xl mb-10">
//         Here’s a short introduction about who I am, how I work, and why 
//         I’ll be a strong fit for your team. This video covers my mindset, 
//         strengths, and approach to building AI-driven products.
//       </p>

//       {/* Video Container */}
//       <div className="w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow-xl border border-gray-800">
//         <video
//           controls
//           className="w-full h-full"
//           poster="/video-thumbnail.jpg"  
//         >
//           <source src="/jeet-intro.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//     </section>
//   );
// }
export default function HireMe() {
  return (
    <section
      id="why-hire-me"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gray-900 text-white text-center"
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Should You Hire Me?</h2>

      {/* Description */}
      <p className="text-base md:text-lg text-gray-300 max-w-2xl mb-10">
        Here’s a short introduction about who I am, how I work, and why I’ll be a strong
        fit for your team. I focus on shipping fast, maintainable AI-driven products.
      </p>

      {/* Video Container */}
      <div className="w-full max-w-3xl aspect-video rounded-xl overflow-hidden shadow-xl border border-blue-700/20">
        <video controls className="w-full h-full" poster="/video-thumbnail.jpg">
          <source src="/jeet-intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
