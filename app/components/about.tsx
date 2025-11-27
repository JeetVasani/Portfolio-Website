export default function AboutSkillsSection() {
  return (
    <section
      id="about"
      className="w-full bg-[#0F0A1A] text-white py-14 md:py-20 px-4 sm:px-6 flex justify-center"
    >
      <div className="w-full sm:w-[90%] md:w-[85%] lg:w-[80%] max-w-6xl mx-auto">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
          About & Skills
        </h2>

        {/* CODE BLOCK */}
        <div className="bg-[#1A1328] rounded-xl border border-[#7C3AED40] p-4 sm:p-6 shadow-lg overflow-x-auto">
          <pre className="font-mono text-xs sm:text-sm md:text-base leading-6 whitespace-pre-wrap min-w-full text-gray-200">

{`class `}
<span className="text-[#7C3AED]">JeetVasani</span>
{` {

  `}
<span className="text-[#7C3AED]">constructor</span>
{`() {
    this.name = "`}
<span className="text-[#FACC15]">Jeet Vasani</span>
{`";
    this.role = "`}
<span className="text-[#FACC15]">AI Engineer / Full-Stack Developer</span>
{`";
    this.email = "`}
<span className="text-[#FACC15]">vasanijeet21@gmail.com</span>
{`";
    this.location = "`}
<span className="text-[#FACC15]">Mumbai, India</span>
{`";
  }


  `}
<span className="text-[#7C3AED]">experience</span>
{`() {
    return [
      { "`}
<span className="text-[#FACC15]">2024-now</span>
{`": "`}
<span className="text-[#FACC15]">AI Engineer – Independent Projects & MVP Development</span>
{`" },
      { "`}
<span className="text-[#FACC15]">2023-2024</span>
{`": "`}
<span className="text-[#FACC15]">Full-Stack Developer – Academic & Freelance Projects</span>
{`" }
    ];
  }


  `}
<span className="text-[#7C3AED]">education</span>
{`() {
    return [
      { "`}
<span className="text-[#FACC15]">2023-2027</span>
{`": "`}
<span className="text-[#FACC15]">B.E. in Artificial Intelligence & Machine Learning</span>
{`" }
    ];
  }


  `}
<span className="text-[#7C3AED]">skills</span>
{`() {
    return {

      `}
<span className="text-[#22C55E]">languages</span>
{`: [
        "`}
<span className="text-[#FACC15]">Python</span>
{`", "`}
<span className="text-[#FACC15]">JavaScript</span>
{`", "`}
<span className="text-[#FACC15]">TypeScript</span>
{`"
      ],


      `}
<span className="text-[#22C55E]">frameworksAndLibraries</span>
{`: [
        "`}
<span className="text-[#FACC15]">Next.js</span>
{`", "`}
<span className="text-[#FACC15]">Node.js</span>
{`", "`}
<span className="text-[#FACC15]">FastAPI</span>
{`", "`}
<span className="text-[#FACC15]">Tailwind CSS</span>
{`", "`}
<span className="text-[#FACC15]">Streamlit</span>
{`"
      ],


      `}
<span className="text-[#22C55E]">aiAndML</span>
{`: [
        "`}
<span className="text-[#FACC15]">Pandas</span>
{`", "`}
<span className="text-[#FACC15]">NumPy</span>
{`", "`}
<span className="text-[#FACC15]">Scikit-Learn</span>
{`"
      ],


      `}
<span className="text-[#22C55E]">backendAndDatabases</span>
{`: [
        "`}
<span className="text-[#FACC15]">PostgreSQL</span>
{`", "`}
<span className="text-[#FACC15]">MongoDB</span>
{`", "`}
<span className="text-[#FACC15]">REST APIs</span>
{`"
      ],


      `}
<span className="text-[#22C55E]">devopsAndCloud</span>
{`: [
        "`}
<span className="text-[#FACC15]">Git & GitHub</span>
{`", "`}
<span className="text-[#FACC15]">CI/CD Basics</span>
{`", "`}
<span className="text-[#FACC15]">Vercel Deployment</span>
{`"
      ],


      `}
<span className="text-[#22C55E]">tools</span>
{`: [
        "`}
<span className="text-[#FACC15]">VSCode</span>
{`", "`}
<span className="text-[#FACC15]">Postman</span>
{`"
      ]
    };
  }

}`}

          </pre>
        </div>

      </div>
    </section>
  );
}
