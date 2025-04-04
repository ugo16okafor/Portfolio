import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/projects";
import Footer from "./components/footer";
import { Analytics } from "@vercel/analytics/react";
import TechList from "./components/Techstack";

function App() {
  return (
    <>
      <Analytics />
      <Header />
      <div className="bg-gray-950">
        <Hero />
      </div>
      <TechList />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
