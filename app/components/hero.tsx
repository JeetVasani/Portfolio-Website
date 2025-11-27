export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-[#0F0A1A] text-white"
    >
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Jeet Vasani</h1>

      <h2 className="text-xl md:text-2xl text-[#A78BFA] mb-6">
        Full-Stack Developer
      </h2>

      <p className="text-base md:text-lg max-w-2xl text-gray-300 mb-10">
       Third year B.Tech student specializing in AI&ML.<br></br>
       I design and implement end-to-end software solutions with a strong focus on backend engineering, system reliability, and clean architecture.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#projects"
          className="px-6 py-3 rounded-lg bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold shadow-lg transition"
        >
          View My Work
        </a>

        <a
          href="#contact"
          className="px-6 py-3 rounded-lg border border-[#7C3AED40] text-[#A78BFA] hover:bg-[#1A1328] transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
