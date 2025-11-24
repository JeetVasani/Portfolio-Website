import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section
      id="contact"
      className="text-center pt-10 pb-6 mt-20 bg-[#0F0A1A] border-t border-[#7C3AED40]"
    >
      <h2 className="text-xl font-semibold mb-4 text-white">Contact</h2>

      <div className="flex items-center justify-center gap-8 mt-4">
        <a href="mailto:vasanijeet21@gmail.com" className="text-3xl text-[#A78BFA] hover:text-white transition">
          <MdEmail />
        </a>
        <a href="https://github.com/JeetVasani" target="_blank" className="text-3xl text-[#A78BFA] hover:text-white transition">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/jeetvasani" target="_blank" className="text-3xl text-[#A78BFA] hover:text-white transition">
          <FaLinkedin />
        </a>
      </div>

      <p className="text-xs mt-6 text-gray-400">
        © {new Date().getFullYear()} Jeet Vasani. All rights reserved.
      </p>
    </section>
  );
}
