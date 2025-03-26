import Header from "./components/Header";
import Hero from "./components/Hero";
import Technologies from "./components/Techstack";
import Projects from "./components/projects";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <div className="bg-gray-950">
        <Hero />
      </div>
      <div className="h-screen">
        <Technologies />
      </div>
      <div className="h-screen">
        <Projects />
      </div>
      <Footer />
    </>
  );
}

export default App;
