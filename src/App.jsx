import Header from "./compoments/Header";
import Hero from "./compoments/Hero";
import Technologies from "./compoments/Techstack";
import Projects from "./compoments/Projects";
import Footer from "./compoments/footer";

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
