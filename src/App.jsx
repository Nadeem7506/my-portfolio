import "./App.css";
import { Aboutme } from "./components/About";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Techicons } from "./components/Techicons";
import { BackgroundBeams } from "./components/ui/background-beams";
import { Projects } from "./Projects";

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-gray-900 via-indigo-950 to-black text-white">
      {/* Background should be fixed to screen */}
      <BackgroundBeams />

      {/* Page content above background */}
      <div className="relative z-10 px-6 md:px-32">
        <Hero />
        <Techicons />
        <Aboutme />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
