import Header from "./header/header";
import About from "./about/about";
import Projects from "./projects/projects";
import Contact from "./contact/contact";
import Hero from "./hero/hero";

export default function Home() {
  return (
    
    <div className = "reveal-animate-main">
    <div className="flex flex-col min-h-screen px-8 bg-background text-foreground">
      <main className="pt-20 space-y-20 grow">    
        <Header />
        <Hero />
        <div className="reveal-left-to-right"><About /></div>
        <Projects />
      </main>
      <Contact />
    </div>
    </div>
  );
}
