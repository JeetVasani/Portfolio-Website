// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";

// export default function Contact() {
//   return (
//     <section
//       id="contact"
//       className="text-center pt-10 pb-6 mt-20"
//       style={{
//         backgroundColor: "var(--background)",
//         borderTop: "1px solid var(--border-color)",
//       }}
//     >
//       <h2
//         className="text-xl font-semibold mb-4"
//         style={{ color: "var(--foreground)" }}
//       >
//         Contact
//       </h2>

//       {/* ICON ROW */}
//       <div className="flex items-center justify-center gap-8 mt-4">
//         {/* Email */}
//         <a
//           href="mailto:vasanijeet21@gmail.com"
//           style={{ color: "var(--foreground)" }}
//           className="text-3xl hover:opacity-70 transition"
//         >
//           <MdEmail />
//         </a>

//         {/* GitHub */}
//         <a
//           href="https://github.com/JeetVasani"
//           target="_blank"
//           rel="noopener noreferrer"
//           style={{ color: "var(--foreground)" }}
//           className="text-3xl hover:opacity-70 transition"
//         >
//           <FaGithub />
//         </a>

//         {/* LinkedIn */}
//         <a
//           href="https://linkedin.com/in/jeetvasani"
//           target="_blank"
//           rel="noopener noreferrer"
//           style={{ color: "var(--foreground)" }}
//           className="text-3xl hover:opacity-70 transition"
//         >
//           <FaLinkedin />
//         </a>
//       </div>

//       {/* COPYRIGHT */}
//       <p
//         className="text-xs mt-6"
//         style={{ color: "var(--muted-text)" }}
//       >
//         © {new Date().getFullYear()} Jeet Vasani. All rights reserved.
//       </p>
//     </section>
//   );
// }
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section
      id="contact"
      className="text-center pt-10 pb-6 mt-20 bg-gray-900 border-t border-blue-700/10"
    >
      <h2 className="text-xl font-semibold mb-4 text-white">Contact</h2>

      {/* ICON ROW */}
      <div className="flex items-center justify-center gap-8 mt-4">
        {/* Email */}
        <a
          href="mailto:vasanijeet21@gmail.com"
          className="text-3xl hover:opacity-80 transition text-white"
        >
          <MdEmail />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/JeetVasani"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:opacity-80 transition text-white"
        >
          <FaGithub />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/jeetvasani"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:opacity-80 transition text-white"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* COPYRIGHT */}
      <p className="text-xs mt-6 text-gray-400">
        © {new Date().getFullYear()} Jeet Vasani. All rights reserved.
      </p>
    </section>
  );
}
