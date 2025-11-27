import Header from "./components/header";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Hero from "./components/hero";

export default function Home() {
  return (
    
    <div className = "reveal-animate-main">
    <div className="flex flex-col min-h-screen px-8 bg-background text-foreground">
      <main className="pt-20 space-y-20 flex-grow">    
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
